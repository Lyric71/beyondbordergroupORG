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
    description: '欢迎向我们介绍您的项目。我们将在 24 小时内回复，以您所在时区为准。',
    eyebrow: '联系我们',
    heroTitle: '讲述您的项目。',
    heroLead: '跨境业务，双向贯通。周一至周五，24 小时内回复。',
    emailTitle: '电子邮箱',
    emailNote: '我们将在 24 小时内回复，以您所在时区为准。',
    officesTitle: '办公地点',
    officeHQ: '<strong>上海</strong>，集团总部',
    officeHK: '<strong>香港</strong>',
    officeParis: '<strong>巴黎</strong>与杭州',
    officesNote: '在美国、英国、德国、法国均设有本地代表。',
    directTitle: '亦可直接联系旗下任一公司',
    formEyebrow: '讲述您的项目',
    formHeading: '寥寥数语，即可开启合作。',
    labelName: '姓名',
    labelEmail: '电子邮箱',
    labelPhone: '电话',
    labelWebsite: '网站',
    labelCompany: '公司',
    labelBrief: '项目描述',
    briefPlaceholder: '一段话即可：项目方向、当前阶段，以及希望我们介入的环节。',
    captchaLabel: '简单核验',
    captchaPrompt: '{q} 等于几？',
    submit: '发送消息',
    sending: '发送中……',
    formHint: '周一至周五，24 小时内回复。',
    errMissing: '请留下您的姓名与邮箱，以便我们及时与您联系。',
    errCaptchaClient: '核验答案有误，请重新填写。',
    statusSending: '正在发送……',
    errNetwork: '网络异常，请检查连接后重试。',
    errGeneric: '提交失败，请稍后重试。',
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
    description: 'Erzählen Sie uns von Ihrem Vorhaben. Wir antworten binnen 24 Stunden, in Ihrer Zeitzone.',
    eyebrow: 'Kontakt',
    heroTitle: 'Sprechen wir über Ihr Vorhaben.',
    heroLead: 'Zwischen China und dem Westen, in beide Richtungen. Antwort binnen 24 Stunden, werktags.',
    emailTitle: 'E-Mail',
    emailNote: 'Antwort binnen 24 Stunden, in Ihrer Zeitzone.',
    officesTitle: 'Standorte',
    officeHQ: '<strong>Shanghai</strong>, Hauptsitz der Gruppe',
    officeHK: '<strong>Hongkong</strong>',
    officeParis: '<strong>Paris</strong> und Hangzhou',
    officesNote: 'Feste Ansprechpartner in den USA, Großbritannien, Deutschland und Frankreich.',
    directTitle: 'Oder direkt an eine unserer Agenturen',
    formEyebrow: 'Ihr Vorhaben',
    formHeading: 'Ein paar Zeilen genügen für den Anfang.',
    labelName: 'Name',
    labelEmail: 'E-Mail',
    labelPhone: 'Telefon',
    labelWebsite: 'Website',
    labelCompany: 'Unternehmen',
    labelBrief: 'Projektbeschreibung',
    briefPlaceholder: 'Ein paar Sätze reichen: worum es geht, wo Sie stehen und wie wir helfen können.',
    captchaLabel: 'Kurze Sicherheitsfrage',
    captchaPrompt: 'Was ergibt {q}?',
    submit: 'Nachricht senden',
    sending: 'Wird gesendet …',
    formHint: 'Antwort binnen 24 Stunden, werktags.',
    errMissing: 'Bitte hinterlassen Sie Ihren Namen und Ihre E-Mail-Adresse, damit wir Sie erreichen können.',
    errCaptchaClient: 'Die Antwort auf die Sicherheitsfrage stimmt nicht. Bitte versuchen Sie es erneut.',
    statusSending: 'Ihre Nachricht wird gesendet …',
    errNetwork: 'Netzwerkfehler. Bitte prüfen Sie Ihre Verbindung und versuchen Sie es erneut.',
    errGeneric: 'Etwas ist schiefgegangen. Bitte versuchen Sie es erneut.',
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
    title: '消息已送达',
    description: '感谢您的来信。我们将在 24 小时内回复，以您所在时区为准。',
    heading: '消息已送达。',
    lead: '您的消息已抵达上海。',
    sub: '我们将于一个工作日内回复，以您所在时区为准。',
    primaryCta: '返回首页',
    secondaryCta: '了解旗下公司',
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
    description: 'Vielen Dank für Ihre Nachricht. Wir antworten innerhalb von 24 Stunden, in Ihrer Zeitzone.',
    heading: 'Nachricht gesendet.',
    lead: 'Ihre Nachricht ist soeben in Shanghai eingegangen.',
    sub: 'Wir melden uns innerhalb eines Werktags, in Ihrer Zeitzone.',
    primaryCta: 'Zur Startseite',
    secondaryCta: 'Unsere Agenturen ansehen',
  },
};
