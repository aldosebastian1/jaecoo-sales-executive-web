'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';

import { vehicles } from '@/data/vehicles';

export default function VehicleCatalog() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - (clientWidth / 1.5) : scrollLeft + (clientWidth / 1.5);
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="katalog" className="py-16 md:py-20 border-t border-gray-100 overflow-hidden relative">
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <Image
          src="/images/vehicle-catalog-bg.png"
          alt="Jaecoo Vehicle Catalog Background"
          fill
          className="object-cover object-center"
          quality={100}
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-[60px] relative z-10">
        <ScrollReveal variant="slide-up">
          <div className="flex flex-col items-start mb-12">
            <span className="font-geist text-[#0F7A83] text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.2em] block mb-3">
              KATALOG KENDARAAN
            </span>
            <h2 className="font-geist font-light text-4xl md:text-5xl text-gray-900 tracking-[-0.03em] uppercase">
              Pilih Perjalanan Anda
            </h2>
          </div>
        </ScrollReveal>

        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-2 -mx-4 px-4 sm:mx-0 sm:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {vehicles.map((vehicle) => (
            <div 
              key={vehicle.id} 
              className="snap-start shrink-0 w-[85vw] sm:w-[calc(50%-1rem)] md:w-[calc(33.333333%-1.33rem)] flex flex-col border border-black/20 bg-white overflow-hidden group hover:border-black/40 transition-colors duration-300"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <Image 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  priority 
                  fill
                  sizes="(max-width: 768px) 85vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="pt-0 pb-0 px-5 -mt-2 relative z-10 flex justify-between items-start gap-3 lg:gap-2">
                <div className="flex flex-col gap-1 text-left">
                  <h3 className="font-geist font-semibold text-xl md:text-2xl text-gray-900 leading-none tracking-tight">{vehicle.name}</h3>
                  <p className="font-geist font-medium text-[#0F7A83]/80 text-xs md:text-sm uppercase tracking-wider mt-0.5">{vehicle.slogan}</p>
                </div>
                <div className="flex flex-col gap-1 text-right">
                  <span className="font-geist font-medium text-sm md:text-base text-gray-500 leading-none">{vehicle.priceLabel}</span>
                  <span className="font-geist font-bold text-[#0F7A83] text-sm md:text-lg uppercase tracking-wider mt-0.5">{vehicle.priceValue}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Controls Below */}
        <div className="flex justify-center gap-4 mt-2 hidden md:flex">
          <button 
            onClick={() => scroll('left')}
            className="w-10 h-10 rounded-full bg-[#0F7A83] border border-[#0F7A83] flex items-center justify-center text-white hover:bg-white hover:text-[#0F7A83] transition-all duration-300 shadow-sm"
            aria-label="Geser ke Kiri"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          </button>
          <button 
            onClick={() => scroll('right')}
            className="w-10 h-10 rounded-full bg-[#0F7A83] border border-[#0F7A83] flex items-center justify-center text-white hover:bg-white hover:text-[#0F7A83] transition-all duration-300 shadow-sm"
            aria-label="Geser ke Kanan"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </button>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}} />
    </section>
  );
}
