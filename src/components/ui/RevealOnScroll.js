import React, { useEffect, useRef } from 'react';

/**
 * RevealOnScroll — Wrapper that reveals children on scroll
 *
 * Usage:
 *   <RevealOnScroll>
 *     <h2>I fade up when scrolled into view</h2>
 *   </RevealOnScroll>
 *
 * direction: 'up' | 'left' | 'right' | 'scale'
 */
export default function RevealOnScroll({
  children,
  direction = 'up',
  delay = 0,
  threshold = 0.1,
  className = '',
  as: Tag = 'div',
}) {
  const ref = useRef(null);

  const classMap = {
    up: 'reveal',
    left: 'reveal-left',
    right: 'reveal-right',
    scale: 'reveal-scale',
  };

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReducedMotion) {
      el.classList.add('revealed');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin: '0px 0px -60px 0px' }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [threshold]);

  const delayStyle = delay > 0 ? { transitionDelay: `${delay}ms` } : {};

  return (
    <Tag
      ref={ref}
      className={`${classMap[direction] || 'reveal'} ${className}`}
      style={delayStyle}
    >
      {children}
    </Tag>
  );
}
