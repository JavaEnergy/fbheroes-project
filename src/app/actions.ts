"use server";

import { contactEmailTemplate, confirmationEmailTemplate } from "@/lib/email-templates";
import { type ContactFormSubmission } from "@/lib/contact-interest";
import transporter from "@/lib/mail";
import { appendLeadToSheet } from "@/lib/googleSheets";
import { headers } from "next/headers";

export async function sendContactEmail(formData: ContactFormSubmission) {
  try {
    const sanitized: ContactFormSubmission = {
      name: formData.name.trim().slice(0, 200),
      email: formData.email.trim().toLowerCase().slice(0, 200),
      hotel: formData.hotel.trim().slice(0, 200),
      locations: formData.locations.trim().slice(0, 100),
      message: formData.message.trim().slice(0, 2000),
    };

    const headersList = await headers();
    const referer = headersList.get("referer") ?? "";

    const [sheetsResult, adminMailResult, confirmMailResult] =
      await Promise.allSettled([
        appendLeadToSheet(sanitized, referer),

        transporter.sendMail({
          from: `"F&B Heroes Web" <${process.env.SMTP_USER}>`,
          to: process.env.CONTACT_RECEIVER,
          replyTo: sanitized.email,
          subject: `Neue Anfrage von ${sanitized.name}`,
          html: contactEmailTemplate(sanitized),
        }),

        transporter.sendMail({
          from: `"F&B Heroes" <${process.env.SMTP_USER}>`,
          to: sanitized.email,
          subject: "Vielen Dank für Ihre Nachricht - F&B Heroes",
          html: confirmationEmailTemplate(
            sanitized,
            process.env.BOOKING_LINK ?? "",
          ),
        }),
      ]);

    if (sheetsResult.status === "rejected") {
      console.error("Google Sheets error:", sheetsResult.reason);
    }
    if (adminMailResult.status === "rejected") {
      console.error("Admin mail error:", adminMailResult.reason);
    }
    if (confirmMailResult.status === "rejected") {
      console.error("Confirmation mail error:", confirmMailResult.reason);
    }

    const mailFailed =
      adminMailResult.status === "rejected" &&
      confirmMailResult.status === "rejected";

    if (mailFailed) {
      return { success: false, error: "E-Mail konnte nicht gesendet werden." };
    }

    return { success: true };
  } catch (error) {
    console.error("Contact action error:", error);
    return { success: false, error: "E-Mail konnte nicht gesendet werden." };
  }
}
