const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.post('/chat', express.json(), async (req, res) => {
  const userMessage = req.body.message;
  const reply = `Ti the: "${userMessage}". Unë jam ALUSET Genius, pyet çfarë të duash!`;
  res.json({ reply });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
