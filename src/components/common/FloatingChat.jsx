import React from 'react';
import '../../styles/FloatingChat.css';

const FloatingChat = () => {
  return (
    <button className="floating-chat-btn" aria-label="Abrir chat">
      <i className="bi bi-chat-dots-fill"></i>
      <span className="notification-dot"></span>
    </button>
  );
};

export default FloatingChat;
