/** Homepage "Selected work". Facts come from PLAN.md → Case Studies; nothing here is invented. */

export interface WorkFeature {
  /** Stable id: heading anchor now, case study slug later. */
  slug: string;
  title: string;
  /** Mono label above the title: the client, or the project's status. */
  context: string;
  description: string;
  stack: readonly string[];
  /** Phone screens for the media panel, one frame each. Recordings replace the labels when they arrive. */
  screens: readonly string[];
  /** Case study URL. Omitted until the page exists, so the homepage never links to a 404. */
  href?: string;
}

export const FEATURED_WORK: readonly WorkFeature[] = [
  {
    slug: 'ukarapp',
    title: 'UKarApp',
    context: 'Launching soon',
    description:
      'Car wash booking in Baku. The map SDK needed native work on both platforms: Swift AppDelegate injection on iOS, Kotlin 2.1 type-compatibility patching on Android.',
    stack: ['React Native', 'Expo SDK 55', 'Yandex Maps', 'Node.js', 'MongoDB', 'EAS Build'],
    screens: ['map', 'booking', 'confirmation'],
  },
  {
    slug: 'electrapay',
    title: 'ElectraPay + EPay Business',
    context: 'Coinmania',
    description:
      'A two-sided crypto payment system. The merchant terminal shows a QR code, the customer app scans it and pays. Terminal reports export to PDF and Excel. Used in retail, including Dressup.',
    stack: ['[MAMUKA: stack]'],
    screens: ['terminal QR', 'customer scan', 'terminal report'],
  },
  {
    slug: 'coinmania',
    title: 'Coinmania',
    context: 'Coinmania',
    description: 'A crypto portfolio app with live prices over WebSockets from the Binance API. Built from the boilerplate up.',
    stack: ['WebSockets', 'Binance API', '[MAMUKA: rest of stack]'],
    screens: ['portfolio', 'live prices', 'asset detail'],
  },
  {
    slug: 'bonoapp',
    title: 'BonoApp',
    context: '2G Dev',
    description: 'Scan the QR code on a receipt, earn loyalty points. [MAMUKA: one more sentence on the hard part]',
    stack: ['Expo', 'EAS Build', '[MAMUKA: rest of stack]'],
    screens: ['receipt scan', 'points', 'rewards'],
  },
];

export interface EarlierWorkGroup {
  domain: string;
  /** Rendered joined with " · ". */
  items: readonly string[];
}

/** Homepage "Earlier work": short entries grouped by domain, no dates (PLAN.md → Resume facts). */
export const EARLIER_WORK: readonly EarlierWorkGroup[] = [
  {
    domain: 'Enterprise plugins',
    items: ['Solutions2Share Teams plugins, used by 1000+ companies including Volkswagen, Airbus and Yamaha', '365Apps'],
  },
  { domain: 'Fintech', items: ['Kernel Invoicing'] },
  { domain: 'E-commerce', items: ['eNvite', 'NFT checkout', 'Webshop (Next.js)'] },
  {
    domain: 'Platforms',
    items: [
      'Freedom, debate matchmaking over Socket.io',
      'CoachNow, Angular to React migration',
      'Brandie Dog, Three.js',
    ],
  },
  { domain: 'Internal tools', items: ['Webizpad, solo full-stack', 'HRMS'] },
  { domain: 'Info sites', items: ['08.ge'] },
  { domain: 'Teaching', items: ['Lecturer at IT Academy Step'] },
];
