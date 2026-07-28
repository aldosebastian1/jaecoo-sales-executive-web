"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

type AnimationVariant = 'slide-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'slide-right-short' | 'scale-up';

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
  variant?: AnimationVariant;
  duration?: number;
  className?: string;
  priority?: boolean;
}

export default function ScrollReveal({ 
  children, 
  delay = 0,
  yOffset = 20,
  variant = 'slide-up',
  duration = 0.6,
  className = "",
  priority = false
}: ScrollRevealProps) {

  if (priority) {
    let animationClass = '';
    switch (variant) {
      case 'slide-up': animationClass = 'animate-slide-up'; break;
      case 'slide-right-short': animationClass = 'animate-slide-right-short'; break;
      default: animationClass = 'animate-slide-up'; break;
    }
    
    return (
      <div 
        className={`${className} ${animationClass} opacity-0`.trim()} 
        style={{ animationDelay: `${delay}s`, animationDuration: `${duration}s`, animationFillMode: 'forwards' }}
      >
        {children}
      </div>
    );
  }

  const getVariants = () => {
    switch (variant) {
      case 'fade-in':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        };
      case 'slide-left':
        return {
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 }
        };
      case 'slide-right':
        return {
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        };
      case 'slide-right-short':
        return {
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0 }
        };
      case 'scale-up':
        return {
          hidden: { opacity: 0, scale: 0.9, y: yOffset },
          visible: { opacity: 1, scale: 1, y: 0 }
        };
      case 'slide-up':
      default:
        return {
          hidden: { opacity: 0, y: yOffset },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={getVariants()}
      transition={{ duration, ease: "easeOut", delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
