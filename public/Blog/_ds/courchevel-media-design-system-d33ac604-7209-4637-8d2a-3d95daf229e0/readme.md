# Courchevel Media — Design System

**Courchevel Media** (courchevelmedia.com) is a premium private photography and filmmaking service based in Courchevel, France. They document ski holidays and private events — not a travel agency, magazine, or SaaS product — with a "quietly luxurious," discreet, cinematic sensibility. Clients include international brands and Courchevel's elite families (Red Bull, Obermeyer, and Courchevel-based luxury houses like Baïes and L'Atelier are featured as trusted-by logos).

**Sources used** (no code repo or Figma was provided — this system was built from the live production site and user-supplied brand files):
- Live site: https://www.courchevelmedia.com/ (Home, Portfolio, Process, Pricing/"Choose Your Experience", Guides)
- User-uploaded screenshots of the Home, Portfolio, Process, Pricing, Guides and footer/CTA screens
- User-uploaded logo files: `uploads/Black.png`, `uploads/White.png`, `uploads/Brand.png` (brand color sheet)
- A user-authored "before/after" video-embed redesign spec (`uploads/8b276cc9…jpg`) that documents the brand's own visual philosophy verbatim — see Visual Foundations

If this system is regenerated later, re-attach these or a current repo/Figma link for higher fidelity.

## Index
- `styles.css` — root stylesheet, imports everything below
- `tokens/` — colors, typography, spacing, effects, base resets
- `assets/` — logo marks (black/white/brand sheet), reference imagery
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand) shown in the Design System tab
- `components/core/` — Button, Badge, Card
- `components/marketing/` — PricingCard, ArticleCard, ProcessStep
- `components/navigation/` — NavBar, Footer
- `ui_kits/marketing-website/` — click-through recreation of the marketing site (Home, Portfolio, Process, Pricing, Guides)
- `SKILL.md` — Claude Code-portable skill version of this system

## Components
- **Button** (`components/core`) — pill CTA: primary (filled green, WhatsApp-only), secondary (outlined), ghost (subtle filled pill), link
- **Badge** (`components/core`) — uppercase eyebrow label / filter chip
- **Card** (`components/core`) — base dark panel, thin border, 16px radius
- **PricingCard** (`components/marketing`) — pricing tier card with feature list
- **ArticleCard** (`components/marketing`) — guides/blog preview card
- **ProcessStep** (`components/marketing`) — numbered 01/02/03 process row
- **NavBar** (`components/navigation`) — site header
- **Footer** (`components/navigation`) — site footer

### Intentional additions
None of the above were invented beyond what the live site shows — all eight components have a direct on-site counterpart. No Toast/Dialog/Tooltip/etc were added since the site doesn't use them.

## Content Fundamentals
- **Voice**: calm, confident, understated — never salesy or hyped. Second person ("you," "your holiday") paired with first-person-plural for the studio ("we adapt," "we work quietly in the background").
- **Casing**: Sentence case for headings and body ("Simple process, unforgettable results."); nav items and buttons are Title Case or full caps for pill CTAs ("WHATSAPP", "INSTAGRAM", "Book Now").
- **Sentence rhythm**: short declarative sentences, often two-part with a comma pivot — "Simple process, unforgettable results." / "Your ski holiday, captured like cinema." A recurring pattern: plain statement, comma, blue-accented payoff phrase.
- **No emoji, no exclamation points, no urgency-marketing language** ("limited availability" is stated plainly, not with alarm).
- **Discretion is a repeated theme**: "with discretion and cinematic detail," "we work quietly in the background," "families who value discretion."
- **Micro-copy is factual, not persuasive**: pricing cards state exactly what's included as plain bullet facts, no exclamation, no "amazing"/"stunning" adjectives.
- **CTAs are direct verbs**: "Book Now," "Contact Us," "Enquire Now," never "Get Started" or "Let's go."

## Visual Foundations
- **Backgrounds**: near-black (`#0a0a0a`–`#0d0d0d`) throughout; slightly raised dark panels (`#111`–`#161616`) for cards/nav, distinguished only by a thin border — never a lighter "surface" gray or gradient wash.
- **Photography is the hero**: full-bleed or generously sized ski/mountain/chalet photography in cool, natural light — never warm-graded, never a stock-photo look. B&W is used selectively for a mood section (Private Photography & Filmmaking).
- **Blue accent is used exclusively inside headline copy** to emphasize the key phrase of a sentence via a blue-to-lighter-blue gradient text fill (`captured like cinema`, `unforgettable results`, `secure your date`). It is never a solid UI fill color for large areas.
- **Borders over shadows**: every card, nav bar, and pill uses a 1px low-opacity white border (`rgba(255,255,255,.08–.12)`) instead of a drop shadow. The brand's own internal design QA notes (screenshot provided) explicitly call out removing "outer glow," reducing radius from ~24px to ~16px, keeping "one subtle border," using a flatter (non-glossy, non-beveled) play button, and hiding video controls until hover — this is the literal design philosophy, not an inference.
- **Corner radius**: ~16px standard on cards, images, and panels; pill (999px) on buttons and nav tag chips.
- **Animation**: subtle only — hover brightness shifts on buttons, controls fade in on hover, no bounce/spring easing, no parallax.
- **Hover states**: brightness increase (~12%) on filled buttons; underline or lighten text color on nav links; no color inversion.
- **Press states**: not aggressively demonstrated on-site; treat as a brief brightness/opacity dip, no scale/shrink (consistent with the calm, non-bouncy motion language).
- **Transparency/blur**: none observed — no glassmorphism, no backdrop-blur panels. Kept out per brand direction.
- **Imagery color vibe**: cool blues/grays, natural daylight or blue-hour, occasional warm chalet-interior lighting as a deliberate contrast beat — never a filtered/Instagram look.
- **Layout rhythm**: large vertical whitespace between sections (~64–96px), centered constrained content column (~1280–1440px max width), generous line-height on body copy.
- **Cards**: dark surface, 1px subtle border, 16px radius, no shadow — used for pricing tiers, guide previews, and the CTA banner panel.

## Iconography
- The site uses a **small, functional icon set only**: a WhatsApp glyph (brand icon, inside the green pill button), an Instagram glyph (inside the ghost pill), a globe icon (language selector), a clock icon (read-time meta on guide cards), and simple line arrows (→) for card/link affordances.
- No custom icon font or SVG sprite sheet was found in the provided materials — these are standard platform/brand glyphs (WhatsApp, Instagram) plus plain minimal line icons (clock, arrow, globe, chevron).
- **No emoji are used anywhere on the site.**
- **Substitution flagged**: since no icon SVG/font files were provided, any new icon need (e.g. clock, arrow, chevron) should pull from **Lucide** (CDN: `unpkg.com/lucide@latest`) as the closest-matching thin-stroke, minimal icon set to what's shown on-site. Flag any such addition to the user for confirmation against the real icon asset when available.

## Fonts
- No font files were supplied. The on-site typeface is a clean geometric/grotesque sans very close to **Inter** — substituted here via Google Fonts (`tokens.css` → `styles.css` imports `Inter` weights 400–800). **Please supply the real webfont files (or confirm Inter is acceptable) so this can be corrected if the production site uses a licensed/custom typeface.**

## Logo
- Two logo lockups were supplied (`assets/logo-mark-black.png`, `assets/logo-mark-white.png`): a multicolor (blue/red/gray) shutter-style icon + "COURCHEVEL MEDIA HOUSE" wordmark, on transparent background. `assets/logo-brand-sheet.png` is the supplied brand color reference sheet.
- **Note**: the production site's actual header/footer lockup shown in the live screenshots uses a simpler flat monochrome (white or blue-line) icon + "Courchevel Media" in sans-serif — visibly simpler than the multicolor gradient shutter mark in the uploaded brand files. Both are preserved as supplied; components default to the uploaded white/black mark files. If the flat on-site mark exists as its own asset, please supply it for a closer match.
- The multicolor logo palette (red/gray/blue triad) is reserved for the mark itself and must not be used as a UI accent color — only the brand blue (`--blue-500`/`--blue-600`) is used in interface accents.
