import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Ticker } from './components/Ticker';
import { Tagline } from './components/Tagline';
import { Stats } from './components/Stats';
import { Transformation } from './components/Transformation';
import { HowItWorks } from './components/HowItWorks';
import { Benefits } from './components/Benefits';
import { SocialProof } from './components/SocialProof';
import { PricingSection } from './components/PricingSection';
import { Legal } from './components/Legal';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:rounded-sm focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:text-paper"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <Ticker />
        <Tagline />
        <Stats />
        <Transformation />
        <HowItWorks />
        <Benefits />
        <SocialProof />
        <PricingSection />
        <Legal />
      </main>
      <Footer />
    </div>
  );
}
