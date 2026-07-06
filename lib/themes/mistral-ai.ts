import type { BrandTheme } from "./types";

// Mistral AI — frontier AI platform. Signature: atmospheric sunset gradient
// (orange→yellow→cream) anchored by a horizontal "sunset stripe" closing band on
// every page; PP Editorial Old (near-serif editorial) display vs Inter body;
// warm cream (#fff8e0) surfaces; sober 8px button radius — not pill, not sharp.
// Source: ai-and-llm-platforms/mistral.ai.md

const mistralAi: BrandTheme = {
  schemaVersion: 1,
  slug: "mistral-ai",
  name: "Mistral AI",
  description: "Frontier AI — warm cream canvas, saturated orange CTA, PP Editorial Old display, sunset gradient signature.",

  polarity: "light",

  colors: {
    canvas:    "oklch(1 0 0)",           // #ffffff — white page base
    surface:   "oklch(0.98 0.025 90)",   // #fff8e0 — cream; alternate bands, footer, form panels
    raised:    "oklch(1 0 0)",           // #ffffff — cards (border-elevated, not shadow-raised)
    ink:       "oklch(0.22 0 0)",        // #1f1f1f — near-black primary text
    muted:     "oklch(0.71 0 0)",        // #a8a8a8 — secondary text / labels
    hairline:  "oklch(0.91 0 0)",        // #e5e5e5 — 1px dividers / card borders
    primary:   "oklch(0.62 0.24 41)",    // #fa520f — Mistral orange, primary CTA only
    onPrimary: "oklch(1 0 0)",           // #ffffff — white text on orange
    accent:    "oklch(0.62 0.24 41)",    // #fa520f — links, active states, eyebrow tags
    // Hero split: text panel reads on cream; ink text on warm ground matches brand hero
    heroCanvas: "oklch(0.98 0.025 90)",  // #fff8e0 cream hero band
    heroInk:    "oklch(0.22 0 0)",       // #1f1f1f
    heroMuted:  "oklch(0.32 0 0)",       // #3d3d3d — ink-tint for hero subtitle
  },

  fonts: {
    display: {
      // PP Editorial Old: near-serif, classical, editorial. No open equivalent named in
      // DESIGN.md; Playfair Display is the closest Google analog (weight 400 near-serif).
      stack: '"PP Editorial Old", "Playfair Display", "Times New Roman", Georgia, serif',
      source: { kind: "proprietary", substituteGoogle: "Playfair Display", weights: [400] },
      weight: 400,
      tracking: "-0.02em",
    },
    body: {
      stack: '"Inter", ui-sans-serif, system-ui, -apple-system, sans-serif',
      source: { kind: "google", family: "Inter", weights: [400, 500, 600] },
      weight: 400,
    },
    mono: {
      // JetBrains Mono: code blocks, IDE mockups (Le Studio, agent demos)
      stack: '"JetBrains Mono", "SF Mono", Menlo, Consolas, monospace',
      source: { kind: "google", family: "JetBrains Mono", weights: [400] },
      weight: 400,
    },
  },

  type: {
    navUppercase: false,
    navTracking: "0",
    buttonUppercase: false,
    displayUppercase: false,
    tabularNumbers: false,
  },

  radius: {
    button: "8px",     // rounded.md — sober, editorial, NOT pill
    card:   "12px",    // rounded.lg — dominant card radius
    input:  "8px",     // rounded.md — matches button geometry
    chip:   "9999px",  // rounded.full — reserved for badges and pill tabs only
  },

  density: "spacious", // 120px hero padding, 96px section-lg rhythm

  buttons: {
    primary: {
      bg:    "oklch(0.62 0.24 41)",  // #fa520f Mistral orange
      color: "oklch(1 0 0)",         // white
    },
    secondary: {
      bg:     "transparent",
      color:  "oklch(0.22 0 0)",     // #1f1f1f ink
      border: "oklch(0.80 0 0)",     // #c7c7c7 hairline-strong
    },
  },

  elevation: "border", // predominantly flat; cards use hairline border, not shadow

  layout: {
    hero:    "split",      // text left, atmospheric photography right
    cta:     "band",       // full-width cream or sunset-stripe band
    preview: "dashboard",  // Le Studio / product showcase card grid
  },

  signature: {
    kind:     "gradient-mesh",
    accent:   "oklch(0.62 0.24 41)",   // #fa520f — Mistral orange (warm end)
    accent2:  "oklch(0.90 0.19 97)",   // #ffd900 — yellow-saturated (bright end)
    intensity: "medium",
    note: "Horizontal sunset stripe band (orange→sunshine→yellow→cream) at every page foot — the brand's single persistent signature across all pages.",
  },
};

export default mistralAi;
