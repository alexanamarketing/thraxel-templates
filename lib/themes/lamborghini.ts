import type { BrandTheme } from "./types";

// Lamborghini — nocturnal luxury automotive. Signature: absolute-black canvas, Lamborghini
// Gold (#FFC000) reserved exclusively for primary CTA, LamboType all-caps display with
// hexagonal geometric DNA, zero border-radius throughout, hexagonal linework overlay.
// Source: automotive/lamborghini.md.
const lamborghini: BrandTheme = {
  schemaVersion: 1,
  slug: "lamborghini",
  name: "Lamborghini",
  description: "Nocturnal luxury — absolute black, Giallo gold CTA, all-caps LamboType, zero radius.",
  polarity: "dark",
  colors: {
    canvas:    "oklch(0 0 0)",          // #000000 — absolute black, uncompromising
    surface:   "oklch(0.13 0 0)",       // #181818 dark iron — barely perceptible lift
    raised:    "oklch(0.16 0 0)",       // #202020 charcoal — cards/panels above canvas
    ink:       "oklch(1 0 0)",          // #FFFFFF pure white — the voice from the void
    muted:     "oklch(0.54 0 0)",       // #7D7D7D ash — timestamps, metadata, captions
    hairline:  "oklch(0.22 0 0)",       // #313131 — section dividers, subtle borders
    primary:   "oklch(0.84 0.17 84)",   // #FFC000 Lamborghini Gold — sole chromatic color
    onPrimary: "oklch(0 0 0)",          // #000000 black on gold — max contrast
    accent:    "oklch(0.84 0.17 84)",   // #FFC000 same gold — links / emphasis
  },
  fonts: {
    display: {
      stack: '"LamboType", "Open Sans", Roboto, "Helvetica Neue", Arial, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Open Sans", weights: [300, 400, 700] },
      weight: 400,
      // No negative tracking — the typeface's angular geometry reads at 0; uppercase
      // mass handles authority without condensing letter-spacing.
    },
    body: {
      stack: '"LamboType", "Open Sans", Roboto, "Helvetica Neue", Arial, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Open Sans", weights: [300, 400, 700] },
      weight: 400,
    },
  },
  type: {
    navUppercase:     true,
    navTracking:      "0.1em",
    buttonUppercase:  true,
    buttonTracking:   "0.1em",
    displayUppercase: true,  // ALL-CAPS is the default voice — headlines SHOUT from steel
  },
  radius: {
    button: "0px",    // zero radius is non-negotiable — angular like the vehicles
    card:   "0px",
    input:  "2px",    // barely perceptible — cookie/form elements only
    chip:   "2px",    // metallic badge shape, not pill
  },
  density: "cinematic",  // full-viewport dark expanses; darkness IS the whitespace
  buttons: {
    primary: {
      bg:    "oklch(0.84 0.17 84)",  // Lamborghini Gold
      color: "oklch(0 0 0)",         // black text on gold — high contrast
    },
    secondary: {
      bg:     "transparent",
      color:  "oklch(1 0 0)",
      border: "oklch(1 0 0 / 0.5)",  // white at 50% opacity — ghost CTA on dark
    },
  },
  elevation: "none",  // depth via surface color layering, never shadows; canvas bleeds to raised
  layout: {
    hero:    "cinema",     // full-viewport video reveal — the car IS the hero
    cta:     "band",       // dark band spanning edge-to-edge, not a floating card
    preview: "media",      // photography/media-first treatment for product showcase
  },
  signature: {
    kind:      "linework",
    accent:    "oklch(0.84 0.17 84)",  // Lamborghini Gold traces
    intensity: "medium",
    note: "Hexagonal geometric linework overlay — echoes the hexagonal construction DNA of LamboType and the hex pause-button icon system.",
  },
};

export default lamborghini;
