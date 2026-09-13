document.documentElement.classList.add("js-ready");

const revealSelectors = [
  "main h1",
  "main h2",
  "main h3",
  ".hero-lead",
  ".home-hero-media",
  ".trust-item",
  ".home-section .eyebrow",
  ".home-section .section-intro-copy",
  ".home-section .location-city",
  ".home-section address",
  ".home-section .text-link",
  ".home-section .button",
  ".home-service-row",
  ".editorial-media",
  ".editorial-copy",
  ".team-feature",
  ".testimonial-card",
  ".media-card",
  ".insurance-plan-card",
  ".about-detail-card",
  ".contact-channel",
  ".location-card",
  ".services-cta",
  ".professionals-cta",
  ".insurance-plans-cta",
  ".about-page-cta",
  ".contact-page-cta",
  ".location-cta",
  ".home-cta",
  ".home-cta-inner",
  ".service-image",
  ".professional-photo",
  ".insurance-plan-logo",
  ".about-page-intro-visual",
  ".location-page-map",
];

const revealElements = [
  ...new Set(
    revealSelectors.flatMap((selector) => [
      ...document.querySelectorAll(selector),
    ]),
  ),
];

revealElements.forEach((element, index) => {
  element.classList.add("reveal");
  element.style.setProperty(
    "--reveal-delay",
    `${Math.min(index % 5, 4) * 70}ms`,
  );
  if (
    element.matches(
      ".editorial-media, .media-card, .location-map, .home-hero-media, .service-image, .professional-photo, .insurance-plan-logo, .about-page-intro-visual, .location-page-map",
    )
  ) {
    element.classList.add("reveal-media");
  }
  if (
    element.matches(
      ".trust-item, .home-service-row, .team-feature, .testimonial-card, .insurance-plan-card",
    )
  ) {
    element.classList.add("reveal-card");
  }
});

if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  revealElements.forEach((element) => element.classList.add("is-visible"));
} else if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -36px" },
  );

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add("is-visible"));
}

const heroSlides = [...document.querySelectorAll("[data-hero-slide]")];
const heroDots = [...document.querySelectorAll(".hero-dot")];
const heroPrevious = document.querySelector(".hero-prev");
const heroNext = document.querySelector(".hero-next");
let heroIndex = 0;
let heroTimer;

function showHeroSlide(index) {
  if (heroSlides.length < 2) return;
  heroIndex = (index + heroSlides.length) % heroSlides.length;
  heroSlides.forEach((slide, slideIndex) => {
    const active = slideIndex === heroIndex;
    slide.classList.toggle("is-active", active);
    slide.setAttribute("aria-hidden", String(!active));
  });
  heroDots.forEach((dot, dotIndex) => {
    const active = dotIndex === heroIndex;
    dot.classList.toggle("is-active", active);
    dot.setAttribute("aria-current", String(active));
  });
}

function restartHeroTimer() {
  if (heroTimer) window.clearInterval(heroTimer);
  if (
    heroSlides.length > 1 &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    heroTimer = window.setInterval(() => showHeroSlide(heroIndex + 1), 6500);
  }
}

if (heroSlides.length > 1) {
  heroPrevious?.addEventListener("click", () => {
    showHeroSlide(heroIndex - 1);
    restartHeroTimer();
  });
  heroNext?.addEventListener("click", () => {
    showHeroSlide(heroIndex + 1);
    restartHeroTimer();
  });
  heroDots.forEach((dot, index) =>
    dot.addEventListener("click", () => {
      showHeroSlide(index);
      restartHeroTimer();
    }),
  );
  restartHeroTimer();
}

const menuToggle = document.querySelector(".menu-toggle");
const navigation = document.querySelector("#main-navigation");

if (menuToggle && navigation) {
  menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    navigation.classList.toggle("is-open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuToggle.setAttribute("aria-expanded", "false");
      navigation.classList.remove("is-open");
    });
  });
}

const testimonialTrack = document.querySelector(".testimonial-track");
const testimonials = document.querySelectorAll(".testimonial-card");
let testimonialIndex = 0;

function moveTestimonials(direction) {
  if (!testimonialTrack || testimonials.length < 2) return;
  testimonialIndex =
    (testimonialIndex + direction + testimonials.length) % testimonials.length;
  testimonialTrack.style.transform = `translateX(-${testimonialIndex * 100}%)`;
}

document
  .querySelector("[data-testimonial-prev]")
  ?.addEventListener("click", () => moveTestimonials(-1));
document
  .querySelector("[data-testimonial-next]")
  ?.addEventListener("click", () => moveTestimonials(1));
