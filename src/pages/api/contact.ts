import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    console.log('=== API ROUTE CALLED ===');
    console.log('Content-Type:', request.headers.get('content-type'));
    console.log('Method:', request.method);
    
    // Astro parses JSON automatically, we can read it directly
    let body;
    try {
      body = await request.json();
      console.log('Parsed body:', body);
    } catch (e) {
      console.error('Failed to parse JSON:', e);
      // Try to clone and read as text for debugging
      const clonedRequest = request.clone();
      const text = await clonedRequest.text();
      console.log('Raw body text:', text);
      
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Invalid JSON in request',
        details: e instanceof Error ? e.message : String(e)
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    const name = body?.name || '';
    const company = body?.company || '';
    const email = body?.email || '';
    const country = body?.country || '';
    const activity = body?.activity || '';
    const city = body?.city || '';
    const message = body?.message || '';

    console.log('Extracted data:', { name, company, email, country, message });

    // Validatie
    if (!name || !company || !email || !country || !message) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Alle verplichte velden moeten ingevuld zijn' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Email validatie
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Ongeldig email adres' 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verstuur email via Resend
    const resendApiKey = import.meta.env.RESEND_API_KEY;
    
    console.log('RESEND_API_KEY aanwezig?', !!resendApiKey);
    console.log('Environment vars:', Object.keys(import.meta.env));
    
    if (!resendApiKey) {
      console.error('RESEND_API_KEY is niet geconfigureerd');
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Email service is niet geconfigureerd' 
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const emailBody = `Nieuw contactformulier bericht van Neyt website

Naam: ${name}
Bedrijf: ${company}
Email: ${email}
Land: ${country}
Activiteit: ${activity || 'Niet opgegeven'}
Stad: ${city || 'Niet opgegeven'}

Bericht:
${message}`;

    console.log('Sending email via Resend...');
    const resend = new Resend(resendApiKey);
    
    const { data, error } = await resend.emails.send({
      from: 'Neyt Website <noreply@neytfurniture.com>',
      to: ['info@neytfurniture.com', 'salesbe@neytfurniture.com'],
      subject: `Nieuw contact van ${name} - ${company}`,
      text: emailBody,
      reply_to: email
    });

    if (error) {
      console.error('Resend API error:', error);
      return new Response(JSON.stringify({ 
        success: false, 
        error: 'Fout bij het versturen van email',
        details: error.message
      }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }
    
    console.log('Email succesvol verzonden:', data);

    return new Response(JSON.stringify({ 
      success: true 
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Contact form error:', error);
    console.error('Error details:', error instanceof Error ? error.message : String(error));
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return new Response(JSON.stringify({ 
      success: false, 
      error: 'Er is een fout opgetreden',
      details: error instanceof Error ? error.message : String(error)
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
