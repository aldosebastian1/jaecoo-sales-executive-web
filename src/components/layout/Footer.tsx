'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getSimpleWALink } from '@/lib/whatsapp';
import WhatsAppButton from '@/components/widgets/WhatsAppButton';
import LocationPopup from '@/components/ui/LocationPopup';

const Footer: React.FC = () => {
  return (
    <motion.footer 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative bg-white text-black pt-8 pb-4 overflow-hidden mt-auto"
    >
      {/* Background Image Layer */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
        <Image
          src="/images/footer-bg.png"
          alt="Footer Background"
          fill
          className="object-cover object-center"
          quality={100}
        />
        {/* Even White Overlay */}
        <div className="absolute inset-0 bg-white/40"></div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 xl:px-10 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-4 xl:gap-10 mb-6">
          
          {/* Column 1: Brand, Desc, Social */}
          <div className="flex flex-col items-start lg:max-w-[280px] xl:max-w-[320px]">
            <div className="relative w-[130px] h-9 mb-3">
              <Image 
                alt="Jaecoo Logo" 
                fill 
                sizes="130px"
                className="object-contain object-left brightness-0  " 
                src="/icons/jaecoo-logo-black.avif" 
              />
            </div>
            <p className="font-inter text-gray-900 text-sm leading-relaxed mb-3 font-medium">
              Jaecco menghadirkan SUCV premium dengan teknologi canggih dan desain elegan untuk petualangan tanpa batas.
            </p>
            <div className="flex items-center gap-4">
              {/* Instagram */}
              <a href="https://www.instagram.com/Jaecoomedan.bastian/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-primary transition-colors p-1" aria-label="Instagram">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/DealerJaecooMedan/" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-primary transition-colors p-1" aria-label="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              {/* YouTube */}
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-primary transition-colors p-1" aria-label="YouTube">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.074 0 12 0 12s0 3.926.501 5.814a3.016 3.016 0 0 0 2.122 2.136c1.872.55 9.377.55 9.377.55s7.505 0 9.377-.55a3.016 3.016 0 0 0 2.122-2.136C24 15.926 24 12 24 12s0-3.926-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/@Jaecoomedan.bastian?_r=1&_t=ZS-970aVRrpiHk" target="_blank" rel="noopener noreferrer" className="text-gray-900 hover:text-primary transition-colors p-1" aria-label="TikTok">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/></svg>
              </a>
            </div>
          </div>
          
          {/* Column 2: Produk */}
          <div className="flex flex-col">
            <h3 className="font-inter text-xs font-bold text-black uppercase tracking-widest mb-2">
              Produk
            </h3>
            <ul className="flex flex-col space-y-2">
              <li>
                <Link href="#katalog" className="font-inter text-sm font-medium text-gray-800 hover:text-black transition-colors duration-300 whitespace-nowrap">
                  Jaecoo J5
                </Link>
              </li>
              <li>
                <Link href="#katalog" className="font-inter text-sm font-medium text-gray-800 hover:text-black transition-colors duration-300 whitespace-nowrap">
                  Jaecoo J7
                </Link>
              </li>
              <li>
                <Link href="#katalog" className="font-inter text-sm font-medium text-gray-800 hover:text-black transition-colors duration-300 whitespace-nowrap">
                  Jaecoo J8
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Layanan */}
          <div className="flex flex-col">
            <h3 className="font-inter text-xs font-bold text-black uppercase tracking-widest mb-2">
              Layanan
            </h3>
            <ul className="flex flex-col space-y-2">
              <li>
                <Link href="#booking" className="font-inter text-sm font-medium text-gray-800 hover:text-black transition-colors duration-300 whitespace-nowrap">
                  Test Drive
                </Link>
              </li>
              <li>
                <Link href="#service" className="font-inter text-sm font-medium text-gray-800 hover:text-black transition-colors duration-300 whitespace-nowrap">
                  Service
                </Link>
              </li>
              <li>
                <Link href="#garansi" className="font-inter text-sm font-medium text-gray-800 hover:text-black transition-colors duration-300 whitespace-nowrap">
                  Garansi
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Informasi */}
          <div className="flex flex-col">
            <h3 className="font-inter text-xs font-bold text-black uppercase tracking-widest mb-2">
              Informasi
            </h3>
            <ul className="flex flex-col space-y-2">
              <li>
                <Link href="#tentang-kami" className="font-inter text-sm font-medium text-gray-800 hover:text-black transition-colors duration-300 whitespace-nowrap">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/artikel" className="font-inter text-sm font-medium text-gray-800 hover:text-black transition-colors duration-300 whitespace-nowrap">
                  Berita
                </Link>
              </li>
              <li>
                <Link href="#faq" className="font-inter text-sm font-medium text-gray-800 hover:text-black transition-colors duration-300 whitespace-nowrap">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Hubungi Kami */}
          <div className="flex flex-col">
            <h3 className="font-inter text-xs font-bold text-black uppercase tracking-widest mb-2">
              Hubungi Kami
            </h3>
            <div className="flex flex-col space-y-2 text-gray-800 font-inter text-sm font-medium mb-3">
              <p className="flex items-start gap-3 whitespace-nowrap">
                <svg className="w-5 h-5 flex-shrink-0 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span className="hover:text-black transition-colors cursor-pointer">0812-3456-7890</span>
              </p>
              <p className="flex items-start gap-3 whitespace-nowrap">
                <svg className="w-5 h-5 flex-shrink-0 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span className="hover:text-black transition-colors cursor-pointer">cs@jaecoomedan.com</span>
              </p>
              <div className="flex flex-col items-start gap-1 mt-1">
                <p className="flex items-start gap-3 text-gray-800 whitespace-nowrap">
                  <svg className="w-5 h-5 flex-shrink-0 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  <span>Dealer Terdekat</span>
                </p>
                <LocationPopup>
                  <span className="font-inter font-bold text-primary hover:text-white transition-colors ml-8 mt-1 block">
                    Cari Dealer
                  </span>
                </LocationPopup>
              </div>
            </div>
          </div>
            
          {/* Column 6: CTA */}
          <div className="flex flex-col lg:max-w-[260px]">
            <h3 className="font-inter text-xs font-bold text-black uppercase tracking-widest mb-2">
              Informasi Terbaru
            </h3>
            <p className="font-inter text-gray-800 text-sm font-medium leading-relaxed mb-3">
              Hubungi tim sales kami untuk mendapatkan penawaran & promo terbaik bulan ini.
            </p>
            
            <WhatsAppButton 
              href={getSimpleWALink("Halo, saya ingin mendapatkan informasi promo terbaru Jaecoo.")}
              contentName="Footer WA Subscribe"
              className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-[#0c626a] text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 w-fit text-sm shadow-lg shadow-primary/20"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Hubungi via WA
            </WhatsAppButton>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="border-t border-gray-900 pt-4 mt-4 flex flex-col md:flex-row items-center justify-between gap-3">
          <div className="font-inter text-xs text-gray-700 text-center md:text-left font-medium tracking-wide">
            Hak Cipta © {new Date().getFullYear()} Jaecoo Medan. Seluruh Hak Dilindungi.
          </div>
          <a 
            href="https://aldodev.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-inter text-xs text-gray-700 text-center md:text-right font-medium tracking-wide group block cursor-pointer"
          >
            Designed & Developed by <span className="text-primary group-hover:text-[#0c626a] transition-colors">Aldodev</span>
          </a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
