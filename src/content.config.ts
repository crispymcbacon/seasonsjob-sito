import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

/**
 * `casi-reali` — case studies from real structures.
 * Each markdown file is one case: the frontmatter carries the showcase data
 * used by the summary page, the body tells the story on the detail page.
 */
const casiReali = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/casi-reali' }),
  schema: z.object({
    /** Scenario title, e.g. "Comande digitali per il servizio di sala". */
    title: z.string(),
    /** Short narrative used on cards and as meta description. */
    summary: z.string(),
    /** Structure name(s), e.g. "Hotel Palace & Hotel Danieli". */
    facility: z.string(),
    /** Short descriptor: stars, location, departments involved. */
    facilityType: z.string(),
    logo: z.string(),
    logoAlt: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    imageWidth: z.number(),
    imageHeight: z.number(),
    /** Product-area badge, e.g. "Comande & Sala". */
    badge: z.string(),
    /** Key operational result, one line. */
    impact: z.string(),
    /** SeasonsJob modules involved. */
    modules: z.array(z.string()),
    /** Key figures shown in the stats band. */
    stats: z
      .array(z.object({ value: z.string(), label: z.string() }))
      .default([]),
    /** Day-in-the-life workflow steps rendered after the story body. */
    steps: z
      .array(z.object({ title: z.string(), text: z.string() }))
      .default([]),
    /** Testimonial quote. */
    quote: z.string().default(''),
    quoteAuthor: z.string().default(''),
    quoteRole: z.string().default(''),
    /** Sort order on the summary page. */
    order: z.number().default(0),
  }),
});

export const collections = { 'casi-reali': casiReali };
