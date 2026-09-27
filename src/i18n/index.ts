/** Languages and helpers. English lives at /, Georgian at /ka/ (astro.config.mjs → i18n). */

export const LANGS = ['en', 'ka'] as const;
export type Lang = (typeof LANGS)[number];

/** A value in every language; TypeScript flags a missing translation. */
export type Localized<T = string> = Readonly<Record<Lang, T>>;

/** Astro.currentLocale is 'ka' under /ka/, otherwise the default. */
export const toLang = (locale: string | undefined): Lang => (locale === 'ka' ? 'ka' : 'en');

/** Case studies with a Georgian file in src/content/case-studies/ka/, found at build time. */
const TRANSLATED_STUDIES = Object.keys(import.meta.glob('../content/case-studies/ka/*.{md,mdx}')).map(
  (file) => `/projects/${file.replace(/^.*\/|\.mdx?$/g, '')}/`,
);

/** Pages that exist in both languages, as English paths. Others are English only for now. */
export const TRANSLATED_PATHS: readonly string[] = ['/', '/about/', '/contact/', ...TRANSLATED_STUDIES];

/** '/about/' → '/ka/about/' for Georgian; English paths stay as they are. */
export const localePath = (lang: Lang, path: string): string => (lang === 'ka' ? `/ka${path}` : path);

/** The English path of any page: '/ka/about/' → '/about/'. */
export const basePath = (pathname: string): string => pathname.replace(/^\/ka(?=\/)/, '') || '/';

/** The page's path in `lang`, or undefined when that version doesn't exist: '/projects/ukarapp/' → '/ka/projects/ukarapp/'. */
export const translatedPath = (lang: Lang, path: string): string | undefined => alternates(path)?.[lang];

/** Both language versions of a page, or undefined when it's English only. */
export function alternates(pathname: string): Localized | undefined {
  const base = basePath(pathname);
  if (!TRANSLATED_PATHS.includes(base)) return undefined;
  return { en: base, ka: localePath('ka', base) };
}
