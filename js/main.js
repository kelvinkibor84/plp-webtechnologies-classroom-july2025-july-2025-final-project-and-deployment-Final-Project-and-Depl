// Contact form validation
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");
      const msgBox = document.getElementById("formMsg");

      if (name.value.length < 2) {
        msgBox.textContent = "Name must be at least 2 characters.";
        return;
      }
      if (!email.value.includes("@")) {
        msgBox.textContent = "Please enter a valid email.";
        return;
      }
      if (message.value.length < 10) {
        msgBox.textContent = "Message must be at least 10 characters.";
        return;
      }

      msgBox.textContent = "✅ Message sent successfully (simulation).";
      form.reset();
    });
  }
});
