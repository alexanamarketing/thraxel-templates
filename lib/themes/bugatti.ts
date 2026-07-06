import type { BrandTheme } from "./types";

// Bugatti — ultra-luxury hypercar. Signature: pure black void, full-bleed cinematic
// automotive photography, three-family proprietary type trinity (Display / Text / Mono),
// all-caps letterspaced headlines at weight 400, transparent-pill CTA, zero decoration.
// The ice-blue link (#c3d9f3) is the only non-monochrome token in the entire system.
// Source: automotive/bugatti.md.
const bugatti: BrandTheme = {
  schemaVersion: 1,
  slug: "bugatti",
  name: "Bugatti",
  description: "Ultra-luxury hypercar — pure black void, letterspaced white type, automotive photography as the only voltage.",
  polarity: "dark",

  colors: {
    canvas:    "oklch(0 0 0)",         // #000000 — pure black floor
    surface:   "oklch(0.07 0 0)",      // #0d0d0d — surface-soft; barely-off-black spec rows
    raised:    "oklch(0.11 0 0)",      // #141414 — surface-card; nearly-black content cards
    ink:       "oklch(1 0 0)",         // #ffffff — headlines, primary text, on-dark
    muted:     "oklch(0.83 0 0)",      // #cccccc — body paragraphs; cooler-than-white readable secondary
    hairline:  "oklch(0.18 0 0)",      // #262626 — 1px dividers, table rows, card outlines
    primary:   "oklch(1 0 0)",         // #ffffff — CTA outline color (fill is transparent)
    onPrimary: "oklch(0 0 0)",         // #000000
    accent:    "oklch(0.87 0.04 245)", // #c3d9f3 — desaturated ice-blue; the only chromatic token; inline links
  },

  fonts: {
    display: {
      // Bugatti Display: all display headlines, the BUGATTI wordmark, model name plates.
      // Uppercase, weight 400, wide tracking. Substitute: Saira Condensed (Google Fonts).
      stack: '"Bugatti Display", "Saira Condensed", -apple-system, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Saira Condensed", weights: [400] },
      weight: 400,
      tracking: "0.06em", // display-xl: 4px at 64px; display-lg: 3px at 48px — both ≈ 0.063em
    },
    body: {
      // Bugatti Text Regular: a serif text face used exclusively for running body copy,
      // lead paragraphs, model descriptions. Sentence-case, no tracking, weight 400.
      // Substitute: Cormorant Garamond — preserves the serif literary editorial feel.
      stack: '"Bugatti Text Regular", "Cormorant Garamond", Garamond, "Times New Roman", serif',
      source: { kind: "proprietary", substituteGoogle: "Cormorant Garamond", weights: [400] },
      weight: 400,
    },
    mono: {
      // Bugatti Monospace: button labels, navigation, captions, dates — precision contexts.
      // Always uppercase with 2–2.5px tracking. The "machined precision" voice.
      // Substitute: JetBrains Mono (Google Fonts, weight 400).
      stack: '"Bugatti Monospace", "JetBrains Mono", "SF Mono", ui-monospace, monospace',
      source: { kind: "proprietary", substituteGoogle: "JetBrains Mono", weights: [400] },
      weight: 400,
      tracking: "0.18em", // button: 2.5px at 14px = 0.179em; nav: 2px at 12px = 0.167em
    },
  },

  type: {
    navUppercase: true,
    navTracking: "0.15em",    // nav-link token: 2px at 12px ≈ 0.167em
    buttonUppercase: true,
    buttonTracking: "0.18em", // button token: 2.5px at 14px ≈ 0.179em
    displayUppercase: true,   // all headlines uppercase; emphasis via size + tracking, never weight
  },

  radius: {
    button: "9999px", // pill — the ONLY rounded element in the entire system
    card:   "0px",    // all cards, photo containers, inputs: sharp 0px corners
    input:  "0px",    // inputs: transparent + bottom underline only; no corner radius
    chip:   "9999px",
  },

  density: "cinematic", // 120px section rhythm; vast whitespace frames the car photography

  buttons: {
    primary: {
      bg:     "transparent",         // transparent fill IS the Bugatti button — unique in luxury-auto
      color:  "oklch(1 0 0)",        // white text
      border: "oklch(1 0 0)",        // 1px white outline
    },
    secondary: {
      bg:     "transparent",
      color:  "oklch(0.83 0 0)",     // muted body-text tone for lower-emphasis actions
      border: "oklch(0.83 0 0)",
    },
  },

  elevation: "border", // hairline 1px dividers only; no shadows, no gradients, no glassmorphism

  layout: {
    hero:    "cinema",  // full-bleed automotive photography; h1 overlaid on the car
    cta:     "band",    // cta-band-photo: full-bleed photo band, centered headline + transparent pill
    preview: "media",   // photography-driven showcase; media layout fits the visual-first brand
  },

  signature: {
    kind:      "cinema-photo",
    accent:    "oklch(0.87 0.04 245)", // #c3d9f3 ice-blue — hint only; the vignette is monochrome
    intensity: "strong",
    note:      "Full-bleed automotive photography on pure black void; no decoration — photography, precision type, and negative space are the entire brand.",
  },
};

export default bugatti;
