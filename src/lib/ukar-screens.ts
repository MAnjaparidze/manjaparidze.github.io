/**
 * UKar customer app screens, exported from the Figma designs (pre-launch).
 * The Rate screen is left out on purpose: its feedback chips still contain placeholder text.
 */
import type { ImageMetadata } from 'astro';
import accepted from '../assets/ukar/accepted.png';
import inProgress from '../assets/ukar/in-progress.png';
import menu from '../assets/ukar/menu.png';
import request from '../assets/ukar/request.png';
import searching from '../assets/ukar/searching.png';

export interface ScreenImage {
  label: string;
  image: ImageMetadata;
  alt: string;
}

export const UKAR_SCREENS = {
  request: {
    label: 'Request',
    image: request,
    alt: "UKar home screen: a map of central Baku, the pickup address, the driver's saved cars, and a choice of wash type and class.",
  },
  searching: {
    label: 'Searching',
    image: searching,
    alt: 'Searching screen: a radar pulse over the map while UKar finds a car wash, with a countdown and a cancel button.',
  },
  accepted: {
    label: 'Accepted',
    image: accepted,
    alt: 'Accepted wash: the route to the car wash, 1.5 km and 9 minutes away, with its rating, the price and a Show route button.',
  },
  inProgress: {
    label: 'In progress',
    image: inProgress,
    alt: 'Washing in progress: a full-screen timer while the car is being washed.',
  },
  menu: {
    label: 'Menu',
    image: menu,
    alt: 'Side menu with account, my cars, washing history, subscription, settings and a Become a Partner button.',
  },
} as const satisfies Record<string, ScreenImage>;
