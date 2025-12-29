// Mobile navbar toggle functionality
document.addEventListener("DOMContentLoaded", () => {
  const navToggleBtn = document.querySelector("[data-navbar-toggle]");
  const navMenu = document.querySelector("[data-navbar-menu]");
  const navLinks = document.querySelectorAll("[data-navbar-link]");

  if (navToggleBtn && navMenu) {
    // Toggle menu visibility
    navToggleBtn.addEventListener("click", () => {
      const isOpen = navMenu.classList.contains("show");
      if (isOpen) {
        navMenu.classList.remove("show");
        navToggleBtn.setAttribute("aria-expanded", "false");
      } else {
        navMenu.classList.add("show");
        navToggleBtn.setAttribute("aria-expanded", "true");
      }
    });

    // Close menu when link is clicked
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("show");
        navToggleBtn.setAttribute("aria-expanded", "false");
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!navToggleBtn.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove("show");
        navToggleBtn.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Add scroll effect to navbar
  const navbar = document.querySelector("[data-navbar]");
  if (navbar) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        navbar.style.boxShadow = "0 4px 12px rgba(10, 102, 100, 0.15)";
      } else {
        navbar.style.boxShadow = "0 2px 8px rgba(10, 102, 100, 0.08)";
      }
    });
  }
});
