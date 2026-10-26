AI Quiz Generator — deployment notes

File utama:
- main.py: backend FastAPI + Gemini
- index.html, style.css, script.js: frontend
- requirements.txt: dependensi Python

Environment variable yang wajib diatur pada layanan hosting:
- GEMINI_API_KEY = API key Gemini (jangan ditaruh di frontend atau repository publik)

Run command:
uvicorn main:app --host 0.0.0.0 --port $PORT

Frontend dan backend disajikan dari satu layanan. script.js memakai endpoint relatif /api/generate.
Model yang dikonfigurasi di main.py: gemini-3.8-flash dan gemini-3.5-flash-lite.
