import React from 'react';
import RevealOnScroll from './ui/RevealOnScroll';

const stats = [
  { label: 'Calisthenics', icon: '💪' },
  { label: 'Strength', icon: '🏋️' },
  { label: 'Stamina', icon: '⚡' },
  { label: 'Mobility', icon: '🤸' },
  { label: 'Balance', icon: '🧘' },
  { label: 'Fat Loss', icon: '🔥' },
];

const TrustStats = () => {
  return (
    <section className="relative bg-brand-dark border-y border-white/5 py-8 overflow-hidden" aria-label="Training disciplines">
      {/* Subtle glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[200px] rounded-full bg-brand-orange/5 blur-[100px]" aria-hidden="true" />

      <div className="relative max-w-container mx-auto px-5">
        <RevealOnScroll>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 md:gap-x-16">
            {stats.map((item, i) => (
              <div
                key={item.label}
                className="flex items-center gap-2.5 group cursor-default"
              >
                <span className="text-lg transition-transform duration-300 group-hover:scale-125" aria-hidden="true">
                  {item.icon}
                </span>
                <span className="text-xs sm:text-sm font-semibold uppercase tracking-[3px] text-gray-400 group-hover:text-white transition-colors duration-300">
                  {item.label}
                </span>
                {i < stats.length - 1 && (
                  <span className="hidden md:inline text-white/10 ml-6" aria-hidden="true">|</span>
                )}
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default TrustStats;
