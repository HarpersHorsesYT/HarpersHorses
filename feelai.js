const OPENROUTER_API_KEY = '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';
const MODEL = 'deepseek/deepseek-r1-0528:free'; // You can swap this for another supported model

async function processEcho() {
  const inputField = document.getElementById('echo-input');
  const outputDiv = document.getElementById('echo-output');
  const userMessage = inputField.value.trim();

  if (!userMessage) {
    outputDiv.textContent = 'Please tell Echo how you feel.';
    return;
  }

  outputDiv.textContent = 'Echo is thinking...';

  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: 'You are EchoAI, a gentle and emotionally intelligent companion who listens and responds with kindness.' },
          { role: 'user', content: userMessage }
        ]
      })
    });

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content || 'Echo couldn’t find the words.';
    outputDiv.textContent = reply;
  } catch (error) {
    console.error('EchoAI error:', error);
    outputDiv.textContent = 'Echo ran into a problem. Try again soon.';
  }

  inputField.value = '';
}