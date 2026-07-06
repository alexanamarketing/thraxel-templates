import type { BrandTheme } from "./types";

// xAI — Elon Musk's frontier-AI lab. Signature: near-black canvas (#0a0a0a) edge-
// to-edge, white-outline pill buttons as the entire interactive vocabulary, Universal
// Sans weight 400 with aggressive negative tracking, GeistMono uppercase eyebrows.
// No shadows, no decorative backdrop — hairlines and type carry everything.
// Source: ai-and-llm-platforms/x.ai.md.
const xAi: BrandTheme = {
  schemaVersion: 1,
  slug: "x-ai",
  name: "xAI",
  description: "Frontier-AI lab — near-black canvas, white pill outlines, weight-400 precision type only.",
  polarity: "dark",

  colors: {
    canvas:    "oklch(0.09 0 0)",           // #0a0a0a — the brand's only page surface
    surface:   "oklch(0.17 0.005 250)",     // #1a1c20 canvas-soft — hover states, tooltips
    raised:    "oklch(0.15 0 0)",           // #191919 canvas-card — feature card fill
    ink:       "oklch(1 0 0)",              // #ffffff — all display text
    muted:     "oklch(0.55 0.007 250)",     // #7d8187 body-mid — captions, fine print
    hairline:  "oklch(0.20 0.005 250)",     // #212327 — 1 px dividers; no shadows used
    primary:   "oklch(1 0 0)",              // #ffffff — white-fill pill (Sign Up CTA)
    onPrimary: "oklch(0.09 0 0)",           // #0a0a0a — near-black on white
    accent:    "oklch(0.73 0.20 48)",       // #ff7a17 sunset-orange — illustrative accent, used sparingly
  },

  fonts: {
    display: {
      stack: '"Universal Sans", "Inter", system-ui, -apple-system, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400] },
      weight: 400,
      tracking: "-0.025em", // -2.4 px at 96 px; precision IS the voice
    },
    body: {
      stack: '"Universal Sans", "Inter", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400] },
      weight: 400,
    },
    mono: {
      // GeistMono for section eyebrows, metric counters — positive tracking, UPPERCASE
      stack: '"Geist Mono", ui-monospace, "SFMono-Regular", Menlo, Monaco, monospace',
      source: { kind: "google", family: "Geist Mono", weights: [400] },
      weight: 400,
      tracking: "0.1em", // +1.4 px at 14 px — reads as a code comment
    },
  },

  type: {
    navUppercase: false,
    buttonUppercase: false,
    displayUppercase: false,
    tabularNumbers: false,
    // mono eyebrows are text-transform:uppercase in CSS; not a global flag
  },

  radius: {
    button: "9999px", // pill — the brand's universal interactive shape
    card:   "8px",    // rounded.sm — tight rectangle on feature cards
    input:  "8px",
    chip:   "9999px",
  },

  density: "spacious", // 64 px section padding (spacing.4xl); sparse layout

  buttons: {
    primary: {
      // Rare white-fill pill — single Sign Up CTA
      bg:    "oklch(1 0 0)",
      color: "oklch(0.09 0 0)",
    },
    secondary: {
      // Canonical white-outline pill — every non-primary CTA
      bg:     "transparent",
      color:  "oklch(1 0 0)",
      border: "oklch(0.20 0.005 250)", // translucent hairline at runtime
    },
  },

  elevation: "border", // no drop-shadows; 1 px hairline borders carry all depth

  layout: {
    hero:    "editorial", // typography-forward: massive weight-400 headline, no photo/gradient
    cta:     "band",      // full-width dark band, centered headline + pill
    preview: "card",      // product-feature cards with SVG illustrations
  },

  signature: {
    kind:      "none",
    accent:    "oklch(0.73 0.20 48)", // sunset-orange lives in illustrations, not background
    intensity: "subtle",
    note: "Stark achromatic restraint — no decorative layer; GeistMono UPPERCASE eyebrow + negative-tracked weight-400 headline + hairline divider IS the brand move.",
  },
};

export default xAi;
