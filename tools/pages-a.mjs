/* Suites + Dining pages */
import { icons, pageHero, ctaBand } from "./layout.mjs";

const suiteList = [
  {
    name: "Moksha Suite",
    size: "Approx 800 sq ft",
    rate: "₹23,760",
    desc: "The signature suite: a king bed, a study, an expansive bathroom and French bay windows that fold the valley into the room. The resort was designed around the nature outside — this is where you feel it first.",
    features: ["King-sized bed", "Study table", "Living area", "Private balcony", "French bay windows", "Cable car transfers"],
    images: ["room-gal1.jpg", "Room1.jpg", "Room2.jpg"],
  },
  {
    name: "Moksha Luxury Suite",
    size: "Approx 850 sq ft",
    rate: "₹28,400",
    desc: "A finely structured suite that extends into a private balcony, made for couples. A plush king bed, a state-of-the-art living room, a bathtub and a panoramic frame of the Shivaliks.",
    features: ["King-sized bed", "Living room", "Bathtub", "Lounge area", "Panoramic views", "Mini bar"],
    images: ["Moksha-Luxury-Suite2.jpg", "luxury-Suite.jpg", "rooms-2.jpg"],
  },
  {
    name: "Royal Suite",
    size: "Approx 1,000 sq ft",
    rate: "₹36,900",
    desc: "A two-bedroom apartment for families and friends: an electric fireplace, a dining table, a private bar and a separate sitting room made for long, low-lit evenings together.",
    features: ["Two bedrooms", "Butler service", "Electric fireplace", "Private bar", "Lounge area", "Golf-cart access"],
    images: ["Royal-suite1.jpg", "room-gal2.jpg", "rooms-3.jpg"],
  },
  {
    name: "Presidential Suite",
    size: "Approx 1,200 sq ft",
    rate: "₹52,000",
    desc: "The largest address at Moksha, with a private plunge pool, a separate living and dining area, and a terrace that feels like a private piece of the ridge. Arrive, exhale, stay a while.",
    features: ["Private plunge pool", "Terrace", "Living & dining", "Butler service", "VIP amenities", "Panoramic views"],
    images: ["Presidential-Suite1.jpg", "room-gal3.jpg", "room-gal4.jpg"],
  },
];

export const suites = `
${pageHero({
  image: "rooms-1.jpg",
  alt: "A suite at Moksha Himalaya with views over the Shivalik range",
  crumb: "Stay",
  lines: ["Suites with a view", '<em class="italic gold">of forever.</em>'],
  intro: "Four categories of suite, each with a private balcony and an uncompromising view. The architecture steps back so the mountain can come forward.",
  meta: [["Categories", "04 suites"], ["Space", "800 – 1,200 sq ft"], ["Arrival", "Cable car included"]],
})}

<section class="section">
  <div class="container">
    <div class="editorial">
      <aside class="editorial__aside">
        <p class="eyebrow">The idea</p>
        <p class="label" style="color:var(--muted)">Space, light, silence</p>
      </aside>
      <div class="editorial__body" data-reveal>
        <p>Nestled in the peaceful embrace of the Shivalik forests, our suites are designed to let you drift into deep, comfortable sleep — soothed by the silence of the Himalayas.</p>
        <blockquote>“Every window is a decision: to let the mountain in, and to leave the rest of the world outside.”</blockquote>
        <p class="lead">Whether you are drawn to the twinkling lights of the distant city or the untouched beauty of Himachal's ridgelines, the rooms are placed to give you an unobstructed view. Every morning begins with a scene from nature's own canvas.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--flush">
  <div class="container">
    ${suiteList.map((s, i) => `<article class="suite-detail" id="suite-${i + 1}">
      <div class="suite-detail__media" data-reveal>
        <div class="media"><img src="assets/img/${s.images[0]}" alt="${s.name}" loading="lazy"></div>
        <div class="media"><img src="assets/img/${s.images[1]}" alt="${s.name} detail" loading="lazy"></div>
        <div class="media"><img src="assets/img/${s.images[2]}" alt="${s.name} interior" loading="lazy"></div>
      </div>
      <div class="suite-detail__body">
        <span class="label" style="color:var(--muted)">0${i + 1} / ${s.size}</span>
        <div class="suite-detail__head">
          <h2>${s.name}</h2>
          <span class="suite-detail__rate">${s.rate}<small>per night + taxes</small></span>
        </div>
        <p>${s.desc}</p>
        <div class="amenities">${s.features.map((f) => `<span class="chip">${f}</span>`).join("")}</div>
        <div class="suite-detail__actions">
          <a class="btn btn--solid" href="#" data-booking-open><span>Reserve this suite</span>${icons.arrow}</a>
          <a class="btn btn--dark" href="contact.html"><span>Enquire</span></a>
        </div>
      </div>
    </article>`).join("\n    ")}
  </div>
</section>

<section class="section section--sand">
  <div class="container">
    <div class="section-head">
      <div><p class="eyebrow">Every stay includes</p><h2 class="h2" data-split style="margin-top:20px">The small things,<br><em class="italic gold">already done.</em></h2></div>
      <div class="section-head__aside"><p class="lead">Nothing to arrange. Everything waiting. A stay at Moksha begins the moment you step into the cable car.</p></div>
    </div>
    <div class="cards-3">
      ${[
        ["Cable-car transfers", "A return ride from Timber Trail base to the resort, with priority boarding for guests."],
        ["Breakfast, always", "A made-to-order breakfast at Pines & Cones, included with every suite."],
        ["Spa & pool access", "The infinity pool, fitness centre and daily sunrise yoga are yours throughout the stay."],
        ["14:00 / 12:00", "Check in from 2 pm, check out by noon. Later departures on request."],
        ["Butler service", "Royal and Presidential suites include butler service and VIP amenities."],
        ["15% dining saving", "Suite guests enjoy savings on food, soft beverages, spa and laundry."],
      ].map(([t, d]) => `<div class="feature-card" data-reveal data-reveal-child><div style="display:flex;justify-content:space-between;align-items:baseline;border-top:1px solid var(--line);padding-top:20px"><h3 style="font-size:1.4rem">${t}</h3><span style="color:var(--gold)">✦</span></div><p>${d}</p></div>`).join("\n      ")}
    </div>
  </div>
</section>

${ctaBand({
  image: "rooms-2.jpg",
  title: "Four suites.<br>One <em class=\"italic gold\">horizon.</em>",
  text: "Tell us when you would like to arrive. We will take care of the ascent, the suite and the silence.",
  primary: ["Check availability", "#", "data-booking-open"],
  secondary: ["Speak to reservations", "contact.html"],
})}
`;

const diningHighlights = [
  { img: "Global-Cuisine.jpg", tag: "The restaurant", title: "Global & local", text: "Thai, Oriental, Continental and Indian — with organic ingredients sourced locally or grown on-site." },
  { img: "pine-and-cones-2.jpg", tag: "High tea", title: "Pines & Cones", text: "Bite-sized snacks, high tea and long conversations, indoors by the fire or outside under the stars." },
  { img: "dining-restaurent-3.jpg", tag: "The bar", title: "A quiet nightcap", text: "Fine wines, spirits and single malts, poured slowly against a wall of mountain darkness." },
];

export const dining = `
${pageHero({
  image: "dine-banner.jpg",
  alt: "Dining at Moksha Himalaya",
  crumb: "Dine",
  lines: ["A table, set", 'in the <em class="italic gold">clouds.</em>'],
  intro: "Our multi-cuisine restaurant and bar serve a remarkable table at 5,000 feet — detail-oriented cooking, organic ingredients, and a menu that moves between the Himalayas and the world.",
  meta: [["Dining", "All-day restaurant & bar"], ["Cuisine", "Indian · Thai · Continental"], ["Setting", "Indoor & under the stars"]],
})}

<section class="section">
  <div class="container">
    <div class="editorial">
      <aside class="editorial__aside">
        <p class="eyebrow">The terroir</p>
        <p class="label" style="color:var(--muted)">Cooked by the mountain</p>
      </aside>
      <div class="editorial__body" data-reveal>
        <p>Our chefs are detail-oriented in the quiet sense: they know where the herbs were grown, how long the dal has been simmering, and exactly when the bread left the oven.</p>
        <blockquote>“Himachali Dham, a Thai curry and a glass of something cold — the mountain does not ask you to choose.”</blockquote>
        <p class="lead">Alongside the indulgences, there is a thoughtful menu for fitness enthusiasts: meals that are both tempting and healthy, designed for people who want to return home feeling lighter than when they arrived. Savour the rich flavours of Himachali Dham, prepared with locally sourced ingredients, amidst the mountains.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--flush">
  <div class="container">
    <div class="venue" id="venue-1">
      <div class="venue__media media" data-reveal><img src="assets/img/pine-and-cones.jpg" alt="Pines & Cones at Moksha Himalaya" loading="lazy"></div>
      <div class="venue__body" data-reveal>
        <p class="eyebrow">01 · All-day dining</p>
        <h2 class="h2">Pines &amp; <em class="italic gold">Cones</em></h2>
        <p class="lead">Relaxed by day, romantic by night. Choose the comfort of indoor dining or an outdoor table beneath the stars. High tea, small plates and a fire to come back to.</p>
        <div class="venue__stats">
          <div><strong>1,680</strong><span>Sq ft</span></div>
          <div><strong>07:00</strong><span>Until late</span></div>
          <div><strong>Indoor</strong><span>&amp; outdoor</span></div>
        </div>
      </div>
    </div>
    <div class="venue" id="venue-2">
      <div class="venue__media media" data-reveal><img src="assets/img/dining-restaurent-2.jpg" alt="The restaurant and bar at Moksha" loading="lazy"></div>
      <div class="venue__body" data-reveal>
        <p class="eyebrow">02 · Restaurant &amp; bar</p>
        <h2 class="h2">The long <em class="italic gold">table</em></h2>
        <p class="lead">A chic all-day restaurant for family lunches and business dinners, with a discreet bar for the finest wines, spirits and single malts. Ask for the corner table at sunset.</p>
        <div class="venue__stats">
          <div><strong>All day</strong><span>Dining</span></div>
          <div><strong>Single</strong><span>Malts</span></div>
          <div><strong>Private</strong><span>Dining on request</span></div>
        </div>
      </div>
    </div>
    <div class="venue" id="venue-3">
      <div class="venue__media media" data-reveal><img src="assets/img/poolside-dining-img1.jpg" alt="Private poolside dining at Moksha" loading="lazy"></div>
      <div class="venue__body" data-reveal>
        <p class="eyebrow">03 · Moments at Moksha</p>
        <h2 class="h2">Dinner for <em class="italic gold">two</em></h2>
        <p class="lead">A private table, a tailored menu and the Himalayas turning purple behind you. Ideal for anniversaries, proposals, or a Tuesday that deserves better.</p>
        <div class="venue__stats">
          <div><strong>Private</strong><span>Service</span></div>
          <div><strong>Bespoke</strong><span>Menu</span></div>
          <div><strong>Sunset</strong><span>Recommended</span></div>
        </div>
        <div><a class="btn btn--dark" href="contact.html"><span>Request a table</span>${icons.arrow}</a></div>
      </div>
    </div>
  </div>
</section>

<section class="section section--sand">
  <div class="container">
    <div class="section-head">
      <div><p class="eyebrow">On the menu</p><h2 class="h2" data-split style="margin-top:20px">A few reasons<br>to stay for <em class="italic gold">dinner.</em></h2></div>
      <div class="section-head__aside"><p class="lead">The menu changes with the season and the market. These are the dishes guests write home about.</p></div>
    </div>
    <div class="cards-3">
      ${diningHighlights.map((d) => `<article class="feature-card" data-reveal data-reveal-child>
        <div class="media media--hover"><img src="assets/img/${d.img}" alt="${d.title}" loading="lazy"></div>
        <div class="feature-card__meta"><span>${d.tag}</span><span>Moksha</span></div>
        <h3>${d.title}</h3>
        <p>${d.text}</p>
      </article>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="split">
      <div class="split__media media" data-reveal><img src="assets/img/Dine.jpg" alt="Chef at work" loading="lazy"></div>
      <div class="split__body" data-reveal>
        <p class="eyebrow">From the kitchen</p>
        <h2 class="h2">“We cook for the<br>altitude, not the <em class="italic gold">clock.</em>”</h2>
        <p class="lead">Soups that take two days. Bread proved slowly in mountain air. Vegetables picked that morning. Our kitchen works with the pace of the place, which is to say: properly.</p>
        <div class="amenities">
          <span class="chip">Local &amp; organic</span><span class="chip">Himachali Dham</span><span class="chip">Thai &amp; Oriental</span><span class="chip">Vegetarian &amp; vegan</span>
        </div>
        <a class="link-arrow" href="contact.html"><span>Reserve a table</span>${icons.arrowRight}</a>
      </div>
    </div>
  </div>
</section>

${ctaBand({
  image: "pine-and-cones-3.jpg",
  title: "Come hungry.<br>Leave <em class=\"italic gold\">lighter.</em>",
  text: "Open to resident guests and day visitors by reservation. Tell us the occasion and we will set the table accordingly.",
  primary: ["Reserve a table", "#", "data-booking-open"],
  secondary: ["Call the restaurant", "contact.html"],
})}
`;
