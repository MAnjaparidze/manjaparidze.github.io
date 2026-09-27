/** Project screens shown in homepage phone frames and case study galleries. */
import type { ImageMetadata } from 'astro';
import bonoCollect from '../assets/bonoapp/store-collect.png';
import bonoCombine from '../assets/bonoapp/store-combine.png';
import bonoSpend from '../assets/bonoapp/store-spend.png';
import storeBuySell from '../assets/coinmania/store-buy-sell.png';
import storePrices from '../assets/coinmania/store-prices.png';
import storeSecurity from '../assets/coinmania/store-security.png';
import storeSendReceive from '../assets/coinmania/store-send-receive.png';
import epInvoice from '../assets/electrapay/store-invoice.png';
import epPaid from '../assets/electrapay/store-paid.png';
import epQr from '../assets/electrapay/store-qr.png';
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

/** ElectraPay Business App Store screenshots (public artwork, © Electra Pay LLC; UI in Georgian), in flow order. */
export const ELECTRAPAY_STORE: readonly ScreenImage[] = [
  {
    label: 'Issue an invoice',
    image: epInvoice,
    alt: 'ElectraPay Business App Store screenshot, in Georgian: "Enter the amount and purpose, and issue an invoice", with terminal #17 set to 1000 lari.',
    bare: true,
  },
  {
    label: 'Pay by QR',
    image: epQr,
    alt: 'ElectraPay Business App Store screenshot, in Georgian: "Get paid by QR code, with crypto conversion", showing the terminal QR code and the customer app scanning it.',
    bare: true,
  },
  {
    label: 'Paid',
    image: epPaid,
    alt: 'ElectraPay Business App Store screenshot, in Georgian: "Invoice paid!", with the invoice details, its QR code and the paid status.',
    bare: true,
  },
];

/** BonoApp App Store screenshots (public artwork, © Digital Systems, LLC; UI in Georgian): collect, combine, spend. */
export const BONOAPP_STORE: readonly ScreenImage[] = [
  {
    label: 'Collect',
    image: bonoCollect,
    alt: 'BonoApp App Store screenshot, in Georgian: "Collect", a product page pricing a smartwatch at 109 points.',
    bare: true,
  },
  {
    label: 'Combine',
    image: bonoCombine,
    alt: 'BonoApp App Store screenshot, in Georgian: "Combine", points from partner merchants merged into one balance of 950 points.',
    bare: true,
  },
  {
    label: 'Spend',
    image: bonoSpend,
    alt: 'BonoApp App Store screenshot, in Georgian: "Spend", a checkout paying for products with points.',
    bare: true,
  },
];
