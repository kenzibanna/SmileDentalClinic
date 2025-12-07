// chatbot.js
function initializeChatbot() {
    const icon = document.getElementById("chatbot-icon");
    const windowEl = document.getElementById("chatbot-window");
    const sendBtn = document.getElementById("chatbot-send");
    const input = document.getElementById("chatbot-text");
    const messages = document.querySelector(".chatbot-messages");

    if (!icon || !windowEl) return;

    // Toggle visibility
    icon.addEventListener("click", () => windowEl.classList.toggle("open"));

    // Auto greeting
    setTimeout(() => botMessage("Hello! 👋 I'm here to help with appointments, services, and clinic info."), 1500);

    sendBtn.addEventListener("click", sendMessage);
    input.addEventListener("keypress", e => { if (e.key === "Enter") sendMessage(); });

    function userMessage(text) {
        messages.innerHTML += `<div class="chatbot-user-msg">${text}</div>`;
        messages.scrollTop = messages.scrollHeight;
    }

    function botMessage(text) {
        messages.innerHTML += `<div class="chatbot-bot-msg">${text}</div>`;
        messages.scrollTop = messages.scrollHeight;
    }

    function sendMessage() {
        const text = input.value.trim();
        if (!text) return;
        userMessage(text);
        input.value = "";
        setTimeout(() => botMessage(autoResponse(text)), 500);
    }

    function autoResponse(input) {
        input = input.toLowerCase();
        if (input.includes("book")) return `✅ You can book an appointment here:<br><a href="BookingDP.html">Click to Book</a>`;
        if (input.includes("service")) return `🦷 We offer whitening, implants, braces, root canals and more:<br><a href="ServiceDP.html">View Services</a>`;
        if (input.includes("emergency")) return `🚑 Emergency dental care is available:<br><a href="EmergencyDP.html">Emergency Info</a>`;
        if (input.includes("hours") || input.includes("open")) return `🕒 Our clinic hours:<br>Sat–Thu: 9am – 9pm<br>Friday: Closed`;
        return `Thank you! A team member will assist you soon. 😊`;
    }
}
