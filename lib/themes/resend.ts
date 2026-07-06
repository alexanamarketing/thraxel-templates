import type { BrandTheme } from "./types";

// Resend — developer email API. Signature: pure-black canvas, off-white ink,
// Domaine Display editorial serif at 76–96px, atmospheric radial glows
// (orange/blue at low opacity anchored at section tops), translucent-white
// hairline borders replacing shadows entirely, white pill CTA on black.
// Source: productivity-and-saas/resend.md.
const resend: BrandTheme = {
  schemaVersion: 1,
  slug: "resend",
  name: "Resend",
  description: "Developer email API — pure-black canvas, editorial serif headline, atmospheric glow accents.",
  polarity: "dark",

  colors: {
    // True black canvas — brand sits on #000000, never near-black.
    canvas: "oklch(0 0 0)",
    // surface-card (#0a0a0c) — first elevation step above canvas.
    surface: "oklch(0.065 0.003 260)",
    // surface-elevated (#101012) — second elevation step; featured tiers, ghost button.
    raised: "oklch(0.085 0.003 260)",
    // ink (#fcfdff) — faintly cool off-white; the brand's primary text colour.
    ink: "oklch(0.99 0.004 247)",
    // muted (#a1a4a5) — secondary/supporting text; readable on canvas and surface.
    muted: "oklch(0.68 0.004 210)",
    // hairline (rgba 255,255,255,0.06) — translucent-white dividers replacing shadows.
    hairline: "oklch(1 0 0 / 0.06)",
    // primary (#fcfdff) — the white CTA pill; the brightest pixel on the canvas.
    primary: "oklch(0.99 0.004 247)",
    // onPrimary (#000000) — black label on white button.
    onPrimary: "oklch(0 0 0)",
    // accent (#3b9eff) — inline link colour and cool atmospheric wash. ~7.4:1 on black.
    accent: "oklch(0.64 0.19 252)",
  },

  fonts: {
    // Domaine Display — proprietary editorial serif; hero headlines at 76–96px,
    // ss01/ss04/ss11 features, lineHeight 1.0, tight negative tracking.
    // DM Serif Display is the closest Google Fonts editorial serif substitute.
    display: {
      stack: '"Domaine Display", "DM Serif Display", Georgia, "Times New Roman", serif',
      source: { kind: "proprietary", substituteGoogle: "DM Serif Display", weights: [400] },
      weight: 400,
      tracking: "-0.01em",
    },
    // ABC Favorit — proprietary humanist sans; marketing body copy and pill labels.
    // Inter Tight (DESIGN.md named substitute) is available on Google Fonts.
    body: {
      stack: '"ABC Favorit", "Inter Tight", "Inter", system-ui, sans-serif',
      source: { kind: "proprietary", substituteGoogle: "Inter Tight", weights: [400, 500] },
      weight: 400,
    },
    // Geist Mono — open source; all code wells and inline code.
    mono: {
      stack: '"Geist Mono", "Fira Code", "Cascadia Code", monospace',
      source: { kind: "google", family: "Geist Mono", weights: [400] },
      weight: 400,
    },
  },

  type: {
    // Nav uses button-sm (ABC Favorit, 0.35px tracking at 14px ≈ 0.025em).
    navUppercase: false,
    navTracking: "0.025em",
    buttonUppercase: false,
    // No display-uppercase — Domaine Display headlines are standard case.
    // Stats appear (delivery metrics) but tabular figures are not a brand convention.
    tabularNumbers: false,
  },

  radius: {
    // Buttons and inputs: rounded.md (8px).
    button: "8px",
    // Feature cards, code wells, pricing tiers: rounded.lg (12px).
    card: "12px",
    input: "8px",
    // Pills, status dots, avatars: rounded.full.
    chip: "9999px",
  },

  // Generous section padding (96–128px). Domaine Display at 96px needs room to register.
  density: "spacious",

  buttons: {
    // White pill on black canvas — the brand's single bright surface and CTA anchor.
    primary: {
      bg: "oklch(0.99 0.004 247)",
      color: "oklch(0 0 0)",
    },
    // Outline/ghost CTA — transparent with hairline-strong border (rgba 255,255,255,0.14).
    secondary: {
      bg: "transparent",
      color: "oklch(0.99 0.004 247)",
      border: "oklch(1 0 0 / 0.14)",
    },
  },

  // Translucent-white hairline borders carry depth — no drop shadows in this system.
  elevation: "border",

  layout: {
    // Full-bleed black stripe with centered Domaine Display headline and single white CTA.
    hero: "centered",
    // Closing CTA is a full-bleed dark band matching the canvas.
    cta: "band",
    // Code-window (traffic-light shell, Geist Mono) is the hero preview element.
    preview: "terminal",
  },

  signature: {
    // Atmospheric radial glows at 6–34% opacity anchored at section tops — never solid.
    // Orange wash: "Email reimagined" / story sections.
    // Blue wash: "Integrate this weekend" / developer-experience sections.
    kind: "glow",
    accent: "oklch(0.70 0.19 45)",   // accent-orange (#ff801f)
    accent2: "oklch(0.64 0.19 252)", // accent-blue (#3b9eff)
    intensity: "subtle",
    note: "Low-opacity radial atmospheric glows (orange, blue) anchored at section tops; falls off to canvas black within ~600px; never two glows per section.",
  },
};

export default resend;
