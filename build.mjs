/* =========================================================
   MOKSHA — build entry point
   Usage: node build.mjs
   ========================================================= */
import { layout, writePage } from "./tools/layout.mjs";
import { home } from "./tools/home.mjs";
import { suites, dining } from "./tools/pages-a.mjs";
import { wellness, experiences } from "./tools/pages-b.mjs";
import { weddings, gallery, contact, packagesPage } from "./tools/pages-c.mjs";
import { careersPage, privacyPage, termsPage } from "./tools/pages-d.mjs";
import { buildAllBlogs } from "./tools/blogs-engine.mjs";

const pages = [
  {
    file: "index.html",
    page: "home",
    title: "Moksha Himalaya Spa Resort — A sanctuary above the Shivaliks",
    desc: "A cable-car ascent into stillness. An all-suite luxury spa resort at 5,000 ft in Parwanoo, Himachal Pradesh — infinity pool, Himalayan Hammam and Ayurvedic rituals near Chandigarh.",
    image: "assets/img/main-banner.jpg",
    preload: '<link rel="preload" as="image" href="assets/img/main-banner.jpg">',
    main: home,
    withLightbox: true,
  },
  {
    file: "suites.html",
    page: "suites",
    title: "Suites & Accommodation — Moksha Himalaya Spa Resort",
    desc: "Four categories of luxury suite at 5,000 ft, from 800 to 1,200 sq ft, each with a private balcony, panoramic views and cable-car transfers included.",
    image: "assets/img/rooms-1.jpg",
    main: suites,
  },
  {
    file: "dining.html",
    page: "dining",
    title: "Dining — Pines & Cones and the Restaurant & Bar | Moksha Himalaya",
    desc: "Himachali Dham, Thai, Oriental, Continental and Indian cuisine at 5,000 ft. All-day dining at Pines & Cones, a discreet bar and private dinners under the stars.",
    image: "assets/img/dine-banner.jpg",
    main: dining,
  },
  {
    file: "wellness.html",
    page: "wellness",
    title: "Spa & Wellness — Ayurveda, Hammam and Infinity Pool | Moksha",
    desc: "Ayurvedic treatments, international rituals, daily yoga and the largest Hammam in North India, at a spa resort 5,000 ft above Parwanoo.",
    image: "assets/img/wellness-banner.jpg",
    main: wellness,
  },
  {
    file: "experiences.html",
    page: "experiences",
    title: "Experiences — Cable Car, Infinity Pool & Star-lit Evenings | Moksha",
    desc: "Arrive by cable car, swim at the infinity edge, play, walk the pine trails and end the day with live music and a bonfire above the Shivaliks.",
    image: "assets/img/exp-banner.jpg",
    main: experiences,
  },
  {
    file: "weddings.html",
    page: "weddings",
    title: "Destination Weddings & Events — Moksha Himalaya Spa Resort",
    desc: "Destination weddings, celebrations and corporate events at 5,000 ft. The Mansion Hall for 350 guests, the Royal Ballroom for 150, and a 2,095 sq ft conference hall.",
    image: "assets/img/wedding-event-banner.jpg",
    main: weddings,
  },
  {
    file: "gallery.html",
    page: "gallery",
    title: "Gallery — Moksha Himalaya Spa Resort, Parwanoo",
    desc: "A photographic collection of the suites, spa, dining and landscape at Moksha Himalaya — light, steam, pine forests and long mountain evenings.",
    image: "assets/img/gallery-banner.jpg",
    main: gallery,
    withLightbox: true,
  },
  {
    file: "packages.html",
    page: "packages",
    title: "Stay Packages & Offers — Moksha Himalaya Spa Resort",
    desc: "Curated stays at Moksha Himalaya: the Moksha Staycation, the Wellness Immersion and the Celebration. Cable-car transfers, breakfast and spa savings included.",
    image: "assets/img/offers-banner.jpg",
    main: packagesPage,
  },
  {
    file: "contact.html",
    page: "contact",
    title: "Contact & Directions — Moksha Himalaya Spa Resort, Parwanoo",
    desc: "Reservations, sales and directions to Moksha Himalaya Spa Resort, Parwanoo. Forty minutes from Chandigarh, nine minutes by cable car from Timber Trail.",
    image: "assets/img/contact-us-banner.jpg",
    main: contact,
  },
  {
    file: "contact-us.html",
    page: "contact",
    title: "Contact & Directions — Moksha Himalaya Spa Resort, Parwanoo",
    desc: "Reservations, sales and directions to Moksha Himalaya Spa Resort, Parwanoo. Forty minutes from Chandigarh, nine minutes by cable car from Timber Trail.",
    image: "assets/img/contact-us-banner.jpg",
    main: contact,
  },
  {
    file: "careers.html",
    page: "careers",
    title: "Careers & Hospitality Opportunities — Moksha Himalaya Spa Resort",
    desc: "Join our hospitality family at 5,000 ft in the Shivaliks. Explore careers across front office, culinary, spa, wellness, and resort operations with Asia Resorts Ltd.",
    image: "assets/img/exp-img.jpg",
    main: careersPage,
  },
  {
    file: "privacy-policy.html",
    page: "privacy",
    title: "Privacy Policy — Moksha Himalaya Spa Resort | Asia Resorts Limited",
    desc: "Official Privacy Policy of Moksha Himalaya Spa Resort and Asia Resorts Limited. Learn how guest data, reservation records, and digital interactions are protected.",
    image: "assets/img/main-banner.jpg",
    main: privacyPage,
  },
  {
    file: "terms-condition.html",
    page: "terms",
    title: "Terms & Conditions & Policies — Moksha Himalaya Spa Resort",
    desc: "Reservation terms, 100% advance deposit policies, cancellation terms, cable car schedule (09:30–17:30), Wi-Fi, and guest guidelines for Moksha Himalaya.",
    image: "assets/img/main-banner.jpg",
    main: termsPage,
  },
  {
    file: "terms-conditions.html",
    page: "terms",
    title: "Terms & Conditions & Policies — Moksha Himalaya Spa Resort",
    desc: "Reservation terms, 100% advance deposit policies, cancellation terms, cable car schedule (09:30–17:30), Wi-Fi, and guest guidelines for Moksha Himalaya.",
    image: "assets/img/main-banner.jpg",
    main: termsPage,
  },
];

console.log("Building Moksha Himalaya Core Pages:");
for (const p of pages) {
  const html = layout(p);
  writePage(p.file, html);
}

// Build The Journal Hub (blog.html) and all individual article pages (blog/*.html)
buildAllBlogs();

console.log("Done.");
