//JS interactivity

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

    //Contact Form Validation
    const form = document.querySelector(".contact-form");
    const errorDisplay = document.getElementById("formError");

    if (form) {
      form.addEventListener("submit", function (event) {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const comments = document.getElementById("comments").value.trim();

        let isValid = true;
        let errorMessage = "";

        errorDisplay.style.display = "none";

        //Name Validation Error Msg
        if (name === "") {
          isValid = false;
          errorMessage += "Name is required. ";
        }

        //Email Validation Error Msg
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
          isValid = false;
          errorMessage += "Please enter a valid email. ";
        }

        //Comments Validation Error Msg
        if (comments === "") {
          isValid = false;
          errorMessage += "Comments cannot be empty. ";
        }

        //Any validation failure
        if (!isValid) {
          event.preventDefault();
          errorDisplay.textContent = errorMessage;
          errorDisplay.style.display = "block";
        } else {
            errorDisplay.style.display = "none" //To hide error if everything is valid!
        }
      });
    }

//Typed.js animation

  new Typed ("#typed-output", {
    strings: [
      "Welcome to my Portfolio!",
      "Web Developer in Training",
      "Beginner coder",
      "Cat Lover and Basketball Vet",
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true
  });
});
