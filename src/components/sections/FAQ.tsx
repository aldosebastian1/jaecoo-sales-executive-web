'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import Link from 'next/link';
import Image from 'next/image';

const faqs = [
  {
    question: 'Apa keunggulan utama mobil Jaecoo?',
    answer: 'Jaecoo memadukan desain tangguh dengan fitur teknologi canggih masa kini, memberikan pengalaman berkendara off-road yang luar biasa dengan kenyamanan premium.'
  },
  {
    question: 'Apakah saya bisa menjadwalkan test drive?',
    answer: 'Tentu saja! Anda bisa menjadwalkan test drive melalui tombol "Test Drive" di website kami atau menghubungi WhatsApp langsung.'
  },
  {
    question: 'Bagaimana dengan layanan purna jual (after-sales)?',
    answer: 'Kami menyediakan layanan servis berkala, ketersediaan spare parts yang terjamin, dan garansi resmi untuk memastikan mobil Anda selalu dalam kondisi prima.'
  },
  {
    question: 'Apakah ada program cicilan atau kredit?',
    answer: 'Ya, kami bekerja sama dengan berbagai lembaga pembiayaan terpercaya untuk memberikan paket kredit dengan DP ringan dan bunga kompetitif.'
  },
  {
    question: 'Berapa lama proses SPK dan pengiriman unit?',
    answer: 'Proses administrasi SPK sangat cepat. Untuk pengiriman unit, akan disesuaikan dengan ketersediaan stok, biasanya dalam waktu 7-14 hari kerja.'
  },
  {
    question: 'Di mana lokasi dealer resmi Jaecoo Medan?',
    answer: 'Dealer resmi kami berada di lokasi strategis di Medan. Anda dapat melihat detail lokasi dan panduan arah di bagian kontak website kami.'
  },
  {
    question: 'Apakah ada garansi untuk mobil baru?',
    answer: 'Setiap pembelian Jaecoo baru dilengkapi dengan garansi resmi untuk mesin dan kelistrikan selama periode tertentu. Silakan hubungi kami untuk detail garansi.'
  },
  {
    question: 'Bisa tukar tambah (trade-in) mobil lama?',
    answer: 'Tentu bisa! Kami menerima layanan trade-in dengan harga penilaian yang transparan dan kompetitif untuk membantu Anda memiliki Jaecoo.'
  }
];

const FAQCard = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="bg-white border border-gray-200 rounded-xl md:rounded-2xl p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-start gap-3 md:gap-4">
        {/* Icon Container */}
        <div className="flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-base md:text-lg">
          ?
        </div>
        
        {/* Content Container */}
        <div className="flex-1">
          <div className="flex justify-between items-center gap-3 md:gap-4">
            <h4 className="font-geist font-medium text-gray-900 text-[14px] sm:text-[15px] md:text-[16px] leading-snug">
              {question}
            </h4>
            <button 
              className={`flex-shrink-0 w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
              aria-label="Toggle FAQ"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0, marginTop: 0 }}
                animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
                exit={{ height: 0, opacity: 0, marginTop: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <p className="font-geist font-normal text-gray-600 text-[13px] md:text-[14px] leading-relaxed pr-2">
                  {answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default function FAQ() {
  return (
    <section className="relative w-full py-16 md:py-[80px] bg-[#FAFAFA] overflow-hidden" id="faq">
      {/* Background Image for Top Section */}
      <div className="absolute top-0 left-0 w-full h-[450px] z-0">
        <Image 
          src="/images/faq-bg.png" 
          alt="FAQ Background" 
          fill 
          className="object-cover object-center" 
        />
        {/* Gradient Overlay to blend into #FAFAFA background smoothly */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent from-60% to-[#FAFAFA]" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 md:px-[60px] relative z-10">
        
        {/* Header Section (Left Aligned) */}
        <ScrollReveal variant="slide-up">
          <div className="flex flex-col items-start text-left mb-12 w-full md:w-1/2">
            <span className="font-geist text-primary text-[12px] md:text-[14px] font-semibold uppercase tracking-[0.2em] mb-4">
              FAQ
            </span>
            <h2 className="font-geist font-light text-3xl md:text-5xl text-gray-900 mb-4 tracking-tight">
              PERTANYAAN YANG SERING DIAJUKAN
            </h2>
            <p className="font-geist font-normal text-gray-600 text-[15px] md:text-[18px] leading-[1.6]">
              Temukan jawaban dari pertanyaan umum seputar Jaecoo dan layanan kami.
            </p>
          </div>
        </ScrollReveal>

        {/* FAQ Grid (4 rows, 2 columns on Desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} variant="fade-in" delay={index * 0.1}>
              <FAQCard question={faq.question} answer={faq.answer} />
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <ScrollReveal variant="slide-up" delay={0.2}>
          <div className="relative mt-16 border border-gray-200 rounded-[1.5rem] shadow-sm p-5 md:p-6 flex flex-col xl:flex-row items-center justify-between gap-8 xl:gap-0 overflow-hidden">
            
            {/* Background Image for CTA Card */}
            <div className="absolute inset-0 z-0">
              <Image src="/images/cta-bg.png" alt="CTA Background" fill className="object-cover object-center" />
            </div>

            {/* Left Side: Text and CTA */}
            <div className="relative z-10 flex flex-col items-start text-left w-full xl:w-auto shrink-0">
              <div className="flex flex-col gap-1">
                <h3 className="font-geist font-medium text-xl md:text-2xl text-white leading-tight">
                  Masih ada pertanyaan?
                </h3>
                <p className="font-geist font-normal text-white/80 text-[13px] md:text-[14px]">
                  Tim kami siap membantu kapan saja.
                </p>
              </div>
              <Link 
                href="#test-drive"
                className="font-geist flex items-center justify-start gap-2 text-white text-[14px] font-semibold tracking-wide hover:opacity-80 transition-all mt-2.5 group"
              >
                HUBUNGI KAMI
                <svg className="w-4 h-4 transform transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>

            {/* Center Side: 3 Info Items */}
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-start gap-5 sm:gap-4 xl:gap-6 w-full xl:w-auto py-4 xl:py-0">
              {/* Call Center */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-start">
                <div className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-geist font-semibold text-[13px] text-white">Call Center</h4>
                  <p className="font-geist font-normal text-[12px] text-white/80 break-words">0812-3456-7890</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-start">
                <div className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-geist font-semibold text-[13px] text-white">Email</h4>
                  <p className="font-geist font-normal text-[12px] text-white/80 break-words">cs@jaecoomedan.com</p>
                </div>
              </div>

              {/* Dealer */}
              <div className="flex items-center gap-3 w-full sm:w-auto justify-start">
                <div className="w-10 h-10 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="text-left">
                  <h4 className="font-geist font-semibold text-[13px] text-white">Dealer</h4>
                  <p className="font-geist font-normal text-[12px] text-white/80 break-words">Jaecoo Center Medan</p>
                </div>
              </div>
            </div>

            {/* Right Side: Image */}
            <div className="relative z-10 w-full xl:w-[22%] shrink-0 h-[100px] rounded-xl overflow-hidden block">
              <Image 
                src="/images/step-1.png"
                alt="Jaecoo Helpdesk"
                fill
                className="object-cover object-center"
              />
            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
