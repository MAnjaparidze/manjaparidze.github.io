/** Homepage "Selected work", in display order (Coinmania first: Mamuka, 2026-09-27). Facts come from PLAN.md → Case Studies; nothing here is invented. */
import {
  BONOAPP_STORE,
  COINMANIA_STORE,
  ELECTRAPAY_STORE,
  UKAR_WIZARD,
  WEB_08GE,
  WEB_ENVITE,
  WEB_TEAMS_MANAGER,
  type ScreenImage,
} from './screens';
import type { Localized } from '../i18n';

export interface WorkFeature {
  /** Stable id: heading anchor now, case study slug later. */
  slug: string;
  title: string;
  /** Mono label above the title: the client, or the project's status. */
  context: Localized;
  description: Localized;
  stack: readonly string[];
  /** Phone screens for the media panel, one frame each; the first one shows on small screens. */
  screens: readonly ScreenImage[];
  /** Public store ratings, shown under the description. Checked by hand; review when refreshing content. */
  rating?: Localized;
  /** Case study URL. Omitted until the page exists, so the homepage never links to a 404. */
  href?: string;
}

export const FEATURED_WORK: readonly WorkFeature[] = [
  {
    slug: 'coinmania',
    title: 'Coinmania',
    context: { en: 'Coinmania · founding engineer', ka: 'Coinmania · დამფუძნებელი ინჟინერი' },
    description: {
      en: 'A crypto wallet and payments app for Georgia. I initiated its architecture and have been its founding engineer since the first week: top contributor and release owner. Live prices stream over a hand-written SignalR client on the native WebSocket, and sessions are bound to the device and signed with biometrics or a PIN. The platform has 150–200k active users across web and mobile.',
      ka: 'კრიპტო საფულე და გადახდების აპლიკაცია საქართველოსთვის. მისი არქიტექტურის ინიციატორი ვიყავი და პირველივე კვირიდან მისი დამფუძნებელი ინჟინერი ვარ: ყველაზე აქტიური კონტრიბუტორი და რელიზებზე პასუხისმგებელი. ფასები რეალურ დროში მოდის ჩემ მიერ დაწერილი SignalR კლიენტით ნატიურ WebSocket-ზე, სესიები კი მოწყობილობაზეა მიბმული და ბიომეტრიით ან PIN-ით დასტურდება. პლატფორმას ვებსა და მობილურზე 150–200 ათასი აქტიური მომხმარებელი ჰყავს.',
    },
    stack: ['React Native', 'TypeScript', 'React Query', 'Zustand', 'SignalR'],
    // App Store (Georgia) 5.0 from 30 ratings; Google Play 4.8. Checked 2026-09-27.
    rating: { en: 'Rated 5.0 on the App Store and 4.8 on Google Play', ka: 'შეფასება: 5.0 App Store-ზე და 4.8 Google Play-ზე' },
    screens: [COINMANIA_STORE[0], COINMANIA_STORE[1], COINMANIA_STORE[3]],
    href: '/projects/coinmania/',
  },
  {
    slug: 'ukarapp',
    title: 'UKar',
    context: { en: 'Co-founder · launching soon', ka: 'თანადამფუძნებელი · მალე გაეშვება' },
    description: {
      en: 'On-demand car wash booking for Azerbaijan, then Georgia. I built all four codebases alone: a Node.js backend that dispatches each request to the closest car wash over Socket.IO, customer and partner apps in React Native, and an admin dashboard.',
      ka: 'ავტორეცხვის მყისიერი დაჯავშნა აზერბაიჯანში, შემდეგ საქართველოში. ოთხივე კოდბაზა მარტომ ავაწყე: Node.js ბექენდი, რომელიც თითოეულ მოთხოვნას Socket.IO-ით უახლოეს სამრეცხაოს უგზავნის, მომხმარებლისა და პარტნიორის აპლიკაციები React Native-ზე და ადმინ პანელი.',
    },
    stack: ['React Native', 'Expo', 'Node.js', 'Socket.IO', 'MongoDB', 'Yandex Maps'],
    screens: UKAR_WIZARD,
    href: '/projects/ukarapp/',
  },
  {
    slug: 'electrapay',
    title: 'ElectraPay + EPay Business',
    context: { en: 'Coinmania', ka: 'Coinmania' },
    description: {
      en: 'A two-sided crypto payment system, built by a team I lead. The merchant terminal shows a QR code; the customer scans it and pays from their balance in the crypto asset they choose, confirmed with an SMS code. The terminal polls for the result, can refund all or part of a payment, and exports reports to PDF and Excel. 15–20 partner merchants, including Dressup.',
      ka: 'ორმხრივი კრიპტო გადახდების სისტემა, რომელსაც ჩემი ხელმძღვანელობით გუნდი ქმნის. სავაჭრო ტერმინალი QR კოდს აჩვენებს; მომხმარებელი მას ასკანერებს და იხდის ბალანსიდან, თავის არჩეულ კრიპტოაქტივში, SMS კოდით დადასტურებით. ტერმინალი შედეგს პერიოდულად ამოწმებს, შეუძლია გადახდის სრულად ან ნაწილობრივ დაბრუნება და ანგარიშების PDF-სა და Excel-ში ექსპორტი. 15–20 პარტნიორი ობიექტი, მათ შორის Dressup.',
    },
    stack: ['React Native', 'TypeScript', 'React Query', 'react-native-vision-camera', 'react-native-keychain'],
    screens: ELECTRAPAY_STORE,
  },
  {
    slug: 'bonoapp',
    title: 'BonoApp',
    context: { en: '2G Dev', ka: '2G Dev' },
    description: {
      en: 'Scan the QR code on a receipt, earn loyalty points. I inherited a legacy codebase and refactored it, moving class components to functions during the Redux 5 upgrade. When the designs and business logic changed too far, I rebuilt the app from scratch. Batching one oversized API call cut first load from 10–15 seconds to 3.',
      ka: 'დაასკანერეთ ჩეკზე QR კოდი და მიიღეთ ლოიალობის ქულები. მემკვიდრეობით მივიღე ძველი კოდბაზა და გადავაკეთე: Redux 5-ზე გადასვლისას კლასის კომპონენტები ფუნქციურზე გადავიტანე. როცა დიზაინი და ბიზნეს ლოგიკა ძალიან შეიცვალა, აპლიკაცია თავიდან ავაწყე. ერთი უზარმაზარი API მოთხოვნის ნაწილებად დაყოფამ პირველი ჩატვირთვა 10–15 წამიდან 3 წამამდე შეამცირა.',
    },
    stack: ['React Native 0.73', 'Expo', 'Redux 5', 'EAS Build'],
    screens: BONOAPP_STORE,
  },
];

export interface WebWork {
  slug: string;
  title: Localized;
  /** Mono label: who it was for, and my part. */
  context: Localized;
  description: Localized;
  stack: readonly string[];
  /** Case study on this site, or the public page that proves it exists. */
  link: { label: Localized; href: string };
  /** Desktop screenshots, with the gallery caption. */
  gallery?: { screens: readonly ScreenImage[]; caption: Localized };
}

/**
 * Homepage "Websites and web apps". Only work with public evidence (live site, store or launch page),
 * checked 2026-09-27. Third-party figures are attributed, never claimed.
 */
export const WEB_WORK: readonly WebWork[] = [
  {
    slug: 'this-site',
    title: { en: 'This site', ka: 'ეს საიტი' },
    context: { en: 'Design, build, SEO and AEO', ka: 'დიზაინი, დეველოპმენტი, SEO და AEO' },
    description: {
      en: 'Built to rank on Google and be cited by AI assistants: Lighthouse 100 in every category, structured data on every page, answer-first content and open doors for AI crawlers. Every claim can be checked with free tools.',
      ka: 'შექმნილია იმისთვის, რომ Google-ში მაღალ პოზიციაზე იყოს და AI ასისტენტებმა ციტირონ: Lighthouse 100 ყველა კატეგორიაში, სტრუქტურირებული მონაცემები ყველა გვერდზე, პასუხზე ორიენტირებული ტექსტი და ღია კარი AI კრაულერებისთვის. ყველა მტკიცების შემოწმება უფასო ხელსაწყოებით შეგიძლიათ.',
    },
    stack: ['Astro', 'TypeScript', 'Tailwind CSS', 'schema.org'],
    link: { label: { en: 'Read how it’s built', ka: 'წაიკითხეთ, როგორ არის აწყობილი' }, href: '/projects/this-site/' },
  },
  {
    slug: '08ge',
    title: { en: '08.ge', ka: '08.ge' },
    context: { en: '08 Group · design and front end', ka: '08 Group · დიზაინი და ფრონტენდი' },
    description: {
      en: 'An information portal for Georgia: events, live currency rates, transport, cinemas and a business directory on a map. I built the front end of its React version, with Google Maps and live currency conversion, then designed the visuals and wrote the full markup of the redesign that’s live today.',
      ka: 'საინფორმაციო პორტალი საქართველოსთვის: ღონისძიებები, ვალუტის კურსები რეალურ დროში, ტრანსპორტი, კინოთეატრები და კომპანიების კატალოგი რუკაზე. ავაწყე მისი React ვერსიის ფრონტენდი Google Maps-ითა და ვალუტის კონვერტაციით, შემდეგ კი შევქმენი დღეს მოქმედი რედიზაინის ვიზუალები და სრული მარკაპი.',
    },
    stack: ['React', 'Google Maps API', 'HTML', 'CSS'],
    link: { label: { en: 'Visit 08.ge', ka: 'გადადით 08.ge-ზე' }, href: 'https://www.08.ge/' },
    gallery: {
      screens: WEB_08GE,
      caption: {
        en: 'The live site: homepage, currency converter and business directory. Visuals and markup by me.',
        ka: 'მოქმედი საიტი: მთავარი გვერდი, ვალუტის კონვერტორი და კომპანიების კატალოგი. ვიზუალები და მარკაპი ჩემია.',
      },
    },
  },
  {
    slug: 'coachnow',
    title: { en: 'CoachNow', ka: 'CoachNow' },
    context: { en: 'Front end, through Malanka', ka: 'ფრონტენდი, Malanka-ს მეშვეობით' },
    description: {
      en: 'A coaching platform that says it’s trusted by over a million coaches and athletes. I rewrote legacy Angular code into React step by step, and built online booking, forms and navigation.',
      ka: 'ქოუჩინგის პლატფორმა, რომელიც, საკუთარი მონაცემებით, მილიონზე მეტ მწვრთნელსა და სპორტსმენს ემსახურება. ძველი Angular კოდი ეტაპობრივად React-ზე გადავწერე და ავაწყე ონლაინ ჯავშნები, ფორმები და ნავიგაცია.',
    },
    stack: ['React', 'Angular', 'Docker'],
    link: { label: { en: 'Visit coachnow.com', ka: 'გადადით coachnow.com-ზე' }, href: 'https://coachnow.com/' },
  },
  {
    slug: 'envite',
    title: { en: 'eNvite', ka: 'eNvite' },
    context: { en: 'Front end, at Webiz', ka: 'ფრონტენდი, Webiz' },
    description: {
      en: 'A social chat plugin for online stores: shoppers invite friends into groups and shop together inside the store. I built the client side and added sharing products into a group. It was Product Hunt’s #7 product of the day.',
      ka: 'სოციალური ჩატის პლაგინი ონლაინ მაღაზიებისთვის: მყიდველები მეგობრებს ჯგუფებში იწვევენ და მაღაზიაშივე ერთად ყიდულობენ. ავაწყე კლიენტის ნაწილი და დავამატე პროდუქტების ჯგუფში გაზიარება. Product Hunt-ზე დღის #7 პროდუქტი გახდა.',
    },
    stack: ['React', 'Redux', 'Firebase', 'Material UI'],
    link: {
      label: { en: 'See it on Product Hunt', ka: 'ნახეთ Product Hunt-ზე' },
      href: 'https://www.producthunt.com/products/envite',
    },
    gallery: {
      screens: WEB_ENVITE,
      caption: {
        en: 'Launch images from Product Hunt: the chat inside a store, with groups, polls, recommendations and invites.',
        ka: 'გაშვების სურათები Product Hunt-იდან: ჩატი მაღაზიის შიგნით, ჯგუფებით, გამოკითხვებით, რეკომენდაციებითა და მოწვევებით.',
      },
    },
  },
  {
    slug: 'teams-manager',
    title: { en: 'Solutions2Share Teams apps', ka: 'Solutions2Share-ის Teams აპლიკაციები' },
    context: { en: 'Front end, at Solutions2Share', ka: 'ფრონტენდი, Solutions2Share' },
    description: {
      en: 'Microsoft Teams governance apps used by companies with 1,000+ employees, such as Volkswagen, Airbus and Yamaha. I co-developed App Manager, Project Manager and External User Manager, and onboarded junior developers.',
      ka: 'Microsoft Teams-ის მართვის აპლიკაციები, რომლებსაც 1000-ზე მეტი თანამშრომლის მქონე კომპანიები იყენებენ, მაგალითად Volkswagen, Airbus და Yamaha. თანაავტორობით შევქმენი App Manager, Project Manager და External User Manager და ახალბედა დეველოპერებს საქმეში შესვლაში ვეხმარებოდი.',
    },
    stack: ['React', 'Microsoft Graph API', 'Azure'],
    link: {
      label: { en: 'Visit Teams Manager', ka: 'გადადით Teams Manager-ზე' },
      href: 'https://www.solutions2share.com/teams-manager',
    },
    gallery: {
      screens: WEB_TEAMS_MANAGER,
      caption: {
        en: 'Teams Manager as it looks today, from solutions2share.com. I worked on earlier versions of its apps.',
        ka: 'Teams Manager დღევანდელი სახით, solutions2share.com-იდან. მე მისი აპლიკაციების ადრინდელ ვერსიებზე ვმუშაობდი.',
      },
    },
  },
];

export interface EarlierWorkGroup {
  domain: Localized;
  /** Rendered joined with " · ". */
  items: Localized<readonly string[]>;
}

/** Homepage "Earlier work": short entries grouped by domain, no dates (PLAN.md → Resume facts). */
export const EARLIER_WORK: readonly EarlierWorkGroup[] = [
  {
    domain: { en: 'Enterprise plugins', ka: 'კორპორატიული პლაგინები' },
    items: {
      en: ['365Apps, a Microsoft Teams calendar and meetings plugin'],
      ka: ['365Apps, Microsoft Teams-ის კალენდრისა და შეხვედრების პლაგინი'],
    },
  },
  { domain: { en: 'Fintech', ka: 'ფინტექი' }, items: { en: ['Kernel Invoicing'], ka: ['Kernel Invoicing'] } },
  {
    domain: { en: 'E-commerce', ka: 'ელ-კომერცია' },
    items: {
      en: ['NFT checkout', 'Webshop, event booking (Next.js)'],
      ka: ['NFT checkout', 'Webshop, ღონისძიებების დაჯავშნა (Next.js)'],
    },
  },
  {
    domain: { en: 'Platforms', ka: 'პლატფორმები' },
    items: {
      en: ['Freedom, debate matchmaking over Socket.io', 'Brandie Dog, Three.js'],
      ka: ['Freedom, დებატების პარტნიორის შერჩევა Socket.io-ით', 'Brandie Dog, Three.js'],
    },
  },
  {
    domain: { en: 'Internal tools', ka: 'შიდა ხელსაწყოები' },
    items: { en: ['Webizpad, solo full-stack', 'HRMS'], ka: ['Webizpad, მარტომ, სრული სტეკით', 'HRMS'] },
  },
  {
    domain: { en: 'Teaching', ka: 'სწავლება' },
    items: { en: ['Lecturer at IT Academy Step'], ka: ['ლექტორი IT Academy Step-ში'] },
  },
];
