import type { BrandTheme } from "./types";

// Claude (Anthropic) — warm editorial AI. Signature: tinted cream canvas, coral
// CTA, slab-serif display (Copernicus), linework illustrations in coral + dark-navy
// strokes on cream. Literary publishing feel over SaaS marketing template.
// Source: ai-and-llm-platforms/claude.md.

const claude: BrandTheme = {
  schemaVersion: 1,
  slug: "claude",
  name: "Claude",
  description: "Warm editorial AI — tinted cream canvas, coral CTA, slab-serif display paired with humanist sans body.",
  polarity: "light",

  colors: {
    canvas:    "oklch(0.977 0.008 91)",  // #faf9f5 — defining tinted cream, not pure white
    surface:   "oklch(0.958 0.014 88)",  // #f5f0e8 — surface-soft, section band alt
    raised:    "oklch(0.937 0.019 86)",  // #efe9de — surface-card, feature/content cards
    ink:       "oklch(0.11 0.004 80)",   // #141413 — warm near-black headline text
    muted:     "oklch(0.49 0.009 83)",   // #6c6a64 — sub-heads, breadcrumbs, secondary text
    hairline:  "oklch(0.90 0.013 81)",   // #e6dfd8 — 1px borders on cream surfaces
    primary:   "oklch(0.62 0.13 42)",    // #cc785c — Anthropic coral, every primary CTA
    onPrimary: "oklch(1 0 0)",           // #ffffff — white text on coral
    accent:    "oklch(0.62 0.13 42)",    // #cc785c — coral inline links / emphasis
  },

  fonts: {
    display: {
      stack: '"Copernicus", "Tiempos Headline", "Cormorant Garamond", "EB Garamond", Georgia, serif',
      source: { kind: "proprietary", substituteGoogle: "Cormorant Garamond", weights: [400, 500] },
      weight: 400,
      tracking: "-0.02em", // negative tracking is non-negotiable per brand spec
    },
    body: {
      stack: '"StyreneB", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 500] },
      weight: 400,
    },
    mono: {
      stack: '"JetBrains Mono", ui-monospace, "Cascadia Code", monospace',
      source: { kind: "google", family: "JetBrains Mono", weights: [400] },
      weight: 400,
    },
  },

  type: {
    navUppercase:    false,
    buttonUppercase: false,
    tabularNumbers:  false,
  },

  radius: {
    button: "8px",     // rounded.md — standard CTA buttons
    card:   "12px",    // rounded.lg — feature/pricing/code-window cards
    input:  "8px",     // rounded.md — text inputs
    chip:   "9999px",  // rounded.pill — badge pills, category tags
  },

  density: "spacious", // 96px section rhythm, 32px internal card padding

  buttons: {
    primary:   { bg: "oklch(0.62 0.13 42)",   color: "oklch(1 0 0)" },
    secondary: { bg: "oklch(0.977 0.008 91)", color: "oklch(0.11 0.004 80)", border: "oklch(0.90 0.013 81)" },
  },

  elevation: "border", // color-block first; depth from cream-vs-dark surfaces, not shadows

  layout: {
    hero:    "split",      // 6/6 grid — h1 + CTA left, illustration/mockup right
    cta:     "band",       // coral callout band (cta-band-coral)
    preview: "card",       // product-mockup-card-dark style showcase
  },

  signature: {
    kind:      "linework",
    accent:    "oklch(0.62 0.13 42)",  // coral strokes in hero line-art
    accent2:   "oklch(0.10 0.005 72)", // #181715 dark-navy strokes + product surface
    intensity: "subtle",
    note:      "Simple line-art in coral + dark-navy on cream canvas; cream-to-dark surface pacing is the brand's editorial rhythm.",
  },
};

export default claude;
