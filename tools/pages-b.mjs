/* Wellness + Experiences pages */
import { icons, pageHero, ctaBand } from "./layout.mjs";

const ayurveda = [
  ["Wellness consultation", "30 min", "A pulse and lifestyle consultation with our Ayurvedic doctor."],
  ["Abhyanga", "60 / 90 min", "Synchronised warm-oil massage for the whole body."],
  ["Shirodhara", "45 min", "A continuous stream of warm oil across the forehead."],
  ["Shirobhyanga", "60 min", "Head, neck and shoulder therapy with medicated oil."],
  ["Padabhyanga", "45 min", "A grounding foot massage with warm herbal oil."],
  ["Choornaswedana", "60 min", "Herbal poultice therapy for stiffness and circulation."],
  ["Abhyanga with Shirodhara", "90 min", "Our signature pairing of body and mind."],
  ["Abhyanga with Choornaswedam", "90 min", "Deep warmth, followed by poultice work."],
  ["Abhyanga with Tan-lepa", "90 min", "Oil massage with a soothing herbal body mask."],
];

const international = [
  ["Aromatherapy massage", "60 / 90 min", "Essential oils chosen for the season and your mood."],
  ["KuNye with herbal poultice", "75 min", "Tibetan-inspired massage with warm herbal compresses."],
  ["Balinese with LaStone therapy", "90 min", "Long strokes and heated basalt stones."],
  ["Hawaiian Lomi Lomi with bamboo", "90 min", "Wave-like movement and warm bamboo fusion."],
  ["Siam Symphony massage", "75 min", "Thai-inspired stretching and rhythmic pressure."],
];

const treatmentRow = (t, i, img) => `<div class="treatment" data-reveal data-reveal-child>
  <div class="treatment__left"><span class="treatment__num">${String(i + 1).padStart(2, "0")}</span><h3>${t[0]}</h3></div>
  <div class="treatment__meta"><span>${t[1]}</span><span>${t[2]}</span></div>
  <span class="treatment__plus">${icons.plus}</span>
  <div class="t-hover-img" aria-hidden="true"><img src="assets/img/${img}" alt="" loading="lazy"></div>
</div>`;

const wellnessImgs = ["wellness-1.jpg", "wellness-2.jpg", "wellness-3.jpg", "ayurvedic-new.jpg", "wellness-4.jpg"];

export const wellness = `
${pageHero({
  image: "wellness-banner.jpg",
  alt: "The spa at Moksha Himalaya",
  crumb: "Wellness",
  lines: ["The art of coming", 'back to <em class="italic gold">yourself.</em>'],
  intro: "Designed to promote holistic well-being, the spa at Moksha brings Ayurveda, international rituals and the largest Hammam in North India to a quiet ridge above Parwanoo.",
  meta: [["The Spa", "Ayurveda & international"], ["Hammam", "Largest in North India"], ["Pool", "Infinity · guests only"]],
})}

<section class="section">
  <div class="container">
    <div class="editorial">
      <aside class="editorial__aside">
        <p class="eyebrow">The philosophy</p>
        <p class="label" style="color:var(--muted)">Ancient rituals, living silence</p>
      </aside>
      <div class="editorial__body" data-reveal>
        <p>Ayurveda means “the science of life.” It treats the body not as a problem to be solved, but as a conversation to be listened to — through herbs, oils, warmth and time.</p>
        <blockquote>“You do not need to become someone else here. You only need to stop, long enough to notice who arrived.”</blockquote>
        <p class="lead">Our therapists work slowly and precisely, combining traditional Ayurvedic technique with contemporary international treatments. Whether it is a deep-tissue massage to ease tension, an Abhyanga to restore balance, or a facial to bring the skin back to life, the intention is the same: to leave you feeling refreshed, renewed and entirely at home in your body.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--flush" id="treatments-menu">
  <div class="container">
    <div class="section-head">
      <div><p class="eyebrow">The treatment menu</p><h2 class="h2" data-split style="margin-top:20px">Choose your<br><em class="italic gold">ritual.</em></h2></div>
      <div class="section-head__aside"><p class="lead">All treatments are by appointment and can be combined into a half-day or full-day journey. Speak to our spa concierge.</p></div>
    </div>
    <div data-tabs>
      <div class="tabs" role="tablist" aria-label="Spa treatments">
        <button class="tab is-active" type="button" data-tab="ayurveda" role="tab" aria-selected="true">Ayurveda</button>
        <button class="tab" type="button" data-tab="international" role="tab" aria-selected="false">International</button>
        <button class="tab" type="button" data-tab="yoga" role="tab" aria-selected="false">Yoga &amp; Meditation</button>
        <button class="tab" type="button" data-tab="hammam" role="tab" aria-selected="false">Hammam &amp; Pool</button>
      </div>

      <div class="tab-panel is-active" data-panel="ayurveda">
        <div class="split" style="margin-bottom:clamp(36px,5vw,60px)">
          <div class="split__media media"><img src="assets/img/ayurvedic-new.jpg" alt="Ayurvedic ingredients and oils" loading="lazy"></div>
          <div class="split__body">
            <p class="eyebrow">Rooted in tradition</p>
            <h3 class="h3">The science of life</h3>
            <p class="lead">Rooted in ancient Indian tradition, Ayurveda is a holistic healing system that balances mind, body and spirit. Each treatment begins with a consultation, so the oils and techniques are chosen for you.</p>
          </div>
        </div>
        <div class="treatments">
          ${ayurveda.map((t, i) => treatmentRow(t, i, wellnessImgs[i % wellnessImgs.length])).join("\n          ")}
        </div>
      </div>

      <div class="tab-panel" data-panel="international">
        <div class="split" style="margin-bottom:clamp(36px,5vw,60px)">
          <div class="split__media media"><img src="assets/img/wellness-3.jpg" alt="An international spa treatment room" loading="lazy"></div>
          <div class="split__body">
            <p class="eyebrow">Relaxation as an art form</p>
            <h3 class="h3">A world of touch</h3>
            <p class="lead">A selection of exquisite international treatments designed to release the shoulders, quiet the mind and make an hour feel considerably longer than an hour.</p>
          </div>
        </div>
        <div class="treatments">
          ${international.map((t, i) => treatmentRow(t, i, wellnessImgs[(i + 2) % wellnessImgs.length])).join("\n          ")}
        </div>
      </div>

      <div class="tab-panel" data-panel="yoga">
        <div class="split">
          <div class="split__media media"><img src="assets/img/yoga-new.jpg" alt="Yoga on the deck above the valley" loading="lazy"></div>
          <div class="split__body">
            <p class="eyebrow">Daily · 6:30 am</p>
            <h3 class="h3">Breath, before breakfast</h3>
            <p class="lead">In the landscape of the Shivalik ranges, our yoga centre is a serene and picturesque retreat. Moksha hosts daily morning yoga sessions, available to every guest, followed by Ayurvedic treatments surrounded by greenery.</p>
            <div class="amenities"><span class="chip">Sunrise yoga</span><span class="chip">Meditation</span><span class="chip">Pranayama</span><span class="chip">All levels</span></div>
            <a class="btn btn--dark" href="contact.html"><span>Plan a wellness stay</span>${icons.arrow}</a>
          </div>
        </div>
      </div>

      <div class="tab-panel" data-panel="hammam">
        <div class="split" style="margin-bottom:clamp(36px,5vw,60px)">
          <div class="split__media media"><img src="assets/img/hammam-image-1.jpg" alt="The Hammam at Moksha Himalaya" loading="lazy"></div>
          <div class="split__body">
            <p class="eyebrow">The largest in North India</p>
            <h3 class="h3">Steam, marble, ritual</h3>
            <p class="lead">Ancient cleansing rituals meet modern luxury in our Hammam. Heat therapy, black soap and a vigorous kessa glove are used to cleanse, exfoliate and restore — a transformative hour in the quiet of the Himalayas.</p>
            <div class="venue__stats">
              <div><strong>01</strong><span>Hammam</span></div>
              <div><strong>90</strong><span>Minutes</span></div>
              <div><strong>∞</strong><span>Horizon pool</span></div>
            </div>
          </div>
        </div>
        <div class="split split--media-right">
          <div class="split__media media"><img src="assets/img/Pool3.jpg" alt="The infinity pool at Moksha" loading="lazy"></div>
          <div class="split__body">
            <p class="eyebrow">Guests only</p>
            <h3 class="h3">The infinity pool</h3>
            <p class="lead">A soothing edge that merges with the horizon. Swim at first light, float through the afternoon, or simply sit at the water's edge and watch the sky change its mind.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section section--sand">
  <div class="container">
    <div class="section-head">
      <div><p class="eyebrow">Beyond the treatment room</p><h2 class="h2" data-split style="margin-top:20px">The whole<br><em class="italic gold">mountain.</em></h2></div>
      <div class="section-head__aside"><p class="lead">Wellness here is not confined to a room. It is the pool, the gym, the salon and the long walk back to yourself.</p></div>
    </div>
    <div class="cards-2">
      ${[
        ["hammam-image-1.jpg", "The Hammam", "Heat, steam and ancient cleansing rituals — the largest Hammam in North India."],
        ["Pool3.jpg", "Infinity pool", "Designed for total relaxation, merging effortlessly with the horizon."],
        ["moksha-saloon-img.jpg", "The salon", "Facials, hair and grooming in a tranquil, unhurried environment."],
        ["moksha-activity-image-1.jpg", "Fitness centre", "Cutting-edge equipment, tailored sessions and mountain air through the windows."],
      ].map(([img, t, d]) => `<article class="feature-card" data-reveal data-reveal-child>
        <div class="media media--hover"><img src="assets/img/${img}" alt="${t}" loading="lazy"></div>
        <div class="feature-card__meta"><span>Wellness</span><span>Moksha</span></div>
        <h3>${t}</h3>
        <p>${d}</p>
      </article>`).join("\n      ")}
    </div>
  </div>
</section>

${ctaBand({
  image: "wellness-1.jpg",
  title: "Arrive tired.<br>Leave <em class=\"italic gold\">lighter.</em>",
  text: "Build a half-day or full-day spa journey with our wellness concierge. Treatments can be arranged around your stay.",
  primary: ["Plan a spa journey", "contact.html"],
  secondary: ["View packages", "packages.html"],
})}
`;

export const experiences = `
${pageHero({
  image: "exp-banner.jpg",
  alt: "Experiences at Moksha Himalaya",
  crumb: "Experiences",
  lines: ["Make time", 'disappear.'],
  intro: "A cable car through the sky, a pool at the edge of the world, live music under the stars. At Moksha, the days are full of nothing in particular — and that is the point.",
  meta: [["Arrival", "Cable car · 9 am – 6 pm"], ["On property", "Pool · spa · sports"], ["After dark", "Live music · bonfire"]],
})}

<section class="section">
  <div class="container">
    <div class="editorial">
      <aside class="editorial__aside">
        <p class="eyebrow">The rhythm</p>
        <p class="label" style="color:var(--muted)">Make time disappear</p>
      </aside>
      <div class="editorial__body" data-reveal>
        <p>A cable car through the sky, an infinity pool at the edge of the world, live music under a star-filled canopy. At Moksha, the days are full of nothing in particular — and that is the point.</p>
        <blockquote>“You don’t come here to fill your schedule. You come here to empty it.”</blockquote>
        <p class="lead">Whether you are hiking pine-covered ridgelines, playing tennis amidst the fresh alpine breeze, or floating in heated waters as the sun slips behind the Shivalik peaks, every moment is designed to quiet the mind.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--flush" id="cable-car">
  <div class="container">
    <div class="split">
      <div class="split__media media" data-reveal><img src="assets/img/moksha-cable-car-1.jpg" alt="The cable car arriving at Moksha Himalaya" data-parallax="6" loading="lazy"></div>
      <div class="split__body" data-reveal>
        <p class="eyebrow">01 · The arrival</p>
        <h2 class="h2">Your stay begins<br>in the <em class="italic gold">sky.</em></h2>
        <p class="lead">Ever imagined soaring through the sky? At Moksha, check-in starts with a cable car ride from the Timber Trail base — nine minutes of panoramic aerial views that are nothing short of awe-inspiring.</p>
        <div class="page-hero__meta" style="border-color:var(--line)">
          <div><span>Boarding</span><strong>Timber Trail base</strong></div>
          <div><span>Hours</span><strong>9:00 am – 6:00 pm</strong></div>
          <div><span>Included</span><strong>For resident guests</strong></div>
        </div>
        <a class="link-arrow" href="contact.html"><span>Directions to the base</span>${icons.arrowRight}</a>
      </div>
    </div>
  </div>
</section>

<section class="section section--sand" id="on-property">
  <div class="container">
    <div class="section-head">
      <div><p class="eyebrow">On the property</p><h2 class="h2" data-split style="margin-top:20px">A little of<br>everything. <em class="italic gold">Nothing.</em></h2></div>
      <div class="section-head__aside"><p class="lead">Play a set of tennis, walk the pine trails, or do absolutely nothing by the pool. The day is yours to shape.</p></div>
    </div>
    <div class="cards-3">
      ${[
        ["moksha-activity-image-1.jpg", "Sport & play", "Tennis, badminton and cricket on the resort courts — for the family that plays together."],
        ["nature-walk.jpg", "Nature walks", "Idyllic trails through pine and rhododendron, guided by the people who know them best."],
        ["live-singing.jpg", "Live music", "Soothing tunes by the pool as the sun goes down. Every night feels like a small occasion."],
        ["Pool3.jpg", "The infinity pool", "Exclusively for guests. Sip something cold and watch the sky change colour."],
        ["hammam-image-1.jpg", "The spa", "Ayurvedic rituals and the largest Hammam in North India — tension, head to toe."],
        ["exp-img.jpg", "Private dining", "A table for two with an uninterrupted Himalayan view. Dress up. Stay late."],
      ].map(([img, t, d]) => `<article class="feature-card" data-reveal data-reveal-child>
        <div class="media media--hover"><img src="assets/img/${img}" alt="${t}" loading="lazy"></div>
        <div class="feature-card__meta"><span>Experience</span><span>Moksha</span></div>
        <h3>${t}</h3>
        <p>${d}</p>
      </article>`).join("\n      ")}
    </div>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="section-head">
      <div><p class="eyebrow">After dark</p><h2 class="h2" data-split style="margin-top:20px">The sky puts on<br>the <em class="italic gold">show.</em></h2></div>
      <div class="section-head__aside"><p class="lead">A bonfire, a barbecue, a singer, and a sky without light pollution. Bring a jumper. Stay until the embers die.</p></div>
    </div>
    <div class="cards-2">
      <article class="feature-card" data-reveal data-reveal-child>
        <div class="media media--hover" style="height:clamp(300px,40vw,540px)"><img src="assets/img/live-singing.jpg" alt="Live music at Moksha" loading="lazy"></div>
        <div class="feature-card__meta"><span>Evenings</span><span>Under the stars</span></div>
        <h3>Live, by the pool</h3>
        <p>Talented singers and musicians set the mood while you relax with a drink under the stars. Every night at Moksha is elevated by the magic of live music.</p>
      </article>
      <article class="feature-card" data-reveal data-reveal-child>
        <div class="media media--hover" style="height:clamp(300px,40vw,540px)"><img src="assets/img/exp9.jpg" alt="Bonfire at Moksha" loading="lazy"></div>
        <div class="feature-card__meta"><span>Nightly</span><span>Weather permitting</span></div>
        <h3>Bonfire &amp; barbecue</h3>
        <p>Unwind by the fire and craft extraordinary moments. A complete staycation, with the warmth of the flames against the cool mountain air.</p>
      </article>
    </div>
  </div>
</section>

<section class="section section--flush">
  <div class="container">
    <div class="section-head"><div><p class="eyebrow">Nearby</p><h2 class="h2" data-split style="margin-top:20px">Borrow the<br>neighbourhood.</h2></div></div>
    <div class="timeline">
      ${[
        ["20 min", "Kasauli", "Colonial lanes, bakeries and a slow afternoon of tea and pine air."],
        ["10 min", "Timber Trail", "The base station, the cable car and the beginning of the ascent."],
        ["45 min", "Chandigarh", "The city, the airport and the world you are briefly leaving behind."],
        ["90 min", "Shimla", "Heritage, hills and a longer drive for a longer stay."],
      ].map(([n, t, d], i) => `<div class="timeline__item" data-reveal><span class="timeline__num">0${i + 1}</span><h3>${t}</h3><p>${d} <span style="color:var(--gold)">· ${n}</span></p></div>`).join("\n      ")}
    </div>
  </div>
</section>

${ctaBand({
  image: "exp10.jpg",
  title: "Come for a night.<br>Stay for the <em class=\"italic gold\">feeling.</em>",
  text: "The cable car leaves the ordinary behind every day. All you have to do is get on.",
  primary: ["Reserve your stay", "#", "data-booking-open"],
  secondary: ["See the gallery", "gallery.html"],
})}
`;
