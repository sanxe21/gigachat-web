import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Chat.css';

function Chat() {
  const [message, setMessage] = useState('');
  const [history, setHistory] = useState([]);
  const [typingMessage, setTypingMessage] = useState(null);
  const [typingIndex, setTypingIndex] = useState(0);

  const fetchHistory = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/history');
      setHistory(res.data.history || []);
    } catch (error) {
      console.error('Ошибка получения истории:', error);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const sendMessage = async () => {
    if (!message.trim()) return;
    console.log('Отправка сообщения:', message);

    // Отправляем запрос без немедленного добавления в историю
    try {
      const res = await axios.post('http://localhost:3000/api/chat', { message });
      console.log('Ответ от сервера:', res.data);

      // Обновляем историю сразу после ответа
      setHistory(res.data.history);

      // Начинаем анимацию набора текста для последнего ответа
      const assistantMessage = res.data.history.findLast(msg => msg.role === 'assistant');
      if (assistantMessage) {
        setTypingMessage(assistantMessage);
        setTypingIndex(0);
        const fullText = assistantMessage.content;
        const interval = setInterval(() => {
          setTypingIndex((prev) => {
            if (prev >= fullText.length) {
              clearInterval(interval);
              return prev;
            }
            return prev + 1;
          });
        }, 50);
      }
    } catch (error) {
      console.error('Ошибка отправки сообщения:', error.response ? error.response.data : error.message);
    }
  };

  const resetChat = async () => {
    try {
      await axios.post('http://localhost:3000/api/chat', { message: '', reset: true });
      setHistory([]);
      setTypingMessage(null);
      setTypingIndex(0);
    } catch (error) {
      console.error('Ошибка сброса чата:', error);
    }
  };

  const displayHistory = [...history];
  if (typingMessage) {
    displayHistory[displayHistory.length - 1] = {
      ...typingMessage,
      content: typingMessage.content.substring(0, typingIndex),
    };
  }

  return (
    <div className="chat-wrapper">
      <h1>GigaChat Web</h1>
      <div className="chat-history">
        {displayHistory.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            <strong>{msg.role === 'user' ? 'Вы: ' : 'GigaChat: '}</strong>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Введите сообщение"
          onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button onClick={sendMessage}>Отправить</button>
        <button onClick={resetChat}>Очистить чат</button>
      </div>
    </div>
  );
}

export default Chat;