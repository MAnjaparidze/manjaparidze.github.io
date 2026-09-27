/**
 * Interface text for shared components, in both languages.
 * Georgian drafted by Claude for Mamuka's review (2026-09-28); formal "თქვენ" throughout.
 */
import type { Lang } from './index';

export const UI = {
  en: {
    name: 'Mamuka Anjaparidze',
    jobTitle: 'Senior web & mobile developer, SEO and AEO',
    currentlyAt: (company: string) => `Currently at ${company}`,
    nav: { work: 'Work', about: 'About', contact: 'Contact' },
    navLabel: 'Main',
    skipLink: 'Skip to content',
    darkTheme: 'Dark theme',
    switchLanguage: { label: 'ქართული', lang: 'ka' },
    bookCall: 'Book a call',
    emailMe: 'Email me',
    footerCta: 'Want your business to be the answer?',
    selectedWork: 'Selected work',
    webWork: 'Websites and web apps',
    earlierWork: 'Earlier work',
    readCaseStudy: (title: string) => `Read the ${title} case study`,
    externalSite: '(external site)',
    englishOnly: '',
    screenshots: (title: string) => `${title} screenshots`,
    scrollable: 'scrollable',
    caseStudy: { label: 'Case study', role: 'Role', stack: 'Stack', status: 'Status', links: 'Links', updated: 'Last updated' },
    dateLocale: 'en-GB',
  },
  ka: {
    name: 'მამუკა ანჯაფარიძე',
    jobTitle: 'Senior ვებ და მობილური დეველოპერი, SEO და AEO',
    currentlyAt: (company: string) => `ამჟამად: ${company}`,
    nav: { work: 'ნამუშევრები', about: 'ჩემ შესახებ', contact: 'კონტაქტი' },
    navLabel: 'მთავარი',
    skipLink: 'მთავარ შინაარსზე გადასვლა',
    darkTheme: 'მუქი თემა',
    switchLanguage: { label: 'English', lang: 'en' },
    bookCall: 'დაჯავშნეთ ზარი',
    emailMe: 'მომწერეთ',
    footerCta: 'გსურთ, რომ პასუხი თქვენი ბიზნესი იყოს?',
    selectedWork: 'რჩეული ნამუშევრები',
    webWork: 'ვებსაიტები და ვებ აპლიკაციები',
    earlierWork: 'ადრინდელი ნამუშევრები',
    readCaseStudy: (title: string) => `წაიკითხეთ ქეისი: ${title}`,
    externalSite: '(გარე საიტი)',
    englishOnly: ' (ინგლისურად)',
    screenshots: (title: string) => `${title}: სკრინშოტები`,
    scrollable: 'გადაადგილებადი',
    caseStudy: { label: 'ქეისი', role: 'როლი', stack: 'სტეკი', status: 'სტატუსი', links: 'ბმულები', updated: 'ბოლო განახლება' },
    dateLocale: 'ka-GE',
  },
} as const satisfies Record<Lang, unknown>;

export const ui = (lang: Lang) => UI[lang];
