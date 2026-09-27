/**
 * UKar customer app onboarding wizard, exported from the Figma designs (pre-launch).
 * Only the wizard is shown: the other screens need its context to make sense (Mamuka, 2026-09-27).
 */
import type { ImageMetadata } from 'astro';
import find from '../assets/ukar/onboarding-1-find.png';
import preferences from '../assets/ukar/onboarding-2-preferences.png';
import track from '../assets/ukar/onboarding-3-track.png';

export interface ScreenImage {
  label: string;
  image: ImageMetadata;
  alt: string;
}

/** In wizard order. */
export const UKAR_WIZARD: readonly ScreenImage[] = [
  {
    label: '1 · Find',
    image: find,
    alt: 'UKar onboarding, step 1 of 3: "Find washing centers in minutes. Effortlessly locate nearby washing centers, saving you time and hassle."',
  },
  {
    label: '2 · Preferences',
    image: preferences,
    alt: 'UKar onboarding, step 2 of 3: "Tailor the search to your preferences. Simply input your preferences and criteria to find the perfect washing center that fits your requirements."',
  },
  {
    label: '3 · Track',
    image: track,
    alt: 'UKar onboarding, step 3 of 3: "Track your washing in real-time. Stay updated with real-time tracking of your washing progress."',
  },
];
