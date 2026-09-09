import { useEffect, useState } from 'react';
import { Product } from './product/Product';
import { IntegrationsPage } from './integrations/IntegrationsPage';
import { LegacyLanding } from './LegacyLanding';
import { LandingPage } from './lobby/LandingPage';
import { LobbyIntegrationsPage } from './lobby/LobbyIntegrationsPage';
import { WhoIsThisForPage } from './lobby/IndustriesPage';

const isProductPath = () => window.location.pathname.replace(/\/+$/, '').endsWith('/app');
const isIntegrationsPath = () => window.location.pathname.replace(/\/+$/, '').endsWith('/integrations');
const isLegacyIntegrationsPath = () => window.location.pathname.replace(/\/+$/, '').endsWith('/old-integrations');
const isWhoIsThisForPath = () => window.location.pathname.replace(/\/+$/, '').endsWith('/who-is-this-for');
const isLegacyLandingPath = () => window.location.pathname.replace(/\/+$/, '').endsWith('/old-landing');

export default function App() {
  const [view, setView] = useState<'site' | 'legacy' | 'product' | 'integrations' | 'legacy-integrations' | 'who-is-this-for'>(
    () => (isProductPath() ? 'product' : isLegacyLandingPath() ? 'legacy' : isLegacyIntegrationsPath() ? 'legacy-integrations' : isIntegrationsPath() ? 'integrations' : isWhoIsThisForPath() ? 'who-is-this-for' : 'site'),
  );

  useEffect(() => {
    const onPop = () =>
      setView(isProductPath() ? 'product' : isLegacyLandingPath() ? 'legacy' : isLegacyIntegrationsPath() ? 'legacy-integrations' : isIntegrationsPath() ? 'integrations' : isWhoIsThisForPath() ? 'who-is-this-for' : 'site');
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  if (view === 'product') return <Product />;

  if (view === 'legacy') return <LegacyLanding />;

  if (view === 'legacy-integrations') return <IntegrationsPage />;

  if (view === 'integrations') return <LobbyIntegrationsPage />;

  if (view === 'who-is-this-for') return <WhoIsThisForPage />;

  return <LandingPage />;
}
