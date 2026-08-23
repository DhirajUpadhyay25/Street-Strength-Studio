import React from 'react';
import { Award, Users, Flame } from 'lucide-react';
import Container from './ui/Container';
import RevealOnScroll from './ui/RevealOnScroll';
import Button from './ui/Button';
import siteConfig from '../config/siteConfig';

const AboutStudio = () => {
  return (
    <section id="about" className="relative py-section overflow-hidden bg-black" aria-label="About the studio">
      {/* Background glows */}
      <div className="absolute top-20 left-0 w-80 h-80 rounded-full bg-brand-orange/8 blur-[150px]" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-brand-orange/5 blur-[180px]" aria-hidden="true" />

      <Container>
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* ─── Image Side ─── */}
          <RevealOnScroll direction="left">
            <div className="relative group cursor-crosshair mx-auto max-w-md lg:max-w-[450px]">
              {/* Animated Glow behind image */}
              <div className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-brand-orange to-brand-orange-dark opacity-20 blur-2xl group-hover:opacity-60 group-hover:blur-3xl transition-all duration-700" aria-hidden="true" />

              <div className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-black/50 aspect-[4/5] lg:aspect-[3/4] shadow-2xl transition-transform duration-700 group-hover:-translate-y-2 group-hover:border-brand-orange/30">
                <img
                  src="/imagess/about.jpeg"
                  alt="Hitesh Raj Upadhyay — Calisthenics Coach and Founder of Street Strength Studio"
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-[1.5s] group-hover:scale-110 grayscale-[40%] group-hover:grayscale-0"
                  loading="lazy"
                  width="600"
                  height="650"
                />
                
                {/* Overlay Gradients */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors duration-700" aria-hidden="true" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80" aria-hidden="true" />

                {/* Floating stat card - slides up on hover */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 transform transition-transform duration-700 translate-y-4 group-hover:translate-y-0">
                  <div className="glass-dark rounded-2xl p-4 md:p-5 flex items-center gap-4 border border-white/10 group-hover:border-brand-orange/30 transition-colors duration-500 shadow-xl">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-brand-orange flex items-center justify-center flex-shrink-0 shadow-glow-orange group-hover:scale-110 transition-transform duration-500">
                      <Award className="text-white" size={24} />
                    </div>
                    <div>
                      <p className="text-white font-bold text-sm md:text-base tracking-wide">{siteConfig.stats.yearsExperience} Years Coaching</p>
                      <p className="text-brand-orange text-xs md:text-sm font-semibold mt-1 uppercase tracking-[2px]">Dedicated Excellence</p>
                    </div>
                  </div>
                </div>

                {/* Accents */}
                <div className="absolute top-6 right-6 w-12 h-12 border-t-2 border-r-2 border-brand-orange/0 group-hover:border-brand-orange transition-colors duration-700 rounded-tr-2xl" />
                <div className="absolute bottom-6 left-6 w-12 h-12 border-b-2 border-l-2 border-brand-orange/0 group-hover:border-brand-orange transition-colors duration-700 rounded-bl-2xl" />
              </div>
            </div>
          </RevealOnScroll>

          {/* ─── Content Side ─── */}
          <div>
            <RevealOnScroll direction="right">
              <span className="inline-block px-4 py-1.5 rounded-full border border-brand-orange/30 bg-brand-orange/5 text-brand-orange text-xs font-semibold uppercase tracking-[4px] mb-5">
                Our Story
              </span>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={100}>
              <h2 className="text-display-md font-extrabold text-white">
                Transforming Lives Through{' '}
                <span className="text-gradient-orange">Calisthenics</span>
              </h2>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={200}>
              <p className="mt-6 text-gray-300 leading-relaxed text-lg">
                Hi, I'm{' '}
                <span className="text-brand-orange font-semibold">{siteConfig.coach.name}</span>.
                I believe that true fitness isn't just about how you look, but what your body is capable of doing.
              </p>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={300}>
              <p className="mt-4 text-gray-400 leading-relaxed">
                We strip away the gimmicks. Whether you're working toward your first pull-up,
                mastering the muscle-up, or building bulletproof joints, we provide the structured training, 
                community, and expert coaching you need to unlock your highest physical potential.
              </p>
            </RevealOnScroll>

            <RevealOnScroll direction="right" delay={400}>
              <div className="mt-6 p-5 rounded-xl bg-white/[0.03] border-l-2 border-brand-orange">
                <p className="text-white font-semibold italic text-lg">
                  "{siteConfig.coach.philosophy}"
                </p>
                <p className="text-gray-500 text-sm mt-2">— {siteConfig.coach.name}</p>
              </div>
            </RevealOnScroll>

            {/* Stats */}
            <RevealOnScroll direction="right" delay={500}>
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
                  <Award className="mx-auto text-brand-orange mb-2" size={20} />
                  <h3 className="text-2xl font-bold text-white">{siteConfig.stats.yearsExperience}</h3>
                  <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider">Years</p>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
                  <Users className="mx-auto text-brand-orange mb-2" size={20} />
                  <h3 className="text-2xl font-bold text-white">{siteConfig.stats.clients}</h3>
                  <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider">Clients</p>
                </div>
                <div className="rounded-xl border border-white/5 bg-white/[0.02] p-4 text-center">
                  <Flame className="mx-auto text-brand-orange mb-2" size={20} />
                  <h3 className="text-2xl font-bold text-white">100%</h3>
                  <p className="text-gray-500 text-xs mt-1 uppercase tracking-wider">Passion</p>
                </div>
              </div>
            </RevealOnScroll>

            {/* Buttons */}
            <RevealOnScroll direction="right" delay={600}>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button
                  variant="primary"
                  href={siteConfig.contact.whatsappLink}
                  external
                  showWhatsapp
                  showArrow
                >
                  Start Training
                </Button>
                <Button
                  variant="ghost"
                  href={siteConfig.social.instagramPersonal.url}
                  external
                >
                  Follow the Journey
                </Button>
              </div>
            </RevealOnScroll>
          </div>

        </div>
      </Container>
    </section>
  );
};

export default AboutStudio;
