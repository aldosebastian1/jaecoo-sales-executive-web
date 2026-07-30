"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

interface TestDriveData {
  name: string;
  phone: string;
  date: string;
  time: string;
  location: string;
  notes: string;
}

export async function sendTestDriveEmail(data: TestDriveData) {
  try {
    const { name, phone, date, time, location, notes } = data;
    
    // Note: If using Resend free tier without a verified domain, 
    // you MUST send to the email address associated with your Resend account.
    const recipientEmail = process.env.ADMIN_EMAIL || "admin@jaecoomedan.biz.id";

    const { data: responseData, error } = await resend.emails.send({
      from: "Jaecoo Medan <onboarding@resend.dev>", 
      to: [recipientEmail],
      subject: `[LEAD BARU] Booking Test Drive - ${name}`,
      html: `
        <h2>Permintaan Booking Test Drive Baru</h2>
        <p>Anda mendapatkan prospek test drive baru dari website.</p>
        <br />
        <table border="1" cellpadding="8" style="border-collapse: collapse;">
            <tr>
                <td><strong>Nama</strong></td>
                <td>${name}</td>
            </tr>
            <tr>
                <td><strong>No. WhatsApp</strong></td>
                <td>${phone}</td>
            </tr>
            <tr>
                <td><strong>Tanggal</strong></td>
                <td>${date}</td>
            </tr>
            <tr>
                <td><strong>Waktu</strong></td>
                <td>${time || "Tidak ditentukan"}</td>
            </tr>
            <tr>
                <td><strong>Lokasi</strong></td>
                <td>${location || "Tidak ditentukan"}</td>
            </tr>
            <tr>
                <td><strong>Catatan</strong></td>
                <td>${notes || "-"}</td>
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
