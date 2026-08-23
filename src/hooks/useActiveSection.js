import { useState, useEffect } from 'react';

/**
 * useActiveSection — Tracks which section is currently in view
 * 
 * @param {Array} sectionIds - Array of section IDs to track (e.g. ['home', 'about', 'programs'])
 * @param {number} offset - Offset from top of screen to trigger active state
 * @returns {string} - The currently active section ID
 */
export default function useActiveSection(sectionIds, offset = 150) {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + offset;

      // Find the section that is currently in view
      let currentSection = activeSection;

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          const elementTop = top + window.scrollY;
          const elementBottom = bottom + window.scrollY;

          // If scroll position is within the element's bounds
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            currentSection = id;
          }
        }
      }

      // Check for bottom of page (highlight last section if we hit the bottom)
      if (
        window.innerHeight + Math.round(window.scrollY) >= 
        document.body.offsetHeight - 100
      ) {
        currentSection = sectionIds[sectionIds.length - 1];
      }

      if (currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    // Throttle scroll event slightly for performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, [sectionIds, activeSection, offset]);

  return activeSection;
}
