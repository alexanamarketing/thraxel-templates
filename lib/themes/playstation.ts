import type { BrandTheme } from "./types";

// PlayStation — gaming editorial. Signature: pure-black canvas, full-bleed game
// key-art cinema hero, scarce PlayStation Blue (#0070D1) pill CTA, SST weight-300
// airy display type, alternating black/white/blue chapter bands, no decorative
// chrome. Source: media-and-consumer-tech/playstation.md.
const playstation: BrandTheme = {
  schemaVersion: 1,
  slug: "playstation",
  name: "PlayStation",
  description: "Gaming editorial — pure-black canvas, PlayStation Blue pill CTAs, SST weight-300 airy headlines, cinema-photo chapter bands.",
  polarity: "dark",
  colors: {
    canvas:    "oklch(0 0 0)",           // #000000 canvas-dark — hero, primary nav, footer base
    surface:   "oklch(0.13 0.003 252)",  // #121314 surface-dark-elevated — PS Plus banner, inset panels
    raised:    "oklch(0.16 0 0)",        // #181818 surface-dark-card — game tiles, dark product cards
    ink:       "oklch(1 0 0)",           // #ffffff on-dark — headlines and button text on dark bands
    muted:     "oklch(0.74 0 0)",        // rgba(255,255,255,0.7) body-dark ≈ #B8B8B8 — paragraph text on dark canvas
    hairline:  "oklch(0.27 0 0)",        // rgba(229,229,229,0.2) on black ≈ #2E2E2E — 1px dividers on dark surfaces
    primary:   "oklch(0.50 0.20 258)",   // #0070D1 PlayStation Blue — universal primary CTA, footer band
    onPrimary: "oklch(1 0 0)",           // #ffffff — text on PlayStation Blue
    accent:    "oklch(0.72 0.15 243)",   // #53b1ff link-dark — inline links and emphasis on dark canvas
  },
  fonts: {
    display: {
      stack: '"PlayStation SST", "SST", "Roboto", "Arial", "Helvetica", sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Roboto", weights: [300, 400, 700] },
      weight: 300,
      // Tracking is ~0 at display-xl (-0.1px / 54px); light weight carries the airy editorial voice
    },
    body: {
      stack: '"PlayStation SST", "SST", "Inter", "Arial", "Helvetica", sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 500, 600, 700] },
      weight: 400,
    },
  },
  type: {
    navUppercase: false,         // nav links are mixed case ("Games · PS5 · PS4 · PSVr2")
    navTracking: "0.022em",      // body-strong: 0.4px at 18px = 0.022em
    buttonUppercase: false,      // CTAs are mixed case ("Add to bag", "Sign up")
    buttonTracking: "0.025em",   // button-lg: 0.45px at 18px = 0.025em
    displayUppercase: false,
    tabularNumbers: false,
  },
  radius: {
    button: "9999px",  // rounded.full — every CTA pill and filter chip
    card: "8px",       // rounded.md — game tiles, product cards, PS Plus banner
    input: "4px",      // rounded.sm — text inputs and search utilities
    chip: "9999px",    // rounded.full — filter-pill, pagination dots, carousel paddles
  },
  density: "cinematic",  // 96px section rhythm — bands stack like trailer cuts with no decorative dividers
  buttons: {
    primary: {
      bg: "oklch(0.50 0.20 258)",   // PlayStation Blue fill
      color: "oklch(1 0 0)",
    },
    secondary: {
      bg: "transparent",
      color: "oklch(1 0 0)",         // white text on dark canvas
      border: "oklch(0.27 0 0)",     // hairline-dark — 1px outline on dark bands
    },
  },
  elevation: "border",  // flat on canvas; depth from surface-color contrast across band chapters; 1px hairlines only
  layout: {
    hero: "cinema",      // full-bleed dark band with game key art; copy compressed to editorial slot
    cta: "band",         // PlayStation Blue full-bleed CTA strip (Marathon launch, footer)
    preview: "media",    // game tiles and console renders carry 60-90% of each section
  },
  signature: {
    kind: "cinema-photo",
    accent: "oklch(0.50 0.20 258)",  // PlayStation Blue
    intensity: "strong",
    note: "Full-bleed game key art on pure-black chapter bands; PlayStation Blue used scarcely — at most one CTA band per page.",
  },
};

export default playstation;
