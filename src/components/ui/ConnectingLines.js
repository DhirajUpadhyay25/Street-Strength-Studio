import React, { useEffect, useState } from 'react';

const ConnectingLines = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPx = document.documentElement.scrollTop || document.body.scrollTop;
      const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrollLen = Math.min((scrollPx / winHeightPx) * 100, 100);
      setScrollProgress(scrollLen);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial call
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Left side connecting line (Visible on Mobile + Desktop) */}
      <div className="fixed left-2 md:left-6 lg:left-8 top-0 bottom-0 w-[1px] bg-white/5 z-40 pointer-events-none">
        <div 
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-brand-orange/0 via-brand-orange to-brand-orange-light shadow-[0_0_15px_rgba(255,87,34,0.6)]"
          style={{ height: `${scrollProgress}%`, transition: 'height 0.1s ease-out' }}
        >
          {/* Glowing dot at the leading edge */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[2px] h-[10px] md:w-[3px] md:h-[12px] rounded-full bg-white shadow-[0_0_10px_#ff5722,0_0_20px_#ff5722]" />
        </div>
      </div>

      {/* Right side connecting line (Desktop only) */}
      <div className="fixed right-3 md:right-8 top-0 bottom-0 w-[1px] bg-white/5 z-40 pointer-events-none hidden lg:block">
        <div 
          className="absolute top-0 left-0 w-full bg-gradient-to-b from-brand-orange/0 via-brand-orange to-brand-orange-light shadow-[0_0_15px_rgba(255,87,34,0.6)]"
          style={{ height: `${scrollProgress}%`, transition: 'height 0.1s ease-out' }}
        >
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-[3px] h-[12px] rounded-full bg-white shadow-[0_0_15px_#ff5722,0_0_30px_#ff5722]" />
        </div>
      </div>
    </>
  );
};

export default ConnectingLines;
