---
version: 'alpha'
name: SeasonsJob Website
description: Visual direction for seasonsjob.it, the B2B website for the SeasonsJob product family dedicated to the hotel sector (settore alberghiero).

colors:
  primary: '#333333'
  brand: '#078660'
  background: '#FFFFFF'
  surface: '#FCFCFA'
  foreground: '#171717'
  night: '#0F1613'
  muted: '#F5F5F5'
  muted-foreground: '#777777'
  border: '#E5E5E5'

typography:
  display:
    fontFamily: 'Merriweather'
    fontWeight: 700
  body:
    fontFamily: 'Source Sans 3'
    fontWeight: 400
  ui:
    fontFamily: 'Source Sans 3'
    fontWeight: 500

rounded:
  default: '0.625rem'
  medium: '0.875rem'
  large: '1rem'
  full: '9999px'

components:
  icons: 'Lucide'
---

# SeasonsJob Website

## Overview

SeasonsJob is a B2B technology brand for the hotel sector (settore alberghiero).

The website should feel:

- reliable
- approachable
- calm
- modern
- clear
- technologically capable without looking overly technical

It should communicate a real company building practical products for the hotel sector (settore alberghiero), not a generic SaaS template or a traditional hotel website.

Prefer clarity, strong typography, whitespace, product visuals, and purposeful motion over decorative UI.

The website is light-first. A single dark section may be used intentionally per page for contrast, but a full dark-mode version is not a design requirement unless explicitly requested.

## Colors

The canonical SeasonsJob brand color is `#078660` (`brand-500`). A small scale of tints and shades (`brand-50` → `brand-700`) is derived from it for tinted backgrounds, borders, and dark-section accents. It only ever provides tints and shades of the same hue.

Use emerald for:

- brand recognition
- links and interactive emphasis
- the italic emphasis phrase inside display headings
- selected visual accents (status dots, ambient glows on dark sections)
- important product relationships

Primary buttons use an off-black tone (`#333333`) rather than emerald. This keeps core calls to action strong, grounded, and clear, while reserving the brand emerald for identity and selective accents.

Body text is ink (`#171717`) on white. Secondary copy uses neutral grays in the `#626765`–`#777777` range.

Most of the website should remain white or neutral. Light sections alternate plain white and `neutral-50`, separated by hairline borders (`neutral-200/80`). The hero uses a warm off-white (`#FCFCFA`) with very faint pastel radial tints.

One dark section per page may be used for contrast (e.g. "Perché SeasonsJob", the closing CTA). It uses a deep, slightly green-tinted near-black (`night` `#0F1613` / `#141816`), elevated cards (`#1C2320` with `white/10` borders), and soft ambient emerald radial glows. Dark sections are accents, not the default canvas.

Do not use large green surfaces simply to make a section feel branded.

The brand color is not a semantic success color.

Avoid introducing arbitrary accent colors. Product-specific accents may be introduced later only as part of an explicit product-family decision.

## Typography

Use Merriweather selectively for identity and major display typography.

Use Source Sans 3 for body copy, navigation, controls, labels, metadata, and most supporting text.

Headings (`h1`–`h3`): Merriweather 700, line-height ~1.15, slight negative tracking (`-0.011em`), `text-wrap: balance`. The hero display is tighter (`-0.045em`) and fluid (`clamp(2.4rem, 3.65vw, 3.65rem)`); section headings scale from `2rem` up to `3.5rem` depending on context.

Signature emphasis: display headings highlight their key phrase with an italic, regular-weight `<em>` in emerald — `brand-700` on light sections, `brand-300` on dark ones. Use at most one emphasized phrase per heading.

Body copy: Source Sans 3, base size `1.0625rem` with line-height `1.6`, measure capped around `65ch`.

Micro-labels (marquee captions, card metadata, scenario tags) may use uppercase `text-xs` with wide tracking in `neutral-400`. This treatment is reserved for tiny metadata.

Merriweather should create recognizable character without making the site feel editorial, traditional, or luxurious.

Prefer strong typographic hierarchy over excessive decorative elements.

## Layout

Use generous whitespace and a clear vertical rhythm.

Content should feel spacious without creating unnecessarily oversized sections.

Standard section rhythm: `max-w-6xl` container, `px-4 sm:px-6` gutters, `py-20 lg:py-24` vertical padding. Sections are separated by hairline bottom borders (`border-neutral-200/80`) and alternate white and `neutral-50` backgrounds, with at most one dark section per page.

Prefer:

- strong section hierarchy
- asymmetric compositions when useful (split showcases, bento grids, tabbed product previews)
- product screenshots and interface fragments
- clear visual relationships between copy and product
- responsive layouts designed intentionally for mobile

Do not default every section to a centered heading followed by three equal cards.

Do not make the marketing site resemble an application dashboard.

## Elevation & Depth

Keep ordinary interface elevation minimal.

Prefer:

1. whitespace
2. subtle surface differences
3. borders
4. shadows only when they communicate layering

Light panels use at most a very soft ambient shadow (`shadow-xs`–`shadow-sm`, e.g. `0 8px 30px rgba(0,0,0,0.04)`).

Dark-section cards are elevated surfaces: `shadow-lg` with a slight hover lift (`-translate-y-0.5`) and a brightening border and background.

Depth may be used more expressively in product presentations, screenshots, animation, or 3D scenes.

Avoid generic glassmorphism as a default visual treatment.

## Shapes

Use moderately soft corners.

Radius scale: `0.625rem` (buttons, inputs, small controls), `0.875rem` (inner panels), `1rem` (cards, showcase containers, product imagery).

Use pill shapes primarily for small badges, tags, or compact controls.

Avoid excessive rounding.

## Components

Use Astro components by default.

Use Vue components only when they provide useful interaction.

shadcn-vue Maia may be used when an existing component meaningfully reduces complexity, but the website does not need to reproduce the application component system everywhere.

Use Lucide consistently for interface icons.

Marketing sections should be composed specifically for their content rather than forced into reusable cards.

Interactive components must preserve the site's static-first architecture.

### Buttons

Shared: `rounded-lg`, `font-medium`, inline-flex with `gap-2`, and a visible keyboard focus ring. Two sizes: `md` (`min-h-11 px-5 text-[0.9375rem]`) everywhere, `lg` (`min-h-12 px-6 text-base`) for the hero and closing CTA.

- **Primary**: Off-black (`#333333`) background with white text and a darker hover state (`#1F1F1F`).
- **Secondary**: White background with a `neutral-300` border and ink text; hover darkens the border and adds a `neutral-50` background.
- **Inverted** (dark sections only): White background with ink text, `neutral-100` hover, and a subtle shadow.
- **Inverted secondary** (dark sections only): Translucent `white/10` background, `white/20` border, white text, `white/20` hover.

### Eyebrows / Section labels

An optional compact label may sit above a heading, but only when it adds
context the heading doesn't already give (category, section name, page
role). Skip it wherever it would just restate the heading.

- **Length**: 1–3 words, sentence case. Never a full sentence or a slogan.
- **Style**: bare text with a small square dot; no pill, border or background.
- **Dot**: `size-1.5 rounded-[2px]`, `bg-brand-500` on light sections, `bg-brand-400` on dark ones.
- **Typography**: Source Sans 3, `text-lg` (1.125rem), `font-normal` (400), `#777777`; `text-neutral-400` on dark sections.
- **Spacing**: `gap-2.5` between dot and text; `mt-4`–`mt-5` between eyebrow and heading.

## Motion

Motion should make the site feel polished and technologically capable.

Established patterns:

- `data-reveal` scroll-driven entrance for section headers (CSS `animation-timeline: view()`, progressive enhancement only)
- a single hero copy entrance (~700ms ease-out)
- ambient loops where they add atmosphere (client marquee, hero starfield), paused off-screen and under reduced motion
- micro-interactions on hover (card lift, link and border color transitions)

Prefer:

- subtle entrance and transition animation
- scroll-linked storytelling where meaningful
- product UI motion
- restrained depth and parallax
- occasional 3D/WebGL experiences when they materially improve the presentation

Motion must support hierarchy or explanation, not exist only as decoration.

Do not make every section animate.

Respect `prefers-reduced-motion`.

Important content and text must remain accessible independently of animation, WebGL, or JavaScript.

## Do's and Don'ts

### Do

- Keep the overall canvas light and neutral.
- Use off-black (`#333333`) for primary buttons.
- Use emerald intentionally.
- Highlight one key phrase per display heading with italic emerald emphasis.
- Use at most one dark "night" section per page, with ambient emerald glows.
- Give content room to breathe.
- Let real products and real hotel sector use cases provide credibility.
- Use Merriweather for selected identity moments.
- Favor custom marketing composition over dashboard-like UI.
- Use animation selectively.
- Keep the visual system coherent across all SeasonsJob products.
- Design mobile layouts intentionally.

### Don't

- Do not make the entire site green.
- Do not use emerald for primary buttons.
- Do not make the site look like a generic SaaS template.
- Do not default to three-card feature grids everywhere.
- Do not turn every content block into a card.
- Do not use heavy shadows throughout the site.
- Do not use gratuitous gradients or glassmorphism.
- Reserve uppercase wide-tracked styling for tiny metadata labels only.
- Do not make each SeasonsJob product look like an independent brand.
- Do not use Three.js where normal HTML, CSS, or motion would work better.
- Do not sacrifice readability or performance for visual effects.
