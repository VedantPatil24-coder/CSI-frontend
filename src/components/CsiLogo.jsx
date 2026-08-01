import React from 'react';

export const CsiLogo = ({ className = "h-9 w-auto" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative flex items-center justify-center w-10 h-10 rounded-lg bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 border border-slate-700/80 shadow-lg group">
        <svg 
          viewBox="0 0 100 100" 
          className="w-7 h-7 transform transition-transform group-hover:scale-105 duration-300"
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer ring */}
          <circle cx="50" cy="50" r="42" stroke="#CBD5E1" strokeWidth="4" strokeDasharray="6 3" opacity="0.5" />
          {/* Inner Hexagon / Node */}
          <polygon points="50,15 80,32 80,68 50,85 20,68 20,32" stroke="#E2E8F0" strokeWidth="5" fill="rgba(226, 232, 240, 0.06)" />
          {/* Central Circuit Node */}
          <circle cx="50" cy="50" r="14" fill="#080B10" stroke="#CBD5E1" strokeWidth="4" />
          <path d="M50 20 L50 36 M50 64 L50 80 M23 50 L36 50 M64 50 L77 50" stroke="#94A3B8" strokeWidth="4" strokeLinecap="round" />
          <circle cx="50" cy="50" r="5" fill="#FFFFFF" />
        </svg>
        {/* Subtle white indicator */}
        <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-slate-300 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-slate-100"></span>
        </span>
      </div>
      
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5">
          <span className="font-black tracking-tight text-white text-base leading-none">CSI</span>
          <span className="text-[10px] font-mono font-semibold px-1.5 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700">PVG Tech</span>
        </div>
        <span className="text-[10px] text-slate-400 font-mono tracking-wider uppercase mt-0.5">Student Chapter</span>
      </div>
    </div>
  );
};
