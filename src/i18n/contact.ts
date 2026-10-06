import type { Locale } from './ui';

export interface ContactCopy {
  title: string;
  description: string;
  heroTitle: string;
  heroLead: string;
  emailTitle: string;
  emailNote: string;
  officesTitle: string;
  officeHQ: string;
  officeShanghai: string;
  officeParis: string;
  officesNote: string;
  directTitle: string;
  formHeading: string;
  labelName: string;
  labelEmail: string;
  labelPhone: string;
  labelWebsite: string;
  labelCompany: string;
  labelBrief: string;
  briefPlaceholder: string;
  labelSource: string;
  sourcePick: string;
  sourceGoogle: string;
  sourceAi: string;
  sourceExhibition: string;
  sourceReferral: string;
  sourceOther: string;
  labelSourceDetail: string;
  sourceDetailPlaceholder: string;
  captchaLabel: string;
  captchaPrompt: string;
  submit: string;
  sending: string;
  formHint: string;
  errMissing: string;
  errSource: string;
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
    heroTitle: 'Tell us about your project.',
    heroLead: 'Cross-border, both ways. Within 24 hours, Monday to Friday.',
    emailTitle: 'Email',
    emailNote: 'We answer in 24 hours, in your time zone.',
    officesTitle: 'Offices',
    officeHQ: '<strong>Hong Kong</strong>, group HQ',
    officeShanghai: '<strong>Shanghai</strong>',
    officeParis: '<strong>Paris</strong> and Hangzhou',
    officesNote: 'In-market reps in the US, UK, Germany, France.',
    directTitle: 'Or contact an agency directly',
    formHeading: 'A short brief is enough to get started.',
    labelName: 'Name',
    labelEmail: 'Email',
    labelPhone: 'Phone',
    labelWebsite: 'Website',
    labelCompany: 'Company',
    labelBrief: 'Project description',
    briefPlaceholder: 'A short paragraph is welcome: direction, stage, what you need help with.',
    labelSource: 'How did you hear about us?',
    sourcePick: 'Pick one',
    sourceGoogle: 'Google or another search engine',
    sourceAi: 'An AI assistant (ChatGPT, Gemini, Claude, Perplexity…)',
    sourceExhibition: 'An exhibition or a trade show',
    sourceReferral: 'A referral, someone recommended us',
    sourceOther: 'Somewhere else',
    labelSourceDetail: 'Which one? (optional)',
    sourceDetailPlaceholder: 'The name, so we can thank them',
    captchaLabel: 'Quick check',
    captchaPrompt: 'What is {q}?',
    submit: 'Send message',
    sending: 'Sending…',
    formHint: 'We reply within 24 hours, Monday to Friday.',
    errMissing: 'Please add your name and email so we can reach you.',
    errSource: 'Please tell us how you heard about us.',
    errCaptchaClient: "Captcha answer doesn't match. Please try again.",
    statusSending: 'Sending your message…',
    errNetwork: 'Network error. Please check your connection and try again.',
    errGeneric: 'Something went wrong. Please try again.',
  },
};

export const thanksCopy: Record<Locale, ThanksCopy> = {
  en: {
    title: 'Message sent',
    description: 'Thanks for reaching out. We will reply within 24 hours, in your time zone.',
    heading: 'Message sent.',
    lead: 'Your message just landed in Hong Kong.',
    sub: 'We will get back to you within one business day, in your time zone.',
    primaryCta: 'Back to home',
    secondaryCta: 'Browse agencies',
  },
};
