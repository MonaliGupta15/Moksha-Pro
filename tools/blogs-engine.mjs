import fs from "node:fs";
import path from "node:path";
import { icons, layout, pageHero, ctaBand, writePage } from "./layout.mjs";

const blogsPath = path.join(process.cwd(), "data", "blogs.json");
const allPosts = JSON.parse(fs.readFileSync(blogsPath, "utf-8"));

// Categories list
const categories = [
  "All",
  "Wellness & Spa",
  "Moksha & Kasauli Stays",
  "Travel Guides & Escapes",
  "Seasonal Escapes",
  "Weddings & Celebrations",
];

// Helper to escape HTML attributes
function esc(str) {
  if (!str) return "";
  return str.replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

/* =========================================================
   1. The Journal Hub (blog.html)
   ========================================================= */
export function generateBlogHub() {
  const featured = allPosts[0];
  const gridPosts = allPosts;

  const categoryCounts = { All: allPosts.length };
  allPosts.forEach((p) => {
    categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
  });

  const main = `
${pageHero({
  image: "nature-walk.jpg",
  alt: "Pine forest walking trails at Moksha Himalaya Spa Resort",
  crumb: "Journal",
  lines: ["The Journal of", 'the <em class="italic gold">Himalayas.</em>'],
  intro: "Stories, wellness perspectives, Ayurvedic philosophy, and travel guides from 5,000 feet above Parwanoo. Written for those drawn to mountain stillness.",
  meta: [
    ["The Journal", "Moksha Chronicles"],
    ["Stories", `${allPosts.length} Articles`],
    ["Sanctuary", "5,000 ft Parwanoo"],
  ],
})}

<!-- Featured Article -->
<section class="section section--sand blog-featured-section">
  <div class="container">
    <div class="blog-featured-card" data-reveal>
      <div class="blog-featured-media media media--hover">
        <img src="${featured.img}" alt="${esc(featured.title)}" loading="lazy">
      </div>
      <div class="blog-featured-body">
        <div class="blog-card__badges">
          <span class="blog-badge">${featured.category}</span>
          <span class="blog-read-time">${featured.readTime}</span>
        </div>
        <h2 class="blog-featured-title">
          <a href="blog/${featured.slug}.html">${featured.title}</a>
        </h2>
        <p class="blog-featured-excerpt">${featured.excerpt}</p>
        <div class="blog-featured-foot">
          <span class="blog-date">${featured.date}</span>
          <a class="btn btn--solid" href="blog/${featured.slug}.html" data-magnetic>
            <span>Read Story</span> ${icons.arrow}
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Journal Catalog with Live Category Filter & Search -->
<section class="section" id="articles">
  <div class="container">
    <div class="blog-hub-header" data-reveal>
      <div>
        <p class="eyebrow">Explore The Archive</p>
        <h2 class="h2" data-split style="margin-top:16px">Curated mountain<br>dispatches &amp; <em class="italic gold">guides.</em></h2>
      </div>
      
      <!-- Search bar -->
      <div class="blog-search-wrap">
        <div class="blog-search-box">
          <svg class="blog-search-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.3" aria-hidden="true"><circle cx="7" cy="7" r="4.5"/><path d="M10.5 10.5L14 14"/></svg>
          <input type="search" id="blogSearchInput" placeholder="Search stories, Ayurveda, weddings..." aria-label="Search articles">
        </div>
      </div>
    </div>

    <!-- Category Filter Tabs -->
    <div class="blog-filters" role="tablist" aria-label="Article categories" data-reveal>
      ${categories
        .map(
          (c, i) => `
        <button class="blog-filter-btn${i === 0 ? " is-active" : ""}" type="button" data-filter="${c}">
          <span>${c}</span>
          <small class="blog-filter-count">${categoryCounts[c] || 0}</small>
        </button>`
        )
        .join("")}
    </div>

    <!-- Articles Grid -->
    <div class="cards-3 blog-grid" id="blogGrid">
      ${gridPosts
        .map(
          (art) => `
      <article class="feature-card blog-card" data-category="${art.category}" data-title="${esc(art.title.toLowerCase())}">
        <div class="media media--hover" style="height:clamp(220px,24vw,300px)">
          <a href="blog/${art.slug}.html" aria-label="Read ${esc(art.title)}">
            <img src="${art.img}" alt="${esc(art.title)}" loading="lazy" onerror="this.src='assets/img/main-banner.jpg'">
          </a>
        </div>
        <div class="feature-card__meta">
          <span class="blog-card__cat">${art.category}</span>
          <span class="blog-card__time">${art.readTime}</span>
        </div>
        <h3 class="blog-card__title">
          <a href="blog/${art.slug}.html">${art.title}</a>
        </h3>
        <p class="blog-card__excerpt">${art.excerpt}</p>
        <div class="blog-card__foot">
          <span class="blog-card__date">${art.date}</span>
          <a class="link-arrow" href="blog/${art.slug}.html">
            <span>Read Story</span>${icons.arrowRight}
          </a>
        </div>
      </article>`
        )
        .join("\n      ")}
    </div>

    <div class="blog-empty-state" id="blogEmpty" style="display:none; text-align:center; padding: 60px 20px;">
      <p class="eyebrow" style="color:var(--gold)">No matching articles</p>
      <h3 style="font-size: 1.8rem; margin: 12px 0 18px;">Try a different keyword or category</h3>
      <button class="btn btn--dark" type="button" id="blogResetBtn"><span>View all ${allPosts.length} stories</span></button>
    </div>
  </div>
</section>

${ctaBand({
  image: "main-banner.jpg",
  title: "Write your own<br>mountain <em class=\"italic gold\">story.</em>",
  text: "Escape to 5,000 ft in Parwanoo. Nine minutes by cable car from Timber Trail base.",
  primary: ["Reserve a suite", "#", "data-booking-open"],
  secondary: ["Speak to reservations", "contact.html"],
})}

<script>
  // Client-side instant filter and search for 62 articles
  document.addEventListener('DOMContentLoaded', () => {
    const filterBtns = document.querySelectorAll('.blog-filter-btn');
    const cards = document.querySelectorAll('.blog-card');
    const searchInput = document.getElementById('blogSearchInput');
    const emptyState = document.getElementById('blogEmpty');
    const resetBtn = document.getElementById('blogResetBtn');
    
    let activeCat = 'All';
    let searchQuery = '';

    function filterCards() {
      let visibleCount = 0;
      cards.forEach(card => {
        const cat = card.dataset.category || '';
        const title = card.dataset.title || '';
        const matchCat = (activeCat === 'All' || cat === activeCat);
        const matchQuery = (!searchQuery || title.includes(searchQuery));

        if (matchCat && matchQuery) {
          card.style.display = '';
          visibleCount++;
        } else {
          card.style.display = 'none';
        }
      });

      if (emptyState) {
        emptyState.style.display = (visibleCount === 0) ? 'block' : 'none';
      }
    }

    filterBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('is-active'));
        btn.classList.add('is-active');
        activeCat = btn.dataset.filter;
        filterCards();
      });
    });

    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim().toLowerCase();
        filterCards();
      });
    }

    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        searchQuery = '';
        activeCat = 'All';
        filterBtns.forEach(b => b.classList.toggle('is-active', b.dataset.filter === 'All'));
        filterCards();
      });
    }
  });
</script>
`;

  return layout({
    page: "blog",
    title: "The Journal | Stories, Wellness & Travel Guides | Moksha Himalaya Spa Resort",
    desc: "Stories, Ayurvedic wellness perspectives, romantic retreats and travel itineraries from 5,000 feet above Parwanoo in the Shivalik Himalayas.",
    image: "assets/img/nature-walk.jpg",
    main,
  });
}

/* =========================================================
   2. Individual Blog Article Pages (blog/<slug>.html)
   ========================================================= */
export function generateArticlePage(post, index) {
  // Adjacent articles
  const prevPost = index > 0 ? allPosts[index - 1] : allPosts[allPosts.length - 1];
  const nextPost = index < allPosts.length - 1 ? allPosts[index + 1] : allPosts[0];

  // 3 Related posts in same category or adjacent
  const related = allPosts
    .filter((p) => p.slug !== post.slug)
    .filter((p) => p.category === post.category)
    .slice(0, 3);
  if (related.length < 3) {
    const extra = allPosts.filter((p) => p.slug !== post.slug && !related.includes(p)).slice(0, 3 - related.length);
    related.push(...extra);
  }

  const main = `
<article class="article-single">
  <!-- Article Header -->
  <header class="article-single__head container">
    <nav class="breadcrumb" aria-label="Breadcrumb">
      <a href="../index.html">Home</a><i></i>
      <a href="../blog.html">Journal</a><i></i>
      <span class="breadcrumb__cat">${post.category}</span>
    </nav>
    <div class="article-single__badges">
      <span class="blog-badge">${post.category}</span>
      <span class="blog-read-time">${post.readTime}</span>
    </div>
    <h1 class="article-single__title">${post.title}</h1>
    <div class="article-single__meta">
      <span>By <strong>Moksha Editorial</strong></span>
      <span class="sep">·</span>
      <time datetime="${post.rawDate}">${post.date}</time>
      <span class="sep">·</span>
      <span>${post.wordCount} words</span>
    </div>
  </header>

  <!-- Featured Hero Media -->
  <div class="container article-single__hero-wrap">
    <div class="article-single__media media">
      <img src="${post.img}" alt="${esc(post.title)}" loading="eager" onerror="this.src='../assets/img/main-banner.jpg'">
    </div>
  </div>

  <!-- Article Body -->
  <div class="container article-single__content-wrap">
    <div class="article-single__body" data-reveal>
      <p class="article-lead">${post.excerpt}</p>
      
      <div class="article-prose">
        ${post.content}
      </div>

      <!-- Luxury CTA Box -->
      <div class="article-cta-box" data-reveal>
        <span class="eyebrow" style="color:var(--gold);margin-bottom:8px">Mountain Sanctuary</span>
        <h3>Experience Stillness at Moksha Himalaya Spa Resort</h3>
        <p>Suspended 5,000 feet above the valley floor, accessible by an iconic cable-car ascent. All-suite luxury, Ayurvedic therapies, and panoramic Shivalik views.</p>
        <div class="article-cta-box__actions">
          <a class="btn btn--solid" href="#" data-booking-open data-magnetic>
            <span>Reserve Your Dates</span> ${icons.arrow}
          </a>
          <a class="btn btn--light" href="../contact.html">
            <span>Speak to Reservations</span>
          </a>
        </div>
      </div>
    </div>
  </div>

  <!-- Article Navigation (Prev / Next) -->
  <nav class="article-single__nav container" aria-label="Adjacent Articles">
    <a class="article-nav-item article-nav-item--prev" href="${prevPost.slug}.html">
      <span class="article-nav-label">${icons.arrowLeft} Previous Story</span>
      <strong>${prevPost.title}</strong>
    </a>
    <a class="article-nav-item article-nav-item--next" href="${nextPost.slug}.html">
      <span class="article-nav-label">Next Story ${icons.arrowRight}</span>
      <strong>${nextPost.title}</strong>
    </a>
  </nav>

  <!-- Related Stories -->
  <section class="section section--sand article-related">
    <div class="container">
      <div class="section-head">
        <div>
          <p class="eyebrow">Related Perspectives</p>
          <h2 class="h2" data-split style="margin-top:14px">More from the <em class="italic gold">Himalayas.</em></h2>
        </div>
        <div class="section-head__aside">
          <a class="link-arrow" href="../blog.html"><span>Explore all 62 stories</span>${icons.arrowRight}</a>
        </div>
      </div>

      <div class="cards-3">
        ${related
          .map(
            (rel) => `
        <article class="feature-card blog-card">
          <div class="media media--hover" style="height:clamp(200px,22vw,280px)">
            <a href="${rel.slug}.html">
              <img src="${rel.img}" alt="${esc(rel.title)}" loading="lazy" onerror="this.src='../assets/img/main-banner.jpg'">
            </a>
          </div>
          <div class="feature-card__meta">
            <span>${rel.category}</span>
            <span>${rel.readTime}</span>
          </div>
          <h3 class="blog-card__title">
            <a href="${rel.slug}.html">${rel.title}</a>
          </h3>
          <div class="blog-card__foot">
            <span class="blog-card__date">${rel.date}</span>
            <a class="link-arrow" href="${rel.slug}.html"><span>Read</span>${icons.arrowRight}</a>
          </div>
        </article>`
          )
          .join("\n        ")}
      </div>
    </div>
  </section>
</article>
`;

  return layout({
    page: "blog",
    title: `${post.title} | The Moksha Journal`,
    desc: post.excerpt,
    image: post.img,
    root: "../",
    main,
  });
}

/* =========================================================
   3. Build All Blog Pages
   ========================================================= */
export function buildAllBlogs() {
  console.log(`Building The Moksha Journal (${allPosts.length} articles):`);

  // 1. Build blog.html hub
  const hubHtml = generateBlogHub();
  writePage("blog.html", hubHtml);

  // 2. Build 62 individual blog post pages in blog/<slug>.html
  allPosts.forEach((post, index) => {
    const pageHtml = generateArticlePage(post, index);
    writePage(`blog/${post.slug}.html`, pageHtml);
  });

  console.log(`Successfully generated blog.html and ${allPosts.length} article pages in blog/`);
}
