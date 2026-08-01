import React, { useState } from 'react';
import { MapPin, Mail, Send, CheckCircle2, Clock, ExternalLink } from 'lucide-react';

export const ContactSection = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formState.name && formState.email && formState.message) {
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setFormState({ name: '', email: '', subject: '', message: '' });
      }, 5000);
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#080B10] border-t border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-700 text-slate-300 text-xs font-mono mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Contact Us
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2 max-w-xl">
            Reach out to the CSI PVG Tech Student Chapter committee for event collaborations, memberships, or general inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Address & Contact Cards (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Campus Address Card */}
            <div className="chrome-card rounded-2xl p-6 sm:p-8 bg-slate-900/80 border border-slate-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-950 text-slate-200 border border-slate-700 shrink-0 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">Campus Address</h3>
                  <p className="text-slate-300 text-sm mt-2 leading-relaxed font-normal">
                    Pune Vidhyarthi Grihas College Of Engineering And Technology, 44, Shiv Darshan Rd, Parvati, Nirmal Baug Colony, Vidya Nagari, Parvati Paytha, Pune, Maharashtra 411009, India
                  </p>
                </div>
              </div>
            </div>

            {/* Email Contact Card */}
            <div className="chrome-card rounded-2xl p-6 bg-slate-900/80 border border-slate-800">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-slate-950 text-slate-200 border border-slate-700 shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-sm font-mono font-bold text-white uppercase tracking-wider">Official Email</h3>
                  <a
                    href="mailto:csi@pvgcoet.ac.in"
                    className="text-base font-semibold text-slate-200 hover:text-white transition-colors block mt-0.5"
                  >
                    csi@pvgcoet.ac.in
                  </a>
                </div>
              </div>
            </div>

            {/* Working Hours & Department Note */}
            <div className="chrome-card rounded-2xl p-6 bg-slate-900/40 border border-slate-800">
              <div className="flex items-center gap-3 text-xs font-mono text-slate-400 mb-2">
                <Clock className="w-4 h-4 text-slate-300" />
                <span>OFFICE HOURS: MON - FRI (9:00 AM - 5:00 PM)</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Department of Computer Engineering, PVG's COET Campus, Pune.
              </p>
            </div>

          </div>

          {/* Interactive Contact Form (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="chrome-card rounded-2xl p-6 sm:p-8 bg-slate-900/80 border border-slate-800">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center justify-between">
                <span>Send a Message</span>
                <span className="text-xs font-mono text-slate-300 bg-slate-950 px-2.5 py-1 rounded border border-slate-700">
                  Direct Response
                </span>
              </h3>

              {submitted ? (
                <div className="p-6 rounded-xl bg-slate-950 border border-slate-800 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-white mx-auto" />
                  <h4 className="text-lg font-bold text-white">Message Sent Successfully!</h4>
                  <p className="text-xs text-slate-300">
                    Thank you for reaching out to CSI PVG Tech Student Chapter. Our team will get back to you shortly at {formState.email}.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Your Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 text-sm focus:outline-none focus:border-slate-600 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-slate-300 mb-1">Your Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="e.g. rahul@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 text-sm focus:outline-none focus:border-slate-600 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Subject</label>
                    <input
                      type="text"
                      placeholder="e.g. Event Inquiry / CSI Membership"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 text-sm focus:outline-none focus:border-slate-600 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-300 mb-1">Message *</label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Write your query or message here..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className="w-full px-4 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-slate-100 text-sm focus:outline-none focus:border-slate-600 transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-white hover:bg-slate-200 text-slate-950 font-bold text-sm shadow-xl transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Inquiry</span>
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* Embedded Dark Styled Google Map Container (Coordinates 18.4941, 73.8508) */}
        <div className="mt-12">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-mono text-slate-400 uppercase tracking-widest flex items-center gap-2">
              <MapPin className="w-4 h-4 text-slate-300" />
              Campus Location Map (PVG's COET Pune: 18.4941, 73.8508)
            </h3>
            <a
              href="https://maps.google.com/?q=18.4941,73.8508"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-slate-300 hover:underline flex items-center gap-1"
            >
              <span>Open in Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="chrome-card rounded-2xl border border-slate-800 overflow-hidden h-80 sm:h-96 w-full relative">
            <iframe
              title="PVG COET Pune Campus Location Map"
              src="https://maps.google.com/maps?q=18.4941,73.8508&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'grayscale(1) invert(0.92) contrast(1.2)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
