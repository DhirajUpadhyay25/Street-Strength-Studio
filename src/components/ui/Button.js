import React from 'react';
import { ArrowRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

/**
 * Button — Reusable button component with multiple variants
 *
 * Variants: primary | secondary | outline | whatsapp | ghost
 * Sizes: sm | md | lg
 */
const variants = {
  primary:
    'bg-brand-orange text-white hover:bg-brand-orange-dark shadow-lg shadow-brand-orange/20 hover:shadow-brand-orange/40',
  secondary:
    'bg-brand-lime text-brand-black hover:bg-brand-lime-dark shadow-lg shadow-brand-lime/20',
  outline:
    'bg-transparent border border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white',
  whatsapp:
    'bg-[#25D366] text-white hover:bg-[#1da851] shadow-lg shadow-[#25D366]/20',
  ghost:
    'bg-transparent text-gray-300 hover:text-white hover:bg-white/5',
};

const sizes = {
  sm: 'px-4 py-2 text-[11px] md:text-xs gap-1.5',
  md: 'px-5 py-2.5 text-xs md:text-sm gap-2',
  lg: 'px-6 py-3 md:px-7 md:py-3.5 text-sm md:text-[15px] gap-2 md:gap-3',
};

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon,
  showArrow = false,
  showWhatsapp = false,
  className = '',
  external = false,
  type = 'button',
  disabled = false,
  id,
  ariaLabel,
  ...props
}) {
  const baseClasses = `
    inline-flex items-center justify-center font-semibold uppercase tracking-wider
    rounded-button transition-all duration-300 ease-smooth
    hover:-translate-y-0.5 active:scale-[0.97]
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-orange focus-visible:outline-offset-2
    disabled:opacity-50 disabled:pointer-events-none
    ${variants[variant] || variants.primary}
    ${sizes[size] || sizes.md}
    ${className}
  `.trim();

  const content = (
    <>
      {showWhatsapp && (
        <FaWhatsapp className="text-xl" aria-hidden="true" />
      )}
      {icon && <span aria-hidden="true">{icon}</span>}
      <span>{children}</span>
      {showArrow && (
        <ArrowRight
          size={size === 'sm' ? 16 : 18}
          className="transition-transform duration-300 group-hover:translate-x-1"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`group ${baseClasses}`}
        id={id}
        aria-label={ariaLabel}
        {...(external
          ? { target: '_blank', rel: 'noopener noreferrer' }
          : {})}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`group ${baseClasses}`}
      disabled={disabled}
      id={id}
      aria-label={ariaLabel}
      {...props}
    >
      {content}
    </button>
  );
}
