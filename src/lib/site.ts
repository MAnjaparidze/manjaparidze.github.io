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
} as const;

/** Main navigation. /projects/, /about/ and /contact/ are built in Phase 2. */
export const NAV: readonly Link[] = [
  { label: 'Work', href: '/projects/' },
  { label: 'About', href: '/about/' },
  { label: 'Contact', href: '/contact/' },
];

/** Public profiles; also the Person schema's sameAs. */
export const PROFILES: readonly Link[] = [
  { label: 'GitHub', href: 'https://github.com/MAnjaparidze' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/manjaparidze' },
];
