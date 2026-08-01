import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutUs } from './components/AboutUs';
import { Events } from './components/Events';
import { Testimonials } from './components/Testimonials';
import { RecentNews } from './components/RecentNews';
import { TeamSection } from './components/TeamSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export function App() {
  return (
    <div className="min-h-screen body-tint-overlay text-[#CBD5E1] flex flex-col font-sans selection:bg-amber-500/30 selection:text-amber-300 relative">
      {/* Sticky Navigation Header */}
      <Navbar />

      {/* Main Page Layout (Exact Section Sequence A -> H) */}
      <main className="flex-grow">
        {/* Section A: Hero & Centered Live Statistics Cards */}
        <Hero />

        {/* Section B: About Us Narrative */}
        <AboutUs />

        {/* Section C: Events */}
        <Events />

        {/* Section D: Testimonials */}
        <Testimonials />

        {/* Section E: Recent News */}
        <RecentNews />

        {/* Section F: Core Team & Advisory (12 Member Cards, 4x3 Desktop Grid) */}
        <TeamSection />

        {/* Section G: Contact Us & Embedded Google Map */}
        <ContactSection />
      </main>

      {/* Section H: 3-Column COEP-style Footer */}
      <Footer />
    </div>
  );
}

export default App;
