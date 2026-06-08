import { type ContactFormSubmission } from "@/lib/contact-interest";

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

export const contactEmailTemplate = (data: ContactFormSubmission) => {
  const safeName = escapeHtml(data.name);
  const safeEmail = escapeHtml(data.email);
  const safeHotel = escapeHtml(data.hotel);
  const safeLocations = escapeHtml(data.locations);
  const safeMessage = escapeHtml(data.message).replace(/\n/g, "<br />");

  return `
    <div style="font-family: sans-serif; max-width: 600px; color: #1a1d1b;">
      <h2 style="color: #0f5238;">Neue Anfrage: F&amp;B Heroes</h2>
      <p>Über das Kontaktformular der Website ist eine neue Nachricht eingegangen.</p>
      <hr />
      <p><strong>Name:</strong> ${safeName}</p>
      <p><strong>E-Mail:</strong> ${safeEmail}</p>
      <p><strong>Hotel oder Gruppe:</strong> ${safeHotel}</p>
      <p><strong>Anzahl Standorte:</strong> ${safeLocations}</p>
      <br />
      <p><strong>Anliegen:</strong></p>
      <div style="background: #f4f4f2; padding: 20px; border-radius: 8px;">
        ${safeMessage}
      </div>
    </div>
  `;
};

export const confirmationEmailTemplate = (
  data: ContactFormSubmission,
  bookingLink: string,
) => {
  const safeName = escapeHtml(data.name);
  const safeBookingLink = escapeHtml(bookingLink);
  const bookingButton = safeBookingLink
    ? `
        <div style="text-align: center; margin: 32px 0;">
          <a
            href="${safeBookingLink}"
            style="
              background-color: #99f6c4;
              color: #0f5238;
              padding: 16px 40px;
              border-radius: 10px;
              text-decoration: none;
              font-size: 16px;
              font-weight: 700;
              display: inline-block;
            "
          >
            Kostenloses Erstgespräch buchen
          </a>
        </div>
      `
    : "";

  return `
    <div style="font-family: sans-serif; max-width: 600px; color: #1a1d1b;">
      <div style="background: #0f5238; padding: 32px; border-radius: 12px 12px 0 0; text-align: center;">
        <h1 style="color: #99f6c4; margin: 0; font-size: 28px;">F&amp;B Heroes</h1>
      </div>
      <div style="background: #f4f4f2; padding: 40px; border-radius: 0 0 12px 12px;">
        <h2 style="color: #0f5238; margin-top: 0;">Vielen Dank, ${safeName}!</h2>
        <p style="font-size: 16px; line-height: 1.6; color: #333;">
          Wir haben Ihre Nachricht erhalten und melden uns so schnell wie möglich bei Ihnen.
        </p>
        <p style="font-size: 16px; line-height: 1.6; color: #333;">
          In der Zwischenzeit können Sie direkt ein kostenloses Erstgespräch mit uns buchen:
        </p>
        ${bookingButton}
        <p style="font-size: 14px; color: #666; line-height: 1.6;">
          Mit freundlichen Grüßen<br />
          <strong>Ihr F&amp;B Heroes Team</strong>
        </p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 24px 0;" />
        <p style="font-size: 12px; color: #999; line-height: 1.6; text-align: center;">
          F&amp;B Heroes · <a href="https://fbheroes.de" style="color: #0f5238;">fbheroes.de</a><br />
          Entwickelt von <a href="https://cyborg-it.de" style="color: #0f5238;">cyborg-it.de</a>
        </p>
      </div>
    </div>
  `;
};
