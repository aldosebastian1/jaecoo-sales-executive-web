import React from 'react';
import Link from 'next/link';
import ScrollReveal from '@/components/ui/ScrollReveal';
import HeroLeadCTA from '@/components/forms/HeroLeadCTA';

export default function HeroOverlay() {
  return (
    <div className="relative z-20 max-w-[1440px] w-full h-full mx-auto px-4 sm:px-8 md:px-[60px] flex flex-col justify-start md:justify-center items-start pt-[170px] md:pt-0 pb-[190px] md:pb-32">
      <div className="w-full max-w-2xl h-full md:h-auto flex flex-col mt-0 md:-mt-20">
        <ScrollReveal priority variant="slide-right-short" delay={0.1} className="w-full h-full md:h-auto flex flex-col justify-between md:justify-start items-start text-left">
          <div>
            <div className="inline-flex mb-3">
              <span className="font-geist text-primary text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.15em]">
                SUV PREMIUM UNTUK GAYA HIDUP MODERN
              </span>
            </div>
          <h1 className="font-geist font-light text-[46px] md:text-[84px] text-gray-900 mb-4 md:mb-6 tracking-[-0.03em] leading-[1] whitespace-nowrap">
            JAECOO J5 EV
          </h1>
            <p className="font-geist font-normal text-gray-800 text-[14px] md:text-[18px] leading-[1.6] mb-0 md:mb-12 w-full max-w-lg">
              Teknologi cerdas. Performa buas. Dibuat untuk mereka yang tidak pernah puas dengan standar biasa.
            </p>
          </div>
          <div className="flex flex-row gap-2 sm:gap-4 md:gap-5 w-full sm:w-auto justify-start mb-[5px] md:mb-0">
            <Link href="#katalog" className="font-geist flex-1 sm:flex-none bg-primary text-white px-2 py-3 md:px-7 md:py-3.5 text-[11px] md:text-[16px] font-semibold tracking-[0.02em] rounded-full text-center hover:bg-[#0c626a] transition-all duration-300 flex items-center justify-center">
              JELAJAHI MODEL
            </Link>
            <HeroLeadCTA />
          </div>
        </ScrollReveal>
      </div>

      {/* Value Section (Absolute Bottom to guarantee 4px gap with Badge Slider) */}
      <div className="absolute bottom-[110px] md:bottom-[91px] left-0 w-full flex justify-center px-4 sm:px-8 md:px-[60px]">
        <ScrollReveal priority variant="slide-up" delay={0.3} className="w-full md:w-fit">
          <div className="bg-black/40 backdrop-blur-md rounded-full w-full md:w-fit mx-auto grid grid-cols-4 md:flex md:flex-nowrap justify-center items-center gap-1 md:gap-12 px-2 py-3 md:px-12 md:py-6">
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 text-center md:text-left">
              <svg className="w-[16px] h-[16px] md:w-[28px] md:h-[28px] text-white shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
              <div className="flex flex-col">
                <span className="font-geist font-semibold text-[10px] md:text-[18px] text-white leading-tight">10 Tahun</span>
                <span className="font-geist font-normal text-[8px] md:text-[15px] text-gray-200 hidden sm:block">Garansi Mesin</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 text-center md:text-left">
              <svg className="w-[16px] h-[16px] md:w-[28px] md:h-[28px] text-white shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" /></svg>
              <div className="flex flex-col">
                <span className="font-geist font-semibold text-[10px] md:text-[18px] text-white leading-tight">5 Tahun</span>
                <span className="font-geist font-normal text-[8px] md:text-[15px] text-gray-200 hidden sm:block">Gratis Servis</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 text-center md:text-left">
              <svg className="w-[16px] h-[16px] md:w-[28px] md:h-[28px] text-white shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M3 18v-6a9 9 0 0 1 18 0v6" /><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" /></svg>
              <div className="flex flex-col">
                <span className="font-geist font-semibold text-[10px] md:text-[18px] text-white leading-tight">24/7</span>
                <span className="font-geist font-normal text-[8px] md:text-[15px] text-gray-200 hidden sm:block">Roadside</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-1 md:gap-4 text-center md:text-left">
              <svg className="w-[16px] h-[16px] md:w-[28px] md:h-[28px] text-white shrink-0" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="20" height="14" x="2" y="5" rx="2" /><line x1="2" x2="22" y1="10" y2="10" /></svg>
              <div className="flex flex-col">
                <span className="font-geist font-semibold text-[10px] md:text-[18px] text-white leading-tight">Kredit</span>
                <span className="font-geist font-normal text-[8px] md:text-[15px] text-gray-200 hidden sm:block">Instan</span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
