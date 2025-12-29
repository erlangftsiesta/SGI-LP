// Form validation and handling
document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.querySelector("[data-contact-form]");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get form values
      const name = this.querySelector('[name="name"]');
      const email = this.querySelector('[name="email"]');
      const phone = this.querySelector('[name="phone"]');
      const message = this.querySelector('[name="message"]');

      // Basic validation
      let isValid = true;
      const errors = [];

      if (!name.value.trim()) {
        isValid = false;
        errors.push("Nama harus diisi");
        name.classList.add("input-error");
      }

      if (!email.value.trim() || !isValidEmail(email.value)) {
        isValid = false;
        errors.push("Email tidak valid");
        email.classList.add("input-error");
      }

      if (!phone.value.trim()) {
        isValid = false;
        errors.push("Nomor telepon harus diisi");
        phone.classList.add("input-error");
      }

      if (!message.value.trim()) {
        isValid = false;
        errors.push("Pesan harus diisi");
        message.classList.add("input-error");
      }

      // Show/hide error messages
      const errorContainer = this.querySelector("[data-form-error]");
      if (errorContainer) {
        if (isValid) {
          errorContainer.style.display = "none";
          // Show success message
          const successMsg = document.createElement("div");
          successMsg.textContent =
            "Terima kasih! Kami akan menghubungi Anda segera.";
          successMsg.style.cssText =
            "color: #18dbd6; padding: 12px; border-radius: 6px; background-color: rgba(24, 219, 214, 0.1); margin-bottom: 16px;";
          this.insertBefore(successMsg, this.firstChild);

          // Reset form
          this.reset();

          // Remove success message after 3 seconds
          setTimeout(() => successMsg.remove(), 3000);
        } else {
          errorContainer.innerHTML = errors
            .map((err) => `<li>${err}</li>`)
            .join("");
          errorContainer.style.display = "block";
        }
      }
      // Remove error class on input
      [name, email, phone, message].forEach((input) => {
        input.addEventListener("focus", function () {
          this.classList.remove("input-error");
        });
      });
    });
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
