// Page transition and scroll effects
document.addEventListener("DOMContentLoaded", () => {
  // Add fade-in animation to page load
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.6s ease-in";
    document.body.style.opacity = "1";
  }, 10);

  // Active link highlighting
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("[data-navbar-link]").forEach((link) => {
    const href = link.getAttribute("href");
    if (href === currentPage || (currentPage === "" && href === "index.html")) {
      link.style.color = "var(--primary)";
      link.style.fontWeight = "600";
    }
  });

  // Lazy load images
  if ("IntersectionObserver" in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.add("loaded");
          imageObserver.unobserve(img);
        }
      });
    });

    document.querySelectorAll("img[data-src]").forEach((img) => {
      imageObserver.observe(img);
    });
  }

  // Counter animation for stats
  document.querySelectorAll("[data-counter]").forEach((counter) => {
    const target = Number.parseInt(counter.dataset.counter);
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            counter.textContent = target.toLocaleString("id-ID");
            clearInterval(timer);
          } else {
            counter.textContent = Math.floor(current).toLocaleString("id-ID");
          }
        }, 16);
        observer.unobserve(counter);
      }
    });

    observer.observe(counter);
  });
});
