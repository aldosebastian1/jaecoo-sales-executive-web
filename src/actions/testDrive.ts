"use server";

import { Resend } from "resend";
import { TestDriveSchema, type TestDriveFormData } from "@/lib/validation";

// Pastikan API Key tersedia untuk mencegah error runtime yang tidak jelas
if (!process.env.RESEND_API_KEY) {
  console.warn("WARNING: RESEND_API_KEY is not defined in environment variables.");
}

const resend = new Resend(process.env.RESEND_API_KEY);

// Mendefinisikan tipe kembalian standar yang ketat untuk Server Action
export type ServerActionResponse<T = unknown> = {
  success: boolean;
  error?: string;
  data?: T;
};

/**
 * Utilitas untuk mencegah injeksi HTML / XSS pada email
 * (Pastikan tipe input ketat)
 */
const escapeHtml = (unsafe?: string | null): string => {
  if (!unsafe) return "";
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
};

export async function sendTestDriveEmail(
  data: TestDriveFormData
): Promise<ServerActionResponse> {
  try {
    // Menggunakan safeParse biasa lebih cepat (O(1)) jika tidak ada validasi asinkron di skema Zod
    const validationResult = TestDriveSchema.safeParse(data);
    
    if (!validationResult.success) {
      console.error("Server validation error:", validationResult.error.flatten());
      return { success: false, error: "Data form tidak valid. Silakan periksa kembali." };
    }

    const { name, phone, date, time, location, notes } = validationResult.data;
    
    // Fallback email dengan konstanta yang lebih rapi
    const recipientEmail = process.env.ADMIN_EMAIL ?? "admin@jaecoomedan.biz.id";

    const { data: responseData, error } = await resend.emails.send({
      from: "Jaecoo Medan <onboarding@resend.dev>", 
      to: [recipientEmail],
      subject: `[LEAD BARU] Booking Test Drive - ${escapeHtml(name)}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0052CC;">Permintaan Booking Test Drive Baru</h2>
          <p>Anda mendapatkan prospek test drive baru dari website.</p>
          
          <table border="1" cellpadding="10" style="border-collapse: collapse; width: 100%; margin-top: 20px;">
              <tr>
                  <td style="width: 40%; background-color: #F0F4FF;"><strong>Nama</strong></td>
                  <td>${escapeHtml(name)}</td>
              </tr>
              <tr>
                  <td style="background-color: #F0F4FF;"><strong>No. WhatsApp</strong></td>
                  <td>${escapeHtml(phone)}</td>
              </tr>
              <tr>
                  <td style="background-color: #F0F4FF;"><strong>Tanggal</strong></td>
                  <td>${escapeHtml(date)}</td>
              </tr>
              <tr>
                  <td style="background-color: #F0F4FF;"><strong>Waktu</strong></td>
                  <td>${time ? escapeHtml(time) : "<em>Tidak ditentukan</em>"}</td>
              </tr>
              <tr>
                  <td style="background-color: #F0F4FF;"><strong>Lokasi</strong></td>
                  <td>${location ? escapeHtml(location) : "<em>Tidak ditentukan</em>"}</td>
              </tr>
              <tr>
                  <td style="background-color: #F0F4FF;"><strong>Catatan</strong></td>
                  <td>${notes ? escapeHtml(notes) : "-"}</td>
              </tr>
          </table>
          <br />
          <p>Silakan segera hubungi prospek ini melalui WhatsApp.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API Error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data: responseData };
  } catch (error) {
    console.error("Unexpected error sending test drive email:", error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : "Terjadi kesalahan sistem saat mengirim email" 
    };
  }
}
