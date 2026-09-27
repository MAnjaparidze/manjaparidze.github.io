/** Homepage "Selected work", in display order (Coinmania first: Mamuka, 2026-09-27). Facts come from PLAN.md → Case Studies; nothing here is invented. */
import { BONOAPP_STORE, COINMANIA_STORE, ELECTRAPAY_STORE, UKAR_WIZARD, type ScreenImage } from './screens';

export interface WorkFeature {
  /** Stable id: heading anchor now, case study slug later. */
  slug: string;
  title: string;
  /** Mono label above the title: the client, or the project's status. */
  context: string;
  description: string;
  stack: readonly string[];
  /** Phone screens for the media panel, one frame each; the first one shows on small screens. */
  screens: readonly ScreenImage[];
  /** Public store ratings, shown under the description. Checked by hand; review when refreshing content. */
  rating?: string;
  /** Case study URL. Omitted until the page exists, so the homepage never links to a 404. */
  href?: string;
}

export const FEATURED_WORK: readonly WorkFeature[] = [
  {
    slug: 'coinmania',
    title: 'Coinmania',
    context: 'Coinmania · founding engineer',
    description:
      'A crypto wallet and payments app for Georgia. I initiated its architecture and have been its founding engineer since the first week: top contributor and release owner. Live prices stream over a hand-written SignalR client on the native WebSocket, and sessions are bound to the device and signed with biometrics or a PIN. The platform has 150–200k active users across web and mobile.',
    stack: ['React Native', 'TypeScript', 'React Query', 'Zustand', 'SignalR'],
    // App Store (Georgia) 5.0 from 30 ratings; Google Play 4.8. Checked 2026-09-27.
    rating: 'Rated 5.0 on the App Store and 4.8 on Google Play',
    screens: [COINMANIA_STORE[0], COINMANIA_STORE[1], COINMANIA_STORE[3]],
    href: '/projects/coinmania/',
  },
  {
    slug: 'ukarapp',
    title: 'UKar',
    context: 'Co-founder · launching soon',
    description:
      'On-demand car wash booking for Azerbaijan, then Georgia. I built all four codebases alone: a Node.js backend that dispatches each request to the closest car wash over Socket.IO, customer and partner apps in React Native, and an admin dashboard.',
    stack: ['React Native', 'Expo', 'Node.js', 'Socket.IO', 'MongoDB', 'Yandex Maps'],
    screens: UKAR_WIZARD,
    href: '/projects/ukarapp/',
  },
  {
    slug: 'electrapay',
    title: 'ElectraPay + EPay Business',
    context: 'Coinmania',
    description:
      'A two-sided crypto payment system, built by a team I lead. The merchant terminal shows a QR code; the customer scans it and pays from their balance in the crypto asset they choose, confirmed with an SMS code. The terminal polls for the result, can refund all or part of a payment, and exports reports to PDF and Excel. 15–20 partner merchants, including Dressup.',
    stack: ['React Native', 'TypeScript', 'React Query', 'react-native-vision-camera', 'react-native-keychain'],
    screens: ELECTRAPAY_STORE,
  },
  {
    slug: 'bonoapp',
    title: 'BonoApp',
    context: '2G Dev',
    description:
      'Scan the QR code on a receipt, earn loyalty points. I inherited a legacy codebase and refactored it, moving class components to functions during the Redux 5 upgrade. When the designs and business logic changed too far, I rebuilt the app from scratch. Batching one oversized API call cut first load from 10–15 seconds to 3.',
    stack: ['React Native 0.73', 'Expo', 'Redux 5', 'EAS Build'],
    screens: BONOAPP_STORE,
  },
];

export interface WebWork {
  slug: string;
  title: string;
  /** Mono label: who it was for, and my part. */
  context: string;
  description: string;
  stack: readonly string[];
  /** Case study on this site, or the public page that proves it exists. */
  link: { label: string; href: string };
}

/**
 * Homepage "Websites and web apps". Only work with public evidence (live site, store or launch page),
 * checked 2026-09-27. Third-party figures are attributed, never claimed.
 */
export const WEB_WORK: readonly WebWork[] = [
  {
    slug: 'this-site',
    title: 'This site',
    context: 'Design, build, SEO and AEO',
    description:
      'Built to rank on Google and be cited by AI assistants: Lighthouse 100 in every category, structured data on every page, answer-first content and open doors for AI crawlers. Every claim can be checked with free tools.',
    stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'schema.org'],
    link: { label: 'Read how it’s built', href: '/projects/this-site/' },
  },
  {
    slug: '08ge',
    title: '08.ge',
    context: '08 Group · design and front end',
    description:
      'An information portal for Georgia: events, live currency rates, transport, cinemas and a business directory on a map. I built the front end of its React version, with Google Maps and live currency conversion, then designed the visuals and wrote the full markup of the redesign that’s live today.',
    stack: ['React', 'Google Maps API', 'HTML', 'CSS'],
    link: { label: 'Visit 08.ge', href: 'https://www.08.ge/' },
  },
  {
    slug: 'coachnow',
    title: 'CoachNow',
    context: 'Front end, through Malanka',
    description:
      'A coaching platform that says it’s trusted by over a million coaches and athletes. I rewrote legacy Angular code into React step by step, and built online booking, forms and navigation.',
    stack: ['React', 'Angular', 'Docker'],
    link: { label: 'Visit coachnow.com', href: 'https://coachnow.com/' },
  },
  {
    slug: 'envite',
    title: 'eNvite',
    context: 'Front end, at Webiz',
    description:
      'A social chat plugin for online stores: shoppers invite friends into groups and shop together inside the store. I built the client side and added sharing products into a group. It was Product Hunt’s #7 product of the day.',
    stack: ['React', 'Redux', 'Firebase', 'Material UI'],
    link: { label: 'See it on Product Hunt', href: 'https://www.producthunt.com/products/envite' },
  },
  {
    slug: 'teams-manager',
    title: 'Solutions2Share Teams apps',
    context: 'Front end, at Solutions2Share',
    description:
      'Microsoft Teams governance apps used by companies with 1,000+ employees, such as Volkswagen, Airbus and Yamaha. I co-developed App Manager, Project Manager and External User Manager, and onboarded junior developers.',
    stack: ['React', 'Microsoft Graph API', 'Azure'],
    link: { label: 'Visit Teams Manager', href: 'https://www.solutions2share.com/teams-manager' },
  },
];

export interface EarlierWorkGroup {
  domain: string;
  /** Rendered joined with " · ". */
  items: readonly string[];
}

/** Homepage "Earlier work": short entries grouped by domain, no dates (PLAN.md → Resume facts). */
export const EARLIER_WORK: readonly EarlierWorkGroup[] = [
  { domain: 'Enterprise plugins', items: ['365Apps, a Microsoft Teams calendar and meetings plugin'] },
  { domain: 'Fintech', items: ['Kernel Invoicing'] },
  { domain: 'E-commerce', items: ['NFT checkout', 'Webshop, event booking (Next.js)'] },
  {
    domain: 'Platforms',
    items: [
      'Freedom, debate matchmaking over Socket.io',
      'Brandie Dog, Three.js',
    ],
  },
  { domain: 'Internal tools', items: ['Webizpad, solo full-stack', 'HRMS'] },
  { domain: 'Teaching', items: ['Lecturer at IT Academy Step'] },
];
