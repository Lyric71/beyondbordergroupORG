import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

const RECIPIENT = 'cyril.drouin@outlook.com';
const SENDER = 'BeyondBorderGroup <onboarding@resend.dev>';

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const isValidEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

type Payload = {
  name?: string;
  email?: string;
  phone?: string;
  website?: string;
  company?: string;
  brief?: string;
  hp_field?: string;
  captcha_question?: string;
  captcha_answer?: string;
};

const json = (status: number, body: unknown) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });

const row = (label: string, value: string) => `
  <tr>
    <td style="padding:10px 0;border-bottom:1px solid #E8ECF2;color:#56687A;font-size:13px;width:140px;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:10px 0;border-bottom:1px solid #E8ECF2;color:#1A1F2E;font-size:14px;line-height:1.5;">${value}</td>
  </tr>
`;

// Verify a server-issued math captcha. Question format: "<int> + <int>".
const verifyCaptcha = (question: string, answer: string): boolean => {
  const match = /^\s*(-?\d+)\s*\+\s*(-?\d+)\s*$/.exec(question);
  if (!match) return false;
  const expected = Number(match[1]) + Number(match[2]);
  const given = Number.parseInt(answer.trim(), 10);
  if (Number.isNaN(given)) return false;
  return given === expected;
};

export const POST: APIRoute = async ({ request }) => {
  const apiKey = import.meta.env.RESEND_API_KEY;
  if (!apiKey || apiKey.startsWith('re_xxxx')) {
    return json(500, { error: 'Email service is not configured.' });
  }

  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return json(400, { error: 'Invalid request body.' });
  }

  // Honeypot — bots fill hidden fields, humans don't see them.
  if ((body.hp_field ?? '').trim() !== '') {
    // Pretend success to avoid signaling bots.
    return json(200, { success: true });
  }

  // Captcha
  const captchaQuestion = body.captcha_question?.trim() ?? '';
  const captchaAnswer = body.captcha_answer?.trim() ?? '';
  if (!verifyCaptcha(captchaQuestion, captchaAnswer)) {
    return json(400, { error: "Captcha answer doesn't match. Please try again." });
  }

  const name = body.name?.trim() ?? '';
  const email = body.email?.trim() ?? '';
  const phone = body.phone?.trim() ?? '';
  const website = body.website?.trim() ?? '';
  const company = body.company?.trim() ?? '';
  const brief = body.brief?.trim() ?? '';

  if (!name || !email) {
    return json(400, { error: 'Name and email are required.' });
  }
  if (!isValidEmail(email)) {
    return json(400, { error: 'Invalid email address.' });
  }

  const websiteCell = website
    ? `<a href="${escapeHtml(website)}" style="color:#0A66C2;">${escapeHtml(website)}</a>`
    : '—';

  const briefCell = brief
    ? escapeHtml(brief).replace(/\n/g, '<br/>')
    : '<span style="color:#94A3B8;">(no brief)</span>';

  const html = `
    <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:640px;margin:0 auto;background:#F4F7FB;padding:32px;">
      <div style="background:linear-gradient(135deg,#001840 0%,#0A66C2 100%);border-radius:12px;padding:28px 32px;margin-bottom:20px;">
        <div style="color:#A6C1E5;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;">BeyondBorderGroup</div>
        <h1 style="color:#ffffff;font-size:22px;margin:6px 0 0;">New contact form submission</h1>
      </div>
      <div style="background:#ffffff;border-radius:12px;padding:24px 32px;">
        <h2 style="color:#1A1F2E;font-size:14px;letter-spacing:0.06em;text-transform:uppercase;margin:0 0 8px;">Contact</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
          ${row('Name', escapeHtml(name))}
          ${row('Email', `<a href="mailto:${escapeHtml(email)}" style="color:#0A66C2;">${escapeHtml(email)}</a>`)}
          ${row('Phone', phone ? escapeHtml(phone) : '—')}
        </table>

        <h2 style="color:#1A1F2E;font-size:14px;letter-spacing:0.06em;text-transform:uppercase;margin:0 0 8px;">Company</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
          ${row('Company', company ? escapeHtml(company) : '—')}
          ${row('Website', websiteCell)}
        </table>

        <h2 style="color:#1A1F2E;font-size:14px;letter-spacing:0.06em;text-transform:uppercase;margin:0 0 8px;">Project description</h2>
        <div style="background:#F8FAFC;border:1px solid #E8ECF2;border-radius:8px;padding:16px;color:#1A1F2E;font-size:14px;line-height:1.6;">
          ${briefCell}
        </div>
      </div>
      <p style="color:#94A3B8;font-size:12px;text-align:center;margin-top:16px;">Sent from beyondbordergroup.com/contact</p>
    </div>
  `;

  const text = [
    `New contact form submission`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Phone: ${phone || '-'}`,
    ``,
    `Company: ${company || '-'}`,
    `Website: ${website || '-'}`,
    ``,
    `Project description:`,
    brief || '(no brief)',
  ].join('\n');

  const resend = new Resend(apiKey);
  const subjectCompany = company ? ` — ${company}` : '';

  const { error } = await resend.emails.send({
    from: SENDER,
    to: RECIPIENT,
    replyTo: email,
    subject: `New enquiry from ${name}${subjectCompany}`,
    html,
    text,
  });

  if (error) {
    console.error('Resend error:', error);
    return json(500, { error: 'Failed to send email.' });
  }

  return json(200, { success: true });
};
