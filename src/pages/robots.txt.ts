import type { APIRoute } from 'astro';

// AI crawlers are named explicitly: many hosts and CDNs block them by default, and an
// explicit Allow keeps the site visible to training, search indexing and user-triggered fetches.
const aiCrawlers = [
  // Training
  'GPTBot',
  'ClaudeBot',
  'Google-Extended',
  // Search indexing
  'OAI-SearchBot',
  'Claude-SearchBot',
  'PerplexityBot',
  // User-triggered fetches
  'ChatGPT-User',
  'Claude-User',
  'Perplexity-User',
];

// Built at build time so the Sitemap line follows `site` (SITE_URL) when the domain changes.
export const GET: APIRoute = ({ site }) => {
  const groups = ['*', ...aiCrawlers].map((agent) => `User-agent: ${agent}\nAllow: /`);
  const sitemap = new URL('sitemap-index.xml', site).href;

  return new Response(`${groups.join('\n\n')}\n\nSitemap: ${sitemap}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
