import type { BrandTheme } from "./types";

// Spotify — dark immersive music platform. Signature: near-black canvas where album
// art provides all color, Spotify Green (#1ED760) used functionally only, full-pill
// geometry, uppercase button labels with wide tracking, green ambient glow in hero.
// Source: media-and-consumer-tech/spotify.md.
const spotify: BrandTheme = {
  schemaVersion: 1,
  slug: "spotify",
  name: "Spotify",
  description: "Content-first darkness — near-black canvas, functional green, pill geometry, album art as color.",
  polarity: "dark",
  colors: {
    canvas:  "oklch(0.11 0 0)",      // #121212 — deepest background
    surface: "oklch(0.14 0 0)",      // #181818 — cards, sidebar, containers
    raised:  "oklch(0.20 0 0)",      // #252525 — elevated cards, dropdowns
    ink:     "oklch(1 0 0)",         // #ffffff — primary text
    muted:   "oklch(0.73 0 0)",      // #b3b3b3 — secondary text, inactive nav
    hairline:"oklch(0.37 0 0)",      // #4d4d4d — button borders, dividers
    primary: "oklch(0.76 0.21 142)", // #1ED760 — Spotify Green, CTA + play controls
    onPrimary:"oklch(0 0 0)",        // #000000 — black on green (green is bright)
    accent:  "oklch(0.76 0.21 142)", // #1ED760 — links, active states, eyebrows
  },
  fonts: {
    display: {
      stack: '"SpotifyMixUITitle", "Manrope", "Helvetica Neue", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Manrope", weights: [700, 800] },
      weight: 700,
      tracking: "-0.01em",
    },
    body: {
      stack: '"SpotifyMixUI", "Manrope", "Helvetica Neue", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Manrope", weights: [400, 600, 700] },
      weight: 400,
    },
  },
  type: {
    navUppercase: false,
    buttonUppercase: true,
    buttonTracking: "0.1em",
  },
  radius: {
    button: "9999px",   // full pill — core identity
    card:   "8px",      // standard card/album container radius
    input:  "9999px",   // search inputs are full pills
    chip:   "9999px",   // navigation chips, filter tags
  },
  density: "compact",
  buttons: {
    primary:   { bg: "oklch(0.76 0.21 142)", color: "oklch(0 0 0)" },
    secondary: { bg: "transparent", color: "oklch(1 0 0)", border: "oklch(0.50 0 0)" },
  },
  elevation: "heavy",
  layout: {
    hero:    "centered",
    cta:     "band",
    preview: "media",
  },
  signature: {
    kind:      "glow",
    accent:    "oklch(0.76 0.21 142)", // Spotify Green radial glow
    intensity: "medium",
    note:      "Radial green ambient glow from center of near-black hero; UI otherwise achromatic.",
  },
};

export default spotify;
