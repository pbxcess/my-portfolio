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

  //Moment.js
  const hsGrad = moment("2020", "YYYY");
  const LUGrad = moment("2025", "YYYY");
  const humberGrad = moment("2026", "YYYY");
  const today = moment();

  const hsText = `Graduated in 2020 (${today.diff(hsGrad, "years")} years ago)`;
  const LUtext = `Graduated in 2025 (${today.diff(LUGrad, "years")} years ago)`;
  const currentText = `Computer Programming student at Humber College (${today.format("YYYY")})`;

  const yearsUntilGrad = humberGrad.diff(today, "years");
  const futureText = `Graduating from Humber in 2026 (in ${yearsUntilGrad} year${yearsUntilGrad !== 1 ? "s" : ""})`;

  const hsElem = document.getElementById("hs-grad");
  const LUElem = document.getElementById("LU-grad");
  const currentElem = document.getElementById("current");
  const futureElem = document.getElementById("future");

  if (hsElem && LUElem && currentElem && futureElem) {
    hsElem.textContent = hsText;
    LUElem.textContent = LUtext;
    currentElem.textContent = currentText;
    futureElem.textContent = futureText;
  }
});
