import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import HeroLeadCTA from '@/components/forms/HeroLeadCTA';

export default function HeroOverlay() {
  return (
    <div className="relative z-20 max-w-[1440px] w-full h-full mx-auto px-4 sm:px-[60px] flex flex-col justify-center items-start pt-0 pb-32">
      <div className="w-full max-w-2xl flex flex-col items-start text-left">
        <ScrollReveal priority variant="slide-right-short" delay={0.1} className="w-full flex flex-col items-start text-left">
          <div className="inline-flex mb-4 pt-6">
            <span className="font-geist bg-primary text-white px-4 py-1.5 rounded-full text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.15em] shadow-sm">
              SUV PREMIUM UNTUK GAYA HIDUP MODERN
            </span>
          </div>
          <h1 className="font-geist font-light text-5xl md:text-[84px] text-gray-900 mb-6 tracking-[-0.03em] leading-none whitespace-nowrap">
            JAECOO J5 EV
          </h1>
          <p className="font-geist font-normal text-gray-800 text-[15px] md:text-[18px] leading-[1.6] mb-10 w-full max-w-lg">
            Teknologi cerdas. Performa buas. Dibuat untuk mereka yang tidak pernah puas dengan standar biasa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-start">
            <Link href="#katalog" className="font-geist bg-primary text-white px-7 py-3 text-[16px] font-semibold tracking-[0.02em] rounded-full w-full sm:w-auto text-center hover:bg-[#0c626a] transition-all duration-300">
              JELAJAHI MODEL
            </Link>
            <HeroLeadCTA />
          </div>
        </ScrollReveal>
      </div>

      {/* Value Section (Absolute Bottom to guarantee 4px gap with Badge Slider) */}
      <div className="absolute bottom-[44px] left-0 w-full flex justify-center px-4 sm:px-[60px]">
        <ScrollReveal priority variant="slide-up" delay={0.3}>
          <div className="bg-black/40 backdrop-blur-md rounded-[3rem] md:rounded-full w-fit mx-auto flex flex-wrap md:flex-nowrap justify-center items-center gap-6 md:gap-12 px-8 md:px-12 py-5 md:py-6">
            <div className="flex items-center gap-4">
              <svg className="w-[28px] h-[28px] text-white" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              <div className="flex flex-col">
                <span className="font-geist font-semibold text-[18px] text-white leading-tight">10 Tahun</span>
                <span className="font-geist font-normal text-[15px] text-gray-200">Garansi Mesin</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <svg className="w-[28px] h-[28px] text-white" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
              <div className="flex flex-col">
                <span className="font-geist font-semibold text-[18px] text-white leading-tight">5 Tahun</span>
                <span className="font-geist font-normal text-[15px] text-gray-200">Gratis Servis</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <svg className="w-[28px] h-[28px] text-white" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>
              <div className="flex flex-col">
                <span className="font-geist font-semibold text-[18px] text-white leading-tight">24/7</span>
                <span className="font-geist font-normal text-[15px] text-gray-200">Roadside Assist</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <svg className="w-[28px] h-[28px] text-white" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
              <div className="flex flex-col">
                <span className="font-geist font-semibold text-[18px] text-white leading-tight">Kredit Instan</span>
                <span className="font-geist font-normal text-[15px] text-gray-200">Bunga Spesial</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
