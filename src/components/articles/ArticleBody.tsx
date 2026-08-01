'use client';

import React, { useEffect, useRef } from 'react';

interface ArticleBodyProps {
  content: string;
}
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: object) => void;
  }
}

export default function ArticleBody({ content }: ArticleBodyProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      if (!anchor) return;

      const href = anchor.getAttribute('href') || '';
      if (href.includes('wa.me') || href.includes('api.whatsapp.com')) {
        const textContent = anchor.textContent || 'WhatsApp Link';
        
        // GA4 Tracking
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'contact_us', {
            contact_type: 'whatsapp',
            source: `Article Body - ${textContent.trim()}`,
          });
        }
      }
    };

    container.addEventListener('click', handleLinkClick);
    return () => {
      container.removeEventListener('click', handleLinkClick);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      dangerouslySetInnerHTML={{ __html: content }}
      className="space-y-6 text-gray-700 leading-relaxed"
    />
  );
}
