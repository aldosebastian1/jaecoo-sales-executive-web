import React from 'react';
import HeroSlider from '@/components/sections/HeroSlider';
import HeroOverlay from '@/components/sections/HeroOverlay';

export default function HeroSection() {
  return (
    <section className="relative w-full h-[100svh] min-h-[600px] max-h-[900px] flex items-center overflow-hidden bg-[#FAFAFA]">
      {/* Full bleed slider background with max-width to prevent extreme zooming */}
      <div className="absolute inset-0 z-0 w-full max-w-[1440px] mx-auto">
        <HeroSlider />
      </div>
      
      {/* Main Content Overlay */}
      <HeroOverlay />
    </section>
  );
}
