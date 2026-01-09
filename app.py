import os
import base64
import tempfile

from fastapi import FastAPI, UploadFile, File, Request
from fastapi.responses import HTMLResponse, JSONResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

from groq import Groq # type: ignore
from gtts import gTTS # type: ignore
from dotenv import load_dotenv

# --------------------------------------------------
# Load environment variables
# --------------------------------------------------
load_dotenv()
GROQ_API_KEY = os.getenv("GROQ_API_KEY")

if not GROQ_API_KEY:
    raise ValueError("Please set your GROQ_API_KEY environment variable.")

# --------------------------------------------------
# App initialization
# --------------------------------------------------
app = FastAPI()

# ✅ STATIC FILES (THIS WAS YOUR ISSUE)
app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")
client = Groq(api_key=GROQ_API_KEY)

# --------------------------------------------------
# Conversation memory
# --------------------------------------------------
conversation_history = [
    {
        "role": "system",
        "content": (
            "You are a compassionate, patient, and encouraging Speech Therapist. "
            "Your goal is to help the user overcome stammering (stuttering) and mispronunciation.\n\n"
            "Your method:\n"
            "1. Listen carefully to the user's input.\n"
            "2. If the user stammers or mispronounces, gently point it out and ask them to repeat slowly.\n"
            "3. Conduct short 'Repeat After Me' exercises.\n"
            "4. Focus on breathing and pacing.\n"
            "5. Keep responses concise (2–3 sentences).\n"
            "6. Be encouraging and celebrate small wins.\n\n"
            "Start by asking the user to introduce themselves."
        )
    }
]

# --------------------------------------------------
# Routes
# --------------------------------------------------
@app.get("/", response_class=HTMLResponse)
async def home(request: Request):
    return templates.TemplateResponse(
        "index.html",
        {"request": request}
    )

@app.post("/process-audio")
async def process_audio(file: UploadFile = File(...)):
    try:
        # Save input audio temporarily
        with tempfile.NamedTemporaryFile(delete=False, suffix=".webm") as temp_input:
            temp_input.write(await file.read())
            temp_input_path = temp_input.name

        # Transcription
        with open(temp_input_path, "rb") as audio_file:
            transcription = client.audio.transcriptions.create(
                file=(temp_input_path, audio_file.read()),
                model="whisper-large-v3-turbo",
                response_format="json",
                language="en"
            )

        user_text = transcription.text.strip()

        if not user_text:
            return JSONResponse({
                "user_text": "",
                "ai_text": "I couldn’t hear you clearly. Let’s try again slowly.",
                "audio_base64": None
            })

        conversation_history.append({
            "role": "user",
            "content": user_text
        })

        # LLM response
        completion = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=conversation_history,
            temperature=0.6,
            max_tokens=250
        )

        ai_text = completion.choices[0].message.content
        conversation_history.append({
            "role": "assistant",
            "content": ai_text
        })

        # Text-to-speech
        tts = gTTS(text=ai_text, lang="en", slow=False)
        with tempfile.NamedTemporaryFile(delete=False, suffix=".mp3") as temp_output:
            tts.save(temp_output.name)
            temp_output_path = temp_output.name

        with open(temp_output_path, "rb") as audio_file:
            audio_base64 = base64.b64encode(audio_file.read()).decode("utf-8")

        # Cleanup
        os.remove(temp_input_path)
        os.remove(temp_output_path)

        return JSONResponse({
            "user_text": user_text,
            "ai_text": ai_text,
            "audio_base64": audio_base64
        })

    except Exception as e:
        return JSONResponse(
            {"error": str(e)},
            status_code=500
        )

# --------------------------------------------------
# Local run (optional)
# --------------------------------------------------
if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app:app", host="0.0.0.0", port=8000, reload=True)
