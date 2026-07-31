import React from 'react';
import Image from 'next/image';
import ScrollReveal from '@/components/ui/ScrollReveal';
import TestDriveForm from '@/components/forms/TestDriveForm';
import LocationPopup from '@/components/ui/LocationPopup';

export default function TestDriveSection() {
  return (
    <section id="test-drive" className="relative w-full pt-16 md:pt-24 pb-10 md:pb-16 overflow-hidden border-none border-b-0">
        {/* Background Image & Shadow Overlay */}
        <div className="absolute inset-0 z-0">
            <Image src="/images/test-drive-bg.png" alt="Test Drive Jaecoo" fill sizes="100vw" className="object-cover object-center" />
            {/* Soft bottom shadow */}
            <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 md:px-[60px] flex flex-col lg:flex-row justify-between gap-10 items-stretch">
            {/* Left Side: Typography (60%) */}
            <div className="w-full lg:w-[50%] xl:w-[55%] 2xl:w-[60%] flex flex-col justify-between">
                <ScrollReveal delay={0.1} variant="slide-up">
                    <span className="font-geist text-primary text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.2em] block mb-4">
                        TEST DRIVE
                    </span>
                    <h2 className="font-geist font-light text-3xl md:text-[42px] lg:text-[48px] text-gray-900 tracking-[-0.03em] leading-[1.1] mb-6 uppercase">
                        Rasakan Sendiri <span className="font-medium text-primary">Performa Jaecoo</span> di Setiap Perjalanan.
                    </h2>
                    <p className="text-gray-600 font-normal text-base md:text-lg max-w-2xl font-geist leading-relaxed mb-10">
                        Jadwalkan sesi <span className="italic">test drive</span> Anda sekarang dan buktikan langsung sensasi berkendara kelas dunia yang sesungguhnya.
                    </p>
                </ScrollReveal>
            </div>

            {/* Right Side: Form (40%) */}
            <div className="w-full lg:w-[45%] xl:w-[40%] 2xl:w-[35%] shrink-0">
                <ScrollReveal delay={0.3} variant="slide-up">
                    <TestDriveForm />
                </ScrollReveal>
            </div>
        </div>

        {/* 3 Columns Info Grid (Outside Form Grid but visually aligned to left) */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 md:px-[60px] mt-12 md:mt-16">
            <div className="w-full lg:w-[50%] xl:w-[55%] 2xl:w-[60%] pl-4 lg:pl-8">
                <ScrollReveal delay={0.2} variant="slide-up">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 lg:gap-6">
                        {/* Col 1: Pilih Waktu */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <svg className="text-primary" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line>
                                </svg>
                                <h4 className="font-geist font-semibold text-[15px] text-gray-900">Pilih Waktu</h4>
                            </div>
                            <p className="text-gray-700 font-geist text-[13px] leading-relaxed">
                                Tentukan jadwal sesuai rutinitas Anda.
                            </p>
                        </div>
                        
                        {/* Col 2: Pilih Lokasi (Interactive Popup) */}
                        <LocationPopup />

                        {/* Col 3: Rasakan Performa */}
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-2">
                                <svg className="text-primary" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"></path>
                                </svg>
                                <h4 className="font-geist font-semibold text-[15px] text-gray-900">Rasakan Performa</h4>
                            </div>
                            <p className="text-gray-700 font-geist text-[13px] leading-relaxed">
                                Buktikan ketangguhan & kemewahan Jaecoo.
                            </p>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </div>
    </section>
  );
}
