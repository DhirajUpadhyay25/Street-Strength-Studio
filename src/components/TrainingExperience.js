import React from 'react';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import RevealOnScroll from './ui/RevealOnScroll';

const experiences = [
  { 
    title: 'RAW POWER', 
    image: '/imagess/g4.png', 
    description: 'Build absolute strength through progressive bodyweight mastery.',
    span: 'md:col-span-2 md:row-span-2',
    gradient: 'from-orange-600/60 to-transparent'
  },
  { 
    title: 'PRECISION', 
    image: '/imagess/program1.png', 
    description: 'Master your body with elite movement patterns.',
    span: 'md:col-span-1 md:row-span-1',
    gradient: 'from-blue-600/60 to-transparent'
  },
  { 
    title: 'STABILITY', 
    image: '/imagess/g5.png', 
    description: 'Develop unbreakable joints and core balance.',
    span: 'md:col-span-1 md:row-span-1',
    gradient: 'from-emerald-600/60 to-transparent'
  },
  { 
    title: 'ENDURANCE', 
    image: '/imagess/g3.png', 
    description: 'Push your cardiovascular capacity beyond limits.',
    span: 'md:col-span-1 md:row-span-1',
    gradient: 'from-cyan-600/60 to-transparent'
  },
  { 
    title: 'COMMUNITY', 
    image: '/imagess/g2.png', 
    description: 'Train alongside athletes who push you to be better.',
    span: 'md:col-span-1 md:row-span-1',
    gradient: 'from-purple-600/60 to-transparent'
  },
];

const TrainingExperience = () => {
  return (
    <section id="experience" className="relative py-section overflow-hidden bg-[#050505]" aria-label="Training experience">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-orange/5 blur-[150px] pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.02)_0%,transparent_70%)] pointer-events-none" />

      <Container className="relative z-10">
        <RevealOnScroll>
          <SectionHeading
            tag="The Lifestyle"
            title="Beyond The Workout"
            titleAccent="Beyond"
            subtitle="We don't just count reps. We build elite athletes through a culture of discipline and mastery."
          />
        </RevealOnScroll>

        {/* Bento Box Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 auto-rows-[280px] md:auto-rows-[320px] mt-8">
          {experiences.map((exp, index) => (
            <RevealOnScroll key={exp.title} delay={index * 100} className={exp.span}>
              <div className="group relative w-full h-full overflow-hidden rounded-3xl bg-white/[0.02] border border-white/10 cursor-crosshair">
                
                {/* Image */}
                <img
                  src={exp.image}
                  alt={`${exp.title} training`}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-[2s] group-hover:scale-110 group-hover:rotate-1"
                  loading="lazy"
                />

                {/* Overlays */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/30 transition-colors duration-700" />
                <div className={`absolute inset-0 bg-gradient-to-t ${exp.gradient} opacity-20 mix-blend-overlay group-hover:opacity-80 transition-opacity duration-700`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="transform transition-all duration-700 translate-y-8 group-hover:translate-y-0">
                    <h3 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white/80 group-hover:text-white mb-2 transition-colors duration-500 tracking-tight">
                      {exp.title}
                    </h3>
                    <div className="h-0 opacity-0 overflow-hidden transition-all duration-500 group-hover:h-auto group-hover:opacity-100 group-hover:mt-3">
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-sm border-l-2 border-brand-orange pl-4">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Animated Corner Brackets */}
                <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-brand-orange/0 group-hover:border-brand-orange transition-colors duration-700 rounded-tr-xl opacity-0 group-hover:opacity-100 -translate-x-4 translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0" />
                <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-brand-orange/0 group-hover:border-brand-orange transition-colors duration-700 rounded-bl-xl opacity-0 group-hover:opacity-100 translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0" />
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default TrainingExperience;
