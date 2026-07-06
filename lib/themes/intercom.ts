import type { BrandTheme } from "./types";

// Intercom — customer messaging / AI (Fin). Cream canvas (#f5f1ec) over floating
// white cards, charcoal primary CTA, Fin Orange reserved for AI-product moments.
// Saans (proprietary geometric sans) at weight 500 / aggressive negative tracking.
// No atmospheric ornament; depth through surface elevation alone.
// Source: productivity-and-saas/intercom.md.
const intercom: BrandTheme = {
  schemaVersion: 1,
  slug: "intercom",
  name: "Intercom",
  description: "Product-led customer messaging — cream canvas, charcoal CTAs, Fin Orange reserved for AI.",
  polarity: "light",

  colors: {
    canvas:    "oklch(0.96 0.010 82)",  // #f5f1ec warm cream — the brand's defining surface
    surface:   "oklch(0.93 0.010 82)",  // #ebe7e1 surface-2 — alt bands, startup-discount tile
    raised:    "oklch(1 0 0)",          // #ffffff pure white — pricing, feature, product-mockup cards
    ink:       "oklch(0.14 0 0)",       // #111111 charcoal — all headlines, body, primary btn label
    muted:     "oklch(0.43 0.003 75)",  // #626260 ink-muted — secondary type, footer, meta
    hairline:  "oklch(0.85 0.010 80)",  // #d3cec6 warm-gray 1px card border
    primary:   "oklch(0.14 0 0)",       // #111111 charcoal — primary CTA fill (system primary)
    onPrimary: "oklch(1 0 0)",          // #ffffff on charcoal
    accent:    "oklch(0.67 0.23 37)",   // #ff5600 Fin Orange — AI-product accent (fill, badge)
  },

  fonts: {
    display: {
      stack: '"Saans", "Saans Fallback", "Inter", ui-sans-serif, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [500] },
      weight: 500,
      tracking: "-0.028em", // -2.0px at 72px display-xl; scales proportionally down
    },
    body: {
      stack: '"Saans", "Saans Fallback", "Inter", ui-sans-serif, system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter", weights: [400, 500] },
      weight: 400,
    },
    mono: {
      stack: '"SaansMono", "SaansMono Fallback", "JetBrains Mono", ui-monospace, monospace',
      source: { kind: "proprietary", substituteGoogle: "JetBrains Mono", weights: [400] },
      weight: 400,
    },
  },

  type: {
    navUppercase:    false, // sentence-case nav per DESIGN.md eyebrow rules
    buttonUppercase: false,
    tabularNumbers:  false,
  },

  radius: {
    button: "8px",    // rounded.md — CTAs never pill-rounded (DESIGN.md don't)
    card:   "12px",   // rounded.lg — pricing + feature cards
    input:  "8px",    // rounded.md — form fields
    chip:   "9999px", // pill — pricing tab toggles only
  },

  density: "spacious", // 96px section spacing; generous 24–48px card padding

  buttons: {
    primary:   { bg: "oklch(0.14 0 0)",  color: "oklch(1 0 0)" },
    secondary:  { bg: "oklch(1 0 0)",    color: "oklch(0.14 0 0)", border: "oklch(0.85 0.010 80)" },
  },

  elevation: "border", // white card on cream via hairline; no drop-shadows per DESIGN.md

  layout: {
    hero:    "split",     // text-left, product-screenshot-right
    cta:     "card",      // closing CTA lifts as a white card from cream
    preview: "dashboard", // high-fidelity Intercom inbox / analytics mockup
  },

  signature: {
    kind:      "none",
    accent:    "oklch(0.67 0.23 37)",
    intensity: "subtle",
    note:      "Cream-on-white elevation: no shadows, no gradients; depth is the white card lifted from the cream ground.",
  },
};

export default intercom;
