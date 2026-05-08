import { Resend } from 'resend';

const prerender = false;
const RECIPIENT = "cyril.drouin@outlook.com";
const SENDER = "BeyondBorderGroup <onboarding@resend.dev>";
const DIRECTION_LABELS = {
  inbound: "Enter or grow in China (West to China)",
  outbound: "Grow my Chinese brand overseas (China to the West)",
  content: "Content production (HubStudio)",
  linkedin: "LinkedIn run properly (Nuvora Studio)",
  unsure: "Not sure yet"
};
const STAGE_LABELS = {
  exploring: "Exploring. Early stage.",
  planning: "Planning. Ready to start in 1–3 months.",
  launching: "Launching. Need help in the next 30 days.",
  operating: "Already operating. Need to fix or scale."
};
const LANG_LABELS = {
  en: "English",
  fr: "Français",
  zh: "中文",
  es: "Español",
  de: "Deutsch"
};
const escapeHtml = (value) => value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const json = (status, body) => new Response(JSON.stringify(body), {
  status,
  headers: { "Content-Type": "application/json" }
});
const row = (label, value) => `
  <tr>
    <td style="padding:10px 0;border-bottom:1px solid #E8ECF2;color:#56687A;font-size:13px;width:140px;vertical-align:top;">${escapeHtml(label)}</td>
    <td style="padding:10px 0;border-bottom:1px solid #E8ECF2;color:#1A1F2E;font-size:14px;line-height:1.5;">${value}</td>
  </tr>
`;
const POST = async ({ request }) => {
  const apiKey = "re_A3EyNQ3c_Lh8saxW4BQ4iuXnwKTQTst96";
  if (apiKey.startsWith("re_xxxx")) {
    return json(500, { error: "Email service is not configured." });
  }
  let body;
  try {
    body = await request.json();
  } catch {
    return json(400, { error: "Invalid request body." });
  }
  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const role = body.role?.trim() ?? "";
  const industry = body.industry?.trim() ?? "";
  const hq = body.hq?.trim() ?? "";
  const website = body.website?.trim() ?? "";
  const brief = body.brief?.trim() ?? "";
  const phone = body.phone?.trim() ?? "";
  const tz = body.tz?.trim() ?? "";
  const lang = body.lang?.trim() ?? "";
  const direction = body.direction?.trim() ?? "";
  const stage = body.stage?.trim() ?? "";
  if (!name || !email) {
    return json(400, { error: "Name and email are required." });
  }
  if (!isValidEmail(email)) {
    return json(400, { error: "Invalid email address." });
  }
  const directionLabel = DIRECTION_LABELS[direction] ?? "—";
  const stageLabel = STAGE_LABELS[stage] ?? "—";
  const langLabel = LANG_LABELS[lang] ?? "—";
  const websiteCell = website ? `<a href="${escapeHtml(website)}" style="color:#0A66C2;">${escapeHtml(website)}</a>` : "—";
  const briefCell = brief ? escapeHtml(brief).replace(/\n/g, "<br/>") : '<span style="color:#94A3B8;">(no brief)</span>';
  const html = `
    <div style="font-family:'Segoe UI',Arial,sans-serif;max-width:640px;margin:0 auto;background:#F4F7FB;padding:32px;">
      <div style="background:linear-gradient(135deg,#001840 0%,#0A66C2 100%);border-radius:12px;padding:28px 32px;margin-bottom:20px;">
        <div style="color:#A6C1E5;font-size:12px;letter-spacing:0.08em;text-transform:uppercase;">BeyondBorderGroup</div>
        <h1 style="color:#ffffff;font-size:22px;margin:6px 0 0;">New contact form submission</h1>
      </div>
      <div style="background:#ffffff;border-radius:12px;padding:24px 32px;">
        <h2 style="color:#1A1F2E;font-size:14px;letter-spacing:0.06em;text-transform:uppercase;margin:0 0 8px;">Contact</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
          ${row("Name", escapeHtml(name))}
          ${row("Email", `<a href="mailto:${escapeHtml(email)}" style="color:#0A66C2;">${escapeHtml(email)}</a>`)}
          ${row("Phone", phone ? escapeHtml(phone) : "—")}
          ${row("Time zone", tz ? escapeHtml(tz) : "—")}
          ${row("Call language", langLabel)}
        </table>

        <h2 style="color:#1A1F2E;font-size:14px;letter-spacing:0.06em;text-transform:uppercase;margin:0 0 8px;">Direction & stage</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
          ${row("Direction", escapeHtml(directionLabel))}
          ${row("Stage", escapeHtml(stageLabel))}
        </table>

        <h2 style="color:#1A1F2E;font-size:14px;letter-spacing:0.06em;text-transform:uppercase;margin:0 0 8px;">Company</h2>
        <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
          ${row("Company", company ? escapeHtml(company) : "—")}
          ${row("Role", role ? escapeHtml(role) : "—")}
          ${row("Industry", industry ? escapeHtml(industry) : "—")}
          ${row("HQ country", hq ? escapeHtml(hq) : "—")}
          ${row("Website", websiteCell)}
        </table>

        <h2 style="color:#1A1F2E;font-size:14px;letter-spacing:0.06em;text-transform:uppercase;margin:0 0 8px;">Brief</h2>
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
    `Phone: ${phone || "-"}`,
    `Time zone: ${tz || "-"}`,
    `Call language: ${langLabel}`,
    ``,
    `Direction: ${directionLabel}`,
    `Stage: ${stageLabel}`,
    ``,
    `Company: ${company || "-"}`,
    `Role: ${role || "-"}`,
    `Industry: ${industry || "-"}`,
    `HQ: ${hq || "-"}`,
    `Website: ${website || "-"}`,
    ``,
    `Brief:`,
    brief || "(no brief)"
  ].join("\n");
  const resend = new Resend(apiKey);
  const subjectCompany = company ? ` — ${company}` : "";
  const { error } = await resend.emails.send({
    from: SENDER,
    to: RECIPIENT,
    replyTo: email,
    subject: `New enquiry from ${name}${subjectCompany}`,
    html,
    text
  });
  if (error) {
    console.error("Resend error:", error);
    return json(500, { error: "Failed to send email." });
  }
  return json(200, { success: true });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
