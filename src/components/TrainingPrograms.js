import React from 'react';
import { Dumbbell, Flame, Wind, Move, User, ArrowRight } from 'lucide-react';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import RevealOnScroll from './ui/RevealOnScroll';
import siteConfig from '../config/siteConfig';

const programs = [
  {
    title: 'Calisthenics',
    subtitle: 'Bodyweight Mastery',
    description: 'Master bodyweight strength, control and movement. From pull-ups to muscle-ups, handstands to planche progressions.',
    image: '/imagess/program1.png',
    icon: Dumbbell,
    gradient: 'from-orange-600/20 to-transparent',
  },
  {
    title: 'Strength Training',
    subtitle: 'Build Functional Power',
    description: 'Progressive training to build real-world strength, muscle endurance and physical capacity.',
    image: '/imagess/program2.png',
    icon: Dumbbell,
    gradient: 'from-amber-600/20 to-transparent',
  },
  {
    title: 'Fat Loss',
    subtitle: 'Body Recomposition',
    description: 'Structured training focused on improving fitness, burning fat and achieving a leaner physique.',
    image: '/imagess/fatloss.png',
    icon: Flame,
    gradient: 'from-red-600/20 to-transparent',
  },
  {
    title: 'Stamina & Conditioning',
    subtitle: 'Endurance Training',
    description: 'Improve cardiovascular capacity, endurance and the ability to sustain effort over time.',
    image: '/imagess/g3.png',
    icon: Wind,
    gradient: 'from-cyan-600/20 to-transparent',
  },
  {
    title: 'Mobility & Balance',
    subtitle: 'Movement Quality',
    description: 'Improve flexibility, joint health, body control and movement quality for injury prevention.',
    image: '/imagess/g5.png',
    icon: Move,
    gradient: 'from-emerald-600/20 to-transparent',
  },
  {
    title: 'Personal Training',
    subtitle: 'Customized Coaching',
    description: 'One-on-one coaching with personalized programming, form correction and progress tracking.',
    image: '/imagess/g4.png',
    icon: User,
    gradient: 'from-violet-600/20 to-transparent',
  },
];

const TrainingPrograms = () => {
  return (
    <section id="programs" className="relative py-section overflow-hidden bg-brand-dark" aria-label="Training programs">
      {/* Background */}
      <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-brand-orange/6 blur-[180px]" aria-hidden="true" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] [background-size:30px_30px]" aria-hidden="true" />

      <Container className="relative">
        <RevealOnScroll>
          <SectionHeading
            tag="Premium Training"
            title="Training Programs"
            titleAccent="Programs"
            subtitle="Structured training designed for every level. Build strength, master movement, and transform your body."
          />
        </RevealOnScroll>

        {/* Program Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <RevealOnScroll key={program.title} delay={index * 80}>
                <div className="group relative overflow-hidden rounded-[2rem] h-[420px] flex flex-col justify-end border border-white/5 bg-brand-dark cursor-pointer">
                  
                  {/* Background Image */}
                  <img
                    src={program.image}
                    alt={`${program.title} training at Street Strength Studio`}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                    loading="lazy"
                  />
                  
                  {/* Cinematic Overlay Gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-95" aria-hidden="true" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${program.gradient} opacity-40 mix-blend-overlay`} aria-hidden="true" />

                  {/* Content (Slides up on hover) */}
                  <div className="relative z-10 p-8 transform transition-transform duration-500 translate-y-6 group-hover:translate-y-0">
                    
                    {/* Icon Badge */}
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/10 flex items-center justify-center mb-6 shadow-xl transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-orange/20 group-hover:border-brand-orange/30">
                      <Icon size={20} className="text-white group-hover:text-brand-orange transition-colors duration-300" />
                    </div>

                    <p className="text-brand-orange text-[10px] font-bold uppercase tracking-[3px] mb-2 opacity-80">
                      {program.subtitle}
                    </p>
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {program.title}
                    </h3>
                    
                    {/* Description - Fades in on hover */}
                    <div className="h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:h-auto group-hover:opacity-100 group-hover:mt-3">
                      <p className="text-gray-300 text-sm leading-relaxed pb-4">
                        {program.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <a
                      href="#register"
                      onClick={() => {
                        const target = document.querySelector('#register');
                        if(target) {
                          const y = target.getBoundingClientRect().top + window.scrollY - 80;
                          window.scrollTo({ top: y, behavior: 'smooth' });
                        }
                      }}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[2px] text-white hover:text-brand-orange transition-colors group/link mt-2"
                    >
                      <span>Join Program</span>
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover/link:translate-x-1" />
                    </a>
                  </div>

                  {/* Top-Right Accent Glow */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-brand-orange/20 blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" aria-hidden="true" />
                </div>
              </RevealOnScroll>
            );
          })}
        </div>

        {/* Pricing Banner */}
        <RevealOnScroll delay={200}>
          <div className="mt-16 rounded-card-lg border border-white/5 bg-white/[0.02] p-8 md:p-10 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Membership Plans</h3>
            <div className="flex flex-wrap justify-center gap-8 mb-6">
              <div>
                <span className="text-3xl font-extrabold text-brand-orange">{siteConfig.pricing.monthly.price}</span>
                <span className="text-gray-400 text-sm block mt-1">Monthly</span>
              </div>
              <div className="w-px bg-white/10 hidden sm:block" aria-hidden="true" />
              <div>
                <span className="text-3xl font-extrabold text-brand-orange">{siteConfig.pricing.quarterly.price}</span>
                <span className="text-gray-400 text-sm block mt-1">Quarterly</span>
              </div>
              <div className="w-px bg-white/10 hidden sm:block" aria-hidden="true" />
              <div>
                <span className="text-3xl font-extrabold text-brand-orange">{siteConfig.pricing.yearly.price}</span>
                <span className="text-gray-400 text-sm block mt-1">Yearly</span>
              </div>
            </div>
            <p className="text-gray-500 text-sm mb-6">All plans include personal training, nutrition guidance & community access</p>
            <a
              href={siteConfig.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-button bg-brand-orange text-white font-semibold uppercase tracking-wider text-sm transition-all duration-300 hover:bg-brand-orange-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-orange/30"
            >
              Choose Your Plan
              <ArrowRight size={16} />
            </a>
          </div>
        </RevealOnScroll>
      </Container>
    </section>
  );
};

export default TrainingPrograms;
