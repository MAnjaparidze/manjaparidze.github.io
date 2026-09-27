import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** One file per case study in src/content/case-studies/: .md, or .mdx when it embeds components. The file name is the URL slug. */
const caseStudies = defineCollection({
  loader: glob({ pattern: '*.{md,mdx}', base: './src/content/case-studies' }),
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
  }),
});

export const collections = { caseStudies };
