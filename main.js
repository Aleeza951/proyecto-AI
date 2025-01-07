async function sendMessage() {
    const userInput = document.getElementById("user-input");
    const chatWindow = document.getElementById("chat-window");
  
    if (userInput.value.trim() === "") return;
  
    // Show user's message in the chat window
    const userMessage = document.createElement("div");
    userMessage.className = "user-message";
    userMessage.textContent = userInput.value;
    chatWindow.appendChild(userMessage);
  
    // Clear input field
    const inputContent = userInput.value;
    userInput.value = "";
  
    // Show bot thinking
    const botMessage = document.createElement("div");
    botMessage.className = "bot-message";
    botMessage.textContent = "Thinking...";
    chatWindow.appendChild(botMessage);
  
    try {
      const response = await fetch("https://api.openai.com/v1/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer YOUR_API_KEY_HERE",
        },
        body: JSON.stringify({
          model: "text-davinci-003",
          prompt: inputContent,
          max_tokens: 150,
        }),
      });
  
      const data = await response.json();
      botMessage.textContent = data.choices[0].text.trim();
    } catch (error) {
      botMessage.textContent = "Sorry, there was an error. Try again.";
    }
  
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }  
  