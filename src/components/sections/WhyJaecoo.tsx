import React from 'react';
import Image from 'next/image';
import ScrollReveal from '../ui/ScrollReveal';

const cards = [
  {
    id: 1,
    title: "Desain Premium",
    description: "Estetika modern yang memadukan garis tegas dan proporsi elegan, menciptakan kehadiran yang tak terlupakan di jalan.",
    image: "/images/why-jaecoo/card-feature.jpeg"
  },
  {
    id: 2,
    title: "Teknologi Cerdas",
    description: "Dilengkapi dengan sistem AR-HUD, layar sentuh interaktif, dan fitur keselamatan ADAS mutakhir.",
    image: "/images/why-jaecoo/card-feature.jpeg"
  },
  {
    id: 3,
    title: "Performa Tangguh",
    description: "Sistem penggerak AWD cerdas (ARDIS) yang siap menaklukkan berbagai medan dari perkotaan hingga off-road ringan.",
    image: "/images/why-jaecoo/card-feature.jpeg"
  },
  {
    id: 4,
    title: "Garansi Panjang",
    description: "Ketenangan pikiran dengan garansi mesin 10 tahun dan layanan roadside assistance 24/7.",
    image: "/images/why-jaecoo/card-feature.jpeg"
  }
];

export default function WhyJaecoo() {
  return (
    <section id="why-jaecoo" className="w-full py-16 md:py-20 px-4 sm:px-6 md:px-[60px] relative bg-white overflow-hidden">
      {/* Background Image with Fixed Height */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[url('/images/why-jaecoo/why-jaecoo-bg.png')] bg-cover bg-top bg-no-repeat">
        {/* Thick Gradient Fade - Absolute bottom edge of the background */}
        <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-start mb-10 md:mb-12">
          <ScrollReveal variant="slide-up">
            <div className="inline-flex mb-4">
              <span className="font-geist text-[#1F2937] text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.2em]">
                MENGAPA MEMILIH KAMI
              </span>
            </div>
            <h2 className="font-geist font-light text-4xl md:text-[64px] text-gray-900 mb-6 tracking-[-0.03em] leading-none whitespace-nowrap">
              WHY JAECOO
            </h2>
            <p className="font-geist font-normal text-gray-800 text-[15px] md:text-[18px] leading-[1.6] max-w-2xl">
              Jaecoo menggabungkan ketangguhan off-road sejati dengan kemewahan urban. Dirancang untuk para inovator yang menghargai kualitas, performa, dan teknologi terdepan.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
          {cards.map((card, index) => (
            <ScrollReveal key={card.id} delay={0.1 * index} variant="slide-up">
              <div className="group flex flex-col bg-[#FAFAFA] rounded-3xl overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 border border-gray-100/50 h-full">
                {/* Image Container with Badge */}
                <div className="relative w-full h-[130px] lg:h-[120px] xl:h-[130px] overflow-hidden">
                  {/* Badge */}
                  <div className="absolute top-4 left-4 z-10 w-7 h-7 bg-primary rounded-full flex items-center justify-center shadow-[0_4px_12px_-4px_rgba(15,122,131,0.5)]">
                    <span className="font-geist font-medium text-white text-[12px]">0{card.id}</span>
                  </div>
                  
                  {/* Image */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image 
                      src={card.image} 
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-4 md:p-5 flex flex-col flex-grow">
                  <h3 className="font-geist text-[18px] md:text-[20px] font-semibold text-primary mb-1">
                    {card.title}
                  </h3>
                  <p className="font-geist text-gray-500 leading-relaxed text-[14px]">
                    {card.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Subtle Background Logo / Section Footer */}
        <div className="flex justify-center mt-16 md:mt-20">
          <ScrollReveal variant="fade-in" delay={0.2}>
            <Image 
              src="/icons/jaecoo-logo-black.avif" 
              alt="Jaecoo Logo" 
              width={200}
              height={56}
              className="h-10 md:h-14 w-auto object-contain"
            />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

