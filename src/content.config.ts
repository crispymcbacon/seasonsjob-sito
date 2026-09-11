import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * `casi-reali` — future case-study content.
 * Intentionally minimal: markdown files with title + summary for now.
 * The schema will grow (industry, product, results…) once the first real
 * case studies are written.
 */
const casiReali = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/casi-reali' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
  }),
});

export const collections = { 'casi-reali': casiReali };
