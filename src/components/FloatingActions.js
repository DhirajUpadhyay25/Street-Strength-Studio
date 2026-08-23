import React, { useState, useEffect } from 'react';
import { Phone } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import siteConfig from '../config/siteConfig';

const FloatingActions = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 80;
      const y = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* ─── Desktop: Floating WhatsApp Button ─── */}
      <a
        href={siteConfig.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className={`hidden lg:flex fixed bottom-8 left-6 z-[var(--z-floating)] w-14 h-14 rounded-full bg-[#25D366] items-center justify-center shadow-lg shadow-[#25D366]/30 transition-all duration-500 hover:scale-110 hover:shadow-xl hover:shadow-[#25D366]/40 ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
        }`}
        aria-label="Chat on WhatsApp"
      >
        <FaWhatsapp size={26} className="text-white" />
      </a>

      {/* ─── Mobile: Bottom Action Bar ─── */}
      <div
        className={`lg:hidden fixed bottom-0 left-0 right-0 z-[var(--z-floating)] safe-bottom transition-all duration-500 ${
          visible ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        {/* Backdrop */}
        <div className="bg-brand-dark/95 backdrop-blur-xl border-t border-white/5 px-4 py-2.5">
          <div className="flex items-center gap-2">
            {/* WhatsApp */}
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#25D366] text-white text-sm font-semibold transition-all hover:bg-[#1da851]"
              aria-label="WhatsApp"
            >
              <FaWhatsapp size={18} />
              <span>WhatsApp</span>
            </a>

            {/* Call */}
            <a
              href={`tel:${siteConfig.contact.phoneClean}`}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white/5 border border-white/10 text-white text-sm font-semibold transition-all hover:bg-white/10"
              aria-label="Call us"
            >
              <Phone size={16} />
              <span>Call</span>
            </a>

            {/* Start Training */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-lg bg-brand-orange text-white text-sm font-semibold transition-all hover:bg-brand-orange-dark"
            >
              <span>Start</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingActions;
