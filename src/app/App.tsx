import { useEffect, useState } from 'react';
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
import { Product } from './product/Product';
import { IntegrationsPage } from './integrations/IntegrationsPage';

const isProductPath = () => window.location.pathname.replace(/\/+$/, '').endsWith('/app');
const isIntegrationsPath = () => window.location.pathname.replace(/\/+$/, '').endsWith('/integrations');

export default function App() {
  const [view, setView] = useState<'site' | 'product' | 'integrations'>(
    () => (isProductPath() ? 'product' : isIntegrationsPath() ? 'integrations' : 'site'),
  );

  useEffect(() => {
    const onPop = () =>
      setView(isProductPath() ? 'product' : isIntegrationsPath() ? 'integrations' : 'site');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  if (view === 'product') return <Product />;

  if (view === 'integrations') return <IntegrationsPage />;

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
