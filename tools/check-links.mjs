/* =========================================================
   MOKSHA — static link & asset checker
   Usage: node tools/check-links.mjs
   ========================================================= */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const pages = fs.readdirSync(ROOT).filter((f) => f.endsWith(".html")).map(f => path.join(ROOT, f));
const blogDir = path.join(ROOT, "blog");
if (fs.existsSync(blogDir)) {
  const blogFiles = fs.readdirSync(blogDir).filter((f) => f.endsWith(".html")).map(f => path.join(blogDir, f));
  pages.push(...blogFiles);
}
const missing = new Map();

function check(from, ref) {
  if (!ref) return;
  if (/^(https?:|mailto:|tel:|data:|javascript:)/i.test(ref)) return;
  const clean = ref.split("#")[0].split("?")[0];
  if (!clean) return;
  const target = path.resolve(path.dirname(from), clean);
  if (!fs.existsSync(target)) {
    if (!missing.has(ref)) missing.set(ref, new Set());
    missing.get(ref).add(path.relative(ROOT, from));
  }
}

for (const page of pages) {
  const html = fs.readFileSync(page, "utf8");
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) check(page, m[1]);
}

// Check url(...) references in the stylesheet
const cssPath = path.join(ROOT, "assets/css/style.css");
if (fs.existsSync(cssPath)) {
  const css = fs.readFileSync(cssPath, "utf8").replace(/url\((["'])data:[\s\S]*?\1\)/g, "");
  for (const m of css.matchAll(/url\((?:"|')?([^"')]+)(?:"|')?\)/g)) {
    const ref = m[1];
    if (/^(https?:|data:)/i.test(ref) || ref.includes("(")) continue;
    const target = path.resolve(path.dirname(cssPath), ref.split("#")[0].split("?")[0]);
    if (!fs.existsSync(target) && !missing.has(ref)) missing.set(ref, new Set(["assets/css/style.css"]));
  }
}

if (!missing.size) {
  console.log(`OK — ${pages.length} pages, no broken local links or assets.`);
} else {
  console.error(`Found ${missing.size} missing reference(s):`);
  for (const [ref, from] of missing) console.error(`  ${ref}  <-  ${[...from].join(", ")}`);
  process.exitCode = 1;
}
