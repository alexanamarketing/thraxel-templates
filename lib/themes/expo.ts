import type { BrandTheme } from "./types";

// Expo — React Native developer platform. Signature: pure-white canvas with a
// soft sky-blue atmospheric gradient wash in the hero, pure-black CTA, Inter as
// the single sans at weight 600 display / 400 body, JetBrains Mono on every
// code surface, centered device-mockup hero. Source: developer-tools-and-ides/expo.md.
const expo: BrandTheme = {
  schemaVersion: 1,
  slug: "expo",
  name: "Expo",
  description: "React Native developer platform — white canvas, pure-black CTAs, sky-blue gradient hero wash.",
  polarity: "light",

  colors: {
    // #ffffff — pure white page floor
    canvas: "oklch(1 0 0)",
    // #fafafa — subtle alternating band
    surface: "oklch(0.983 0 0)",
    // #ffffff — white cards (depth via hairline border)
    raised: "oklch(1 0 0)",
    // #171717 — near-black display + body
    ink: "oklch(0.15 0 0)",
    // #60646c — slightly cool gray running text
    muted: "oklch(0.49 0.012 265)",
    // #f0f0f3 — 1px card outline / divider
    hairline: "oklch(0.95 0.003 270)",
    // #000000 — pure black; only CTA fill
    primary: "oklch(0 0 0)",
    // #ffffff — white text on black CTA
    onPrimary: "oklch(1 0 0)",
    // #0d74ce — blue reserved for inline body links / emphasis tags
    accent: "oklch(0.54 0.20 252)",
  },

  fonts: {
    display: {
      stack: '"Inter", -apple-system, system-ui, sans-serif',
      source: { kind: "google", family: "Inter", weights: [600] },
      weight: 600,
      // -1.92px at 64px display-mega = ≈ -0.03em
      tracking: "-0.03em",
    },
    body: {
      stack: '"Inter", -apple-system, system-ui, sans-serif',
      source: { kind: "google", family: "Inter", weights: [400, 500] },
      weight: 400,
    },
    mono: {
      // JetBrains Mono on every code surface, code block, and IDE mockup
      stack: '"JetBrains Mono", "Fira Code", monospace',
      source: { kind: "google", family: "JetBrains Mono", weights: [400] },
      weight: 400,
    },
  },

  type: {
    navUppercase: false,
    navTracking: "0",
    buttonUppercase: false,
    buttonTracking: "0",
    tabularNumbers: false,
  },

  radius: {
    // Developer compact: 8px on CTAs, 12px on cards, pills only for badges
    button: "8px",
    card: "12px",
    input: "8px",
    chip: "9999px",
  },

  density: "spacious",

  buttons: {
    // Pure black fill; white text
    primary: { bg: "oklch(0 0 0)", color: "oklch(1 0 0)" },
    // White with hairline-strong border (#dcdee0 → oklch(0.88 0.003 270)); ink text
    secondary: { bg: "oklch(1 0 0)", color: "oklch(0.15 0 0)", border: "oklch(0.88 0.003 270)" },
  },

  // Hairline border as resting state; 0 4px 12px rgba(0,0,0,0.04) drop on hover
  elevation: "soft",

  layout: {
    // Centered headline + subhead + CTA above the device-mockup composite
    hero: "centered",
    // Pre-footer band: white, centered display headline, single black CTA
    cta: "band",
    // MacBook + iPhone composite showing EAS Build dashboard and Expo Studio
    preview: "dashboard",
  },

  signature: {
    // Soft sky-blue radial atmospheric wash behind the centered hero only;
    // device-mockup composite (MacBook + iPhone) is the page's visual chrome.
    kind: "glow",
    // #cfe7ff — sky-light gradient anchor
    accent: "oklch(0.92 0.05 230)",
    // #a8c8e8 — sky-mid gradient anchor
    accent2: "oklch(0.80 0.06 230)",
    intensity: "subtle",
    note: "Sky-blue radial gradient atmospheric wash behind the centered hero; MacBook + iPhone device-mockup composite as page chrome.",
  },
};

export default expo;
