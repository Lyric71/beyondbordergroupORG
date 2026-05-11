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
  'agencies/beyondbordergroup': 'agencies/beyondbordergroup/',
  'agencies/theredscroll': 'agencies/theredscroll/',
  'agencies/chinawebfoundry': 'agencies/chinawebfoundry/',
  'agencies/beyondbridge': 'agencies/beyondbridge/',
  'agencies/beyondcompass': 'agencies/beyondcompass/',
  'agencies/hubstudio': 'agencies/hubstudio/',
  'agencies/nuvora-studio': 'agencies/nuvora-studio/',
  'how-we-work-together': 'how-we-work-together/',
  contact: 'contact/',
  privacy: 'privacy/',
  terms: 'terms/',
  cookies: 'cookies/',
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
    bridgeItemDesc: string;
    flowsItemDesc: string;
    howWeWorkItemDesc: string;
    ourWayMeta: string;
    specialistStudios: (n: number) => string;
    agenciesStandAlone: string;
    viewAllAgencies: string;
    agencyDescs: {
      beyondbordergroup: string;
      theredscroll: string;
      chinawebfoundry: string;
      beyondcompass: string;
      beyondbridge: string;
      hubstudio: string;
      nuvoraStudio: string;
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
      bridgeItemDesc: 'The cross-border thesis. Why this group exists.',
      flowsItemDesc: 'One bridge, two directions. Inbound and outbound, both on one page.',
      howWeWorkItemDesc: 'How a project actually runs.',
      ourWayMeta: 'From thinking to shipping',
      specialistStudios: (n) => `${n} specialist studios`,
      agenciesStandAlone: 'Each agency stands alone. Most clients start with one.',
      viewAllAgencies: 'View all agencies',
      agencyDescs: {
        beyondbordergroup: 'Full-service China entry.',
        theredscroll: 'Chinese social media specialist.',
        chinawebfoundry: 'Websites built for China.',
        beyondcompass: 'Vetted China distributors and TPs.',
        beyondbridge: 'Chinese brands, Western pipeline.',
        hubstudio: 'Content production engine.',
        nuvoraStudio: 'LinkedIn-only B2B.',
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
      flowsLabel: 'Les deux flux',
      agencies: 'Nos agences',
      howWeWork: 'Comment on travaille',
      founder: 'Fondateur',
      contact: 'Contact',
      flowsDesc: "Un pont, deux directions. Prenez le côté d'où vous venez.",
      agenciesDesc: 'Sept agences spécialistes. Chacune autonome. La plupart de nos clients démarrent par une seule.',
      ourWay: 'Notre approche',
      ourWayDesc: 'Le pont, les flux, et la façon dont on travaille.',
      bridgeItemDesc: "La thèse transfrontalière. Pourquoi ce groupe existe.",
      flowsItemDesc: 'Un pont, deux directions. Entrée en Chine et export, sur une seule page.',
      howWeWorkItemDesc: "Comment un projet se déroule, concrètement.",
      ourWayMeta: "De l'idée à la livraison",
      specialistStudios: (n) => `${n} agences spécialistes`,
      agenciesStandAlone: 'Chaque agence est autonome. La plupart de nos clients démarrent par une seule.',
      viewAllAgencies: 'Voir toutes les agences',
      agencyDescs: {
        beyondbordergroup: "Entrée en Chine, intégrée.",
        theredscroll: 'Spécialiste des réseaux sociaux chinois.',
        chinawebfoundry: 'Des sites taillés pour la Chine.',
        beyondcompass: 'Distributeurs et TP chinois, déjà qualifiés.',
        beyondbridge: 'Marques chinoises, pipeline en Occident.',
        hubstudio: 'Moteur de production de contenu.',
        nuvoraStudio: 'B2B, exclusivement LinkedIn.',
      },
    },
    cta: {
      talkToUs: "Parler à l'équipe",
      bookACall: 'Prendre rendez-vous',
      findAgency: "Trouver l'agence qu'il vous faut",
      seeInbound: 'Voir le flux Occident → Chine',
      seeOutbound: 'Voir le flux Chine → Occident',
      visitSite: 'Voir le site',
      learnMore: 'En savoir plus',
      openAgency: "Voir l'agence",
      readBio: 'Lire la bio',
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
      terms: 'Mentions légales',
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
      agencies: '旗下公司',
      howWeWork: '合作方式',
      founder: '创始人',
      contact: '联系我们',
      flowsDesc: '一座桥，两个方向。从你那一边开始。',
      agenciesDesc: '七家专业机构。每一家都能单独合作。多数客户从一家开始。',
      ourWay: '我们的做法',
      ourWayDesc: '一座桥，两条流向，一套做法。',
      bridgeItemDesc: '跨境业务的核心命题。这个集团为何存在。',
      flowsItemDesc: '一座桥，两个方向。入境与出海，同一页讲清楚。',
      howWeWorkItemDesc: '一个项目，从立项到交付，是如何跑起来的。',
      ourWayMeta: '从思考到交付',
      specialistStudios: (n) => `${n} 家专业机构`,
      agenciesStandAlone: '每一家机构都独立运转。多数客户从一家开始。',
      viewAllAgencies: '查看全部机构',
      agencyDescs: {
        beyondbordergroup: '中国全案代理。',
        theredscroll: '中国社交媒体专家。',
        chinawebfoundry: '为中国互联网而建的网站。',
        beyondcompass: '已经背调过的中国经销商与 TP。',
        beyondbridge: '中国品牌，西方市场管线。',
        hubstudio: '内容生产引擎。',
        nuvoraStudio: '仅 LinkedIn 的 B2B。',
      },
    },
    cta: {
      talkToUs: '聊一聊',
      bookACall: '预约通话',
      findAgency: '找到合适的公司',
      seeInbound: '查看入境流向',
      seeOutbound: '查看出境流向',
      visitSite: '访问网站',
      learnMore: '了解更多',
      openAgency: '进入公司页面',
      readBio: '查看完整简介',
      send: '发送',
    },
    footer: {
      tagline: '我们在中国与西方之间打造品牌。两个方向，同时跑。',
      ecosystem: '生态',
      sixAgencies: '旗下公司',
      discover: '了解我们',
      languages: '语言',
      offices: '上海。香港。巴黎。杭州。在美国、英国、德国、法国设有本地代表。',
      rights: '© 2026 BeyondBorderGroup Ltd. 注册于香港。',
      privacy: '隐私政策',
      terms: '使用条款',
      cookies: 'Cookies',
    },
    meta: {
      siteName: 'BeyondBorderGroup',
      skipToContent: '跳到正文',
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
      flowsDesc: 'Un puente, dos sentidos. Elija la orilla desde la que parte.',
      agenciesDesc: 'Agencias especializadas. Cada una se sostiene sola. La mayoría empieza por una.',
      ourWay: 'Nuestra forma',
      ourWayDesc: 'El puente, los flujos, la forma de trabajar.',
      bridgeItemDesc: 'La tesis transfronteriza. Por qué existe este grupo.',
      flowsItemDesc: 'Un puente, dos sentidos. Entrada y salida, en la misma página.',
      howWeWorkItemDesc: 'Cómo se ejecuta un proyecto, paso a paso.',
      ourWayMeta: 'De la idea a la entrega',
      specialistStudios: (n) => `${n} agencias especializadas`,
      agenciesStandAlone: 'Cada agencia se sostiene sola. La mayoría de los clientes empieza por una.',
      viewAllAgencies: 'Ver todas las agencias',
      agencyDescs: {
        beyondbordergroup: 'Implantación integral en China.',
        theredscroll: 'Especialista en redes sociales chinas.',
        chinawebfoundry: 'Webs hechas para la red china.',
        beyondcompass: 'Distribuidores chinos y TP contrastados.',
        beyondbridge: 'Marcas chinas, pipeline en Occidente.',
        hubstudio: 'Motor de producción de contenido.',
        nuvoraStudio: 'B2B, solo en LinkedIn.',
      },
    },
    cta: {
      talkToUs: 'Hablar con nosotros',
      bookACall: 'Reservar una llamada',
      findAgency: 'Encontrar la agencia adecuada',
      seeInbound: 'Ver el flujo de entrada',
      seeOutbound: 'Ver el flujo de salida',
      visitSite: 'Visitar la web',
      learnMore: 'Saber más',
      openAgency: 'Abrir la agencia',
      readBio: 'Leer la biografía',
      send: 'Enviar',
    },
    footer: {
      tagline: 'Construimos marcas entre China y Occidente. En los dos sentidos.',
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
      flowsDesc: 'Eine Brücke, zwei Richtungen. Wählen Sie Ihre Seite.',
      agenciesDesc: 'Spezialisierte Agenturen. Jede steht für sich. Die meisten Kunden fangen mit einer an.',
      ourWay: 'Unser Ansatz',
      ourWayDesc: 'Die Brücke, die zwei Richtungen, unsere Arbeitsweise.',
      bridgeItemDesc: 'Die These zur Brücke. Warum es diese Gruppe gibt.',
      flowsItemDesc: 'Eine Brücke, zwei Richtungen. Inbound und Outbound auf einer Seite.',
      howWeWorkItemDesc: 'Wie ein Projekt tatsächlich abläuft.',
      ourWayMeta: 'Vom Gedanken bis zum Ergebnis',
      specialistStudios: (n) => `${n} spezialisierte Agenturen`,
      agenciesStandAlone: 'Jede Agentur steht für sich. Die meisten Kunden fangen mit einer an.',
      viewAllAgencies: 'Alle Agenturen ansehen',
      agencyDescs: {
        beyondbordergroup: 'China-Markteintritt aus einer Hand.',
        theredscroll: 'Spezialist für chinesische Social Media.',
        chinawebfoundry: 'Websites für das chinesische Web.',
        beyondcompass: 'Geprüfte China-Distributoren und TPs.',
        beyondbridge: 'Chinesische Marken, westliche Pipeline.',
        hubstudio: 'Content-Produktionsmotor.',
        nuvoraStudio: 'B2B, ausschließlich auf LinkedIn.',
      },
    },
    cta: {
      talkToUs: 'Mit uns sprechen',
      bookACall: 'Termin buchen',
      findAgency: 'Die passende Agentur finden',
      seeInbound: 'Den Inbound-Flow ansehen',
      seeOutbound: 'Den Outbound-Flow ansehen',
      visitSite: 'Website besuchen',
      learnMore: 'Mehr erfahren',
      openAgency: 'Zur Agenturseite',
      readBio: 'Zum vollständigen Profil',
      send: 'Senden',
    },
    footer: {
      tagline: 'Wir bauen Marken zwischen China und dem Westen. In beide Richtungen.',
      ecosystem: 'Das Ökosystem',
      sixAgencies: 'Die Agenturen',
      discover: 'Entdecken',
      languages: 'Sprachen',
      offices: 'Shanghai. Hongkong. Paris. Hangzhou. Vor-Ort-Ansprechpartner in den USA, in Großbritannien, in Deutschland und in Frankreich.',
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
