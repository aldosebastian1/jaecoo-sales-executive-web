'use client';

import React, { useState } from 'react';

const MAPS = {
  amplas: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d837.1572458764272!2d98.70261507295658!3d3.53815659133624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30313b48e6eebead%3A0x2b7315b50d3550a1!2sDealer%20Jaecoo%20Medan%20-%20Amplas!5e0!3m2!1sid!2sus!4v1785046259168!5m2!1sid!2sus",
  centerpoint: "https://maps.google.com/maps?q=Mall%20Centre%20Point%20Medan&t=&z=15&ie=UTF8&iwloc=&output=embed"
};

export default function LocationPopup({ children }: { children?: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLocation, setActiveLocation] = useState<'centerpoint' | 'amplas'>('centerpoint');

  return (
    <>
      {children ? (
        <div onClick={() => setIsOpen(true)} className="cursor-pointer inline-block">
          {children}
        </div>
      ) : (
        <div 
          className="flex flex-col gap-2 cursor-pointer group"
          onClick={() => setIsOpen(true)}
        >
        <div className="flex items-center gap-2">
            <svg className="text-primary group-hover:text-white transition-colors duration-300 shrink-0" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
            </svg>
            <h4 className="font-geist font-semibold text-[15px] text-gray-900">Pilih Lokasi</h4>
        </div>
        <p className="text-gray-700 font-geist text-[13px] leading-relaxed">
            Kunjungi showroom terdekat pilihan Anda.
        </p>
      </div>
      )}

      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm" onClick={() => setIsOpen(false)}>
          <div 
            className="bg-white rounded-2xl p-4 max-w-3xl w-full relative shadow-2xl overflow-hidden" 
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-3 right-3 z-10 text-gray-400 hover:text-gray-900 transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            
            <h3 className="font-geist font-medium text-lg md:text-xl text-gray-900 mb-3 pl-1 text-center md:text-left">Lokasi Dealer Jaecoo</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 items-stretch">
              {/* Maps Iframe Area */}
              <div className="w-full h-56 md:h-full rounded-xl overflow-hidden bg-gray-100 relative order-2 md:order-1">
                  <iframe 
                    src={MAPS[activeLocation]} 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                  />
              </div>

              {/* Address Buttons Area */}
              <div className="flex flex-col gap-3 order-1 md:order-2 justify-start">
                  <button 
                    onClick={() => setActiveLocation('centerpoint')}
                    className={`group text-left p-4 rounded-xl border transition-all duration-300 ${activeLocation === 'centerpoint' ? 'bg-primary border-primary shadow-lg shadow-primary/20' : 'bg-transparent border-primary hover:bg-primary'}`}
                  >
                     <div className="flex justify-between items-start mb-1.5">
                         <h4 className={`font-geist font-medium text-[15px] transition-colors ${activeLocation === 'centerpoint' ? 'text-white' : 'text-primary group-hover:text-white'}`}>City Store Center Point Mall</h4>
                         {activeLocation === 'centerpoint' && (
                             <span className="bg-white text-primary text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-medium shrink-0 ml-2">Aktif</span>
                         )}
                     </div>
                     <p className={`font-geist text-[13px] leading-relaxed transition-colors ${activeLocation === 'centerpoint' ? 'text-white/90' : 'text-gray-500 group-hover:text-white/90'}`}>
                       Mall Centre Point Medan, Jl. Jawa No.8, Buntu, Kec. Medan Tim., Kota Medan, Sumatera Utara.
                     </p>
                  </button>

                  <button 
                    onClick={() => setActiveLocation('amplas')}
                    className={`group text-left p-4 rounded-xl border transition-all duration-300 ${activeLocation === 'amplas' ? 'bg-primary border-primary shadow-lg shadow-primary/20' : 'bg-transparent border-primary hover:bg-primary'}`}
                  >
                     <div className="flex justify-between items-start mb-1.5">
                         <h4 className={`font-geist font-medium text-[15px] transition-colors ${activeLocation === 'amplas' ? 'text-white' : 'text-primary group-hover:text-white'}`}>Jaecoo Medan Amplas (3S)</h4>
                         {activeLocation === 'amplas' && (
                             <span className="bg-white text-primary text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full font-medium shrink-0 ml-2">Aktif</span>
                         )}
                     </div>
                     <p className={`font-geist text-[13px] leading-relaxed transition-colors ${activeLocation === 'amplas' ? 'text-white/90' : 'text-gray-500 group-hover:text-white/90'}`}>
                       Jl. Sisingamangaraja No. KM 6, Harjosari II, Kec. Medan Amplas, Kota Medan, Sumatera Utara.
                     </p>
                  </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
}
