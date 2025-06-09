import React, { useState } from "react";
import "./Chat.css";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const handleSend = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // 1. Добавляем сообщение пользователя мгновенно
    const userMsg = { id: Date.now(), role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // 2. Подготавливаем "loading" сообщение бота
    const loadingMsg = { id: Date.now() + 1, role: "gigachat", text: "…" };
    setMessages((prev) => [...prev, loadingMsg]);

    // 3. Через задержку заменяем loading на реальный ответ
    setTimeout(async () => {
    const res = await fetch("https://gigachat-web.onrender.com/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: input }),
  });
    const data = await res.json();

      setMessages((prev) =>
        prev.map((m) =>
          m.id === loadingMsg.id ? { ...m, text: data.reply } : m
        )
      );
    }, 1500);
  };

  return (
    <div className="chat-container">
      <h1>GigaChat Web</h1>
      <div className="chat-box">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`message ${msg.role === "user" ? "user" : "gigachat"}`}
          >
            <strong>{msg.role === "user" ? "Вы" : "GigaChat"}:</strong>{" "}
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSend} className="chat-form">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Введите сообщение..."
          autoFocus
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
}
