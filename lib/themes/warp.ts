import type { BrandTheme } from "./types";

// Warp — agentic development environment. Signature: warm near-charcoal dark canvas
// (#2b2622, brown-warm rather than pure black), off-white primary doubling as default
// text, Inter + DM Mono type pair, extremely tight 3–4 px radii, terminal-mockup
// imagery as the only decorative system. No gradients, no atmospheric overlays.
// Source: developer-tools-and-ides/warp.md.
const warp: BrandTheme = {
  schemaVersion: 1,
  slug: "warp",
  name: "Warp",
  description: "Agentic development environment — warm near-charcoal canvas, off-white precision, DM Mono terminal.",
  polarity: "dark",

  colors: {
    // #2b2622 — warm dark, oklch documented in DESIGN.md
    canvas: "oklch(0.22 0.004 84.6)",
    // #383330 — canvas-soft, slightly lighter warm dark
    surface: "oklch(0.25 0.004 84.6)",
    // same token (#383330): card chrome re-uses canvas-soft
    raised: "oklch(0.25 0.004 84.6)",
    // #f7f5f0 — warm off-white, default text on canvas
    ink: "oklch(0.97 0.007 84)",
    // #aea69c — oklch documented in DESIGN.md (lowest-priority text/footer)
    muted: "oklch(0.715 0.008 84.6)",
    // #3f3a36 — 1 px solid hairline on dark surfaces
    hairline: "oklch(0.27 0.004 84.6)",
    // #f7f5f0 — off-white IS the brand primary (no chromatic accent exists)
    primary: "oklch(0.97 0.007 84)",
    // #2b2622 — warm dark text on the off-white button fill
    onPrimary: "oklch(0.22 0.004 84.6)",
    // same off-white; brand carries no separate chromatic link/emphasis color
    accent: "oklch(0.97 0.007 84)",
  },

  fonts: {
    display: {
      // Inter is the sole display and body face; weight 400 at hero (quietly confident).
      stack: '"Inter", "Inter Fallback", system-ui, -apple-system, sans-serif',
      source: { kind: "google", family: "Inter", weights: [400, 500] },
      weight: 400,
      // -1.6 px at 64 px = -0.025 em; same ratio holds across all display levels.
      tracking: "-0.025em",
    },
    body: {
      stack: '"Inter", "Inter Fallback", system-ui, -apple-system, sans-serif',
      source: { kind: "google", family: "Inter", weights: [400, 500] },
      weight: 400,
    },
    mono: {
      // DM Mono: terminal mockups, command snippets, code blocks — open on Google Fonts.
      stack: '"DM Mono", ui-monospace, "SFMono-Regular", Menlo, monospace',
      source: { kind: "google", family: "DM Mono", weights: [400] },
      weight: 400,
    },
  },

  type: {
    // Sentence-case nav and buttons; no chromatic tracking.
    navUppercase: false,
    navTracking: "0",
    buttonUppercase: false,
    // Not a fintech brand; tabular figures unused.
    tabularNumbers: false,
  },

  radius: {
    // {rounded.sm} 3 px — the brand's CTA is almost rectangular.
    button: "3px",
    // {rounded.md} 4 px — default card chrome.
    card: "4px",
    // Inputs match button tightness.
    input: "3px",
    // Only icon containers use pill shape.
    chip: "9999px",
  },

  density: "compact",

  buttons: {
    // Off-white fill, warm-dark text — inverts the page polarity on the CTA.
    primary: {
      bg: "oklch(0.97 0.007 84)",
      color: "oklch(0.22 0.004 84.6)",
    },
    // Ghost secondary: no border, no fill — text only on dark canvas.
    secondary: {
      bg: "transparent",
      color: "oklch(0.97 0.007 84)",
    },
  },

  // Surface-contrast + hairline carry elevation; no drop-shadows on any marketing card.
  elevation: "border",

  layout: {
    // 2-column hero: two terminal-mockup screenshots side-by-side.
    hero: "split",
    // Download-tile block (Mac / Linux / Windows) — card-style CTA.
    cta: "card",
    // Terminal mockup is the brand's core product imagery.
    preview: "terminal",
  },

  signature: {
    // Warp's marketing surface uses no gradient, no atmospheric backdrop, no illustration.
    // Terminal-mockup imagery is the only decorative system; expressed via layout.preview.
    kind: "none",
    note: "No decorative backdrop — terminal-mockup cards are the brand's sole visual device. Layout.preview:terminal carries the signature.",
  },
};

export default warp;
