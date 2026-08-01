import React from 'react';
import { Briefcase, Calendar, Users, Activity, ArrowRight, Terminal, Sparkles } from 'lucide-react';

const CenteredStatCard = ({ icon: Icon, title, value, badgeText, accent = 'amber' }) => {
  return (
    <div className="glass-card rounded-2xl p-6 border border-slate-700/70 bg-slate-900/65 flex flex-col items-center text-center relative group overflow-hidden">
      {/* Background glow hover effect */}
      <div className={`absolute -right-8 -top-8 w-24 h-24 rounded-full ${accent === 'amber' ? 'bg-amber-500/10' : 'bg-emerald-500/10'} blur-xl transition-all duration-500 pointer-events-none group-hover:scale-150`} />

      <div className="flex items-center justify-center gap-2 mb-3">
        <div className={`p-2.5 rounded-xl ${accent === 'amber' ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20' : 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'}`}>
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-[11px] font-mono font-semibold px-2.5 py-0.5 rounded-full bg-slate-950/80 text-slate-300 border border-slate-700">
          {badgeText}
        </span>
      </div>

      <div className="text-3xl sm:text-4xl font-extrabold font-mono tracking-tight text-white mt-1">
        {value}
      </div>

      <div className="text-xs sm:text-sm font-medium text-slate-300 mt-1">
        {title}
      </div>
    </div>
  );
};

export const Hero = () => {
  return (
    <section id="home" className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden flex flex-col items-center justify-center text-center">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center text-center">
        
        {/* Top Chapter Badge (Centered) */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/90 border border-slate-700 text-xs font-mono text-slate-300 shadow-2xl mb-8">
          <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>PUNE VIDYARTHI GRIHA'S COET</span>
          <span className="text-slate-600">•</span>
          <span className="text-amber-400 font-semibold">STUDENT CHAPTER</span>
        </div>

        {/* Main Heading (Space Grotesk Font, Centered) */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white font-display tracking-tight leading-tight text-center max-w-4xl">
          COMPUTER SOCIETY OF INDIA
          <span className="block mt-2 text-metallic-silver font-black">
            PVG Tech STUDENT CHAPTER
          </span>
        </h1>

        {/* Subheading (Centered) */}
        <p className="text-base sm:text-xl text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed mt-6 text-center">
          Empowering the next generation of computing professionals, developers, and innovators.
        </p>

        {/* Action Buttons (Centered) */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
          <a
            href="#about"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-sm shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5"
          >
            <span>Explore Chapter</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-slate-100 border border-slate-700 font-medium text-sm transition-all"
          >
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>Contact Team</span>
          </a>
        </div>

        {/* Live Counter Grid (Section A 4 Stat Cards, Centered Layout) */}
        <div className="mt-16 sm:mt-20 w-full max-w-5xl">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Activity className="w-4 h-4 text-amber-400" />
            <h2 className="text-xs font-mono tracking-widest text-slate-400 uppercase">
              Chapter Live Metrics
            </h2>
            <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
              Live
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 text-center">
            <CenteredStatCard
              icon={Briefcase}
              title="Internships / Placements"
              value="45+"
              badgeText="Career Growth"
              accent="amber"
            />
            <CenteredStatCard
              icon={Calendar}
              title="Events Managed"
              value="35+"
              badgeText="Workshops & Talks"
              accent="emerald"
            />
            <CenteredStatCard
              icon={Users}
              title="Active Members"
              value="150+"
              badgeText="Student Body"
              accent="amber"
            />
            <CenteredStatCard
              icon={Activity}
              title="Monthly Page Hits"
              value="12.5k+"
              badgeText="Digital Portal"
              accent="emerald"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
