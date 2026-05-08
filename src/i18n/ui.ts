export const locales = ['en', 'fr', 'zh'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  zh: '中文',
};

export const localeShort: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
  zh: '中',
};

export type Route =
  | 'home'
  | 'bridge'
  | 'entering-china'
  | 'going-overseas'
  | 'agencies'
  | 'agencies/beyondbordergroup'
  | 'agencies/theredscroll'
  | 'agencies/chinawebfoundry'
  | 'agencies/beyondbridge'
  | 'agencies/hubstudio'
  | 'agencies/nuvora-studio'
  | 'how-we-work-together'
  | 'founder'
  | 'contact';

const slugByLocale: Record<Route, Record<Locale, string>> = {
  home: { en: '/', fr: '/fr/', zh: '/zh/' },
  bridge: { en: '/the-bridge/', fr: '/fr/the-bridge/', zh: '/zh/the-bridge/' },
  'entering-china': { en: '/entering-china/', fr: '/fr/entering-china/', zh: '/zh/entering-china/' },
  'going-overseas': { en: '/going-overseas/', fr: '/fr/going-overseas/', zh: '/zh/going-overseas/' },
  agencies: { en: '/agencies/', fr: '/fr/agencies/', zh: '/zh/agencies/' },
  'agencies/beyondbordergroup': {
    en: '/agencies/beyondbordergroup/',
    fr: '/fr/agencies/beyondbordergroup/',
    zh: '/zh/agencies/beyondbordergroup/',
  },
  'agencies/theredscroll': {
    en: '/agencies/theredscroll/',
    fr: '/fr/agencies/theredscroll/',
    zh: '/zh/agencies/theredscroll/',
  },
  'agencies/chinawebfoundry': {
    en: '/agencies/chinawebfoundry/',
    fr: '/fr/agencies/chinawebfoundry/',
    zh: '/zh/agencies/chinawebfoundry/',
  },
  'agencies/beyondbridge': {
    en: '/agencies/beyondbridge/',
    fr: '/fr/agencies/beyondbridge/',
    zh: '/zh/agencies/beyondbridge/',
  },
  'agencies/hubstudio': {
    en: '/agencies/hubstudio/',
    fr: '/fr/agencies/hubstudio/',
    zh: '/zh/agencies/hubstudio/',
  },
  'agencies/nuvora-studio': {
    en: '/agencies/nuvora-studio/',
    fr: '/fr/agencies/nuvora-studio/',
    zh: '/zh/agencies/nuvora-studio/',
  },
  'how-we-work-together': {
    en: '/how-we-work-together/',
    fr: '/fr/how-we-work-together/',
    zh: '/zh/how-we-work-together/',
  },
  founder: { en: '/founder/', fr: '/fr/founder/', zh: '/zh/founder/' },
  contact: { en: '/contact/', fr: '/fr/contact/', zh: '/zh/contact/' },
};

export function pathFor(route: Route, locale: Locale): string {
  return slugByLocale[route][locale];
}

export interface UI {
  nav: {
    bridge: string;
    flowsLabel: string;
    enteringChina: string;
    goingOverseas: string;
    agencies: string;
    howWeWork: string;
    founder: string;
    contact: string;
    flowsDesc: string;
    agenciesDesc: string;
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
    languages: string;
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
      enteringChina: 'Entering China',
      goingOverseas: 'Going Overseas',
      agencies: 'Agencies',
      howWeWork: 'How we work',
      founder: 'Founder',
      contact: 'Contact',
      flowsDesc: 'One bridge, two directions. Pick the side of the bridge you are coming from.',
      agenciesDesc: 'Six specialist studios. Each one stands alone. Most clients start with one.',
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
      sixAgencies: 'Six agencies',
      discover: 'Discover',
      languages: 'Languages',
      offices: 'Shanghai. Hong Kong. Paris. Hangzhou. Reps in the US, UK, Germany, France.',
      rights: '© 2026 BeyondBorderGroup Ltd. Hong Kong.',
      privacy: 'Privacy',
      terms: 'Terms',
      cookies: 'Cookies',
    },
    meta: {
      siteName: 'BeyondBorderGroup',
      skipToContent: 'Skip to content',
    },
  },
  fr: {
    nav: {
      bridge: 'Le pont',
      flowsLabel: 'Deux flux',
      enteringChina: 'Entrer en Chine',
      goingOverseas: 'Aller à l’international',
      agencies: 'Agences',
      howWeWork: 'Notre fonctionnement',
      founder: 'Fondateur',
      contact: 'Contact',
      flowsDesc: 'Un pont, deux directions. Choisissez le côté d’où vous venez.',
      agenciesDesc: 'Six studios spécialisés. Chacun se tient seul. La plupart des clients commencent par un.',
    },
    cta: {
      talkToUs: 'Parler avec nous',
      bookACall: 'Réserver un appel',
      findAgency: 'Trouver la bonne agence',
      seeInbound: 'Voir le flux entrant',
      seeOutbound: 'Voir le flux sortant',
      visitSite: 'Visiter le site',
      learnMore: 'En savoir plus',
      openAgency: 'Ouvrir la page de l’agence',
      readBio: 'Lire la biographie complète',
      send: 'Envoyer',
    },
    footer: {
      tagline: 'Nous construisons des marques de part et d’autre de la frontière Chine et Occident. Dans les deux sens.',
      ecosystem: 'L’écosystème',
      sixAgencies: 'Six agences',
      discover: 'Découvrir',
      languages: 'Langues',
      offices: 'Shanghai. Hong Kong. Paris. Hangzhou. Représentants aux États-Unis, au Royaume-Uni, en Allemagne et en France.',
      rights: '© 2026 BeyondBorderGroup Ltd. Hong Kong.',
      privacy: 'Confidentialité',
      terms: 'Conditions',
      cookies: 'Cookies',
    },
    meta: {
      siteName: 'BeyondBorderGroup',
      skipToContent: 'Aller au contenu',
    },
  },
  zh: {
    nav: {
      bridge: '这座桥',
      flowsLabel: '两条流向',
      enteringChina: '进入中国',
      goingOverseas: '走向海外',
      agencies: '六家公司',
      howWeWork: '协作方式',
      founder: '创始人',
      contact: '联系',
      flowsDesc: '一座桥，两个方向。从你的那一侧开始。',
      agenciesDesc: '六家独立的专业公司。每一家都可以单独合作。大多数客户从其中一家开始。',
    },
    cta: {
      talkToUs: '与我们对话',
      bookACall: '预约通话',
      findAgency: '找到合适的公司',
      seeInbound: '查看入境业务',
      seeOutbound: '查看出境业务',
      visitSite: '访问网站',
      learnMore: '了解更多',
      openAgency: '打开公司页面',
      readBio: '查看完整简介',
      send: '发送',
    },
    footer: {
      tagline: '我们为中国与西方市场之间的品牌服务。双向。',
      ecosystem: '生态系统',
      sixAgencies: '六家公司',
      discover: '了解我们',
      languages: '语言',
      offices: '上海。香港。巴黎。杭州。在美国、英国、德国、法国设有商务代表。',
      rights: '© 2026 BeyondBorderGroup Ltd. 注册于香港。',
      privacy: '隐私政策',
      terms: '使用条款',
      cookies: 'Cookies',
    },
    meta: {
      siteName: 'BeyondBorderGroup',
      skipToContent: '跳到主内容',
    },
  },
};

export function t(locale: Locale): UI {
  return ui[locale];
}

export function detectLocale(url: URL): Locale {
  const seg = url.pathname.split('/').filter(Boolean)[0];
  if (seg === 'fr') return 'fr';
  if (seg === 'zh') return 'zh';
  return 'en';
}

export function htmlLang(locale: Locale): string {
  return locale === 'zh' ? 'zh-CN' : locale;
}
