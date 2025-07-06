import React from 'react';
import './MicRecorder.css';

const MicRecorder = ({ onTranscript, listening, setListening }) => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const handleListen = () => {
    if (!SpeechRecognition) {
      alert("Your browser doesn't support voice recognition.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.continuous = false;

    recognition.onstart = () => setListening(true);
    recognition.onend = () => setListening(false);
    recognition.onerror = () => setListening(false);

    recognition.onresult = (e) => {
      const text = e.results[0][0].transcript;
      onTranscript(text);
    };

    recognition.start();
  };

  return (
    <button
      className={`mic-button ${listening ? 'active' : ''}`}
      onClick={handleListen}
    >
      {listening ? '🛑 Listening...' : '🎤 Speak'}
    </button>
  );
};

export default MicRecorder;
