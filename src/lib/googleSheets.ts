import { google } from "googleapis";
import type { ContactFormSubmission } from "@/lib/contact-interest";

const auth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

export async function appendLeadToSheet(
  data: ContactFormSubmission,
  pageUrl: string,
) {
  const sheets = google.sheets({ version: "v4", auth });
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const bookingLink = process.env.BOOKING_LINK ?? "";

  const now = new Date().toISOString();

  const row = [
    now,
    data.firstName,
    data.lastName,
    data.email,
    data.company,
    data.interest,
    data.message,
    pageUrl,
    "website",
    "New",
    bookingLink,
  ];

  // Get the actual first sheet name from the spreadsheet to avoid tab name mismatches
  const meta = await sheets.spreadsheets.get({ spreadsheetId });
  const firstSheet = meta.data.sheets?.[0]?.properties?.title ?? "Sheet1";

  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range: `${firstSheet}!A:K`,
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [row] },
  });
}
