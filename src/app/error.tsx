'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { getSimpleWALink } from '@/lib/whatsapp';
import WhatsAppButton from '@/components/widgets/WhatsAppButton';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  
  // Mencatat error ke console client agar tetap bisa terlacak di Production
  useEffect(() => {
    console.error('Application Error Boundary Caught:', error);
  }, [error]);

  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-[60px] py-20 bg-[#FAFAFA] overflow-hidden">
      <div className="w-full max-w-2xl mx-auto text-center">
        <ScrollReveal variant="slide-up">
          <div className="inline-flex mb-4">
            <span className="font-geist text-[#1F2937] text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.2em]">
              KESALAHAN SISTEM
            </span>
          </div>
          <h1 className="font-geist font-light text-5xl md:text-[84px] text-gray-900 mb-6 tracking-[-0.03em] leading-none uppercase">
            TERJADI KENDALA
          </h1>
          <p className="font-geist font-normal text-gray-800 text-[15px] md:text-[18px] leading-[1.6] mb-10 w-full max-w-lg mx-auto">
            Maaf, sistem kami mengalami kendala teknis sementara saat memproses permintaan Anda. Tim engineer kami sedang berupaya memperbaikinya secepat mungkin.
          </p>

          {process.env.NODE_ENV === 'development' && error.message && (
            <div className="bg-red-50 border border-red-100 rounded-2xl p-5 mb-10 text-left overflow-auto max-w-lg mx-auto">
              <p className="text-[13px] font-mono text-red-600 font-medium break-words">
                {error.message}
              </p>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center mt-4">
            <button 
              onClick={() => reset()}
              className="font-geist bg-primary text-white px-7 py-3 text-[16px] font-semibold tracking-[0.02em] rounded-full w-full sm:w-auto text-center hover:bg-[#003399] transition-all duration-300"
            >
              MUAT ULANG
            </button>
            <Link 
              href="/" 
              className="font-geist flex justify-center items-center px-7 py-3 border-2 border-gray-900 text-gray-900 text-[16px] font-semibold uppercase tracking-[0.02em] rounded-full hover:bg-gray-900 hover:text-white transition-all duration-300 w-full sm:w-auto"
            >
              KE BERANDA
            </Link>
          </div>

          <div className="mt-16 pt-8 border-t border-gray-200">
            <p className="font-geist text-[11px] font-semibold text-gray-400 uppercase tracking-[0.2em] mb-6">
              BUTUH BANTUAN SEGERA?
            </p>
            <WhatsAppButton 
              href={getSimpleWALink("Halo Bastian, saya mengalami kendala saat mengakses website Jaecoo Medan.")} 
              contentName="Error 500 WA Button"
              className="inline-flex justify-center items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white font-geist font-semibold px-7 py-3 rounded-full transition-all duration-300 w-full sm:w-auto text-[16px] tracking-[0.02em]"
            >
              HUBUNGI WHATSAPP
            </WhatsAppButton>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
