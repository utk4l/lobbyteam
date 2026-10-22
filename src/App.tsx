import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { FrontDoorProblem } from './components/FrontDoorProblem';
import { AudienceBento } from './components/AudienceBento';
import { HowItWorks } from './components/HowItWorks';
import { PricingGrid } from './components/PricingGrid';
import { BuyerFAQ } from './components/BuyerFAQ';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#F5F5F7] text-[#1D1D1F] selection:bg-[#10B981]/20">
      {/* Sticky Apple Frosted Glass Navbar */}
      <Navbar />

      {/* Flagship Hero with Coded SVG + Framer Motion Switchboard */}
      <main>
        <Hero />
        
        {/* The Front-Door Problem vs What Changes */}
        <FrontDoorProblem />

        {/* Built Around Your Reality (01-05 Bento Cards) */}
        <AudienceBento />

        {/* How It Works (Understand · Act · Escalate · Remember) */}
        <HowItWorks />

        {/* Simple Visible Usage: Interaction Unit Pricing Grid */}
        <PricingGrid />

        {/* Buyer FAQs */}
        <BuyerFAQ />
      </main>

      {/* Grounded Cal.com / Apple Footer */}
      <Footer />
    </div>
  );
};

export default App;
