/* Weddings + Gallery + Contact + Packages */
import { icons, pageHero, ctaBand } from "./layout.mjs";

const galleryData = [
  ["gallery/All-gal1.jpg", "Suite mornings", "stay"],
  ["gallery/All-gal2.jpg", "The long table", "dine"],
  ["gallery/All-gal3.jpg", "The valley", "nature"],
  ["gallery/All-gal4.jpg", "Pines & Cones", "dine"],
  ["gallery/All-gal5.jpg", "Infinity edge", "spa"],
  ["gallery/All-gal6.jpg", "The Hammam", "spa"],
  ["gallery/All-gal7.jpg", "Suite details", "stay"],
  ["gallery/All-gal8.jpg", "Dinner at dusk", "celebrations"],
  ["gallery/All-gal9.jpg", "The ascent", "nature"],
  ["gallery/All-gal10.jpg", "Mountain light", "nature"],
  ["gallery/All-gal11.jpg", "Quiet corners", "stay"],
  ["gallery/Exterior1.jpg", "Above Parwanoo", "nature"],
  ["gallery/Exterior2.jpg", "The ridge", "nature"],
  ["gallery/Exterior3.jpg", "The terrace", "celebrations"],
  ["gallery/room1.jpg", "Moksha Suite", "stay"],
  ["gallery/room2.jpg", "Luxury Suite", "stay"],
  ["gallery/Spa1.jpg", "The treatment room", "spa"],
  ["gallery/Spa2.jpg", "Steam & marble", "spa"],
  ["gallery/Dine1.jpg", "Breakfast", "dine"],
  ["gallery/Dine2.jpg", "The bar", "dine"],
  ["wedding2.jpg", "Vows", "celebrations"],
  ["wedding3-1.jpg", "The celebration", "celebrations"],
];

export const weddings = `
${pageHero({
  image: "wedding-event-banner.jpg",
  alt: "A destination wedding at Moksha Himalaya",
  crumb: "Weddings & Events",
  lines: ["Vows, with the", 'Himalayas as <em class="italic gold">witness.</em>'],
  intro: "Imagine exchanging vows amidst blossoming gardens, with the Shivaliks standing as timeless witnesses. Bespoke celebrations, brought to life above the clouds.",
  meta: [["Mansion Hall", "Up to 350 guests"], ["Royal Ballroom", "Up to 150 guests"], ["Conference", "Up to 100 guests"]],
})}

<section class="section">
  <div class="container">
    <div class="editorial">
      <aside class="editorial__aside">
        <p class="eyebrow">Bring your dreams</p>
        <p class="label" style="color:var(--muted)">Weddings · reunions · MICE</p>
      </aside>
      <div class="editorial__body" data-reveal>
        <p>Your love story is unique, and your wedding should be too. Our Mansion Hall and Royal Ballroom offer flexible, customisable celebrations — traditional or contemporary, intimate or expansive.</p>
        <blockquote>“Let us do the rest. Every detail, from the first welcome to the last dance, is handled with the same quiet care.”</blockquote>
        <p class="lead">Well-equipped with a fully electronic dance floor and modern facilities, the Mansion Hall accommodates around 350 guests; the Royal Ballroom up to 150. For corporate retreats, the 2,095 sq ft Conference Hall at Timber Trail Heights blends sophistication, comfort and function.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--flush">
  <div class="container">
    <div class="venue" id="mansion-hall">
      <div class="venue__media media" data-reveal><img src="assets/img/wedding2.jpg" alt="The Mansion Hall set for a wedding" loading="lazy"></div>
      <div class="venue__body" data-reveal>
        <p class="eyebrow">01 · The Mansion Hall</p>
        <h2 class="h2">A room for<br><em class="italic gold">forever.</em></h2>
        <p class="lead">Our largest celebration space, with a fully electronic dance floor, garden access and a view that needs no decoration. Traditional ceremonies, modern receptions and everything in between.</p>
        <div class="venue__stats">
          <div><strong>350</strong><span>Guests</span></div>
          <div><strong>Electronic</strong><span>Dance floor</span></div>
          <div><strong>Bespoke</strong><span>Menus</span></div>
        </div>
        <div><a class="btn btn--dark" href="#enquire"><span>Enquire about the hall</span>${icons.arrow}</a></div>
      </div>
    </div>
    <div class="venue" id="royal-ballroom">
      <div class="venue__media media" data-reveal><img src="assets/img/wedding3-1.jpg" alt="The Royal Ballroom at Moksha" loading="lazy"></div>
      <div class="venue__body" data-reveal>
        <p class="eyebrow">02 · The Royal Ballroom</p>
        <h2 class="h2">Smaller.<br>No less <em class="italic gold">special.</em></h2>
        <p class="lead">An intimate ballroom for up to 150 guests. Ideal for anniversaries, engagement parties and receptions that want to feel like a very generous dinner party.</p>
        <div class="venue__stats">
          <div><strong>150</strong><span>Guests</span></div>
          <div><strong>Private</strong><span>Bar</span></div>
          <div><strong>Tailored</strong><span>Service</span></div>
        </div>
        <div><a class="btn btn--dark" href="#enquire"><span>Enquire about the ballroom</span>${icons.arrow}</a></div>
      </div>
    </div>
    <div class="venue" id="conference-hall">
      <div class="venue__media media" data-reveal><img src="assets/img/Corporate-event.jpg" alt="Corporate event at Moksha" loading="lazy"></div>
      <div class="venue__body" data-reveal>
        <p class="eyebrow">03 · Corporate &amp; MICE</p>
        <h2 class="h2">Think clearly.<br>Breathe <em class="italic gold">deeply.</em></h2>
        <p class="lead">The 2,095 sq ft Conference Hall at Timber Trail Heights is an excellent venue for offsite conferences, with high-speed internet, audiovisual equipment, gourmet catering and accommodation for up to 100 guests.</p>
        <div class="venue__stats">
          <div><strong>2,095</strong><span>Sq ft</span></div>
          <div><strong>100</strong><span>Guests</span></div>
          <div><strong>Full</strong><span>AV &amp; catering</span></div>
        </div>
        <div><a class="btn btn--dark" href="#enquire"><span>Enquire about corporate stays</span>${icons.arrow}</a></div>
      </div>
    </div>
  </div>
</section>

<section class="section section--sand" id="enquire">
  <div class="container">
    <div class="contact-grid">
      <div data-reveal>
        <p class="eyebrow">Let us plan it</p>
        <h2 class="h2" style="margin-top:20px">Tell us about<br>your <em class="italic gold">occasion.</em></h2>
        <p class="lead" style="margin-top:22px">Share a few details and our events team will come back with availability, venue suggestions and a bespoke proposal. No obligation, no templates.</p>
        <div class="contact-card" style="margin-top:34px">
          <div class="contact-block"><h4>Events &amp; sales</h4><p><a href="tel:+918679032341">+91 86790 32341</a><br><a href="mailto:dos@mokshaspa.com">dos@mokshaspa.com</a></p></div>
          <div class="contact-block"><h4>Hours</h4><p>Monday – Saturday<br>10:00 am – 6:00 pm</p></div>
        </div>
      </div>
      <form class="contact-form" data-form data-success="Thank you. Our events team will write to you within one working day.">
        <div class="form-row">
          <div class="field"><label for="w-name">Full name</label><input type="text" id="w-name" name="name" placeholder="Your name" required></div>
          <div class="field"><label for="w-phone">Phone</label><input type="tel" id="w-phone" name="phone" placeholder="+91" required></div>
        </div>
        <div class="field"><label for="w-email">Email</label><input type="email" id="w-email" name="email" placeholder="you@example.com" required></div>
        <div class="form-row">
          <div class="field"><label for="w-date">Preferred date</label><input type="date" id="w-date" name="date"></div>
          <div class="field"><label for="w-type">Occasion</label><select id="w-type" name="type"><option>Wedding</option><option>Anniversary</option><option>Birthday</option><option>Corporate event</option><option>Other</option></select></div>
        </div>
        <div class="field"><label for="w-msg">Tell us a little more</label><textarea id="w-msg" name="message" placeholder="Guest count, dreams, must-haves…"></textarea></div>
        <button class="btn btn--dark btn--block" type="submit"><span>Request a callback</span>${icons.arrow}</button>
      </form>
    </div>
  </div>
</section>

${ctaBand({
  image: "celebration-at-moksha-img.jpg",
  title: "Every second<br>treasured, every detail<br><em class=\"italic gold\">perfected.</em>",
  text: "From the first site visit to the final farewell, one team looks after you. Begin the conversation.",
  primary: ["Speak to the events team", "contact.html"],
  secondary: ["See the gallery", "gallery.html"],
})}
`;

export const gallery = `
${pageHero({
  image: "gallery-banner.jpg",
  alt: "The gallery at Moksha Himalaya",
  crumb: "Gallery",
  lines: ["Frames from", 'the <em class="italic gold">mountain.</em>'],
  intro: "Suite light, steam, pine forests, long tables and the particular blue that arrives just before dusk. A selection of photographs from across the seasons.",
  meta: [["Collection", "22 frames"], ["Seasons", "All year"], ["Photography", "Moksha archive"]],
})}

<section class="section">
  <div class="container">
    <div class="editorial">
      <aside class="editorial__aside">
        <p class="eyebrow">The archive</p>
        <p class="label" style="color:var(--muted)">Light, steam &amp; mountain mist</p>
      </aside>
      <div class="editorial__body" data-reveal>
        <p>Photographs rarely tell the whole truth of a mountain. But they hold onto the parts the eye might otherwise miss: the way shadows stretch across the ridge at 5 pm, the glow of candlelight on marble, and the mist that rolls over the pool before breakfast.</p>
        <blockquote>“Photography catches what the eye forgets to hold onto in the silence of the Himalayas.”</blockquote>
        <p class="lead">Explore our curated collection across five perspectives: our all-suite sanctuaries, dining in the clouds, restorative spa rituals, destination weddings, and the untouched natural beauty of the Shivaliks.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--flush">
  <div class="container">
    <div class="filter-bar" data-filter-bar role="group" aria-label="Filter gallery">
      <button class="tab is-active" type="button" data-filter="all">All</button>
      <button class="tab" type="button" data-filter="stay">Stay</button>
      <button class="tab" type="button" data-filter="dine">Dine</button>
      <button class="tab" type="button" data-filter="spa">Spa</button>
      <button class="tab" type="button" data-filter="nature">Nature</button>
      <button class="tab" type="button" data-filter="celebrations">Celebrations</button>
      <span class="gallery-count" data-gallery-count style="margin-left:auto;align-self:center">22 frames</span>
    </div>
    <div class="masonry">
      ${galleryData.map(([img, cap, cat]) => `<figure class="gitem" data-cat="${cat}" data-full="assets/img/${img}" data-caption="${cap}" data-cursor-label="View">
        <img src="assets/img/${img}" alt="${cap} at Moksha Himalaya" loading="lazy">
        <figcaption class="gitem__cap">${cap}</figcaption>
      </figure>`).join("\n      ")}
    </div>
  </div>
</section>

${ctaBand({
  image: "insta4.jpg",
  title: "The photographs<br>are only the <em class=\"italic gold\">beginning.</em>",
  text: "Come and stand in the frame yourself. The mountain is at its best in person.",
  primary: ["Reserve a suite", "#", "data-booking-open"],
  secondary: ["Follow on Instagram", "https://www.instagram.com/moksha_himalaya_spa_resort/"],
})}
`;

export const contact = `
${pageHero({
  image: "contact-us-banner.jpg",
  alt: "The approach to Moksha Himalaya, Parwanoo",
  crumb: "Contact",
  lines: ["The mountain is", 'closer than you <em class="italic gold">think.</em>'],
  intro: "Forty minutes from Chandigarh, nine minutes by cable car, and a world away from the ordinary. Our reservations team is here every day.",
  meta: [["Reservations", "+91 92185 32341"], ["Email", "reservations@mokshaspa.com"], ["Cable car", "9 am – 6 pm"]],
})}

<section class="section">
  <div class="container">
    <div class="contact-grid">
      <div class="contact-card" data-reveal>
        <p class="eyebrow">Asia Resorts Limited</p>
        <h2 class="h2" style="margin-top:20px">Come and<br>say <em class="italic gold">hello.</em></h2>
        <div class="contact-block" style="margin-top:12px">
          <h4>Address</h4>
          <p>Moksha Himalaya Spa Resort<br>Parwanoo 173220<br>Himachal Pradesh, India</p>
        </div>
        <div class="contact-block">
          <h4>Reservations</h4>
          <p><a href="tel:+919218532341">+91 92185 32341</a><br><a href="tel:+919218532347">+91 92185 32347</a><br><a href="mailto:reservations@mokshaspa.com">reservations@mokshaspa.com</a><br><a href="mailto:info@mokshaspa.com">info@mokshaspa.com</a></p>
        </div>
        <div class="contact-block">
          <h4>Sales (Mon–Sat, 10 am – 6 pm)</h4>
          <p><a href="tel:+918679032341">+91 86790 32341</a><br><a href="mailto:dos@mokshaspa.com">dos@mokshaspa.com</a></p>
        </div>
        <div class="contact-block">
          <h4>Find us</h4>
          <a class="link-arrow" href="https://www.google.com/maps/place/Moksha+Himalaya+Spa+Resort+Himachal+Pradesh+-+Parwanoo/@30.8195196,76.9902565,17z" target="_blank" rel="noopener"><span>Open in Google Maps</span>${icons.arrowRight}</a>
        </div>
      </div>
      <form class="contact-form" data-form data-success="Thank you — our reservations team will be in touch shortly.">
        <div>
          <p class="eyebrow">Send an enquiry</p>
          <h3 class="h3" style="margin-top:14px">We will write back.</h3>
        </div>
        <div class="form-row">
          <div class="field"><label for="c-name">Full name</label><input type="text" id="c-name" name="name" placeholder="Your name" required></div>
          <div class="field"><label for="c-phone">Phone</label><input type="tel" id="c-phone" name="phone" placeholder="+91" required></div>
        </div>
        <div class="field"><label for="c-email">Email</label><input type="email" id="c-email" name="email" placeholder="you@example.com" required></div>
        <div class="field"><label for="c-subject">I would like to</label><select id="c-subject" name="subject"><option>Book a suite</option><option>Plan a spa journey</option><option>Reserve a table</option><option>Plan a wedding or event</option><option>Ask about packages</option><option>Something else</option></select></div>
        <div class="field"><label for="c-msg">Message</label><textarea id="c-msg" name="message" placeholder="Dates, occasion, questions…" required></textarea></div>
        <button class="btn btn--dark btn--block" type="submit"><span>Send enquiry</span>${icons.arrow}</button>
      </form>
    </div>
  </div>
</section>

<section class="section section--flush">
  <div class="container">
    <div class="map-wrap">
      <iframe title="Moksha Himalaya Spa Resort on Google Maps" src="https://www.google.com/maps?q=Moksha+Himalaya+Spa+Resort+Parwanoo&output=embed" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      <div class="map-wrap__card">
        <strong>Moksha Himalaya</strong>
        <p>Parwanoo 173220, Himachal Pradesh. Arrive at the Timber Trail base for the cable car.</p>
        <a class="link-arrow" href="https://www.google.com/maps/place/Moksha+Himalaya+Spa+Resort+Himachal+Pradesh+-+Parwanoo/@30.8195196,76.9902565,17z" target="_blank" rel="noopener"><span>Get directions</span>${icons.arrowRight}</a>
      </div>
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <div><p class="eyebrow">Getting here</p><h2 class="h2" data-split style="margin-top:20px">The last nine<br>minutes are by <em class="italic gold">air.</em></h2></div>
      <div class="section-head__aside"><p class="lead">The resort sits at 5,000 ft, reached by cable car from the Timber Trail base. Tell us when you are coming and we will time the ascent for you.</p></div>
    </div>
    <div class="timeline">
      ${[
        ["01", "Chandigarh airport", "Approximately 45 minutes by road to the Timber Trail base at Parwanoo."],
        ["02", "Kalka railway station", "Approximately 20 minutes by road. Trains from Delhi and Shimla connect here."],
        ["03", "Timber Trail base", "Park your car, check in at the desk, and board the cable car between 9 am and 6 pm."],
        ["04", "Moksha", "Nine minutes above the valley. A welcome drink, your suite, and the horizon."],
      ].map(([n, t, d]) => `<div class="timeline__item" data-reveal><span class="timeline__num">${n}</span><h3>${t}</h3><p>${d}</p></div>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="section section--sand" id="privacy">
  <div class="container container--narrow">
    <p class="eyebrow">The fine print</p>
    <h2 class="h2" style="margin-top:20px">Privacy, plainly.</h2>
    <p class="lead" style="margin-top:22px">We collect only what we need to answer your enquiry and look after your stay. We never sell your information. Cookies on this site are used for basic functionality and anonymous measurement, and you can clear them at any time in your browser.</p>
    <p class="lead" style="margin-top:16px">Cancellations made 14 or more days before arrival receive a full refund. Cancellations within 14 days of arrival are charged in full. Check-in is at 2 pm; check-out is at noon. For anything else, write to <a href="mailto:info@mokshaspa.com" style="text-decoration:underline;text-underline-offset:3px">info@mokshaspa.com</a>.</p>
  </div>
</section>
`;

const packages = [
  {
    img: "rooms-1.jpg",
    tag: "Most loved",
    title: "The Moksha Staycation",
    nights: "2 nights · 3 days",
    price: "₹47,520",
    text: "A short, complete reset: arrive by cable car, sleep above the clouds, and leave the city behind.",
    includes: ["Luxury Suite for two", "Return cable-car transfers", "Breakfast at Pines & Cones", "20% saving on spa", "Infinity pool & sunrise yoga", "Bonfire evening"],
  },
  {
    img: "hammam-image-1.jpg",
    tag: "Wellness",
    title: "The Wellness Immersion",
    nights: "3 nights · 4 days",
    price: "₹82,000",
    text: "Three days built around the spa: consultation, daily yoga and two signature rituals in the Himalayas.",
    includes: ["Moksha Suite for two", "Ayurvedic consultation", "Two 60-minute treatments", "Hammam experience", "Daily yoga & meditation", "Wellness breakfast & dinner"],
  },
  {
    img: "wedding3-1.jpg",
    tag: "Celebration",
    title: "The Celebration",
    nights: "2 nights · 3 days",
    price: "₹96,000",
    text: "For the anniversary, the proposal or the birthday that deserves a mountain behind it.",
    includes: ["Royal Suite for two", "Private dinner for two", "Celebration cake", "Room decoration", "Return cable-car transfers", "Late checkout on request"],
  },
];

export const packagesPage = `
${pageHero({
  image: "offers-banner.jpg",
  alt: "Packages at Moksha Himalaya",
  crumb: "Packages",
  lines: ["Reasons to stay", 'a little <em class="italic gold">longer.</em>'],
  intro: "A staycation, a wellness immersion, a celebration. Thoughtfully built packages that take care of the details, so you can take care of nothing at all.",
  meta: [["Packages", "3 curated stays"], ["Validity", "All year"], ["Includes", "Cable car · breakfast"]],
})}

<section class="section">
  <div class="container">
    <div class="editorial">
      <aside class="editorial__aside">
        <p class="eyebrow">Curated retreats</p>
        <p class="label" style="color:var(--muted)">Stay a little longer</p>
      </aside>
      <div class="editorial__body" data-reveal>
        <p>A short weekend reset, a transformative Ayurvedic immersion, or an unforgettable celebration with the Himalayas as your backdrop. Our packages are thoughtfully crafted so that everything is taken care of the moment you step into the cable car.</p>
        <blockquote>“The best escapes are the ones where someone else takes care of every single detail.”</blockquote>
        <p class="lead">Choose between our signature Moksha Staycation, the holistic Wellness Immersion, and our bespoke Celebration stay. Each package can be further customized by our reservations concierge to match your exact schedule and wishes.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--flush">
  <div class="container">
    <div class="cards-3">
      ${packages.map((p) => `<article class="feature-card" data-reveal data-reveal-child>
        <div class="media media--hover" style="height:clamp(280px,32vw,440px)"><img src="assets/img/${p.img}" alt="${p.title}" loading="lazy"></div>
        <div class="feature-card__meta"><span>${p.tag}</span><span>${p.nights}</span></div>
        <h3>${p.title}</h3>
        <p>${p.text}</p>
        <div style="display:flex;align-items:baseline;gap:10px;border-top:1px solid var(--line);padding-top:16px">
          <strong style="font-family:var(--font-display);font-size:1.75rem;font-weight:400">${p.price}</strong>
          <span style="font-size:9px;letter-spacing:.18em;text-transform:uppercase;color:var(--muted)">from · plus taxes</span>
        </div>
        <ul style="display:grid;gap:7px;font-size:.86rem;color:var(--muted)">
          ${p.includes.map((i) => `<li style="display:flex;gap:10px"><span style="color:var(--gold)">✦</span>${i}</li>`).join("")}
        </ul>
        <a class="btn btn--dark" href="#" data-booking-open><span>Reserve this package</span>${icons.arrow}</a>
      </article>`).join("\n      ")}
    </div>
    <p style="margin-top:34px;font-size:10px;letter-spacing:.06em;color:var(--muted);max-width:70ch">Rates are indicative, per suite for two guests, exclusive of taxes, and subject to availability. Packages can be tailored — speak to reservations for longer stays, additional guests or a different rhythm.</p>
  </div>
</section>

<section class="section section--sand">
  <div class="container">
    <div class="section-head">
      <div><p class="eyebrow">In every package</p><h2 class="h2" data-split style="margin-top:20px">The things we<br>never <em class="italic gold">charge extra for.</em></h2></div>
    </div>
    <div class="cards-3">
      ${[
        ["The ascent", "Return cable-car transfers from Timber Trail base, with priority boarding."],
        ["The air", "Access to the infinity pool, fitness centre, gardens and nature trails."],
        ["The morning", "A made-to-order breakfast at Pines & Cones, every day of your stay."],
        ["The ritual", "Daily sunrise yoga on the deck, suitable for every level."],
        ["The quiet", "No resort fee, no hidden extras. The mountain is included."],
        ["The people", "A single team looking after your stay from first enquiry to farewell."],
      ].map(([t, d]) => `<div class="feature-card" data-reveal data-reveal-child><div style="border-top:1px solid var(--line);padding-top:20px;display:flex;justify-content:space-between"><h3 style="font-size:1.4rem">${t}</h3><span style="color:var(--gold)">✦</span></div><p>${d}</p></div>`).join("\n      ")}
    </div>
  </div>
</section>

${ctaBand({
  image: "Room.jpg",
  title: "Not sure which?<br>We will <em class=\"italic gold\">help.</em>",
  text: "Tell us who is coming, how long for, and what you need from the trip. We will suggest the right suite and the right rhythm.",
  primary: ["Speak to reservations", "contact.html"],
  secondary: ["Explore suites", "suites.html"],
})}
`;
