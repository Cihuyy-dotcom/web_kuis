document.addEventListener('DOMContentLoaded', () => {
    
    // Data dummy 60 soal
    const quizData = [
        // BAB 1: PART OF SPEECH
        {
            tag: "Bab 1: Part of Speech",
            question: "Which of the following words functions as an abstract noun in nursing context?",
            options: [
                { text: "Stethoscope", isCorrect: false, rationale: "Stethoscope is a concrete noun because it can be physically touched and seen." },
                { text: "Pain", isCorrect: true, rationale: "Pain is an abstract noun representing an idea, feeling, or sensation that cannot be physically touched." },
                { text: "Hospital", isCorrect: false, rationale: "Hospital is a concrete noun representing a physical place or building." },
                { text: "Syringe", isCorrect: false, rationale: "Syringe is a concrete medical instrument." }
            ],
            hint: "Pikirkan kata benda yang menyatakan konsep atau sensasi yang tidak berwujud fisik."
        },
        {
            tag: "Bab 1: Part of Speech",
            question: "Identify the regular verb from the options below used in medical documentation:",
            options: [
                { text: "Check - checked", isCorrect: true, rationale: "Checked is formed by adding '-ed', which makes it a regular verb." },
                { text: "Give - gave", isCorrect: false, rationale: "Gave is an irregular past form." },
                { text: "Take - took", isCorrect: false, rationale: "Took is an irregular past form." },
                { text: "See - saw", isCorrect: false, rationale: "Saw is an irregular past form." }
            ],
            hint: "Kata kerja reguler membentuk bentuk lampau dengan akhiran -ed."
        },
        {
            tag: "Bab 1: Part of Speech",
            question: "In the sentence 'The nurse carefully checks the patient's pulse', the word 'carefully' functions as a/an:",
            options: [
                { text: "Adjective", isCorrect: false, rationale: "Adjectives modify nouns, not verbs." },
                { text: "Adverb", isCorrect: true, rationale: "Carefully is an adverb of manner modifying the verb 'checks'." },
                { text: "Noun", isCorrect: false, rationale: "It does not name a person, place, or thing." },
                { text: "Pronoun", isCorrect: false, rationale: "It does not replace a noun." }
            ],
            hint: "Kata yang berakhiran -ly dan menjelaskan bagaimana suatu tindakan dilakukan."
        },
        {
            tag: "Bab 1: Part of Speech",
            question: "Which word represents a proper noun?",
            options: [
                { text: "doctor", isCorrect: false, rationale: "Doctor is a common noun." },
                { text: "hospital", isCorrect: false, rationale: "Hospital is a common noun." },
                { text: "St. Elizabeth Hospital", isCorrect: true, rationale: "St. Elizabeth Hospital is a specific name of a place, written with capital letters, making it a proper noun." },
                { text: "nurse", isCorrect: false, rationale: "Nurse is a common noun." }
            ],
            hint: "Nama spesifik instansi atau orang yang diawali huruf kapital."
        },
        {
            tag: "Bab 1: Part of Speech",
            question: "Which of the following is categorized as an uncountable noun in healthcare contexts?",
            options: [
                { text: "Thermometer", isCorrect: false, rationale: "Thermometer can be counted as one, two, etc." },
                { text: "Water", isCorrect: true, rationale: "Water is an uncountable mass noun." },
                { text: "Pill", isCorrect: false, rationale: "Pill is a countable noun." },
                { text: "Bed", isCorrect: false, rationale: "Bed is a countable noun." }
            ],
            hint: "Benda cair atau zat yang tidak bisa dihitung per satuannya secara langsung."
        },
        {
            tag: "Bab 1: Part of Speech",
            question: "What is the function of an adjective in a sentence?",
            options: [
                { text: "To modify or describe a noun or pronoun", isCorrect: true, rationale: "Adjectives provide descriptive qualities to nouns or pronouns." },
                { text: "To show an action", isCorrect: false, rationale: "Showing action is the function of a verb." },
                { text: "To connect clauses", isCorrect: false, rationale: "Connecting clauses is the function of a conjunction." },
                { text: "To replace a noun", isCorrect: false, rationale: "Replacing a noun is the function of a pronoun." }
            ],
            hint: "Kata yang menjelaskan sifat atau keadaan suatu benda/orang."
        },
        {
            tag: "Bab 1: Part of Speech",
            question: "Which noun represents a group or collection of people or things?",
            options: [
                { text: "Staff", isCorrect: true, rationale: "Staff is a collective noun representing a group of employees or workers." },
                { text: "Blood", isCorrect: false, rationale: "Blood is a material/uncountable noun." },
                { text: "Oxygen", isCorrect: false, rationale: "Oxygen is a material noun." },
                { text: "Nurse", isCorrect: false, rationale: "Nurse is a singular common noun." }
            ],
            hint: "Kata yang menyatakan sekumpulan orang seperti tim atau staf."
        },
        {
            tag: "Bab 1: Part of Speech",
            question: "Identify the irregular verb from the list:",
            options: [
                { text: "Walk", isCorrect: false, rationale: "Walk becomes walked in the past tense (regular)." },
                { text: "Drink", isCorrect: true, rationale: "Drink becomes drank/drunk, making it an irregular verb." },
                { text: "Check", isCorrect: false, rationale: "Check is regular." },
                { text: "Record", isCorrect: false, rationale: "Record is regular." }
            ],
            hint: "Kata kerja yang perubahannya tidak beraturan di bentuk lampau."
        },
        {
            tag: "Bab 1: Part of Speech",
            question: "In 'The patient feels very weak', the word 'weak' functions as a/an:",
            options: [
                { text: "Adjective", isCorrect: true, rationale: "Weak describes the state of the subject (patient), functioning as an adjective." },
                { text: "Adverb", isCorrect: false, rationale: "It does not modify a verb." },
                { text: "Noun", isCorrect: false, rationale: "It is a descriptive word, not a thing." },
                { text: "Verb", isCorrect: false, rationale: "It does not show an action." }
            ],
            hint: "Kata yang menjelaskan kondisi fisik seseorang setelah linking verb 'feels'."
        },
        {
            tag: "Bab 1: Part of Speech",
            question: "Which of the following is a material noun derived from nature?",
            options: [
                { text: "Gold", isCorrect: true, rationale: "Gold is a material noun originating from natural resources." },
                { text: "Happiness", isCorrect: false, rationale: "Happiness is an abstract noun." },
                { text: "Team", isCorrect: false, rationale: "Team is a collective noun." },
                { text: "Doctor", isCorrect: false, rationale: "Doctor is a common noun." }
            ],
            hint: "Bahan atau unsur alam yang berwujud material."
        },

        // BAB 2: ADMISSION TO HOSPITAL
        {
            tag: "Bab 2: Admission to Hospital",
            question: "What is an 'Emergency Admission' in a hospital setting?",
            options: [
                { text: "A planned hospital stay scheduled weeks in advance", isCorrect: false, rationale: "This describes an arranged admission." },
                { text: "Admission resulting from sudden illness or accident needing immediate care", isCorrect: true, rationale: "Emergency admissions occur unexpectedly due to critical conditions like trauma or acute illness." },
                { text: "Routine outpatient check-up", isCorrect: false, rationale: "Outpatient check-ups do not involve hospital admission." },
                { text: "Elective cosmetic surgery", isCorrect: false, rationale: "Cosmetic surgery is planned." }
            ],
            hint: "Masuk rumah sakit karena kondisi mendadak seperti kecelakaan."
        },
        {
            tag: "Bab 2: Admission to Hospital",
            question: "What is the primary purpose of hospital admission?",
            options: [
                { text: "For vacation and relaxation", isCorrect: false, rationale: "Hospitals are for medical care, not vacation." },
                { text: "For observation, investigation, treatment, and nursing care", isCorrect: true, rationale: "Admission allows medical teams to monitor, diagnose, and treat patients." },
                { text: "To buy medical equipment", isCorrect: false, rationale: "Patients do not stay overnight to buy equipment." },
                { text: "To work as a hospital staff", isCorrect: false, rationale: "Admission is for patients, not staff employment." }
            ],
            hint: "Tujuan pasien tinggal di rumah sakit untuk observasi dan pengobatan."
        },
        {
            tag: "Bab 2: Admission to Hospital",
            question: "What does 'Arranged Admissions' mean?",
            options: [
                { text: "Patients who arrive via ambulance unexpectedly", isCorrect: false, rationale: "This refers to emergency admissions." },
                { text: "Patients whose hospital stay is planned beforehand via clinic referral and waiting list", isCorrect: true, rationale: "Arranged admissions are scheduled in advance for non-emergency procedures." },
                { text: "Patients who discharge themselves", isCorrect: false, rationale: "This is discharge against medical advice." },
                { text: "Walk-in patients without any appointment", isCorrect: false, rationale: "Walk-ins are usually urgent or emergency cases." }
            ],
            hint: "Proses masuk yang sudah direncanakan sebelumnya melalui rujukan."
        },
        {
            tag: "Bab 2: Admission to Hospital",
            question: "Where do patients typically register first upon arriving at an Indonesian hospital for admission?",
            options: [
                { text: "TPP (Tempat Pendaftaran Pasien)", isCorrect: true, rationale: "TPP is the designated registration counter for new and existing hospital patients." },
                { text: "Cafeteria", isCorrect: false, rationale: "Cafeteria is for dining." },
                { text: "Pharmacy", isCorrect: false, rationale: "Pharmacy is for picking up prescribed medicines." },
                { text: "Parking lot", isCorrect: false, rationale: "Parking lot is for vehicles." }
            ],
            hint: "Tempat pendaftaran pasien untuk mendapatkan nomor rekam medis."
        },
        {
            tag: "Bab 2: Admission to Hospital",
            question: "In the UK healthcare context mentioned in the module, where are minor illnesses typically treated first?",
            options: [
                { text: "By family doctors in local communities", isCorrect: true, rationale: "In the UK, patients are initially treated by general practitioners (family doctors) before hospital admission." },
                { text: "Directly in major surgical theaters", isCorrect: false, rationale: "Surgical theaters are for major operations." },
                { text: "In university laboratories", isCorrect: false, rationale: "Labs are for research and testing." },
                { text: "At international airports", isCorrect: false, rationale: "Airports have basic clinics, not primary community care." }
            ],
            hint: "Dirawat oleh dokter keluarga terlebih dahulu sebelum dirujuk."
        },
        {
            tag: "Bab 2: Admission to Hospital",
            question: "What document is typically created or retrieved during the hospital admission process?",
            options: [
                { text: "Medical record number / patient file", isCorrect: true, rationale: "Medical records are essential for documenting patient history and treatment plans upon admission." },
                { text: "Driving license", isCorrect: false, rationale: "Driving licenses are issued by transportation authorities." },
                { text: "Shopping receipt", isCorrect: false, rationale: "Shopping receipts are for retail purchases." },
                { text: "Flight ticket", isCorrect: false, rationale: "Flight tickets are for airlines." }
            ],
            hint: "Dokumen rekam medis pasien."
        },
        {
            tag: "Bab 2: Admission to Hospital",
            question: "Which department usually handles sudden trauma and severe injuries in a hospital?",
            options: [
                { text: "Emergency Department (IGD / UGD)", isCorrect: true, rationale: "The emergency department handles acute trauma and life-threatening conditions." },
                { text: "Human Resources", isCorrect: false, rationale: "HR handles staff administration." },
                { text: "Accounting department", isCorrect: false, rationale: "Accounting handles billing and finance." },
                { text: "Laundry department", isCorrect: false, rationale: "Laundry handles linens." }
            ],
            hint: "Unit gawat darurat."
        },
        {
            tag: "Bab 2: Admission to Hospital",
            question: "What is the term for patients awaiting treatment in an arranged admission system?",
            options: [
                { text: "Waiting list", isCorrect: true, rationale: "Patients scheduled for planned admissions are put on a waiting list." },
                { text: "Blacklist", isCorrect: false, rationale: "Blacklist is for prohibited entities." },
                { text: "Tourist list", isCorrect: false, rationale: "Tourists travel for leisure." },
                { text: "Visitor log", isCorrect: false, rationale: "Visitor log tracks hospital guests." }
            ],
            hint: "Daftar tunggu."
        },
        {
            tag: "Bab 2: Admission to Hospital",
            question: "Why is patient identification crucial during hospital admission?",
            options: [
                { text: "To prevent medical errors and ensure patient safety", isCorrect: true, rationale: "Proper identification ensures that treatments and medications are administered to the correct patient." },
                { text: "To test patient eyesight", isCorrect: false, rationale: "Identification is not an eye test." },
                { text: "To check clothing brand", isCorrect: false, rationale: "Clothing brands are irrelevant to clinical admission." },
                { text: "To count hospital beds", isCorrect: false, rationale: "Bed capacity is managed separately." }
            ],
            hint: "Untuk mencegah kesalahan medis dan memastikan keselamatan pasien."
        },
        {
            tag: "Bab 2: Admission to Hospital",
            question: "What follows after a successful hospital admission procedure?",
            options: [
                { text: "Ward placement and initial nursing assessment", isCorrect: true, rationale: "Once admitted, the patient is transferred to their assigned ward for initial nursing evaluation and care." },
                { text: "Immediate court trial", isCorrect: false, rationale: "Hospitals are medical facilities, not courts." },
                { text: "Immediate graduation ceremony", isCorrect: false, rationale: "Graduation is for schools." },
                { text: "Vehicle inspection", isCorrect: false, rationale: "Vehicle inspection is for automobiles." }
            ],
            hint: "Penempatan bangsal dan pengkajian awal oleh perawat."
        },

        // BAB 3: ASKING FOR, OFFERING AND GIVING HELP
        {
            tag: "Bab 3: Asking & Offering Help",
            question: "Which of the following expressions is used to *offer* help to a patient?",
            options: [
                { text: "Could you help me move this bed?", isCorrect: false, rationale: "This is asking for help, not offering." },
                { text: "May I help you adjust your pillow?", isCorrect: true, rationale: "'May I help you...' is a polite expression for offering assistance." },
                { text: "I need your help right now.", isCorrect: false, rationale: "This is a request for help." },
                { text: "Stop helping me.", isCorrect: false, rationale: "This rejects help." }
            ],
            hint: "Frasa yang diawali dengan 'May I...' atau 'Would you like...'"
        },
        {
            tag: "Bab 3: Asking & Offering Help",
            question: "Choose the correct response when accepting help:",
            options: [
                { text: "No, thank you, I can manage.", isCorrect: false, rationale: "This is declining help." },
                { text: "Yes, please, I'd appreciate that.", isCorrect: true, rationale: "This politely accepts offered assistance." },
                { text: "Leave me alone.", isCorrect: false, rationale: "This is rude rejection." },
                { text: "I am busy.", isCorrect: false, rationale: "This is a refusal reason." }
            ],
            hint: "Respon positif saat seseorang menawarkan bantuan."
        },
        {
            tag: "Bab 3: Asking & Offering Help",
            question: "Which auxiliary modal is commonly used in polite requests?",
            options: [
                { text: "Could", isCorrect: true, rationale: "'Could' is used to make polite requests in English." },
                { text: "Must", isCorrect: false, rationale: "'Must' expresses obligation." },
                { text: "Should", isCorrect: false, rationale: "'Should' expresses advice." },
                { text: "Shall", isCorrect: false, rationale: "'Shall' expresses future suggestion or obligation." }
            ],
            hint: "Bentuk sopan dari 'can'."
        },
        {
            tag: "Bab 3: Asking & Offering Help",
            question: "A nurse says to a patient: 'Let me check your blood pressure.' This is an example of:",
            options: [
                { text: "Giving help / offering assistance", isCorrect: true, rationale: "Stating 'Let me...' is a proactive way of offering and giving help." },
                { text: "Asking for help", isCorrect: false, rationale: "The nurse is providing care, not asking for it." },
                { text: "Refusing help", isCorrect: false, rationale: "It is an offer of service." },
                { text: "Complaining", isCorrect: false, rationale: "It is a professional duty statement." }
            ],
            hint: "Menyatakan kesiapan memberikan tindakan keperawatan."
        },
        {
            tag: "Bab 3: Asking & Offering Help",
            question: "Which of the following is a polite way to *ask* for assistance from a colleague?",
            options: [
                { text: "Do this for me now.", isCorrect: false, rationale: "This is a command, not a polite request." },
                { text: "Could you please assist me with this IV line?", isCorrect: true, rationale: "Using 'Could you please...' is polite and professional." },
                { text: "You must help me.", isCorrect: false, rationale: "Too demanding." },
                { text: "I won't help you.", isCorrect: false, rationale: "Unrelated statement." }
            ],
            hint: "Gunakan 'Could you please...' saat meminta tolong rekan kerja."
        },
        {
            tag: "Bab 3: Asking & Offering Help",
            question: "How do you politely decline an offer of help?",
            options: [
                { text: "That's terrible!", isCorrect: false, rationale: "Unrelated." },
                { text: "No, thank you, I can manage it myself.", isCorrect: true, rationale: "This politely declines the offer while maintaining courtesy." },
                { text: "Give it to me!", isCorrect: false, rationale: "Aggressive response." },
                { text: "Yes, do it!", isCorrect: false, rationale: "This accepts help." }
            ],
            hint: "Ucapkan terima kasih namun tolak dengan sopan."
        },
        {
            tag: "Bab 3: Asking & Offering Help",
            question: "Which phrase indicates *giving help*?",
            options: [
                { text: "I'd be happy to help you with your wheelchair.", isCorrect: true, rationale: "Expressing willingness confirms giving help." },
                { text: "Can you help me?", isCorrect: false, rationale: "This is asking for help." },
                { text: "Will you help me later?", isCorrect: false, rationale: "This is requesting help." },
                { text: "I need assistance.", isCorrect: false, rationale: "This is stating a need." }
            ],
            hint: "Menyatakan kesediaan membantu."
        },
        {
            tag: "Bab 3: Asking & Offering Help",
            question: "When a nurse asks 'What can I do for you?', the nurse is:",
            options: [
                { text: "Offering help", isCorrect: true, rationale: "'What can I do for you?' is a standard offering phrase." },
                { text: "Asking for a diagnosis", isCorrect: false, rationale: "Not a diagnostic question." },
                { text: "Refusing treatment", isCorrect: false, rationale: "Not a refusal." },
                { text: "Reporting an incident", isCorrect: false, rationale: "Not an incident report." }
            ],
            hint: "Kalimat tanya terbuka untuk menawarkan bantuan."
        },
        {
            tag: "Bab 3: Asking & Offering Help",
            question: "Which response shows a refusal of help due to being busy?",
            options: [
                { text: "Sorry, I am busy right now, maybe later.", isCorrect: true, rationale: "This politely explains inability to help at the moment." },
                { text: "Sure, let's do it.", isCorrect: false, rationale: "This accepts help." },
                { text: "Thank you so much.", isCorrect: false, rationale: "This accepts help." },
                { text: "I love helping.", isCorrect: false, rationale: "This expresses willingness." }
            ],
            hint: "Permohonan maaf karena sedang sibuk."
        },
        {
            tag: "Bab 3: Asking & Offering Help",
            question: "Which sentence uses modal 'would' for a polite offer?",
            options: [
                { text: "Would you like some assistance with your medication?", isCorrect: true, rationale: "'Would you like...' is a standard polite offering structure." },
                { text: "Would you shut the door?", isCorrect: false, rationale: "This is a request, not an offer of nursing help." },
                { text: "Would I be a nurse?", isCorrect: false, rationale: "Hypothetical question about profession." },
                { text: "Would it rain?", isCorrect: false, rationale: "Weather speculation." }
            ],
            hint: "Struktur 'Would you like...' untuk menawarkan sesuatu."
        },

        // BAB 4: PARAGRAPH STRUCTURE
        {
            tag: "Bab 4: Paragraph Structure",
            question: "What is the function of a 'Topic Sentence' in a paragraph?",
            options: [
                { text: "To summarize all information and provide the controlling idea", isCorrect: true, rationale: "The topic sentence states the main idea and controlling idea of the paragraph." },
                { text: "To provide a detailed statistic at the very end", isCorrect: false, rationale: "Statistics usually belong in supporting sentences." },
                { text: "To list random thoughts", isCorrect: false, rationale: "Paragraphs require cohesive structure, not random thoughts." },
                { text: "To conclude the essay", isCorrect: false, rationale: "Conclusion is the role of the concluding sentence." }
            ],
            hint: "Kalimat utama yang merangkum ide pokok paragraf."
        },
        {
            tag: "Bab 4: Paragraph Structure",
            question: "What are 'Supporting Sentences' designed to do?",
            options: [
                { text: "Provide examples, reasons, and descriptions to back up the topic sentence", isCorrect: true, rationale: "Supporting sentences elaborate on and explain the main idea established in the topic sentence." },
                { text: "Introduce brand new unrelated topics", isCorrect: false, rationale: "Supporting sentences must stay on topic." },
                { text: "Only state the author's name", isCorrect: false, rationale: "Author names are metadata, not paragraph support." },
                { text: "End the chapter", isCorrect: false, rationale: "Ending chapters is for concluding sections." }
            ],
            hint: "Kalimat penjelas yang memberikan contoh atau alasan."
        },
        {
            tag: "Bab 4: Paragraph Structure",
            question: "Which transition word is commonly used to introduce a 'Concluding Sentence'?",
            options: [
                { text: "In conclusion / Therefore", isCorrect: true, rationale: "Words like 'In conclusion', 'Therefore', and 'Overall' signal the final summary sentence." },
                { text: "First of all", isCorrect: false, rationale: "Used for opening or first points." },
                { text: "Furthermore", isCorrect: false, rationale: "Used for adding supporting points." },
                { text: "In addition", isCorrect: false, rationale: "Used for continuation." }
            ],
            hint: "Kata transisi kesimpulan seperti 'In conclusion' atau 'Therefore'."
        },
        {
            tag: "Bab 4: Paragraph Structure",
            question: "How many supporting sentences typically make up a well-developed paragraph?",
            options: [
                { text: "2 to 4 sentences", isCorrect: true, rationale: "Standard paragraph body structure usually contains 2 to 4 supporting sentences." },
                { text: "Zero sentences", isCorrect: false, rationale: "A paragraph needs body sentences." },
                { text: "50 sentences", isCorrect: false, rationale: "Too long for a single standard paragraph." },
                { text: "1 sentence only", isCorrect: false, rationale: "Too short to develop an idea fully." }
            ],
            hint: "Biasanya berkisar antara 2 sampai 4 kalimat."
        },
        {
            tag: "Bab 4: Paragraph Structure",
            question: "What should a concluding sentence avoid?",
            options: [
                { text: "Introducing completely new, unmentioned information", isCorrect: true, rationale: "Concluding sentences should summarize, not introduce brand new topics." },
                { text: "Restating the main point", isCorrect: false, rationale: "Restating main points in different words is good practice." },
                { text: "Using transition signals", isCorrect: false, rationale: "Transition signals are encouraged." },
                { text: "Summarizing key ideas", isCorrect: false, rationale: "Summarizing is its primary function." }
            ],
            hint: "Jangan memasukkan informasi baru di kalimat penutup."
        },
        {
            tag: "Bab 4: Paragraph Structure",
            question: "Where is the topic sentence most commonly placed in a paragraph?",
            options: [
                { text: "At the beginning of the paragraph", isCorrect: true, rationale: "The topic sentence usually opens the paragraph to set the direction." },
                { text: "Inside the appendix", isCorrect: false, rationale: "Appendix is at the end of a book." },
                { text: "In the title header", isCorrect: false, rationale: "Title headers are titles, not paragraph sentences." },
                { text: "On the book cover", isCorrect: false, rationale: "Book covers contain titles and authors." }
            ],
            hint: "Biasanya diletakkan di awal paragraf."
        },
        {
            tag: "Bab 4: Paragraph Structure",
            question: "What is the 'controlling idea' within a topic sentence?",
            options: [
                { text: "The specific angle or limitation that focuses the topic", isCorrect: true, rationale: "The controlling idea restricts the topic to a specific point discussed in the paragraph." },
                { text: "The page number of the textbook", isCorrect: false, rationale: "Page numbers are metadata." },
                { text: "The name of the publisher", isCorrect: false, rationale: "Publishers are not part of paragraph structure." },
                { text: "The font size", isCorrect: false, rationale: "Font size is formatting." }
            ],
            hint: "Batasan atau sudut pandang khusus dalam kalimat utama."
        },
        {
            tag: "Bab 4: Paragraph Structure",
            question: "Which of the following sentences acts as a strong topic sentence for a nursing paragraph?",
            options: [
                { text: "Hand hygiene is critical in preventing hospital-acquired infections.", isCorrect: true, rationale: "This clearly states the topic (hand hygiene) and controlling idea (preventing infections)." },
                { text: "Yesterday I ate an apple.", isCorrect: false, rationale: "Too casual and irrelevant to nursing." },
                { text: "Blue is my favorite color.", isCorrect: false, rationale: "Irrelevant to academic or nursing writing." },
                { text: "The car drove fast.", isCorrect: false, rationale: "Unrelated to clinical nursing." }
            ],
            hint: "Pernyataan utama tentang topik keperawatan yang jelas."
        },
        {
            tag: "Bab 4: Paragraph Structure",
            question: "Why is paragraph coherence important?",
            options: [
                { text: "It ensures smooth flow of ideas so readers can easily follow", isCorrect: true, rationale: "Coherence connects sentences logically for clear reader comprehension." },
                { text: "It makes the paper longer", isCorrect: false, rationale: "Length is not the goal of coherence." },
                { text: "It hides spelling mistakes", isCorrect: false, rationale: "Spelling must be checked separately." },
                { text: "It changes the font style", isCorrect: false, rationale: "Font style is digital formatting." }
            ],
            hint: "Agar gagasan mengalir dengan logis dan mudah dipahami."
        },
        {
            tag: "Bab 4: Paragraph Structure",
            question: "Which sentence would most likely be found as a concluding sentence?",
            options: [
                { text: "Overall, proper wound care significantly reduces recovery time.", isCorrect: true, rationale: "It summarizes the main theme using a concluding transition ('Overall')." },
                { text: "First, wash your hands thoroughly.", isCorrect: false, rationale: "This is a supporting or procedural sentence." },
                { text: "Bandages come in various sizes.", isCorrect: false, rationale: "This is a supporting detail." },
                { text: "The nurse entered the room.", isCorrect: false, rationale: "This is a narrative opening." }
            ],
            hint: "Kalimat yang diawali kata rangkuman seperti 'Overall'."
        },

        // BAB 5: SIMPLE PRESENT TENSE
        {
            tag: "Bab 5: Simple Present Tense",
            question: "When do we use the Simple Present Tense?",
            options: [
                { text: "To express habits, general truths, and fixed schedules", isCorrect: true, rationale: "Simple present describes routines, permanent situations, and universal truths." },
                { text: "To describe an action happening right this second", isCorrect: false, rationale: "This is Present Continuous." },
                { text: "To talk about last week's surgery", isCorrect: false, rationale: "This is Simple Past." },
                { text: "To plan a vacation for next year", isCorrect: false, rationale: "This is Future." }
            ],
            hint: "Digunakan untuk kebiasaan dan kebenaran umum."
        },
        {
            tag: "Bab 5: Simple Present Tense",
            question: "Choose the correct verbal sentence in Simple Present Tense:",
            options: [
                { text: "The nurse checks the vital signs every morning.", isCorrect: true, rationale: "Subject 'The nurse' (singular) takes verb 'checks' with '-s', and expresses a routine." },
                { text: "The nurse checking vital signs.", isCorrect: false, rationale: "Incomplete verb phrase." },
                { text: "The nurse checked vital signs tomorrow.", isCorrect: false, rationale: "Tense mismatch with 'tomorrow'." },
                { text: "The nurse will checking.", isCorrect: false, rationale: "Grammatically incorrect." }
            ],
            hint: "Subjek tunggal menggunakan verb berakhiran -s/es."
        },
        {
            tag: "Bab 5: Simple Present Tense",
            question: "What is the correct negative form of 'The doctor works in the ICU'?",
            options: [
                { text: "The doctor does not work in the ICU.", isCorrect: true, rationale: "Singular subject takes auxiliary 'does not' + base verb 'work'." },
                { text: "The doctor do not work in the ICU.", isCorrect: false, rationale: "'Do not' is used for plural subjects (I, you, we, they)." },
                { text: "The doctor is not work in the ICU.", isCorrect: false, rationale: "Incorrect auxiliary combination." },
                { text: "The doctor working not.", isCorrect: false, rationale: "Grammatically invalid." }
            ],
            hint: "Gunakan 'does not' untuk subjek tunggal ketiga (he/she/it/the doctor)."
        },
        {
            tag: "Bab 5: Simple Present Tense",
            question: "Choose the correct nominal sentence (without action verb) in Simple Present Tense:",
            options: [
                { text: "Nurse Sarah is professional.", isCorrect: true, rationale: "Nominal sentence uses subject + to be (is) + complement." },
                { text: "Nurse Sarah works professional.", isCorrect: false, rationale: "Works is a verb; professional is an adjective." },
                { text: "Nurse Sarah be professional.", isCorrect: false, rationale: "Unconjugated 'be'." },
                { text: "Nurse Sarah professional is.", isCorrect: false, rationale: "Incorrect word order." }
            ],
            hint: "Menggunakan to be (am/is/are) karena tidak ada kata kerja aksi."
        },
        {
            tag: "Bab 5: Simple Present Tense",
            question: "Form a correct interrogative sentence for 'Patients take medicine daily':",
            options: [
                { text: "Do patients take medicine daily?", isCorrect: true, rationale: "Plural subject 'patients' requires auxiliary 'Do' at the beginning." },
                { text: "Does patients take medicine daily?", isCorrect: false, rationale: "'Does' is singular; 'patients' is plural." },
                { text: "Are patients take medicine daily?", isCorrect: false, rationale: "'Are' cannot pair directly with base verb 'take'." },
                { text: "Is patients take medicine daily?", isCorrect: false, rationale: "Subject-verb agreement error." }
            ],
            hint: "Gunakan 'Do' di awal kalimat untuk subjek jamak."
        },
        {
            tag: "Bab 5: Simple Present Tense",
            question: "Which time marker frequently accompanies Simple Present Tense?",
            options: [
                { text: "Always / every day / usually", isCorrect: true, rationale: "Adverbs of frequency and routine markers indicate simple present." },
                { text: "Yesterday / last night", isCorrect: false, rationale: "These are past tense markers." },
                { text: "Tomorrow / next year", isCorrect: false, rationale: "These are future tense markers." },
                { text: "At this exact moment", isCorrect: false, rationale: "This is continuous tense marker." }
            ],
            hint: "Keterangan waktu seperti 'every day' atau 'always'."
        },
        {
            tag: "Bab 5: Simple Present Tense",
            question: "Choose the correct verb form: 'I ___ in the hospital pharmacy.'",
            options: [
                { text: "work", isCorrect: true, rationale: "Subject 'I' takes the base verb 'work' in simple present." },
                { text: "works", isCorrect: false, rationale: "'Works' is used for he/she/it." },
                { text: "working", isCorrect: false, rationale: "'Working' requires a to be verb." },
                { text: "worked", isCorrect: false, rationale: "'Worked' is past tense." }
            ],
            hint: "Subjek 'I' menggunakan kata kerja bentuk dasar (Verb 1)."
        },
        {
            tag: "Bab 5: Simple Present Tense",
            question: "What is the correct interrogative form of 'The patient feels better'?",
            options: [
                { text: "Does the patient feel better?", isCorrect: true, rationale: "Auxiliary 'Does' is used, and the main verb returns to base form 'feel'." },
                { text: "Do the patient feels better?", isCorrect: false, rationale: "'Do' and 'feels' agreement error." },
                { text: "Is the patient feels better?", isCorrect: false, rationale: "Incorrect pairing of 'is' and 'feels'." },
                { text: "Feel the patient better?", isCorrect: false, rationale: "Missing auxiliary verb." }
            ],
            hint: "Gunakan 'Does' dan ubah kata kerja ke bentuk dasar."
        },
        {
            tag: "Bab 5: Simple Present Tense",
            question: "Identify the correct nominal negative sentence:",
            options: [
                { text: "The medicine is not bitter.", isCorrect: true, rationale: "Nominal negative format: Subject + to be + not + complement." },
                { text: "The medicine does not bitter.", isCorrect: false, rationale: "'Bitter' is an adjective, so it needs 'is not', not 'does not'." },
                { text: "The medicine not is bitter.", isCorrect: false, rationale: "Incorrect word order." },
                { text: "The medicine am not bitter.", isCorrect: false, rationale: "Wrong to be form for singular noun." }
            ],
            hint: "To be + not untuk kalimat nominal."
        },
        {
            tag: "Bab 5: Simple Present Tense",
            question: "Which sentence expresses a general scientific truth using Simple Present?",
            options: [
                { text: "The human heart pumps blood throughout the body.", isCorrect: true, rationale: "General biological facts are stated in the simple present tense." },
                { text: "The heart pumped blood yesterday.", isCorrect: false, rationale: "Past tense." },
                { text: "The heart will pump blood tomorrow.", isCorrect: false, rationale: "Future tense." },
                { text: "The heart is pumping blood right now.", isCorrect: false, rationale: "Continuous tense." }
            ],
            hint: "Fakta biologis umum menggunakan simple present."
        },

        // BAB 6: REPORT TEXT
        {
            tag: "Bab 6: Report Text",
            question: "What is the primary social function of a 'Report Text'?",
            options: [
                { text: "To present factual information about a subject generally based on systematic observation", isCorrect: true, rationale: "Report texts convey factual, general information derived from observation and investigation." },
                { text: "To tell a fictional fairy tale", isCorrect: false, rationale: "Fairytales are narrative texts." },
                { text: "To persuade readers to buy a product", isCorrect: false, rationale: "This is advertisement/sales text." },
                { text: "To give step-by-step cooking instructions", isCorrect: false, rationale: "This is procedural text." }
            ],
            hint: "Menyajikan informasi faktual secara umum berdasarkan pengamatan."
        },
        {
            tag: "Bab 6: Report Text",
            question: "What is the generic structure of a Report Text?",
            options: [
                { text: "General classification and Description", isCorrect: true, rationale: "Report text consists of general classification (introductory category) and description (details)." },
                { text: "Orientation, Complication, Resolution", isCorrect: false, rationale: "This is narrative text structure." },
                { text: "Thesis, Arguments, Recommendation", isCorrect: false, rationale: "This is analytical exposition." },
                { text: "Goal, Materials, Steps", isCorrect: false, rationale: "This is procedure text structure." }
            ],
            hint: "Terdiri dari klasifikasi umum (general classification) dan deskripsi (description)."
        },
        {
            tag: "Bab 6: Report Text",
            question: "Which linguistic feature is commonly found in report texts?",
            options: [
                { text: "General nouns and simple present tense", isCorrect: true, rationale: "Report texts discuss general categories using simple present tense." },
                { text: "Past tense and specific personal pronouns like 'I' or 'he'", isCorrect: false, rationale: "Reports are objective and general, not personal or past-oriented." },
                { text: "Future continuous tense exclusively", isCorrect: false, rationale: "Not standard for reports." },
                { text: "Imperative commands like 'mix well'", isCorrect: false, rationale: "Imperatives belong to procedure texts." }
            ],
            hint: "Menggunakan kata benda umum dan simple present tense."
        },
        {
            tag: "Bab 6: Report Text",
            question: "In a report text about 'Nurses', what would the 'General Classification' section typically do?",
            options: [
                { text: "Introduce nurses as healthcare professionals who assist doctors and care for patients", isCorrect: true, rationale: "General classification defines and classifies the subject broadly." },
                { text: "Tell a story about a specific nurse named Jane in 1995", isCorrect: false, rationale: "Reports discuss general classes, not specific individual stories." },
                { text: "Give a recipe for hospital porridge", isCorrect: false, rationale: "Irrelevant to nursing reports." },
                { text: "List movie recommendations", isCorrect: false, rationale: "Irrelevant." }
            ],
            hint: "Memperkenalkan kategori umum objek yang dibahas."
        },
        {
            tag: "Bab 6: Report Text",
            question: "What does the 'Description' part of a report text elaborate on?",
            options: [
                { text: "Parts, qualities, habits, or behaviors of the subject", isCorrect: true, rationale: "Description details specific characteristics, functions, and attributes of the subject." },
                { text: "The author's personal diary entries", isCorrect: false, rationale: "Reports are objective, not diary entries." },
                { text: "Fictional plot twists", isCorrect: false, rationale: "Reports are non-fiction." },
                { text: "Poetic rhyming verses", isCorrect: false, rationale: "Reports use factual prose." }
            ],
            hint: "Merinci bagian, kualitas, atau perilaku objek."
        },
        {
            tag: "Bab 6: Report Text",
            question: "How does a Report Text differ from a Descriptive Text?",
            options: [
                { text: "Report deals with general things/species, while descriptive deals with a specific single object", isCorrect: true, rationale: "Report texts cover general classes (e.g., 'Hospital'), whereas descriptive texts cover specific entities (e.g., 'St. Elizabeth Hospital')." },
                { text: "Report uses future tense only", isCorrect: false, rationale: "False." },
                { text: "Report is always fictional", isCorrect: false, rationale: "Reports are factual." },
                { text: "There is no difference", isCorrect: false, rationale: "They have distinct focuses." }
            ],
            hint: "Report membahas sesuatu secara umum/kategori, bukan satu objek spesifik."
        },
        {
            tag: "Bab 6: Report Text",
            question: "Which sentence is appropriate for a report text about thermometers?",
            options: [
                { text: "A thermometer is a device used to measure temperature.", isCorrect: true, rationale: "This is a factual general statement characteristic of report texts." },
                { text: "My green thermometer fell on the floor yesterday.", isCorrect: false, rationale: "This is a specific personal anecdote, suited for descriptive/narrative." },
                { text: "Buy this thermometer for 50 percent off!", isCorrect: false, rationale: "This is advertisement." },
                { text: "Once upon a time, a thermometer lived in a lab.", isCorrect: false, rationale: "This is a fairy tale." }
            ],
            hint: "Pernyataan definisi faktual secara umum."
        },
        {
            tag: "Bab 6: Report Text",
            question: "What type of verbs are frequently used in report texts to link subjects with their attributes?",
            options: [
                { text: "Relating verbs (is, are, have, has, contain)", isCorrect: true, rationale: "Relating verbs describe properties and classifications in report texts." },
                { text: "Modal verbs of doubt only", isCorrect: false, rationale: "Reports state facts." },
                { text: "Past modal verbs", isCorrect: false, rationale: "Present tense is standard." },
                { text: "Slang action verbs", isCorrect: false, rationale: "Formal scientific language is used." }
            ],
            hint: "Kata kerja penghubung seperti 'is', 'are', 'have'."
        },
        {
            tag: "Bab 6: Report Text",
            question: "Why are scientific or technical terms often included in report texts?",
            options: [
                { text: "To provide accurate, objective classification and description", isCorrect: true, rationale: "Technical terms ensure precision in scientific and informational reports." },
                { text: "To confuse the reader intentionally", isCorrect: false, rationale: "Clarity and accuracy are goals." },
                { text: "To write poetry", isCorrect: false, rationale: "Reports are not poems." },
                { text: "To make it a joke", isCorrect: false, rationale: "Reports are serious informational texts." }
            ],
            hint: "Untuk memberikan akurasi ilmiah."
        },
        {
            tag: "Bab 6: Report Text",
            question: "Which title best suits a Report Text?",
            options: [
                { text: "General Hospitals", isCorrect: true, rationale: "General plural title indicates a report text about the general class of hospitals." },
                { text: "My Visit to St. Stamford Hospital Yesterday", isCorrect: false, rationale: "This is a recount/descriptive text title." },
                { text: "How I Became a Nurse", isCorrect: false, rationale: "This is a personal narrative." },
                { text: "The Day I Got Sick", isCorrect: false, rationale: "This is a personal story." }
            ],
            hint: "Judul yang bersifat umum tanpa merujuk satu objek spesifik."
        },

        // BAB 7: ASKING & GIVING DIRECTION TO HOSPITAL
        {
            tag: "Bab 7: Asking & Giving Direction",
            question: "Which expression is used to *ask for directions* inside a hospital?",
            options: [
                { text: "Excuse me, could you tell me how to get to the radiology department?", isCorrect: true, rationale: "This is a polite inquiry asking for navigation help." },
                { text: "Where is my house?", isCorrect: false, rationale: "Unrelated to hospital navigation." },
                { text: "Do you like radiology?", isCorrect: false, rationale: "This asks for an opinion, not directions." },
                { text: "Give me the radiology map now!", isCorrect: false, rationale: "Too aggressive." }
            ],
            hint: "Gunakan 'Could you tell me how to get to...'"
        },
        {
            tag: "Bab 7: Asking & Giving Direction",
            question: "What does the instruction 'Go straight ahead' mean?",
            options: [
                { text: "Walk or drive forward in a straight line without turning", isCorrect: true, rationale: "Straight ahead means continuing forward without turning left or right." },
                { text: "Turn around immediately", isCorrect: false, rationale: "This means making a U-turn." },
                { text: "Stop walking", isCorrect: false, rationale: "This means halting." },
                { text: "Climb the stairs", isCorrect: false, rationale: "This involves vertical movement." }
            ],
            hint: "Berjalan lurus ke depan."
        },
        {
            tag: "Bab 7: Asking & Giving Direction",
            question: "What does a 'T-junction' refer to in giving directions?",
            options: [
                { text: "A place where one road meets another at a right angle, forming a 'T' shape", isCorrect: true, rationale: "A T-junction is a dead-end intersection where you must turn either left or right." },
                { text: "A hospital cafeteria", isCorrect: false, rationale: "Cafeteria is for food." },
                { text: "An emergency room", isCorrect: false, rationale: "ER is for medical emergencies." },
                { text: "A parking lot barrier", isCorrect: false, rationale: "Barrier is for security." }
            ],
            hint: "Persimpangan berbentuk huruf T."
        },
        {
            tag: "Bab 7: Asking & Giving Direction",
            question: "Which phrase is a polite greeting before asking for directions?",
            options: [
                { text: "Excuse me, good morning...", isCorrect: true, rationale: "Starting with 'Excuse me' is polite and captures attention respectfully." },
                { text: "Hey you!", isCorrect: false, rationale: "Impolite." },
                { text: "Listen to me!", isCorrect: false, rationale: "Bossy and rude." },
                { text: "Silence please!", isCorrect: false, rationale: "Command for quietness." }
            ],
            hint: "Gunakan 'Excuse me...' agar sopan."
        },
        {
            tag: "Bab 7: Asking & Giving Direction",
            question: "What does 'Go past the pharmacy' mean?",
            options: [
                { text: "Walk further beyond the pharmacy location", isCorrect: true, rationale: "'Go past' means walking or moving beyond a specific landmark." },
                { text: "Enter the pharmacy and stay there", isCorrect: false, rationale: "This means stopping inside." },
                { text: "Demolish the pharmacy", isCorrect: false, rationale: "Unrelated." },
                { text: "Buy medicine", isCorrect: false, rationale: "This is a transaction, not navigation." }
            ],
            hint: "Berjalan melewati apotek tanpa berhenti."
        },
        {
            tag: "Bab 7: Asking & Giving Direction",
            question: "Which directional instruction tells you to make a right turn?",
            options: [
                { text: "Turn right at the intersection", isCorrect: true, rationale: "Directly instructs a right turn." },
                { text: "Turn left at the corner", isCorrect: false, rationale: "This is a left turn." },
                { text: "Go straight", isCorrect: false, rationale: "No turn." },
                { text: "Walk backward", isCorrect: false, rationale: "Unusual direction." }
            ],
            hint: "Belok kanan di persimpangan."
        },
        {
            tag: "Bab 7: Asking & Giving Direction",
            question: "What is a 'roundabout' in traffic and location terms?",
            options: [
                { text: "A circular intersection where traffic flows in one direction around a central island", isCorrect: true, rationale: "A roundabout is a circular junction regulating traffic flow." },
                { text: "A straight hallway", isCorrect: false, rationale: "Hallways are linear." },
                { text: "An elevator shaft", isCorrect: false, rationale: "Elevators move vertically." },
                { text: "A staircase", isCorrect: false, rationale: "Stairs are inclined steps." }
            ],
            hint: "Bundaran lalu lintas atau persimpangan melingkar."
        },
        {
            tag: "Bab 7: Asking & Giving Direction",
            question: "Choose the correct response when someone asks you for directions and you know the way:",
            options: [
                { text: "Sure, go straight then turn left at the nurse station.", isCorrect: true, rationale: "This provides clear, step-by-step navigational guidance." },
                { text: "I have no idea where I am.", isCorrect: false, rationale: "This does not give directions." },
                { text: "Go away.", isCorrect: false, rationale: "Rude response." },
                { text: "Medicine is expensive.", isCorrect: false, rationale: "Irrelevant." }
            ],
            hint: "Memberikan petunjuk arah langkah demi langkah."
        },
        {
            tag: "Bab 7: Asking & Giving Direction",
            question: "What does 'crossroads' mean?",
            options: [
                { text: "An intersection where two or more roads cross each other", isCorrect: true, rationale: "Crossroads represent a junction of intersecting paths." },
                { text: "A single dead-end corridor", isCorrect: false, rationale: "Dead-end has no crossing." },
                { text: "A hospital bed", isCorrect: false, rationale: "Hospital furniture." },
                { text: "A surgical tool", isCorrect: false, rationale: "Surgical tool is equipment." }
            ],
            hint: "Perempatan jalan atau persimpangan."
        },
        {
            tag: "Bab 7: Asking & Giving Direction",
            question: "Why are clear directions important in a large hospital?",
            options: [
                { text: "To help patients and visitors find clinics and departments quickly without getting lost", isCorrect: true, rationale: "Clear directions reduce confusion and ensure timely arrival at medical appointments." },
                { text: "To make hallways look decorated", isCorrect: false, rationale: "Directions serve navigational purposes, not decoration." },
                { text: "To test running speed", isCorrect: false, rationale: "Not a race." },
                { text: "To sell hospital maps", isCorrect: false, rationale: "Navigation support is for patient care and guidance." }
            ],
            hint: "Agar pasien dan pengunjung tidak tersesat di rumah sakit."
        }
    ];

    // State Variables
    let currentQuestionIndex = 0;
    let score = 0;
    let selectedOption = null;
    let timerInterval = null;
    let secondsElapsed = 0;

    // Elements
    const welcomeScreen = document.getElementById('welcome-screen');
    const loadingScreen = document.getElementById('loading-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultScreen = document.getElementById('result-screen');
    
    const questionTag = document.getElementById('question-tag');
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const progressIndicator = document.getElementById('progress-indicator');
    const progressBar = document.getElementById('progress-bar');
    
    const hintBox = document.getElementById('hint-box');
    const hintText = document.getElementById('hint-text');
    
    const finalScore = document.getElementById('final-score');
    const timerDisplay = document.getElementById('timer');

    // Upload Elements
    const fileUpload = document.getElementById('file-upload');
    const fileNameDisplay = document.getElementById('file-name-display');
    const generateBtn = document.getElementById('generate-btn');
    
    // Quiz Buttons
    const hintBtn = document.getElementById('hint-btn');
    const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');

    // Inisialisasi awal
    progressIndicator.innerText = `Total ${quizData.length} Soal Tersedia`;

    // Event Listeners: Upload & Generate
    fileUpload.addEventListener('change', function(e) {
        if (e.target.files.length > 0) {
            fileNameDisplay.innerText = e.target.files[0].name;
            fileNameDisplay.classList.add('text-teal-700');
        }
    });

    generateBtn.addEventListener('click', async () => {
        const file = fileUpload.files[0];
        const count = document.getElementById('question-count').value;
        
        if (!file) {
            alert("Mohon unggah file materi terlebih dahulu!");
            return;
        }

        // Tampilkan layar loading
        welcomeScreen.classList.add('hidden');
        loadingScreen.classList.remove('hidden');

        // Siapkan data file dan jumlah soal untuk dikirim ke Python
        const formData = new FormData();
        formData.append("file", file);
        formData.append("question_count", count);

        try {
            // Mengirim request POST ke server FastAPI lokal kita
            const response = await fetch("/api/generate", {
                method: "POST",
                body: formData
            });

            if (!response.ok) {
                throw new Error("Gagal terhubung ke server");
            }

            const result = await response.json();
            
            // Hapus isi array quizData yang lama, dan ganti dengan data dari server
            quizData.length = 0; 
            quizData.push(...result.quizData);

            // Sembunyikan loading dan mulai kuis dengan data baru
            loadingScreen.classList.add('hidden');
            startQuiz();

        } catch (error) {
            console.error(error);
            alert("Terjadi kesalahan saat menghubungi server. Pastikan server Python sudah berjalan.");
            
            // Kembalikan tampilan jika error
            loadingScreen.classList.add('hidden');
            welcomeScreen.classList.remove('hidden');
        }
    });

    // Event Listeners: Quiz
    hintBtn.addEventListener('click', toggleHint);
    nextBtn.addEventListener('click', nextQuestion);
    restartBtn.addEventListener('click', restartToWelcome);

    // Functions
    function startQuiz() {
        quizScreen.classList.remove('hidden');
        
        currentQuestionIndex = 0;
        score = 0;
        secondsElapsed = 0;
        
        startTimer();
        loadQuestion();
    }

    function startTimer() {
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            secondsElapsed++;
            let mins = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
            let secs = (secondsElapsed % 60).toString().padStart(2, '0');
            timerDisplay.innerText = `⏱️ ${mins}:${secs}`;
        }, 1000);
    }

    function loadQuestion() {
        selectedOption = null; 
        nextBtn.disabled = true; 
        hintBox.classList.add('hidden'); 
        
        const oldRationale = document.getElementById('rationale-box');
        if(oldRationale) oldRationale.remove();

        const totalQ = quizData.length;
        const currentQ = quizData[currentQuestionIndex];
        
        questionTag.innerText = currentQ.tag;
        questionText.innerText = currentQ.question;
        hintText.innerText = currentQ.hint;
        progressIndicator.innerText = `Soal ${currentQuestionIndex + 1} / ${totalQ}`;
        
        const progressPercentage = ((currentQuestionIndex) / totalQ) * 100;
        progressBar.style.width = `${progressPercentage}%`;

        if (currentQuestionIndex === totalQ - 1) {
            nextBtn.innerText = "Selesai";
        } else {
            nextBtn.innerText = "Selanjutnya";
        }

        optionsContainer.innerHTML = '';
        currentQ.options.forEach((opt, index) => {
            const btn = document.createElement('button');
            btn.className = 'w-full text-left p-4 rounded-xl border border-slate-200 hover:border-teal-500 hover:bg-teal-50 transition duration-200 font-medium text-slate-700 bg-white mb-3 relative flex items-center justify-between group cursor-pointer';
            
            const textSpan = document.createElement('span');
            textSpan.innerText = opt.text;
            textSpan.className = "pr-6";
            
            const iconSpan = document.createElement('span');
            iconSpan.className = "text-xl absolute right-4 opacity-0 transition-opacity duration-200";
            
            btn.appendChild(textSpan);
            btn.appendChild(iconSpan);
            
            btn.addEventListener('click', () => selectOption(opt, btn, currentQ.options, iconSpan));
            
            optionsContainer.appendChild(btn);
        });
    }

    function selectOption(selectedOpt, btnElement, allOptions, selectedIconSpan) {
        if (selectedOption !== null) return;
        selectedOption = selectedOpt;
        
        const isCorrect = selectedOpt.isCorrect;
        if (isCorrect) score++;

        const buttons = optionsContainer.querySelectorAll('button');
        
        buttons.forEach((btn, idx) => {
            btn.disabled = true; 
            btn.classList.remove('hover:border-teal-500', 'hover:bg-teal-50', 'cursor-pointer'); 
            
            const icon = btn.querySelector('span:last-child');
            icon.classList.remove('opacity-0');

            if (allOptions[idx].isCorrect) {
                btn.classList.add('bg-emerald-50', 'border-emerald-500', 'text-emerald-800');
                btn.classList.remove('border-slate-200', 'text-slate-700');
                icon.innerText = '✅';
            } else if (btn === btnElement && !isCorrect) {
                btn.classList.add('bg-rose-50', 'border-rose-500', 'text-rose-800');
                btn.classList.remove('border-slate-200', 'text-slate-700');
                icon.innerText = '❌';
            } else {
                btn.classList.add('opacity-50');
            }
        });

        const rationaleDiv = document.createElement('div');
        rationaleDiv.id = 'rationale-box';
        rationaleDiv.className = `mt-4 p-4 rounded-xl text-sm border shadow-sm animate-fade-in ${
            isCorrect ? 'bg-emerald-50 border-emerald-200 text-emerald-800' : 'bg-rose-50 border-rose-200 text-rose-800'
        }`;
        rationaleDiv.innerHTML = `
            <div class="font-bold mb-1 ${isCorrect ? 'text-emerald-700' : 'text-rose-700'}">
                ${isCorrect ? '🎉 Benar!' : '💡 Kurang Tepat.'}
            </div>
            <div>${selectedOpt.rationale}</div>
        `;
        optionsContainer.appendChild(rationaleDiv);

        nextBtn.disabled = false;
    }

    function toggleHint() {
        if (hintBox.classList.contains('hidden')) {
            hintBox.classList.remove('hidden');
        } else {
            hintBox.classList.add('hidden');
        }
    }

    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < quizData.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }

    function showResult() {
        clearInterval(timerInterval); 
        quizScreen.classList.add('hidden');
        resultScreen.classList.remove('hidden');
        progressBar.style.width = `100%`;

        const totalQ = quizData.length;
        const percentage = Math.round((score / totalQ) * 100);

        finalScore.innerText = `${score} / ${totalQ}`;
        document.getElementById('percentage-score').innerText = `Nilai: ${percentage}%`;
        
        let mins = Math.floor(secondsElapsed / 60).toString().padStart(2, '0');
        let secs = (secondsElapsed % 60).toString().padStart(2, '0');
        document.getElementById('time-spent').innerText = `Diselesaikan dalam: ${mins} menit ${secs} detik`;

        const msgElement = document.getElementById('result-message');
        if (percentage >= 90) {
            msgElement.innerText = "Luar biasa! Pemahaman Anda tentang materi Keperawatan sangat solid.";
        } else if (percentage >= 70) {
            msgElement.innerText = "Kerja bagus! Anda sudah memahami sebagian besar materi dengan baik.";
        } else if (percentage >= 50) {
            msgElement.innerText = "Cukup baik, tapi masih ada beberapa konsep yang perlu diulang.";
        } else {
            msgElement.innerText = "Jangan menyerah! Silakan baca kembali modul materi dan coba lagi.";
        }
    }

    function restartToWelcome() {
        resultScreen.classList.add('hidden');
        welcomeScreen.classList.remove('hidden');
        fileUpload.value = '';
        fileNameDisplay.innerText = 'Klik untuk unggah file';
        fileNameDisplay.classList.remove('text-teal-700');
        progressBar.style.width = `0%`;
        progressIndicator.innerText = `Total ${quizData.length} Soal Tersedia`;
    }
});