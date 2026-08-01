import { z } from 'zod';

export const LeadCTASchema = z
  .object({
    name: z
      .string()
      .min(3, 'Minimal 3 karakter')
      .max(50, 'Maksimal 50 karakter')
      .regex(/^[a-zA-Z\s'-]+$/, 'Hanya huruf, spasi & petik'),
    phone: z
      .string()
      .regex(/^(\+62|0)[0-9]{9,12}$/, 'Nomor tidak valid (Cth: 0812...)'),
  })
  .strict();

export const TestDriveSchema = z
  .object({
    name: z
      .string()
      .min(3, 'Minimal 3 karakter')
      .max(50, 'Maksimal 50 karakter')
      .regex(/^[a-zA-Z\s'-]+$/, 'Hanya huruf, spasi & petik'),
    phone: z
      .string()
      .regex(/^(\+62|0)[0-9]{9,12}$/, 'Nomor tidak valid (Cth: 0812...)'),
    date: z.string().min(1, 'Pilih tanggal'),
    time: z.string().min(1, 'Pilih waktu'),
    location: z.string().min(1, 'Pilih dealer'),
    notes: z.string().max(500, 'Maksimal 500 karakter').optional().or(z.literal('')),
    honeypot: z.string().max(0, 'Spam terdeteksi').optional().or(z.literal('')),
  })
  .strict();

export const SendEmailSchema = z
  .object({
    name: z.string().min(2, 'Nama terlalu pendek'),
    phone: z.string().min(10, 'Nomor HP tidak valid'),
    modelName: z.string().min(1, 'Model tidak valid'),
    preferredDate: z.string().optional(),
    purpose: z.string().optional(),
    honeypot: z.string().optional(),
  })
  .strict();

export type TestDriveFormData = z.infer<typeof TestDriveSchema>;
export type LeadCTAFormData = z.infer<typeof LeadCTASchema>;
export type SendEmailFormData = z.infer<typeof SendEmailSchema>;

export const validateForm = <T>(schema: z.ZodSchema<T>, data: unknown) => {
  const result = schema.safeParse(data);
  
  if (result.success) {
    return { success: true, data: result.data, errors: null };
  } else {
    const fieldErrors: Record<string, string> = {};
    result.error.errors.forEach((err) => {
      const field = err.path.join('.');
      fieldErrors[field] = err.message;
    });
    return { success: false, data: null, errors: fieldErrors };
  }
};
