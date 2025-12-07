// inject-chatbot.js (fixed - NO JSX)

document.addEventListener("DOMContentLoaded", function () {

    // Inject Chatbot HTML dynamically
    const chatbotHTML = `
        <div id="chatbot-icon">💬</div>
        <div id="chatbot-window">
            <div class="chatbot-header">Smile Dental Support</div>
            <div class="chatbot-messages"></div>
            <div class="chatbot-input">
                <input type="text" id="chatbot-text" placeholder="Type your message...">
                <button id="chatbot-send">Send</button>
            </div>
        </div>
    `;

    document.body.insertAdjacentHTML("beforeend", chatbotHTML);

});
