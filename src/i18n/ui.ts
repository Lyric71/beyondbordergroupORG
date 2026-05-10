export const locales = ['en', 'fr', 'zh', 'es', 'de'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

export const localeNames: Record<Locale, string> = {
  en: 'English',
  fr: 'Français',
  zh: '中文',
  es: 'Español',
  de: 'Deutsch',
};

export const localeShort: Record<Locale, string> = {
  en: 'EN',
  fr: 'FR',
  zh: '中',
  es: 'ES',
  de: 'DE',
};

export type Route =
  | 'home'
  | 'bridge'
  | 'two-flows'
  | 'entering-china'
  | 'going-overseas'
  | 'agencies'
  | 'agencies/beyondbordergroup'
  | 'agencies/theredscroll'
  | 'agencies/chinawebfoundry'
  | 'agencies/beyondbridge'
  | 'agencies/beyondcompass'
  | 'agencies/hubstudio'
  | 'agencies/nuvora-studio'
  | 'how-we-work-together'
  | 'contact';

const routePaths: Record<Route, string> = {
  home: '',
  bridge: 'the-bridge/',
  'two-flows': 'two-flows/',
  'entering-china': 'entering-china/',
  'going-overseas': 'going-overseas/',
  agencies: 'agencies/',
  'agencies/beyondbordergroup': 'agencies/beyondbordergroup/',
  'agencies/theredscroll': 'agencies/theredscroll/',
  'agencies/chinawebfoundry': 'agencies/chinawebfoundry/',
  'agencies/beyondbridge': 'agencies/beyondbridge/',
  'agencies/beyondcompass': 'agencies/beyondcompass/',
  'agencies/hubstudio': 'agencies/hubstudio/',
  'agencies/nuvora-studio': 'agencies/nuvora-studio/',
  'how-we-work-together': 'how-we-work-together/',
  contact: 'contact/',
};

export function pathFor(route: Route, locale: Locale): string {
  const tail = routePaths[route];
  if (locale === 'en') return `/${tail}`;
  return `/${locale}/${tail}`;
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
      agencies: 'Agencies',
      howWeWork: 'How we work',
      founder: 'Founder',
      contact: 'Contact',
      flowsDesc: 'One bridge, two directions. Pick the side of the bridge you are coming from.',
      agenciesDesc: 'Specialist studios. Each one stands alone. Most clients start with one.',
      ourWay: 'Our Way',
      ourWayDesc: 'The bridge, the flows, the way we work.',
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
      agencies: 'Agences',
      howWeWork: 'Notre fonctionnement',
      founder: 'Fondateur',
      contact: 'Contact',
      flowsDesc: 'Un pont, deux directions. Choisissez le côté d’où vous venez.',
      agenciesDesc: 'Studios spécialisés. Chacun se tient seul. La plupart des clients commencent par un.',
      ourWay: 'Notre voie',
      ourWayDesc: 'Le pont, les flux, notre fonctionnement.',
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
      sixAgencies: 'Les agences',
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
      agencies: '我们的公司',
      howWeWork: '协作方式',
      founder: '创始人',
      contact: '联系',
      flowsDesc: '一座桥，两个方向。从你的那一侧开始。',
      agenciesDesc: '独立的专业公司。每一家都可以单独合作。大多数客户从其中一家开始。',
      ourWay: '我们的方式',
      ourWayDesc: '一座桥，两条流向，一种协作方式。',
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
      sixAgencies: '所有公司',
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
  es: {
    nav: {
      bridge: 'El puente',
      flowsLabel: 'Dos flujos',
      agencies: 'Agencias',
      howWeWork: 'Cómo trabajamos',
      founder: 'Fundador',
      contact: 'Contacto',
      flowsDesc: 'Un puente, dos direcciones. Elige el lado del puente desde el que vienes.',
      agenciesDesc: 'Estudios especializados. Cada uno funciona por su cuenta. La mayoría de los clientes empieza con uno.',
      ourWay: 'Nuestro camino',
      ourWayDesc: 'El puente, los flujos, cómo trabajamos.',
    },
    cta: {
      talkToUs: 'Hablar con nosotros',
      bookACall: 'Reservar una llamada',
      findAgency: 'Encontrar la agencia adecuada',
      seeInbound: 'Ver el flujo entrante',
      seeOutbound: 'Ver el flujo saliente',
      visitSite: 'Visitar el sitio',
      learnMore: 'Saber más',
      openAgency: 'Abrir página de la agencia',
      readBio: 'Leer la biografía completa',
      send: 'Enviar',
    },
    footer: {
      tagline: 'Construimos marcas a ambos lados de la frontera entre China y Occidente. En las dos direcciones.',
      ecosystem: 'El ecosistema',
      sixAgencies: 'Las agencias',
      discover: 'Descubrir',
      languages: 'Idiomas',
      offices: 'Shanghái. Hong Kong. París. Hangzhou. Representantes en EE. UU., Reino Unido, Alemania y Francia.',
      rights: '© 2026 BeyondBorderGroup Ltd. Hong Kong.',
      privacy: 'Privacidad',
      terms: 'Términos',
      cookies: 'Cookies',
    },
    meta: {
      siteName: 'BeyondBorderGroup',
      skipToContent: 'Saltar al contenido',
    },
  },
  de: {
    nav: {
      bridge: 'Die Brücke',
      flowsLabel: 'Zwei Richtungen',
      agencies: 'Agenturen',
      howWeWork: 'Wie wir arbeiten',
      founder: 'Gründer',
      contact: 'Kontakt',
      flowsDesc: 'Eine Brücke, zwei Richtungen. Wählen Sie die Seite, von der Sie kommen.',
      agenciesDesc: 'Spezialisierte Studios. Jedes steht für sich. Die meisten Kunden starten mit einem.',
      ourWay: 'Unser Weg',
      ourWayDesc: 'Die Brücke, die Richtungen, unsere Arbeitsweise.',
    },
    cta: {
      talkToUs: 'Mit uns sprechen',
      bookACall: 'Termin buchen',
      findAgency: 'Die passende Agentur finden',
      seeInbound: 'Eingehenden Flow ansehen',
      seeOutbound: 'Ausgehenden Flow ansehen',
      visitSite: 'Website besuchen',
      learnMore: 'Mehr erfahren',
      openAgency: 'Agenturseite öffnen',
      readBio: 'Vollständige Biografie lesen',
      send: 'Senden',
    },
    footer: {
      tagline: 'Wir bauen Marken über die Grenze zwischen China und dem Westen. In beide Richtungen.',
      ecosystem: 'Das Ökosystem',
      sixAgencies: 'Die Agenturen',
      discover: 'Entdecken',
      languages: 'Sprachen',
      offices: 'Shanghai. Hongkong. Paris. Hangzhou. Repräsentanten in den USA, im Vereinigten Königreich, in Deutschland und Frankreich.',
      rights: '© 2026 BeyondBorderGroup Ltd. Hongkong.',
      privacy: 'Datenschutz',
      terms: 'AGB',
      cookies: 'Cookies',
    },
    meta: {
      siteName: 'BeyondBorderGroup',
      skipToContent: 'Zum Inhalt springen',
    },
  },
};

export function t(locale: Locale): UI {
  return ui[locale];
}

export function detectLocale(url: URL): Locale {
  const seg = url.pathname.split('/').filter(Boolean)[0];
  if (seg === 'fr' || seg === 'zh' || seg === 'es' || seg === 'de') return seg;
  return 'en';
}

export function htmlLang(locale: Locale): string {
  if (locale === 'zh') return 'zh-CN';
  return locale;
}
