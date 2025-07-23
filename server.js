const express = require('express');
const path = require('path');
const app = express();

// Shfaq skedaret statikë nga /public
app.use(express.static(path.join(__dirname, 'public')));

// Kur hapet faqja kryesore, dërgo index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Përgjigjje për POST /chat
app.post('/chat', express.json(), async (req, res) => {
  const userMessage = req.body.message;
  const reply = `Ti the: "${userMessage}". Unë jam ALUSET Genius, pyet çfarë të duash!`;
  res.json({ reply });
});

// Starton serverin
const PORT = process.env.PORT || 3000;

