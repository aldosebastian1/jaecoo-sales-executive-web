import config from '@/config';

export const generateWALink = (params: {
  type: 'test_drive' | 'inquiry' | 'contact';
  name: string;
  phone: string;
  model?: string;
  date?: string;
  purpose?: string;
  notes?: string;
  message?: string;
  email?: string;
}): string => {
  const businessNumber = config.whatsapp.businessNumber;

  let messageText = '';

  if (params.type === 'test_drive') {
    messageText = `Halo Jaecoo Medan,

Saya tertarik untuk test drive.

Nama: ${params.name}
Nomor WhatsApp: ${params.phone}
Tanggal: ${params.date}
Model: ${params.model}
${params.purpose ? `Tujuan: ${params.purpose}` : ''}
${(params as any).time ? `Waktu: ${(params as any).time}` : ''}
${(params as any).location ? `Lokasi: ${(params as any).location}` : ''}
${params.notes ? `Catatan: ${params.notes}` : ''}

Mohon infonya. Terima kasih.`;
  } else if (params.type === 'inquiry') {
    messageText = `Halo Jaecoo Medan,

Saya tertarik dengan ${params.model}.

Nama: ${params.name}
Nomor: ${params.phone}

Bisakah dikirim informasi lengkap dan harga OTR di Medan?`;
  } else if (params.type === 'contact') {
    messageText = `Halo Jaecoo Medan,

${params.message}

Nama: ${params.name}
Nomor: ${params.phone}
Email: ${params.email}

Terima kasih.`;
  }

  const encodedMessage = encodeURIComponent(messageText.trim());
  return `https://wa.me/${businessNumber?.replace(/\D/g, '')}?text=${encodedMessage}`;
};

export const getSimpleWALink = (message: string): string => {
  const businessNumber = config.whatsapp.businessNumber;
  return `https://wa.me/${businessNumber?.replace(/\D/g, '')}?text=${encodeURIComponent(message)}`;
};
