
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
      <div className="max-w-[1640px] mx-auto px-4 xl:px-12 relative z-10 mt-12 mb-16">
        <div className="flex flex-col xl:flex-row items-center xl:items-stretch justify-center gap-6 xl:gap-2">
          {steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <ScrollReveal variant="fade-in" delay={index * 0.1} className="w-full flex-1 relative z-10">
                <div className="relative bg-[#FAFAFA] border border-gray-100 rounded-3xl overflow-hidden h-full flex flex-col items-start text-left shadow-sm hover:shadow-md transition-shadow duration-300">
                  {/* Image Container with Badge */}
                  <div className="relative w-full h-[140px] xl:h-[130px] overflow-hidden shrink-0">
                    {/* Badge */}
                    <div className="absolute top-0 left-0 w-8 h-8 bg-primary text-white flex items-center justify-center font-geist font-medium text-sm rounded-br-2xl shadow-sm z-10">
                      {step.id}
                    </div>
                    
                  {/* Cover Image */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image 
                      src={step.image} 
                      alt={step.title}
                      priority
                      fill
                      sizes="(max-width: 1280px) 100vw, 33vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out" 
                    />
                  </div>
                </div>
                
                {/* Content Container */}
                <div className="p-3 xl:px-4 xl:py-4 flex flex-col flex-grow justify-start">
                  <h3 className="font-geist font-medium text-[17px] xl:text-lg text-gray-900 mb-1">{step.title}</h3>
                  <p className="font-geist font-normal text-gray-700 text-[13px] xl:text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                </div>
              </ScrollReveal>

              {/* Arrow */}
              {index < steps.length - 1 && (
                <div className="hidden xl:flex items-center justify-center flex-shrink-0 z-20 -mx-3">
                  <div className="flex items-center justify-center w-6 h-6 rounded-full bg-primary text-white shadow-sm border border-[#FAFAFA]">
                    <svg className="w-3 h-3 ml-px" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              )}
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
            <div className="relative z-10 p-5 lg:p-6 xl:p-7 w-full xl:w-[80%] 2xl:w-[75%] flex flex-col xl:flex-row items-center justify-start gap-4 xl:gap-6">
              
              {/* Text on the left */}
              <div className="text-left shrink-0">
                <h3 className="font-geist font-medium text-2xl md:text-[26px] xl:text-[28px] leading-tight mb-2 tracking-tight">
                  <span className="text-[#5CE1E6]">Siap Memulai</span> <br className="hidden xl:block" /> <span className="text-white">Perjalanan Anda?</span>
                </h3>
                <p className="font-geist font-normal text-gray-200 text-[13px] xl:text-[14px] leading-[1.6]">
                  Dapatkan penawaran eksklusif dan kredit ringan. <br className="hidden xl:block" /> Jadwalkan sesi test drive Anda hari ini.
                </p>
              </div>
              
              {/* Buttons on the right, but still within the 60% block */}
              <div className="flex flex-row gap-3 w-auto shrink-0">
                <Link 
                  href="#test-drive"
                  className="font-geist flex items-center justify-center bg-primary text-white px-[17px] py-[9px] text-[12px] font-semibold tracking-[0.02em] rounded-full text-center hover:bg-[#0c626a] transition-all duration-300 whitespace-nowrap shadow-sm"
                >
                  BOOKING TEST DRIVE
                </Link>
                <WhatsAppButton 
                  href={getSimpleWALink("Halo Bastian, saya tertarik untuk konsultasi dan booking test drive mobil Jaecoo.")}
                  contentName="Customer Journey WA Button"
                  className="font-geist flex justify-center items-center gap-2 bg-white/10 backdrop-blur-md text-white px-[17px] py-[9px] text-[12px] font-semibold tracking-[0.02em] rounded-full text-center border-[1.5px] border-white/50 hover:bg-white hover:text-gray-900 transition-all duration-300 whitespace-nowrap"
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
