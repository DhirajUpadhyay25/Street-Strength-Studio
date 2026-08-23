import { useState, useEffect } from 'react';

/**
 * useScrolledNav — Track navbar scroll state
 *
 * Returns:
 *   scrolled — true if page has scrolled past threshold
 *   hidden — true if scrolling down (for hide-on-scroll pattern)
 *
 * Usage:
 *   const { scrolled } = useScrolledNav();
 *   <nav className={scrolled ? 'bg-black/80 backdrop-blur' : 'bg-transparent'}>
 */
export default function useScrolledNav(threshold = 50) {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScroll = 0;
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const currentScroll = window.scrollY;

          // Scrolled past threshold
          setScrolled(currentScroll > threshold);

          // Hide on scroll down, show on scroll up
          if (currentScroll > lastScroll && currentScroll > 200) {
            setHidden(true);
          } else {
            setHidden(false);
          }

          lastScroll = currentScroll;
          ticking = false;
        });

        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  return { scrolled, hidden };
}
