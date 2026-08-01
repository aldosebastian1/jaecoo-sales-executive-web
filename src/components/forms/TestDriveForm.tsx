"use client";

import React, { useState } from 'react';
import { generateWALink } from '@/lib/whatsapp';

declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: object) => void;
  }
}
import { motion, AnimatePresence } from 'framer-motion';
import { TestDriveSchema, validateForm } from '@/lib/validation';
import { sendTestDriveEmail } from '@/actions/testDrive';

export default function TestDriveForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    location: '',
    notes: '',
    honeypot: ''
  });
  
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loadingText, setLoadingText] = useState('MEMPROSES...');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    const validation = await validateForm(TestDriveSchema, formData);
    if (!validation.success) {
      setErrors(validation.errors || {});
      setIsSubmitting(false);
      
      // GA4 Tracking - Error Validation
      if (typeof window !== 'undefined' && window.gtag) {
        // Collect field names that have errors
        const errorFields = Object.keys(validation.errors || {}).join(',');
        window.gtag('event', 'form_error', {
          event_category: 'form_validation',
          event_label: 'test_drive_form_new',
          error_fields: errorFields
        });
      }
      
      return;
    }

    // GA4 Tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'generate_lead', {
        event_category: 'form_submission',
        event_label: 'test_drive_form_new',
        location: formData.location
      });
    }

    // Send email notification via Resend
    // Dilakukan di background agar jika gagal tidak menghentikan proses WhatsApp
    sendTestDriveEmail({
      name: formData.name,
      phone: formData.phone,
      date: formData.date,
      time: formData.time,
      location: formData.location,
      notes: formData.notes
    }).catch(console.error);

    const waLink = generateWALink({
      type: 'test_drive',
      name: formData.name,
      phone: formData.phone,
      date: formData.date,
      model: 'Jaecoo (Konsultasi Umum)',
      ...{ time: formData.time, location: formData.location, notes: formData.notes }
    });

    const loadingTexts = ["Memverifikasi data...", "Menyiapkan form WA...", "Mengarahkan..."];
    let textIndex = 0;
    const textInterval = setInterval(() => {
      setLoadingText(loadingTexts[textIndex % loadingTexts.length]);
      textIndex++;
    }, 600);

    setTimeout(() => {
      clearInterval(textInterval);
      setIsSubmitting(false);
      window.location.href = waLink;
    }, 1800);
  };

  return (
      <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-lg flex flex-col relative overflow-hidden">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex-grow flex flex-col"
          >
            <div className="mb-4">
              <h3 className="font-montserrat font-medium text-xl md:text-2xl text-gray-900 tracking-tight mb-2">
                Booking Test Drive
              </h3>
              <p className="font-geist text-gray-500 text-sm leading-relaxed">
                Isi detail di bawah ini dan perwakilan kami akan segera menghubungi Anda untuk konfirmasi jadwal.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 flex-grow flex flex-col">
                {/* Honeypot field - visually hidden */}
                <div style={{ display: 'none' }} aria-hidden="true">
                    <label>Leave this field empty</label>
                    <input type="text" name="honeypot" value={formData.honeypot} onChange={handleChange} tabIndex={-1} autoComplete="off" />
                </div>
                
                {/* Nama & Telepon */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3">
                    <div className="relative">
                        <div className="absolute inset-y-0 top-0 h-[46px] left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </div>
                        <input 
                            id="name"
                            type="text" 
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Nama Lengkap"
                            className={`w-full h-[46px] bg-gray-50/50 border ${errors.name ? 'border-red-500' : 'border-gray-200'} text-gray-900 text-sm py-3 pl-10 pr-3 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`} 
                        />
                        <AnimatePresence>
                          {errors.name && (
                            <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-500 text-[11px] sm:text-xs mt-1.5 pl-1 leading-snug">
                              {errors.name}
                            </motion.p>
                          )}
                        </AnimatePresence>
                    </div>
                    
                    <div className="relative">
                        <div className="absolute inset-y-0 top-0 h-[46px] left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                        </div>
                        <input 
                            id="phone"
                            type="text" 
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="No. WhatsApp Aktif"
                            className={`w-full h-[46px] bg-gray-50/50 border ${errors.phone ? 'border-red-500' : 'border-gray-200'} text-gray-900 text-sm py-3 pl-10 pr-3 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors`} 
                        />
                        <AnimatePresence>
                          {errors.phone && (
                            <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-500 text-[11px] sm:text-xs mt-1.5 pl-1 leading-snug">
                              {errors.phone}
                            </motion.p>
                          )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Tanggal & Waktu (Grid 2 kolom) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-3 pt-2">
                    <div className="relative">
                        <div className="absolute inset-y-0 top-0 h-[46px] left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                        </div>
                        <input 
                            id="date"
                            type="date" 
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            className={`w-full h-[46px] bg-gray-50/50 border ${errors.date ? 'border-red-500' : 'border-gray-200'} text-gray-900 text-sm py-3 pl-10 pr-3 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors [&::-webkit-calendar-picker-indicator]:opacity-0 [&::-webkit-calendar-picker-indicator]:absolute [&::-webkit-calendar-picker-indicator]:left-0 [&::-webkit-calendar-picker-indicator]:w-full [&::-webkit-calendar-picker-indicator]:cursor-pointer`} 
                        />
                        <AnimatePresence>
                          {errors.date && (
                            <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-500 text-[11px] sm:text-xs mt-1.5 pl-1 leading-snug">
                              {errors.date}
                            </motion.p>
                          )}
                        </AnimatePresence>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-y-0 top-0 h-[46px] left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 z-10">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                        </div>
                        <select
                            id="time"
                            name="time"
                            value={formData.time}
                            onChange={handleChange}
                            className={`w-full h-[46px] bg-gray-50/50 border ${errors.time ? 'border-red-500' : 'border-gray-200'} text-gray-900 text-sm py-3 pl-10 pr-8 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none`}
                        >
                            <option value="">Waktu</option>
                            <option value="Pagi (09:00 - 12:00)">Pagi (09:00 - 12:00)</option>
                            <option value="Siang (12:00 - 15:00)">Siang (12:00 - 15:00)</option>
                            <option value="Sore (15:00 - 18:00)">Sore (15:00 - 18:00)</option>
                        </select>
                        <div className="pointer-events-none absolute top-0 h-[46px] right-0 flex items-center px-3 text-gray-400">
                            <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                        <AnimatePresence>
                          {errors.time && (
                            <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-500 text-[11px] sm:text-xs mt-1.5 pl-1 leading-snug">
                              {errors.time}
                            </motion.p>
                          )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Lokasi */}
                <div className="relative pt-2">
                    <div className="absolute inset-y-0 top-2 h-[46px] left-0 pl-3.5 flex items-center pointer-events-none text-gray-400 z-10">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    </div>
                    <select
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className={`w-full h-[46px] bg-gray-50/50 border ${errors.location ? 'border-red-500' : 'border-gray-200'} text-gray-900 text-sm py-3 pl-10 pr-8 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors appearance-none`}
                    >
                        <option value="">Pilih Lokasi Dealer...</option>
                        <option value="Jaecoo Medan Amplas">Jaecoo Medan Amplas (Jl. Sisingamangaraja)</option>
                        <option value="City Store Center Point">City Store Center Point Mall</option>
                    </select>
                    <div className="pointer-events-none absolute top-2 h-[46px] right-0 flex items-center px-3 text-gray-400">
                        <svg className="fill-current h-4 w-4" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                    <AnimatePresence>
                      {errors.location && (
                        <motion.p initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="text-red-500 text-[11px] sm:text-xs mt-1.5 pl-1 leading-snug">
                          {errors.location}
                        </motion.p>
                      )}
                    </AnimatePresence>
                </div>

                {/* Deskripsi Opsional */}
                <div className="relative pt-2">
                    <div className="absolute top-5 left-0 pl-3.5 flex items-start pointer-events-none text-gray-400">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    </div>
                    <textarea 
                        id="notes"
                        name="notes"
                        value={formData.notes}
                        onChange={handleChange}
                        placeholder="Pesan / Catatan (Opsional)"
                        rows={2}
                        className="w-full bg-gray-50/50 border border-gray-200 text-gray-900 text-sm py-3 pl-10 pr-3 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none" 
                    />
                </div>
                
                {/* Submit Button */}
                <motion.button 
                    type="submit"
                    disabled={isSubmitting}
                    whileTap={{ scale: 0.98 }}
                    whileHover={{ scale: 1.01 }}
                    className="w-full bg-primary hover:bg-primary-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-geist text-[14px] font-semibold py-3 px-5 transition-colors mt-2 rounded-full flex items-center justify-center gap-2 shadow-sm"
                >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        <AnimatePresence mode="wait">
                          <motion.span
                            key={loadingText}
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -5 }}
                            transition={{ duration: 0.2 }}
                            className="ml-1"
                          >
                            {loadingText}
                          </motion.span>
                        </AnimatePresence>
                      </>
                    ) : (
                      'Kirim Permintaan'
                    )}
                </motion.button>

                {/* Announcement Secure Data */}
                <div className="flex items-center justify-center gap-1.5 mt-4 text-gray-500">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                    <span className="font-geist text-[11px] font-medium tracking-wide">Data Anda aman bersama kami</span>
                </div>
            </form>
          </motion.div>
      </div>
  );
}
