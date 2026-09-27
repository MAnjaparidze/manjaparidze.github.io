/** schema.org JSON-LD builders (aeo-accessibility skill → Schema.org). */
import type { Lang } from '../i18n';
import { PROFILES, SITE } from './site';

type Context = { '@context': 'https://schema.org' };

export interface PersonSchema {
  '@type': 'Person';
  '@id': string;
  name: string;
  alternateName: string;
  jobTitle: string;
  url: string;
  sameAs: string[];
  knowsAbout: string[];
  alumniOf?: { '@type': 'CollegeOrUniversity'; name: string };
}

export interface ProfilePageSchema extends Context {
  '@type': 'ProfilePage';
  url: string;
  inLanguage: Lang;
  mainEntity: PersonSchema;
}

export interface ContactPageSchema extends Context {
  '@type': 'ContactPage';
  url: string;
  inLanguage: Lang;
  about: { '@id': string };
}

/** One stable id, so every page's schema points at the same Person. */
const personId = (site: URL): string => new URL('#person', site).href;

function person(site: URL): PersonSchema {
  return {
    '@type': 'Person',
    '@id': personId(site),
    name: SITE.name,
    alternateName: SITE.nameKa,
    jobTitle: SITE.jobTitle,
    url: site.href,
    sameAs: PROFILES.map(({ href }) => href),
    knowsAbout: [...SITE.knowsAbout],
  };
}

export function personSchema(site: URL): Context & PersonSchema {
  return { '@context': 'https://schema.org', ...person(site) };
}

export function profilePageSchema(site: URL, page: URL, lang: Lang): ProfilePageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    url: page.href,
    inLanguage: lang,
    mainEntity: { ...person(site), alumniOf: { '@type': 'CollegeOrUniversity', name: SITE.alumniOf } },
  };
}

export function contactPageSchema(site: URL, page: URL, lang: Lang): ContactPageSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    url: page.href,
    inLanguage: lang,
    about: { '@id': personId(site) },
  };
}

export interface TechArticleSchema extends Context {
  '@type': 'TechArticle';
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified: string;
  author: { '@id': string; '@type': 'Person'; name: string };
  about: string[];
  inLanguage: Lang;
}

export interface TechArticleInput {
  headline: string;
  description: string;
  datePublished: Date;
  dateModified: Date;
  about: readonly string[];
  inLanguage: Lang;
}

export function techArticleSchema(site: URL, page: URL, article: TechArticleInput): TechArticleSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.headline,
    description: article.description,
    url: page.href,
    datePublished: article.datePublished.toISOString(),
    dateModified: article.dateModified.toISOString(),
    author: { '@id': personId(site), '@type': 'Person', name: SITE.name },
    about: [...article.about],
    inLanguage: article.inLanguage,
  };
}
