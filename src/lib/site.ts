/** Site-wide identity and navigation. Templates read from here instead of hard-coding copy. */

export interface Link {
  label: string;
  href: string;
}

export const SITE = {
  name: 'Mamuka Anjaparidze',
  jobTitle: 'Senior React Native & full-stack developer',
  description:
    'Senior React Native and full-stack developer. Payment terminals, crypto apps and booking platforms for iOS and Android.',
  /** The only time-bound fact on the site (PLAN.md → Resume facts: no dates). */
  currently: 'Coinmania',
  /** Person schema knowsAbout. */
  knowsAbout: ['React Native', 'Expo', 'Node.js', 'MongoDB', 'TypeScript', 'Cybersecurity'],
  /** Completed degree only; the NKU MSc is coursework and never claimed (PLAN.md → Resume facts). */
  alumniOf: 'San Diego State University',
} as const;

/** Primary contact actions: hero and footer CTA. */
export const CONTACT = {
  bookingUrl: 'https://calendly.com/m-anjaparidze/30min',
  email: 'anjaparidzemamuka@gmail.com',
} as const;

/** Main navigation. Work points at the homepage section until /projects/ exists (Phase 2). */
export const NAV: readonly Link[] = [
  { label: 'Work', href: '/#work' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

/** Public profiles; also the Person schema's sameAs. */
export const PROFILES: readonly Link[] = [
  { label: 'GitHub', href: 'https://github.com/MAnjaparidze' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/manjaparidze' },
];
