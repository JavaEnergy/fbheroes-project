import {
  getContactInterestLabel,
  type ContactFormSubmission,
} from "@/lib/contact-interest";

export const contactEmailTemplate = (data: ContactFormSubmission) => {
  const { firstName, lastName, email, company, interest, message } = data;

  return `
    <div style="font-family: sans-serif; max-width: 600px; color: #1a1d1b;">
      <h2 style="color: #0f5238;">New Inquiry: F&B Heroes</h2>
      <p>You have a new message from your website contact form.</p>
      <hr />
      <p><strong>Name:</strong> ${firstName} ${lastName}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Interest:</strong> ${getContactInterestLabel(interest)}</p>
      <br />
      <p><strong>Message:</strong></p>
      <div style="background: #f4f4f2; padding: 20px; border-radius: 8px;">
        ${message}
      </div>
    </div>
  `;
};

export const confirmationEmailTemplate = (
  data: ContactFormSubmission,
  bookingLink: string,
) => {
  const { firstName } = data;

  return `
    <div style="font-family: sans-serif; max-width: 600px; color: #1a1d1b;">
      <div style="background: #0f5238; padding: 32px; border-radius: 12px 12px 0 0; text-align: center;">
        <h1 style="color: #99f6c4; margin: 0; font-size: 28px;">F&B Heroes</h1>
      </div>
      <div style="background: #f4f4f2; padding: 40px; border-radius: 0 0 12px 12px;">
        <h2 style="color: #0f5238; margin-top: 0;">Thank you, ${firstName}!</h2>
        <p style="font-size: 16px; line-height: 1.6; color: #333;">
          We have received your message and will get back to you as soon as possible.
        </p>
        <p style="font-size: 16px; line-height: 1.6; color: #333;">
          In the meantime, you can book a free initial consultation directly with us:
        </p>
        <div style="text-align: center; margin: 32px 0;">
          <a
            href="${bookingLink}"
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
            Book a Free Consultation
          </a>
        </div>
        <p style="font-size: 14px; color: #666; line-height: 1.6;">
          Best regards,<br />
          <strong>The F&B Heroes Team</strong>
        </p>
        <hr style="border: none; border-top: 1px solid #ddd; margin: 24px 0;" />
        <p style="font-size: 12px; color: #999; text-align: center;">
          F&B Heroes · <a href="https://fbheroes.de" style="color: #0f5238;">fbheroes.de</a>
        </p>
      </div>
    </div>
  `;
};
