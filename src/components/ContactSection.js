import React from 'react';
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from 'lucide-react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Container from './ui/Container';
import RevealOnScroll from './ui/RevealOnScroll';
import Button from './ui/Button';
import siteConfig from '../config/siteConfig';

const contactCards = [
  {
    icon: Phone,
    title: 'Call Us',
    value: siteConfig.contact.phone,
    href: `tel:${siteConfig.contact.phoneClean}`,
    color: 'text-brand-orange',
  },
  {
    icon: Mail,
    title: 'Email',
    value: siteConfig.contact.email,
    href: `mailto:${siteConfig.contact.email}`,
    color: 'text-cyan-400',
  },
  {
    icon: MapPin,
    title: 'Location',
    value: siteConfig.location.address,
    href: siteConfig.location.mapLink,
    color: 'text-red-400',
  },
  {
    icon: Clock,
    title: 'Hours',
    value: siteConfig.hours.display,
    href: null,
    color: 'text-green-400',
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-section overflow-hidden bg-black" aria-label="Contact information">
      {/* Background */}
      <div className="absolute -top-32 left-0 w-96 h-96 rounded-full bg-brand-orange/5 blur-[160px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-orange/5 blur-[160px]" aria-hidden="true" />

      <Container className="relative">

        {/* Hero CTA Header */}
        <RevealOnScroll>
          <div className="text-center mb-16">
            <h2 className="font-heading text-display-lg text-white">
              READY TO GET
              <br />
              <span className="text-gradient-orange">STRONGER?</span>
            </h2>
            <p className="mt-5 text-gray-400 text-lg max-w-xl mx-auto">
              Take the first step. Reach out to us and let's build your training plan together.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Button
                variant="whatsapp"
                size="lg"
                href={siteConfig.contact.whatsappLink}
                external
                showWhatsapp
                showArrow
              >
                Chat on WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                href={`tel:${siteConfig.contact.phoneClean}`}
              >
                Call Now
              </Button>
            </div>
          </div>
        </RevealOnScroll>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {contactCards.map((card, index) => {
            const Icon = card.icon;
            const Wrapper = card.href ? 'a' : 'div';
            const wrapperProps = card.href
              ? {
                  href: card.href,
                  target: card.href.startsWith('http') ? '_blank' : undefined,
                  rel: card.href.startsWith('http') ? 'noopener noreferrer' : undefined,
                }
              : {};

            return (
              <RevealOnScroll key={card.title} delay={index * 80}>
                <Wrapper
                  {...wrapperProps}
                  className="group block rounded-card border border-white/5 bg-white/[0.02] p-5 transition-all duration-500 hover:border-brand-orange/20 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                      <Icon className={card.color} size={18} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-gray-500 text-xs uppercase tracking-wider">{card.title}</p>
                      <p className="text-white text-sm font-medium mt-1 break-words">{card.value}</p>
                    </div>
                    {card.href && (
                      <ArrowUpRight size={14} className="text-gray-600 group-hover:text-brand-orange transition-colors flex-shrink-0 mt-1" />
                    )}
                  </div>
                </Wrapper>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Social + Map Row */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Social Links */}
          <RevealOnScroll direction="left">
            <div className="space-y-4">
              {/* Instagram Studio */}
              <a
                href={siteConfig.social.instagram.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-card border border-white/5 bg-white/[0.02] p-5 transition-all duration-500 hover:border-pink-500/20"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 via-purple-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <FaInstagram size={22} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold">Instagram — Studio</p>
                  <p className="text-gray-400 text-sm">{siteConfig.social.instagram.handle}</p>
                </div>
                <ArrowUpRight size={16} className="text-gray-600 group-hover:text-pink-400 group-hover:rotate-45 transition-all" />
              </a>

              {/* Instagram Personal */}
              <a
                href={siteConfig.social.instagramPersonal.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-card border border-white/5 bg-white/[0.02] p-5 transition-all duration-500 hover:border-blue-500/20"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <FaInstagram size={22} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold">Instagram — Coach</p>
                  <p className="text-gray-400 text-sm">{siteConfig.social.instagramPersonal.handle}</p>
                </div>
                <ArrowUpRight size={16} className="text-gray-600 group-hover:text-blue-400 group-hover:rotate-45 transition-all" />
              </a>

              {/* WhatsApp */}
              <a
                href={siteConfig.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-card border border-white/5 bg-gradient-to-r from-green-500/10 to-transparent p-5 transition-all duration-500 hover:border-green-500/30"
              >
                <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp size={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-white font-semibold">WhatsApp</p>
                  <p className="text-gray-400 text-sm">{siteConfig.contact.phone}</p>
                </div>
                <div className="px-3 py-1 rounded-full bg-green-500/10 text-green-400 text-xs font-semibold">
                  Chat Now
                </div>
              </a>

              {/* Hours detail */}
              <div className="rounded-card border border-white/5 bg-white/[0.02] p-5">
                <h4 className="text-white font-semibold mb-3">Working Hours</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between text-gray-400">
                    <span>Monday – Saturday (Morning)</span>
                    <span className="text-white">{siteConfig.hours.morning}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Monday – Saturday (Evening)</span>
                    <span className="text-white">{siteConfig.hours.evening}</span>
                  </div>
                  <div className="flex justify-between text-gray-400">
                    <span>Sunday</span>
                    <span className="text-red-400">Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </RevealOnScroll>

          {/* Google Map */}
          <RevealOnScroll direction="right">
            <div className="rounded-card-lg overflow-hidden border border-white/5 h-full min-h-[400px]">
              <iframe
                title="Street Strength Studio Location"
                src={siteConfig.location.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
              />
            </div>
          </RevealOnScroll>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;
