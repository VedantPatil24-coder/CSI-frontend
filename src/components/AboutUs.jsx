import React from 'react';
import { Bookmark, Award, Globe, Handshake, Shield } from 'lucide-react';

export const AboutUs = () => {
  return (
    <section id="about" className="py-20 border-t border-slate-800/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono mb-3">
            <Bookmark className="w-3.5 h-3.5" />
            <span>ORGANIZATIONAL PROFILE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white font-display tracking-tight">
            About <span className="text-metallic-silver">CSI PVG Tech</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            A structured narrative of our institutional background, student chapter mission, and national computer society legacy.
          </p>
        </div>

        {/* Narrative Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Chapter Narrative (Left 8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Paragraph 1 Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 bg-slate-900/70 border border-slate-700/60 relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 font-mono font-bold text-xs border border-amber-500/20">
                  01
                </span>
                <h3 className="text-lg font-bold text-white font-display">Student Chapter Foundation</h3>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                The Computer Society of India (CSI) Student Chapter of Pune Vidyarthi Griha's College of Engineering and Technology (PVG's COET), established in July 2026 is an active student organization which organizes a number of technical activities including workshops, competitions, technical symposiums, guest lectures etc. for its student members. Under the guidance of Department of Computer Engineering and PVG's COET, the student chapter has over 150+ members and is run by a Core Team and faculty from the department. CSI PVG Tech Student Chapter gives students the opportunity to grow in the field of IT.
              </p>
            </div>

            {/* Paragraph 2 Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 bg-slate-900/70 border border-slate-700/60 relative">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 font-mono font-bold text-xs border border-emerald-500/20">
                  02
                </span>
                <h3 className="text-lg font-bold text-white font-display">National CSI Legacy (Est. 1965)</h3>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Established in 1965, the Computer Society of India, or CSI is the first and largest body of computer professionals in India. It is a non-profit professional meet to exchange views and information learn and share ideas regarding advancement of theory and practice of Computer Engineering and Technology Systems, Science and Engineering, Information Processing and many more. The national body now has 72 chapters across India, 512 student branches, and over 110000 members, including noted IT industry leaders, scientists, and dedicated mathematicians.
              </p>
            </div>

            {/* Paragraph 3 Card */}
            <div className="glass-card rounded-2xl p-6 sm:p-8 bg-slate-900/70 border border-slate-700/60">
              <div className="flex items-center gap-3 mb-4">
                <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber-500/10 text-amber-400 font-mono font-bold text-xs border border-amber-500/20">
                  03
                </span>
                <h3 className="text-lg font-bold text-white font-display">Technical Programs & Workshops</h3>
              </div>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                CSI PVG Tech Student Chapter regularly organizes workshops, seminars conventions, and technical talks for the benefit of professionals and users of IT apart from conducting development programs for professionals, researchers and students.
              </p>
            </div>

            {/* Paragraph 4 & 5 Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Paragraph 4 Card */}
              <div className="glass-card rounded-2xl p-6 bg-slate-900/70 border border-slate-700/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Handshake className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-mono font-semibold text-emerald-400">PARTNERSHIPS</span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    It works closely with other industry associations, government bodies and academia to ensure that the benefits of IT advancement ultimately percolate down to every single citizen of India.
                  </p>
                </div>
              </div>

              {/* Paragraph 5 Card */}
              <div className="glass-card rounded-2xl p-6 bg-slate-900/70 border border-slate-700/60 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="w-4 h-4 text-amber-400" />
                    <span className="text-xs font-mono font-semibold text-amber-400">INDUSTRY COLLABORATION</span>
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    Finally, CSI PVG Tech facilitates industry-academia interaction through CIO meets, Professors’ meets. CSI offers professional counselling through various events, conferences, symposia to student members of their well-established network of Student Branches.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Sidebar Highlight Box (Right 4 Cols) */}
          <div className="lg:col-span-4 space-y-6">
            
            {/* National CSI Stats Card */}
            <div className="glass-card rounded-2xl p-6 bg-slate-950/80 border border-slate-700 relative overflow-hidden">
              <div className="flex items-center gap-2 text-xs font-mono text-amber-400 mb-6">
                <Award className="w-4 h-4" />
                <span>CSI NATIONAL AT A GLANCE</span>
              </div>

              <div className="space-y-6">
                <div className="pb-4 border-b border-slate-800">
                  <div className="text-3xl font-bold font-mono text-white">1965</div>
                  <div className="text-xs text-slate-400">Year Established</div>
                </div>

                <div className="pb-4 border-b border-slate-800">
                  <div className="text-3xl font-bold font-mono text-amber-400">72</div>
                  <div className="text-xs text-slate-400">Chapters Across India</div>
                </div>

                <div className="pb-4 border-b border-slate-800">
                  <div className="text-3xl font-bold font-mono text-emerald-400">512</div>
                  <div className="text-xs text-slate-400">Student Branches</div>
                </div>

                <div>
                  <div className="text-3xl font-bold font-mono text-white">110,000+</div>
                  <div className="text-xs text-slate-400">Total Members Worldwide</div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400 flex items-center gap-2">
                <Shield className="w-4 h-4 text-slate-400" />
                <span>Dept. of Computer Engineering, PVG's COET</span>
              </div>
            </div>

            {/* Department Guidance Box */}
            <div className="glass-card rounded-2xl p-6 bg-slate-900/60 border border-slate-700/60">
              <h4 className="text-sm font-bold text-white font-display mb-2">Faculty & Departmental Mentorship</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Operating under the direction of PVG's COET Department of Computer Engineering, CSI PVG Tech provides leadership, skill workshops, and industry networking.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
