// ==========================================================================
// Configuração
// ==========================================================================
// TODO: trocar pelo número real de WhatsApp da clínica, formato internacional
// sem espaços/símbolos, ex: "5554999998888"
const WHATSAPP_NUMBER = "555195351956";
const WHATSAPP_MESSAGE = "Olá! Gostaria de marcar um horário.";

// ==========================================================================
// Links de WhatsApp
// ==========================================================================
const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

document.querySelectorAll(".js-whatsapp").forEach((el) => {
  el.setAttribute("href", waLink);
  el.setAttribute("target", "_blank");
  el.setAttribute("rel", "noopener");
});

const waFloat = document.getElementById("waFloat");
if (waFloat) {
  waFloat.addEventListener("click", () =>
    window.open(waLink, "_blank", "noopener"),
  );
}

// ==========================================================================
// Menu mobile
// ==========================================================================
const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// ==========================================================================
// Reveal on scroll
// ==========================================================================
const revealEls = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add("is-visible"));
}

// ==========================================================================
// Ano no rodapé
// ==========================================================================
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ==========================================================================
// Aviso de cookies (LGPD)
// ==========================================================================
const cookieBanner = document.getElementById("cookieBanner");
const cookieAccept = document.getElementById("cookieAccept");
const COOKIE_CONSENT_KEY = "nm-cookie-consent";

if (cookieBanner && cookieAccept) {
  try {
    if (!localStorage.getItem(COOKIE_CONSENT_KEY)) {
      cookieBanner.classList.add("is-visible");
    }
  } catch (e) {
    cookieBanner.classList.add("is-visible");
  }

  cookieAccept.addEventListener("click", () => {
    cookieBanner.classList.remove("is-visible");
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, "1");
    } catch (e) {
      /* localStorage indisponível: o aviso volta a aparecer na próxima visita */
    }
  });
}
