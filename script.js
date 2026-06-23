const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

const leadForm = document.getElementById("leadForm");
if (leadForm) {
  leadForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const data = new FormData(leadForm);
    const nombre = encodeURIComponent(data.get("nombre") || "");
    const telefono = encodeURIComponent(data.get("telefono") || "");
    const interes = encodeURIComponent(data.get("interes") || "");
    const text = `Hola, soy ${nombre}. Mi teléfono es ${telefono}. Me interesa BellaVittoria para: ${interes}. Quiero agendar visita y recibir disponibilidad vigente.`;
    window.open(`https://wa.me/523333777337?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  });
}

// Espacio reservado para futuras integraciones.
// Meta Pixel, Google Analytics 4 y Google Tag Manager pueden agregarse aquí o en el <head>.
