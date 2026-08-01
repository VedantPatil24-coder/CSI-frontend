import React, { useState } from 'react';
import { Calendar, Clock, Sparkles, Bell, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const Events = () => {
  const [notified, setNotified] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const handleNotifySubmit = (e) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setNotified(true);
      setTimeout(() => {
        setNotified(false);
        setEmailInput('');
      }, 4000);
    }
  };

  const eventTeasers = [
    {
      id: 1,
      title: "PVG HackMatrix 2026",
      type: "Hackathon",
      description: "24-Hour flagship technical hackathon bringing together top student developers across Maharashtra to build innovative AI & Web3 applications.",
      date: "Q4 2026",
      tags: ["AI/ML", "Web3", "Cloud Computing"]
    },
    {
      id: 2,
      title: "CSI TechQuiz & CodeSprint 5.0",
      type: "Quiz & Competitive Coding",
      description: "National-level algorithms challenge and rapid quiz testing core computing principles, computer architecture, and full-stack development.",
      date: "Q4 2026",
      tags: ["Algorithms", "Data Structures", "Quiz"]
    }
  ];

  return (
    <section id="events" className="py-20 bg-[#080B10] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono mb-3">
              <Calendar className="w-3.5 h-3.5" />
              <span>SCHEDULE & SYMPOSIUMS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Events
            </h2>
            <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
              Upcoming technical symposiums, coding competitions, and industry expert sessions.
            </p>
          </div>

          {/* Mandatory "Coming Soon" Badge */}
          <div className="mt-4 md:mt-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-700 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-xl">
              <Sparkles className="w-4 h-4 text-slate-300 animate-spin" style={{ animationDuration: '4s' }} />
              <span>Coming Soon</span>
            </span>
          </div>
        </div>

        {/* Minimalist Teaser Container */}
        <div className="chrome-card rounded-2xl p-6 sm:p-10 bg-slate-900/80 border border-slate-800 relative overflow-hidden">
          
          {/* Announcement Banner */}
          <div className="flex flex-col sm:flex-row items-center justify-between p-4 rounded-xl bg-slate-950 border border-slate-800 mb-8 gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-lg bg-slate-900 text-white border border-slate-700">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white">Event Calendar Under Preparation</h3>
                <p className="text-xs text-slate-400">Official schedule for 2026 workshops and hackathons will be announced shortly.</p>
              </div>
            </div>

            <span className="text-[11px] font-mono text-slate-300 bg-slate-900 px-3 py-1 rounded-md border border-slate-700">
              Session 2026–2027
            </span>
          </div>

          {/* Future Event Teaser Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventTeasers.map((event) => (
              <div key={event.id} className="p-6 rounded-xl bg-slate-950 border border-slate-800 hover:border-slate-700 transition-all flex flex-col justify-between group">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded bg-slate-900 text-slate-200 border border-slate-700">
                      {event.type}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {event.date}
                    </span>
                  </div>

                  <h4 className="text-lg font-bold text-white group-hover:text-slate-200 transition-colors flex items-center gap-2">
                    {event.title}
                    <ArrowUpRight className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors" />
                  </h4>

                  <p className="text-slate-300 text-xs sm:text-sm mt-2 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {event.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono text-slate-400 bg-slate-900 px-2 py-0.5 rounded">
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <span className="text-[11px] font-mono text-slate-300 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-200 animate-ping" />
                    Teaser
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Interactive Email Notification Bar */}
          <div className="mt-10 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-sm font-bold text-white flex items-center gap-2">
                <Bell className="w-4 h-4 text-slate-300" />
                Want early access to event registrations?
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">Subscribe to receive notifications when event forms open.</p>
            </div>

            <form onSubmit={handleNotifySubmit} className="w-full sm:w-auto flex items-center gap-2">
              <input
                type="email"
                required
                placeholder="Enter your student email..."
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                className="w-full sm:w-64 px-3.5 py-2 text-xs bg-slate-950 border border-slate-800 rounded-lg text-slate-200 focus:outline-none focus:border-slate-600"
              />
              <button
                type="submit"
                className="px-4 py-2 text-xs font-mono font-semibold bg-white hover:bg-slate-200 text-slate-950 rounded-lg transition-all flex items-center gap-1 shrink-0"
              >
                {notified ? <CheckCircle2 className="w-4 h-4 text-slate-950" /> : "Notify Me"}
              </button>
            </form>
          </div>

          {notified && (
            <div className="mt-3 text-center text-xs font-mono text-slate-200 bg-slate-900 py-2 rounded-md border border-slate-700">
              ✓ Subscribed! You will be notified when registrations open.
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
