# AI Speech Therapist (Powered by Groq)

An interactive, voice-based application designed to help users overcome speech impediments such as stammering, stuttering, and mispronunciation.

This tool uses **Groq's** ultra-fast API to perform real-time speech-to-text (Whisper) and text generation (Llama 3), acting as a compassionate digital therapist that listens to your voice and provides audible feedback and exercises.

## Features

* **Real-time Speech Recognition:** Uses `whisper-large-v3-turbo` via Groq for high-accuracy transcription.
* **Therapeutic Persona:** Powered by `llama3-70b`, the AI detects speech patterns and offers encouraging feedback, breathing exercises, and tongue twisters.
* **Voice Response:** Converts the AI's textual advice into spoken audio using Google Text-to-Speech (gTTS).
* **Interactive Session:** A loop of listening, analyzing, and speaking to simulate a real therapy session.

## Prerequisites

* **Python 3.8+** installed on your system.
* A **Groq API Key**. You can get one for free [here](https://console.groq.com/).
* A working **microphone** and **speakers**.

## Installation

1. **Clone this repository** (or create a folder for your project):
```bash
mkdir speech-therapist
cd speech-therapist

```


2. **Create a Virtual Environment** (Recommended):
```bash
python -m venv venv
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

```


3. **Install Python Dependencies**:
```bash
pip install groq pyaudio gTTS playsound==1.2.2

```


> **Note on PyAudio:** If `pip install pyaudio` fails:


> * **Mac:** Run `brew install portaudio` first.
> * **Linux:** Run `sudo apt-get install python3-pyaudio portaudio19-dev`.
> * **Windows:** Usually installs fine, but if not, download the `.whl` file specific to your Python version.
> 
> 



## Configuration

You need to set your Groq API key as an environment variable so the script can access it securely.

### Mac/Linux

```bash
export GROQ_API_KEY="gsk_your_actual_api_key_here"

```

### Windows (PowerShell)

```powershell
$env:GROQ_API_KEY="gsk_your_actual_api_key_here"

```

*(Alternatively, you can hardcode the key in the script, but this is not recommended for security).*

## Usage

1. Run the main script:
```bash
python app.py

```


2. The AI will greet you via the speakers.
3. **Press Enter** when you are ready to speak.
4. Speak into your microphone for **5 seconds** (or adjust the duration in the code).
5. Wait a moment for the AI to process and respond with audio.
6. To exit, say "Quit" or "Exit" during your turn.

## How It Works (Architecture)

1. **Input:** The script uses `PyAudio` to record a WAV file.
2. **STT (Speech-to-Text):** The audio is sent to Groq's `whisper-large-v3-turbo` model to convert speech into text.
3. **Processing:** The text is sent to the LLM (`llama3-70b-8192`) with a "System Prompt" instructing it to act as a therapist. It looks for hesitations in the text (e.g., "h-h-hello").
4. **TTS (Text-to-Speech):** The LLM's text response is converted to MP3 using `gTTS`.
5. **Output:** The script plays the MP3 file using `playsound`.

## Disclaimer

This tool is a demonstration of AI capabilities and is **not** a replacement for a certified Speech-Language Pathologist (SLP). It should be used for casual practice and self-improvement only. If you have a severe speech impediment, please consult a medical professional.

## Troubleshooting

* **Error: `Module not found: playsound**`: Ensure you installed version `1.2.2` specifically (`pip install playsound==1.2.2`), as newer versions sometimes have compatibility issues on Windows.
* **Error: `PyAudio` failed to install**: See the "Installation" section regarding `portaudio`.
* **No Audio Output**: Check your system's default audio output device.

## Next Steps

* [ ] Implement Voice Activity Detection (VAD) to stop recording automatically when you stop speaking.
* [ ] Add a GUI (using Streamlit or Tkinter) for a visual interface.
* [ ] Save session logs to a text file to track progress over time.
