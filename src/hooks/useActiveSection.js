import { useState, useEffect } from 'react';

/**
 * useActiveSection — Smoothly tracks which section is currently active in the viewport
 *
 * @param {Array} sectionIds - Array of section IDs in DOM order (e.g. ['home', 'leaderboard', 'about', ...])
 * @param {number} offset - Viewport offset to trigger section activation
 * @returns {string} - The currently active section ID
 */
export default function useActiveSection(sectionIds, offset = 120) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] || 'home');

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const totalHeight = document.documentElement.scrollHeight;

      // 1. If at the very top of the page, activate home
      if (scrollY < 120) {
        setActiveSection(sectionIds[0] || 'home');
        return;
      }

      // 2. If at the bottom of the page, activate the last section (contact)
      if (windowHeight + scrollY >= totalHeight - 120) {
        setActiveSection(sectionIds[sectionIds.length - 1]);
        return;
      }

      // 3. Find the section currently in the viewport
      let current = sectionIds[0] || 'home';

      for (let i = 0; i < sectionIds.length; i++) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();

        // If the top of the section has reached or passed the offset threshold,
        // and its bottom hasn't completely left the top of the viewport
        if (rect.top <= offset + 60 && rect.bottom > offset) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    handleScroll(); // Initial evaluation on mount

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [sectionIds, offset]);

  return activeSection;
}
