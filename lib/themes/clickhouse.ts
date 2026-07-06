import type { BrandTheme } from "./types";

// ClickHouse — analytics database. Signature: near-pure black canvas, electric
// yellow (#faff69) as the singular brand voltage, Inter at bold weight, JetBrains
// Mono for SQL code windows. Yellow on black is the brand contract; no shadow system,
// depth from canvas → raised contrast alone. Source: backend-database-and-devops/clickhouse.md.
const clickhouse: BrandTheme = {
  schemaVersion: 1,
  slug: "clickhouse",
  name: "ClickHouse",
  description: "Analytics database — near-black canvas, electric yellow CTA, Inter 700, monospace code windows.",
  polarity: "dark",
  colors: {
    canvas:    "oklch(0.06 0 0)",        // #0a0a0a near-pure black page floor
    surface:   "oklch(0.10 0 0)",        // #121212 section-band tint
    raised:    "oklch(0.14 0 0)",        // #1a1a1a feature cards, code windows, pricing tiers
    ink:       "oklch(1 0 0)",           // #ffffff white — all headlines + primary text
    muted:     "oklch(0.58 0 0)",        // #888888 footer links, captions, breadcrumbs
    hairline:  "oklch(0.20 0 0)",        // #2a2a2a 1px card borders
    primary:   "oklch(0.97 0.20 110)",   // #faff69 electric yellow — CTAs, stat callouts, yellow bands
    onPrimary: "oklch(0.06 0 0)",        // #0a0a0a black on yellow — high-contrast brand action signal
    accent:    "oklch(0.97 0.20 110)",   // #faff69 links, stat numbers, emphasis on dark surfaces
  },

  fonts: {
    display: {
      stack: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      source: { kind: "google", family: "Inter", weights: [400, 600, 700] },
      weight: 700,
      tracking: "-0.03em", // -1 to -2.5px at display sizes per DESIGN.md; precise, engineered feel
    },
    body: {
      stack: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      source: { kind: "google", family: "Inter", weights: [400, 600] },
      weight: 400,
    },
    mono: {
      // JetBrains Mono is the documented code font for SQL blocks and product mockups.
      stack: '"JetBrains Mono", ui-monospace, "Cascadia Code", "Fira Code", monospace',
      source: { kind: "google", family: "JetBrains Mono", weights: [400] },
      weight: 400,
    },
  },

  type: {
    navUppercase: false,
    buttonUppercase: false,
    tabularNumbers: true, // stat callouts: "779+", "47k+", "2.8k+" — always tabular
  },

  radius: {
    button: "8px",     // rounded.md per DESIGN.md — not pill; engineering-grade
    card:   "12px",    // rounded.lg for feature cards, code windows, pricing tiers
    input:  "8px",     // rounded.md for text inputs
    chip:   "9999px",  // pill only for badge-pill and badge-yellow tags
  },

  density: "standard", // 96px section rhythm — editorial but engineering-grade, not airy

  buttons: {
    primary: {
      bg:    "oklch(0.97 0.20 110)", // electric yellow fill
      color: "oklch(0.06 0 0)",      // black text — the yellow + black combo is the brand signal
    },
    secondary: {
      bg:    "oklch(0.14 0 0)",      // surface-card dark fill — no border, just dark surface
      color: "oklch(1 0 0)",         // white text on dark button
    },
  },

  elevation: "border", // 1px hairline borders only; zero drop shadows — depth is surface contrast

  layout: {
    hero:    "split",     // 7/5 grid: h1 + buttons left, SQL code-window right
    cta:     "band",      // full-bleed yellow cta-band-yellow pre-footer
    preview: "terminal",  // SQL code block inside dark code-window-card is the hero artifact
  },

  signature: {
    kind:      "grid",
    accent:    "oklch(0.97 0.20 110)", // yellow grid lines on near-black canvas
    intensity: "subtle",
    note:      "Faint data-grid on near-black canvas; electric yellow does all brand voltage at CTAs and stat callouts.",
  },
};

export default clickhouse;
