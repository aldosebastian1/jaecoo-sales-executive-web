'use client';

import React from 'react';
import clsx from 'clsx';
import { motion, HTMLMotionProps } from 'framer-motion';

type ButtonVariant = 'primary' | 'outline' | 'ghost' | 'link';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "ref" | "as"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  fullWidth?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  as?: React.ElementType;
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      isLoading = false,
      fullWidth = false,
      icon,
      iconPosition = 'left',
      as,
      href,
      target,
      rel,
      className,
      disabled,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      'font-button inline-flex items-center justify-center transition-all duration-200 rounded-base focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed uppercase tracking-wider';

    const variants = {
      primary:
        'bg-primary text-white hover:bg-primary-800 active:bg-primary-800 disabled:bg-gray-300 focus:ring-primary',
      outline:
        'border-2 border-primary text-primary hover:bg-primary-50 active:bg-primary-100 disabled:border-gray-300 disabled:text-gray-400 focus:ring-primary',
      ghost:
        'text-primary hover:bg-gray-100 active:bg-gray-200 disabled:text-gray-400 focus:ring-primary',
      link: 'text-primary hover:text-primary underline hover:underline active:text-primary-800 disabled:text-gray-400 focus:ring-primary px-0 py-0 rounded-none h-auto',
    };

    const sizes = {
      sm: 'h-9 px-3 py-2 text-xs',
      md: 'h-10 px-4 py-2 text-sm',
      lg: 'h-12 px-6 py-3 text-base',
    };

    const buttonClasses = clsx(
      baseStyles,
      variants[variant],
      sizes[size],
      fullWidth && 'w-full',
      className
    );

    const Component = (as || (href ? 'a' : 'button')) as React.ElementType;
    // @ts-expect-error - Framer motion dynamic component typing limitation
    const MotionComponent = motion(Component);

    return (
      <MotionComponent
        ref={ref}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.95 }}
        disabled={disabled || isLoading}
        className={buttonClasses}
        href={href}
        target={target}
        rel={rel}
        {...props}
      >
        {isLoading ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Loading...
          </>
        ) : (
          <>
            {icon && iconPosition === 'left' && (
              <span className="mr-2 flex items-center">{icon}</span>
            )}
            <span>{children}</span>
            {icon && iconPosition === 'right' && (
              <span className="ml-2 flex items-center">{icon}</span>
            )}
          </>
        )}
      </MotionComponent>
    );
  }
);

Button.displayName = 'Button';

export default Button;
