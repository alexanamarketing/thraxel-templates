import type { BrandTheme } from "./types";

// ElevenLabs — voice-AI editorial. Signature: off-white canvas, Waldenburg Light
// at weight 300, pastel radial-gradient orbs (mint/peach/lavender/sky/rose) as
// pure atmosphere. No neon accent. Near-black ink pill is the only CTA color.
// Source: ai-and-llm-platforms/elevenlabs.md.
const elevenlabs: BrandTheme = {
  schemaVersion: 1,
  slug: "elevenlabs",
  name: "ElevenLabs",
  description:
    "Voice AI for the editorial class — off-white canvas, Waldenburg Light display, pastel gradient orbs as pure atmosphere.",
  polarity: "light",

  colors: {
    canvas:    "oklch(0.97 0 0)",        // #f5f5f5  off-white page floor
    surface:   "oklch(0.99 0 0)",        // #fafafa  lighter alternating band
    raised:    "oklch(1 0 0)",           // #ffffff  pure-white cards floating above canvas
    ink:       "oklch(0.12 0.005 50)",   // #0c0a09  near-black warm — primary text
    muted:     "oklch(0.53 0.009 65)",   // #777169  warm mid-gray — sub-titles, secondary text
    hairline:  "oklch(0.92 0.003 55)",   // #e7e5e4  1px dividers / card outlines
    primary:   "oklch(0.22 0.008 50)",   // #292524  near-black warm — ink pill CTA fill
    onPrimary: "oklch(1 0 0)",           // #ffffff  white on ink pill
    accent:    "oklch(0.22 0.008 50)",   // #292524  same as primary — no separate link color
  },

  fonts: {
    display: {
      // Waldenburg Light is a licensed serif at weight 300. EB Garamond (Google,
      // 400 closest available) is the DESIGN.md-recommended open substitute.
      stack: '"Waldenburg", "EB Garamond", "Times New Roman", Georgia, serif',
      source: { kind: "proprietary", substituteGoogle: "EB Garamond", weights: [400] },
      weight: 300,
      tracking: "-0.03em", // display-mega: -1.92px ÷ 64px = -0.03em
    },
    body: {
      stack: '"Inter", system-ui, -apple-system, sans-serif',
      source: { kind: "google", family: "Inter", weights: [400, 500, 600] },
      weight: 400,
    },
  },

  type: {
    navUppercase:    false,
    buttonUppercase: false,
    displayUppercase: false,
    tabularNumbers:  false,
  },

  radius: {
    button: "9999px", // pill — every CTA and badge
    card:   "16px",   // rounded.xl — feature cards, pricing tiers
    input:  "8px",    // rounded.md — form inputs
    chip:   "9999px", // pill — badge-pill
  },

  density: "spacious", // 96px section rhythm, generous editorial pacing

  buttons: {
    primary: {
      bg:    "oklch(0.22 0.008 50)", // #292524 near-black ink pill
      color: "oklch(1 0 0)",
    },
    secondary: {
      bg:     "transparent",
      color:  "oklch(0.12 0.005 50)", // #0c0a09 ink text
      border: "oklch(0.12 0.005 50)", // ink 1px border — visible as outline pill
    },
  },

  elevation: "soft", // hairline border + single soft drop shadow on hover

  layout: {
    hero:    "centered", // full-width centered headline + atmospheric orb behind
    cta:     "band",     // pre-footer centered CTA band at 96px padding
    preview: "card",     // editorial feature-card grid
  },

  signature: {
    kind:      "gradient-mesh",
    accent:    "oklch(0.87 0.08 168)", // #a7e5d3 gradient-mint
    accent2:   "oklch(0.79 0.08 295)", // #c8b8e0 gradient-lavender
    intensity: "subtle",
    note: "Soft pastel radial-gradient orbs (mint/peach/lavender/sky/rose) drift as pure atmospheric decoration behind the hero — never used as button fills or text colors.",
  },
};

export default elevenlabs;
