import React from 'react';
import Image from 'next/image';
import ScrollReveal from '../ui/ScrollReveal';

const cards = [
  {
    id: 1,
    title: "SUV PREMIUM",
    description: "Desain modern dan elegan yang memadukan gaya, kenyamanan, dan fungsionalitas.",
    image: "/images/why-jaecoo/card-feature1.jpg"
  },
  {
    id: 2,
    title: "INTELLIGENT TECHNOLOGY",
    description: "Dilengkapi teknologi cerdas untuk membantu Anda tetap terhubung dan aman di setiap perjalanan.",
    image: "/images/why-jaecoo/card-feature2.jpg"
  },
  {
    id: 3,
    title: "PERFORMA ANDAL",
    description: "Dirancang untuk berbagai kondisi jalan, memberikan performa stabil dan efisien.",
    image: "/images/why-jaecoo/card-feature3.jpg"
  },
  {
    id: 4,
    title: "KENYAMANAN MAKSIMAL",
    description: "Ruang kabin luas dengan material berkualitas tinggi untuk pengalaman berkendara yang lebih baik.",
    image: "/images/why-jaecoo/card-feature4.jpg"
  }
];

export default function WhyJaecoo() {
  return (
    <section id="why-jaecoo" className="w-full py-16 md:py-20 px-4 sm:px-8 md:px-[60px] relative bg-white overflow-hidden">
      {/* Background Image with Fixed Height */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-[url('/images/why-jaecoo/why-jaecoo-bg.png')] bg-cover bg-center md:bg-top bg-no-repeat">
        {/* Thick Gradient Fade - Absolute bottom edge of the background */}
        <div className="absolute bottom-0 left-0 w-full h-[150px] bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
      </div>

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Header Section */}
        <div className="flex flex-col items-start mb-10 md:mb-12">
          <ScrollReveal variant="slide-up">
            <div className="inline-flex mb-4">
              <span className="font-geist text-gray-800 text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.2em]">
                MENGAPA MEMILIH KAMI
              </span>
            </div>
            <h2 className="font-geist font-light text-4xl md:text-[64px] text-gray-900 mb-6 tracking-[-0.03em] leading-none whitespace-nowrap">
              WHY JAECOO
            </h2>
            <p className="font-geist font-normal text-gray-800 text-[15px] md:text-[18px] leading-[1.6] max-w-2xl">
              Jaecoo hadir untuk mereka yang menginginkan lebih dari sekadar mobil. Kami menghadirkan teknologi cerdas, desain elegan, dan performa andal untuk setiap perjalanan Anda.
            </p>
          </ScrollReveal>
        </div>

        {/* Cards Section */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-5">
          {cards.map((card, index) => (
            <ScrollReveal key={card.id} delay={0.1 * index} variant="slide-up">
              <div className="group flex flex-row sm:flex-col bg-gray-50 rounded-2xl sm:rounded-3xl overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] transition-all duration-500 border border-gray-100/50 h-full items-stretch shadow-sm sm:shadow-none">
                {/* Image Container with Badge */}
                <div className="relative w-[130px] shrink-0 sm:w-full sm:h-[150px] lg:h-[120px] xl:h-[130px] overflow-hidden">
                  {/* Badge */}
                  <div className="absolute top-1 left-1 sm:top-2 sm:left-2 z-10 w-6 h-6 sm:w-7 sm:h-7 bg-primary rounded-full flex items-center justify-center shadow-[0_4px_12px_-4px_rgba(15,122,131,0.5)]">
                    <span className="font-geist font-medium text-white text-[10px] sm:text-[12px]">0{card.id}</span>
                  </div>
                  
                  {/* Image */}
                  <div className="absolute inset-0 w-full h-full">
                    <Image 
                      src={card.image} 
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 130px, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-[40%_center]"
                    />
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-4 sm:p-4 md:p-5 flex flex-col flex-grow justify-center">
                  <h3 className="font-geist text-[15px] sm:text-[18px] md:text-[20px] font-semibold text-primary mb-1">
                    {card.title}
                  </h3>
                  <p className="font-geist text-gray-500 leading-relaxed text-[12px] sm:text-[14px]">
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

