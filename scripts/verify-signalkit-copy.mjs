#!/usr/bin/env node
// Consistency sweep: prove every built /preview page carries the FROZEN SignalKit
// copy and the same copy-hash. Run after `npm run build` (output: export -> out/).
// Usage: node scripts/verify-signalkit-copy.mjs [slug1 slug2 ...]
//   no args -> every built preview page;  slugs -> only those (a batch)
// Exit 1 on drift. Reads lib/signalkit.json — the SAME source lib/signalkit.ts uses —
// and the SAME flatten/hash implementation (lib/signalkit-flatten.mjs). Occurrence
// counting: each string must appear at least as many times as it appears in the
// flatten list, so duplicate CTA strings cannot mask a missing section (lane3a).
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { flattenSignalkit, fnv1a } from "../lib/signalkit-flatten.mjs";

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, "..");
const outDir = join(root, "out", "preview");
const sk = JSON.parse(readFileSync(join(root, "lib", "signalkit.json"), "utf8"));

const strings = flattenSignalkit(sk);
const hash = fnv1a(strings.join(""));

const decode = (s) =>
  s
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#(?:39|x27);/g, "'")
    .replace(/&copy;|&#169;/g, "©")
    .replace(/&nbsp;/g, " ");

function pageHtml(slug) {
  const a = join(outDir, `${slug}.html`);
  const b = join(outDir, slug, "index.html");
  if (existsSync(a)) return readFileSync(a, "utf8");
  if (existsSync(b)) return readFileSync(b, "utf8");
  return null;
}

let slugs = process.argv.slice(2);
if (slugs.length === 0) {
  if (!existsSync(outDir)) {
    console.error("verify-signalkit-copy: no out/preview dir. Build first.");
    process.exit(2);
  }
  slugs = [
    ...new Set(
      readdirSync(outDir, { withFileTypes: true }).flatMap((d) =>
        d.isDirectory() ? [d.name] : d.name.endsWith(".html") ? [d.name.slice(0, -5)] : [],
      ),
    ),
  ].sort();
}

let failed = 0;
for (const slug of slugs) {
  const rawHtml = pageHtml(slug);
  if (rawHtml == null) {
    console.error(`FAIL ${slug}: no built HTML`);
    failed++;
    continue;
  }
  // Drop script blocks first (the Next RSC payload repeats every copy string;
  // counting it would let a string missing from the visible DOM still pass).
  const visibleHtml = rawHtml.replace(/<script[\s\S]*?<\/script>/gi, " ");
  const text = decode(visibleHtml.replace(/<[^>]+>/g, " ")).replace(/\s+/g, " ");
  // Expected occurrence count per normalized string (duplicates in the fixture
  // must each render), then non-overlapping count in the page text.
  const expected = new Map();
  for (const s of strings) {
    const n = decode(s).replace(/\s+/g, " ").trim();
    expected.set(n, (expected.get(n) ?? 0) + 1);
  }
  const countIn = (hay, needle) => {
    let c = 0;
    let i = 0;
    while ((i = hay.indexOf(needle, i)) !== -1) {
      c++;
      i += needle.length;
    }
    return c;
  };
  const missing = [...expected.entries()]
    .filter(([s, n]) => countIn(text, s) < n)
    .map(([s, n]) => `${s} (need ${n}, found ${countIn(text, s)})`);
  const hashOk = rawHtml.includes(`data-signalkit-copy-hash="${hash}"`);
  if (missing.length || !hashOk) {
    failed++;
    console.error(
      `FAIL ${slug}: ${missing.length} missing string(s)${hashOk ? "" : ", copy-hash mismatch"}`,
    );
    for (const m of missing.slice(0, 5)) console.error(`   - ${JSON.stringify(m)}`);
    if (missing.length > 5) console.error(`   ...and ${missing.length - 5} more`);
  } else {
    console.log(`ok   ${slug} (${strings.length} strings, hash ${hash})`);
  }
}

if (failed) {
  console.error(`\nverify-signalkit-copy: ${failed}/${slugs.length} page(s) FAILED.`);
  process.exit(1);
}
console.log(`\nverify-signalkit-copy: all ${slugs.length} page(s) carry identical frozen copy.`);
