import { z } from 'zod';

export const LeadCTASchema = z
  .object({
    name: z
      .string()
      .min(3, 'Nama minimal 3 karakter')
      .max(50, 'Nama maksimal 50 karakter')
      .regex(/^[a-zA-Z\s'-]+$/, 'Nama hanya boleh mengandung huruf, spasi, dan tanda petik'),
    phone: z
      .string()
      .regex(/^(\+62|0)[0-9]{9,12}$/, 'Format nomor tidak valid. Contoh: 08123456789'),
  })
  .strict();

export const TestDriveSchema = z
  .object({
    name: z
      .string()
      .min(3, 'Nama minimal 3 karakter')
      .max(50, 'Nama maksimal 50 karakter')
      .regex(/^[a-zA-Z\s'-]+$/, 'Nama hanya boleh mengandung huruf, spasi, dan tanda petik'),
    phone: z
      .string()
      .regex(/^(\+62|0)[0-9]{9,12}$/, 'Format nomor tidak valid. Contoh: 08123456789'),
    date: z.string().min(1, 'Pilih tanggal test drive'),
    time: z.string().min(1, 'Pilih perkiraan waktu'),
    location: z.string().min(1, 'Pilih lokasi showroom'),
    notes: z.string().max(500, 'Catatan maksimal 500 karakter').optional().or(z.literal('')),
    honeypot: z.string().max(0, 'Spam terdeteksi').optional().or(z.literal('')),
  })
  .strict();

export type TestDriveFormData = z.infer<typeof TestDriveSchema>;
export type LeadCTAFormData = z.infer<typeof LeadCTASchema>;

export const validateForm = async (schema: z.ZodSchema, data: unknown) => {
  try {
    const result = await schema.parseAsync(data);
    return { success: true, data: result, errors: null };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const fieldErrors: Record<string, string> = {};
      error.errors.forEach((err) => {
        const field = err.path.join('.');
        fieldErrors[field] = err.message;
      });
      return { success: false, data: null, errors: fieldErrors };
    }
    return { success: false, data: null, errors: { form: 'Validation error' } };
  }
};
