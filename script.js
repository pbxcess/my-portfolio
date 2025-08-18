//Contact Form Validation
document.addEventListener("DOMContentLoaded", () => {
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

  if (window.Typed && document.querySelector("#typed-output")) {
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
  }

  //Moment.js
  if (window.moment) {
    const hsGrad = moment("2020", "YYYY");
    const LUGrad = moment("2025", "YYYY");
    const humberGrad = moment("2026", "YYYY");
    const today = moment();
    const hsText = `Graduated in 2020 (${today.diff(hsGrad, "years")} years ago)`;
    const LUtext = `Graduated in 2025 (${today.diff(LUGrad, "years")} years ago)`;
    const currentText = `Computer Programming student at Humber College (${today.format("YYYY")})`;

    const yearsUntilGrad = humberGrad.diff(today, "years");
    const futureText = `Graduating from Humber in 2026 (in ${yearsUntilGrad} year${yearsUntilGrad !== 1 ? "s" : ""})`;

    const hsElem = document.getElementById("hsGrad");
    const LUElem = document.getElementById("LUGrad");
    const currentElem = document.getElementById("current");
    const futureElem = document.getElementById("future");

    if (hsElem && LUElem && currentElem && futureElem) {
      hsElem.textContent = hsText;
      LUElem.textContent = LUtext;
      currentElem.textContent = currentText;
      futureElem.textContent = futureText;
    }
  }

  // Smooth scrolling
  document.addEventListener("click", function(e) {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    const id = link.getAttribute("href").slice(1);
    const target = document.getElementById(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({behavior: "smooth"});
    }
  })

  // Reveal on scroll
  (function() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll(".reveal, section, .timeline-item").forEach((el) => {
      if (!el.classList.contains("reveal")) el.classList.add("reveal");
      observer.observe(el);
    });
  })();


  //Animated expanding and collapsing for projects
  document.querySelectorAll(".toggle-details").forEach((btn) => {
    const details = btn.nextElementSibling;
    if(!details) return;

    details.classList.remove("open");
    details.style.maxHeight = "0px";
    btn.setAttribute("aria-expanded", "false");
    btn.textContent = "Show Details";

    btn.addEventListener("click", () => {
      const willOpen = !details.classList.contains("open");
      details.classList.toggle("open");

      if (willOpen) {
        details.style.maxHeight = details.scrollHeight + "px";
        btn.textContent = "Hide Details";
      } else {
        details.style.maxHeight = "0px";
        btn.textContent = "Show Details";
      }

      btn.setAttribute("aria-expanded", String(willOpen));
      if (details.style && details.style.display) details.style.display = "";
    });
  });
});