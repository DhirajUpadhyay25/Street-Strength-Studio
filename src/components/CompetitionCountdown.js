import React, { useState, useEffect } from 'react';
import { Calendar, Clock } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import siteConfig from '../config/siteConfig';
import { currentChallenge } from '../data/leaderboardData';

/**
 * Calculates upcoming Wednesday & Saturday competition rounds
 */
export function getNextCompetitionSession() {
  const now = new Date();
  const currentDay = now.getDay();
  const currentHours = now.getHours();
  const currentMinutes = now.getMinutes();
  const timeDecimal = currentHours + currentMinutes / 60;

  let isLiveNow = false;
  if (currentDay === 3 || currentDay === 6) {
    if ((timeDecimal >= 6 && timeDecimal < 9) || (timeDecimal >= 17 && timeDecimal < 21)) {
      isLiveNow = true;
    }
  }

  for (let i = 0; i <= 7; i++) {
    const candidate = new Date(now);
    candidate.setDate(now.getDate() + i);
    const day = candidate.getDay();

    if (day === 3 || day === 6) {
      const dayName = day === 3 ? 'Wednesday' : 'Saturday';

      // Morning Session at 6:00 AM
      candidate.setHours(6, 0, 0, 0);
      if (candidate.getTime() > now.getTime()) {
        const formattedDate = candidate.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        });
        return {
          target: candidate,
          dayName,
          label: `${dayName} Morning (6:00 AM – 9:00 AM)`,
          formattedDate,
          isLiveNow,
        };
      }

      // Evening Session at 5:00 PM
      candidate.setHours(17, 0, 0, 0);
      if (candidate.getTime() > now.getTime()) {
        const formattedDate = candidate.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
        });
        return {
          target: candidate,
          dayName,
          label: `${dayName} Evening (5:00 PM – 9:00 PM)`,
          formattedDate,
          isLiveNow,
        };
      }
    }
  }

  const fallback = new Date(now.getTime() + 24 * 3600 * 1000);
  return {
    target: fallback,
    dayName: 'Wednesday',
    label: 'Wednesday Morning (6:00 AM – 9:00 AM)',
    formattedDate: 'Upcoming Round',
    isLiveNow: false,
  };
}

export function calculateTimeRemaining(targetDate) {
  const difference = targetDate.getTime() - new Date().getTime();
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / 1000 / 60) % 60);
  const seconds = Math.floor((difference / 1000) % 60);

  return { days, hours, minutes, seconds };
}

export default function CompetitionCountdown() {
  const [sessionInfo, setSessionInfo] = useState(getNextCompetitionSession);
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeRemaining(sessionInfo.target));

  useEffect(() => {
    const timer = setInterval(() => {
      const remaining = calculateTimeRemaining(sessionInfo.target);
      if (
        remaining.days === 0 &&
        remaining.hours === 0 &&
        remaining.minutes === 0 &&
        remaining.seconds === 0
      ) {
        const next = getNextCompetitionSession();
        setSessionInfo(next);
        setTimeLeft(calculateTimeRemaining(next.target));
      } else {
        setTimeLeft(remaining);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [sessionInfo.target]);

  const bookingMessage = encodeURIComponent(
    `Hi Coach Hitesh, I want to reserve my slot for the ${sessionInfo.dayName} Competition Round (${currentChallenge.title})!`
  );
  const whatsappUrl = `https://wa.me/${siteConfig.contact.phoneClean}?text=${bookingMessage}`;

  return (
    <div className="relative mb-14 rounded-2xl bg-gradient-to-r from-[#111] via-[#0d0d0d] to-[#111] border border-brand-orange/40 p-5 sm:p-6 shadow-[0_0_35px_rgba(249,115,22,0.15)] overflow-hidden">
      <div className="absolute top-0 right-1/4 w-72 h-72 rounded-full bg-brand-orange/10 blur-[100px] pointer-events-none" />

      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-6">
        {/* Left: Next Round info */}
        <div className="space-y-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange" />
            </span>
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[2.5px] text-brand-orange">
              {sessionInfo.isLiveNow ? 'Testing Live Now On Floor' : 'Next Competition Round In'}
            </span>
          </div>

          <h3 className="font-heading text-lg sm:text-xl md:text-2xl font-black text-white tracking-tight">
            {sessionInfo.label}
          </h3>

          <p className="text-xs text-zinc-400 flex items-center justify-center lg:justify-start gap-3">
            <span className="inline-flex items-center gap-1">
              <Calendar size={12} className="text-amber-400" />
              Every Wed & Sat
            </span>
            <span className="text-zinc-600">•</span>
            <span className="inline-flex items-center gap-1">
              <Clock size={12} className="text-brand-orange" />
              6–9 AM & 5–9 PM
            </span>
          </p>
        </div>

        {/* Center: 4-Digit HUD Clocks */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* DAYS */}
          <div className="flex flex-col items-center">
            <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-black/80 border border-white/10 flex items-center justify-center shadow-inner">
              <span className="font-mono text-2xl sm:text-3xl font-black text-white">
                {String(timeLeft.days).padStart(2, '0')}
              </span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mt-1">
              Days
            </span>
          </div>

          <span className="text-lg font-mono font-bold text-brand-orange -mt-3">:</span>

          {/* HOURS */}
          <div className="flex flex-col items-center">
            <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-black/80 border border-white/10 flex items-center justify-center shadow-inner">
              <span className="font-mono text-2xl sm:text-3xl font-black text-white">
                {String(timeLeft.hours).padStart(2, '0')}
              </span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mt-1">
              Hours
            </span>
          </div>

          <span className="text-lg font-mono font-bold text-brand-orange -mt-3">:</span>

          {/* MINS */}
          <div className="flex flex-col items-center">
            <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-black/80 border border-white/10 flex items-center justify-center shadow-inner">
              <span className="font-mono text-2xl sm:text-3xl font-black text-white">
                {String(timeLeft.minutes).padStart(2, '0')}
              </span>
            </div>
            <span className="text-[10px] font-bold uppercase tracking-wider text-zinc-500 mt-1">
              Mins
            </span>
          </div>

          <span className="text-lg font-mono font-bold text-brand-orange -mt-3">:</span>

          {/* SECS */}
          <div className="flex flex-col items-center">
            <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-xl bg-gradient-to-b from-brand-orange/25 via-brand-orange/10 to-black border border-brand-orange/70 flex items-center justify-center shadow-[0_0_15px_rgba(249,115,22,0.3)]">
              <span className="font-mono text-2xl sm:text-3xl font-black text-brand-orange animate-pulse">
                {String(timeLeft.seconds).padStart(2, '0')}
              </span>
            </div>
            <span className="text-[10px] font-black uppercase tracking-wider text-brand-orange mt-1">
              Secs
            </span>
          </div>
        </div>

        {/* Right: Quick Reserve Slot Button */}
        <div className="w-full sm:w-auto flex-shrink-0">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-2.5 rounded-xl bg-gradient-to-r from-[#25D366] to-[#1eb857] hover:from-[#22c35e] hover:to-[#1aa34d] text-white text-xs sm:text-sm font-black uppercase tracking-wider shadow-lg shadow-[#25D366]/20 transition-all hover:shadow-[#25D366]/40 hover:-translate-y-0.5 active:scale-[0.98]"
          >
            <FaWhatsapp size={18} />
            <span>Book Competition Slot</span>
          </a>
        </div>
      </div>
    </div>
  );
}
