---
version: "alpha"
name: SeasonsJob Website
description: Visual direction for seasonsjob.it, the B2B hospitality website for the SeasonsJob product family.

colors:
  primary: "#078660"
  background: "#FFFFFF"
  foreground: "#171717"
  muted: "#F5F5F5"
  muted-foreground: "#737373"
  border: "#E5E5E5"

typography:
  display:
    fontFamily: "Merriweather"
    fontWeight: 700
  body:
    fontFamily: "Source Sans 3"
    fontWeight: 400
  ui:
    fontFamily: "Source Sans 3"
    fontWeight: 500

rounded:
  default: "0.625rem"
  large: "1rem"
  full: "9999px"

components:
  icons: "Lucide"
---

# SeasonsJob Website

## Overview

SeasonsJob is a B2B hospitality technology brand.

The website should feel:

- reliable
- approachable
- calm
- modern
- clear
- technologically capable without looking overly technical

It should communicate a real company building practical products for hospitality, not a generic SaaS template or a traditional hotel website.

Prefer clarity, strong typography, whitespace, product visuals, and purposeful motion over decorative UI.

The website is light-first. Dark sections may be used intentionally for contrast, but a full dark-mode version is not a design requirement unless explicitly requested.

## Colors

The canonical SeasonsJob brand color is `#078660`.

Use emerald for:

- brand recognition
- primary actions
- links and interactive emphasis
- selected visual accents
- important product relationships

Most of the website should remain white or neutral.

Do not use large green surfaces simply to make a section feel branded.

The brand color is not a semantic success color.

Avoid introducing arbitrary accent colors. Product-specific accents may be introduced later only as part of an explicit product-family decision.

## Typography

Use Merriweather selectively for identity and major display typography.

Use Source Sans 3 for body copy, navigation, controls, labels, metadata, and most supporting text.

Merriweather should create recognizable character without making the site feel editorial, traditional, or luxurious.

Prefer strong typographic hierarchy over excessive decorative elements.

## Layout

Use generous whitespace and a clear vertical rhythm.

Content should feel spacious without creating unnecessarily oversized sections.

Prefer:

- strong section hierarchy
- asymmetric compositions when useful
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

Depth may be used more expressively in product presentations, screenshots, animation, or 3D scenes.

Avoid generic glassmorphism as a default visual treatment.

## Shapes

Use moderately soft corners.

Default radius: `0.625rem`.

Larger visual containers and product imagery may use slightly larger radii.

Use pill shapes primarily for small badges, tags, or compact controls.

Avoid excessive rounding.

## Components

Use Astro components by default.

Use Vue components only when they provide useful interaction.

shadcn-vue Maia may be used when an existing component meaningfully reduces complexity, but the website does not need to reproduce the application component system everywhere.

Use Lucide consistently for interface icons.

Marketing sections should be composed specifically for their content rather than forced into reusable cards.

Interactive components must preserve the site's static-first architecture.

## Motion

Motion should make the site feel polished and technologically capable.

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
- Use emerald intentionally.
- Give content room to breathe.
- Let real products and real hospitality use cases provide credibility.
- Use Merriweather for selected identity moments.
- Favor custom marketing composition over dashboard-like UI.
- Use animation selectively.
- Keep the visual system coherent across all SeasonsJob products.
- Design mobile layouts intentionally.

### Don't

- Do not make the entire site green.
- Do not make the site look like a generic SaaS template.
- Do not default to three-card feature grids everywhere.
- Do not turn every content block into a card.
- Do not use heavy shadows throughout the site.
- Do not use gratuitous gradients or glassmorphism.
- Do not make each SeasonsJob product look like an independent brand.
- Do not use Three.js where normal HTML, CSS, or motion would work better.
- Do not sacrifice readability or performance for visual effects.
