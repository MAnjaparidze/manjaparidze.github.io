import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';
import { ui } from '../i18n/ui';
import { PROFILES, SITE } from '../lib/site';

// A short guide for AI tools (https://llmstxt.org). Built from the same data as the pages, so it can't drift:
// the description is SITE's, the case studies come from the collection, and nothing here is written by hand.
// Built at build time so every link follows `site` (SITE_URL) when the domain changes.
export const GET: APIRoute = async ({ site }) => {
  const url = (path: string) => new URL(path, site).href;
  const link = (label: string, path: string, note?: string) => `- [${label}](${url(path)})${note ? `: ${note}` : ''}`;

  const studies = (await getCollection('caseStudies')).sort(
    (a, b) => a.data.datePublished.getTime() - b.data.datePublished.getTime(),
  );
  const english = studies.filter(({ id }) => !id.includes('/'));
  const georgian = studies.filter(({ id }) => id.startsWith('ka/'));

  const lines = [
    `# ${SITE.name}`,
    '',
    `> ${SITE.jobTitle}. ${SITE.description.en}`,
    '',
    '## Pages',
    '',
    link('Home', '/'),
    link(ui('en').nav.about, '/about/'),
    link(ui('en').nav.contact, '/contact/'),
    '',
    '## Case studies',
    '',
    ...english.map(({ id, data }) => link(data.title, `/projects/${id}/`, data.summary)),
    '',
    '## Georgian versions',
    '',
    link(SITE.nameKa, '/ka/'),
    link(ui('ka').nav.about, '/ka/about/'),
    link(ui('ka').nav.contact, '/ka/contact/'),
    ...georgian.map(({ id, data }) => link(data.title, `/ka/projects/${id.slice('ka/'.length)}/`)),
    '',
    '## Profiles',
    '',
    ...PROFILES.map(({ label, href }) => `- [${label}](${href})`),
  ];

  return new Response(`${lines.join('\n')}\n`, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
