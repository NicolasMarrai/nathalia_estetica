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

// ==========================================================================
// Carrossel da Formação
// ==========================================================================
const formacaoCarousel = document.getElementById("formacaoCarousel");

if (formacaoCarousel) {
  const slides = Array.from(formacaoCarousel.querySelectorAll(".formacao-slide"));
  const dotsWrap = formacaoCarousel.querySelector(".formacao-dots");
  const progress = formacaoCarousel.querySelector(".formacao-progress");
  const SLIDE_TIME = 5000;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let current = 0;
  let timer = null;
  let paused = false;
  let remaining = SLIDE_TIME;
  let startedAt = 0;

  formacaoCarousel.style.setProperty("--slide-time", `${SLIDE_TIME}ms`);

  const dots = slides.map((_, i) => {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", `Ir para a foto ${i + 1} de ${slides.length}`);
    dot.addEventListener("click", () => goTo(i));
    dotsWrap.appendChild(dot);
    return dot;
  });

  function restartProgress() {
    if (!progress) return;
    progress.classList.remove("is-running");
    void progress.offsetWidth; // reinicia a animação
    progress.classList.add("is-running");
  }

  function schedule(delay) {
    clearTimeout(timer);
    if (reduceMotion || paused) return;
    startedAt = Date.now();
    remaining = delay;
    timer = setTimeout(() => goTo(current + 1), delay);
  }

  function goTo(index) {
    current = (index + slides.length) % slides.length;
    slides.forEach((s, i) => {
      const active = i === current;
      s.classList.toggle("is-active", active);
      s.setAttribute("aria-hidden", String(!active));
    });
    dots.forEach((d, i) =>
      d.setAttribute("aria-current", i === current ? "true" : "false"),
    );
    restartProgress();
    schedule(SLIDE_TIME);
  }

  function pause() {
    if (paused) return;
    paused = true;
    formacaoCarousel.classList.add("is-paused");
    clearTimeout(timer);
    remaining = Math.max(0, remaining - (Date.now() - startedAt));
  }

  function resume() {
    if (!paused) return;
    paused = false;
    formacaoCarousel.classList.remove("is-paused");
    schedule(remaining);
  }

  formacaoCarousel
    .querySelector(".formacao-prev")
    .addEventListener("click", () => goTo(current - 1));
  formacaoCarousel
    .querySelector(".formacao-next")
    .addEventListener("click", () => goTo(current + 1));

  // Pausa ao passar o mouse ou focar pelo teclado
  formacaoCarousel.addEventListener("mouseenter", pause);
  formacaoCarousel.addEventListener("mouseleave", resume);
  formacaoCarousel.addEventListener("focusin", pause);
  formacaoCarousel.addEventListener("focusout", resume);

  // Setas do teclado
  formacaoCarousel.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") goTo(current - 1);
    if (e.key === "ArrowRight") goTo(current + 1);
  });

  // Arrastar no celular
  let touchX = null;
  formacaoCarousel.addEventListener(
    "touchstart",
    (e) => { touchX = e.touches[0].clientX; },
    { passive: true },
  );
  formacaoCarousel.addEventListener("touchend", (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 40) goTo(dx < 0 ? current + 1 : current - 1);
    touchX = null;
  });

  // Não troca de foto com a aba escondida
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) pause();
    else resume();
  });

  goTo(0);
}
