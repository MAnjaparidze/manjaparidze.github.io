/** schema.org JSON-LD builders (aeo-accessibility skill → Schema.org). */
import { PROFILES, SITE } from './site';

export interface PersonSchema {
  '@context': 'https://schema.org';
  '@type': 'Person';
  name: string;
  jobTitle: string;
  url: string;
  sameAs: string[];
  knowsAbout: string[];
}

export function personSchema(site: URL): PersonSchema {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: SITE.name,
    jobTitle: SITE.jobTitle,
    url: site.href,
    sameAs: PROFILES.map(({ href }) => href),
    knowsAbout: [...SITE.knowsAbout],
  };
}
