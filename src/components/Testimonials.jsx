import React from 'react';
import { MessageSquareQuote, Sparkles } from 'lucide-react';

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#080B10] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono mb-3">
              <MessageSquareQuote className="w-3.5 h-3.5" />
              <span>FEEDBACK & RECOGNITION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Testimonials
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Endorsements and experiences shared by CSI student alumni, chapter members, and guest speakers.
            </p>
          </div>

          {/* Mandatory "Coming Soon" Badge */}
          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-xl">
              <Sparkles className="w-4 h-4 text-slate-300" />
              <span>Coming Soon</span>
            </span>
          </div>
        </div>

        {/* Minimalist Empty State Container */}
        <div className="chrome-card rounded-2xl p-10 sm:p-16 bg-slate-900/50 border border-slate-800 text-center relative overflow-hidden flex flex-col items-center justify-center">
          
          <div className="w-16 h-16 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-slate-400 mb-6 shadow-inner">
            <MessageSquareQuote className="w-8 h-8 text-slate-300" />
          </div>

          <span className="px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-300 font-mono text-xs font-semibold mb-3">
            Coming Soon
          </span>

          <h3 className="text-xl font-bold text-white max-w-md">
            Alumni & Member Reviews Archive
          </h3>

          <p className="text-slate-400 text-sm max-w-md mt-2 leading-relaxed">
            Member testimonials, faculty endorsements, and alumni achievement stories are currently being curated for the 2026 academic batch.
          </p>

        </div>

      </div>
    </section>
  );
};
