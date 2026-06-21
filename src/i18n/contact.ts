import type { Locale } from './ui';

export interface ContactCopy {
  title: string;
  description: string;
  eyebrow: string;
  heroTitle: string;
  heroLead: string;
  emailTitle: string;
  emailNote: string;
  officesTitle: string;
  officeHQ: string;
  officeHK: string;
  officeParis: string;
  officesNote: string;
  directTitle: string;
  formEyebrow: string;
  formHeading: string;
  labelName: string;
  labelEmail: string;
  labelPhone: string;
  labelWebsite: string;
  labelCompany: string;
  labelBrief: string;
  briefPlaceholder: string;
  captchaLabel: string;
  captchaPrompt: string;
  submit: string;
  sending: string;
  formHint: string;
  errMissing: string;
  errCaptchaClient: string;
  statusSending: string;
  errNetwork: string;
  errGeneric: string;
}

export interface ThanksCopy {
  title: string;
  description: string;
  heading: string;
  lead: string;
  sub: string;
  primaryCta: string;
  secondaryCta: string;
}

export const contactCopy: Record<Locale, ContactCopy> = {
  en: {
    title: 'Contact',
    description: 'Tell us about your project. We answer within 24 hours, in your time zone.',
    eyebrow: 'Contact',
    heroTitle: 'Tell us about your project.',
    heroLead: 'Cross-border, both ways. Within 24 hours, Monday to Friday.',
    emailTitle: 'Email',
    emailNote: 'We answer in 24 hours, in your time zone.',
    officesTitle: 'Offices',
    officeHQ: '<strong>Shanghai</strong>, group HQ',
    officeHK: '<strong>Hong Kong</strong>',
    officeParis: '<strong>Paris</strong> and Hangzhou',
    officesNote: 'In-market reps in the US, UK, Germany, France.',
    directTitle: 'Or contact an agency directly',
    formEyebrow: 'Tell us about your project',
    formHeading: 'A short brief is enough to get started.',
    labelName: 'Name',
    labelEmail: 'Email',
    labelPhone: 'Phone',
    labelWebsite: 'Website',
    labelCompany: 'Company',
    labelBrief: 'Project description',
    briefPlaceholder: 'A short paragraph is welcome: direction, stage, what you need help with.',
    captchaLabel: 'Quick check',
    captchaPrompt: 'What is {q}?',
    submit: 'Send message',
    sending: 'Sending…',
    formHint: 'We reply within 24 hours, Monday to Friday.',
    errMissing: 'Please add your name and email so we can reach you.',
    errCaptchaClient: "Captcha answer doesn't match. Please try again.",
    statusSending: 'Sending your message…',
    errNetwork: 'Network error. Please check your connection and try again.',
    errGeneric: 'Something went wrong. Please try again.',
  },
  fr: {
    title: 'Contact',
    description: "Parlons de votre projet. Nous vous répondons sous 24 heures, dans votre fuseau horaire.",
    eyebrow: 'Contact',
    heroTitle: 'Parlons de votre projet.',
    heroLead: "Entre la Chine et l'Occident, dans un sens comme dans l'autre. Réponse sous 24 heures, du lundi au vendredi.",
    emailTitle: 'E-mail',
    emailNote: 'Nous vous répondons sous 24 heures, dans votre fuseau horaire.',
    officesTitle: 'Bureaux',
    officeHQ: '<strong>Shanghai</strong>, siège du groupe',
    officeHK: '<strong>Hong Kong</strong>',
    officeParis: '<strong>Paris</strong> et Hangzhou',
    officesNote: 'Des correspondants sur place aux États-Unis, au Royaume-Uni, en Allemagne et en France.',
    directTitle: "Ou écrire directement à l'une de nos agences",
    formEyebrow: 'Votre projet',
    formHeading: 'Quelques lignes suffisent pour engager la conversation.',
    labelName: 'Nom',
    labelEmail: 'E-mail',
    labelPhone: 'Téléphone',
    labelWebsite: 'Site web',
    labelCompany: 'Société',
    labelBrief: 'Description du projet',
    briefPlaceholder: "En quelques phrases : votre objectif, où en est le projet, et ce sur quoi vous souhaitez être accompagné.",
    captchaLabel: 'Vérification rapide',
    captchaPrompt: 'Combien font {q} ?',
    submit: 'Envoyer le message',
    sending: 'Envoi…',
    formHint: 'Nous vous répondons sous 24 heures, du lundi au vendredi.',
    errMissing: "Merci d'indiquer votre nom et votre adresse e-mail, afin que nous puissions vous répondre.",
    errCaptchaClient: 'La réponse au captcha est incorrecte. Merci de réessayer.',
    statusSending: 'Envoi de votre message…',
    errNetwork: 'Erreur réseau. Vérifiez votre connexion, puis réessayez.',
    errGeneric: 'Une erreur est survenue. Merci de réessayer.',
  },
  zh: {
    title: '联系我们',
    description: '说说你的项目。24 小时之内回复，按你的时区。',
    eyebrow: '联系我们',
    heroTitle: '说说你的项目。',
    heroLead: '跨境，两个方向。24 小时之内回复，周一到周五。',
    emailTitle: '邮箱',
    emailNote: '24 小时之内回复，按你的时区。',
    officesTitle: '办公室',
    officeHQ: '<strong>上海</strong>，集团总部',
    officeHK: '<strong>香港</strong>',
    officeParis: '<strong>巴黎</strong> 与杭州',
    officesNote: '美国、英国、德国、法国都有本地代表。',
    directTitle: '或者直接联系某一家公司',
    formEyebrow: '说说你的项目',
    formHeading: '几行字，就够开始。',
    labelName: '姓名',
    labelEmail: '邮箱',
    labelPhone: '电话',
    labelWebsite: '网站',
    labelCompany: '公司',
    labelBrief: '项目描述',
    briefPlaceholder: '一段话就行：方向、阶段、需要我们帮哪一段。',
    captchaLabel: '快速验证',
    captchaPrompt: '{q} 等于多少？',
    submit: '发送',
    sending: '发送中……',
    formHint: '24 小时之内回复，周一到周五。',
    errMissing: '麻烦填一下姓名和邮箱，方便我们联系你。',
    errCaptchaClient: '验证答案对不上，再试一次。',
    statusSending: '正在发送……',
    errNetwork: '网络出错。检查一下连接，再试一次。',
    errGeneric: '出了点状况，请再试一次。',
  },
  es: {
    title: 'Contacto',
    description: 'Hablemos de su proyecto. Le respondemos en menos de 24 horas, en su huso horario.',
    eyebrow: 'Contacto',
    heroTitle: 'Hablemos de su proyecto.',
    heroLead: 'Entre China y Occidente, en los dos sentidos. Respuesta en menos de 24 horas, de lunes a viernes.',
    emailTitle: 'Correo electrónico',
    emailNote: 'Le respondemos en menos de 24 horas, en su huso horario.',
    officesTitle: 'Oficinas',
    officeHQ: '<strong>Shanghái</strong>, sede del grupo',
    officeHK: '<strong>Hong Kong</strong>',
    officeParis: '<strong>París</strong> y Hangzhou',
    officesNote: 'Contamos con representantes sobre el terreno en EE. UU., Reino Unido, Alemania y Francia.',
    directTitle: 'O escriba directamente a una de las agencias',
    formEyebrow: 'Su proyecto',
    formHeading: 'Unas líneas son suficientes para empezar.',
    labelName: 'Nombre',
    labelEmail: 'Correo electrónico',
    labelPhone: 'Teléfono',
    labelWebsite: 'Sitio web',
    labelCompany: 'Empresa',
    labelBrief: 'Descripción del proyecto',
    briefPlaceholder: 'Cuéntenos qué quiere conseguir, en qué punto está y en qué podemos ayudarle.',
    captchaLabel: 'Verificación rápida',
    captchaPrompt: '¿Cuánto es {q}?',
    submit: 'Enviar mensaje',
    sending: 'Enviando…',
    formHint: 'Le respondemos en menos de 24 horas, de lunes a viernes.',
    errMissing: 'Necesitamos su nombre y su correo para poder responderle.',
    errCaptchaClient: 'La respuesta de verificación no es correcta. Inténtelo de nuevo.',
    statusSending: 'Enviando su mensaje…',
    errNetwork: 'Error de conexión. Compruebe su red e inténtelo de nuevo.',
    errGeneric: 'Se ha producido un error. Inténtelo de nuevo.',
  },
  de: {
    title: 'Kontakt',
    description: 'Erzählen Sie uns von Ihrem Projekt. Antwort innerhalb von 24 Stunden, in Ihrer Zeitzone.',
    eyebrow: 'Kontakt',
    heroTitle: 'Erzählen Sie uns von Ihrem Projekt.',
    heroLead: 'Beide Richtungen. Innerhalb von 24 Stunden, Montag bis Freitag.',
    emailTitle: 'E-Mail',
    emailNote: 'Antwort innerhalb von 24 Stunden, in Ihrer Zeitzone.',
    officesTitle: 'Büros',
    officeHQ: '<strong>Shanghai</strong>, Hauptsitz',
    officeHK: '<strong>Hongkong</strong>',
    officeParis: '<strong>Paris</strong> und Hangzhou',
    officesNote: 'Lokale Vertreter in den USA, Großbritannien, Deutschland und Frankreich.',
    directTitle: 'Oder eine Agentur direkt kontaktieren',
    formEyebrow: 'Erzählen Sie uns von Ihrem Projekt',
    formHeading: 'Ein kurzes Briefing reicht für den Start.',
    labelName: 'Name',
    labelEmail: 'E-Mail',
    labelPhone: 'Telefon',
    labelWebsite: 'Website',
    labelCompany: 'Unternehmen',
    labelBrief: 'Projektbeschreibung',
    briefPlaceholder: 'Ein kurzer Absatz genügt: Richtung, Phase, wobei Sie Unterstützung brauchen.',
    captchaLabel: 'Kurze Prüfung',
    captchaPrompt: 'Was ist {q}?',
    submit: 'Nachricht senden',
    sending: 'Senden…',
    formHint: 'Antwort innerhalb von 24 Stunden, Montag bis Freitag.',
    errMissing: 'Bitte Name und E-Mail eintragen, damit wir Sie erreichen können.',
    errCaptchaClient: 'Die Captcha-Antwort stimmt nicht. Bitte erneut versuchen.',
    statusSending: 'Ihre Nachricht wird gesendet …',
    errNetwork: 'Netzwerkfehler. Bitte Verbindung prüfen und erneut versuchen.',
    errGeneric: 'Etwas ist schiefgelaufen. Bitte erneut versuchen.',
  },
};

export const thanksCopy: Record<Locale, ThanksCopy> = {
  en: {
    title: 'Message sent',
    description: 'Thanks for reaching out. We will reply within 24 hours, in your time zone.',
    heading: 'Message sent.',
    lead: 'Your message just landed in Shanghai.',
    sub: 'We will get back to you within one business day, in your time zone.',
    primaryCta: 'Back to home',
    secondaryCta: 'Browse agencies',
  },
  fr: {
    title: 'Message envoyé',
    description: 'Merci de votre message. Nous vous répondons sous 24 heures, dans votre fuseau horaire.',
    heading: 'Message envoyé.',
    lead: "Votre message vient d'arriver à Shanghai.",
    sub: 'Nous revenons vers vous sous un jour ouvré, dans votre fuseau horaire.',
    primaryCta: "Retour à l'accueil",
    secondaryCta: 'Voir les agences',
  },
  zh: {
    title: '信息已送达',
    description: '感谢联系。24 小时之内回复，按你的时区。',
    heading: '信息已送达。',
    lead: '你的信息刚刚抵达上海。',
    sub: '我们会在一个工作日内回复你，按你的时区。',
    primaryCta: '回到首页',
    secondaryCta: '看看旗下公司',
  },
  es: {
    title: 'Mensaje enviado',
    description: 'Gracias por escribirnos. Le responderemos en menos de 24 horas, en su huso horario.',
    heading: 'Mensaje enviado.',
    lead: 'Su mensaje acaba de aterrizar en Shanghái.',
    sub: 'Le responderemos en un día laborable, en su huso horario.',
    primaryCta: 'Volver al inicio',
    secondaryCta: 'Ver las agencias',
  },
  de: {
    title: 'Nachricht gesendet',
    description: 'Danke für Ihre Nachricht. Antwort innerhalb von 24 Stunden, in Ihrer Zeitzone.',
    heading: 'Nachricht gesendet.',
    lead: 'Ihre Nachricht ist gerade in Shanghai gelandet.',
    sub: 'Wir melden uns innerhalb eines Werktags zurück, in Ihrer Zeitzone.',
    primaryCta: 'Zur Startseite',
    secondaryCta: 'Agenturen ansehen',
  },
};
