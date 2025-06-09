const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// ✅ Разрешаем CORS только для фронта на Vercel
app.use(cors({
  origin: 'https://gigachat-web.vercel.app',  // ⚠️ Укажи ТОЛЬКО свой фронт
  methods: ['GET', 'POST'],
  credentials: true,
}));

app.use(express.json());

// 🔁 Импорт маршрутов
const chatRoutes = require('./routes/chat');
app.use('/api', chatRoutes);

// ✅ Используем переменную окружения или порт по умолчанию
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
