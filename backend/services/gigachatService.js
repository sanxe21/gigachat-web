const { GigaChat } = require('gigachat-node');
const { Agent } = require('https');

const httpsAgent = new Agent({ rejectUnauthorized: false }); // Отключение проверки сертификатов

const getGigaChatResponse = async (message) => {
  const apiKey = process.env.GIGACHAT_API_KEY;
  console.log('API Key:', apiKey);
  if (!apiKey) {
    throw new Error('GIGACHAT_API_KEY не настроен в .env');
  }

  const client = new GigaChat({ 
    clientSecretKey: apiKey, // Ключ авторизации в base64
    isIgnoreTSL: true, // Игнорирование сертификатов
    isPersonal: true, // Для физических лиц
    autoRefreshToken: true, // Автоматическое обновление токена
    httpsAgent: httpsAgent,
  });

  try {
    await client.createToken(); // Получение токена
    const response = await client.completion({
      model: 'GigaChat:latest',
      messages: [{ role: 'user', content: message }],
    });
    console.log('Ответ от GigaChat:', response);
    return response.choices[0]?.message.content || 'Нет ответа от GigaChat';
  } catch (error) {
    console.error('Ошибка запроса к GigaChat:', error);
    throw error;
  }
};

module.exports = { getGigaChatResponse };