import type { BrandTheme } from "./types";

// VoltAgent — developer AI agent engineering platform. Signature: near-black canvas,
// single electric-green accent (#00d992) reserved for CTAs/status/lightning glyph,
// hairline-bordered card grid, Inter + SF Mono pairing, no light-mode, no shadows.
// Source: ai-and-llm-platforms/voltagent.md.
const voltagent: BrandTheme = {
  schemaVersion: 1,
  slug: "voltagent",
  name: "VoltAgent",
  description: "Developer AI agent platform — near-black canvas, electric-green single accent, hairline card grid, Inter + SF Mono.",
  polarity: "dark",
  colors: {
    canvas:    "oklch(0.09 0 0)",         // #101010 — the only page surface
    surface:   "oklch(0.14 0 0)",         // #1a1a1a canvas-soft — code blocks, inputs
    raised:    "oklch(0.14 0 0)",         // cards sit at canvas-soft level; borders define depth, not fill
    ink:       "oklch(0.96 0 0)",         // #f2f2f2 — off-white default text (spares contrast strain)
    muted:     "oklch(0.77 0 0)",         // #bdbdbd — secondary body copy
    hairline:  "oklch(0.28 0.005 50)",    // #3d3a39 — 1 px card/button/divider edges
    primary:   "oklch(0.79 0.19 163)",    // #00d992 electric green — the single brand accent
    onPrimary: "oklch(0.09 0 0)",         // #101010 near-black on green (high contrast)
    accent:    "oklch(0.79 0.19 163)",    // same electric green — links, eyebrows, status indicators
  },
  fonts: {
    display: {
      stack: '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      source: { kind: "google", family: "Inter", weights: [400, 600, 700] },
      weight: 400,
      tracking: "-0.02em", // hero -0.65 px / 60 px; section heads -0.9 px / 36 px
    },
    body: {
      stack: '"Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif',
      source: { kind: "google", family: "Inter", weights: [400, 600] },
      weight: 400,
    },
    mono: {
      // SF Mono is Apple-system only; JetBrains Mono is the DESIGN.md-recommended open substitute
      stack: '"SFMono-Regular", "Menlo", "Monaco", "Consolas", "JetBrains Mono", "Liberation Mono", monospace',
      source: { kind: "proprietary", substituteGoogle: "JetBrains Mono", weights: [400, 700] },
      weight: 400,
    },
  },
  type: {
    navUppercase: false,       // nav links are sentence-case body-sm
    buttonUppercase: false,    // button labels are sentence-case
    displayUppercase: false,   // hero is calm 400-weight sentence-case Inter
    tabularNumbers: true,      // SF Mono used for metric counters and data
  },
  radius: {
    button: "6px",    // rounded.sm — tight rectangle, NOT pill
    card:   "8px",    // rounded.md — feature card chrome
    input:  "6px",    // rounded.sm — matches button
    chip:   "9999px", // rounded.pill — inline status tags ("Live", "Beta") only
  },
  density: "standard",
  buttons: {
    primary: {
      bg: "oklch(0.79 0.19 163)",  // electric green
      color: "oklch(0.09 0 0)",    // near-black text on green
    },
    secondary: {
      bg: "transparent",
      color: "oklch(0.96 0 0)",           // off-white ink
      border: "oklch(0.28 0.005 50)",     // 1 px hairline on dark
    },
  },
  elevation: "border", // hairlines define depth — no shadows, no material fills
  layout: {
    hero: "centered",    // dark band, centered 60 px headline + eyebrow above, code mockup below
    cta: "band",         // full-width green-accent band between sections
    preview: "terminal", // code-editor mockup with copy-to-clipboard affordance
  },
  signature: {
    kind: "grid",
    accent: "oklch(0.79 0.19 163)", // electric green
    intensity: "subtle",
    note: "Faint hairline grid on near-black canvas — documentation dressed as marketing; green reserved for CTAs, status pills, and the lightning glyph.",
  },
};

export default voltagent;
