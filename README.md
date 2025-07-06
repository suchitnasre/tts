Voice AI Assistant – Voice Interaction Web App

This is a voice-based AI assistant web application. It allows users to speak into their browser microphone, converts their speech to text, sends it to OpenAI's GPT API, and then responds both as text and spoken voice.

Features

- Voice input using the browser microphone
- Speech-to-text using Web Speech API (in the browser)
- Sends user text to OpenAI GPT-4 API via Python backend
- Text-to-speech response using browser TTS
- Chat interface to view conversation history
- Light/Dark theme toggle
- Stop Speaking and Clear Chat options

Technologies Used:
- Frontend: React.js (JavaScript, CSS)
- Backend: Flask (Python)
- AI Model: OpenAI GPT-4 via API
- Speech: Web Speech API (Browser)
- Styling: Custom CSS


Project Structure:
tts/
├── backend/
│   ├── app.py
│   ├── routes.py
│   ├── openai_api.py
│   ├── .env
│   └── requirements.txt
├── frontend/
│   └── src/
│       ├── App.js
│       ├── App.css
│       └── components/
│           ├── MicRecorder.js
│           ├── TranscriptDisplay.js
│           ├── MicRecorder.css
│           └── TranscriptDisplay.css
│   ├── .env
│   └── package.json
└── README.md


Setup Instructions

1. Clone the Repository:

git clone https://github.com/suchitnasre/tts.git

cd tts



2. Backend Setup (Flask):

cd backend

conda create -n tts python=3.10 -y

conda activate tts

pip install -r requirements.txt

Create a .env file in backend/:

OPENAI_API_KEY=your_openai_api_key

Run the backend server:

python app.py



3. Frontend Setup (React):

cd ../frontend

npm install

Create a .env file in frontend/:

REACT_APP_API_BASE_URL=http://localhost:5000/api

Run the frontend: npm start



How It Works:

1. You click the "Speak" button.

2. Your voice is converted to text in the browser.

3. The text is sent to the Flask backend.

4. The backend sends it to OpenAI's GPT API.

5. The AI response is returned to the frontend.

6. The response is displayed and spoken using text-to-speech.



Notes:
- This app uses the browser's Web Speech API, so it works best in Chrome or Edge.

- You have to insert OpenAI API key and only used in the backend .env file.

