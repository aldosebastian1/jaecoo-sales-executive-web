
import React from 'react';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Link from 'next/link';
import { getSimpleWALink } from '@/lib/whatsapp';
import WhatsAppButton from '@/components/widgets/WhatsAppButton';
import Image from 'next/image';

const steps = [
  {
    id: 1,
    title: 'Konsultasi Awal',
    description: 'Hubungi tim sales kami untuk mendapatkan informasi harga, promo terbaru, dan simulasi kredit.',
    image: '/images/step-1.png'
  },
  {
    id: 2,
    title: 'Test Drive',
    description: 'Rasakan langsung performa dan kenyamanan Jaecoo dengan menjadwalkan test drive di lokasi Anda.',
    image: '/images/step-1.png'
  },
  {
    id: 3,
    title: 'Proses SPK & Kredit',
    description: 'Pengisian Surat Pesanan Kendaraan (SPK) dan proses approval kredit dengan cepat dan mudah.',
    image: '/images/step-1.png'
  },
  {
    id: 4,
    title: 'Pemberkasan',
    description: 'Proses pengurusan STNK, BPKB, dan plat nomor kendaraan oleh tim kami hingga selesai.',
    image: '/images/step-1.png'
  },
  {
    id: 5,
    title: 'Pengiriman Mobil',
    description: 'Mobil impian Anda diantar langsung ke garasi rumah Anda dengan kondisi prima dan siap jalan.',
    image: '/images/step-1.png'
  }
];

export default function CustomerJourney() {
  return (
    <section className="relative w-full py-16 md:py-[80px] bg-white overflow-hidden">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src="/images/customer-journey-bg.png"
          alt="Jaecoo Customer Journey Background"
          fill
          className="object-cover object-center"
          quality={100}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-[60px] relative z-10">
        {/* Header Section */}
        <ScrollReveal variant="slide-up">
          <div className="flex flex-col items-start text-left">
            <span className="font-geist text-primary text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.2em] mb-4">
              PROSES PEMBELIAN
            </span>
            <h2 className="font-geist font-light text-4xl md:text-5xl text-gray-900 mb-6 uppercase tracking-[0.1em]">
              CUSTOMER JOURNEY
            </h2>
            <p className="font-geist font-normal text-gray-600 text-[15px] md:text-[18px] leading-[1.6] max-w-2xl">
              Kami memastikan setiap langkah dari konsultasi pertama hingga mobil tiba di garasi Anda berjalan dengan transparan, mudah, dan bebas hambatan.
            </p>
          </div>
        </ScrollReveal>
      </div>

      {/* Steps Grid - Wider Container to give cards more space */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-[60px] relative z-10 mt-12 mb-16">
        <div 
          className="flex lg:grid lg:grid-cols-5 gap-4 sm:gap-5 overflow-x-auto lg:overflow-visible snap-x snap-mandatory pb-8 lg:pb-0 pl-4 lg:pl-0 -mr-4 pr-4 lg:mr-0 lg:pr-0 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <ScrollReveal variant="fade-in" delay={index * 0.1} className="w-[180px] sm:w-[200px] lg:w-auto shrink-0 lg:shrink snap-start relative z-10 h-full">
                <div className="relative bg-[#FAFAFA] border border-gray-100 rounded-3xl overflow-hidden h-full flex flex-col items-start text-left shadow-sm">
                  {/* Image Container with Badge */}
                  <div className="relative w-full h-[100px] sm:h-[110px] lg:h-[120px] xl:h-[130px] overflow-hidden shrink-0">
                    {/* Badge */}
                    <div className="absolute top-0 left-0 w-7 h-7 bg-primary text-white flex items-center justify-center font-geist font-medium text-[11px] sm:text-xs rounded-br-xl shadow-sm z-10">
                      {step.id}
                    </div>
                    
                  {/* Cover Image */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image 
                      src={step.image} 
                      alt={step.title}
                      fill
                      sizes="(max-width: 1280px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
                    />
                  </div>
                </div>
                
                {/* Content Container */}
                <div className="p-3 sm:p-4 flex flex-col flex-grow justify-start">
                  <h3 className="font-geist font-medium text-[13px] sm:text-[14px] lg:text-[15px] text-gray-900 mb-1 leading-tight">{step.title}</h3>
                  <p className="font-geist font-normal text-gray-600 text-[10px] sm:text-[11px] lg:text-[12px] leading-relaxed">
                    {step.description}
                  </p>
                </div>
                </div>
              {/* Arrow (Absolutely positioned so it doesn't break flex spacing) */}
              {index < steps.length - 1 && (
                <div className="absolute top-[45%] -right-3 sm:-right-4 lg:-right-5 -translate-y-1/2 z-20 flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-primary text-white shadow-sm border border-[#FAFAFA]">
                  <svg className="w-2.5 h-2.5 sm:w-3 sm:h-3 ml-px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </ScrollReveal>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-[60px] relative z-10">
        {/* Long Card Bottom */}
        <ScrollReveal variant="slide-up" delay={0.4}>
          <div className="relative w-full rounded-[1.5rem] overflow-hidden flex flex-col shadow-lg bg-[#FAFAFA]">
            {/* Background Image */}
            <div className="absolute inset-0 w-full h-full z-0">
              <Image 
                src="/images/journey-bottom-bg.png" 
                alt="Siap Memulai Perjalanan" 
                fill 
                className="object-cover object-center" 
              />
            </div>
            
            {/* Fade Overlay (Hitam/Gelap dan hanya setengah jalan) */}
            <div className="absolute top-0 left-0 bottom-0 w-full md:w-[70%] lg:w-[55%] xl:w-[48%] bg-gradient-to-r from-black/95 via-black/80 to-transparent z-0"></div>
            
            
            {/* Content constrained to left area */}
            <div className="relative z-10 px-6 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-10 xl:px-12 xl:py-8 w-full xl:w-[85%] 2xl:w-[80%] flex flex-col xl:flex-row items-start xl:items-center justify-start gap-5 xl:gap-4 text-left">
              
              {/* Text on the left */}
              <div className="w-full xl:w-auto">
                <h3 className="font-geist font-medium text-[22px] sm:text-2xl md:text-[26px] xl:text-[28px] leading-[1.3] xl:leading-tight mb-3 xl:mb-2 tracking-tight">
                  <span className="text-[#5CE1E6]">Siap Memulai</span> <br /> <span className="text-white">Perjalanan Anda?</span>
                </h3>
                <p className="font-geist font-normal text-gray-300 xl:text-gray-200 text-[13px] sm:text-[14px] leading-[1.6] max-w-[340px] sm:max-w-md xl:max-w-[340px]">
                  Dapatkan penawaran eksklusif dan kredit ringan. <br /> Jadwalkan sesi test drive Anda hari ini.
                </p>
              </div>
              
              {/* Buttons on the left, next to text on desktop */}
              <div className="flex flex-row gap-2 sm:gap-3 w-full sm:w-auto shrink-0 mt-2 xl:mt-0 justify-start">
                <Link 
                  href="#test-drive"
                  className="font-geist flex-1 sm:flex-none flex items-center justify-center bg-primary text-white px-2 sm:px-[20px] xl:px-[17px] py-3 xl:py-[9px] text-[10px] sm:text-[13px] xl:text-[12px] font-semibold tracking-[0.02em] rounded-full text-center hover:bg-primary-800 transition-all duration-300 shadow-sm"
                >
                  BOOKING TEST DRIVE
                </Link>
                <WhatsAppButton 
                  href={getSimpleWALink("Halo Bastian, saya tertarik untuk konsultasi dan booking test drive mobil Jaecoo.")}
                  contentName="Customer Journey WA Button"
                  className="font-geist flex-1 sm:flex-none flex justify-center items-center gap-1 sm:gap-2 bg-white/10 backdrop-blur-md text-white px-2 sm:px-[20px] xl:px-[17px] py-3 xl:py-[9px] text-[10px] sm:text-[13px] xl:text-[12px] font-semibold tracking-[0.02em] rounded-full text-center border-[1.5px] border-white/50 hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  HUBUNGI WHATSAPP
                </WhatsAppButton>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
