export const locales = ['en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
};

export type Route =
  | 'home'
  | 'bridge'
  | 'two-flows'
  | 'entering-china'
  | 'going-overseas'
  | 'agencies'
  | 'agencies/bearingbridge'
  | 'agencies/theredscroll'
  | 'agencies/chinawebfoundry'
  | 'agencies/beyondbridge'
  | 'agencies/compass'
  | 'agencies/hubstudio'
  | 'agencies/nuvora-studio'
  | 'agencies/bearingbridgeai'
  | 'how-we-work-together'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'cookies';

const routePaths: Record<Route, string> = {
  home: '',
  bridge: 'the-bridge/',
  'two-flows': 'two-flows/',
  'entering-china': 'entering-china/',
  'going-overseas': 'going-overseas/',
  agencies: 'agencies/',
  'agencies/bearingbridge': 'agencies/thechinapath/',
  'agencies/theredscroll': 'agencies/theredscroll/',
  'agencies/chinawebfoundry': 'agencies/chinawebfoundry/',
  'agencies/beyondbridge': 'agencies/beyondbridge/',
  'agencies/compass': 'agencies/compass/',
  'agencies/hubstudio': 'agencies/hubstudio/',
  'agencies/nuvora-studio': 'agencies/nuvora-studio/',
  'agencies/bearingbridgeai': 'agencies/bearingbridgeai/',
  'how-we-work-together': 'how-we-work-together/',
  contact: 'contact/',
  privacy: 'privacy/',
  terms: 'terms/',
  cookies: 'cookies/',
};

export function pathFor(route: Route, _locale: Locale = 'en'): string {
  return `/${routePaths[route]}`;
}

export interface UI {
  nav: {
    bridge: string;
    flowsLabel: string;
    agencies: string;
    howWeWork: string;
    founder: string;
    contact: string;
    flowsDesc: string;
    agenciesDesc: string;
    ourWay: string;
    ourWayDesc: string;
    bridgeItemDesc: string;
    flowsItemDesc: string;
    howWeWorkItemDesc: string;
    ourWayMeta: string;
    specialistStudios: (n: number) => string;
    agenciesStandAlone: string;
    viewAllAgencies: string;
    agencyDescs: {
      bearingbridge: string;
      theredscroll: string;
      chinawebfoundry: string;
      compass: string;
      beyondbridge: string;
      hubstudio: string;
      nuvoraStudio: string;
      bearingbridgeAi: string;
    };
  };
  cta: {
    talkToUs: string;
    bookACall: string;
    findAgency: string;
    seeInbound: string;
    seeOutbound: string;
    visitSite: string;
    learnMore: string;
    openAgency: string;
    readBio: string;
    send: string;
  };
  footer: {
    tagline: string;
    ecosystem: string;
    sixAgencies: string;
    discover: string;
    offices: string;
    rights: string;
    privacy: string;
    terms: string;
    cookies: string;
  };
  meta: {
    siteName: string;
    skipToContent: string;
  };
}

export const ui: Record<Locale, UI> = {
  en: {
    nav: {
      bridge: 'The bridge',
      flowsLabel: 'Two flows',
      agencies: 'Agencies',
      howWeWork: 'How we work',
      founder: 'Founder',
      contact: 'Contact',
      flowsDesc: 'One bridge, two directions. Pick the side of the bridge you are coming from.',
      agenciesDesc: 'Specialist studios. Each one stands alone. Most clients start with one.',
      ourWay: 'Our Way',
      ourWayDesc: 'The bridge, the flows, the way we work.',
      bridgeItemDesc: 'The cross-border thesis. Why this group exists.',
      flowsItemDesc: 'One bridge, two directions. Inbound and outbound, both on one page.',
      howWeWorkItemDesc: 'How a project actually runs.',
      ourWayMeta: 'From thinking to shipping',
      specialistStudios: (n) => `${n} specialist studios`,
      agenciesStandAlone: 'Each agency stands alone. Most clients start with one.',
      viewAllAgencies: 'View all agencies',
      agencyDescs: {
        bearingbridge: 'Full-service China entry.',
        theredscroll: 'Chinese social media specialist.',
        chinawebfoundry: 'Websites built for China.',
        compass: 'Vetted China distributors and TPs.',
        beyondbridge: 'Chinese brands, Western pipeline.',
        hubstudio: 'Content production engine.',
        nuvoraStudio: 'LinkedIn-only B2B.',
        bearingbridgeAi: 'AI adoption consulting, East and West.',
      },
    },
    cta: {
      talkToUs: 'Talk to us',
      bookACall: 'Book a call',
      findAgency: 'Find the right agency',
      seeInbound: 'See the inbound flow',
      seeOutbound: 'See the outbound flow',
      visitSite: 'Visit site',
      learnMore: 'Learn more',
      openAgency: 'Open agency page',
      readBio: 'Read the full bio',
      send: 'Send',
    },
    footer: {
      tagline: 'We build brands across the China and West border. Both ways.',
      ecosystem: 'The ecosystem',
      sixAgencies: 'The agencies',
      discover: 'Discover',
      offices: 'Shanghai. Hong Kong. Paris. Hangzhou. Reps in the US, UK, Germany, France.',
      rights: '© 2026 Beyond Border Group Ltd. Hong Kong.',
      privacy: 'Privacy',
      terms: 'Terms',
      cookies: 'Cookies',
    },
    meta: {
      siteName: 'BearingBridge',
      skipToContent: 'Skip to content',
    },
  },
};

export function t(locale: Locale = 'en'): UI {
  return ui[locale];
}

export function detectLocale(_url: URL): Locale {
  return 'en';
}

export function htmlLang(_locale: Locale = 'en'): string {
  return 'en';
}
