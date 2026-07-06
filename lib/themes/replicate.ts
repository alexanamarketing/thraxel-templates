import type { BrandTheme } from "./types";

// Replicate — developer AI-model platform with an art-zine soul. Signature:
// warm cream canvas (#f9f7f3), full-bleed hot-orange hero band, rb-freigeist-neue
// at 128px lineHeight:1.0 with tight negative tracking, basier-square for
// UI/body, JetBrains Mono for every code well. Layered radial mesh (orange →
// glow → warm-pink) in the hero. Source: ai-and-llm-platforms/replicate.md.
const replicate: BrandTheme = {
  schemaVersion: 1,
  slug: "replicate",
  name: "Replicate",
  description: "Developer AI playground — warm cream canvas, hot orange stamp, editorial display type.",
  polarity: "light",
  colors: {
    canvas:    "oklch(0.97 0.007 83)",        // #f9f7f3 warm cream
    surface:   "oklch(0.95 0.013 82)",        // #f3f0e8 bone cream (inset bands)
    raised:    "oklch(1 0 0)",                // #ffffff pure white (model cards)
    ink:       "oklch(0.18 0 0)",             // #202020 near-black primary text
    muted:     "oklch(0.44 0 0)",             // #646464 supporting / metadata
    hairline:  "oklch(0.18 0 0 / 0.12)",      // rgba(32,32,32,0.12) dividers
    primary:   "oklch(0.56 0.24 27)",         // #ea2804 Replicate orange CTA
    onPrimary: "oklch(1 0 0)",                // #ffffff
    accent:    "oklch(0.56 0.24 27)",         // #ea2804 inline links + emphasis
    // Hero band flips to the orange stamp colour.
    heroCanvas: "oklch(0.56 0.24 27)",        // #ea2804
    heroInk:    "oklch(0.99 0 0)",            // #fcfcfc on-dark
    heroMuted:  "oklch(0.99 0 0 / 0.72)",     // rgba(252,252,252,0.72) on-dark-mute
  },
  fonts: {
    display: {
      stack: '"rb-freigeist-neue", "Bricolage Grotesque", system-ui, sans-serif',
      source: {
        kind: "proprietary",
        substituteGoogle: "Bricolage Grotesque",
        weights: [600, 700],
      },
      weight: 700,
      tracking: "-0.03em", // mirrors -3px at 128px display-xxl; clamp to 1.0 lh
    },
    body: {
      stack: '"basier-square", "Inter", system-ui, sans-serif',
      source: {
        kind: "proprietary",
        substituteGoogle: "Inter",
        weights: [400, 600],
      },
      weight: 400,
    },
    mono: {
      stack: '"JetBrains Mono", "Courier New", monospace',
      source: { kind: "google", family: "JetBrains Mono", weights: [400] },
      weight: 400,
    },
  },
  type: {
    navUppercase: false,
    buttonUppercase: false,
    tabularNumbers: false,
  },
  radius: {
    button: "9999px", // rounded.full — all interactive elements
    card:   "10px",   // rounded.md — model cards, collection tiles
    input:  "9999px", // pill-shaped search and email inputs
    chip:   "9999px", // badge-tag, sub-nav pills, avatars
  },
  density: "spacious", // 96px section padding; 160px key bands (hero, closing stripe)
  buttons: {
    primary:   { bg: "oklch(0.56 0.24 27)", color: "oklch(1 0 0)" },
    secondary: { bg: "oklch(0.18 0 0)",     color: "oklch(0.99 0 0)" }, // button-dark
  },
  elevation: "border", // dominant language is colour-blocking + 1px hairline outline
  layout: {
    hero:    "editorial", // full-bleed orange band, massive aggressive display type
    cta:     "band",      // closing "Imagine what you can build" orange stripe
    preview: "terminal",  // dark code wells (surface-dark #202020) with JetBrains Mono
  },
  signature: {
    kind:     "gradient-mesh",
    accent:   "oklch(0.56 0.24 27)", // #ea2804 orange core
    accent2:  "oklch(0.67 0.18 38)", // #ff6a3d hero-glow mid-stop
    intensity: "strong",
    note: "Layered radial mesh — orange core → glow orange → warm-pink outer — in hero band only.",
  },
};

export default replicate;
