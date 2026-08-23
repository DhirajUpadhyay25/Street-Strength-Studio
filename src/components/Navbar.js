import React, { useState, useEffect, useCallback } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import siteConfig from '../config/siteConfig';
import useScrolledNav from '../hooks/useScrolledNav';
import useActiveSection from '../hooks/useActiveSection';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrolled } = useScrolledNav(80);
  
  // Track active section for nav links
  const sectionIds = ['home', ...siteConfig.navLinks.map(link => link.href.replace('#', ''))];
  const activeSection = useActiveSection(sectionIds, 150);

  // Track global scroll progress for top bar
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Close menu on ESC
  useEffect(() => {
    const handleEsc = (e) => { if (e.key === 'Escape') setIsOpen(false); };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  const handleNavClick = useCallback((e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const navHeight = 80;
      const y = target.getBoundingClientRect().top + window.scrollY - navHeight;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, []);

  return (
    <>
      {/* ─── Desktop + Mobile Header ─── */}
      <header
        className={`fixed top-0 left-0 w-full z-[var(--z-nav)] transition-all duration-500 ease-smooth ${
          scrolled
            ? 'bg-black/85 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
        role="banner"
      >
        {/* ─── Scroll Progress Bar ─── */}
        <div className="absolute top-0 left-0 h-[2px] bg-white/5 w-full z-10">
          <div 
            className="h-full bg-brand-orange transition-all duration-150 ease-out" 
            style={{ width: `${scrollProgress}%` }}
          />
        </div>

        <div className="max-w-container mx-auto px-5 lg:px-10">
          <div className="flex items-center justify-between h-20">

            {/* ─── Logo ─── */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3 group"
              aria-label="Street Strength Studio — Home"
            >
              <img
                src="/imagess/logo.png"
                alt="Street Strength Studio Logo"
                className="w-10 h-10 object-contain transition-transform duration-300 group-hover:scale-110"
                width="40"
                height="40"
              />
              <div className="leading-tight">
                <span className="text-sm font-extrabold tracking-wide text-white block">
                  STREET STRENGTH
                </span>
                <span className="text-xs font-bold tracking-[3px] text-brand-orange block">
                  STUDIO
                </span>
              </div>
            </a>

            {/* ─── Desktop Navigation ─── */}
            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {siteConfig.navLinks.map((link) => {
                const isActive = activeSection === link.href.replace('#', '');
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`relative text-[13px] font-medium uppercase tracking-[2px] transition-colors duration-300 py-2 group ${
                      isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                  >
                    {link.label}
                    <span 
                      className={`absolute left-0 -bottom-0.5 h-[2px] bg-brand-orange transition-all duration-300 ease-smooth ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`} 
                    />
                  </a>
                );
              })}
            </nav>

            {/* ─── Desktop CTA ─── */}
            <a
              href="#register"
              onClick={(e) => handleNavClick(e, '#register')}
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2 rounded-button bg-brand-orange text-white text-[11px] font-bold uppercase tracking-[2px] transition-all duration-300 hover:bg-brand-orange-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-orange/30 group"
            >
              <span>Register Now</span>
              <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </a>

            {/* ─── Mobile Menu Button ─── */}
            <button
              onClick={() => setIsOpen(true)}
              className="lg:hidden text-white p-2 hover:text-brand-orange transition-colors"
              aria-label="Open navigation menu"
              aria-expanded={isOpen}
            >
              <Menu size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* ─── Mobile Full-Screen Menu ─── */}
      <div
        className={`fixed inset-0 z-[var(--z-modal)] transition-all duration-500 ease-smooth ${
          isOpen ? 'visible' : 'invisible pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-500 ${
            isOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        {/* Panel */}
        <div
          className={`absolute right-0 top-0 h-full w-full max-w-md bg-brand-dark border-l border-white/5 transition-transform duration-500 ease-smooth ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Close */}
          <div className="flex items-center justify-between p-5 border-b border-white/5">
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home')}
              className="flex items-center gap-3"
            >
              <img src="/imagess/logo.png" alt="Logo" className="w-9 h-9 object-contain" width="36" height="36" />
              <div className="leading-tight">
                <span className="text-sm font-extrabold tracking-wide text-white block">STREET STRENGTH</span>
                <span className="text-xs font-bold tracking-[3px] text-brand-orange block">STUDIO</span>
              </div>
            </a>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white p-2 transition-colors"
              aria-label="Close navigation menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col px-6 pt-8 gap-1" aria-label="Mobile navigation">
            {siteConfig.navLinks.map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xl font-semibold uppercase tracking-[3px] text-gray-300 hover:text-brand-orange py-3 border-b border-white/5 transition-all duration-300"
                style={{
                  opacity: isOpen ? 1 : 0,
                  transform: isOpen ? 'translateX(0)' : 'translateX(30px)',
                  transition: `all 0.4s cubic-bezier(0.16, 1, 0.3, 1) ${i * 0.06 + 0.15}s`,
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="px-6 mt-8">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center justify-center gap-3 w-full py-4 rounded-xl bg-brand-orange text-white font-bold uppercase tracking-wider transition-all duration-300 hover:bg-brand-orange-dark"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s',
              }}
            >
              Start Your Journey
              <ArrowRight size={18} aria-hidden="true" />
            </a>
          </div>

          {/* Mobile Contact Info */}
          <div
            className="absolute bottom-0 left-0 right-0 p-6 border-t border-white/5"
            style={{
              opacity: isOpen ? 1 : 0,
              transition: 'opacity 0.5s ease 0.6s',
            }}
          >
            <p className="text-gray-500 text-xs uppercase tracking-wider mb-2">Contact</p>
            <a href={`tel:${siteConfig.contact.phoneClean}`} className="text-gray-400 text-sm hover:text-brand-orange transition-colors block">
              {siteConfig.contact.phone}
            </a>
            <a href={`mailto:${siteConfig.contact.email}`} className="text-gray-400 text-sm hover:text-brand-orange transition-colors block mt-1">
              {siteConfig.contact.email}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;