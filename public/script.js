const form = document.getElementById('chat-form');
const input = document.getElementById('user-input');
const response = document.getElementById('response');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const userMessage = input.value;

  const res = await fetch('/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: userMessage })
  });

  const data = await res.json();
  response.innerText = data.reply;
  input.value = '';
});
