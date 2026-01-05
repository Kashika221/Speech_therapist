import os
import time
import wave
import pyaudio
import tempfile
from groq import Groq
from gtts import gTTS
from playsound import playsound
from dotenv import load_dotenv

load_dotenv()

GROQ_API_KEY = os.getenv("GROQ_API_KEY") 

if not GROQ_API_KEY:
    raise ValueError("Please set your GROQ_API_KEY environment variable.")

client = Groq(api_key = GROQ_API_KEY)

FORMAT = pyaudio.paInt16
CHANNELS = 1
RATE = 44100
CHUNK = 1024

THERAPIST_PROMPT = """
You are a compassionate, patient, and encouraging Speech Therapist. 
Your goal is to help the user overcome stammering (stuttering) and mispronunciation.

Your method:
1. Listen carefully to the user's input.
2. If the user stammers or mispronounces, gently point it out and ask them to repeat it slowly.
3. Conduct short "Repeat After Me" exercises.
4. Focus on breathing and pacing (e.g., "Take a deep breath and say this sentence slowly...").
5. Keep your responses concise (2-3 sentences max) so the conversation flows quickly.
6. Be very encouraging. Celebration small victories.

Start by asking the user to introduce themselves and tell you what they want to work on today.
"""

class SpeechTherapist:
    def __init__(self):
        self.conversation_history = [
            {"role": "system", "content": THERAPIST_PROMPT}
        ]
        self.p = pyaudio.PyAudio()

    def record_audio(self, duration = 5):
        print("\n Listening... (Speak now)")
        stream = self.p.open(format=FORMAT, channels=CHANNELS,
                             rate=RATE, input=True,
                             frames_per_buffer=CHUNK)
        frames = []

        for _ in range(0, int(RATE / CHUNK * duration)):
            data = stream.read(CHUNK)
            frames.append(data)

        print("Recording stopped.")
        stream.stop_stream()
        stream.close()

        with tempfile.NamedTemporaryFile(suffix=".wav", delete=False) as temp_audio:
            wf = wave.open(temp_audio.name, 'wb')
            wf.setnchannels(CHANNELS)
            wf.setsampwidth(self.p.get_sample_size(FORMAT))
            wf.setframerate(RATE)
            wf.writeframes(b''.join(frames))
            wf.close()
            return temp_audio.name

    def transcribe_audio(self, filename):
        print("Transcribing...")
        try:
            with open(filename, "rb") as file:
                transcription = client.audio.transcriptions.create(
                    file=(filename, file.read()),
                    model="whisper-large-v3-turbo", 
                    response_format="json",
                    language="en",
                    temperature=0.0
                )
            return transcription.text
        except Exception as e:
            print(f"Error during transcription: {e}")
            return ""

    def get_therapist_response(self, user_text):
        print(" Therapist is thinking...")
        
        self.conversation_history.append({"role": "user", "content": user_text})

        completion = client.chat.completions.create(
            model = "llama-3.3-70b-versatile", 
            messages = self.conversation_history,
            temperature = 0.6,
            max_tokens = 250,
            top_p = 1,
            stream = False,
            stop = None,
        )

        response_text = completion.choices[0].message.content
        self.conversation_history.append({"role": "assistant", "content": response_text})
        return response_text

    def speak_text(self, text):
        print(f" Therapist: {text}")
        
        tts = gTTS(text=text, lang='en', slow=False)
        filename = "response.mp3"
        tts.save(filename)
        
        try:
            playsound(filename)
        except Exception as e:
            print("Error playing sound. Please check audio drivers.")
        
        if os.path.exists(filename):
            os.remove(filename)

    def run_session(self):
        print("--- AI Speech Therapist Initialized ---")
        
        greeting = "Hello! I am your AI speech therapist. I'm here to help you practice. Please introduce yourself."
        self.speak_text(greeting)
        self.conversation_history.append({"role": "assistant", "content": greeting})

        while True:
            try:
                input("Press Enter to start recording your response...")
                audio_file = self.record_audio(duration = 5) 

                user_text = self.transcribe_audio(audio_file)
                print(f"You said: {user_text}")

                if not user_text.strip():
                    print("I didn't hear anything. Let's try again.")
                    continue
                
                if "quit" in user_text.lower() or "exit" in user_text.lower():
                    print("Ending session. Goodbye!")
                    break

                ai_response = self.get_therapist_response(user_text)
                self.speak_text(ai_response)
                
                os.remove(audio_file)

            except KeyboardInterrupt:
                print("\nSession ended manually.")
                break

if __name__ == "__main__":
    app = SpeechTherapist()
    app.run_session()