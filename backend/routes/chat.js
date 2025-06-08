const express = require('express');
const router = express.Router();
const gigachatService = require('../services/gigachatService');

let chatHistory = [];

router.get('/history', (req, res) => {
  res.json({ history: chatHistory });
});

router.post('/chat', async (req, res) => {
  try {
    const { message, reset } = req.body;
    if (reset) {
      chatHistory = [];
      res.json({ history: chatHistory });
      return;
    }
    if (message) {
      chatHistory.push({ role: 'user', content: message }); // Добавляем вопрос пользователя
    }
    const reply = await gigachatService.getGigaChatResponse(message);
    chatHistory.push({ role: 'assistant', content: reply }); // Добавляем ответ
    res.json({ reply, history: chatHistory }); // Возвращаем полную историю
  } catch (error) {
    console.error('Ошибка обработки запроса:', error);
    res.status(500).json({ error: 'Ошибка сервера' });
  }
});

module.exports = router;