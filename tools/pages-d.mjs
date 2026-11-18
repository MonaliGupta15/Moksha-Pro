/* =========================================================
   MOKSHA — Internal Pages: Careers, Privacy, Terms, Blog
   ========================================================= */
import { icons, pageHero, ctaBand } from "./layout.mjs";

/* ---------------- CAREERS PAGE ---------------- */
export const careersPage = `
${pageHero({
  image: "exp-img.jpg",
  alt: "The mountain landscape at Moksha Himalaya Spa Resort",
  crumb: "Careers",
  lines: ["Life & work", 'above the <em class="italic gold">clouds.</em>'],
  intro: "Join our hospitality family at 5,000 ft in the Shivalik Himalayas. We seek passionate, detail-oriented professionals dedicated to genuine care, luxury wellness and mountain hospitality.",
  meta: [["Location", "Parwanoo, HP · 5,000 ft"], ["Company", "Asia Resorts Limited"], ["Departments", "07 Divisions"]],
})}

<section class="section">
  <div class="container">
    <div class="editorial">
      <aside class="editorial__aside">
        <p class="eyebrow">Join our circle</p>
        <p class="label" style="color:var(--muted)">Work where others escape</p>
      </aside>
      <div class="editorial__body" data-reveal>
        <p>Hospitality at Moksha is different from a bustling city hotel. Here, luxury is quiet, unhurried, and deeply rooted in the natural silence of the Himalayas.</p>
        <blockquote>“We do not just host guests; we restore them. That begins with a team that feels valued, supported, and at home.”</blockquote>
        <p class="lead">As part of Asia Resorts Limited, our team members enjoy competitive remuneration, continuous professional training, comfortable staff accommodations at the property, and the unique privilege of living and working surrounded by pine forests at 5,000 ft.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--sand" id="open-roles">
  <div class="container">
    <div class="section-head" data-reveal>
      <div>
        <p class="eyebrow">Current Opportunities</p>
        <h2 class="h2" data-split style="margin-top:20px">Explore open<br><em class="italic gold">positions.</em></h2>
      </div>
      <div class="section-head__aside">
        <p class="lead">We welcome applications across all levels — from culinary masters to wellness therapists and guest experience hosts. Discover our departments below.</p>
      </div>
    </div>

    <div class="cards-3">
      <article class="feature-card" data-reveal data-reveal-child>
        <div class="feature-card__meta"><span>Division 01</span><span>Front Office</span></div>
        <h3>Guest Experience &amp; Concierge</h3>
        <p>Front Desk Executives, Cable-Car Host Coordinators, and Guest Relations Specialists responsible for crafting seamless arrivals from the base station to the suites.</p>
        <div style="margin-top:16px"><span class="chip">Full-time</span> <span class="chip">Parwanoo</span></div>
      </article>

      <article class="feature-card" data-reveal data-reveal-child>
        <div class="feature-card__meta"><span>Division 02</span><span>Food &amp; Beverage</span></div>
        <h3>Service &amp; Sommeliers</h3>
        <p>Captains, Food &amp; Beverage Hosts, and Bartenders for Pines &amp; Cones and intimate poolside dining. Dedication to discreet, intuitive table service is essential.</p>
        <div style="margin-top:16px"><span class="chip">Full-time</span> <span class="chip">Parwanoo</span></div>
      </article>

      <article class="feature-card" data-reveal data-reveal-child>
        <div class="feature-card__meta"><span>Division 03</span><span>Culinary Arts</span></div>
        <h3>Chefs &amp; Pastry Specialists</h3>
        <p>Commis and Sous Chefs specializing in Himachali regional heritage recipes, authentic Thai woks, European classics, and artisanal breakfast bakeries.</p>
        <div style="margin-top:16px"><span class="chip">Full-time</span> <span class="chip">Parwanoo</span></div>
      </article>

      <article class="feature-card" data-reveal data-reveal-child>
        <div class="feature-card__meta"><span>Division 04</span><span>Spa &amp; Wellness</span></div>
        <h3>Ayurveda &amp; Hammam Therapists</h3>
        <p>Certified Ayurvedic therapists, Turkish Hammam practitioners, Yoga masters, and Salon professionals dedicated to holistic healing rituals.</p>
        <div style="margin-top:16px"><span class="chip">Full-time</span> <span class="chip">Parwanoo</span></div>
      </article>

      <article class="feature-card" data-reveal data-reveal-child>
        <div class="feature-card__meta"><span>Division 05</span><span>Housekeeping</span></div>
        <h3>Sanctuary &amp; Floral Stylists</h3>
        <p>Floor supervisors, laundry specialists, and suite attendants committed to preserving the immaculate quiet and comfort of our 800–1,200 sq ft suites.</p>
        <div style="margin-top:16px"><span class="chip">Full-time</span> <span class="chip">Parwanoo</span></div>
      </article>

      <article class="feature-card" data-reveal data-reveal-child>
        <div class="feature-card__meta"><span>Division 06</span><span>Sales &amp; Banquets</span></div>
        <h3>Events &amp; Wedding Coordinators</h3>
        <p>Sales managers and event coordinators managing grand celebrations in the Mansion Hall, corporate conclaves, and destination weddings.</p>
        <div style="margin-top:16px"><span class="chip">Full-time</span> <span class="chip">Chandigarh / Parwanoo</span></div>
      </article>
    </div>
  </div>
</section>

<section class="section" id="culture-benefits">
  <div class="container">
    <div class="section-head" data-reveal>
      <div>
        <p class="eyebrow">Life at Moksha</p>
        <h2 class="h2" data-split style="margin-top:20px">Why build your<br>career <em class="italic gold">with us?</em></h2>
      </div>
      <div class="section-head__aside">
        <p class="lead">We believe that taking exceptional care of our team enables them to take exceptional care of our guests.</p>
      </div>
    </div>
    <div class="stats" data-reveal>
      <div class="stat"><span class="stat__num">100<sup>%</sup></span><span class="stat__label">Staff Accommodation &amp; Meals</span></div>
      <div class="stat"><span class="stat__num">5,000<sup>FT</sup></span><span class="stat__label">Alpine Living Environment</span></div>
      <div class="stat"><span class="stat__num">07<sup>+</sup></span><span class="stat__label">Distinct Career Pathways</span></div>
      <div class="stat"><span class="stat__num">365<sup>Days</sup></span><span class="stat__label">Comprehensive Health Care</span></div>
    </div>
  </div>
</section>

<section class="section section--sand" id="apply-now">
  <div class="container">
    <div class="contact-grid">
      <div class="contact-card" data-reveal>
        <p class="eyebrow">Human Resources</p>
        <h2 class="h2" style="margin-top:20px">Send your<br><em class="italic gold">application.</em></h2>
        <p class="lead" style="margin-top:14px">Prefer to connect directly? You can write to our Human Resources department or share your curriculum vitae via email.</p>
        <div class="contact-block" style="margin-top:20px">
          <h4>HR Contact</h4>
          <p><a href="mailto:careers@mokshaspa.com">careers@mokshaspa.com</a><br><a href="mailto:hr@mokshaspa.com">hr@mokshaspa.com</a></p>
        </div>
        <div class="contact-block">
          <h4>Phone</h4>
          <p><a href="tel:+919218532341">+91 92185 32341</a> (Ext: HR Dept)<br>Mon–Sat · 10:00 am – 6:00 pm</p>
        </div>
        <div class="contact-block">
          <h4>Corporate Office</h4>
          <p>Asia Resorts Limited<br>Moksha Himalaya Spa Resort<br>Parwanoo 173220, Himachal Pradesh</p>
        </div>
      </div>

      <form class="contact-form" data-form data-success="Thank you for your application! Our HR team will review your profile and reach out shortly.">
        <div>
          <p class="eyebrow">Career Inquiry</p>
          <h3 class="h3" style="margin-top:14px">Introduce yourself.</h3>
        </div>
        <div class="form-row">
          <div class="field"><label for="car-fname">First Name</label><input type="text" id="car-fname" name="fname" placeholder="First name" required></div>
          <div class="field"><label for="car-lname">Last Name</label><input type="text" id="car-lname" name="lname" placeholder="Last name" required></div>
        </div>
        <div class="form-row">
          <div class="field"><label for="car-email">Email Address</label><input type="email" id="car-email" name="email" placeholder="you@example.com" required></div>
          <div class="field"><label for="car-phone">Phone Number</label><input type="tel" id="car-phone" name="phone" placeholder="+91" required></div>
        </div>
        <div class="field">
          <label for="car-dept">Department of Interest</label>
          <select id="car-dept" name="department" class="select-input" required>
            <option value="" disabled selected>Select a department</option>
            <option value="front-office">Front Office &amp; Concierge</option>
            <option value="fb-service">Food &amp; Beverage Service</option>
            <option value="culinary">Culinary &amp; Kitchen Arts</option>
            <option value="spa-wellness">Spa, Ayurveda &amp; Hammam</option>
            <option value="housekeeping">Housekeeping &amp; Laundry</option>
            <option value="sales-events">Sales, MICE &amp; Wedding Events</option>
            <option value="engineering">Engineering, Ropeway &amp; Maintenance</option>
            <option value="finance-hr">Finance, Administration &amp; HR</option>
          </select>
        </div>
        <div class="field">
          <label for="car-exp">Years of Experience</label>
          <select id="car-exp" name="experience" class="select-input">
            <option value="entry">Entry Level / Fresh Graduate</option>
            <option value="1-3">1 – 3 Years</option>
            <option value="3-5">3 – 5 Years</option>
            <option value="5+">5+ Years (Senior / Leadership)</option>
          </select>
        </div>
        <div class="field">
          <label for="car-msg">Brief Cover Note / Experience Summary</label>
          <textarea id="car-msg" name="message" placeholder="Tell us about your background, career goals, and what draws you to Moksha Himalaya…" required></textarea>
        </div>
        <button class="btn btn--dark btn--block" type="submit"><span>Submit Application</span> ${icons.arrow}</button>
      </form>
    </div>
  </div>
</section>

${ctaBand({
  image: "exp-banner.jpg",
  title: "Where hospitality<br>meets <em class=\"italic gold\">purpose.</em>",
  text: "Join a dedicated team serving discerning travellers from around the world at North India's premier wellness resort.",
  primary: ["Submit your CV", "#apply-now"],
  secondary: ["About the Resort", "index.html"],
})}
`;

/* ---------------- PRIVACY POLICY PAGE ---------------- */
export const privacyPage = `
${pageHero({
  image: "main-banner.jpg",
  alt: "Moksha Himalaya Spa Resort mountain landscape",
  crumb: "Privacy Policy",
  lines: ["Privacy, plainly", '<em class="italic gold">protected.</em>'],
  intro: "At Moksha Himalaya Spa Resort (Asia Resorts Limited), we are committed to safeguarding your privacy and ensuring your personal information is handled with the utmost discretion and security.",
  meta: [["Entity", "Asia Resorts Limited"], ["Scope", "mokshaspa.com"], ["Updated", "2026 Edition"]],
})}

<section class="section">
  <div class="container">
    <div class="editorial">
      <aside class="editorial__aside">
        <p class="eyebrow">Privacy &amp; Data</p>
        <p class="label" style="color:var(--muted)">How we protect your trust</p>
      </aside>
      <div class="editorial__body" data-reveal>
        <p>This Privacy Policy explains how Asia Resorts Limited collects, safeguards, and utilizes your personal information across your digital interactions with mokshaspa.com and your physical stay at Moksha Himalaya Spa Resort.</p>
        <blockquote>“Discretion is the quietest form of luxury. Your personal details are never sold, traded, or compromised.”</blockquote>
        <p class="lead">By accessing our website or reserving accommodation, spa services, or event spaces, you acknowledge and agree to the policies and privacy safeguards described below.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--sand">
  <div class="container container--narrow" data-reveal>
    <div class="legal-content">
      <div class="legal-block">
        <span class="legal-num">01</span>
        <h3>Information We Collect</h3>
        <p><strong>Personal Information:</strong> When you make a reservation, submit an enquiry, book a spa therapy, or contact our reservations desk, we collect identifiable information such as your full name, email address, telephone contact number, residential address, and specific stay preferences.</p>
        <p><strong>Banking &amp; Payment Safeguards:</strong> We do not store your complete banking credentials or credit/debit card numbers directly on our servers. All digital monetary transactions are processed through authorized, RBI-compliant payment gateway partners utilizing industry-standard 256-bit SSL encryption and PCI-DSS compliance.</p>
        <p><strong>Technical &amp; Non-Personal Information:</strong> We may collect non-personally identifiable technical information including browser type, operating system, IP address, and anonymized browsing behavior to optimize site responsiveness and user experience.</p>
      </div>

      <div class="legal-block">
        <span class="legal-num">02</span>
        <h3>How We Use Your Information</h3>
        <p>The information we collect is strictly utilized for legitimate hospitality purposes:</p>
        <ul>
          <li>Processing room reservations, packages, spa treatments, and cable-car transit passes.</li>
          <li>Communicating arrival itineraries, weather updates, and check-in requirements.</li>
          <li>Tailoring personalized dietary, wellness, and suite preferences during your stay.</li>
          <li>Complying with statutory guest reporting regulations established by the Government of India and the Himachal Pradesh Tourism Department.</li>
        </ul>
      </div>

      <div class="legal-block">
        <span class="legal-num">03</span>
        <h3>Cookie Policy &amp; Analytics</h3>
        <p>Our website uses first-party and performance cookies to enhance navigation, retain preference states (such as selected check-in dates), and monitor aggregate traffic. You can modify your browser settings at any time to reject cookies; however, certain interactive booking engine features may require cookies to function correctly.</p>
      </div>

      <div class="legal-block">
        <span class="legal-num">04</span>
        <h3>Information Sharing &amp; Third Parties</h3>
        <p>We do not sell, rent, trade, or distribute your personal details to outside commercial third parties. Your data is only shared with authorized service partners (such as reservation engine operators and secure payment processors) strictly to fulfill your booking, or when formally required by law enforcement or governmental authorities.</p>
      </div>

      <div class="legal-block">
        <span class="legal-num">05</span>
        <h3>Your Rights &amp; Data Control</h3>
        <p>You have the absolute right to inspect, correct, or request deletion of the personal information stored in our reservations registry. To request a copy of your records or to request removal from promotional communications, please email us directly at <a href="mailto:reservations@mokshaspa.com" style="color:var(--gold);text-decoration:underline;">reservations@mokshaspa.com</a>.</p>
      </div>

      <div class="legal-block">
        <span class="legal-num">06</span>
        <h3>Contact for Privacy Inquiries</h3>
        <p>For questions or formal correspondence concerning this Privacy Policy, please contact:</p>
        <p style="margin-top:10px;font-style:italic;color:var(--ink-2);">
          Data Protection Officer<br>
          Asia Resorts Limited — Moksha Himalaya Spa Resort<br>
          Parwanoo 173220, Himachal Pradesh, India<br>
          Telephone: +91 92185 32341 · Email: <a href="mailto:info@mokshaspa.com">info@mokshaspa.com</a>
        </p>
      </div>
    </div>
  </div>
</section>

${ctaBand({
  image: "contact-us-banner.jpg",
  title: "Have a question<br>about your <em class=\"italic gold\">data?</em>",
  text: "Our guest relations and compliance team is available to assist you with any questions.",
  primary: ["Contact Concierge", "contact.html"],
  secondary: ["Return to Home", "index.html"],
})}
`;

/* ---------------- TERMS & CONDITIONS PAGE ---------------- */
export const termsPage = `
${pageHero({
  image: "moksha-cable-car-1.jpg",
  alt: "Cable car ascent to Moksha Himalaya Spa Resort",
  crumb: "Terms & Conditions",
  lines: ["Guidelines for a", 'seamless <em class="italic gold">stay.</em>'],
  intro: "Please review the terms, cable-car transfer windows, deposit guidelines, and house protocols established by Asia Resorts Limited to ensure an effortless mountain retreat.",
  meta: [["Entity", "Asia Resorts Limited"], ["Ropeway Hours", "09:30 – 17:30 hrs"], ["Taxes", "18% GST Applicable"]],
})}

<section class="section">
  <div class="container">
    <div class="editorial">
      <aside class="editorial__aside">
        <p class="eyebrow">Resort Protocols</p>
        <p class="label" style="color:var(--muted)">Clarity, comfort &amp; care</p>
      </aside>
      <div class="editorial__body" data-reveal>
        <p>Because Moksha Himalaya Spa Resort is perched at 5,000 feet and reached via a nine-minute aerial cable-car journey over the valley, careful coordination ensures your safety and serenity.</p>
        <blockquote>“A peaceful stay begins with clear expectations. Every guideline exists to protect the quiet sanctuary of the mountain.”</blockquote>
        <p class="lead">By confirming a room reservation, dining booking, or event contract with Asia Resorts Limited, guests agree to abide by the following operational policies and house regulations.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--sand">
  <div class="container container--narrow" data-reveal>
    <div class="legal-content">
      <div class="legal-block">
        <span class="legal-num">01</span>
        <h3>Cable Car Transfer &amp; Arrival Timings</h3>
        <p><strong>Operating Hours:</strong> The aerial cable car operates strictly between <strong>09:30 hrs and 17:30 hrs</strong> daily. Guests booked for Moksha Himalaya Spa Resort are requested to plan their arrival at the Timber Trail base station and their final departure within these prescribed hours only.</p>
        <p><strong>Late Arrival / Weather Advisory:</strong> In the event of an arrival after 17:30 hrs, the resort cannot operate the cable car after dark and provides no alternative transit or off-site accommodation; such reservations will be treated as a no-show. Furthermore, cable car operations remain subject to prevailing mountain weather conditions and technical safety standards.</p>
      </div>

      <div class="legal-block">
        <span class="legal-num">02</span>
        <h3>Reservation Guarantee &amp; Advance Payment</h3>
        <p>Quoted rates are indicative offers and do not hold inventory without formal confirmation. Room reservations are confirmed solely against <strong>100% advance payment</strong> in favor of Asia Resorts Limited prior to the designated deadline.</p>
        <p>In the event of non-payment by the due date, reserved rooms will be automatically released without prior notice, and fresh bookings will be subject strictly to prevailing tariff and availability.</p>
      </div>

      <div class="legal-block">
        <span class="legal-num">03</span>
        <h3>Check-In, Check-Out &amp; Identification</h3>
        <p><strong>Timings:</strong> Check-in time is <strong>14:00 hrs</strong>; Check-out time is <strong>12:00 hrs (noon)</strong>. Early check-in or late check-out is subject to room availability on the date and attracts supplementary charges.</p>
        <p><strong>Government ID Requirement:</strong> In compliance with Government of India and local authorities, all adult guests (Indian and foreign nationals) must carry and present a valid government-issued photo identity proof (Aadhaar Card, Passport, Voter ID, or Driving License) upon arrival at the reception desk.</p>
      </div>

      <div class="legal-block">
        <span class="legal-num">04</span>
        <h3>Taxes, Additional Guests &amp; Wi-Fi</h3>
        <p><strong>Applicable Taxes:</strong> Prevailing statutory GST (currently 18%) is applicable on room tariff, food, and beverage services, and will be charged extra as per government notifications.</p>
        <p><strong>Additional Occupants:</strong> Additional children, extra adult guests, rollaway beds, and meals not specified at the time of initial booking will be billed separately at check-in.</p>
        <p><strong>Wi-Fi Access:</strong> High-speed internet is available across the resort at an additional charge of <strong>INR 590/- per device / day</strong>.</p>
      </div>

      <div class="legal-block">
        <span class="legal-num">05</span>
        <h3>House Rules, Swimming Pool &amp; Outside Food</h3>
        <p><strong>Outside Food &amp; Alcohol:</strong> To maintain food hygiene and licensing protocols, outside eatables, delivery foods, and personal liquor are strictly prohibited on hotel premises.</p>
        <p><strong>Infinity Pool &amp; Jacuzzis:</strong> Use of the temperature-controlled infinity pool and outdoor hot jacuzzis is permitted strictly in proper swimwear attire. Glassware is prohibited in wet pool zones.</p>
        <p><strong>Spa Appointments:</strong> Because treatment slots in our Ayurvedic center and Turkish Hammam are limited, pre-booking appointments at least 24 hours in advance is strongly recommended.</p>
      </div>

      <div class="legal-block">
        <span class="legal-num">06</span>
        <h3>Cancellation, Amendments &amp; No-Show Policy</h3>
        <p><strong>14+ Days Notice:</strong> Cancellations or amendments received 14 or more days prior to the scheduled arrival date receive a refund, subject to administrative charges.</p>
        <p><strong>Within 14 Days:</strong> Cancellations or amendments received within 14 days of arrival attract 100% retention charge for the entire booked stay.</p>
        <p><strong>No-Show or Early Departure:</strong> No refunds, credits, or adjustments will be issued for early checkout or failure to arrive due to transit delays or weather.</p>
      </div>
    </div>
  </div>
</section>

${ctaBand({
  image: "offers-banner.jpg",
  title: "Ready to plan your<br><em class=\"italic gold\">ascent?</em>",
  text: "Have specific questions about timing, transfers or reservations? Our team is available 24/7.",
  primary: ["Reserve a suite", "#", "data-booking-open"],
  secondary: ["Speak to Concierge", "contact.html"],
})}
`;

/* ---------------- BLOG / JOURNAL PAGE ---------------- */
const blogArticles = [
  {
    slug: "holi-celebration-near-solan",
    category: "Festivals & Celebrations",
    date: "Spring 2026",
    title: "Holi Celebration Near Solan: Why Mountain Retreats Are the Ultimate Festive Getaway",
    intro: "Trading crowded city streets and synthetic powder for clean alpine air, organic flower petals, and live acoustic music by a heated infinity pool 5,000 feet above the valley.",
    img: "exp8.jpg",
    readTime: "4 min read",
  },
  {
    slug: "weekend-resort-near-delhi-chandigarh",
    category: "Travel Guides",
    date: "All Seasons",
    title: "The 300-km Escape: A Luxury Himalayan Sanctuary Within Easy Reach of Delhi & Chandigarh",
    intro: "Forty minutes from Chandigarh International Airport and an unhurried cable-car ascent over the Shivalik ridgelines. Why Moksha eliminates the exhausting mountain drive while preserving pure alpine wilderness.",
    img: "moksha-cable-car-1.jpg",
    readTime: "5 min read",
  },
  {
    slug: "himalayan-ayurveda-wellness-retreat",
    category: "Ayurveda & Healing",
    date: "Wellness Perspective",
    title: "Ancient Healing in the Clouds: How Altitude and Silence Amplify Ayurvedic Treatments",
    intro: "Warm medicated oils poured across the forehead in Shirodhara, authentic Abhyanga synchrony, and North India's largest Turkish Hammam. Understanding the deliberate science of rest.",
    img: "wellness-1.jpg",
    readTime: "6 min read",
  },
  {
    slug: "destination-wedding-in-the-shivaliks",
    category: "Weddings & Celebrations",
    date: "Bridal Journal",
    title: "Vows in the Shivaliks: Planning a Destination Mountain Wedding at 5,000 Feet",
    intro: "From intimate sunset pheras overlooking distant valley lights to a banquet for 350 in the Mansion Hall with electronic dance floors. Everything you need to know about celebrating above the clouds.",
    img: "wedding2.jpg",
    readTime: "5 min read",
  },
  {
    slug: "pine-ridge-trails-kasauli-dharampur",
    category: "Nature & Hiking",
    date: "Mountain Terroir",
    title: "The Pine Ridge Trails: Exploring Gilbert Trail, Kasauli & Dharampur from Moksha",
    intro: "Walking paths shaded by centuries-old pine, cedar, and blooming rhododendron. Discovering quiet colonial hamlets and secret ridge lookouts just beyond the resort grounds.",
    img: "nature-walk.jpg",
    readTime: "4 min read",
  },
  {
    slug: "romantic-mountain-getaway-couples",
    category: "Couples & Escapes",
    date: "Romance Guide",
    title: "A Sanctuary for Two: Private Balconies, Hammam Steam & Candlelit Dining at Dusk",
    intro: "Why Moksha is repeatedly chosen for proposals, milestones, and anniversaries. How private balconies, in-suite dining, and starlit bonfires create unforgettable intimacy.",
    img: "Pool3.jpg",
    readTime: "4 min read",
  },
];

export const blogPage = `
${pageHero({
  image: "exp-banner.jpg",
  alt: "The Shivalik Himalayas at dawn",
  crumb: "Journal",
  lines: ["The Journal of", 'the <em class="italic gold">Himalayas.</em>'],
  intro: "Stories, seasonal guides, wellness philosophy and travel perspectives from 5,000 feet above Parwanoo. Written for those drawn to mountain silence.",
  meta: [["The Journal", "Moksha Chronicles"], ["Stories", "06 Curated Articles"], ["Topics", "Travel · Ayurveda · Culture"]],
})}

<section class="section">
  <div class="container">
    <div class="editorial">
      <aside class="editorial__aside">
        <p class="eyebrow">The Chronicles</p>
        <p class="label" style="color:var(--muted)">Perspectives on stillness</p>
      </aside>
      <div class="editorial__body" data-reveal>
        <p>The mountain changes its mood with every hour of the day. In this Journal, we share the rhythm of life at 5,000 feet — from seasonal getaways and festival celebrations to deep dives into ancient Ayurvedic restoration.</p>
        <blockquote>“Some stories are read in books. The best ones are written in fresh pine air and mountain silence.”</blockquote>
        <p class="lead">Whether you are planning your first weekend trip from Delhi or Chandigarh, organizing a destination mountain wedding, or seeking the therapeutic benefits of our Turkish Hammam, explore our articles below.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--sand" id="articles">
  <div class="container">
    <div class="section-head" data-reveal>
      <div>
        <p class="eyebrow">All Articles</p>
        <h2 class="h2" data-split style="margin-top:20px">Curated reads from<br>the <em class="italic gold">mountain.</em></h2>
      </div>
      <div class="section-head__aside">
        <p class="lead">Insights on wellness, travel, cuisine and celebrating in the Shivalik range.</p>
      </div>
    </div>

    <div class="cards-3">
      ${blogArticles.map((art) => `<article class="feature-card" data-reveal data-reveal-child>
        <div class="media media--hover" style="height:clamp(240px,26vw,340px)"><img src="assets/img/${art.img}" alt="${art.title}" loading="lazy"></div>
        <div class="feature-card__meta"><span>${art.category}</span><span>${art.readTime}</span></div>
        <h3>${art.title}</h3>
        <p>${art.intro}</p>
        <div style="margin-top:auto;padding-top:16px;border-top:1px solid var(--line);display:flex;align-items:center;justify-content:space-between">
          <span style="font-size:10px;letter-spacing:.12em;text-transform:uppercase;color:var(--muted)">${art.date}</span>
          <a class="link-arrow" href="contact.html"><span>Plan this trip</span>${icons.arrowRight}</a>
        </div>
      </article>`).join("\n      ")}
    </div>
  </div>
</section>

${ctaBand({
  image: "main-banner.jpg",
  title: "Write your own<br>mountain <em class=\"italic gold\">story.</em>",
  text: "Escape to 5,000 ft in Parwanoo. Nine minutes by cable car from Timber Trail base.",
  primary: ["Check availability", "#", "data-booking-open"],
  secondary: ["Explore Suites", "suites.html"],
})}
`;
