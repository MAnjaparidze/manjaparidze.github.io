import type { APIRoute } from 'astro';
import { pngToIco, renderMonogramPng } from '../lib/og';

// Browsers and crawlers still request /favicon.ico directly.
export const GET: APIRoute = async () =>
  new Response(new Uint8Array(pngToIco(await renderMonogramPng(32), 32)), {
    headers: { 'Content-Type': 'image/x-icon' },
  });
