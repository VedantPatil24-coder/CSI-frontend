import React from 'react';
import { CsiLogo } from './CsiLogo';
import { Mail, MapPin, ArrowUp, Github, Linkedin, ExternalLink } from 'lucide-react';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#080B10] border-t border-slate-800 text-slate-400 text-sm relative">
      
      {/* Back to top float button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="absolute -top-5 right-6 sm:right-8 p-3 rounded-xl bg-white hover:bg-slate-200 text-slate-950 shadow-2xl transition-all transform hover:-translate-y-1 focus:outline-none"
        >
          <ArrowUp className="w-5 h-5 font-bold" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* 3-Column Grid Mirroring COEP Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 pb-12 border-b border-slate-800">
          
          {/* Column 1: About Us Summary */}
          <div className="space-y-4">
            <CsiLogo />
            <p className="text-xs text-slate-300 leading-relaxed font-normal mt-3">
              The Computer Society of India (CSI) Student Chapter at Pune Vidyarthi Griha's College of Engineering and Technology (PVG's COET), established in July 2026, empowers computing students through technical workshops, symposiums, guest lectures, and industry collaborations.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#"
                aria-label="LinkedIn"
                className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="#"
                aria-label="GitHub"
                className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider mb-4 border-l-2 border-slate-400 pl-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a href="#home" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-slate-600">›</span> Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-slate-600">›</span> About Us
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-slate-600">›</span> Events
                </a>
              </li>
              <li>
                <a href="#team" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-slate-600">›</span> Core Team & Advisory
                </a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-slate-600">›</span> Testimonials
                </a>
              </li>
              <li>
                <a href="#news" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-slate-600">›</span> Recent News
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="text-slate-600">›</span> Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-white uppercase tracking-wider border-l-2 border-slate-400 pl-2">
              Contact Information
            </h4>

            <div className="space-y-3 text-xs">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-slate-300 shrink-0 mt-0.5" />
                <span className="text-slate-300 leading-relaxed">
                  PVG's COET, 44, Shiv Darshan Rd, Parvati, Pune, Maharashtra 411009, India
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-300 shrink-0" />
                <a href="mailto:csi@pvgcoet.ac.in" className="text-slate-200 font-mono hover:underline">
                  csi@pvgcoet.ac.in
                </a>
              </div>
            </div>

            <div className="pt-2">
              <span className="inline-block text-[11px] font-mono px-3 py-1 rounded bg-slate-950 border border-slate-800 text-slate-300">
                Department of Computer Engineering
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            © 2026 CSI PVG Tech Student Chapter. All rights reserved.
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <span>PVG's COET Chapter</span>
            <span>•</span>
            <a href="https://csi.coep.org.in/" target="_blank" rel="noopener noreferrer" className="hover:text-white flex items-center gap-1 transition-colors">
              <span>Ref: CSI COEP</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
