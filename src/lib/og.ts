/**
 * Build-time images: social preview cards (1200×630) and the favicon monogram.
 * satori lays out a small element tree and outputs SVG with text as paths; resvg rasterises it to PNG.
 * Colors are the light "Ink" tokens from global.css; fonts are static TTFs of the site's typefaces.
 */
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { Resvg } from '@resvg/resvg-js';
import satori from 'satori';
import { SITE } from './site';

const INK = { ground: '#f6f7f8', surface: '#ffffff', ink: '#111418', muted: '#555d6b', rule: '#d9dde3', accent: '#1f4fd1' };

// Read from the project root: bundled endpoint code can't rely on import.meta.url pointing at src/.
const font = (file: string): Buffer => readFileSync(resolve(process.cwd(), 'src/assets/fonts/og', file));
const FONTS = [
  { name: 'Newsreader', data: font('newsreader-latin-500-normal.ttf'), weight: 500 as const, style: 'normal' as const },
  { name: 'IBM Plex Sans', data: font('ibm-plex-sans-latin-400-normal.ttf'), weight: 400 as const, style: 'normal' as const },
  { name: 'IBM Plex Sans', data: font('ibm-plex-sans-latin-600-normal.ttf'), weight: 600 as const, style: 'normal' as const },
  { name: 'IBM Plex Mono', data: font('ibm-plex-mono-latin-400-normal.ttf'), weight: 400 as const, style: 'normal' as const },
];

type Style = Record<string, string | number>;
interface Node {
  type: string;
  props: { style?: Style; children?: string | Node | (string | Node)[] };
}
const h = (type: string, style: Style, children?: Node['props']['children']): Node => ({
  type,
  props: { style, children },
});

const toPng = (svg: string, width: number): Buffer =>
  new Resvg(svg, { fitTo: { mode: 'width', value: width } }).render().asPng();

export interface OgCard {
  /** Small mono label, e.g. "Case study". */
  label: string;
  /** The page's main line; also the image's alt text. */
  title: string;
}

/** A 1200×630 PNG preview card: label, title, then name, role and domain. */
export async function renderOgCard({ label, title }: OgCard, site: URL): Promise<Buffer> {
  const titleSize = title.length > 70 ? 60 : 72;
  const tree = h(
    'div',
    {
      width: '100%',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      background: INK.ground,
      borderTop: `12px solid ${INK.accent}`,
      padding: '64px 80px 60px',
      fontFamily: 'IBM Plex Sans',
      color: INK.ink,
    },
    [
      h('div', { fontFamily: 'IBM Plex Mono', fontSize: 26, color: INK.muted, letterSpacing: '0.02em' }, label),
      h(
        'div',
        { fontFamily: 'Newsreader', fontSize: titleSize, lineHeight: 1.08, letterSpacing: '-0.02em', maxWidth: 1000 },
        title,
      ),
      h(
        'div',
        {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          borderTop: `2px solid ${INK.rule}`,
          paddingTop: 28,
        },
        [
          h('div', { display: 'flex', flexDirection: 'column', gap: 4 }, [
            h('div', { fontFamily: 'Newsreader', fontSize: 36 }, SITE.name),
            h('div', { fontSize: 24, color: INK.muted }, SITE.jobTitle),
          ]),
          h('div', { fontFamily: 'IBM Plex Mono', fontSize: 24, color: INK.accent }, site.host),
        ],
      ),
    ],
  );
  const svg = await satori(tree as Parameters<typeof satori>[0], { width: 1200, height: 630, fonts: FONTS });
  return toPng(svg, 1200);
}

/**
 * The favicon: a serif "M" on an ink square, as SVG with the text already converted to paths.
 * `rounded: false` for the Apple touch icon, which iOS masks itself (transparent corners would show black).
 */
export async function renderMonogramSvg({ rounded = true }: { rounded?: boolean } = {}): Promise<string> {
  const tree = h(
    'div',
    {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: INK.ink,
      borderRadius: rounded ? 14 : 0,
      color: INK.ground,
      fontFamily: 'Newsreader',
      fontSize: 50,
      paddingBottom: 4,
    },
    'M',
  );
  return satori(tree as Parameters<typeof satori>[0], { width: 64, height: 64, fonts: FONTS });
}

export async function renderMonogramPng(size: number, options?: { rounded?: boolean }): Promise<Buffer> {
  return toPng(await renderMonogramSvg(options), size);
}

/** Wraps one PNG in an .ico container (PNG-in-ICO, supported by every current browser). */
export function pngToIco(png: Buffer, size: number): Buffer {
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: icon
  header.writeUInt16LE(1, 4); // one image
  const entry = Buffer.alloc(16);
  entry.writeUInt8(size >= 256 ? 0 : size, 0); // width (0 = 256)
  entry.writeUInt8(size >= 256 ? 0 : size, 1); // height
  entry.writeUInt16LE(1, 4); // color planes
  entry.writeUInt16LE(32, 6); // bits per pixel
  entry.writeUInt32LE(png.length, 8); // image size
  entry.writeUInt32LE(header.length + entry.length, 12); // image offset
  return Buffer.concat([header, entry, png]);
}

/** Preview cards for pages that aren't case studies, keyed by the slug Base.astro derives from the path. */
export const PAGE_CARDS: Record<string, OgCard> = {
  home: { label: 'Websites · SEO & AEO · Apps', title: 'When customers ask Google or ChatGPT, your business should be the answer.' },
  about: { label: 'About', title: 'Web and mobile developer with a cybersecurity background, focused on search and AI visibility.' },
  contact: { label: 'Contact', title: 'Have an app to ship? Book a call.' },
};

/** "/" → "home", "/projects/ukarapp/" → "projects-ukarapp". */
export const ogSlug = (pathname: string): string => pathname.replace(/^\/|\/$/g, '').replace(/\//g, '-') || 'home';
