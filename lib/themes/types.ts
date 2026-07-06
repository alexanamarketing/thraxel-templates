// The ONLY schema a per-brand file implements. StandardTemplate consumes exactly
// these fields. Keep optional fields optional: a minimal valid theme is roles +
// fonts + radius + one layout choice + signature. See docs/standard-template-architecture.md.

// A CSS color. Prefer oklch(L C H) converted from the DESIGN.md hex, but any valid
// CSS color string is accepted (the template never parses it, just emits it).
export type Color = string;

export type FontSource =
  | { kind: "google"; family: string; weights: number[] }
  | { kind: "system" }
  // Proprietary/licensed face (FerrariSans, Sohne, SF Pro...). Load the closest
  // open Google substitute the DESIGN.md recommends; the stack still lists the real
  // family first so a user who has it licensed sees it.
  | { kind: "proprietary"; substituteGoogle?: string; weights?: number[] };

export type FontRole = {
  // Full CSS font-family stack, real family first, ending in a system fallback.
  stack: string;
  source: FontSource;
  weight: number;
  // Display tracking like "-0.02em"; omit/"0" for body.
  tracking?: string;
};

export type ButtonVisual = {
  bg: Color | "transparent";
  color: Color;
  border?: Color; // omit for no border
};

export type BrandTheme = {
  schemaVersion: 1;
  slug: string;
  name: string;
  description: string; // one line in the brand's own voice

  // Overall page polarity. "dark" = dark canvas throughout (Ferrari, Spotify).
  polarity: "light" | "dark";

  colors: {
    canvas: Color; // page background
    surface: Color; // slightly-off panels / alt bands
    raised: Color; // cards
    ink: Color; // primary text
    muted: Color; // secondary text
    hairline: Color; // borders / dividers
    primary: Color; // brand CTA fill
    onPrimary: Color; // text on primary
    accent: Color; // links / emphasis (often == primary)
    // Optional hero-band override: a light-body brand with a dark hero, or vice
    // versa. When set, the hero section uses these instead of canvas/ink/muted.
    heroCanvas?: Color;
    heroInk?: Color;
    heroMuted?: Color;
  };

  fonts: {
    display: FontRole;
    body: FontRole;
    mono?: FontRole; // only if the brand uses mono for the preview/stats
  };

  // Type behavior flags.
  type: {
    navUppercase?: boolean;
    navTracking?: string; // e.g. "0.06em"
    buttonUppercase?: boolean;
    buttonTracking?: string;
    // Uppercase the display/headline tier (monumental all-caps brands: Nike).
    // Applies to headlines/wordmark/feature+stat+cta titles, NOT the quote or body.
    displayUppercase?: boolean;
    tabularNumbers?: boolean; // fintech / data brands
  };

  radius: {
    button: string; // "0px" | "9999px" | "0.6rem" ...
    card: string;
    input?: string;
    chip?: string; // default pill
  };

  // Vertical rhythm. Maps to concrete section padding in the template.
  density: "compact" | "standard" | "spacious" | "cinematic";

  buttons: {
    primary: ButtonVisual;
    secondary: ButtonVisual;
  };

  // Card / panel depth treatment.
  elevation: "none" | "border" | "soft" | "heavy";

  layout: {
    hero: "split" | "centered" | "cinema" | "editorial";
    cta: "band" | "card" | "split";
    preview: "card" | "dashboard" | "terminal" | "media";
  };

  // The ONE signature move that makes the brand recognizable. Rendered as an
  // optional decorative layer behind/around the hero (and CTA where apt).
  signature: {
    kind:
      | "none"
      | "gradient-mesh"
      | "glow"
      | "grid"
      | "cinema-photo"
      | "color-tiles"
      | "linework"
      | "editorial-rule"
      | "scanlines";
    accent?: Color;
    accent2?: Color;
    intensity?: "subtle" | "medium" | "strong";
    note?: string; // one line: what the move is, from the DESIGN.md
  };
};
