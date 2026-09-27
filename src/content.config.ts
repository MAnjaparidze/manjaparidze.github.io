import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * One file per case study in src/content/case-studies/: .md, or .mdx when it embeds components. The file name is the
 * URL slug. Georgian versions live in the ka/ subfolder under the same name (id 'ka/<slug>').
 */
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/case-studies' }),
  schema: z.object({
    /** Page h1 and TechArticle headline. */
    title: z.string(),
    /** One-sentence answer to "what is it?": the lead paragraph and meta description. */
    summary: z.string(),
    role: z.string(),
    stack: z.array(z.string()).min(1),
    status: z.string(),
    /** TechArticle `about`. */
    topics: z.array(z.string()).min(1),
    datePublished: z.coerce.date(),
    /** Public links: store listings, the product site. */
    links: z.array(z.object({ label: z.string(), href: z.url() })).default([]),
  }),
});

export const collections = { caseStudies };
