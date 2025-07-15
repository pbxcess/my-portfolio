document.querySelectorAll('.toggle-details').forEach(button => {
  button.addEventListener('click', () => {
    const details = button.nextElementSibling;
    const isVisible = details.style.display === 'block';
    details.style.display = isVisible ? 'none' : 'block';
    button.textContent = isVisible ? 'Show Details' : 'Hide Details';
  });
});

// Contact form validation
document.getElementById('contactForm').addEventListener('submit', function(event) {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const comments = document.getElementById('comments').value.trim();
  const errorMsg = document.getElementById('formError');

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!name || !emailRegex.test(email) || !comments) {
    errorMsg.style.display = 'block';
    event.preventDefault();
  } else {
    errorMsg.style.display = 'none';
  }
});
