/** The portrait: shown on About, and the Person schema's `image`. One source file, optimised by Astro at build time. */
import { getImage } from 'astro:assets';
import portrait from '../assets/mamuka-anjaparidze.webp';

export { portrait };

/** Absolute URL of the optimised portrait, for schema.org (which wants a crawlable image URL, not a path). */
export async function portraitUrl(site: URL): Promise<string> {
  const { src } = await getImage({ src: portrait, width: portrait.width, format: 'webp' });
  return new URL(src, site).href;
}
