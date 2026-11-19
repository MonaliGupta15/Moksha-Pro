/* Home page body */
import { icons, bookingBar } from "./layout.mjs";

const marqueeItems = [
  "Cable-car arrival",
  "Infinity pool at 5,000 ft",
  "North India's largest Hammam",
  "Ayurveda & Abhyanga",
  "Pines & Cones",
  "Star-lit bonfires",
  "Only four suites",
  "Himalayan silence",
  "Timber Trail Cable Car",
  "Himachali Terroir",
];

const group = (items, cls = "") =>
  `<div class="marquee__group ${cls}">${items
    .map((i) => `<span class="marquee__item"><i></i>${i}</span>`)
    .join("")}</div>`;

function marquee(items, variant = "", attrs = "") {
  return `<div class="marquee ${variant}" ${attrs} aria-hidden="true"><div class="marquee__track">${group(items)}${group(items)}</div></div>`;
}

const chapters = [
  {
    img: "moksha-cable-car-1.jpg",
    tag: "01 — Arrival",
    num: "The ascent",
    title: "Your stay begins in the sky",
    text: "Board the cable car at Timber Trail and rise above the valley floor. In nine unhurried minutes, the city becomes a rumour and the Shivaliks open out beneath you.",
    href: "experiences.html",
    label: "The cable car",
  },
  {
    img: "Moksha-Luxury-Suite2.jpg",
    tag: "02 — Stay",
    num: "800 – 1,200 sq ft",
    title: "Rooms with a horizon",
    text: "Four suites, each with a private balcony, panoramic windows and a view that changes with the light. Space to unpack slowly.",
    href: "suites.html",
    label: "Explore suites",
  },
  {
    img: "pine-and-cones.jpg",
    tag: "03 — Table",
    num: "All-day dining",
    title: "A table in the clouds",
    text: "Himachali Dham, Thai curries, hand-rolled pasta and single malts — served indoors by the fire or outside under the stars at Pines & Cones.",
    href: "dining.html",
    label: "Explore dining",
  },
  {
    img: "hammam-image-1.jpg",
    tag: "04 — Ritual",
    num: "The spa",
    title: "Rituals older than the hills",
    text: "Warm oil, steam, mountain herbs and the largest Hammam in North India. A deliberate return to the body you arrived in.",
    href: "wellness.html",
    label: "Enter the spa",
  },
];

const rituals = [
  {
    title: "Abhyanga",
    text: "A synchronised, full-body massage with warm herbal oil, chosen for your dosha and poured slowly enough that the mind has no choice but to follow the body into rest.",
    meta: ["60 / 90 minutes", "Ayurveda"],
    img: "wellness-1.jpg",
    caption: "Abhyanga · warm herbal oil",
  },
  {
    title: "Shirodhara",
    text: "A continuous thread of warm oil is poured across the forehead. Thought slows. The nervous system remembers what quiet feels like. One of Ayurveda's most profound rituals.",
    meta: ["45 minutes", "Signature"],
    img: "wellness-2.jpg",
    caption: "Shirodhara · the oil thread",
  },
  {
    title: "The Hammam",
    text: "The largest Hammam in North India. Heat, steam, black soap and a vigorous kessa glove — an ancient cleansing ritual reimagined in marble and candlelight.",
    meta: ["90 minutes", "Hammam"],
    img: "hammam-image-1.jpg",
    caption: "The Hammam · marble & steam",
  },
  {
    title: "Infinity Pool",
    text: "A blade of warm water that ends where the mountains begin. Swim at dawn, float at noon, and watch the sky turn copper from the edge of the world.",
    meta: ["Guests only", "Open 7 am – 7 pm"],
    img: "Pool3.jpg",
    caption: "The infinity pool · 5,000 ft",
  },
  {
    title: "Sunrise Yoga",
    text: "Daily practice on the yoga deck as the valley wakes beneath you. Breath, movement and the first light on the pine tops. No experience required — only curiosity.",
    meta: ["Daily · 6:30 am", "Yoga deck"],
    img: "yoga-new.jpg",
    caption: "Sunrise yoga · the valley below",
  },
];

const suites = [
  {
    img: "Moksha-suite-new.avif",
    title: "Moksha Suite",
    size: "800 sq ft",
    rate: "From ₹23,760",
    text: "French bay windows, a king bed, a study and a balcony that holds the whole valley.",
  },
  {
    img: "luxury-Suite.jpg",
    title: "Moksha Luxury Suite",
    size: "850 sq ft",
    rate: "From ₹28,400",
    text: "A lounge, a bathtub and a private balcony made for two.",
  },
  {
    img: "Royal-suite1.jpg",
    title: "Royal Suite",
    size: "1,000 sq ft",
    rate: "From ₹36,900",
    text: "Two bedrooms, a fireplace, a private bar and a sitting room for slow evenings.",
  },
];

const moments = [
  { time: "05 : 48", title: "First light", text: "Tea on the balcony as the Shivaliks emerge from mist.", img: "yoga-new.jpg", cls: "dawn", num: "01" },
  { time: "12 : 20", title: "The long afternoon", text: "A swim at the infinity edge, lunch beneath the pines.", img: "Pool3.jpg", cls: "day", num: "02" },
  { time: "18 : 30", title: "Copper hour", text: "Live music, a cold drink, and the sun folding into the hills.", img: "exp-img.jpg", cls: "dusk", num: "03" },
  { time: "22 : 00", title: "After dark", text: "Bonfire, single malts and a sky without light pollution.", img: "exp8.jpg", cls: "night", num: "04" },
];

const voices = [
  {
    name: "Gaurav Makhija",
    quote: "Truly a rejuvenating experience. From the serene surroundings to the attentive staff, every aspect of my stay exceeded my expectations. I left feeling refreshed, renewed, and eager to return.",
  },
  {
    name: "Ruchika Dhingra",
    quote: "The peaceful atmosphere and breathtaking views were exactly what I needed. The staff went above and beyond, and the variety of activities kept me entertained throughout my entire stay.",
  },
  {
    name: "Poonam Jain",
    quote: "The place is so peaceful and beautiful. The staff were really nice and made me feel welcome. The spa treatments were so relaxing, and the food was delicious. The perfect getaway.",
  },
  {
    name: "Saransh S",
    quote: "The biggest rooms, the best jacuzzi with the best sunset view ever. The cable ropeway is included and they prioritise you for it. We went for our anniversary and it was amazing.",
  },
  {
    name: "Dhruv A",
    quote: "One of the finest places to visit, with one of the finest teams. Prabhjot made our stay so comfortable. Hospitality like this is rare — keep it up, team.",
  },
  {
    name: "Hemavathi N",
    quote: "Comfortable for children and grandparents alike, with very tasty food and natural beauty all around. For meditation, it is a very special place.",
  },
];

const galleryItems = [
  { img: "gallery/All-gal1.jpg", cap: "The arrival", full: "gallery/All-gal1.jpg" },
  { img: "gallery/All-gal2.jpg", cap: "Suite mornings", full: "gallery/All-gal2.jpg" },
  { img: "gallery/All-gal3.jpg", cap: "The valley", full: "gallery/All-gal3.jpg" },
  { img: "gallery/All-gal4.jpg", cap: "Pines & Cones", full: "gallery/All-gal4.jpg" },
  { img: "gallery/All-gal5.jpg", cap: "Infinity edge", full: "gallery/All-gal5.jpg" },
  { img: "gallery/All-gal6.jpg", cap: "The Hammam", full: "gallery/All-gal6.jpg" },
  { img: "gallery/All-gal7.jpg", cap: "Suite details", full: "gallery/All-gal7.jpg" },
  { img: "gallery/All-gal8.jpg", cap: "Dinner at dusk", full: "gallery/All-gal8.jpg" },
  { img: "gallery/All-gal9.jpg", cap: "The ascent", full: "gallery/All-gal9.jpg" },
  { img: "gallery/All-gal10.jpg", cap: "Mountain light", full: "gallery/All-gal10.jpg" },
  { img: "gallery/All-gal11.jpg", cap: "Quiet corners", full: "gallery/All-gal11.jpg" },
  { img: "gallery/Exterior1.jpg", cap: "Above Parwanoo", full: "gallery/Exterior1.jpg" },
];

const instaImages = ["insta1.jpg", "insta3.jpg", "insta4.jpg", "insta5.jpg", "insta6.jpg", "insta7.jpg", "insta8.jpg", "insta10.jpg"];

export const home = `
<section class="hero" id="top">
  <div class="hero__media">
    <video src="assets/video/hero.mp4" poster="assets/img/main-banner.jpg" autoplay muted loop playsinline preload="metadata" aria-hidden="true"></video>
    <div class="hero__scrim"></div><div class="hero__vignette"></div>
  </div>
  <div class="hero__scroll" aria-hidden="true"><span>Scroll to discover</span><i></i></div>
  <div class="hero__side" aria-hidden="true"><span>30.81° N / 76.99° E</span><i></i><span>5,000 ft</span></div>
  <div class="hero__content container">
    <p class="hero__kicker" data-hero-fade>Moksha Himalaya Spa Resort · Parwanoo</p>
    <h1 class="hero__title">
      <span class="line"><span>Where the mountains</span></span>
      <span class="line"><span><em>breathe with you.</em></span></span>
    </h1>
    <div class="hero__bottom">
      <p class="hero__sub" data-hero-fade>A cable-car ascent into stillness. An all-suite sanctuary suspended above the Shivaliks, where the air is thinner, the days are slower, and the silence is entirely yours.</p>
      <div class="hero__actions" data-hero-fade>
        <a class="btn btn--solid" href="suites.html" data-magnetic><span>Explore the resort</span><span class="btn__arrow">${icons.arrow}</span></a>
        <a class="link-arrow" href="gallery.html"><span>View the gallery</span>${icons.arrowRight}</a>
      </div>
    </div>
    ${bookingBar()}
  </div>
  ${marquee(marqueeItems, "hero__marquee", 'data-hero-fade')}
</section>

<section class="manifesto section">
  <div class="container">
    <div class="manifesto__grid">
      <aside class="manifesto__aside" data-reveal>
        <p class="eyebrow">The feeling</p>
        <p class="manifesto__coords">Parwanoo, Himachal Pradesh<br>1,500 metres above sea level<br>Reached by cable car</p>
        <div class="manifesto__sign" aria-hidden="true">M</div>
      </aside>
      <div class="manifesto__body">
        <p class="manifesto__text" data-words>Some places ask to be seen. Moksha asks to be felt. Five thousand feet above the ordinary, reached by a cable car and a change of pace, this is a sanctuary where pine-scented air, unhurried ritual and the quiet architecture of the Himalayas conspire to return you to yourself.</p>
        <div class="manifesto__foot" data-reveal>
          <span class="manifesto__note">An all-suite hideaway in the Shivalik ranges — forty minutes from Chandigarh, a world away from everything else.</span>
          <a class="link-arrow" href="experiences.html"><span>Discover our story</span>${icons.arrowRight}</a>
        </div>
      </div>
    </div>
    <div class="manifesto__strip" data-reveal>
      <div class="media parallax-wrap"><img src="assets/img/exp-img.jpg" alt="A view over the Shivalik ranges at Moksha Himalaya" data-parallax="8"></div>
      <div class="media parallax-wrap"><img src="assets/img/wellness-1.jpg" alt="Ayurvedic oils prepared for a treatment" data-parallax="12"></div>
      <div class="media parallax-wrap"><img src="assets/img/Pool3.jpg" alt="The infinity pool suspended above the valley" data-parallax="6"></div>
    </div>
    <div class="stats" style="margin-top:clamp(50px,7vw,100px)" data-reveal>
      <div class="stat"><span class="stat__num"><span data-count="5000">0</span></span><span class="stat__label">Feet above the sea</span></div>
      <div class="stat"><span class="stat__num"><span data-count="10">0</span><sup>k+</sup></span><span class="stat__label">Guests who exhaled</span></div>
      <div class="stat"><span class="stat__num"><span data-count="4">0</span></span><span class="stat__label">Suite sanctuaries</span></div>
      <div class="stat"><span class="stat__num"><span data-count="40">0</span><sup>min</sup></span><span class="stat__label">From Chandigarh</span></div>
    </div>
  </div>
</section>

<section class="resorts-showcase section" id="resorts" data-tabs>
  <div class="container">
    <div class="resorts-showcase__head" data-reveal>
      <p class="eyebrow">The Timber Trail Collection</p>
      <h2 data-split>Three sanctuaries. <em class="italic gold">One mountain ridge.</em></h2>
      <p>From the pine-scented foothills along the Kaushalya River to the 5,000-ft heights reached only by cable car — discover the three distinct retreats of Timber Trail in Parwanoo. Toggle below to compare elevations, atmospheres, and stays.</p>
    </div>

    <div class="resort-tabs-bar" role="tablist" aria-label="Our Resorts" data-reveal>
      <button class="resort-tab is-active" type="button" data-tab="moksha" role="tab" aria-selected="true" aria-controls="panel-moksha">
        <span class="resort-tab__num">01</span>
        <div class="resort-tab__info">
          <span class="resort-tab__name">Moksha Himalaya Spa Resort</span>
          <span class="resort-tab__tag">5,000 ft · All-Suite Wellness Sanctuary</span>
        </div>
        <span class="resort-tab__pill">Current Resort</span>
      </button>
      <button class="resort-tab" type="button" data-tab="heights" role="tab" aria-selected="false" aria-controls="panel-heights">
        <span class="resort-tab__num">02</span>
        <div class="resort-tab__info">
          <span class="resort-tab__name">Timber Trail Heights &amp; Terraces</span>
          <span class="resort-tab__tag">5,000 ft · Mountain Crest &amp; Celebrations</span>
        </div>
        <span class="resort-tab__pill">Sister Resort</span>
      </button>
      <button class="resort-tab" type="button" data-tab="base" role="tab" aria-selected="false" aria-controls="panel-base">
        <span class="resort-tab__num">03</span>
        <div class="resort-tab__info">
          <span class="resort-tab__name">Timber Trail Resort</span>
          <span class="resort-tab__tag">Foothills · River Lawns &amp; Cable Car Base</span>
        </div>
        <span class="resort-tab__pill">Sister Resort</span>
      </button>
    </div>

    <!-- Panel 1: Moksha -->
    <div class="resort-panel is-active" id="panel-moksha" data-panel="moksha" role="tabpanel">
      <div class="resort-panel__grid">
        <div class="resort-panel__media">
          <img src="assets/img/moksha-cable-car-1.jpg" alt="Moksha Himalaya cable car and resort" loading="lazy">
          <div class="resort-panel__badge">
            <strong>5,000 FT</strong>
            <span>Above Sea Level</span>
          </div>
          <span class="resort-panel__tag">Cable-Car Arrival</span>
        </div>
        <div class="resort-panel__content">
          <p class="eyebrow">The Signature Wellness Escape</p>
          <h3>Moksha Himalaya Spa Resort</h3>
          <p class="resort-panel__desc">Suspended in the quiet clouds of Parwanoo, Moksha is our flagship Ayurvedic wellness retreat. Accessible exclusively via a 9-minute cable-car ascent over the valley, it offers all-suite luxury, North India's largest Hammam, and a heated infinity pool touching the mountain sky.</p>
          <div class="resort-specs">
            <div class="resort-spec"><span>Elevation</span><strong>5,000 ft (1,500 m)</strong></div>
            <div class="resort-spec"><span>Arrival</span><strong>9-min scenic cable car</strong></div>
            <div class="resort-spec"><span>Accommodation</span><strong>4 signature suite types (800–1,200 sq ft)</strong></div>
            <div class="resort-spec"><span>Signature Rituals</span><strong>Ayurveda, Turkish Hammam &amp; Infinity Pool</strong></div>
            <div class="resort-spec"><span>Dining</span><strong>Pines &amp; Cones — Himachali Dham &amp; Global</strong></div>
            <div class="resort-spec"><span>Atmosphere</span><strong>Restorative stillness &amp; mountain silence</strong></div>
          </div>
          <div class="resort-panel__actions">
            <a class="btn btn--solid" href="suites.html" data-magnetic><span>Explore Moksha Suites</span> ${icons.arrow}</a>
            <a class="btn btn--light" href="#" data-booking-open><span>Reserve a Suite</span></a>
          </div>
        </div>
      </div>
    </div>

    <!-- Panel 2: Heights & Terraces -->
    <div class="resort-panel" id="panel-heights" data-panel="heights" role="tabpanel">
      <div class="resort-panel__grid">
        <div class="resort-panel__media">
          <img src="assets/img/resorts/cable.jpg" alt="Timber Trail Heights & Terraces on the mountain crest" loading="lazy">
          <div class="resort-panel__badge">
            <strong>5,000 FT</strong>
            <span>Mountain Crest</span>
          </div>
          <span class="resort-panel__tag">Weddings &amp; MICE</span>
        </div>
        <div class="resort-panel__content">
          <p class="eyebrow">The Panoramic Mountain Retreat</p>
          <h3>Timber Trail Heights &amp; Terraces</h3>
          <p class="resort-panel__desc">Perched along the high crest of the Shivaliks adjacent to the cable-car terminal, Heights & Terraces commands a sweeping 360-degree panorama of Himachal. Renowned for terraced valley balconies, destination weddings in the Mansion Hall, and state-of-the-art conference conclaves.</p>
          <div class="resort-specs">
            <div class="resort-spec"><span>Elevation</span><strong>5,000 ft at the upper ridge</strong></div>
            <div class="resort-spec"><span>Arrival</span><strong>Aerial cable car from Timber Trail base</strong></div>
            <div class="resort-spec"><span>Accommodation</span><strong>Deluxe, Super Deluxe &amp; Terraced Suites</strong></div>
            <div class="resort-spec"><span>Celebrations</span><strong>Mansion Hall (350 pax) &amp; Royal Ballroom (150 pax)</strong></div>
            <div class="resort-spec"><span>Conferencing</span><strong>2,095 sq ft equipped mountain hall</strong></div>
            <div class="resort-spec"><span>Dining</span><strong>Mezza 9 &amp; The Deck open-air terrace dining</strong></div>
          </div>
          <div class="resort-panel__actions">
            <a class="btn btn--solid" href="https://www.timbertrail.in/heights-terraces-parwanoo" target="_blank" rel="noopener" data-magnetic><span>Explore Heights &amp; Terraces</span> ${icons.arrow}</a>
            <a class="btn btn--light" href="weddings.html"><span>Weddings &amp; Celebrations</span></a>
          </div>
        </div>
      </div>
    </div>

    <!-- Panel 3: Timber Trail Resort (Base) -->
    <div class="resort-panel" id="panel-base" data-panel="base" role="tabpanel">
      <div class="resort-panel__grid">
        <div class="resort-panel__media">
          <img src="assets/img/resorts/himalayas.jpg" alt="Timber Trail Resort at the foothills of Parwanoo" loading="lazy">
          <div class="resort-panel__badge">
            <strong>FOOTHILLS</strong>
            <span>Valley Floor</span>
          </div>
          <span class="resort-panel__tag">Cable-Car Base</span>
        </div>
        <div class="resort-panel__content">
          <p class="eyebrow">The River Valley Gateway</p>
          <h3>Timber Trail Resort</h3>
          <p class="resort-panel__desc">Nestled at the serene foothills along the Kaushalya River, Timber Trail Resort is the welcoming highway gateway to Parwanoo. Sprawling pine-shaded lawns, riverside dining, children's recreation, and the historic launchpad terminal for the aerial cable car up to the heights.</p>
          <div class="resort-specs">
            <div class="resort-spec"><span>Elevation</span><strong>Foothills of the Shivaliks</strong></div>
            <div class="resort-spec"><span>Arrival</span><strong>NH-22 Himalayan Expressway (drive-in)</strong></div>
            <div class="resort-spec"><span>Accommodation</span><strong>Garden-facing rooms &amp; riverside cottages</strong></div>
            <div class="resort-spec"><span>Key Highlight</span><strong>Departure terminal for the Timber Trail ropeway</strong></div>
            <div class="resort-spec"><span>Dining</span><strong>Riverside restaurant, alfresco bar &amp; verandas</strong></div>
            <div class="resort-spec"><span>Ideal For</span><strong>Weekend getaways, family day-outs &amp; stopovers</strong></div>
          </div>
          <div class="resort-panel__actions">
            <a class="btn btn--solid" href="https://www.timbertrail.in/resort-parwanoo" target="_blank" rel="noopener" data-magnetic><span>Explore Base Resort</span> ${icons.arrow}</a>
            <a class="btn btn--light" href="contact.html"><span>Route &amp; Directions</span></a>
          </div>
        </div>
      </div>
    </div>

    <div class="resorts-ribbon" data-reveal>
      <div class="resorts-ribbon__left">
        <span class="resorts-ribbon__icon">${icons.cableCar}</span>
        <div class="resorts-ribbon__text">
          <strong>The Timber Trail Aerial Ropeway:</strong> A 1.8 km scenic cable car journey connects the foothill base at Timber Trail Resort to the 5,000-ft mountain crest in just 9 unhurried minutes.
        </div>
      </div>
      <a class="resorts-ribbon__cta" href="experiences.html"><span>Explore the Cable Car Experience</span> ${icons.arrowRight}</a>
    </div>
  </div>
</section>

<section class="chapters" id="experience" data-horizontal>
  <div class="chapters__pin">
    <div class="chapters__track" data-horizontal-track>
      <div class="chapters__intro">
        <p class="eyebrow">The experience</p>
        <h2 class="h2" data-split>Four ways to <em class="italic gold">disappear</em></h2>
        <p>Not a checklist. A rhythm. Arrive by air, stay above the clouds, eat well, and let the mountain do the rest.</p>
        <span class="chapters__hint"><i></i>Scroll to move through</span>
      </div>
      ${chapters.map((c) => `<article class="chapter-card">
        <div class="chapter-card__img"><img src="assets/img/${c.img}" alt="${c.title}" loading="lazy"></div>
        <span class="chapter-card__num">${c.tag}</span>
        <span class="chapter-card__price">${c.num}</span>
        <span class="chapter-card__tag">${c.tag.split("—")[1].trim()}</span>
        <h3>${c.title}</h3>
        <p>${c.text}</p>
        <a class="link-arrow" href="${c.href}"><span>${c.label}</span>${icons.arrowRight}</a>
      </article>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="rituals section" id="rituals">
  <div class="container">
    <div class="section-head">
      <div>
        <p class="eyebrow">Chapter 02 · Wellness</p>
        <h2 class="h2" data-split style="margin-top:20px">Rituals older<br>than the <em class="italic gold">hills</em></h2>
      </div>
      <div class="section-head__aside">
        <p class="lead">The spa at Moksha is not an amenity. It is the reason the resort exists — a collection of Ayurvedic and international rituals, practised slowly, in rooms that smell of cedar and steam.</p>
        <a class="link-arrow" href="wellness.html"><span>Enter the spa</span>${icons.arrowRight}</a>
      </div>
    </div>
    <div class="rituals__grid">
      <div class="rituals__sticky">
        <div class="rituals__media">
          ${rituals.map((r, i) => `<img src="assets/img/${r.img}" alt="${r.caption}" class="${i === 0 ? "is-active" : ""}" data-ritual-img loading="lazy">`).join("\n          ")}
          <span class="rituals__badge">The Spa<br>at Moksha<br>· Est. ·</span>
          <div class="rituals__caption"><i></i><span data-ritual-count>01 / 05</span><span data-ritual-caption>${rituals[0].caption}</span></div>
        </div>
      </div>
      <div class="rituals__list">
        ${rituals.map((r, i) => `<article class="ritual ${i === 0 ? "is-active" : ""}" data-ritual="${i}" data-caption="${r.caption}">
          <span class="ritual__num">0${i + 1}</span>
          <div>
            <h3>${r.title}</h3>
            <p>${r.text}</p>
            <div class="ritual__meta">${r.meta.map((m) => `<span>${m}</span>`).join("")}</div>
            <div class="ritual__img"><img src="assets/img/${r.img}" alt="${r.caption}" loading="lazy"></div>
          </div>
        </article>`).join("\n        ")}
      </div>
    </div>
  </div>
</section>

<section class="suites section" id="stay">
  <div class="container">
    <div class="section-head">
      <div>
        <p class="eyebrow">Chapter 01 · Stay</p>
        <h2 class="h2" data-split style="margin-top:20px">Suites with a view<br>of <em class="italic gold">forever</em></h2>
      </div>
      <div class="section-head__aside">
        <p class="lead">Only four categories, each with a private balcony and windows that refuse to compromise. Simplicity, space and a horizon that does the decorating for us.</p>
        <a class="link-arrow" href="suites.html"><span>All suites &amp; rates</span>${icons.arrowRight}</a>
      </div>
    </div>
    <div class="suites__grid">
      ${suites.map((s, i) => `<a class="suite-card" href="suites.html" data-reveal data-reveal-delay="${i * 0.08}">
        <div class="suite-card__img"><img src="assets/img/${s.img}" alt="${s.title}" loading="lazy"></div>
        <div class="suite-card__top"><span class="suite-card__size">${s.size}</span><span class="suite-card__rate">${s.rate}</span></div>
        <h3>${s.title}</h3>
        <p>${s.text}</p>
        <span class="suite-card__link"><span>Discover the suite</span>${icons.arrow}</span>
      </a>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="dining-home section" id="dine">
  <div class="container">
    <div class="dining-home__grid">
      <div class="dining-home__media parallax-wrap" data-reveal>
        <img src="assets/img/Dine.jpg" alt="Dinner served at Pines &amp; Cones" data-parallax="7" loading="lazy">
        <span class="dining-home__badge"><i></i>Pines &amp; Cones · All-day dining</span>
      </div>
      <div class="dining-home__text">
        <p class="eyebrow">Chapter 03 · Table</p>
        <h2 class="h2" data-split>Himalayan terroir,<br><em class="italic gold">global table</em></h2>
        <p class="lead">Our chefs cook with what the mountains give them — organic produce, local herbs, and a menu that moves easily between Himachali Dham and the coast of Thailand.</p>
        <div class="menu-list">
          <div class="menu-list__row"><strong>Himachali Dham</strong><i></i><span>Slow-cooked · local</span></div>
          <div class="menu-list__row"><strong>Thai green curry</strong><i></i><span>Aromatic · garden herbs</span></div>
          <div class="menu-list__row"><strong>Hand-rolled pasta</strong><i></i><span>Made daily</span></div>
          <div class="menu-list__row"><strong>Single malts &amp; wine</strong><i></i><span>The bar</span></div>
        </div>
        <div class="dining-home__cta">
          <a class="btn btn--light" href="dining.html"><span>Explore dining</span>${icons.arrow}</a>
          <a class="link-arrow" href="dining.html"><span>Reserve a table</span>${icons.arrowRight}</a>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="day section">
  <div class="container">
    <div class="day__head">
      <p class="eyebrow">A day above the clouds</p>
      <h2 class="h2" data-split style="margin-top:20px">Nothing to do.<br>Everything to <em class="italic gold">feel.</em></h2>
    </div>
    <div class="day__grid">
      ${moments.map((m) => `<article class="moment moment--${m.cls}" data-reveal>
        <img src="assets/img/${m.img}" alt="${m.title}" loading="lazy">
        <span class="moment__time">${m.time}</span>
        <span class="moment__num">${m.num}</span>
        <div><h3>${m.title}</h3><p>${m.text}</p></div>
      </article>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="voices section" id="voices">
  <div class="container">
    <div class="voices__head">
      <div>
        <p class="eyebrow">A word from our guests</p>
        <h2 class="h2" data-split style="margin-top:20px">Excellent, by every<br>measure that <em class="italic gold">matters</em></h2>
      </div>
      <div class="voices__rating">
        <div class="voices__stars" aria-label="Five out of five">${icons.star.repeat(5)}</div>
        <p>As rated by over 10,000 real guests</p>
      </div>
    </div>
    <div class="voices__stage" data-voices>
      ${voices.map((v, i) => `<article class="voice ${i === 0 ? "is-active" : ""}">
        <div class="voice__meta"><span class="voice__name">${v.name}</span><span class="voice__role">Verified stay</span></div>
        <p class="voice__quote">${v.quote}</p>
      </article>`).join("\n      ")}
    </div>
    <div class="voices__controls">
      <div class="voices__nav">
        <button class="voices__btn" type="button" data-voice-prev aria-label="Previous review">${icons.arrowLeft}</button>
        <button class="voices__btn" type="button" data-voice-next aria-label="Next review">${icons.arrowRight}</button>
      </div>
      <div class="voices__progress" aria-hidden="true"><i data-voice-progress></i></div>
      <span class="voices__index" data-voice-index><b>01</b> / 06</span>
    </div>
  </div>
</section>

<section class="gallery-home section" id="gallery">
  <div class="container">
    <div class="section-head">
      <div>
        <p class="eyebrow">The gallery</p>
        <h2 class="h2" data-split style="margin-top:20px">Frames from<br>the <em class="italic gold">mountain</em></h2>
      </div>
      <div class="section-head__aside">
        <p class="lead">A quiet collection of the light, the rooms and the rituals — photographed across seasons at Moksha.</p>
        <a class="link-arrow" href="gallery.html"><span>Enter the full gallery</span>${icons.arrowRight}</a>
      </div>
    </div>
    <div class="gallery-grid" data-reveal>
      ${galleryItems.map((g) => `<figure class="gitem" data-full="assets/img/${g.full}" data-caption="${g.cap}" data-cursor-label="View">
        <img src="assets/img/${g.img}" alt="${g.cap} at Moksha Himalaya" loading="lazy">
        <figcaption class="gitem__cap">${g.cap}</figcaption>
      </figure>`).join("\n      ")}
    </div>
    <div class="gallery-home__foot">
      <a class="btn btn--dark" href="gallery.html"><span>View all photographs</span>${icons.arrow}</a>
    </div>
  </div>
</section>

<section class="sustain section">
  <div class="container">
    <div class="sustain__grid">
      <div class="sustain__media parallax-wrap" data-reveal>
        <img src="assets/img/value-left-img.jpg" alt="The forest surrounding Moksha Himalaya" data-parallax="7" loading="lazy">
        <span class="sustain__seal">Rooted<br>in place<br>· 2026 ·</span>
      </div>
      <div class="sustain__text">
        <p class="eyebrow">We value sustainability</p>
        <h2 class="h2" data-split>Luxury with<br>a lighter <em class="italic gold">footprint</em></h2>
        <p class="lead">At Moksha, we blend luxury with purpose — immersing you in nature while fiercely protecting it for the generations who will come after us.</p>
        <ul class="sustain__list">
          <li><span>01</span>Local produce and organic herbs, much of it grown on-site.</li>
          <li><span>02</span>Low-impact architecture that leaves the ridge line intact.</li>
          <li><span>03</span>Water and waste programmes designed around the mountain ecosystem.</li>
          <li><span>04</span>Training and employment for the communities of Parwanoo.</li>
        </ul>
        <div style="margin-top:30px"><a class="link-arrow" href="contact.html"><span>Our promise</span>${icons.arrowRight}</a></div>
      </div>
    </div>
  </div>
</section>

<section class="insta section--tight">
  <div class="container">
    <div class="insta__head">
      <div>
        <p class="eyebrow">@moksha_himalaya_spa_resort</p>
        <p class="insta__handle" style="margin-top:14px">Follow the <span>mountain</span></p>
      </div>
      <a class="link-arrow" href="https://www.instagram.com/moksha_himalaya_spa_resort/" target="_blank" rel="noopener"><span>Follow on Instagram</span>${icons.arrowRight}</a>
    </div>
  </div>
  <div class="insta__marquee">
    <div class="insta__track">
      ${[...instaImages, ...instaImages].map((img) => `<a class="insta__item" href="https://www.instagram.com/moksha_himalaya_spa_resort/" target="_blank" rel="noopener" aria-label="View on Instagram"><img src="assets/img/${img}" alt="Moksha Himalaya on Instagram" loading="lazy"></a>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="newsletter section">
  <div class="container">
    <div class="newsletter__grid">
      <div class="newsletter__intro" data-reveal>
        <p class="eyebrow eyebrow--dark">Letters from the mountain</p>
        <h2 class="h2" data-split style="margin-top:20px">Stay up to date with<br>offers &amp; <em class="italic">promotions</em></h2>
        <p style="margin-top:20px;max-width:44ch;font-size:.96rem;line-height:1.6;color:rgba(16,23,19,.75)">A quiet, occasional letter. Seasonal Ayurvedic menus, private suite offers, and curated mountain rituals — delivered strictly once a month.</p>
        
        <div class="newsletter__perks">
          <div class="newsletter__perk">
            <span class="newsletter__perk-icon">✦</span>
            <div>
              <strong>Curated Mountain Dispatches</strong>
              <p>Ayurvedic wellness guides, seasonal chef menus, and Himalayan astronomy nights.</p>
            </div>
          </div>
          <div class="newsletter__perk">
            <span class="newsletter__perk-icon">✦</span>
            <div>
              <strong>Private Staying Privileges</strong>
              <p>Advance notice of private suite releases, spa credits, and exclusive seasonal rates.</p>
            </div>
          </div>
          <div class="newsletter__perk">
            <span class="newsletter__perk-icon">✦</span>
            <div>
              <strong>Zero Spam Guarantee</strong>
              <p>Strictly one letter a month. No clutter, no daily promos. One-click opt-out anytime.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="newsletter__card" data-reveal>
        <div class="newsletter__card-head">
          <span class="eyebrow" style="color:var(--gold);margin-bottom:6px">The Moksha Circle</span>
          <h3 class="newsletter__card-title">Join our Quiet Circle</h3>
          <p class="newsletter__card-sub">Subscribe to receive private invitations and seasonal mountain updates directly to your inbox.</p>
        </div>
        <form class="newsletter__form" data-form data-success="Welcome to the mountain — check your inbox for a quiet hello.">
          <div class="field">
            <label for="nl-email">Your Email Address</label>
            <input type="email" id="nl-email" name="email" placeholder="name@domain.com" required autocomplete="email">
            <span class="field__err">Please enter a valid email address.</span>
          </div>
          <button class="newsletter__submit" type="submit">
            <span>Subscribe to Newsletter</span>
            <span class="btn__arrow">${icons.arrow}</span>
          </button>
          <div class="newsletter__trust">
            <span class="newsletter__lock-icon">🔒</span>
            <span class="newsletter__note">Your email is private and safe with us. Unsubscribe anytime.</span>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>

<section class="cta-band">
  <div class="cta-band__media parallax-wrap"><img src="assets/img/exp-banner.jpg" alt="" data-parallax="10"></div>
  <div class="container">
    <div class="cta-band__inner">
      <p class="eyebrow">Begin your ascent</p>
      <h2 class="h2" data-split>The mountain is<br>waiting for <em class="italic gold">you.</em></h2>
      <p>Four suites. One horizon. A cable car that leaves the ordinary behind. Reserve your dates and let the altitude do the rest.</p>
      <div class="cta-band__actions">
        <a class="btn btn--solid" href="#" data-booking-open data-magnetic><span>Reserve a suite</span>${icons.arrow}</a>
        <a class="btn btn--light" href="contact.html"><span>Speak to us</span></a>
      </div>
    </div>
  </div>
</section>
`;
