/** Site-wide identity. Templates read from here instead of hard-coding copy; interface text is in src/i18n/ui.ts. */
import type { Localized } from '../i18n';

export interface Link {
  label: string;
  href: string;
}

export const SITE = {
  name: 'Mamuka Anjaparidze',
  /** The name in Georgian script; Person schema alternateName, so searches in either script match. */
  nameKa: 'მამუკა ანჯაფარიძე',
  jobTitle: 'Senior web & mobile developer, SEO and AEO',
  description: {
    en: 'Websites, SEO and AEO, and mobile apps for e-commerce and growing companies, so that when customers ask Google or ChatGPT, your business is the answer.',
    ka: 'ვებსაიტები, SEO და AEO და მობილური აპლიკაციები ელ-კომერციისა და მზარდი კომპანიებისთვის, რომ როცა მომხმარებელი Google-ს ან ChatGPT-ს ეკითხება, პასუხი თქვენი ბიზნესი იყოს.',
  } satisfies Localized,
  /** The only time-bound fact on the site (PLAN.md → Resume facts: no dates). */
  currently: 'Coinmania',
  /** Person schema knowsAbout. */
  knowsAbout: [
    'Search engine optimization',
    'Answer engine optimization',
    'Web development',
    'React',
    'Next.js',
    'Astro',
    'React Native',
    'Node.js',
    'TypeScript',
    'Cybersecurity',
  ],
  /** Completed degree only; the NKU MSc is coursework and never claimed (PLAN.md → Resume facts). */
  alumniOf: 'San Diego State University',
} as const;

/** Primary contact actions: hero and footer CTA. */
export const CONTACT = {
  bookingUrl: 'https://calendly.com/m-anjaparidze/30min',
  email: 'anjaparidzemamuka@gmail.com',
} as const;

/** The Toptal profile, also linked from About's background section. */
export const TOPTAL_URL = 'https://www.toptal.com/developers/resume/mamuka-anjaparidze';

/** Public profiles; also the Person schema's sameAs. */
export const PROFILES: readonly Link[] = [
  { label: 'GitHub', href: 'https://github.com/MAnjaparidze' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/manjaparidze' },
  // Added 2026-09-28, once the profile stopped claiming a Master's degree (PLAN.md → Toptal).
  { label: 'Toptal', href: TOPTAL_URL },
];
