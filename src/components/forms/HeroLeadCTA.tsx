'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getSimpleWALink } from '@/lib/whatsapp';
import { LeadCTASchema, validateForm } from '@/lib/validation';

export default function HeroLeadCTA() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [errors, setErrors] = useState({ name: '', phone: '' });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const validation = await validateForm(LeadCTASchema, formData);
    
    if (!validation.success) {
      setErrors((validation.errors || { name: '', phone: '' }) as { name: string; phone: string });
      return;
    }

    if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'generate_lead', {
          event_category: 'engagement',
          event_label: 'Lead Magnet Pop-up',
          value: 1
        });
    }
    const waText = `Halo Bastian, saya ${formData.name}. Saya tertarik dan ingin meminta E-Brosur lengkap serta detail hitungan simulasi kredit (Promo Terbaru) untuk mobil Jaecoo.`;
    window.open(getSimpleWALink(waText), '_blank');
    setIsOpen(false);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)} 
        className="font-geist bg-white text-gray-900 border border-transparent hover:border-white hover:bg-primary hover:text-white px-7 py-3 text-[16px] font-medium rounded-full w-full sm:w-auto text-center transition-all duration-300"
      >
        TEST DRIVE
      </button>

      {mounted && createPortal(
        <AnimatePresence>
          {isOpen && (
            <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-transparent pointer-events-auto">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="glass rounded-3xl p-6 sm:p-8 w-full max-w-md relative shadow-[0_20px_50px_rgba(0,0,0,0.25)] border border-white/40 overflow-hidden pointer-events-auto"
              >
                <button 
                  onClick={() => setIsOpen(false)} 
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 transition-colors w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
                  aria-label="Tutup"
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                <div className="mb-6 mt-2 text-center">
                    <h3 className="font-montserrat font-medium text-2xl text-gray-900 uppercase tracking-wider mb-3 leading-tight">
                        Dapatkan <span className="text-primary">Penawaran</span>
                    </h3>
                    
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        <div className="relative">
                            <label className="block font-inter text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-1.5 ml-1">Nama Lengkap</label>
                            <input 
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Masukkan nama Anda" 
                                className={`w-full bg-gray-50 border ${errors.name ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-primary focus:ring-primary/20'} rounded-xl px-4 py-3 text-sm font-inter text-gray-900 focus:outline-none focus:ring-4 transition-all`}
                            />
                            {errors.name && <span className="text-red-500 text-[11px] font-inter mt-1 ml-1 block">{errors.name}</span>}
                        </div>
                        
                        <div className="relative">
                            <label className="block font-inter text-[11px] font-semibold text-gray-500 uppercase tracking-widest mb-1.5 ml-1">Nomor WhatsApp</label>
                            <input 
                                type="tel" 
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Contoh: 081234567890" 
                                className={`w-full bg-gray-50 border ${errors.phone ? 'border-red-400 focus:border-red-500 focus:ring-red-500/20' : 'border-gray-200 focus:border-primary focus:ring-primary/20'} rounded-xl px-4 py-3 text-sm font-inter text-gray-900 focus:outline-none focus:ring-4 transition-all`}
                            />
                            {errors.phone && <span className="text-red-500 text-[11px] font-inter mt-1 ml-1 block">{errors.phone}</span>}
                        </div>
                        
                        <button type="submit" className="w-full bg-primary text-white font-inter font-semibold uppercase tracking-widest text-[13px] py-4 rounded-full hover:bg-primary-hover hover:-translate-y-0.5 transition-all duration-300 mt-2 flex items-center justify-center gap-2">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        DAPATKAN SEKARANG
                    </button>
                    <p className="font-inter text-[10px] text-gray-400 text-center mt-4 tracking-wide">Kami sangat menghargai privasi Anda (100% Aman).</p>
                </form>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      , document.body)}
    </>
  );
}
