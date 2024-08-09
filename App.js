import React, { useState } from 'react';
import './App.css';

function App() {
  const [messages, setMessages] = useState([
    {
      text: 'This is a received message',
      sender: 'received',
      time: '02:58 PM',
    },
    {
      text: 'This is a sent message',
      sender: 'sent',
      time: '02:59 PM',
    },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newMessage.trim() !== '') {
      setMessages([
        ...messages,
        {
          text: newMessage,
          sender: 'sent',
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
        },
      ]);
      setNewMessage('');
    }
  };

  return (
    <div className="container">
      <div className="sidebar"></div>
      <div className="chat-area">
        <div className="header">23BAI1517</div>
        <div className="messages">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`message ${message.sender}`}
            >
              <div className="message-content">{message.text}</div>
              <div className="time">{message.time}</div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="input-area">
        <div className='input-container'>
          <input
            type="text"
            className="input"
            placeholder="Type your message..."
            value={newMessage}
            onChange={handleMessageChange}
          />
          <button
            type="submit"
            className="send-button"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon"
              viewBox="0 0 20 20"
              fill="#007bff"
              transform="rotate(90)"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5.257-2.795a1 1 0 00.707-.293l5.257 2.795a1 1 0 001.169-1.409l-7-14z" />
            </svg>
          </button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default App;

