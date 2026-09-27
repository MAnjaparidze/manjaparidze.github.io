/** Project screens shown in homepage phone frames and case study galleries. */
import type { ImageMetadata } from 'astro';
import type { Localized } from '../i18n';
import bonoCollect from '../assets/bonoapp/store-collect.png';
import bonoCombine from '../assets/bonoapp/store-combine.png';
import bonoSpend from '../assets/bonoapp/store-spend.png';
import enviteEvents from '../assets/envite/events-and-recommendations.png';
import enviteFollowers from '../assets/envite/followers-and-chats.png';
import enviteGroups from '../assets/envite/groups-and-polls.png';
import enviteLogin from '../assets/envite/login-and-invites.png';
import teamsDashboard from '../assets/teams-manager/dashboard.png';
import teamsRequest from '../assets/teams-manager/new-request.png';
import web08Currency from '../assets/08ge/currency.png';
import web08Home from '../assets/08ge/home.png';
import web08Organizations from '../assets/08ge/organizations.png';
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
  label: Localized;
  image: ImageMetadata;
  alt: Localized;
  /** Artwork that already contains a phone (store screenshots): shown without the site's phone bezel. */
  bare?: boolean;
}

/**
 * UKar customer app onboarding wizard, exported from the Figma designs (pre-launch), in wizard order.
 * Only the wizard is shown: the other screens need its context to make sense (Mamuka, 2026-09-27).
 */
export const UKAR_WIZARD: readonly ScreenImage[] = [
  {
    label: { en: '1 · Find', ka: '1 · ძიება' },
    image: find,
    alt: {
      en: 'UKar onboarding, step 1 of 3: "Find washing centers in minutes. Effortlessly locate nearby washing centers, saving you time and hassle."',
      ka: 'UKar-ის ონბორდინგი, ნაბიჯი 1 სამიდან: „იპოვეთ სამრეცხაოები წუთებში. მარტივად მოძებნეთ ახლომდებარე სამრეცხაოები და დაზოგეთ დრო.“',
    },
  },
  {
    label: { en: '2 · Preferences', ka: '2 · პარამეტრები' },
    image: preferences,
    alt: {
      en: 'UKar onboarding, step 2 of 3: "Tailor the search to your preferences. Simply input your preferences and criteria to find the perfect washing center that fits your requirements."',
      ka: 'UKar-ის ონბორდინგი, ნაბიჯი 2 სამიდან: „მოარგეთ ძიება თქვენს სურვილებს. მიუთითეთ კრიტერიუმები და იპოვეთ თქვენთვის შესაფერისი სამრეცხაო.“',
    },
  },
  {
    label: { en: '3 · Track', ka: '3 · თვალყური' },
    image: track,
    alt: {
      en: 'UKar onboarding, step 3 of 3: "Track your washing in real-time. Stay updated with real-time tracking of your washing progress."',
      ka: 'UKar-ის ონბორდინგი, ნაბიჯი 3 სამიდან: „ადევნეთ თვალი რეცხვას რეალურ დროში. მიიღეთ განახლებები რეცხვის პროცესის შესახებ.“',
    },
  },
];

/** Coinmania App Store screenshots (public marketing artwork, © Coinmania), in store order. */
export const COINMANIA_STORE: readonly ScreenImage[] = [
  {
    label: { en: 'Prices', ka: 'ფასები' },
    image: storePrices,
    alt: {
      en: 'Coinmania App Store screenshot, "Leading Cryptos, Clearly Organized": the All Cryptos list with live prices in lari, daily changes and favourites.',
      ka: 'Coinmania-ს სკრინშოტი App Store-იდან, „Leading Cryptos, Clearly Organized“: კრიპტოვალუტების სია რეალური დროის ფასებით ლარში, დღიური ცვლილებითა და რჩეულებით.',
    },
    bare: true,
  },
  {
    label: { en: 'Buy and sell', ka: 'ყიდვა და გაყიდვა' },
    image: storeBuySell,
    alt: {
      en: 'Coinmania App Store screenshot, "Buy & Sell": converting lari to Bitcoin, with both balances and the exchange rate.',
      ka: 'Coinmania-ს სკრინშოტი App Store-იდან, „Buy & Sell“: ლარის ბიტკოინში კონვერტაცია, ორივე ბალანსითა და გაცვლითი კურსით.',
    },
    bare: true,
  },
  {
    label: { en: 'Send and receive', ka: 'გაგზავნა და მიღება' },
    image: storeSendReceive,
    alt: {
      en: 'Coinmania App Store screenshot, "Send & Receive": a withdrawal to the blockchain with asset, network, address and amount.',
      ka: 'Coinmania-ს სკრინშოტი App Store-იდან, „Send & Receive“: ბლოკჩეინზე გატანა აქტივით, ქსელით, მისამართითა და თანხით.',
    },
    bare: true,
  },
  {
    label: { en: 'Security', ka: 'უსაფრთხოება' },
    image: storeSecurity,
    alt: {
      en: 'Coinmania App Store screenshot, "Enhanced Wallet Security": extra protection by SMS, email or Google Authenticator.',
      ka: 'Coinmania-ს სკრინშოტი App Store-იდან, „Enhanced Wallet Security“: დამატებითი დაცვა SMS-ით, ელფოსტით ან Google Authenticator-ით.',
    },
    bare: true,
  },
];

/** ElectraPay Business App Store screenshots (public artwork, © Electra Pay LLC; UI in Georgian), in flow order. */
export const ELECTRAPAY_STORE: readonly ScreenImage[] = [
  {
    label: { en: 'Issue an invoice', ka: 'ინვოისის გამოწერა' },
    image: epInvoice,
    alt: {
      en: 'ElectraPay Business App Store screenshot, in Georgian: "Enter the amount and purpose, and issue an invoice", with terminal #17 set to 1000 lari.',
      ka: 'ElectraPay Business-ის სკრინშოტი App Store-იდან: „შეიყვანე თანხა, დანიშნულება და გამოწერე ინვოისი“, ტერმინალი #17, 1000 ლარი.',
    },
    bare: true,
  },
  {
    label: { en: 'Pay by QR', ka: 'გადახდა QR კოდით' },
    image: epQr,
    alt: {
      en: 'ElectraPay Business App Store screenshot, in Georgian: "Get paid by QR code, with crypto conversion", showing the terminal QR code and the customer app scanning it.',
      ka: 'ElectraPay Business-ის სკრინშოტი App Store-იდან: „გადაახდევინე QR კოდით კრიპტოს კონვერტაციით“, ტერმინალის QR კოდი და მომხმარებლის აპლიკაცია, რომელიც მას ასკანერებს.',
    },
    bare: true,
  },
  {
    label: { en: 'Paid', ka: 'გადახდილია' },
    image: epPaid,
    alt: {
      en: 'ElectraPay Business App Store screenshot, in Georgian: "Invoice paid!", with the invoice details, its QR code and the paid status.',
      ka: 'ElectraPay Business-ის სკრინშოტი App Store-იდან: „ინვოისი გადახდილია!“, ინვოისის დეტალებით, QR კოდითა და გადახდის სტატუსით.',
    },
    bare: true,
  },
];

/** BonoApp App Store screenshots (public artwork, © Digital Systems, LLC; UI in Georgian): collect, combine, spend. */
export const BONOAPP_STORE: readonly ScreenImage[] = [
  {
    label: { en: 'Collect', ka: 'დააგროვე' },
    image: bonoCollect,
    alt: {
      en: 'BonoApp App Store screenshot, in Georgian: "Collect", a product page pricing a smartwatch at 109 points.',
      ka: 'BonoApp-ის სკრინშოტი App Store-იდან: „დააგროვე“, პროდუქტის გვერდი, სადაც სმარტ საათი 109 ქულა ღირს.',
    },
    bare: true,
  },
  {
    label: { en: 'Combine', ka: 'გააერთიანე' },
    image: bonoCombine,
    alt: {
      en: 'BonoApp App Store screenshot, in Georgian: "Combine", points from partner merchants merged into one balance of 950 points.',
      ka: 'BonoApp-ის სკრინშოტი App Store-იდან: „გააერთიანე“, პარტნიორი მაღაზიების ქულები ერთ ბალანსში, 950 ქულა.',
    },
    bare: true,
  },
  {
    label: { en: 'Spend', ka: 'დახარჯე' },
    image: bonoSpend,
    alt: {
      en: 'BonoApp App Store screenshot, in Georgian: "Spend", a checkout paying for products with points.',
      ka: 'BonoApp-ის სკრინშოტი App Store-იდან: „დახარჯე“, შეკვეთის გაფორმება, სადაც პროდუქტები ქულებით იხდება.',
    },
    bare: true,
  },
];

/** 08.ge desktop screenshots of the live site (UI in Georgian), cropped to the page only. Visuals and markup are Mamuka's. */
export const WEB_08GE: readonly ScreenImage[] = [
  {
    label: { en: 'Homepage', ka: 'მთავარი გვერდი' },
    image: web08Home,
    alt: {
      en: '08.ge homepage, in Georgian: a photo of an old Georgian town behind the headline "Accurate and constantly updated information!", a search bar for companies and activities, and shortcuts to food, medicine, education, shopping and sport.',
      ka: '08.ge-ის მთავარი გვერდი: ძველი ქართული ქალაქის ფოტო სათაურით „ზუსტი და მუდმივად განახლებადი ინფორმაცია!“, კომპანიებისა და საქმიანობების საძიებო ველი და კატეგორიები: კვება, მედიცინა, განათლება, სავაჭრო ობიექტები და სპორტი.',
    },
  },
  {
    label: { en: 'Currency converter', ka: 'ვალუტის კონვერტორი' },
    image: web08Currency,
    alt: {
      en: '08.ge currency converter, in Georgian: 1 US dollar converted to 2.608 lari.',
      ka: '08.ge-ის ვალუტის კონვერტორი: 1 აშშ დოლარი 2.608 ლარად.',
    },
  },
  {
    label: { en: 'Business directory', ka: 'კომპანიების კატალოგი' },
    image: web08Organizations,
    alt: {
      en: '08.ge business directory, in Georgian: search filters beside a grid of company cards with logos, ratings, addresses and opening hours.',
      ka: '08.ge-ის კომპანიების კატალოგი: საძიებო ფილტრები და კომპანიების ბარათები ლოგოებით, შეფასებებით, მისამართებითა და სამუშაო საათებით.',
    },
  },
];

/** eNvite launch images from its Product Hunt page (© Webiz): phone mockups of the in-store chat. */
export const WEB_ENVITE: readonly ScreenImage[] = [
  {
    label: { en: 'Groups and polls', ka: 'ჯგუფები და გამოკითხვები' },
    image: enviteGroups,
    alt: {
      en: 'eNvite launch image: three phones showing an online store with a chat panel, labelled group creation, store items in chat, and polls on store items.',
      ka: 'eNvite-ის გაშვების სურათი: სამი ტელეფონი ონლაინ მაღაზიით და ჩატის პანელით, წარწერებით: ჯგუფის შექმნა, პროდუქტები ჩატში და გამოკითხვები პროდუქტებზე.',
    },
  },
  {
    label: { en: 'Events and recommendations', ka: 'ღონისძიებები და რეკომენდაციები' },
    image: enviteEvents,
    alt: {
      en: 'eNvite launch image: three phones labelled participate in events, get recommendations, and store announcements.',
      ka: 'eNvite-ის გაშვების სურათი: სამი ტელეფონი წარწერებით: ღონისძიებებში მონაწილეობა, რეკომენდაციები და მაღაზიის განცხადებები.',
    },
  },
  {
    label: { en: 'Followers and chats', ka: 'გამომწერები და ჩატები' },
    image: enviteFollowers,
    alt: {
      en: 'eNvite launch image: three phones labelled invite followers, recommended store items, and manage multiple chats.',
      ka: 'eNvite-ის გაშვების სურათი: სამი ტელეფონი წარწერებით: გამომწერების მოწვევა, რეკომენდებული პროდუქტები და რამდენიმე ჩატის მართვა.',
    },
  },
  {
    label: { en: 'Log-in and invites', ka: 'შესვლა და მოწვევები' },
    image: enviteLogin,
    alt: {
      en: 'eNvite launch image: three phones labelled simple log-in, invite friends, and chat and video.',
      ka: 'eNvite-ის გაშვების სურათი: სამი ტელეფონი წარწერებით: მარტივი შესვლა, მეგობრების მოწვევა და ჩატი და ვიდეო.',
    },
  },
];

/** Teams Manager screenshots from solutions2share.com (© Solutions2Share), showing today's product. */
export const WEB_TEAMS_MANAGER: readonly ScreenImage[] = [
  {
    label: { en: 'Governance dashboard', ka: 'მართვის დაფა' },
    image: teamsDashboard,
    alt: {
      en: 'Teams Manager inside Microsoft Teams: a governance dashboard with active spaces over time and a list of teams with their lifecycle status.',
      ka: 'Teams Manager Microsoft Teams-ში: მართვის დაფა აქტიური სივრცეების გრაფიკით და გუნდების სიით მათი სასიცოცხლო ციკლის სტატუსით.',
    },
  },
  {
    label: { en: 'New request', ka: 'ახალი მოთხოვნა' },
    image: teamsRequest,
    alt: {
      en: 'Teams Manager inside Microsoft Teams: the New Request panel, offering a team, Viva Engage community, SharePoint site, communication site, planner or channel.',
      ka: 'Teams Manager Microsoft Teams-ში: „New Request“ პანელი, სადაც შეიძლება მოითხოვოთ გუნდი, Viva Engage საზოგადოება, SharePoint საიტი, საკომუნიკაციო საიტი, Planner ან არხი.',
    },
  },
];
