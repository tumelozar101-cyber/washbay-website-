// script.js

// Footer year
document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Demo form handler (mailto fallback)
  const form = document.getElementById("enquiryForm");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = (document.getElementById("name")?.value || "").trim();
    const phone = (document.getElementById("phone")?.value || "").trim();
    const service = (document.getElementById("service")?.value || "").trim();
    const message = (document.getElementById("message")?.value || "").trim();

    const subject = `Carwash Enquiry: ${service || "Service"}`;
    const body =
      `Name: ${name}\n` +
      `Phone: ${phone}\n` +
      `Service: ${service}\n\n` +
      `Message:\n${message}`;

    // No backend: open default email client
    const mailto = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  });
});
