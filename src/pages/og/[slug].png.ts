import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { ui } from '../../i18n/ui';
import { PAGE_CARDS, renderOgCard, type OgCard } from '../../lib/og';

/** One preview card per page: the fixed pages, then every case study (so new ones get a card automatically). */
export const getStaticPaths = (async () => {
  const studies = await getCollection('caseStudies');
  return [
    ...Object.entries(PAGE_CARDS).map(([slug, card]) => ({ params: { slug }, props: { card } })),
    // 'coinmania' → projects-coinmania; 'ka/coinmania' → ka-projects-coinmania (matching ogSlug of the page path).
    ...studies.map((study) => {
      const ka = study.id.startsWith('ka/');
      const lang = ka ? ('ka' as const) : ('en' as const);
      return {
        params: { slug: ka ? `ka-projects-${study.id.slice(3)}` : `projects-${study.id}` },
        props: { card: { label: ui(lang).caseStudy.label, title: study.data.title, lang } },
      };
    }),
  ];
}) satisfies GetStaticPaths;

export const GET: APIRoute<{ card: OgCard }> = async ({ props, site }) => {
  const png = await renderOgCard(props.card, site ?? new URL('https://manjaparidze.github.io'));
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
