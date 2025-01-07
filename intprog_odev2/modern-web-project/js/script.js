// This file contains JavaScript code for dynamic behaviors across the website.
// It includes functionality to display a welcome message when the user enters their name and submits the form,
// as well as managing interactions for the navigation menu and other dynamic elements.

document.addEventListener("DOMContentLoaded", () => {
    const usernameInput = document.getElementById("username");
    const welcomeButton = document.getElementById("welcomeButton");
    const welcomeMessage = document.getElementById("welcomeMessage");
    const biographySection = document.getElementById("biography");

    welcomeButton.addEventListener("click", () => {
        const username = usernameInput.value.trim();
        if (username) {
            welcomeMessage.style.display = "block";
            welcomeMessage.textContent = `Hoş geldin, ${username}!`;
            biographySection.style.display = "block";
        } else {
            welcomeMessage.style.display = "block";
            welcomeMessage.textContent = "Lütfen isminizi girin!";
        }
    });
});