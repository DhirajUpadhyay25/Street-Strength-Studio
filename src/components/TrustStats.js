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
    <section
      className="relative bg-[#090909] border-y border-white/[0.06] py-5 sm:py-6 overflow-hidden"
      aria-label="Training disciplines"
    >
      {/* Subtle background ambient glow */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[150px] rounded-full bg-brand-orange/5 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <RevealOnScroll>
          <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3.5">
            {stats.map((item) => (
              <div
                key={item.label}
                className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 px-2 py-2 sm:px-3 sm:py-2.5 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-brand-orange/40 hover:bg-brand-orange/[0.05] transition-all duration-300 group cursor-default shadow-sm text-center"
              >
                <span
                  className="text-base sm:text-lg transition-transform duration-300 group-hover:scale-125"
                  aria-hidden="true"
                >
                  {item.icon}
                </span>
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-[2px] text-zinc-400 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default TrustStats;
