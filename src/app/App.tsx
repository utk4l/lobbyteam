import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Tagline } from './components/Tagline';
import { Transformation } from './components/Transformation';
import { Benefits } from './components/Benefits';
import { HowItWorks } from './components/HowItWorks';
import { SocialProof } from './components/SocialProof';
import { PricingSection } from './components/PricingSection';
import { Legal } from './components/Legal';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-950">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[60] focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-medium focus:border focus:border-zinc-300 focus:rounded-lg"
      >
        Skip to content
      </a>
      <Navigation />
      <main id="main">
        <Hero />
        <Tagline />
        <Transformation />
        <Benefits />
        <HowItWorks />
        <SocialProof />
        <PricingSection />
        <Legal />
      </main>
      <Footer />
    </div>
  );
}
