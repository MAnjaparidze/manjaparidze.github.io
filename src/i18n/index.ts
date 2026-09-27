/** Languages and helpers. English lives at /, Georgian at /ka/ (astro.config.mjs → i18n). */

export const LANGS = ['en', 'ka'] as const;
export type Lang = (typeof LANGS)[number];

/** A value in every language; TypeScript flags a missing translation. */
export type Localized<T = string> = Readonly<Record<Lang, T>>;

/** Astro.currentLocale is 'ka' under /ka/, otherwise the default. */
export const toLang = (locale: string | undefined): Lang => (locale === 'ka' ? 'ka' : 'en');

/** Pages that exist in both languages, as English paths. Others are English only for now. */
export const TRANSLATED_PATHS = ['/', '/about/', '/contact/'] as const;

/** '/about/' → '/ka/about/' for Georgian; English paths stay as they are. */
export const localePath = (lang: Lang, path: string): string => (lang === 'ka' ? `/ka${path}` : path);

/** The English path of any page: '/ka/about/' → '/about/'. */
export const basePath = (pathname: string): string => pathname.replace(/^\/ka(?=\/)/, '') || '/';

/** Both language versions of a page, or undefined when it's English only. */
export function alternates(pathname: string): Localized | undefined {
  const base = basePath(pathname);
  if (!(TRANSLATED_PATHS as readonly string[]).includes(base)) return undefined;
  return { en: base, ka: localePath('ka', base) };
}
