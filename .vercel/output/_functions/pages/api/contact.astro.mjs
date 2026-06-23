import { Resend } from 'resend';
export { renderers } from '../../renderers.mjs';

const prerender = false;
const rateLimitMap = /* @__PURE__ */ new Map();
function checkRateLimit(ip) {
  const now = Date.now();
  const limit = rateLimitMap.get(ip);
  if (!limit || now > limit.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + 60 * 60 * 1e3 });
    return true;
  }
  if (limit.count >= 3) {
    return false;
  }
  limit.count++;
  return true;
}
const POST = async ({ request }) => {
  try {
    const ip = request.headers.get("x-forwarded-for") || request.headers.get("cf-connecting-ip") || "unknown";
    if (!checkRateLimit(ip)) {
      return new Response(JSON.stringify({
        success: false,
        error: "Te veel berichten. Probeer het later opnieuw."
      }), {
        status: 429,
        headers: { "Content-Type": "application/json" }
      });
    }
    let body;
    try {
      body = await request.json();
    } catch (e) {
      return new Response(JSON.stringify({
        success: false,
        error: "Invalid JSON in request",
        details: e instanceof Error ? e.message : String(e)
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const name = body?.name || "";
    const company = body?.company || "";
    const email = body?.email || "";
    const country = body?.country || "";
    const activity = body?.activity || "";
    const city = body?.city || "";
    const message = body?.message || "";
    const honeypot = body?.website || "";
    if (honeypot) {
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" }
      });
    }
    if (!name || !company || !email || !country || !message) {
      return new Response(JSON.stringify({
        success: false,
        error: "Alle verplichte velden moeten ingevuld zijn"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({
        success: false,
        error: "Ongeldig email adres"
      }), {
        status: 400,
        headers: { "Content-Type": "application/json" }
      });
    }
    const resendApiKey = "re_Gje2JoB5_HQsmCEcdhwbwHtGcBQ3z51A6";
    if (!resendApiKey) ;
    const emailBody = `Nieuw contactformulier bericht van Neyt website

Naam: ${name}
Bedrijf: ${company}
Email: ${email}
Land: ${country}
Activiteit: ${activity || "Niet opgegeven"}
Stad: ${city || "Niet opgegeven"}

Bericht:
${message}`;
    const resend = new Resend(resendApiKey);
    const { data, error } = await resend.emails.send({
      from: "Neyt Website <noreply@neytfurniture.com>",
      to: ["info@neytfurniture.com", "salesbe@neytfurniture.com"],
      subject: `Nieuw contact van ${name} - ${company}`,
      text: emailBody,
      reply_to: email
    });
    if (error) {
      console.error("Resend API error:", error);
      return new Response(JSON.stringify({
        success: false,
        error: "Fout bij het versturen van email"
      }), {
        status: 500,
        headers: { "Content-Type": "application/json" }
      });
    }
    return new Response(JSON.stringify({
      success: true
    }), {
      status: 200,
      headers: { "Content-Type": "application/json" }
    });
  } catch (error) {
    console.error("Contact form error:", error);
    return new Response(JSON.stringify({
      success: false,
      error: "Er is een fout opgetreden"
    }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  POST,
  prerender
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
