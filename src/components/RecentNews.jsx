import React from 'react';
import { Newspaper, Sparkles, Rss } from 'lucide-react';

export const RecentNews = () => {
  return (
    <section id="news" className="py-20 bg-[#080B10] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono mb-3">
              <Newspaper className="w-3.5 h-3.5" />
              <span>CHAPTER BULLETIN & ANNOUNCEMENTS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Recent News
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Latest press releases, technical publications, and chapter updates from CSI PVG Tech.
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

        {/* Minimalist Grid / Container */}
        <div className="chrome-card rounded-2xl p-8 sm:p-12 bg-slate-900/50 border border-slate-800 relative overflow-hidden">
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 rounded-xl bg-slate-950 border border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white border border-slate-700 flex items-center justify-center shrink-0">
                <Rss className="w-6 h-6" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold text-white bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
                    Coming Soon
                  </span>
                  <span className="text-xs text-slate-500 font-mono">• Session 2026</span>
                </div>
                <h3 className="text-lg font-bold text-white mt-1">CSI PVG Tech News Portal Launching</h3>
                <p className="text-xs text-slate-400 mt-0.5">Stay tuned for coverage on national conventions, student research papers, and technical blogs.</p>
              </div>
            </div>

            <div className="w-full md:w-auto shrink-0">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-slate-400 bg-slate-900 px-4 py-2.5 rounded-lg border border-slate-800">
                <span>Archives Loading</span>
                <span className="w-2 h-2 rounded-full bg-slate-200 animate-pulse" />
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
