import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Problem } from './components/Problem';
import { Stats } from './components/Stats';
import { HowItWorks } from './components/HowItWorks';
import { Pillars } from './components/Pillars';
import { WhoItsFor } from './components/WhoItsFor';
import { Integrations } from './components/Integrations';
import { SocialProof } from './components/SocialProof';
import { PricingSection } from './components/PricingSection';
import { Legal } from './components/Legal';
import { Footer } from './components/Footer';

export function LegacyLanding() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <Navigation />
      <main id="main">
        <Hero />
        <Problem />
        <Stats />
        <HowItWorks />
        <Pillars />
        <WhoItsFor />
        <Integrations />
        <SocialProof />
        <PricingSection />
        <Legal />
      </main>
      <Footer />
    </div>
  );
}
