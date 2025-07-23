const express = require('express');
const path = require('path');
const app = express();

// Shfaq index.html kur hapet faqja kryesore "/"
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Mundëson shfaqjen e skedarëve statikë (si CSS, JS etj.)
app.use(express.static(path.join(__dirname, 'public')));

// Përgjigjet ndaj kërkesave POST te /chat
app.post('/chat', express.json(), async (req, res) => {
    const userMessage = req.body.message;
    const reply = `Ti the: "${userMessage}". Unë jam ALUSET Genius, pyet çfarë të duash!`;
    res.json({ reply });
});

// Starton serverin
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
