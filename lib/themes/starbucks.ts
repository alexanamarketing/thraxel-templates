import type { BrandTheme } from "./types";

// Starbucks — warm-cream coffee-house retail flagship. Signature: color-block
// page rhythm (cream → white → House-Green feature band) with full-pill buttons,
// proprietary SoDoSans at tight -0.01em tracking, whisper-soft layered shadows.
// Source: e-commerce-and-retail/starbucks.md.
const starbucks: BrandTheme = {
  schemaVersion: 1,
  slug: "starbucks",
  name: "Starbucks",
  description:
    "Warm coffee-house retail — cream canvas, four-tier greens, full-pill CTAs, color-block page bands.",
  polarity: "light",

  colors: {
    canvas:    "oklch(0.95 0.009 87)",   // Neutral Warm #f2f0eb — warm cream page bg
    surface:   "oklch(0.93 0.008 87)",   // Ceramic #edebe9 — zone separators / alt bands
    raised:    "oklch(1 0 0)",           // White #ffffff — card fill
    ink:       "oklch(0.22 0 0)",        // ~rgba(0,0,0,0.87) — primary text on light
    muted:     "oklch(0.50 0.003 87)",   // ~rgba(0,0,0,0.58) — secondary text on light
    hairline:  "oklch(0.91 0 0)",        // #e7e7e7 — dividers / input borders
    primary:   "oklch(0.47 0.13 163)",   // Green Accent #00754A — CTA fill
    onPrimary: "oklch(1 0 0)",           // White on primary fill
    accent:    "oklch(0.41 0.12 160)",   // Starbucks Green #006241 — brand headings / links
  },

  fonts: {
    display: {
      stack:
        '"SoDoSans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
      source: {
        kind: "proprietary",
        substituteGoogle: "Nunito Sans",
        weights: [400, 600],
      },
      weight: 600,
      tracking: "-0.01em", // signature tight tracking, universal across all type sizes
    },
    body: {
      stack:
        '"SoDoSans", "Nunito Sans", "Helvetica Neue", Helvetica, Arial, sans-serif',
      source: {
        kind: "proprietary",
        substituteGoogle: "Nunito Sans",
        weights: [400, 600],
      },
      weight: 400,
      tracking: "-0.01em", // applied even at body level — the whole product reads compressed
    },
  },

  type: {
    navUppercase:     false,
    buttonUppercase:  false,
    displayUppercase: false,
    tabularNumbers:   false,
  },

  radius: {
    button: "9999px",  // 50px full-pill, universal without exception
    card:   "12px",
    input:  "4px",
    chip:   "9999px",
  },

  density: "spacious", // "plenty of space in the café" — section padding 40–64px

  buttons: {
    primary: {
      bg:    "oklch(0.47 0.13 163)", // Green Accent #00754A
      color: "oklch(1 0 0)",
    },
    secondary: {
      bg:     "transparent",
      color:  "oklch(0.47 0.13 163)", // Green Accent text + border
      border: "oklch(0.47 0.13 163)",
    },
  },

  elevation: "soft", // whisper-soft 2–3 low-alpha stacked shadows, never a single heavy drop

  layout: {
    hero:    "split",    // asymmetric 40% photo / 60% content split
    cta:     "band",     // full-width House-Green feature band for primary CTA moment
    preview: "card",     // content displayed in white card tiles on cream canvas
  },

  signature: {
    kind:      "color-tiles",
    accent:    "oklch(0.26 0.035 175)", // House Green #1E3932 — espresso-dark feature band
    accent2:   "oklch(0.47 0.13 163)", // Green Accent #00754A
    intensity: "medium",
    note: "Color-block page rhythm: warm-cream hero → white content → House-Green feature band → cream utility → dark-green footer bookend.",
  },
};

export default starbucks;
