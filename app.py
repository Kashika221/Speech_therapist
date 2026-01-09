import os
import base64
import tempfile
from fastapi import FastAPI, UploadFile, File, Request, Form
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles
from groq import Groq
from gtts import gTTS
from dotenv import load_dotenv
from pymongo import MongoClient
import datetime

load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")
MONGO_URI = os.getenv("MONGO_URI")

if not GROQ_API_KEY:
    raise ValueError("Please set your GROQ_API_KEY environment variable.")
if not MONGO_URI:
    raise ValueError("Please set your MONGO_URI environment variable.")

app = FastAPI()
client = Groq(api_key = GROQ_API_KEY)
templates = Jinja2Templates(directory="templates")


mongo_client = MongoClient(MONGO_URI)
db = mongo_client["speech_therapy_db"]   
chat_collection = db["conversations"]

conversation_history = [
    {
        "role" : "system", 
        "content" : """You are a compassionate, patient, and encouraging Speech Therapist. 
Your goal is to help the user overcome stammering (stuttering) and mispronunciation.

Your method:
1. Listen carefully to the user's input.
2. If the user stammers or mispronounces, gently point it out and ask them to repeat it slowly.
3. Conduct short "Repeat After Me" exercises.
4. Focus on breathing and pacing (e.g., "Take a deep breath and say this sentence slowly...").
5. Keep your responses concise (2-3 sentences max) so the conversation flows quickly.
6. Be very encouraging. Celebration small victories.

Start by asking the user to introduce themselves and tell you what they want to work on today."""
    }
]

@app.get("/", response_class = HTMLResponse)
async def read_root(request : Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.post("/process-audio")
async def process_audio(user_id : str = Form(...), file : UploadFile = File(...)):
    
    with tempfile.NamedTemporaryFile(delete = False, suffix = ".webm") as temp_input:
        temp_input.write(await file.read())
        temp_input_path = temp_input.name

    try:
        with open(temp_input_path, "rb") as audio_file:
            transcription = client.audio.transcriptions.create(
                file=(temp_input_path, audio_file.read()),
                model = "whisper-large-v3-turbo",
                response_format = "json",
                language = "en"
            )
        user_text = transcription.text

        user_record = chat_collection.find_one({"user_id" : user_id})
        messages = [conversation_history]
        if user_record and "history" in user_record:
            messages.extend(user_record["history"])
        messages.append({"role" : "user", "content" : user_text})
        
        if not user_text.strip():
            return JSONResponse({"user_text" : "", "ai_text": "I couldn't hear you.", "audio_base64" : None})

        conversation_history.append({"role" : "user", "content" : user_text})
        
        completion = client.chat.completions.create(
            model = "llama-3.3-70b-versatile",
            messages = conversation_history,
            temperature = 0.6,
            max_tokens = 250
        )
        ai_response = completion.choices[0].message.content
        conversation_history.append({"role" : "assistant", "content" : ai_response})

        new_interaction = [
            {"role": "user", "content": user_text, "timestamp": datetime.datetime.now()},
            {"role": "assistant", "content": ai_response, "timestamp": datetime.datetime.now()}
        ]
        chat_collection.update_one(
            {"user_id": user_id},
            {"$push": {"history": {"$each": new_interaction}}},
            upsert=True  
        )

        tts = gTTS(text = ai_response, lang = 'en', slow = False)
        with tempfile.NamedTemporaryFile(delete = False, suffix = ".mp3") as temp_output:
            tts.save(temp_output.name)
            temp_output_path = temp_output.name

        with open(temp_output_path, "rb") as audio_file:
            audio_base64 = base64.b64encode(audio_file.read()).decode('utf-8')

        os.remove(temp_input_path)
        os.remove(temp_output_path)

        return JSONResponse({
            "user_text" : user_text,
            "ai_text" : ai_response,
            "audio_base64" : audio_base64
        })

    except Exception as e:
        return JSONResponse({"error" : str(e)}, status_code = 500)
    
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host = "0.0.0.0", port = 8000)