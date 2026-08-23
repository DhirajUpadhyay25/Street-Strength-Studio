import React from 'react';
import { ArrowUp, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Container from './ui/Container';
import siteConfig from '../config/siteConfig';

const Footer = () => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
    <footer className="relative bg-[#050505] border-t border-white/5 pt-16 pb-8" role="contentinfo">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">

          {/* Brand Column */}
          <div className="lg:col-span-2 flex flex-col items-start text-left">
            <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="flex items-center gap-3 mb-6 group">
              <img src="/imagess/logo.png" alt="Street Strength Studio" className="w-10 h-10 object-contain transition-transform duration-500 group-hover:scale-110" width="40" height="40" loading="lazy" />
              <div className="leading-tight">
                <span className="text-sm font-extrabold tracking-wide text-white block">STREET STRENGTH</span>
                <span className="text-xs font-bold tracking-[3px] text-brand-orange block">STUDIO</span>
              </div>
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-8">
              {siteConfig.description}
            </p>
            {/* Socials */}
            <div className="flex gap-4">
              <a
                href={siteConfig.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-orange hover:bg-brand-orange/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:border-[#25D366] hover:bg-[#25D366]/10 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-white text-xs font-bold uppercase tracking-[3px] mb-4 lg:mb-6">Navigation</h3>
            <ul className="flex flex-wrap gap-x-6 gap-y-3 lg:flex-col lg:space-y-4 lg:gap-0">
              {siteConfig.navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-400 text-sm hover:text-brand-orange transition-colors inline-block"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-2">
            <h3 className="text-white text-xs font-bold uppercase tracking-[3px] mb-6">Get in Touch</h3>
            <ul className="space-y-5">
              <li>
                <a href={`tel:${siteConfig.contact.phoneClean}`} className="flex items-start gap-3 group">
                  <Phone size={18} className="text-brand-orange mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400 text-sm group-hover:text-white transition-colors">{siteConfig.contact.phone}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.contact.email}`} className="flex items-start gap-3 group">
                  <Mail size={18} className="text-brand-orange mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400 text-sm group-hover:text-white transition-colors">{siteConfig.contact.email}</span>
                </a>
              </li>
              <li>
                <a href={siteConfig.location.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 group">
                  <MapPin size={18} className="text-brand-orange mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-400 text-sm group-hover:text-white transition-colors leading-relaxed max-w-[250px]">
                    {siteConfig.location.address}
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="text-gray-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-500 text-sm leading-relaxed">
                  {siteConfig.hours.display}
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-gray-600 text-xs">
            © {new Date().getFullYear()}{' '}
            <span className="text-gray-300 font-medium">{siteConfig.name}</span>. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Developed by{' '}
            <a
              href={siteConfig.developer.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-brand-orange transition-colors font-medium"
            >
              @{siteConfig.developer.name}
            </a>
          </p>
        </div>
      </Container>

      {/* Scroll to top — Ensure it doesn't block mobile floating actions by using mb-16 on mobile */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-24 lg:bottom-8 right-5 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-orange hover:border-brand-orange/30 hover:bg-brand-orange/10 transition-all z-40 backdrop-blur-md"
        aria-label="Scroll to top"
      >
        <ArrowUp size={16} />
      </button>
    </footer>
  );
};

export default Footer;