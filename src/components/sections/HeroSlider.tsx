'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { heroSlides } from '@/data/hero-slider';

export default function HeroSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-play logic that resets when currentIndex changes (e.g. manual click/swipe)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 8000); 

    return () => clearInterval(timer);
  }, [currentIndex]);

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const swipeThreshold = 50;
    if (info.offset.x < -swipeThreshold) {
      // Swipe left -> next slide
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    } else if (info.offset.x > swipeThreshold) {
      // Swipe right -> prev slide
      setCurrentIndex((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
    }
  };

  const slide = heroSlides[currentIndex];

  return (
    <motion.div 
      className="absolute inset-0 w-full h-full overflow-hidden"
    >

      
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <AnimatePresence initial={false} custom={currentIndex}>
          <motion.div
            key={currentIndex}
            initial={{ x: '100%', opacity: 1 }}
            animate={{ x: '0%', opacity: 1 }}
            exit={{ x: '-100%', opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.4, 0.0, 0.2, 1] }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            dragDirectionLock={true}
            onDragEnd={handleDragEnd}
            className="absolute inset-0 cursor-grab active:cursor-grabbing will-change-transform"
            style={{ zIndex: 10, touchAction: "pan-y" }}
          >
            <Image
              src={slide.imagePath}
              alt={`Mobil ${slide.title} - Dealer Jaecoo Medan`}
              fill
              priority
              sizes="100vw"
              quality={85}
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      
      <div className="absolute bottom-[88px] md:bottom-[80px] left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
        <div className="flex gap-2 items-center">
          {heroSlides.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`relative rounded-full overflow-hidden backdrop-blur-sm transition-all duration-500 ease-in-out ${
                idx === currentIndex ? 'h-1.5 w-12 sm:w-16 bg-black/40' : 'h-1.5 w-4 sm:w-6 bg-black/20 hover:bg-black/40 cursor-pointer'
              }`}
            >
              {idx === currentIndex && (
                <motion.div 
                  key={`progress-${idx}-${currentIndex}`} // force re-render on index change
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 8, ease: "linear" }}
                  className="absolute left-0 top-0 h-full bg-primary"
                />
              )}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
