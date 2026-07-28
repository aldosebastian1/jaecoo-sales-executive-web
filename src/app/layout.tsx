import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import type { Metadata, Viewport } from 'next';
import { Inter, Montserrat, Poppins, Geist } from 'next/font/google';
import './globals.css';
import config from '@/config';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingWhatsAppToggle from '@/components/widgets/FloatingWhatsAppToggle';
import NextTopLoader from 'nextjs-toploader';
import Script from 'next/script';


const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const montserrat = Montserrat({ subsets: ['latin'], variable: '--font-montserrat', display: 'swap' });
const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-poppins', display: 'swap' });
const geist = Geist({ subsets: ['latin'], variable: '--font-geist', display: 'swap' });

export const viewport: Viewport = {
  themeColor: '#1A677A',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(config.site.url),
  title: {
    default: config.site.name,
    template: `%s | Jaecoo Medan`,
  },
  description: config.site.description,
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Dealer Jaecoo Medan', 'Sales Jaecoo Medan', 'Showroom Jaecoo Medan', 'Harga OTR Jaecoo Medan', 
    'Dealer Jaecoo Aceh', 'Harga Jaecoo OTR Aceh', 'Promo Jaecoo Aceh',
    'Jaecoo J7 Medan', 'Jaecoo J8 Medan', 'Harga Jaecoo J7 OTR Medan', 'Test Drive Jaecoo Medan', 
    'Kredit Jaecoo Medan', 'Simulasi Cicilan Jaecoo Medan', 'DP Ringan Jaecoo Medan', 'Alamat Dealer Jaecoo Medan',
    'Mobil SUV Premium Jaecoo', 'Beli Mobil Jaecoo Sumatera Utara'
  ],

  openGraph: {
    title: config.site.name,
    description: config.site.description,
    url: config.site.url,
    siteName: config.site.name,
    images: [
      {
        url: config.site.imageUrl,
        width: 1200,
        height: 630,
        alt: config.site.name,
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: config.site.name,
    description: config.site.description,
    images: [config.site.imageUrl],
  },
  authors: [{ name: config.site.author }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoDealer',
              name: config.site.name,
              image: config.site.imageUrl,
              logo: `${config.site.url}/android-chrome-512x512.png`,
              description: config.site.description,
              url: config.site.url,
              telephone: config.whatsapp.businessNumber,
              priceRange: 'Rp 200.000.000 - Rp 900.000.000',
              brand: {
                '@type': 'Brand',
                name: 'Jaecoo'
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Jl. Sisingamangaraja No. KM 6, Harjosari II, Kec. Medan Amplas',
                addressLocality: 'Medan',
                addressRegion: 'Sumatera Utara',
                postalCode: '20147',
                addressCountry: 'ID',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 3.5360000,
                longitude: 98.7060000,
              },
              openingHoursSpecification: [
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: [
                    'Monday',
                    'Tuesday',
                    'Wednesday',
                    'Thursday',
                    'Friday',
                    'Saturday'
                  ],
                  opens: '08:30',
                  closes: '18:00'
                },
                {
                  '@type': 'OpeningHoursSpecification',
                  dayOfWeek: 'Sunday',
                  opens: '10:00',
                  closes: '15:00'
                }
              ],
              sameAs: [
                'https://maps.app.goo.gl/CNc3PR7q9kfcT2tPA',
                'https://www.instagram.com/Jaecoomedan.bastian/',
                'https://www.facebook.com/DealerJaecooMedan/'
              ]
            })
          }}
        />
      </head>
      <body suppressHydrationWarning className={`min-h-screen flex flex-col bg-white text-gray-800 antialiased selection:bg-primary selection:text-white overflow-x-hidden ${inter.variable} ${montserrat.variable} ${poppins.variable} ${geist.variable} font-inter`}>
        {config.analytics.enabled && (config.analytics.gaId || config.analytics.measurementId) && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${config.analytics.gaId || config.analytics.measurementId}`}
              strategy="lazyOnload"
            />
            <Script id="google-analytics" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${config.analytics.gaId || config.analytics.measurementId}');
              `}
            </Script>
          </>
        )}
        <NextTopLoader color="#0F7A83" showSpinner={false} />

        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsAppToggle />

        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

