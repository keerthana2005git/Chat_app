document.getElementById("usernameForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const username = document.getElementById("name").value.trim();
    if (username) {
        localStorage.setItem("chat-username", username);
        window.location.href = "/chat.html";
    }
});
