'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { getSimpleWALink } from '@/lib/whatsapp';

declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: object) => void;
  }
}

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('/');
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px' }
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      if (window.scrollY < 200) {
        setActiveSection('/');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener('scroll', handleScroll);
    };
  }, [pathname]);

  const isActive = (href: string) => {
    return activeSection === href;
  };

  const handleWAClick = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();

    // GA4 Tracking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'contact_us', {
        contact_type: 'whatsapp',
        source: 'Navbar WA Button'
      });
    }


    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleHashClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    if (pathname === '/') {
      e.preventDefault();
      const element = document.querySelector(hash);
      if (element) {
        const yOffset = -72; // Adjust for navbar height
        const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
      setIsMenuOpen(false); // Close mobile menu if open
    }
  };


  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 glass border-b border-white/20 shadow-sm"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center h-[72px]">
          <div className="flex-shrink-0 flex items-center relative w-[160px] h-12">
            <Link 
              href="/" 
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className="block w-full h-full relative" 
              aria-label="Beranda Jaecoo Medan"
            >
              <Image alt="Jaecoo Logo" width={140} height={42} style={{ width: "auto", height: "100%" }} className="object-contain object-left" src="/icons/jaecoo-logo-black.avif" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 lg:space-x-10">
            <Link
              href="/"
              onClick={(e) => {
                if (pathname === '/') {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }
              }}
              className={clsx(
                'font-inter font-medium tracking-[0.06em] py-2 transition-all duration-200 text-base',
                isActive('/') 
                  ? 'text-primary underline decoration-2 underline-offset-[6px] decoration-primary'
                  : 'text-gray-600 hover:text-primary'
              )}
            >
              Beranda
            </Link>
            <Link
              href="#why-jaecoo"
              onClick={(e) => handleHashClick(e, '#why-jaecoo')}
              className={clsx(
                'font-inter font-medium tracking-[0.06em] py-2 transition-all duration-200 text-base',
                isActive('#why-jaecoo') 
                  ? 'text-primary underline decoration-2 underline-offset-[6px] decoration-primary'
                  : 'text-gray-600 hover:text-primary'
              )}
            >
              Keunggulan
            </Link>
            <Link
              href="#katalog"
              onClick={(e) => handleHashClick(e, '#katalog')}
              className={clsx(
                'font-inter font-medium tracking-[0.06em] py-2 transition-all duration-200 text-base',
                isActive('#katalog') 
                  ? 'text-primary underline decoration-2 underline-offset-[6px] decoration-primary'
                  : 'text-gray-600 hover:text-primary'
              )}
            >
              Katalog
            </Link>
            <Link
              href="#faq"
              onClick={(e) => handleHashClick(e, '#faq')}
              className={clsx(
                'font-inter font-medium tracking-[0.06em] py-2 transition-all duration-200 text-base',
                isActive('#faq') 
                  ? 'text-primary underline decoration-2 underline-offset-[6px] decoration-primary'
                  : 'text-gray-600 hover:text-primary'
              )}
            >
              FAQ
            </Link>
            <Link
              href="#test-drive"
              onClick={(e) => handleHashClick(e, '#test-drive')}
              className={clsx(
                'font-inter font-medium tracking-[0.06em] py-2 transition-all duration-200 text-base',
                isActive('#test-drive') 
                  ? 'text-primary underline decoration-2 underline-offset-[6px] decoration-primary'
                  : 'text-gray-600 hover:text-primary'
              )}
            >
              Test Drive
            </Link>
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href={getSimpleWALink("Halo Bastian, saya tertarik dengan mobil Jaecoo dan ingin info lebih lanjut.")}
              onClick={(e) => handleWAClick(e, getSimpleWALink("Halo Bastian, saya tertarik dengan mobil Jaecoo dan ingin info lebih lanjut."))}
              className="font-inter bg-primary text-white px-6 py-2.5 text-[13px] font-semibold uppercase tracking-wider hover:bg-primary-800 transition-colors duration-300 rounded-full"
            >
              Hubungi WA
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex items-center justify-center w-12 h-12 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className={clsx('w-6 h-6 transition-transform duration-300', isMenuOpen && 'rotate-90')}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden absolute top-full left-0 right-0 overflow-hidden border-t border-white/20 glass shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)]"
          >
            <div className="py-4 space-y-3 px-4">
              <Link
                href="/"
                onClick={(e) => {
                  setIsMenuOpen(false);
                  if (pathname === '/') {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={clsx(
                  'block px-4 py-3.5 rounded-lg text-center font-inter text-sm font-semibold uppercase tracking-wider transition-all duration-200',
                  isActive('/') ? 'bg-primary-50 text-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                )}
              >
                Beranda
              </Link>
              <Link
                href="#why-jaecoo"
                onClick={(e) => handleHashClick(e, '#why-jaecoo')}
                className={clsx(
                  'block px-4 py-3.5 rounded-lg text-center font-inter text-sm font-semibold uppercase tracking-wider transition-all duration-200',
                  isActive('#why-jaecoo') ? 'bg-primary-50 text-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                )}
              >
                Keunggulan
              </Link>
              <Link
                href="#katalog"
                onClick={(e) => handleHashClick(e, '#katalog')}
                className={clsx(
                  'block px-4 py-3.5 rounded-lg text-center font-inter text-sm font-semibold uppercase tracking-wider transition-all duration-200',
                  isActive('#katalog') ? 'bg-primary-50 text-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                )}
              >
                Katalog
              </Link>
              <Link
                href="#faq"
                onClick={(e) => handleHashClick(e, '#faq')}
                className={clsx(
                  'block px-4 py-3.5 rounded-lg text-center font-inter text-sm font-semibold uppercase tracking-wider transition-all duration-200',
                  isActive('#faq') ? 'bg-primary-50 text-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                )}
              >
                FAQ
              </Link>
              <Link
                href="#test-drive"
                onClick={(e) => handleHashClick(e, '#test-drive')}
                className={clsx(
                  'block px-4 py-3.5 rounded-lg text-center font-inter text-sm font-semibold uppercase tracking-wider transition-all duration-200',
                  isActive('#test-drive') ? 'bg-primary-50 text-primary' : 'text-gray-600 hover:bg-gray-50 hover:text-primary'
                )}
              >
                Test Drive
              </Link>
              <a
                href={getSimpleWALink("Halo Bastian, saya tertarik dengan mobil Jaecoo dan ingin info lebih lanjut.")}
                onClick={(e) => {
                  setIsMenuOpen(false);
                  handleWAClick(e, getSimpleWALink("Halo Bastian, saya tertarik dengan mobil Jaecoo dan ingin info lebih lanjut."));
                }}
                target="_blank" rel="noopener noreferrer"
                className="block px-6 py-3.5 bg-primary text-white rounded-full text-center text-[13px] font-semibold uppercase tracking-wider mt-4"
              >
                Hubungi WA
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
