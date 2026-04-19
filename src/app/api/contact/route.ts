import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, service, message } = await req.json();

    // Validation basique
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Champs requis manquants" }),
        { status: 400, headers: { "Content-Type": "application/json" } },
      );
    }

    const {
      SMTP_HOST,
      SMTP_PORT,
      SMTP_USER,
      SMTP_PASS,
      CONTACT_TO,
    } = process.env;

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      return new Response(
        JSON.stringify({ error: "Configuration SMTP manquante côté serveur" }),
        { status: 500, headers: { "Content-Type": "application/json" } },
      );
    }

    const port = Number(SMTP_PORT) || 465;

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port,
      secure: port === 465, // true pour 465, false pour 587
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    const to = CONTACT_TO || SMTP_USER;

    const html = `
      <div style="font-family:Inter,Arial,sans-serif;max-width:600px;margin:0 auto;padding:24px;background:#0A0A0A;color:#F5F5F7;border-radius:12px;">
        <h2 style="color:#A855F7;margin:0 0 16px;">Nouvelle demande via le formulaire Klaivia</h2>
        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr><td style="padding:8px 0;color:#A1A1AA;width:120px;">Nom</td><td style="padding:8px 0;"><strong>${escapeHtml(name)}</strong></td></tr>
          <tr><td style="padding:8px 0;color:#A1A1AA;">Email</td><td style="padding:8px 0;"><a href="mailto:${escapeHtml(email)}" style="color:#A855F7;">${escapeHtml(email)}</a></td></tr>
          <tr><td style="padding:8px 0;color:#A1A1AA;">Service</td><td style="padding:8px 0;">${escapeHtml(service || "—")}</td></tr>
        </table>
        <div style="margin-top:20px;padding:16px;background:#111111;border:1px solid #1E1E1E;border-radius:8px;">
          <div style="color:#A1A1AA;font-size:12px;margin-bottom:8px;text-transform:uppercase;letter-spacing:1px;">Message</div>
          <div style="white-space:pre-wrap;line-height:1.6;">${escapeHtml(message)}</div>
        </div>
        <p style="color:#A1A1AA;font-size:12px;margin-top:20px;">Envoyé depuis klaivia.ch</p>
      </div>
    `;

    const text = `Nouvelle demande Klaivia\n\nNom: ${name}\nEmail: ${email}\nService: ${service || "—"}\n\nMessage:\n${message}`;

    await transporter.sendMail({
      from: `"Klaivia Site" <${SMTP_USER}>`,
      to,
      replyTo: email,
      subject: `Nouveau contact — ${name} (${service || "Sans service"})`,
      text,
      html,
    });

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("Erreur envoi email contact:", err);
    return new Response(
      JSON.stringify({ error: "Erreur lors de l'envoi. Réessaie plus tard." }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
