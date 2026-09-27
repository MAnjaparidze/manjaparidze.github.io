/** Project screens shown in homepage phone frames and case study galleries. */
import type { ImageMetadata } from 'astro';
import storeBuySell from '../assets/coinmania/store-buy-sell.png';
import storePrices from '../assets/coinmania/store-prices.png';
import storeSecurity from '../assets/coinmania/store-security.png';
import storeSendReceive from '../assets/coinmania/store-send-receive.png';
import find from '../assets/ukar/onboarding-1-find.png';
import preferences from '../assets/ukar/onboarding-2-preferences.png';
import track from '../assets/ukar/onboarding-3-track.png';

export interface ScreenImage {
  label: string;
  image: ImageMetadata;
  alt: string;
  /** Artwork that already contains a phone (store screenshots): shown without the site's phone bezel. */
  bare?: boolean;
}

/**
 * UKar customer app onboarding wizard, exported from the Figma designs (pre-launch), in wizard order.
 * Only the wizard is shown: the other screens need its context to make sense (Mamuka, 2026-09-27).
 */
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

/** Coinmania App Store screenshots (public marketing artwork, © Coinmania), in store order. */
export const COINMANIA_STORE: readonly ScreenImage[] = [
  {
    label: 'Prices',
    image: storePrices,
    alt: 'Coinmania App Store screenshot, "Leading Cryptos, Clearly Organized": the All Cryptos list with live prices in lari, daily changes and favourites.',
    bare: true,
  },
  {
    label: 'Buy and sell',
    image: storeBuySell,
    alt: 'Coinmania App Store screenshot, "Buy & Sell": converting lari to Bitcoin, with both balances and the exchange rate.',
    bare: true,
  },
  {
    label: 'Send and receive',
    image: storeSendReceive,
    alt: 'Coinmania App Store screenshot, "Send & Receive": a withdrawal to the blockchain with asset, network, address and amount.',
    bare: true,
  },
  {
    label: 'Security',
    image: storeSecurity,
    alt: 'Coinmania App Store screenshot, "Enhanced Wallet Security": extra protection by SMS, email or Google Authenticator.',
    bare: true,
  },
];
