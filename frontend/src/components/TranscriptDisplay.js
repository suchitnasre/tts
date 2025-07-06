import React from 'react';
import './TranscriptDisplay.css';

const TranscriptDisplay = ({ messages }) => {
  return (
    <div className="chat-window">
      {(!messages || messages.length === 0) ? (
        <div className="chat-placeholder">
          👋 Hello! I'm your voice assistant.<br />
          Click “Speak” and start talking to begin the conversation.
        </div>
      ) : (
        messages.map((msg, idx) => (
          <div key={idx} className={`chat-bubble ${msg.role}`}>
            <div className="sender-label">
              {msg.role === 'user' ? '🧑 You' : '🤖 AI'}
            </div>
            <div className="bubble-text">{msg.content}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default TranscriptDisplay;
