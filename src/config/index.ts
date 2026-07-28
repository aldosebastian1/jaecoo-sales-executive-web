export const config = {
  // WhatsApp Configuration
  whatsapp: {
    businessNumber: process.env.NEXT_PUBLIC_WA_NUMBER || '+6281234567890',
    defaultMessage: 'Halo Jaecoo Medan, saya tertarik dengan produk Anda. Mohon informasinya.',
    messageTemplate: {
      testDrive: (model: string, name: string) =>
        `Halo Jaecoo Medan, saya ${name} tertarik test drive ${model}. Kapan bisa?`,
      contact: (message: string, name: string) =>
        `Halo, nama saya ${name}. ${message}`,
    },
  },

  // Analytics Configuration
  analytics: {
    enabled: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true',
    gaId: process.env.NEXT_PUBLIC_GA_ID,
    measurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID,
    debug: process.env.NODE_ENV === 'development',
  },

  // API Configuration
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || 'https://api.jaecoomedan.biz.id',
    endpoints: {
      testDrive: process.env.NEXT_PUBLIC_FORM_ENDPOINT || '/api/test-drive',
      contact: process.env.NEXT_PUBLIC_CONTACT_ENDPOINT || '/api/contact',
      newsletter: '/api/newsletter',
    },
    timeout: 30000, // 30 seconds
  },

  // Site Metadata
  site: {
    name: 'Dealer Resmi Jaecoo Medan | Harga OTR, Promo & Test Drive',
    description: 'Pusat layanan resmi mobil Jaecoo di Medan yang melayani area Sumatera Utara dan Aceh. Temukan promo terbaru, info harga OTR, simulasi kredit, dan jadwalkan test drive.',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://jaecoomedan.biz.id',
    logo: '/icons/jaecoo-logo-black.avif',
    imageUrl: 'https://jaecoomedan.biz.id/og-image.jpg',
    author: 'Jaecoo Medan Sales Team',
  },

  // Pagination
  pagination: {
    articlesPerPage: 6,
    catalogPerPage: 12,
    testimonialsPerPage: 3,
  },

  // Cache & Performance
  cache: {
    isrRevalidateSeconds: 3600, // 1 hour for Incremental Static Regeneration
    ssgRevalidateTime: '24h', // For getStaticProps
  },

  // Feature Flags
  features: {
    enableFormSubmission: process.env.NEXT_PUBLIC_ENABLE_FORM_SUBMISSION === 'true',
    enableNewsletterSignup: true,
    enableTestDriveForm: true,
    enableMapEmbed: true,
    enableArticleComments: false,
  },

  // Regional Configuration
  region: {
    city: 'Medan',
    country: 'Indonesia',
    currency: 'IDR',
    language: 'id-ID',
  },
};

export default config;
