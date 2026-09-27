import type { APIRoute } from 'astro';
import { renderMonogramPng } from '../lib/og';

export const GET: APIRoute = async () =>
  new Response(new Uint8Array(await renderMonogramPng(180, { rounded: false })), { headers: { 'Content-Type': 'image/png' } });
