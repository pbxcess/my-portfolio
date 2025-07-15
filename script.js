//JS interactivity
// script.js

document.addEventListener("DOMContentLoaded", () => {
    const toggleButtons = document.querySelectorAll(".toggle-details");

    toggleButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const projectDetails = button.nextElementSibling;

            if (projectDetails.style.display === "none" || projectDetails.style.display === "") {
                projectDetails.style.display = "block";
                button.textContent = "Hide Details";
            } else {
                projectDetails.style.display = "none";
                button.textContent = "Show Details";
            }
        });
    });
});
