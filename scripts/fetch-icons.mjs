// Pull a small brand symbol (favicon) for each brand and self-host it under
// public/icons/<slug>.png. Writes lib/icons.json listing slugs that resolved,
// so cards can render an <img> for those and a monogram fallback for the rest.
// Run: node scripts/fetch-icons.mjs   (needs network)
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const brands = JSON.parse(readFileSync(path.join(root, "lib/brands.json"), "utf8")).brands;
const outDir = path.join(root, "public/icons");
mkdirSync(outDir, { recursive: true });

function hostOf(url) {
  try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return null; }
}

// Google s2 returns a generic globe for unknown domains; these bytes recur, so
// we can flag likely-default icons by size. Real brand favicons are larger.
async function fetchIcon(host) {
  const sources = [
    `https://www.google.com/s2/favicons?domain=${host}&sz=128`,
    `https://icons.duckduckgo.com/ip3/${host}.ico`,
  ];
  for (const url of sources) {
    try {
      const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
      if (!res.ok) continue;
      const buf = Buffer.from(await res.arrayBuffer());
      if (buf.length < 120) continue; // too small to be a real icon
      const ext = url.includes("duckduckgo") ? "ico" : "png";
      return { buf, ext };
    } catch { /* try next */ }
  }
  return null;
}

const have = [];
const missed = [];
for (const b of brands) {
  const host = hostOf(b.site);
  if (!host) { missed.push(b.slug); continue; }
  const icon = await fetchIcon(host);
  if (!icon) { missed.push(b.slug); continue; }
  const file = `${b.slug}.${icon.ext}`;
  writeFileSync(path.join(outDir, file), icon.buf);
  have.push({ slug: b.slug, file });
}

writeFileSync(
  path.join(root, "lib/icons.json"),
  JSON.stringify(Object.fromEntries(have.map((h) => [h.slug, h.file])), null, 2) + "\n",
);
console.log(`icons: ${have.length}/${brands.length} resolved; missed: ${missed.join(", ") || "none"}`);
