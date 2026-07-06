import type { BrandTheme } from "./types";

// Vodafone — global telecom super-brand. Signature: full-bleed editorial portrait
// photography hero with colossal uppercase weight-800 headline overlay; ink dark
// hero band / white content band two-band rhythm; signature scarlet red (#E60000)
// pill CTAs only; single-family Vodafone proprietary sans at 800/300/400;
// speechmark logo orb as the only decorative chrome. Source: media-and-consumer-tech/vodafone.md.
const vodafone: BrandTheme = {
  schemaVersion: 1,
  slug: "vodafone",
  name: "Vodafone",
  description: "Telecom super-brand — scarlet red pill CTAs, editorial photo hero, billboard-weight display type.",

  polarity: "light",

  colors: {
    canvas:   "oklch(1 0 0)",           // #ffffff — default light content background
    surface:  "oklch(0.96 0 0)",        // #f2f2f2 — canvas-soft, badge-chip background
    raised:   "oklch(1 0 0)",           // cards sit on canvas; elevation = surface contrast, not shadow
    ink:      "oklch(0.20 0.008 256)",  // #25282b — near-black with cool cast; headings, body
    muted:    "oklch(0.54 0 0)",        // #7e7e7e — secondary body, captions, metadata
    hairline: "oklch(0.78 0 0)",        // #bebebe — lowest-priority dividers, placeholder
    primary:  "oklch(0.53 0.25 27)",    // #e60000 — Vodafone Red; every CTA, speechmark orb
    onPrimary:"oklch(1 0 0)",           // white on red — CTA labels
    accent:   "oklch(0.53 0.25 27)",    // same as primary — no second accent in the brand system

    // Dark hero band: ink surface with white text — the brand's signature opening move
    heroCanvas: "oklch(0.20 0.008 256)", // #25282b
    heroInk:    "oklch(1 0 0)",          // white on dark
    heroMuted:  "oklch(0.78 0 0)",       // #bebebe — subdued white-ish on dark
  },

  fonts: {
    display: {
      stack: '"Vodafone", "Vodafone Rg", "Inter", "Helvetica Neue", Arial, sans-serif',
      source: {
        kind: "proprietary",
        substituteGoogle: "Inter",
        weights: [300, 700, 800],
      },
      weight: 800,
      tracking: "-0.007em", // brand calibration: -1px at 144px display hero
    },
    body: {
      stack: '"Vodafone", "Vodafone Rg", "Inter", "Helvetica Neue", Arial, sans-serif',
      source: {
        kind: "proprietary",
        substituteGoogle: "Inter",
        weights: [400, 600, 700],
      },
      weight: 400,
    },
  },

  type: {
    navUppercase:     false,  // nav links are sentence-case body-sm
    buttonUppercase:  false,  // button labels are body-md weight 400, not uppercased
    displayUppercase: true,   // hero headlines are ALL CAPS — weight 800 UPPERCASE is the brand voice
    tabularNumbers:   false,
  },

  radius: {
    button: "60px",     // pill-lg — the brand's non-negotiable CTA pill (60px)
    card:   "6px",      // card-content + card-hero chrome
    input:  "6px",      // text-input rounded.sm
    chip:   "32px",     // pill-md — badge-chip pills
  },

  density: "spacious", // massive display type + generous section padding; hero band fills viewport

  buttons: {
    primary: {
      bg:    "oklch(0.53 0.25 27)", // Vodafone Red fill
      color: "oklch(1 0 0)",        // white label
    },
    secondary: {
      bg:     "transparent",        // outline-red: white canvas or transparent
      color:  "oklch(0.53 0.25 27)", // red label
      border: "oklch(0.53 0.25 27)", // red 1px border — the brand's secondary CTA
    },
  },

  elevation: "none", // brand explicitly avoids soft shadows; depth = ink-to-canvas polarity flip

  layout: {
    hero:    "cinema",     // full-bleed editorial portrait photo with colossal headline overlay
    cta:     "band",       // CTA rendered as a full-width ink or red band
    preview: "dashboard",  // app preview tiles in a structured dashboard layout
  },

  signature: {
    kind:      "cinema-photo",
    accent:    "oklch(0.53 0.25 27)", // Vodafone Red — the speechmark orb and pill CTAs
    intensity: "strong",
    note: "Full-bleed editorial portrait photography with colossal uppercase weight-800 headline overlay; ink hero band / white content band two-band rhythm; red speechmark orb anchors the page centre.",
  },
};

export default vodafone;
