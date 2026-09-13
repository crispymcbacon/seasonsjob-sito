# AGENTS.md

## Project

SeasonsJob corporate website for `seasonsjob.it`.

The site is B2B, focused on the settore alberghiero, static-first, SEO-oriented, and performance-sensitive.

## Stack

- Astro
- TypeScript
- Tailwind CSS
- Vue only for interactive islands
- pnpm

Prefer Astro components for static content. Do not introduce client-side JavaScript when it is not necessary.

## Design

When working on UI, layout, typography, branding, visual styling, or motion, read `DESIGN.md` before making design decisions.

Do not invent new visual conventions that conflict with it.

## Development

- Keep implementations simple and maintainable.
- Avoid unnecessary dependencies and abstractions.
- Preserve the static-first architecture.
- Use Vue only when meaningful client-side interaction is required.
- Do not add GSAP, Three.js, TresJS, or similar libraries unless the task actually requires them.
- Do not invent final marketing copy unless explicitly asked.

## Validation

Before finishing code changes, run the relevant checks:

```bash
pnpm check
pnpm lint
pnpm format:check
pnpm build
```

Fix failures caused by your changes before finishing.

## Git

Do not push, rewrite history, or modify unrelated work unless explicitly requested.
