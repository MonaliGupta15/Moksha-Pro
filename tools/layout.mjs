/* =========================================================
   MOKSHA — shared layout for the static build
   ========================================================= */
import fs from "node:fs";
import path from "node:path";

export const ROOT = process.cwd();

export const icons = {
  arrow: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M3 13 13 3M5 3h8v8"/></svg>',
  arrowRight: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M2 8h12M9 3l5 5-5 5"/></svg>',
  arrowLeft: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M14 8H2M7 3 2 8l5 5"/></svg>',
  up: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M8 14V2M3 7l5-5 5 5"/></svg>',
  plus: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M8 2v12M2 8h12"/></svg>',
  minus: '<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M2 8h12"/></svg>',
  star: '<svg viewBox="0 0 16 16" fill="currentColor" aria-hidden="true"><path d="M8 1.5l1.9 4.1 4.5.5-3.4 3 1 4.4L8 11.2l-4 2.3 1-4.4-3.4-3 4.5-.5z"/></svg>',
  instagram: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><rect x="3" y="3" width="14" height="14" rx="4"/><circle cx="10" cy="10" r="3.2"/><circle cx="14.4" cy="5.6" r=".8" fill="currentColor" stroke="none"/></svg>',
  facebook: '<svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M11.5 18v-6.6h2.2l.3-2.6h-2.5V7.2c0-.8.2-1.3 1.3-1.3h1.4V3.6c-.2 0-1.1-.1-2.1-.1-2.1 0-3.5 1.3-3.5 3.6v2h-2.2v2.6h2.2V18h2.9z"/></svg>',
  tripadvisor: '<svg viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><circle cx="6" cy="11" r="3"/><circle cx="14" cy="11" r="3"/><path d="M6 8c1.2-1.6 2.5-2.4 4-2.4S12.8 6.4 14 8"/></svg>',
  cableCar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><path d="M4 4l16 4M12 6v4m-7 0h14a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2zm2 3h3v3H7zm7 0h3v3h-3z"/></svg>',
};

const navLinks = [
  { page: "suites", href: "suites.html", label: "Stay" },
  { page: "dining", href: "dining.html", label: "Dine" },
  { page: "wellness", href: "wellness.html", label: "Wellness" },
  { page: "experiences", href: "experiences.html", label: "Experiences" },
  { page: "weddings", href: "weddings.html", label: "Weddings" },
];

const menuLinks = [
  { page: "home", href: "index.html", label: "Home", caption: "Above the clouds", img: "main-banner.jpg" },
  { page: "suites", href: "suites.html", label: "Stay", caption: "Suites with a horizon", img: "Moksha-suite-new.avif" },
  { page: "dining", href: "dining.html", label: "Dine", caption: "Himalayan terroir", img: "pine-and-cones.jpg" },
  { page: "wellness", href: "wellness.html", label: "Wellness", caption: "The Hammam", img: "hammam-image-1.jpg" },
  { page: "experiences", href: "experiences.html", label: "Experiences", caption: "The cable-car arrival", img: "moksha-cable-car-1.jpg" },
  { page: "weddings", href: "weddings.html", label: "Weddings & Events", caption: "Vows in the mountains", img: "wedding2.jpg" },
  { page: "gallery", href: "gallery.html", label: "Gallery", caption: "Frames from the mountain", img: "gallery/All-gal3.jpg" },
  { page: "packages", href: "packages.html", label: "Packages", caption: "Stay a little longer", img: "offers-banner.jpg" },
  { page: "blog", href: "blog.html", label: "The Journal", caption: "Stories from 5,000 ft", img: "nature-walk.jpg" },
  { page: "careers", href: "careers.html", label: "Careers", caption: "Life above the clouds", img: "exp-img.jpg" },
  { page: "contact", href: "contact.html", label: "Contact", caption: "The mountain awaits", img: "contact-us-banner.jpg" },
];

const active = (page, target) => (page === target ? " is-active" : "");

export function head({ title, desc, image = "assets/img/main-banner.jpg", preload = "", extra = "" }) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${title}</title>
<meta name="description" content="${desc}">
<meta name="theme-color" content="#101713">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${desc}">
<meta property="og:image" content="${image}">
<meta name="format-detection" content="telephone=no">
<link rel="icon" href="assets/img/favicon.png">
<link rel="preload" href="assets/fonts/cormorant-garamond-300-normal.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="assets/fonts/jost-300-normal.woff2" as="font" type="font/woff2" crossorigin>
${preload}
<link rel="stylesheet" href="assets/css/style.css">
<script>document.documentElement.classList.add('js');</script>
${extra}
</head>`;
}

export function preloader() {
  return `<div class="preloader" data-preloader aria-hidden="true">
  <div class="preloader__inner">
    <div class="preloader__logo"><img src="assets/img/moksha-logo.png" alt=""></div>
    <div class="preloader__word">Moksha</div>
    <div class="preloader__bar"><i></i></div>
  </div>
  <div class="preloader__count" data-preloader-count>00</div>
  <div class="preloader__curtains"><i></i><i></i><i></i><i></i></div>
</div>`;
}

export function resortSwitcher() {
  return `<div class="resort-switch" data-resort-dropdown>
  <button class="resort-switch__toggle" type="button" data-resort-toggle aria-expanded="false" aria-haspopup="true" aria-label="Switch resort">
    <span class="resort-switch__dot" aria-hidden="true"></span>
    <span class="resort-switch__caption">Our Resorts</span>
    <span class="resort-switch__current">Moksha Himalaya</span>
    <svg class="resort-switch__arrow" viewBox="0 0 10 6" fill="none" stroke="currentColor" stroke-width="1.4" aria-hidden="true"><path d="M1 1l4 4 4-4"/></svg>
  </button>
  <div class="resort-switch__dropdown" data-resort-menu aria-hidden="true">
    <div class="resort-switch__top">
      <span class="eyebrow">Timber Trail Resorts</span>
      <small>3 Sanctuaries · Parwanoo</small>
    </div>
    <div class="resort-switch__list">
      <a href="index.html" class="resort-switch__card is-active">
        <div class="resort-switch__thumb"><img src="assets/img/main-banner.jpg" alt="Moksha Himalaya Spa Resort"></div>
        <div class="resort-switch__meta">
          <div class="resort-switch__title"><strong>Moksha Himalaya Spa Resort</strong><span class="resort-switch__badge">Current</span></div>
          <p>5,000 ft · All-Suite Ayurvedic Spa Sanctuary</p>
        </div>
      </a>
      <a href="https://www.timbertrail.in/heights-terraces-parwanoo" target="_blank" rel="noopener" class="resort-switch__card">
        <div class="resort-switch__thumb"><img src="assets/img/resorts/cable.jpg" alt="Timber Trail Heights & Terraces"></div>
        <div class="resort-switch__meta">
          <div class="resort-switch__title"><strong>Timber Trail Heights &amp; Terraces</strong><span class="resort-switch__icon">${icons.arrow}</span></div>
          <p>5,000 ft · Mountain Crest, Events &amp; Banquets</p>
        </div>
      </a>
      <a href="https://www.timbertrail.in/resort-parwanoo" target="_blank" rel="noopener" class="resort-switch__card">
        <div class="resort-switch__thumb"><img src="assets/img/resorts/himalayas.jpg" alt="Timber Trail Resort"></div>
        <div class="resort-switch__meta">
          <div class="resort-switch__title"><strong>Timber Trail Resort</strong><span class="resort-switch__icon">${icons.arrow}</span></div>
          <p>Foothills · Riverside Pine Lawns &amp; Cable Car Base</p>
        </div>
      </a>
    </div>
    <div class="resort-switch__bottom">
      <a href="https://www.timbertrail.in/" target="_blank" rel="noopener">Explore all properties on timbertrail.in ${icons.arrow}</a>
    </div>
  </div>
</div>`;
}

export function header(page) {
  return `<header class="site-header" data-header>
  <a class="brand" href="index.html" aria-label="Moksha Himalaya Spa Resort — home">
    <span class="brand__mark"><img src="assets/img/moksha-logo.png" alt="Moksha Himalaya Spa Resort"></span>
    <span class="brand__text"><b>MOKSHA</b><span>Himalaya Spa Resort</span></span>
    <img class="brand__wide" src="assets/img/fixed-header-logo.png" alt="">
  </a>
  <nav class="nav" aria-label="Primary">
    ${navLinks.map((l) => `<a href="${l.href}" class="${active(page, l.page).trim()}">${l.label}</a>`).join("\n    ")}
  </nav>
  <div class="header-actions">
    ${resortSwitcher()}
    <a class="btn btn--dark" href="#" data-booking-open><span>Reserve</span></a>
    <button class="menu-btn" type="button" data-menu-open aria-expanded="false" aria-controls="site-menu">
      <span>Menu</span>
      <span class="menu-btn__icon" aria-hidden="true"><i></i><i></i></span>
    </button>
  </div>
</header>
<div class="scroll-progress" aria-hidden="true"></div>`;
}

export function menu(page) {
  return `<div class="menu-overlay" id="site-menu" data-menu-overlay aria-hidden="true">
  <div class="menu-overlay__top">
    <a class="brand" href="index.html" aria-label="Moksha Himalaya Spa Resort — home">
      <span class="brand__mark"><img src="assets/img/moksha-logo.png" alt="Moksha Himalaya Spa Resort"></span>
      <span class="brand__text"><b>MOKSHA</b><span>Himalaya Spa Resort</span></span>
    </a>
    <button class="menu-overlay__close" type="button" data-menu-close>
      <span>Close</span>
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M3 3l10 10M13 3 3 13"/></svg>
    </button>
  </div>
  <div class="menu-overlay__body">
    <nav class="menu-links" aria-label="Full site">
      ${menuLinks.map((l, i) => `<a href="${l.href}" class="${active(page, l.page).trim()}" data-index="${i}" data-caption="${l.caption}"><span class="idx">${String(i + 1).padStart(2, "0")}</span><span class="word">${l.label}</span></a>`).join("\n      ")}
    </nav>
    <div class="menu-visual" aria-hidden="true">
      ${menuLinks.map((l) => `<img src="assets/img/${l.img}" alt="">`).join("\n      ")}
      <span class="menu-visual__cap"></span>
    </div>
  </div>
  <div class="menu-overlay__foot">
    <div class="menu-resorts">
      <span class="eyebrow">The Timber Trail Collection</span>
      <div class="menu-resorts__list">
        <a href="index.html" class="is-active"><span>Moksha Himalaya Spa Resort</span><small>5,000 ft · Current sanctuary</small></a>
        <a href="https://www.timbertrail.in/heights-terraces-parwanoo" target="_blank" rel="noopener"><span>Timber Trail Heights &amp; Terraces</span><small>5,000 ft · Crest &amp; Events ↗</small></a>
        <a href="https://www.timbertrail.in/resort-parwanoo" target="_blank" rel="noopener"><span>Timber Trail Resort</span><small>Foothills · Valley Base ↗</small></a>
      </div>
    </div>
    <div class="menu-contact-line">
      <div>
        <a href="tel:+919218532341">+91 92185 32341</a> &nbsp;·&nbsp;
        <a href="mailto:reservations@mokshaspa.com">reservations@mokshaspa.com</a>
      </div>
      <div class="menu-socials">
        <a href="https://www.instagram.com/moksha_himalaya_spa_resort/" target="_blank" rel="noopener">Instagram</a>
        <a href="https://www.facebook.com/mokshahimalayasparesortparwanoo" target="_blank" rel="noopener">Facebook</a>
      </div>
    </div>
  </div>
</div>`;
}

export function bookingBar() {
  return `<div class="booking-bar" data-hero-fade>
  <button class="booking-bar__field" type="button" data-booking-open>
    <span>Check in</span>
    <strong data-bar-in>Select date</strong>
  </button>
  <button class="booking-bar__field" type="button" data-booking-open>
    <span>Check out</span>
    <strong data-bar-out>Select date</strong>
  </button>
  <button class="booking-bar__field" type="button" data-booking-open>
    <span>Guests</span>
    <strong data-bar-guests>02 Adults</strong>
  </button>
  <button class="booking-bar__submit" type="button" data-booking-open>
    <span>Check availability</span>
    ${icons.arrow}
  </button>
</div>`;
}

export function bookingModal() {
  return `<div class="modal" data-booking-modal aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="booking-title">
  <div class="modal__backdrop"></div>
  <div class="modal__panel">
    <button class="modal__close" type="button" data-booking-close aria-label="Close booking">
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M3 3l10 10M13 3 3 13"/></svg>
    </button>
    <p class="eyebrow">Reservations</p>
    <h2 id="booking-title">Plan your <em class="italic">escape</em></h2>
    <p class="modal__intro">Choose your dates and we will take care of the ascent. Every stay includes a cable-car transfer, breakfast and access to the infinity pool.</p>
    <form class="booking-form" data-booking-form>
      <div class="field field--full" style="margin-bottom:14px;">
        <label for="booking-resort">Resort Destination</label>
        <select id="booking-resort" name="resort" class="select-input" data-resort-select>
          <option value="moksha" data-url="https://timbertrail.securedreservations.com/reservation?propcode=UI-0043978" selected>Moksha Himalaya Spa Resort (5,000 ft · All-Suite Wellness)</option>
          <option value="heights" data-url="https://timbertrail.securedreservations.com/reservation?destid=133985">Timber Trail Heights &amp; Terraces (5,000 ft · Mountain Crest)</option>
          <option value="base" data-url="https://timbertrail.securedreservations.com/reservation?destid=133985">Timber Trail Resort (Foothills · River Valley Base)</option>
        </select>
      </div>
      <div class="form-row">
        <div class="field">
          <label for="checkin">Arrival</label>
          <input type="date" id="checkin" name="checkin" required>
        </div>
        <div class="field">
          <label for="checkout">Departure</label>
          <input type="date" id="checkout" name="checkout" required>
        </div>
      </div>
      <div class="form-row">
        <div class="field">
          <label>Adults</label>
          <div class="stepper" data-stepper="adults" data-min="1" data-max="4">
            <div class="stepper__btns">
              <button type="button" data-minus aria-label="Fewer adults">${icons.minus}</button>
              <span data-count-display>02</span>
              <button type="button" data-plus aria-label="More adults">${icons.plus}</button>
            </div>
          </div>
        </div>
        <div class="field">
          <label>Children</label>
          <div class="stepper" data-stepper="children" data-min="0" data-max="4">
            <div class="stepper__btns">
              <button type="button" data-minus aria-label="Fewer children">${icons.minus}</button>
              <span data-count-display>00</span>
              <button type="button" data-plus aria-label="More children">${icons.plus}</button>
            </div>
          </div>
        </div>
      </div>
      <button class="btn btn--solid btn--block" type="submit"><span>Check availability</span></button>
      <div class="modal__summary" data-booking-summary>
        <p data-booking-summary-text></p>
      </div>
      <a class="btn btn--dark btn--block" data-booking-finish hidden href="https://timbertrail.securedreservations.com/reservation?propcode=UI-0043978" target="_blank" rel="noopener"><span>Continue to secure booking</span> ${icons.arrow}</a>
      <p class="modal__note">Prefer to speak with us? Call <a href="tel:+919218532341">+91 92185 32341</a> or write to <a href="mailto:reservations@mokshaspa.com">reservations@mokshaspa.com</a>.</p>
    </form>
  </div>
</div>`;
}

export function lightbox() {
  return `<div class="lightbox" data-lightbox aria-hidden="true" role="dialog" aria-modal="true" aria-label="Gallery viewer">
  <div class="lightbox__top">
    <span class="lightbox__count" data-lightbox-count>01 / 01</span>
    <button class="lightbox__close" type="button" data-lightbox-close>
      <span>Close</span>
      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.2" aria-hidden="true"><path d="M3 3l10 10M13 3 3 13"/></svg>
    </button>
  </div>
  <div class="lightbox__stage"><img alt="" data-lightbox-img></div>
  <div class="lightbox__bottom">
    <span class="lightbox__caption" data-lightbox-caption></span>
    <div class="lightbox__nav">
      <button class="lightbox__btn" type="button" data-lightbox-prev aria-label="Previous image">${icons.arrowLeft}</button>
      <button class="lightbox__btn" type="button" data-lightbox-next aria-label="Next image">${icons.arrowRight}</button>
    </div>
  </div>
</div>`;
}

export function footer() {
  return `<footer class="site-footer">
  <a class="footer__back" href="#top" aria-label="Back to top">${icons.up}</a>
  <div class="container">
    <div class="footer__top">
      <div class="footer__brand">
        <img src="assets/img/footer-logo.png" alt="Moksha Himalaya Spa Resort">
        <p>Asia Resorts Limited<br>Moksha Himalaya Spa Resort<br>Parwanoo 173220, Himachal Pradesh, India</p>
        <div class="footer__socials">
          <a href="https://www.instagram.com/moksha_himalaya_spa_resort/" target="_blank" rel="noopener" aria-label="Instagram">${icons.instagram}</a>
          <a href="https://www.facebook.com/mokshahimalayasparesortparwanoo" target="_blank" rel="noopener" aria-label="Facebook">${icons.facebook}</a>
          <a href="https://www.tripadvisor.in/" target="_blank" rel="noopener" aria-label="Tripadvisor">${icons.tripadvisor}</a>
        </div>
      </div>
      <div class="footer__col">
        <h4>The Resort</h4>
        <ul>
          <li><a href="suites.html">Accommodation</a></li>
          <li><a href="dining.html">Dining</a></li>
          <li><a href="wellness.html">Spa &amp; Wellness</a></li>
          <li><a href="weddings.html">Celebrations</a></li>
          <li><a href="packages.html">Packages</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>Discover</h4>
        <ul>
          <li><a href="experiences.html">Experiences</a></li>
          <li><a href="gallery.html">Gallery</a></li>
          <li><a href="blog.html">The Journal</a></li>
          <li><a href="contact.html">Getting here</a></li>
          <li><a href="careers.html">Careers</a></li>
        </ul>
      </div>
      <div class="footer__col">
        <h4>Information</h4>
        <ul>
          <li><a href="contact.html">Contact us</a></li>
          <li><a href="privacy-policy.html">Privacy policy</a></li>
          <li><a href="privacy-policy.html#cookies">Cookie policy</a></li>
          <li><a href="terms-condition.html">Terms &amp; conditions</a></li>
          <li><a href="terms-condition.html#cancellation">Cancellation policy</a></li>
          <li><a href="assets/moksha-brochure.pdf" download>Brochure</a></li>
        </ul>
      </div>
      <div class="footer__col footer__col--contact">
        <h4>Reservations</h4>
        <div class="footer__contact">
          <a href="tel:+919218532341">+91 92185 32341</a><br>
          <a href="tel:+919218532347">+91 92185 32347</a><br>
          <a href="mailto:reservations@mokshaspa.com">reservations@mokshaspa.com</a><br>
          <a href="mailto:info@mokshaspa.com">info@mokshaspa.com</a>
        </div>
        <p style="margin-top:16px;font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:rgba(243,239,229,.42);">Sales · Mon–Sat · 10 am – 6 pm<br><a href="tel:+918679032341" style="color:inherit;">+91 86790 32341</a></p>
      </div>
    </div>
    <div class="footer__bottom">
      <span>&copy; ${new Date().getFullYear()} Moksha Himalaya Spa Resort. An Asia Resorts Ltd Property.</span>
      <div class="footer__bottom-links">
        <a href="privacy-policy.html">Privacy</a>
        <a href="terms-condition.html">Terms</a>
        <a href="terms-condition.html#cancellation">Cancellation</a>
        <a href="careers.html">Careers</a>
      </div>
    </div>
  </div>
  <div class="footer__word" aria-hidden="true">MOK<span>SHA</span></div>
</footer>`;
}

export function pageHero({ image, alt, crumb, lines, intro, meta = [] }) {
  return `<section class="page-hero" id="top">
  <div class="page-hero__media parallax-wrap"><img src="assets/img/${image}" alt="${alt}" data-parallax="7"></div>
  <div class="page-hero__content container">
    <nav class="breadcrumb" aria-label="Breadcrumb" data-page-fade><a href="index.html">Home</a><i></i><span>${crumb}</span></nav>
    <h1 data-page-title>${lines.map((l) => `<span class="line"><span>${l}</span></span>`).join("")}</h1>
    <p data-page-fade>${intro}</p>
    ${meta.length ? `<div class="page-hero__meta" data-page-fade>${meta.map((m) => `<div><span>${m[0]}</span><strong>${m[1]}</strong></div>`).join("")}</div>` : ""}
    <div class="scroll-cue" data-page-fade><span>Scroll to explore</span><i></i></div>
  </div>
</section>`;
}

export function ctaBand({ image, title, text, primary = ["Reserve a suite", "#", "data-booking-open"], secondary = ["Speak to us", "contact.html"] }) {
  return `<section class="cta-band">
  <div class="cta-band__media parallax-wrap"><img src="assets/img/${image}" alt="" data-parallax="10"></div>
  <div class="container">
    <div class="cta-band__inner">
      <p class="eyebrow">Moksha Himalaya</p>
      <h2 data-split>${title}</h2>
      <p>${text}</p>
      <div class="cta-band__actions">
        <a class="btn btn--solid" href="${primary[1]}" ${primary[2] || ""} data-magnetic><span>${primary[0]}</span> ${icons.arrow}</a>
        <a class="btn btn--light" href="${secondary[1]}"><span>${secondary[0]}</span></a>
      </div>
    </div>
  </div>
</section>`;
}

export function backToTop() {
  return `<button class="back-to-top" type="button" data-back-to-top aria-label="Back to top">
  <span class="back-to-top__icon" aria-hidden="true">${icons.up}</span>
  <span class="back-to-top__text">Top</span>
</button>`;
}

export function scripts() {
  return `<script src="assets/vendor/gsap.min.js" defer></script>
<script src="assets/vendor/ScrollTrigger.min.js" defer></script>
<script src="assets/vendor/SplitText.min.js" defer></script>
<script src="assets/vendor/lenis.min.js" defer></script>
<script src="assets/js/main.js" defer></script>`;
}

export function layout({ page, title, desc, image, preload = "", main, withLightbox = false }) {
  return `${head({ title, desc, image, preload })}
<body data-page="${page}">
<a class="skip-link" href="#main">Skip to content</a>
<div class="grain" aria-hidden="true"></div>
${preloader()}
<div class="page-veil" aria-hidden="true"><img src="assets/img/moksha-logo.png" alt=""></div>
${header(page)}
${menu(page)}
<main id="main">
${main}
</main>
${footer()}
${backToTop()}
${bookingModal()}
${withLightbox ? lightbox() : ""}
${scripts()}
</body>
</html>`;
}

export function writePage(name, html) {
  fs.writeFileSync(path.join(ROOT, name), html);
  const kb = (Buffer.byteLength(html) / 1024).toFixed(1);
  console.log(`  ${name.padEnd(22)} ${kb} kB`);
}
