import type { APIRoute, GetStaticPaths } from 'astro';
import { getCollection } from 'astro:content';
import { PAGE_CARDS, renderOgCard, type OgCard } from '../../lib/og';

/** One preview card per page: the fixed pages, then every case study (so new ones get a card automatically). */
export const getStaticPaths = (async () => {
  const studies = await getCollection('caseStudies');
  return [
    ...Object.entries(PAGE_CARDS).map(([slug, card]) => ({ params: { slug }, props: { card } })),
    ...studies.map((study) => ({
      params: { slug: `projects-${study.id}` },
      props: { card: { label: 'Case study', title: study.data.title, lang: 'en' as const } },
    })),
  ];
}) satisfies GetStaticPaths;

export const GET: APIRoute<{ card: OgCard }> = async ({ props, site }) => {
  const png = await renderOgCard(props.card, site ?? new URL('https://manjaparidze.github.io'));
  return new Response(new Uint8Array(png), { headers: { 'Content-Type': 'image/png' } });
};
