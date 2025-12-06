// Inject chatbot HTML into the page, then load chatbot JS
fetch("chatbot.html")
  .then(response => response.text())
  .then(html => {
    document.body.insertAdjacentHTML("beforeend", html);

    // Now load chatbot JS AFTER elements exist
    const chatbotScript = document.createElement("script");
    chatbotScript.src = "chatbot.js";
    document.body.appendChild(chatbotScript);
  })
  .catch(err => console.error("Chatbot failed to load:", err));
<script src="inject-chatbot.js"></script>
<link rel="stylesheet" href="chatbot.css">
<script src="chatbot.js"></script>
<script src="inject-chatbot.js"></script>
