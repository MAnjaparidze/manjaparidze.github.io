import type { APIRoute } from 'astro';
import { renderMonogramSvg } from '../lib/og';

export const GET: APIRoute = async () =>
  new Response(await renderMonogramSvg(), { headers: { 'Content-Type': 'image/svg+xml' } });
