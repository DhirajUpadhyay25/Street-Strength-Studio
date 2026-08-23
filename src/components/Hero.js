import React, { useState, useEffect, useRef } from 'react';
import Container from './ui/Container';
import Button from './ui/Button';

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    // Trigger entrance animations after mount
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Load video immediately after mount for smoother playback
  useEffect(() => {
    const timer = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.src = '/videos/heroVideo.mp4';
        videoRef.current.load();
      }
    }, 100);
    return () => clearTimeout(timer);
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
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      {/* ─── Background Image (poster / fallback) ─── */}
      <div className="absolute inset-0">
        <img
          src="/imagess/b3.png"
          alt=""
          className="w-full h-full object-cover"
          aria-hidden="true"
          loading="eager"
          fetchpriority="high"
        />
      </div>

      {/* ─── Background Video (lazy loaded) ─── */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster="/imagess/b3.png"
        onLoadedData={() => setVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
        aria-hidden="true"
      >
        {/* Source set after initial load for performance */}
      </video>

      {/* ─── Overlays ─── */}
      {/* Light gradient only at the edges + a soft 30% black wash to guarantee white text contrast without losing the video */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40 pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-black/20 pointer-events-none" aria-hidden="true" />

      {/* Grain texture */}
      <div className="absolute inset-0 grain-overlay pointer-events-none" aria-hidden="true" />

      {/* Subtle orange glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-brand-orange/8 blur-[180px] pointer-events-none" aria-hidden="true" />

      {/* ─── Animated Calisthenics Rings / Cinematic Elements ─── */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <div className="w-[800px] h-[800px] border border-white/5 rounded-full absolute animate-[spin_60s_linear_infinite]" />
        <div className="w-[600px] h-[600px] border border-brand-orange/10 rounded-full absolute animate-[spin_40s_linear_infinite_reverse]" />
      </div>

      {/* ─── Content ─── */}
      <Container className="relative z-10 pt-28 pb-20 lg:pt-32 lg:pb-24 flex flex-col items-center justify-center min-h-screen text-center">
        <div className="max-w-4xl mx-auto flex flex-col items-center">

          {/* Tag */}
          <div
            className={`transition-all duration-700 ease-smooth ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-brand-orange/10 border border-brand-orange/20 text-brand-orange text-xs font-semibold uppercase tracking-[3px]">
              Calisthenics = Strength + Balance + Mobility
            </span>
          </div>

          {/* Headline */}
          <h1
            className={`mt-6 font-heading text-display-lg md:text-7xl lg:text-[5.5rem] text-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.8)] leading-[0.95] transition-all duration-700 ease-smooth tracking-wide ${loaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
              }`}
            style={{ transitionDelay: '350ms' }}
          >
            BUILD YOUR BODY.
            <br />
            <span className="text-gradient-orange">MASTER YOUR MOVEMENT.</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`mt-6 text-gray-200 font-medium text-lg md:text-xl drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-relaxed max-w-2xl mx-auto transition-all duration-700 ease-smooth ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            style={{ transitionDelay: '500ms' }}
          >
             Calisthenics, Strength, Mobility, Balance and Fat loss training programs designed to help you achieve your fitness goals.
          </p>

          {/* CTAs */}
          <div
            className={`mt-8 flex flex-wrap justify-center gap-4 transition-all duration-700 ease-smooth ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            style={{ transitionDelay: '650ms' }}
          >
            <Button
              variant="primary"
              size="lg"
              href="#register"
              onClick={(e) => handleNavClick(e, '#register')}
              showArrow
              id="hero-cta-primary"
            >
              Register Now
            </Button>

            <Button
              variant="outline"
              size="lg"
              href="#programs"
              onClick={(e) => handleNavClick(e, '#programs')}
              id="hero-cta-secondary"
            >
              Explore Training
            </Button>
          </div>

          {/* Micro-stats */}
          <div
            className={`mt-14 flex items-center justify-center gap-6 md:gap-10 transition-all duration-700 ease-smooth ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
            style={{ transitionDelay: '800ms' }}
          >
            <div className="flex flex-col items-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              <span className="text-2xl font-bold text-white block leading-none mb-1">3+</span>
              <span className="text-gray-300 text-xs font-bold uppercase tracking-[2px]">Years</span>
            </div>
            <div className="w-[1px] h-8 bg-white/30 drop-shadow" aria-hidden="true" />
            <div className="flex flex-col items-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              <span className="text-2xl font-bold text-white block leading-none mb-1">50+</span>
              <span className="text-gray-300 text-xs font-bold uppercase tracking-[2px]">Trained</span>
            </div>
            <div className="w-[1px] h-8 bg-white/30 drop-shadow" aria-hidden="true" />
            <div className="flex flex-col items-center drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
              <span className="text-2xl font-bold text-white block leading-none mb-1">100%</span>
              <span className="text-gray-300 text-xs font-bold uppercase tracking-[2px]">Results</span>
            </div>
          </div>
        </div>
      </Container>

      {/* ─── Scroll Indicator ─── */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-700 ${loaded ? 'opacity-60' : 'opacity-0'
          }`}
        style={{ transitionDelay: '1200ms' }}
        aria-hidden="true"
      >
        <span className=" text-white text-[10px] font-bold uppercase tracking-[3px] drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">|</span>
        <div className="w-[1px] h-12 bg-white/40 relative overflow-hidden drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[scroll-down_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
