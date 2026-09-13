import React from 'react';
import { Crown, Flame, Sparkles, Timer, Zap, Calendar, Clock, ExternalLink } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import Container from './ui/Container';
import RevealOnScroll from './ui/RevealOnScroll';
import Button from './ui/Button';
import CompetitionCountdown from './CompetitionCountdown';
import siteConfig from '../config/siteConfig';
import { currentChallenge } from '../data/leaderboardData';
import { calculateRankings } from '../utils/leaderboardUtils';

export const getInstagramDisplay = (athlete) => {
  if (!athlete || !athlete.instagram) return null;
  const raw = String(athlete.instagram).trim();
  let handle = raw;
  if (raw.startsWith('http://') || raw.startsWith('https://')) {
    try {
      const urlObj = new URL(raw);
      handle = urlObj.pathname.split('/').filter(Boolean)[0] || raw;
    } catch {
      handle = raw;
    }
  }
  handle = handle.replace(/^@/, '');
  const url =
    athlete.instagramUrl || (raw.startsWith('http') ? raw : `https://www.instagram.com/${handle}`);
  return { handle, url };
};

const Leaderboard = () => {
  const rankedParticipants = calculateRankings(currentChallenge);

  const top1 = rankedParticipants[0] || null;
  const top2 = rankedParticipants[1] || null;
  const top3 = rankedParticipants[2] || null;

  return (
    <section
      id="leaderboard"
      className="relative bg-black overflow-hidden border-b border-white/[0.06] selection:bg-brand-orange/30"
      aria-label="Faridabad Leaderboard Challenge"
    >
      {/* ─── Background Ambient Glows ─── */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full bg-brand-orange/8 blur-[180px] pointer-events-none"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(249,115,22,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* ─── 1. Tournament Live Ribbon (Flush with top border, directly below TrustStats) ─── */}
      <div className="relative border-b border-brand-orange/30 bg-gradient-to-r from-[#120a06] via-[#1a0e08] to-[#120a06] py-2.5 sm:py-3 px-3 sm:px-4 shadow-md">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-3 text-xs text-center sm:text-left">
            {/* Left: Live Round & Schedule Days */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange" />
              </span>
              <span className="font-extrabold uppercase tracking-[2px] text-white flex items-center gap-1.5 text-[11px] sm:text-xs">
                <Flame size={13} className="text-brand-orange" />
                Faridabad Championship
              </span>
              <span className="px-2 py-0.5 rounded-full bg-brand-orange/20 border border-brand-orange/40 text-amber-300 font-extrabold uppercase tracking-wider text-[10px] flex items-center gap-1">
                <Calendar size={11} className="text-amber-400" />
                Wed & Sat
              </span>
            </div>

            {/* Right: Days remaining + Session Timings */}
            <div className="flex items-center justify-center gap-3 sm:gap-4 text-zinc-300 font-semibold text-xs">
              <span className="flex items-center gap-1 text-brand-orange font-bold uppercase tracking-wider text-[10px] sm:text-[11px]">
                <Timer size={12} />
                Season Ends in {currentChallenge.daysRemaining || 14} Days
              </span>
              <span className="text-zinc-700">|</span>
              <span className="inline-flex items-center gap-1 text-zinc-400 text-[10px] sm:text-[11px]">
                <Clock size={11} className="text-brand-orange" />
                6–9 AM & 5–9 PM
              </span>
            </div>
          </div>
        </Container>
      </div>

      <div className="relative py-12 md:py-16">
        <Container className="relative z-10">
        {/* ─── 2. Section Header & Active Challenge ─── */}
        <RevealOnScroll>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-red-500/40 bg-red-500/10 backdrop-blur-md mb-3 shadow-[0_0_20px_rgba(239,68,68,0.2)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
              </span>
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-[2.5px] text-red-400">
                Official Studio Competition
              </span>
            </div>

            <h2 className="text-display-md md:text-display-lg font-heading font-extrabold text-white tracking-tight uppercase leading-tight">
              FARIDABAD <span className="text-gradient-orange">LEADERBOARD</span>
              <br />
              <span className="text-white/90 text-2xl sm:text-3xl md:text-4xl block mt-1 tracking-widest font-black">
                CHALLENGE
              </span>
            </h2>

            {/* Clean, Punchy Challenge Badge */}
            <div className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-orange/15 border border-brand-orange/40 text-xs sm:text-sm font-black uppercase tracking-wider text-white">
              <Zap size={14} className="text-brand-orange" />
              <span>Active Challenge:</span>
              <span className="text-amber-300">{currentChallenge.title}</span>
            </div>
          </div>
        </RevealOnScroll>

        {/* ─── 3. Live Competition Countdown HUD ─── */}
        <RevealOnScroll delay={100}>
          <CompetitionCountdown />
        </RevealOnScroll>

        {/* ─── 5. Top 3 Podium (Symmetrical, High-End Alignment) ─── */}
        <RevealOnScroll delay={150}>
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-[3px] text-brand-orange block mb-1">
              Faridabad Calisthenics Elite
            </span>
            <h3 className="font-heading text-2xl md:text-3xl font-extrabold text-white">
              CURRENT TOP 3 PODIUM
            </h3>
          </div>

          {/* ─── MOBILE OLYMPIC 3-PILLAR PODIUM (sm:hidden) ─── */}
          <div className="sm:hidden grid grid-cols-3 gap-1.5 items-end max-w-md mx-auto mb-10">
            {/* #2 HEROIC (Left Pillar - Medium Height) */}
            {top2 && (
              <div className="relative rounded-2xl border border-red-500/40 bg-gradient-to-b from-red-600/15 via-[#0c0c0c] to-[#070707] p-2 text-center shadow-lg flex flex-col justify-between h-[200px]">
                <div>
                  <div className="w-7 h-7 rounded-lg mx-auto bg-red-500/20 border border-red-500/40 flex items-center justify-center mb-1 shadow-[0_0_8px_rgba(239,68,68,0.3)]">
                    <Flame size={14} className="text-red-400" />
                  </div>
                  <span className="inline-block text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-red-500/20 text-red-300 border border-red-500/30 mb-0.5">
                    HEROIC #2
                  </span>
                  <h4 className="font-heading text-xs font-bold text-white truncate px-0.5">
                    {top2.name}
                  </h4>
                  {top2.instagram && (
                    <a
                      href={`https://www.instagram.com/${top2.instagram.replace(/^@/, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-[9px] text-pink-400 font-semibold mt-0.5 max-w-full truncate justify-center"
                    >
                      <FaInstagram size={9} className="flex-shrink-0" />
                      <span className="truncate max-w-[65px]">@{top2.instagram.replace(/^@/, '')}</span>
                    </a>
                  )}
                </div>

                <div className="py-1.5 px-1 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  <span className="font-mono text-base font-black text-white block">
                    {top2.formattedScore}
                  </span>
                </div>
              </div>
            )}

            {/* #1 CONQUEROR (Center Pillar - Elevated Champion Peak) */}
            {top1 && (
              <div className="relative rounded-2xl border-2 border-brand-orange bg-gradient-to-b from-amber-500/25 via-[#100c08] to-[#080808] p-2.5 text-center shadow-[0_0_25px_rgba(249,115,22,0.35)] -translate-y-2 flex flex-col justify-between h-[230px]">
                <div>
                  <div className="w-9 h-9 rounded-xl mx-auto bg-gradient-to-tr from-brand-orange to-amber-400 flex items-center justify-center mb-1 shadow-md shadow-brand-orange/50 animate-pulse">
                    <Crown size={18} className="text-black" />
                  </div>
                  <span className="inline-block text-[9px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-amber-500/25 text-amber-300 border border-brand-orange/70 shadow-[0_0_8px_rgba(249,115,22,0.4)] mb-0.5">
                    👑 CONQUEROR #1
                  </span>
                  <h4 className="font-heading text-xs sm:text-sm font-black text-white tracking-tight truncate px-0.5">
                    {top1.name}
                  </h4>
                  {top1.instagram && (
                    <a
                      href={`https://www.instagram.com/${top1.instagram.replace(/^@/, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-[10px] text-pink-400 font-bold mt-0.5 max-w-full truncate justify-center"
                    >
                      <FaInstagram size={10} className="flex-shrink-0" />
                      <span className="truncate max-w-[70px]">@{top1.instagram.replace(/^@/, '')}</span>
                    </a>
                  )}
                </div>

                <div className="py-2 px-1 rounded-xl bg-black/80 border border-brand-orange/60 shadow-inner">
                  <span className="font-mono text-lg font-black text-brand-orange block">
                    {top1.formattedScore}
                  </span>
                </div>
              </div>
            )}

            {/* #3 DIAMOND (Right Pillar - Third Stature) */}
            {top3 && (
              <div className="relative rounded-2xl border border-cyan-500/40 bg-gradient-to-b from-cyan-600/15 via-[#0c0c0c] to-[#070707] p-2 text-center shadow-lg flex flex-col justify-between h-[190px]">
                <div>
                  <div className="w-7 h-7 rounded-lg mx-auto bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center mb-1 shadow-[0_0_8px_rgba(6,182,212,0.3)]">
                    <Sparkles size={14} className="text-cyan-300" />
                  </div>
                  <span className="inline-block text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-200 border border-cyan-400/30 mb-0.5">
                    DIAMOND #3
                  </span>
                  <h4 className="font-heading text-xs font-bold text-white truncate px-0.5">
                    {top3.name}
                  </h4>
                  {top3.instagram && (
                    <a
                      href={`https://www.instagram.com/${top3.instagram.replace(/^@/, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-0.5 text-[9px] text-pink-400 font-semibold mt-0.5 max-w-full truncate justify-center"
                    >
                      <FaInstagram size={9} className="flex-shrink-0" />
                      <span className="truncate max-w-[65px]">@{top3.instagram.replace(/^@/, '')}</span>
                    </a>
                  )}
                </div>

                <div className="py-1.5 px-1 rounded-xl bg-white/[0.04] border border-white/[0.06]">
                  <span className="font-mono text-base font-black text-white block">
                    {top3.formattedScore}
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* ─── DESKTOP FULL-SIZE PODIUM (hidden sm:grid) ─── */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto items-end mb-16">
            {/* ─── #2 HEROIC PODIUM (Left) ─── */}
            <div className="order-2 md:order-1 flex flex-col justify-end">
              {top2 && (
                <div className="relative rounded-2xl border border-red-500/40 bg-gradient-to-b from-red-600/10 via-[#090909] to-[#070707] p-6 text-center shadow-lg transition-all duration-300 hover:border-red-500/60 hover:-translate-y-1 flex flex-col justify-between h-[310px]">
                  <div>
                    <div className="w-12 h-12 rounded-xl mx-auto bg-red-500/15 border border-red-500/30 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(239,68,68,0.2)]">
                      <Flame size={22} className="text-red-400" />
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/15 border border-red-500/40 text-red-300 text-[10px] font-black uppercase tracking-[2px] mb-2 shadow-[0_0_12px_rgba(239,68,68,0.2)]">
                      <Flame size={12} className="text-red-400" />
                      HEROIC TIER
                    </div>

                    <h4 className="font-heading text-lg md:text-xl font-bold text-white mt-1 truncate">
                      {top2.name}
                    </h4>

                    {top2.instagram && (
                      <div className="mt-1">
                        <a
                          href={`https://www.instagram.com/${top2.instagram.replace(/^@/, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-pink-400 hover:text-pink-300 transition-colors font-semibold px-2 py-0.5 rounded-md hover:bg-pink-500/10"
                        >
                          <FaInstagram size={13} />
                          <span>@{top2.instagram.replace(/^@/, '')}</span>
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                    <span className="font-mono text-2xl font-black text-white block">
                      {top2.formattedScore}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* ─── #1 CONQUEROR PODIUM (Center - Elevated & Glowing) ─── */}
            <div className="order-1 md:order-2 flex flex-col justify-end">
              {top1 && (
                <div className="relative rounded-2xl border-2 border-brand-orange bg-gradient-to-b from-amber-500/20 via-[#0c0c0c] to-[#090909] p-7 text-center shadow-[0_0_35px_rgba(249,115,22,0.35)] md:-translate-y-4 transition-all duration-300 hover:-translate-y-5 flex flex-col justify-between h-[340px]">
                  <div>
                    <div className="w-14 h-14 rounded-2xl mx-auto bg-gradient-to-tr from-brand-orange to-amber-400 flex items-center justify-center mb-3 shadow-lg shadow-brand-orange/50 animate-pulse">
                      <Crown size={28} className="text-black" />
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500/25 via-brand-orange/35 to-red-500/25 border border-brand-orange/70 text-amber-300 text-[11px] font-black uppercase tracking-[2.5px] mb-2 shadow-[0_0_18px_rgba(249,115,22,0.4)]">
                      <Crown size={14} className="text-amber-400 animate-pulse" />
                      CONQUEROR TIER
                    </div>

                    <h4 className="font-heading text-2xl md:text-3xl font-black text-white mt-1 tracking-tight truncate">
                      {top1.name}
                    </h4>

                    {top1.instagram && (
                      <div className="mt-1">
                        <a
                          href={`https://www.instagram.com/${top1.instagram.replace(/^@/, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-pink-400 hover:text-pink-300 transition-colors font-bold px-2 py-0.5 rounded-md hover:bg-pink-500/10"
                        >
                          <FaInstagram size={14} />
                          <span>@{top1.instagram.replace(/^@/, '')}</span>
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 py-3.5 px-5 rounded-xl bg-black/70 border border-brand-orange/50 shadow-inner">
                    <span className="font-mono text-3xl md:text-4xl font-black text-brand-orange block">
                      {top1.formattedScore}
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* ─── #3 DIAMOND PODIUM (Right) ─── */}
            <div className="order-3 flex flex-col justify-end">
              {top3 && (
                <div className="relative rounded-2xl border border-cyan-500/40 bg-gradient-to-b from-cyan-600/10 via-[#090909] to-[#070707] p-6 text-center shadow-lg transition-all duration-300 hover:border-cyan-500/60 hover:-translate-y-1 flex flex-col justify-between h-[310px]">
                  <div>
                    <div className="w-12 h-12 rounded-xl mx-auto bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center mb-3 shadow-[0_0_15px_rgba(6,182,212,0.2)]">
                      <Sparkles size={22} className="text-cyan-300" />
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/15 border border-cyan-400/40 text-cyan-300 text-[10px] font-black uppercase tracking-[2px] mb-2 shadow-[0_0_12px_rgba(6,182,212,0.2)]">
                      <Sparkles size={12} className="text-cyan-300" />
                      DIAMOND TIER
                    </div>

                    <h4 className="font-heading text-lg md:text-xl font-bold text-white mt-1 truncate">
                      {top3.name}
                    </h4>

                    {top3.instagram && (
                      <div className="mt-1">
                        <a
                          href={`https://www.instagram.com/${top3.instagram.replace(/^@/, '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs text-pink-400/90 hover:text-pink-300 transition-colors font-semibold px-2 py-0.5 rounded-md hover:bg-pink-500/10"
                        >
                          <FaInstagram size={13} />
                          <span>@{top3.instagram.replace(/^@/, '')}</span>
                        </a>
                      </div>
                    )}
                  </div>

                  <div className="mt-4 py-3 px-4 rounded-xl bg-white/[0.03] border border-white/[0.05]">
                    <span className="font-mono text-2xl font-black text-white block">
                      {top3.formattedScore}
                    </span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </RevealOnScroll>

        {/* ─── 6. Full Standings Table (Pixel-Perfect Alignment) ─── */}
        <RevealOnScroll delay={200}>
          <div id="official-standings" className="max-w-4xl mx-auto scroll-mt-24">
            {/* Table Header Bar */}
            <div className="flex flex-wrap items-center justify-between pb-4 mb-4 border-b border-white/[0.08] gap-2">
              <div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-white tracking-tight">
                  OFFICIAL STANDINGS
                </h3>
                <p className="text-xs text-zinc-400 mt-0.5">
                  Official Attempts recorded Wednesdays & Saturdays
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  Live Table
                </span>
              </div>
            </div>

            {/* Desktop Table Header */}
            <div className="hidden sm:grid grid-cols-12 gap-4 px-6 py-3 rounded-xl bg-white/[0.02] text-[11px] font-bold uppercase tracking-widest text-zinc-400 mb-3 border border-white/[0.04]">
              <div className="col-span-3 text-left">Tier Rank</div>
              <div className="col-span-4 text-left">Athlete</div>
              <div className="col-span-2 text-right">Score</div>
              <div className="col-span-3 text-right">Instagram ID</div>
            </div>

            {/* Table Rows */}
            <div className="space-y-2.5">
              {rankedParticipants.map((athlete) => {
                const isConqueror = athlete.calculatedRank === 1;
                const isHeroic = athlete.calculatedRank === 2;
                const isDiamond = athlete.calculatedRank === 3;

                return (
                  <div
                    key={athlete.id}
                    className={`rounded-xl border transition-all duration-200 hover:-translate-x-0.5 ${
                      isConqueror
                        ? 'bg-gradient-to-r from-amber-500/10 via-brand-orange/10 to-transparent border-brand-orange/50 shadow-[0_0_15px_rgba(249,115,22,0.15)]'
                        : isHeroic
                        ? 'bg-gradient-to-r from-red-500/10 via-rose-500/5 to-transparent border-red-500/40 shadow-[0_0_15px_rgba(239,68,68,0.1)]'
                        : isDiamond
                        ? 'bg-gradient-to-r from-cyan-500/10 via-blue-500/5 to-transparent border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.1)]'
                        : 'bg-white/[0.01] border-white/[0.04] hover:bg-white/[0.025] hover:border-white/[0.08]'
                    }`}
                  >
                    {/* ─── DESKTOP ROW (hidden sm:grid) ─── */}
                    <div className="hidden sm:grid sm:grid-cols-12 gap-4 items-center px-6 py-4">
                      {/* Tier Rank Column */}
                      <div className="col-span-3 flex items-center justify-start">
                        {isConqueror ? (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-amber-500/25 via-brand-orange/35 to-red-500/25 border border-brand-orange/70 shadow-[0_0_14px_rgba(249,115,22,0.35)]">
                            <Crown size={14} className="text-amber-400 animate-pulse flex-shrink-0" />
                            <span className="font-heading text-xs font-black tracking-wider text-amber-300 uppercase">
                              CONQUEROR
                            </span>
                          </div>
                        ) : isHeroic ? (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-red-600/20 via-rose-500/25 to-amber-600/20 border border-red-500/50 shadow-[0_0_14px_rgba(239,68,68,0.25)]">
                            <Flame size={14} className="text-red-400 flex-shrink-0" />
                            <span className="font-heading text-xs font-black tracking-wider text-red-300 uppercase">
                              HEROIC
                            </span>
                          </div>
                        ) : isDiamond ? (
                          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gradient-to-r from-cyan-500/20 via-blue-500/25 to-indigo-500/20 border border-cyan-400/50 shadow-[0_0_14px_rgba(6,182,212,0.25)]">
                            <Sparkles size={14} className="text-cyan-300 flex-shrink-0" />
                            <span className="font-heading text-xs font-black tracking-wider text-cyan-200 uppercase">
                              DIAMOND
                            </span>
                          </div>
                        ) : (
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-xs font-bold text-zinc-400 w-8 h-8 rounded-lg bg-white/[0.03] border border-white/[0.06] flex items-center justify-center">
                              {String(athlete.calculatedRank).padStart(2, '0')}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Athlete Name Column */}
                      <div className="col-span-4 flex items-center justify-start gap-2 min-w-0">
                        <span className="text-white font-semibold text-base tracking-wide truncate">
                          {athlete.name}
                        </span>
                        {athlete.badge && (
                          <span className="text-[9px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 text-zinc-400 flex-shrink-0">
                            {athlete.badge}
                          </span>
                        )}
                      </div>

                      {/* Score Column */}
                      <div className="col-span-2 flex items-center justify-end text-right">
                        <span
                          className={`font-mono text-base md:text-lg font-bold ${
                            isConqueror
                              ? 'text-brand-orange font-black'
                              : isHeroic
                              ? 'text-red-400 font-black'
                              : isDiamond
                              ? 'text-cyan-300 font-black'
                              : 'text-white'
                          }`}
                        >
                          {athlete.formattedScore}
                        </span>
                      </div>

                      {/* Instagram ID Column */}
                      <div className="col-span-3 flex items-center justify-end text-right">
                        {athlete.instagram ? (() => {
                          const ig = getInstagramDisplay(athlete);
                          return (
                            <a
                              href={ig.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/20 text-pink-400 hover:text-pink-300 transition-colors text-xs font-semibold group"
                              aria-label={`Visit ${athlete.name}'s Instagram profile`}
                            >
                              <FaInstagram size={13} className="text-pink-400" />
                              <span>@{ig.handle}</span>
                              <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                            </a>
                          );
                        })() : (
                          <span className="text-zinc-600 text-xs">—</span>
                        )}
                      </div>
                    </div>

                    {/* ─── MOBILE COMPACT ATHLETE ROW (sm:hidden) ─── */}
                    <div className="sm:hidden flex items-center justify-between gap-3 px-3.5 py-3">
                      {/* Left: Rank Badge & Name & Tier */}
                      <div className="flex items-center gap-2.5 min-w-0">
                        {isConqueror ? (
                          <div className="w-8 h-8 rounded-lg bg-amber-500/20 border border-brand-orange/60 flex items-center justify-center text-amber-400 shadow-[0_0_8px_rgba(249,115,22,0.3)] flex-shrink-0">
                            <Crown size={15} className="animate-pulse" />
                          </div>
                        ) : isHeroic ? (
                          <div className="w-8 h-8 rounded-lg bg-red-500/20 border border-red-500/50 flex items-center justify-center text-red-400 flex-shrink-0">
                            <Flame size={15} />
                          </div>
                        ) : isDiamond ? (
                          <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-400/50 flex items-center justify-center text-cyan-300 flex-shrink-0">
                            <Sparkles size={15} />
                          </div>
                        ) : (
                          <div className="w-8 h-8 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center font-mono font-bold text-xs text-zinc-400 flex-shrink-0">
                            {athlete.calculatedRank}
                          </div>
                        )}

                        <div className="min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-white font-bold text-sm tracking-wide truncate">
                              {athlete.name}
                            </span>
                            {athlete.badge && (
                              <span className="text-[8px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-white/10 text-zinc-400 flex-shrink-0">
                                {athlete.badge}
                              </span>
                            )}
                          </div>
                          <span className="text-[10px] font-black uppercase tracking-wider block">
                            {isConqueror ? (
                              <span className="text-amber-400">Conqueror #1</span>
                            ) : isHeroic ? (
                              <span className="text-red-400">Heroic #2</span>
                            ) : isDiamond ? (
                              <span className="text-cyan-300">Diamond #3</span>
                            ) : (
                              <span className="text-zinc-500">Rank #{athlete.calculatedRank}</span>
                            )}
                          </span>
                        </div>
                      </div>

                      {/* Right: Score & Instagram Handle */}
                      <div className="flex flex-col items-end flex-shrink-0">
                        <span
                          className={`font-mono text-base font-black ${
                            isConqueror
                              ? 'text-brand-orange'
                              : isHeroic
                              ? 'text-red-400'
                              : isDiamond
                              ? 'text-cyan-300'
                              : 'text-white'
                          }`}
                        >
                          {athlete.formattedScore}
                        </span>
                        {athlete.instagram ? (() => {
                          const ig = getInstagramDisplay(athlete);
                          return (
                            <a
                              href={ig.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1 text-[11px] text-pink-400 hover:text-pink-300 font-semibold"
                            >
                              <FaInstagram size={11} />
                              <span className="truncate max-w-[85px]">@{ig.handle}</span>
                            </a>
                          );
                        })() : (
                          <span className="text-zinc-600 text-[10px]">—</span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </RevealOnScroll>

        {/* ─── 7. Enlistment Action Card with Schedule Callout ─── */}
        <RevealOnScroll delay={250}>
          <div className="max-w-4xl mx-auto mt-12 sm:mt-16 rounded-2xl border border-brand-orange/30 bg-gradient-to-r from-brand-orange/15 via-[#080808] to-brand-orange/10 p-6 sm:p-8 md:p-12 text-center shadow-2xl relative overflow-hidden">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-extrabold uppercase tracking-wider mb-4">
              <Calendar size={13} className="text-amber-400" />
              Testing Days: Every Wednesday & Saturday
            </div>

            <h3 className="font-heading text-2xl md:text-4xl font-extrabold text-white tracking-tight">
              CAN YOU BEAT <span className="text-gradient-orange">{top1?.score || 90} REPS?</span>
            </h3>

            <p className="mt-3 text-zinc-300 text-xs sm:text-sm md:text-base max-w-lg mx-auto leading-relaxed">
              Official scoring rounds take place <strong>every Wednesday & Saturday</strong> (Morning 6–9 AM & Evening 5–9 PM). Get filmed, verified, and placed on the Faridabad Leaderboard with your Instagram handle tagged.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 max-w-md sm:max-w-none mx-auto">
              <Button
                variant="whatsapp"
                size="lg"
                href={siteConfig.contact.whatsappLink}
                external
                showWhatsapp
                showArrow
                className="w-full sm:w-auto"
              >
                Book Wednesday / Saturday Slot
              </Button>
              <Button
                variant="outline"
                size="lg"
                href={`tel:${siteConfig.contact.phoneClean}`}
                className="w-full sm:w-auto"
              >
                Call Coach Hitesh
              </Button>
            </div>
          </div>
        </RevealOnScroll>
      </Container>
    </div>
  </section>
  );
};

export default Leaderboard;
