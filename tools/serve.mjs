/* Tiny static server for local preview — node tools/serve.mjs [port] */
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const port = Number(process.argv[2] || 4173);
const types = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".avif": "image/avif",
  ".webp": "image/webp",
  ".pdf": "application/pdf",
  ".mp4": "video/mp4",
  ".woff2": "font/woff2",
};

http
  .createServer((req, res) => {
    let url = decodeURIComponent((req.url || "/").split("?")[0]);
    if (url.endsWith("/")) url += "index.html";
    const file = path.join(root, url);
    if (!file.startsWith(root)) { res.writeHead(403).end("Forbidden"); return; }
    fs.stat(file, (err, stat) => {
      if (err || !stat.isFile()) { res.writeHead(404).end("Not found"); return; }
      const type = types[path.extname(file).toLowerCase()] || "application/octet-stream";
      const head = { "Content-Type": type, "Cache-Control": "no-cache" };
      if (req.headers.range && type === "video/mp4") {
        const [start, end] = req.headers.range.replace("bytes=", "").split("-");
        const from = Number(start || 0);
        const to = end ? Number(end) : stat.size - 1;
        res.writeHead(206, { ...head, "Content-Range": `bytes ${from}-${to}/${stat.size}`, "Accept-Ranges": "bytes", "Content-Length": to - from + 1 });
        fs.createReadStream(file, { start: from, end: to }).pipe(res);
        return;
      }
      res.writeHead(200, { ...head, "Content-Length": stat.size, "Accept-Ranges": "bytes" });
      fs.createReadStream(file).pipe(res);
    });
  })
  .listen(port, () => console.log(`Moksha preview: http://localhost:${port}`));
