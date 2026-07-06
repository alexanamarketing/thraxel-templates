import type { BrandTheme } from "./types";

// Composio — developer-tooling / AI agent integrations. Signature: near-black canvas,
// single electric-blue (#0007cd) CTA and spotlight glow, abcDiatype 500 display,
// JetBrains Mono on code, 2×2 terminal-mockup-grid hero with centered radial glow.
// Source: backend-database-and-devops/composio.md.
const composio: BrandTheme = {
  schemaVersion: 1,
  slug: "composio",
  name: "Composio",
  description: "AI agent tooling — near-black canvas, single electric-blue CTA, terminal-grid hero with radial spotlight glow.",
  polarity: "dark",

  colors: {
    canvas:    "oklch(0.07 0 0)",         // #0f0f0f — page floor (near-black)
    surface:   "oklch(0.10 0 0)",         // #181818 — surface-card (content cards)
    raised:    "oklch(0.14 0 0)",         // #222222 — surface-card-elevated (terminal panes, secondary buttons)
    ink:       "oklch(1 0 0)",            // #ffffff — display headlines
    muted:     "oklch(0.70 0 0)",         // #a8a8a8 — default running-text (body copy)
    hairline:  "oklch(0.22 0 0)",         // #333333 — hairline-strong (panel outlines)
    primary:   "oklch(0.33 0.27 265)",    // #0007cd — Composio Blue (CTAs, wordmark, glow center)
    onPrimary: "oklch(1 0 0)",            // #ffffff — text on primary
    accent:    "oklch(0.55 0.28 265)",    // #1a26ff-ish — primary-glow; links, emphasis, spotlight atmosphere
  },

  fonts: {
    display: {
      stack: '"abcDiatype", "Inter", ui-sans-serif, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 500, 600] },
      weight: 500,
      tracking: "-0.03em",
    },
    body: {
      stack: '"abcDiatype", "Inter", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 500, 600] },
      weight: 400,
    },
    mono: {
      stack: '"JetBrains Mono", "Fira Code", ui-monospace, monospace',
      source: { kind: "google", family: "JetBrains Mono", weights: [400] },
      weight: 400,
    },
  },

  type: {
    navUppercase: false,
    navTracking: "0",
    buttonUppercase: false,
    tabularNumbers: true,
  },

  radius: {
    button: "8px",      // rounded.md — developer-tool dialect; not full pills
    card: "16px",       // rounded.xl — feature cards, terminal mockup grid
    input: "8px",       // rounded.md
    chip: "9999px",     // badge-pill (uppercase section labels)
  },

  density: "compact",

  buttons: {
    primary: {
      bg: "oklch(0.33 0.27 265)",   // Composio Blue
      color: "oklch(1 0 0)",
    },
    secondary: {
      bg: "oklch(0.14 0 0)",        // surface-card-elevated — dark raised surface
      color: "oklch(1 0 0)",
    },
  },

  elevation: "border",

  layout: {
    hero: "centered",
    cta: "band",
    preview: "terminal",
  },

  signature: {
    kind: "glow",
    accent: "oklch(0.55 0.28 265)",  // brighter primary-glow blue for radial atmosphere
    intensity: "medium",
    note: "Radial electric-blue spotlight glow centered behind the 2×2 terminal-mockup grid on near-black canvas.",
  },
};

export default composio;
