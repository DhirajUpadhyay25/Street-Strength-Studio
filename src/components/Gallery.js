import React, { useState, useCallback, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import RevealOnScroll from './ui/RevealOnScroll';

const galleryItems = [
  { src: '/imagess/g8.webp', title: 'Studio', span: 'md:col-span-2 md:row-span-2' },
  { src: '/imagess/g2.png', title: 'Morning Workout', span: '' },
  { src: '/imagess/g3.png', title: 'Group Session', span: '' },
  { src: '/imagess/g4.png', title: 'Calisthenics Training', span: 'md:row-span-2' },
  { src: '/imagess/g5.png', title: 'Equipment', span: '' },
  { src: '/imagess/g6.png', title: 'Handstand Practice', span: '' },
  { src: '/imagess/program1.png', title: 'Handstand', span: '' },
  { src: '/imagess/program2.png', title: 'Muscle Up', span: '' },
  { src: '/imagess/about.jpeg', title: 'Coach Hitesh', span: '' },
];

const Gallery = () => {
  const [lightbox, setLightbox] = useState(null);

  const openLightbox = useCallback((index) => {
    setLightbox(index);
    document.body.style.overflow = 'hidden';
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = '';
  }, []);

  const navigate = useCallback((dir) => {
    setLightbox((prev) => {
      if (prev === null) return null;
      const next = prev + dir;
      if (next < 0) return galleryItems.length - 1;
      if (next >= galleryItems.length) return 0;
      return next;
    });
  }, []);

  // Keyboard navigation
  useEffect(() => {
    if (lightbox === null) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') navigate(1);
      if (e.key === 'ArrowLeft') navigate(-1);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightbox, closeLightbox, navigate]);

  return (
    <>
      <section id="gallery" className="relative py-section overflow-hidden bg-black" aria-label="Photo gallery">
        {/* Glow */}
        <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-brand-orange/5 blur-[140px]" aria-hidden="true" />
        <div className="absolute bottom-10 right-10 w-72 h-72 rounded-full bg-brand-orange/5 blur-[140px]" aria-hidden="true" />

        <Container className="relative">
          <RevealOnScroll>
            <SectionHeading
              tag="Studio Gallery"
              title="Life at SS Studio"
              titleAccent="SS Studio"
              subtitle="Experience our training environment, premium equipment, and the community that makes it special."
            />
          </RevealOnScroll>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[180px] md:auto-rows-[220px]">
            {galleryItems.map((item, index) => (
              <RevealOnScroll key={index} delay={index * 50}>
                <button
                  onClick={() => openLightbox(index)}
                  className={`group relative overflow-hidden rounded-card w-full h-full cursor-pointer ${item.span}`}
                  aria-label={`View ${item.title}`}
                >
                  <img
                    src={item.src}
                    alt={`${item.title} — Street Strength Studio`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-500" />

                  {/* Orange glow on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-t from-brand-orange/20 via-transparent to-transparent transition-opacity duration-500" aria-hidden="true" />

                  {/* Title on hover */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white font-semibold text-sm">{item.title}</p>
                  </div>
                </button>
              </RevealOnScroll>
            ))}
          </div>
        </Container>
      </section>

      {/* ─── Lightbox Modal ─── */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-xl flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery lightbox"
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>

          {/* Previous */}
          <button
            onClick={() => navigate(-1)}
            className="absolute left-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Image */}
          <img
            src={galleryItems[lightbox].src}
            alt={galleryItems[lightbox].title}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />

          {/* Next */}
          <button
            onClick={() => navigate(1)}
            className="absolute right-4 z-10 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={20} />
          </button>

          {/* Caption */}
          <div className="absolute bottom-6 text-center">
            <p className="text-white font-medium">{galleryItems[lightbox].title}</p>
            <p className="text-gray-500 text-xs mt-1">
              {lightbox + 1} / {galleryItems.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;