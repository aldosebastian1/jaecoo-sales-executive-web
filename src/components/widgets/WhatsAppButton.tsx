'use client';

import React from 'react';

interface WhatsAppButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
  contentName?: string;
}

export default function WhatsAppButton({ 
  href, 
  className, 
  children, 
  contentName = 'WhatsApp Button' 
}: WhatsAppButtonProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // GA4 Tracking
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'contact_us', {
        contact_type: 'whatsapp',
        source: contentName,
      });
    }


    window.open(href, '_blank', 'noopener,noreferrer');
  };

  return (
    <a 
      href={href} 
      onClick={handleClick} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={className}
    >
      {children}
    </a>
  );
}
