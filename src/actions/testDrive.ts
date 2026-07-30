"use server";

import { Resend } from "resend";
import { TestDriveSchema, type TestDriveFormData } from "@/lib/validation";

const resend = new Resend(process.env.RESEND_API_KEY);

// Utilitas untuk mencegah injeksi HTML / XSS pada email
const escapeHtml = (unsafe: string | undefined | null) => {
  if (!unsafe) return "";
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

export async function sendTestDriveEmail(data: TestDriveFormData) {
  try {
    // Validate data on the server side using Zod
    const validationResult = await TestDriveSchema.safeParseAsync(data);
    
    if (!validationResult.success) {
      console.error("Server validation error:", validationResult.error);
      return { success: false, error: "Data form tidak valid" };
    }

    const { name, phone, date, time, location, notes } = validationResult.data;
    
    // Note: If using Resend free tier without a verified domain, 
    // you MUST send to the email address associated with your Resend account.
    const recipientEmail = process.env.ADMIN_EMAIL || "admin@jaecoomedan.biz.id";

    const { data: responseData, error } = await resend.emails.send({
      from: "Jaecoo Medan <onboarding@resend.dev>", 
      to: [recipientEmail],
      subject: `[LEAD BARU] Booking Test Drive - ${escapeHtml(name)}`,
      html: `
        <h2>Permintaan Booking Test Drive Baru</h2>
        <p>Anda mendapatkan prospek test drive baru dari website.</p>
        <br />
        <table border="1" cellpadding="8" style="border-collapse: collapse;">
            <tr>
                <td><strong>Nama</strong></td>
                <td>${escapeHtml(name)}</td>
            </tr>
            <tr>
                <td><strong>No. WhatsApp</strong></td>
                <td>${escapeHtml(phone)}</td>
            </tr>
            <tr>
                <td><strong>Tanggal</strong></td>
                <td>${escapeHtml(date)}</td>
            </tr>
            <tr>
                <td><strong>Waktu</strong></td>
                <td>${time ? escapeHtml(time) : "Tidak ditentukan"}</td>
            </tr>
            <tr>
                <td><strong>Lokasi</strong></td>
                <td>${location ? escapeHtml(location) : "Tidak ditentukan"}</td>
            </tr>
            <tr>
                <td><strong>Catatan</strong></td>
                <td>${notes ? escapeHtml(notes) : "-"}</td>
            </tr>
        </table>
        <br />
        <p>Silakan segera hubungi prospek ini melalui WhatsApp.</p>
      `,
    });

    if (error) {
      console.error("Error sending email:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data: responseData };
  } catch (error) {
    console.error("Unexpected error sending email:", error);
    return { success: false, error: "Failed to send email" };
  }
}
