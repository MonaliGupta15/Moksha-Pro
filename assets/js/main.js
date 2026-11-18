/* =========================================================
   MOKSHA HIMALAYA — Interaction & Motion
   Vanilla JS + GSAP + ScrollTrigger + Lenis
   ========================================================= */
(function () {
  "use strict";

  const doc = document;
  const body = doc.body;
  const root = doc.documentElement;
  const $ = (sel, ctx = doc) => ctx.querySelector(sel);
  const $$ = (sel, ctx = doc) => Array.from(ctx.querySelectorAll(sel));
  const isFine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasGSAP = typeof window.gsap !== "undefined";
  const hasST = hasGSAP && typeof window.ScrollTrigger !== "undefined";
  const hasLenis = typeof window.Lenis !== "undefined";

  let lenis = null;
  let scrollLocked = false;

  if (!hasGSAP) root.classList.add("no-gsap");

  /* ---------------- Utilities ---------------- */
  const pad = (n) => String(n).padStart(2, "0");

  function formatDate(value) {
    if (!value) return "Select date";
    const d = new Date(value + "T00:00:00");
    if (isNaN(d)) return "Select date";
    return d.toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  }

  function todayISO(offset = 0) {
    const d = new Date();
    d.setDate(d.getDate() + offset);
    return d.toISOString().slice(0, 10);
  }

  let toastTimer;
  function toast(message) {
    let el = $(".toast");
    if (!el) {
      el = doc.createElement("div");
      el.className = "toast";
      el.setAttribute("role", "status");
      el.innerHTML = '<i></i><span></span>';
      body.appendChild(el);
    }
    $("span", el).textContent = message;
    el.classList.add("is-show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("is-show"), 4200);
  }

  function lockScroll() {
    if (scrollLocked) return;
    scrollLocked = true;
    if (lenis) lenis.stop();
    body.classList.add("is-locked");
  }
  function unlockScroll() {
    if (!scrollLocked) return;
    scrollLocked = false;
    if (lenis) lenis.start();
    body.classList.remove("is-locked");
  }

  /* ---------------- Smooth scroll ---------------- */
  function initLenis() {
    if (!hasLenis || reduceMotion) return;
    lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    });

    lenis.on("scroll", (e) => {
      if (hasST) ScrollTrigger.update();
      onScroll(e.scroll, e.limit);
    });

    if (hasGSAP) {
      gsap.ticker.add((time) => lenis.raf(time * 1000));
      gsap.ticker.lagSmoothing(0);
    } else {
      const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
      requestAnimationFrame(raf);
    }
  }

  function onScroll(y, limit) {
    const header = $("[data-header]");
    const progress = $(".scroll-progress");
    if (progress) {
      const max = limit || doc.documentElement.scrollHeight - window.innerHeight;
      const ratio = max > 0 ? Math.min(1, y / max) : 0;
      if (hasGSAP && window.gsap) gsap.set(progress, { scaleX: ratio });
      else progress.style.transform = `scaleX(${ratio})`;
    }
    if (header && !header.classList.contains("is-menu-open")) {
      header.classList.toggle("is-scrolled", y > 60);
      if (y > 480 && y > (onScroll.last || 0) + 4) header.classList.add("is-hidden");
      else if (y < (onScroll.last || 0) - 4 || y < 120) header.classList.remove("is-hidden");
    }
    const backToTop = $("[data-back-to-top]");
    if (backToTop) {
      backToTop.classList.toggle("is-visible", y > 400);
    }
    onScroll.last = y;
  }

  /* ---------------- Preloader ---------------- */
  function initPreloader() {
    const pre = $("[data-preloader]");
    if (!pre) return Promise.resolve();
    if (reduceMotion || !hasGSAP) {
      pre.style.display = "none";
      return Promise.resolve();
    }
    lockScroll();
    const count = $("[data-preloader-count]", pre);
    const curtains = $$(".preloader__curtains i", pre);
    const logo = $(".preloader__logo", pre);
    const word = $(".preloader__word", pre);
    const bar = $(".preloader__bar i", pre);

    let seen = false;
    try { seen = sessionStorage.getItem("moksha-visited") === "1"; } catch (err) {}

    if (seen) {
      // Repeat visit within the tab: keep the transition continuity but skip the long count.
      if (count) count.textContent = "100";
      return new Promise((resolve) => {
        gsap.timeline({
          onComplete: () => {
            pre.style.display = "none";
            pre.classList.add("is-done");
            unlockScroll();
            resolve();
          },
        })
          .set([logo, word], { opacity: 1 })
          .to([logo, word, count, $(".preloader__bar", pre)], { opacity: 0, duration: 0.28, ease: "power2.in" })
          .to(curtains, { scaleY: 0, duration: 0.85, ease: "power4.inOut", stagger: 0.06 }, "-=0.1");
      });
    }

    return new Promise((resolve) => {
      const finish = () => {
        const tl = gsap.timeline({
          onComplete: () => {
            pre.style.display = "none";
            pre.classList.add("is-done");
            try { sessionStorage.setItem("moksha-visited", "1"); } catch (err) {}
            unlockScroll();
            resolve();
          },
        });
        tl.to([logo, word, count, $(".preloader__bar", pre)], {
          opacity: 0, y: -18, duration: 0.5, ease: "power2.in", stagger: 0.04,
        })
          .to(curtains, {
            scaleY: 0, duration: 0.9, ease: "power4.inOut", stagger: 0.07,
          }, "-=0.2");
      };

      const tl = gsap.timeline({ onComplete: finish });
      tl.to(logo, { opacity: 1, duration: 0.7, ease: "power2.out" }, 0)
        .to(word, { opacity: 1, duration: 0.7, ease: "power2.out" }, 0.15)
        .to({ v: 0 }, {
          v: 100, duration: 1.05, ease: "power2.inOut",
          onUpdate: function () { count.textContent = pad(Math.round(this.targets()[0].v)); },
        }, 0.1)
        .to(bar, { scaleX: 1, duration: 1.05, ease: "power2.inOut" }, 0.1)
        .to({}, { duration: 0.16 });
    });
  }

  /* ---------------- Header & menu ---------------- */
  function initHeader() {
    const header = $("[data-header]");
    if (!header) return;
    const page = body.dataset.page;
    $$(".nav a, .menu-links a").forEach((a) => {
      const href = a.getAttribute("href") || "";
      if (page && href.startsWith(page)) a.classList.add("is-active");
      if (page === "home" && href === "index.html") a.classList.add("is-active");
    });

    const overlay = $("[data-menu-overlay]");
    if (!overlay) return;
    const openBtn = $("[data-menu-open]");
    const closeBtn = $("[data-menu-close]", overlay);
    const links = $$(".menu-links a", overlay);
    const images = $$(".menu-visual img", overlay);
    const caption = $(".menu-visual__cap", overlay);
    let open = false;
    let menuTl = null;

    function openMenu() {
      if (open) return;
      open = true;
      lockScroll();
      header.classList.add("is-menu-open");
      overlay.style.visibility = "visible";
      overlay.setAttribute("aria-hidden", "false");
      openBtn && openBtn.setAttribute("aria-expanded", "true");
      if (reduceMotion) {
        overlay.style.clipPath = "inset(0 0 0% 0)";
        gsap && gsap.set(links, { opacity: 1, y: 0 });
        return;
      }
      menuTl = gsap.timeline();
      menuTl.to(overlay, { clipPath: "inset(0 0 0% 0)", duration: 0.9, ease: "power4.inOut" })
        .fromTo(links, { yPercent: 120, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.06 }, "-=0.55")
        .fromTo($(".menu-visual", overlay), { opacity: 0, scale: 1.04 }, { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }, "-=0.65")
        .fromTo($(".menu-overlay__foot", overlay), { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6 }, "-=0.5");
    }

    function closeMenu() {
      if (!open) return;
      open = false;
      header.classList.remove("is-menu-open");
      overlay.setAttribute("aria-hidden", "true");
      openBtn && openBtn.setAttribute("aria-expanded", "false");
      if (reduceMotion) {
        overlay.style.visibility = "hidden";
        unlockScroll();
        return;
      }
      if (menuTl) menuTl.kill();
      gsap.timeline({
        onComplete: () => {
          overlay.style.visibility = "hidden";
          unlockScroll();
        },
      }).to(overlay, { clipPath: "inset(0 0 100% 0)", duration: 0.7, ease: "power4.inOut" });
    }

    openBtn && openBtn.addEventListener("click", openMenu);
    closeBtn && closeBtn.addEventListener("click", closeMenu);
    doc.addEventListener("keydown", (e) => { if (e.key === "Escape" && open) closeMenu(); });

    links.forEach((link, i) => {
      link.addEventListener("mouseenter", () => {
        const idx = Number(link.dataset.index || i);
        images.forEach((img, j) => img.classList.toggle("is-active", j === idx));
        if (caption) caption.textContent = link.dataset.caption || "";
      });
    });
    images.forEach((img, i) => img.classList.toggle("is-active", i === 0));
    if (caption && links[0]) caption.textContent = links[0].dataset.caption || "";

    // close menu if resized to desktop with overlay open? keep as is.
    return { closeMenu };
  }

  /* ---------------- Cursor ---------------- */
  function initCursor() {
    if (!isFine || reduceMotion) return;
    const cursor = $(".cursor");
    if (!cursor) return;
    body.classList.add("has-cursor");
    const dot = $(".cursor__dot", cursor);
    const ring = $(".cursor__ring", cursor);
    const label = $(".cursor__label", cursor);
    let x = window.innerWidth / 2, y = window.innerHeight / 2;
    let rx = x, ry = y;

    if (hasGSAP) {
      const dx = gsap.quickTo(dot, "x", { duration: 0.08, ease: "power2.out" });
      const dy = gsap.quickTo(dot, "y", { duration: 0.08, ease: "power2.out" });
      const qx = gsap.quickTo(ring, "x", { duration: 0.45, ease: "power3.out" });
      const qy = gsap.quickTo(ring, "y", { duration: 0.45, ease: "power3.out" });
      window.addEventListener("mousemove", (e) => {
        x = e.clientX; y = e.clientY;
        dx(x); dy(y); qx(x); qy(y);
      });
    } else {
      window.addEventListener("mousemove", (e) => {
        dot.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
        ring.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`;
      });
    }

    doc.addEventListener("mouseover", (e) => {
      const target = e.target.closest("a, button, [data-cursor], .gitem, .treatment, .chapter-card, .suite-card");
      if (!target) return;
      cursor.classList.add("is-hover");
      const view = target.matches(".gitem, .chapter-card, .suite-card, [data-cursor='view']");
      if (view) {
        cursor.classList.add("is-view");
        label.textContent = target.dataset.cursorLabel || "View";
      }
      const text = target.dataset.cursorLabel;
      if (text && !view) { label.textContent = text; cursor.classList.add("is-hover"); }
    });
    doc.addEventListener("mouseout", (e) => {
      const target = e.target.closest("a, button, [data-cursor], .gitem, .treatment, .chapter-card, .suite-card");
      if (!target) return;
      cursor.classList.remove("is-hover", "is-view");
    });
    window.addEventListener("mouseleave", () => { dot.style.opacity = "0"; ring.style.opacity = "0"; });
    window.addEventListener("mouseenter", () => { dot.style.opacity = "1"; ring.style.opacity = "1"; });
  }

  /* ---------------- Text splitting ---------------- */
  function splitWords(el) {
    if (!el || el.dataset.splitDone) return [];
    const words = [];
    const walker = doc.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    const nodes = [];
    let node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue.trim()) nodes.push(node);
    }
    nodes.forEach((textNode) => {
      const frag = doc.createDocumentFragment();
      textNode.nodeValue.split(/(\s+)/).forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          frag.appendChild(doc.createTextNode(part));
        } else {
          const span = doc.createElement("span");
          span.className = "word";
          span.textContent = part;
          frag.appendChild(span);
          words.push(span);
        }
      });
      textNode.parentNode.replaceChild(frag, textNode);
    });
    el.dataset.splitDone = "1";
    return words;
  }

  function initTextReveals() {
    if (!hasGSAP) return;

    // Headline line masks
    $$("[data-split]").forEach((el) => {
      let targets = [];
      if (window.SplitText) {
        try {
          const split = new SplitText(el, { type: "lines", mask: "lines", linesClass: "split-line", autoSplit: true });
          targets = split.lines;
        } catch (err) {
          targets = [el];
        }
      } else {
        targets = [el];
      }
      if (!targets.length) return;
      gsap.from(targets, {
        yPercent: 112,
        duration: 1.15,
        ease: "power4.out",
        stagger: 0.09,
        scrollTrigger: { trigger: el, start: "top 88%", once: true },
      });
    });

    // Scroll-scrubbed word illumination
    $$("[data-words]").forEach((el) => {
      const words = splitWords(el);
      if (!words.length) return;
      gsap.to(words, {
        opacity: 1,
        ease: "none",
        stagger: 0.12,
        scrollTrigger: {
          trigger: el,
          start: "top 82%",
          end: "bottom 60%",
          scrub: 0.6,
        },
      });
    });

    // Generic reveals
    $$("[data-reveal]").forEach((el) => {
      const delay = parseFloat(el.dataset.revealDelay || 0);
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 1.15,
        ease: "power3.out",
        delay,
        clearProps: "transform",
        scrollTrigger: { trigger: el, start: "top 90%", once: true },
      });
    });

    // Mask reveal lines (author-controlled)
    $$(".reveal-line > span").forEach((el) => {
      gsap.to(el, {
        yPercent: 0,
        duration: 1.1,
        ease: "power4.out",
        clearProps: "transform",
        scrollTrigger: { trigger: el.parentElement, start: "top 90%", once: true },
      });
    });

    // Group stagger
    $$("[data-reveal-group]").forEach((group) => {
      const kids = $$("[data-reveal-child]", group);
      if (!kids.length) return;
      gsap.set(kids, { opacity: 0, y: 34 });
      gsap.to(kids, {
        opacity: 1,
        y: 0,
        duration: 1.05,
        ease: "power3.out",
        stagger: 0.1,
        clearProps: "transform",
        scrollTrigger: { trigger: group, start: "top 85%", once: true },
      });
    });
  }

  /* ---------------- Parallax ---------------- */
  function initParallax() {
    if (!hasST || reduceMotion) return;
    $$("[data-parallax]").forEach((el) => {
      const img = el.tagName === "IMG" ? el : ($("img", el) || el);
      const amount = parseFloat(el.dataset.parallax || 10);
      gsap.fromTo(img, { yPercent: -amount / 2, scale: 1.1 }, {
        yPercent: amount / 2,
        scale: 1.1,
        ease: "none",
        scrollTrigger: {
          trigger: el.closest(".parallax-wrap") || el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });
  }

  /* ---------------- Counters ---------------- */
  function initCounters() {
    if (!hasGSAP) return;
    $$("[data-count]").forEach((el) => {
      const target = parseFloat(el.dataset.count);
      const decimals = parseInt(el.dataset.decimals || "0", 10);
      const obj = { v: 0 };
      ScrollTrigger.create({
        trigger: el,
        start: "top 92%",
        once: true,
        onEnter: () => {
          gsap.to(obj, {
            v: target,
            duration: 2.1,
            ease: "power2.out",
            onUpdate: () => {
              el.textContent = obj.v.toLocaleString("en-IN", {
                minimumFractionDigits: decimals,
                maximumFractionDigits: decimals,
              });
            },
          });
        },
      });
    });
  }

  /* ---------------- Horizontal chapters ---------------- */
  function initHorizontal() {
    if (!hasST) return;
    const section = $("[data-horizontal]");
    if (!section) return;
    const pin = $(".chapters__pin", section);
    const track = $("[data-horizontal-track]", section);
    if (!track) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 821px)", function () {
        const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth);
        const tween = gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: pin,
            start: "top top",
            end: () => "+=" + getDistance(),
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
            anticipatePin: 1,
            onUpdate: (self) => {
              const hint = $(".chapters__hint", section);
              if (hint) hint.style.opacity = self.progress > 0.86 ? "0.2" : "1";
            },
          },
        });
        return () => { tween.kill(); };
    });
  }

  /* ---------------- Ritual image switcher ---------------- */
  function initRituals() {
    const items = $$("[data-ritual]");
    if (!items.length) return;
    const images = $$("[data-ritual-img]");
    const caption = $("[data-ritual-caption]");
    const counter = $("[data-ritual-count]");

    function activate(index) {
      items.forEach((item, i) => item.classList.toggle("is-active", i === index));
      images.forEach((img, i) => img.classList.toggle("is-active", i === index));
      if (caption && items[index]) caption.textContent = items[index].dataset.caption || "";
      if (counter) counter.textContent = `${pad(index + 1)} / ${pad(items.length)}`;
    }
    activate(0);

    if (!hasST) {
      items.forEach((item) => item.addEventListener("mouseenter", () => activate(Number(item.dataset.ritual))));
      return;
    }
    items.forEach((item, i) => {
      ScrollTrigger.create({
        trigger: item,
        start: "top 62%",
        end: "bottom 38%",
        onEnter: () => activate(i),
        onEnterBack: () => activate(i),
      });
      item.addEventListener("mouseenter", () => activate(i));
    });
  }

  /* ---------------- Testimonials ---------------- */
  function initVoices() {
    const stage = $("[data-voices]");
    if (!stage) return;
    const voices = $$(".voice", stage);
    const prev = $("[data-voice-prev]");
    const next = $("[data-voice-next]");
    const progress = $("[data-voice-progress]");
    const indexEl = $("[data-voice-index]");
    if (voices.length < 2) return;
    let current = 0;
    let auto;
    let tween;

    function go(index, dir = 1) {
      const nextIndex = (index + voices.length) % voices.length;
      if (nextIndex === current) return;
      voices[current].classList.remove("is-active");
      voices[nextIndex].classList.add("is-active");
      current = nextIndex;
      if (indexEl) indexEl.innerHTML = `<b>${pad(current + 1)}</b> / ${pad(voices.length)}`;
      startAuto();
    }

    function startAuto() {
      clearTimeout(auto);
      if (tween) tween.kill();
      if (!hasGSAP || reduceMotion) return;
      if (progress) {
        gsap.set(progress, { scaleX: 0 });
        tween = gsap.to(progress, {
          scaleX: 1, duration: 6.5, ease: "none",
          onComplete: () => go(current + 1),
        });
      } else {
        auto = setTimeout(() => go(current + 1), 6500);
      }
    }

    next && next.addEventListener("click", () => go(current + 1));
    prev && prev.addEventListener("click", () => go(current - 1));
    stage.addEventListener("mouseenter", () => { if (tween) tween.pause(); });
    stage.addEventListener("mouseleave", () => { if (tween) tween.resume(); });

    // drag / swipe
    let startX = null;
    stage.addEventListener("pointerdown", (e) => { startX = e.clientX; });
    stage.addEventListener("pointerup", (e) => {
      if (startX === null) return;
      const delta = e.clientX - startX;
      startX = null;
      if (Math.abs(delta) > 50) go(current + (delta < 0 ? 1 : -1));
    });

    if (indexEl) indexEl.innerHTML = `<b>01</b> / ${pad(voices.length)}`;
    if (!reduceMotion && hasGSAP) startAuto();
  }

  /* ---------------- Lightbox ---------------- */
  function initLightbox() {
    const box = $("[data-lightbox]");
    if (!box) return;
    const imgEl = $("[data-lightbox-img]", box);
    const countEl = $("[data-lightbox-count]", box);
    const capEl = $("[data-lightbox-caption]", box);
    const btnPrev = $("[data-lightbox-prev]", box);
    const btnNext = $("[data-lightbox-next]", box);
    const btnClose = $("[data-lightbox-close]", box);
    let items = [];
    let index = 0;

    function collect() {
      items = $$(".gitem").filter((el) => el.offsetParent !== null);
    }
    function render(i, initial) {
      if (!items.length) return;
      index = (i + items.length) % items.length;
      const item = items[index];
      const full = item.dataset.full || $("img", item).src;
      const cap = item.dataset.caption || $("img", item).alt;
      imgEl.classList.remove("is-in");
      const pre = new Image();
      pre.onload = () => {
        imgEl.src = full;
        imgEl.alt = cap || "";
        requestAnimationFrame(() => imgEl.classList.add("is-in"));
      };
      pre.src = full;
      if (countEl) countEl.textContent = `${pad(index + 1)} / ${pad(items.length)}`;
      if (capEl) capEl.textContent = cap || "";
    }
    function open(item) {
      collect();
      const i = items.indexOf(item);
      render(i < 0 ? 0 : i, true);
      box.classList.add("is-open");
      box.setAttribute("aria-hidden", "false");
      lockScroll();
    }
    function close() {
      box.classList.remove("is-open");
      box.setAttribute("aria-hidden", "true");
      unlockScroll();
    }
    doc.addEventListener("click", (e) => {
      const item = e.target.closest(".gitem");
      if (item) { e.preventDefault(); open(item); }
    });
    btnClose && btnClose.addEventListener("click", close);
    btnPrev && btnPrev.addEventListener("click", () => render(index - 1));
    btnNext && btnNext.addEventListener("click", () => render(index + 1));
    box.addEventListener("click", (e) => { if (e.target === box) close(); });
    doc.addEventListener("keydown", (e) => {
      if (!box.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") render(index + 1);
      if (e.key === "ArrowLeft") render(index - 1);
    });
  }

  /* ---------------- Booking modal ---------------- */
  function initBooking() {
    const modal = $("[data-booking-modal]");
    if (!modal) return;
    const form = $("[data-booking-form]", modal);
    const inInput = $("[name='checkin']", modal);
    const outInput = $("[name='checkout']", modal);
    const summary = $("[data-booking-summary]", modal);
    const summaryText = $("[data-booking-summary-text]", modal);
    const adultsEl = $("[data-adults]", modal);
    const childrenEl = $("[data-children]", modal);
    const finishBtn = $("[data-booking-finish]", modal);
    const resortSelect = $("[data-resort-select]", modal);

    const state = { adults: 2, children: 0 };
    const today = todayISO();
    if (inInput) { inInput.min = today; inInput.value = todayISO(1); }
    if (outInput) { outInput.min = todayISO(2); outInput.value = todayISO(3); }

    function open() {
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      lockScroll();
      setTimeout(() => inInput && inInput.focus({ preventScroll: true }), 350);
    }
    function close() {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      unlockScroll();
    }

    $$("[data-booking-open]").forEach((btn) => btn.addEventListener("click", (e) => { e.preventDefault(); open(); }));
    $$("[data-booking-close]").forEach((btn) => btn.addEventListener("click", close));
    modal.addEventListener("click", (e) => { if (e.target === modal || e.target.classList.contains("modal__backdrop")) close(); });
    doc.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("is-open")) close();
    });

    $$("[data-stepper]").forEach((stepper) => {
      const key = stepper.dataset.stepper;
      const display = $("[data-count-display]", stepper);
      const plus = $("[data-plus]", stepper);
      const minus = $("[data-minus]", stepper);
      const min = parseInt(stepper.dataset.min || "0", 10);
      const max = parseInt(stepper.dataset.max || "6", 10);
      function set(v) {
        state[key] = Math.max(min, Math.min(max, v));
        if (display) display.textContent = pad(state[key]);
        syncBar();
      }
      plus && plus.addEventListener("click", () => set(state[key] + 1));
      minus && minus.addEventListener("click", () => set(state[key] - 1));
      set(state[key] || min);
    });

    function syncBar() {
      const inVal = inInput ? inInput.value : "";
      const outVal = outInput ? outInput.value : "";
      $$("[data-bar-in]").forEach((el) => (el.textContent = formatDate(inVal)));
      $$("[data-bar-out]").forEach((el) => (el.textContent = formatDate(outVal)));
      $$("[data-bar-guests]").forEach((el) => {
        el.textContent = `${pad(state.adults)} Adult${state.adults > 1 ? "s" : ""}${state.children ? ` · ${pad(state.children)} Child${state.children > 1 ? "ren" : ""}` : ""}`;
      });
    }

    if (inInput && outInput) {
      inInput.addEventListener("change", () => {
        if (!inInput.value) return;
        const minOut = new Date(inInput.value + "T00:00:00");
        minOut.setDate(minOut.getDate() + 1);
        const minISO = minOut.toISOString().slice(0, 10);
        outInput.min = minISO;
        if (!outInput.value || outInput.value <= inInput.value) {
          const d = new Date(minOut); d.setDate(d.getDate() + 1);
          outInput.value = d.toISOString().slice(0, 10);
        }
        syncBar();
      });
      outInput.addEventListener("change", syncBar);
    }

    form && form.addEventListener("submit", (e) => {
      e.preventDefault();
      const inVal = inInput.value;
      const outVal = outInput.value;
      if (!inVal || !outVal) { toast("Please choose your arrival and departure dates."); return; }
      if (outVal <= inVal) { toast("Departure must be after arrival."); return; }
      const nights = Math.max(1, Math.round((new Date(outVal) - new Date(inVal)) / 86400000));
      if (summary && summaryText) {
        summaryText.innerHTML = `<strong>${formatDate(inVal)} → ${formatDate(outVal)}</strong><br>${nights} night${nights > 1 ? "s" : ""} · ${state.adults} adult${state.adults > 1 ? "s" : ""}${state.children ? ` · ${state.children} child${state.children > 1 ? "ren" : ""}` : ""}. Our reservations team will confirm availability on the next step.`;
        summary.classList.add("is-visible");
      }
      if (finishBtn) {
        finishBtn.hidden = false;
        if (resortSelect) {
          const opt = resortSelect.options[resortSelect.selectedIndex];
          if (opt && opt.dataset.url) finishBtn.href = opt.dataset.url;
        }
      }
      syncBar();
      toast("Dates noted. Continue to secure your stay.");
      summary && summary.scrollIntoView({ behavior: "smooth", block: "nearest" });
    });

    if (resortSelect && finishBtn) {
      resortSelect.addEventListener("change", () => {
        const opt = resortSelect.options[resortSelect.selectedIndex];
        if (opt && opt.dataset.url) finishBtn.href = opt.dataset.url;
      });
    }

    syncBar();
    return { open };
  }

  /* ---------------- Resort dropdown ---------------- */
  function initResortDropdown() {
    const wrap = $("[data-resort-dropdown]");
    if (!wrap) return;
    const btn = $("[data-resort-toggle]", wrap);
    const menu = $("[data-resort-menu]", wrap);
    if (!btn || !menu) return;

    function open() {
      wrap.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
      menu.setAttribute("aria-hidden", "false");
    }
    function close() {
      wrap.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
      menu.setAttribute("aria-hidden", "true");
    }
    function toggle() {
      if (wrap.classList.contains("is-open")) close();
      else open();
    }

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      toggle();
    });

    doc.addEventListener("click", (e) => {
      if (!wrap.contains(e.target)) close();
    });

    doc.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && wrap.classList.contains("is-open")) close();
    });
  }

  /* ---------------- Tabs ---------------- */
  function initTabs() {
    $$("[data-tabs]").forEach((wrap) => {
      const buttons = $$("[data-tab]", wrap);
      const panels = $$("[data-panel]", wrap);
      buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
          const key = btn.dataset.tab;
          buttons.forEach((b) => {
            const active = b === btn;
            b.classList.toggle("is-active", active);
            b.setAttribute("aria-selected", active ? "true" : "false");
          });
          panels.forEach((p) => {
            const active = p.dataset.panel === key;
            p.classList.toggle("is-active", active);
            if (active && hasGSAP && !reduceMotion) {
              gsap.fromTo(p, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" });
            }
          });
        });
      });
    });
  }

  /* ---------------- Gallery filters ---------------- */
  function initFilters() {
    const bar = $("[data-filter-bar]");
    if (!bar) return;
    const buttons = $$("[data-filter]", bar);
    const items = $$(".gitem[data-cat]");
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const filter = btn.dataset.filter;
        buttons.forEach((b) => b.classList.toggle("is-active", b === btn));
        items.forEach((item) => {
          const show = filter === "all" || item.dataset.cat.split(" ").includes(filter);
          if (show) {
            item.style.display = "";
            if (hasGSAP) gsap.fromTo(item, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" });
          } else {
            item.style.display = "none";
          }
        });
        const count = $("[data-gallery-count]");
        if (count) count.textContent = `${pad(items.filter((i) => i.style.display !== "none").length)} frames`;
      });
    });
  }

  /* ---------------- Magnetic buttons ---------------- */
  function initMagnetic() {
    if (!isFine || !hasGSAP || reduceMotion) return;
    $$("[data-magnetic]").forEach((el) => {
      const strength = parseFloat(el.dataset.magnetic || 0.22);
      const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3.out" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3.out" });
      el.addEventListener("mousemove", (e) => {
        const r = el.getBoundingClientRect();
        xTo((e.clientX - (r.left + r.width / 2)) * strength);
        yTo((e.clientY - (r.top + r.height / 2)) * strength);
      });
      el.addEventListener("mouseleave", () => { xTo(0); yTo(0); });
    });
  }

  /* ---------------- Treatment hover image ---------------- */
  function initTreatments() {
    if (!isFine) return;
    $$(".treatment").forEach((row) => {
      const img = $(".t-hover-img", row);
      if (!img) return;
      const move = (e) => {
        img.style.left = e.clientX + "px";
        img.style.top = e.clientY + "px";
      };
      row.addEventListener("mouseenter", (e) => { row.classList.add("is-hovering"); move(e); });
      row.addEventListener("mousemove", move);
      row.addEventListener("mouseleave", () => row.classList.remove("is-hovering"));
    });
  }

  /* ---------------- Forms ---------------- */
  function validEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
  }
  function initForms() {
    $$("[data-form]").forEach((form) => {
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        let valid = true;
        $$("input[required], textarea[required], select[required]", form).forEach((input) => {
          const field = input.closest(".field");
          let ok = input.value.trim().length > 0;
          if (ok && input.type === "email") ok = validEmail(input.value.trim());
          if (field) field.classList.toggle("field--error", !ok);
          if (!ok) valid = false;
        });
        if (!valid) { toast("Please check the highlighted fields."); return; }
        const msg = form.dataset.success || "Thank you — our team will be in touch shortly.";
        toast(msg);
        form.reset();
      });
      $$("input, textarea, select", form).forEach((input) => {
        input.addEventListener("input", () => input.closest(".field") && input.closest(".field").classList.remove("field--error"));
      });
    });
  }

  /* ---------------- Page transition ---------------- */
  function initPageTransition() {
    if (reduceMotion) return;
    const veil = $(".page-veil");
    if (!veil) return;
    doc.addEventListener("click", (e) => {
      const link = e.target.closest("a");
      if (!link) return;
      const href = link.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || link.target === "_blank" || link.hasAttribute("download") || e.metaKey || e.ctrlKey || e.shiftKey) return;
      if (!/\.html?($|\?)/.test(href) || link.host !== window.location.host) return;
      if (href === window.location.pathname.split("/").pop()) return;
      e.preventDefault();
      const logo = $("img", veil);
      gsap.timeline({
        onComplete: () => { window.location.href = href; },
      })
        .to(veil, { scaleY: 1, transformOrigin: "bottom", duration: 0.62, ease: "power4.inOut" })
        .to(logo, { opacity: 1, duration: 0.35 }, "-=0.15");
    });
  }

  /* ---------------- Section dot nav ---------------- */
  function initSideIndex() {
    const nav = $("[data-side-index]");
    if (!nav || !hasST) return;
    const links = $$("a", nav);
    links.forEach((link) => {
      const id = link.getAttribute("href");
      const section = id && id.startsWith("#") ? $(id) : null;
      if (!section) return;
      ScrollTrigger.create({
        trigger: section,
        start: "top 50%",
        end: "bottom 50%",
        onToggle: (self) => link.classList.toggle("is-active", self.isActive),
      });
    });
  }

  /* ---------------- Hero ---------------- */
  function prepareHero() {
    const hero = $(".hero");
    if (!hero || !hasGSAP || reduceMotion) return;
    const lines = $$(".hero__title .line > span", hero);
    const media = $(".hero__media video, .hero__media img", hero);
    if (lines.length) gsap.set(lines, { yPercent: 112 });
    const fadeItems = $$("[data-hero-fade]", hero).concat([$(".booking-bar", hero)]).filter(Boolean);
    gsap.set(fadeItems, { opacity: 0, y: 26 });
    if (media) gsap.set(media, { scale: 1.14 });
  }

  function playHero() {
    const hero = $(".hero");
    if (!hero || !hasGSAP || reduceMotion) return;
    const tl = gsap.timeline({ delay: 0.05 });
    const lines = $$(".hero__title .line > span", hero);
    const media = $(".hero__media video, .hero__media img", hero);
    const fadeItems = $$("[data-hero-fade]", hero).concat([$(".booking-bar", hero)]).filter(Boolean);
    tl.to(media, { scale: 1, duration: 2.4, ease: "power3.out" }, 0)
      .to(lines, { yPercent: 0, duration: 1.35, ease: "power4.out", stagger: 0.1 }, 0.15)
      .to(fadeItems, { opacity: 1, y: 0, duration: 1.1, ease: "power3.out", stagger: 0.12 }, 0.55);
  }

  function preparePageHero() {
    const title = $("[data-page-title]");
    if (!hasGSAP || reduceMotion) return;
    if (title) {
      const lines = $$(".line > span", title);
      if (lines.length) gsap.set(lines, { yPercent: 112 });
    }
    const fades = $$("[data-page-fade]");
    if (fades.length) gsap.set(fades, { opacity: 0, y: 24 });
  }

  function playPageHero() {
    const title = $("[data-page-title]");
    if (!hasGSAP || reduceMotion) return;
    if (title) {
      const lines = $$(".line > span", title);
      if (lines.length) {
        gsap.to(lines, { yPercent: 0, duration: 1.25, ease: "power4.out", stagger: 0.1, delay: 0.15 });
      }
    }
    const fades = $$("[data-page-fade]");
    if (fades.length) gsap.to(fades, { opacity: 1, y: 0, duration: 1, ease: "power3.out", stagger: 0.08, delay: 0.45 });
  }

  /* ---------------- Refresh handling ---------------- */
  function refreshST() {
    if (hasST) ScrollTrigger.refresh();
  }

  /* ---------------- Back to Top ---------------- */
  function initBackToTop() {
    const targets = $$("[data-back-to-top], .footer__back");
    targets.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        if (lenis) {
          lenis.scrollTo(0, { duration: 1.2 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
    });
  }

  /* ---------------- Boot ---------------- */
  doc.addEventListener("DOMContentLoaded", async () => {
    if (hasGSAP && hasST) {
      gsap.registerPlugin(ScrollTrigger);
      if (window.SplitText) gsap.registerPlugin(SplitText);
      ScrollTrigger.config({ ignoreMobileResize: true });
    }

    initLenis();
    if (!lenis) window.addEventListener("scroll", () => onScroll(window.scrollY), { passive: true });
    onScroll(window.scrollY);
    initHeader();
    initResortDropdown();
    initCursor();
    initTextReveals();
    initParallax();
    initCounters();
    initHorizontal();
    initRituals();
    initVoices();
    initLightbox();
    initBooking();
    initTabs();
    initFilters();
    initMagnetic();
    initTreatments();
    initForms();
    initPageTransition();
    initSideIndex();
    initBackToTop();

    if (lenis) lenis.stop();
    prepareHero();
    preparePageHero();

    await initPreloader();
    playHero();
    playPageHero();
    if (hasST) setTimeout(() => ScrollTrigger.refresh(), 120);

    window.addEventListener("resize", () => {
      clearTimeout(window.__mokshaResize);
      window.__mokshaResize = setTimeout(refreshST, 300);
    });

    // Video: autoplay only when allowed, pause when offscreen
    const heroVideo = $(".hero__media video");
    if (heroVideo) {
      heroVideo.muted = true;
      const p = heroVideo.play();
      if (p && p.catch) p.catch(() => {});
      if ("IntersectionObserver" in window) {
        new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) { heroVideo.play().catch(() => {}); }
            else { heroVideo.pause(); }
          });
        }, { threshold: 0.05 }).observe(heroVideo);
      }
    }

    // Ensure browser back-forward cache doesn't leave the veil up
    window.addEventListener("pageshow", (e) => {
      if (e.persisted) {
        const veil = $(".page-veil");
        if (veil && hasGSAP) gsap.set(veil, { scaleY: 0 });
      }
    });
  });
})();
