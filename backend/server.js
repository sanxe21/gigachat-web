require('dotenv').config(); // Загружает .env
const express = require('express');
const cors = require('cors');
const chatRoutes = require('./routes/chat');

const app = express();
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use('/api', chatRoutes);

const PORT = process.env.PORT || 10000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.post('/api/chat', (req, res) => {
  const { message } = req.body;
  // Логика обработки сообщения
  res.json({ history: [{ role: 'assistant', content: `Ответ на: ${message}` }] });
});