import React from 'react';
import { Users, Linkedin, Github, User } from 'lucide-react';

export const TeamSection = () => {
  const teamMembers = [
    { id: 1, name: "Core Team Member 1", role: "Faculty Advisor", badge: "Faculty Lead" },
    { id: 2, name: "Core Team Member 2", role: "Chapter President", badge: "Core Executive" },
    { id: 3, name: "Core Team Member 3", role: "Vice President", badge: "Core Executive" },
    { id: 4, name: "Core Team Member 4", role: "Technical Head", badge: "Tech Lead" },
    { id: 5, name: "Core Team Member 5", role: "Event Management Head", badge: "Operations" },
    { id: 6, name: "Core Team Member 6", role: "Finance & Sponsorship Lead", badge: "Finance" },
    { id: 7, name: "Core Team Member 7", role: "Media & PR Lead", badge: "Communications" },
    { id: 8, name: "Core Team Member 8", role: "Design & UI/UX Head", badge: "Creative" },
    { id: 9, name: "Core Team Member 9", role: "Lead Web Developer", badge: "Web Team" },
    { id: 10, name: "Core Team Member 10", role: "Competitive Coding Lead", badge: "R&D" },
    { id: 11, name: "Core Team Member 11", role: "Public Relations Officer", badge: "Outreach" },
    { id: 12, name: "Core Team Member 12", role: "Core Executive Member", badge: "Operations" }
  ];

  return (
    <section id="team" className="py-20 bg-[#080B10] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>LEADERSHIP & COMMITTEE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Core Team & Advisory
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            The dedicated faculty mentors and student leaders driving innovation at CSI PVG Tech Student Chapter.
          </p>
        </div>

        {/* 4x3 Grid (1 col mobile, 2 col tablet, 4 col desktop for 12 cards total) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="chrome-card rounded-2xl p-6 bg-slate-900/80 border border-slate-800 hover:border-slate-600 flex flex-col items-center text-center group relative transition-all duration-300"
            >
              {/* Square Avatar Placeholder Container with Rounded Corners */}
              <div className="relative mb-4">
                <div className="w-24 h-24 rounded-2xl bg-slate-950 border border-slate-700 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                  <User className="w-10 h-10 text-slate-300" />
                </div>

                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-full bg-slate-900 border border-slate-700 text-[10px] font-mono font-semibold text-slate-300 whitespace-nowrap shadow-md">
                  {member.badge}
                </span>
              </div>

              {/* Member Details */}
              <div className="mt-2 w-full">
                <h3 className="text-base font-bold text-white group-hover:text-slate-200 transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  {member.role}
                </p>
              </div>

              {/* Interactive SVG Social Icons */}
              <div className="mt-5 pt-4 border-t border-slate-800 w-full flex items-center justify-center gap-3">
                <a
                  href="#"
                  aria-label={`${member.name} LinkedIn Profile`}
                  className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href="#"
                  aria-label={`${member.name} GitHub Profile`}
                  className="p-2 rounded-lg bg-slate-950 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-600 transition-all"
                >
                  <Github className="w-4 h-4" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
