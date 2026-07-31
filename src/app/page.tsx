import React from 'react';
import { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import TestDriveSection from '@/components/sections/TestDriveSection';
import WhyJaecoo from '@/components/sections/WhyJaecoo';
import VehicleCatalog from '@/components/sections/VehicleCatalog';
import CustomerJourney from '@/components/sections/CustomerJourney';
import FAQ from '@/components/sections/FAQ';

export const metadata: Metadata = {
  title: {
    absolute: 'Dealer Resmi Jaecoo Medan | Promo Harga OTR & Kredit Termurah 2026',
  },
  description: 'Promo dealer resmi Jaecoo Medan 2026. Dapatkan rincian harga OTR termurah, simulasi paket kredit DP ringan, bunga 0%, & hubungi sales VIP Bastian hari ini!',
  alternates: {
    canonical: '/',
  },
};

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />



      <WhyJaecoo />

      <VehicleCatalog />

      <CustomerJourney />

      <FAQ />

      {/* Main Content Grid: Test Drive & Location */}
      <TestDriveSection />
    </div>
  );
}

