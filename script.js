function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}
function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
}
// script.js

// Handle the login form submission
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const username = document.querySelector('input[name="username"]').value;
    const password = document.querySelector('input[name="password"]').value;

    if (username && password) {
        // Redirect to chat.html (you can also store username in localStorage if needed)
        window.location.href = "showcase.html";
    } else {
        alert("Please enter both username and password.");
    }
});
localStorage.setItem("username", username);
window.location.href = "chat.html";
const username = localStorage.getItem("username");
