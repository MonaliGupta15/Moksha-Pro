import fs from "node:fs";
import path from "node:path";

function decodeEntities(str) {
  if (!str) return "";
  return str
    .replace(/&#8217;/g, "'")
    .replace(/&#8216;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "–")
    .replace(/&#8212;/g, "—")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8230;/g, "…")
    .trim();
}

function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>?/gm, "").replace(/\s+/g, " ").trim();
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

function cleanCategory(cats, slug, title) {
  const combined = (cats.join(" ") + " " + slug + " " + title).toLowerCase();
  if (combined.includes("spa") || combined.includes("wellness") || combined.includes("healing") || combined.includes("naturopathy")) {
    return "Wellness & Spa";
  }
  if (combined.includes("wedding")) {
    return "Weddings & Celebrations";
  }
  if (combined.includes("holi") || combined.includes("valentine") || combined.includes("diwali") || combined.includes("new year")) {
    return "Seasonal Escapes";
  }
  if (combined.includes("resort") || combined.includes("hotel") || combined.includes("booking") || combined.includes("stay") || combined.includes("solan")) {
    return "Moksha & Kasauli Stays";
  }
  return "Travel Guides & Escapes";
}

async function run() {
  console.log("Fetching categories & posts from mokshaspa.com API...");
  const [catsRes, p1Res, p2Res] = await Promise.all([
    fetch("https://www.mokshaspa.com/blog/wp-json/wp/v2/categories?per_page=100", { headers: { "User-Agent": "Mozilla/5.0" } }).then(r => r.json()),
    fetch("https://www.mokshaspa.com/blog/wp-json/wp/v2/posts?per_page=50&page=1&_embed=1", { headers: { "User-Agent": "Mozilla/5.0" } }).then(r => r.json()),
    fetch("https://www.mokshaspa.com/blog/wp-json/wp/v2/posts?per_page=50&page=2&_embed=1", { headers: { "User-Agent": "Mozilla/5.0" } }).then(r => r.json()),
  ]);

  const catMap = {};
  if (Array.isArray(catsRes)) {
    catsRes.forEach(c => { catMap[c.id] = c.name; });
  }

  const rawPosts = [...(Array.isArray(p1Res) ? p1Res : []), ...(Array.isArray(p2Res) ? p2Res : [])];
  console.log(`Fetched ${rawPosts.length} posts.`);

  const processed = rawPosts.map((p) => {
    const title = decodeEntities(p.title?.rendered || "Untitled Post");
    const rawExcerpt = decodeEntities(stripHtml(p.excerpt?.rendered || ""));
    const excerpt = rawExcerpt.length > 180 ? rawExcerpt.slice(0, 180).trim() + "…" : rawExcerpt;
    
    // Featured media
    let img = "assets/img/main-banner.jpg";
    if (p._embedded && p._embedded["wp:featuredmedia"] && p._embedded["wp:featuredmedia"][0]?.source_url) {
      img = p._embedded["wp:featuredmedia"][0].source_url;
    }

    // Categories
    const rawCats = (p.categories || []).map(cid => catMap[cid] || "General");
    const category = cleanCategory(rawCats, p.slug, title);

    // Clean content
    let content = p.content?.rendered || "";
    // Remove inline contact form shortcodes or scripts if any
    content = content.replace(/\[contact-form-7[^\]]*\]/gi, "");
    content = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
    // Clean up empty paragraphs
    content = content.replace(/<p>\s*&nbsp;\s*<\/p>/gi, "");
    // Add lazy loading to images inside content
    content = content.replace(/<img\s+/gi, '<img loading="lazy" ');

    // Calculate read time
    const wordCount = stripHtml(content).split(/\s+/).length;
    const readTime = `${Math.max(3, Math.ceil(wordCount / 220))} min read`;

    return {
      id: p.id,
      slug: p.slug,
      title,
      date: formatDate(p.date),
      rawDate: p.date,
      category,
      rawCategories: rawCats,
      excerpt,
      img,
      readTime,
      wordCount,
      content,
      originalUrl: p.link || `https://www.mokshaspa.com/blog/${p.slug}/`,
    };
  });

  const outPath = path.join(process.cwd(), "data", "blogs.json");
  fs.writeFileSync(outPath, JSON.stringify(processed, null, 2), "utf-8");
  console.log(`Successfully saved ${processed.length} articles to data/blogs.json (${(fs.statSync(outPath).size / 1024).toFixed(1)} kB)`);
}

run().catch(err => {
  console.error("Error fetching blogs:", err);
  process.exit(1);
});
