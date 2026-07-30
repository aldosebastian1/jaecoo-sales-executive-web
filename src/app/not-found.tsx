import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import { getSimpleWALink } from '@/lib/whatsapp';
import WhatsAppButton from '@/components/widgets/WhatsAppButton';
import ScrollReveal from '@/components/ui/ScrollReveal';

export const metadata: Metadata = {
  title: 'Halaman Tidak Ditemukan | Jaecoo Medan',
  description: 'Maaf, halaman yang Anda tuju tidak dapat ditemukan di website Jaecoo Medan.',
};

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-[60px] py-20 bg-[#FAFAFA] overflow-hidden">
      <div className="w-full max-w-2xl mx-auto text-center">
        <ScrollReveal variant="slide-up">
          <div className="inline-flex mb-4">
            <span className="font-geist text-[#1F2937] text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.2em]">
              KESALAHAN 404
            </span>
          </div>
          <h1 className="font-geist font-light text-5xl md:text-[84px] text-gray-900 mb-6 tracking-[-0.03em] leading-none">
            HALAMAN <br className="md:hidden" /> TIDAK DITEMUKAN
          </h1>
          <p className="font-geist font-normal text-gray-800 text-[15px] md:text-[18px] leading-[1.6] mb-10 w-full max-w-lg mx-auto">
            Maaf, rute perjalanan ini sepertinya tidak ada di peta kami. Halaman yang Anda cari mungkin telah dipindahkan atau dihapus.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center items-center">
            <Link 
              href="/" 
              className="font-geist bg-primary text-white px-7 py-3 text-[16px] font-semibold tracking-[0.02em] rounded-full w-full sm:w-auto text-center hover:bg-[#0c626a] transition-all duration-300"
            >
              KEMBALI KE BERANDA
            </Link>
            <WhatsAppButton 
              href={getSimpleWALink("Halo, saya tidak dapat menemukan informasi yang saya cari di website. Bisa dibantu?")}
              contentName="404 WA Button"
              className="font-geist flex justify-center items-center gap-2 bg-transparent text-gray-900 px-7 py-3 text-[16px] font-semibold tracking-[0.02em] rounded-full w-full sm:w-auto text-center border-2 border-gray-900 hover:bg-gray-900 hover:text-white transition-all duration-300"
            >
              HUBUNGI BANTUAN
            </WhatsAppButton>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
