import os
import io
import json
import time

import uvicorn
import PyPDF2

from fastapi import FastAPI, File, UploadFile, Form
from fastapi.middleware.cors import CORSMiddleware
from google import genai
from google.genai import types


app = FastAPI(title="AI Quiz Generator")

api_key = os.getenv("GEMINI_API_KEY")

if not api_key:
    raise RuntimeError(
        "GEMINI_API_KEY belum diatur. "
        "Silakan atur API key di environment variable."
    )

client = genai.Client(api_key=api_key)

MODELS = [
    "gemini-3.8-flash",
    "gemini-3.5-flash-lite"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


def extract_text(file_bytes, filename):
    text = ""

    if filename.lower().endswith(".pdf"):
        pdf_reader = PyPDF2.PdfReader(
            io.BytesIO(file_bytes)
        )

        for page in pdf_reader.pages:
            extracted = page.extract_text()

            if extracted:
                text += extracted + "\n"

    else:
        text = file_bytes.decode("utf-8-sig")

    return text


def generate_with_retry(prompt):
    last_error = None

    for model_name in MODELS:
        for attempt in range(3):
            try:
                print(
                    f"Menggunakan model {model_name}, "
                    f"percobaan {attempt + 1}/3..."
                )

                response = client.models.generate_content(
                    model=model_name,
                    contents=prompt,
                    config=types.GenerateContentConfig(
                        response_mime_type="application/json",
                        temperature=0.4
                    )
                )

                if response.text:
                    return response.text

                raise ValueError(
                    "Gemini menghasilkan jawaban kosong."
                )

            except Exception as e:
                last_error = e
                error_message = str(e).lower()

                temporary_errors = [
                    "503",
                    "429",
                    "500",
                    "502",
                    "504",
                    "unavailable",
                    "resource_exhausted",
                    "internal",
                    "deadline_exceeded"
                ]

                is_temporary = any(
                    error in error_message
                    for error in temporary_errors
                )

                if is_temporary:
                    if attempt < 2:
                        wait_seconds = 2 ** (attempt + 1)

                        print(
                            f"Terjadi gangguan sementara. "
                            f"Mencoba lagi dalam "
                            f"{wait_seconds} detik..."
                        )

                        time.sleep(wait_seconds)

                    continue

                if (
                    "404" in error_message
                    or "not found" in error_message
                ):
                    print(
                        f"Model {model_name} tidak tersedia. "
                        "Mencoba model berikutnya..."
                    )
                    break

                raise

    raise RuntimeError(
        f"Semua model gagal digunakan. Error terakhir: {last_error}"
    )


@app.get("/")
async def home():
    return {
        "status": "success",
        "message": "AI Quiz Generator API aktif"
    }


@app.get("/api/health")
async def health():
    return {
        "status": "success",
        "message": "Server Python berjalan"
    }


@app.post("/api/generate")
async def generate_quiz(
    file: UploadFile = File(...),
    question_count: int = Form(10)
):
    try:
        if question_count < 1 or question_count > 50:
            return {
                "status": "error",
                "message": "Jumlah soal harus antara 1 sampai 50."
            }

        if not file.filename:
            return {
                "status": "error",
                "message": "Nama file tidak ditemukan."
            }

        filename = file.filename.lower()

        if not filename.endswith((".pdf", ".txt")):
            return {
                "status": "error",
                "message": "Format file harus PDF atau TXT."
            }

        print(
            f"Menerima file: {file.filename} "
            f"untuk {question_count} soal..."
        )

        file_bytes = await file.read()

        if not file_bytes:
            return {
                "status": "error",
                "message": "File yang diunggah kosong."
            }

        materi_teks = extract_text(
            file_bytes,
            file.filename
        )

        if not materi_teks.strip():
            return {
                "status": "error",
                "message": (
                    "Teks dalam file kosong atau tidak dapat dibaca. "
                    "Pastikan PDF memiliki teks yang bisa diekstrak."
                )
            }

        materi_teks = materi_teks[:30000]

        print(
            "Teks berhasil diekstrak. "
            "Mengirim materi ke Gemini AI..."
        )

        prompt = f"""
Kamu adalah pembuat soal kuis profesional.

Baca materi berikut dan buat tepat {question_count} soal pilihan ganda.

Ketentuan:
1. Soal harus sesuai dengan materi.
2. Gunakan bahasa yang sesuai dengan materi.
3. Setiap soal memiliki empat pilihan jawaban.
4. Setiap soal hanya memiliki satu jawaban benar.
5. Jawaban benar memiliki isCorrect bernilai true.
6. Jawaban salah memiliki isCorrect bernilai false.
7. Setiap pilihan memiliki rationale.
8. Setiap soal memiliki hint.
9. Jangan menambahkan teks di luar JSON.

Kembalikan JSON array dengan format berikut:

[
  {{
    "tag": "Topik Materi",
    "question": "Pertanyaan?",
    "options": [
      {{
        "text": "Opsi A",
        "isCorrect": true,
        "rationale": "Penjelasan jawaban"
      }},
      {{
        "text": "Opsi B",
        "isCorrect": false,
        "rationale": "Penjelasan jawaban"
      }},
      {{
        "text": "Opsi C",
        "isCorrect": false,
        "rationale": "Penjelasan jawaban"
      }},
      {{
        "text": "Opsi D",
        "isCorrect": false,
        "rationale": "Penjelasan jawaban"
      }}
    ],
    "hint": "Petunjuk singkat"
  }}
]

Materi:
{materi_teks}
"""

        output_text = generate_with_retry(prompt)
        quiz_data = json.loads(output_text)

        if not isinstance(quiz_data, list):
            raise ValueError(
                "Hasil AI bukan JSON array."
            )

        if len(quiz_data) != question_count:
            raise ValueError(
                f"Jumlah soal yang dihasilkan adalah "
                f"{len(quiz_data)}, seharusnya {question_count}. "
                "Silakan coba kembali."
            )

        for index, soal in enumerate(quiz_data, start=1):
            if not isinstance(soal, dict):
                raise ValueError(
                    f"Struktur soal nomor {index} tidak valid."
                )

            options = soal.get("options")

            if not isinstance(options, list) or len(options) != 4:
                raise ValueError(
                    f"Soal nomor {index} harus memiliki "
                    "empat pilihan jawaban."
                )

            correct_count = sum(
                option.get("isCorrect") is True
                for option in options
                if isinstance(option, dict)
            )

            if correct_count != 1:
                raise ValueError(
                    f"Soal nomor {index} harus memiliki "
                    "tepat satu jawaban benar."
                )

        print("Kuis berhasil dibuat!")

        return {
            "status": "success",
            "quizData": quiz_data
        }

    except json.JSONDecodeError:
        print("Gemini menghasilkan JSON yang tidak valid.")

        return {
            "status": "error",
            "message": (
                "Format jawaban AI tidak valid. "
                "Silakan coba buat kuis kembali."
            )
        }

    except Exception as e:
        print(
            f"Terjadi kesalahan: {type(e).__name__}: {e}"
        )

        return {
            "status": "error",
            "message": (
                f"Gagal membuat kuis: {type(e).__name__}: {e}"
            )
        }

    finally:
        await file.close()


if __name__ == "__main__":
    uvicorn.run(
        app,
        host="127.0.0.1",
        port=8000
    )