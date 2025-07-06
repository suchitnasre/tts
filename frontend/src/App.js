import React, { useState, useRef, useEffect } from 'react';
import MicRecorder from './components/MicRecorder';
import TranscriptDisplay from './components/TranscriptDisplay';
import axios from 'axios';
import './App.css';

function App() {
  const [messages, setMessages] = useState([]);
  const [listening, setListening] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // 🌗 toggle state
  const synthRef = useRef(window.speechSynthesis);

  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    synthRef.current.speak(utterance);
  };

  const stopSpeaking = () => {
    if (synthRef.current.speaking) {
      synthRef.current.cancel();
    }
  };

  const clearChat = () => {
    stopSpeaking();
    setMessages([]);
  };

  const handleTranscript = async (userInput) => {
    const updatedMessages = [...messages, { role: 'user', content: userInput }];
    setMessages(updatedMessages);

    try {
      const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/chat`, {
        history: updatedMessages.slice(-3),
      });

      const aiText = res.data.response;
      const finalMessages = [...updatedMessages, { role: 'assistant', content: aiText }];
      setMessages(finalMessages);
      speak(aiText);
    } catch (err) {
      console.error("OpenAI API error:", err);
    }
  };

  // 🌗 Theme switch logic
  useEffect(() => {
    document.body.setAttribute('data-theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <div className="container">
      <div className="header-bar">
        <h1 className="title">🎙️ Voice Chat Assistant</h1>
        <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
        </button>
      </div>

      <TranscriptDisplay messages={messages} />

      <div className="button-bar">
        <MicRecorder
          onTranscript={handleTranscript}
          listening={listening}
          setListening={setListening}
        />
        <button className="stop-button" onClick={stopSpeaking}>
          ⛔ Stop Listening
        </button>
        <button className="clear-button" onClick={clearChat}>
          🗑️ Clear Chat
        </button>
      </div>
    </div>
  );
}

export default App;
