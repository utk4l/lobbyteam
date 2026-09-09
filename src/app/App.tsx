import { useEffect, useState } from 'react';
import { Product } from './product/Product';
import { IntegrationsPage } from './integrations/IntegrationsPage';
import { LegacyLanding } from './LegacyLanding';
import { LandingPage } from './lobby/LandingPage';
import { LobbyIntegrationsPage } from './lobby/LobbyIntegrationsPage';
import { WhoIsThisForPage } from './lobby/IndustriesPage';
import { AboutPage } from './AboutPage';
import { BlogPostRoute, BlogRoute } from './blog/BlogPages';

const isProductPath = () => window.location.pathname.replace(/\/+$/, '').endsWith('/app');
const isIntegrationsPath = () => window.location.pathname.replace(/\/+$/, '').endsWith('/integrations');
const isLegacyIntegrationsPath = () => window.location.pathname.replace(/\/+$/, '').endsWith('/old-integrations');
const isWhoIsThisForPath = () => window.location.pathname.replace(/\/+$/, '').endsWith('/who-is-this-for');
const isLegacyLandingPath = () => window.location.pathname.replace(/\/+$/, '').endsWith('/old-landing');
const getBlogRoute = () => {
  const path = window.location.pathname.replace(/\/+$/, '');
  if (path === '/blog') return { kind: 'index' as const };
  if (path.startsWith('/blog/tag/')) return { kind: 'tag' as const, slug: path.replace('/blog/tag/', '') };
  if (path.startsWith('/blog/series/')) return { kind: 'series' as const, slug: path.replace('/blog/series/', '') };
  if (path.startsWith('/blog/')) return { kind: 'post' as const, slug: path.replace('/blog/', '') };
  return null;
};
const isAboutPath = () => window.location.pathname.replace(/\/+$/, '') === '/about';

export default function App() {
  const [view, setView] = useState(() => {
    const blog = getBlogRoute();
    return isProductPath() ? 'product' : isLegacyLandingPath() ? 'legacy' : isLegacyIntegrationsPath() ? 'legacy-integrations' : isIntegrationsPath() ? 'integrations' : isWhoIsThisForPath() ? 'who-is-this-for' : isAboutPath() ? 'about' : blog ? blog.kind : 'site';
  });

  useEffect(() => {
    const onPop = () => {
      const blog = getBlogRoute();
      setView(isProductPath() ? 'product' : isLegacyLandingPath() ? 'legacy' : isLegacyIntegrationsPath() ? 'legacy-integrations' : isIntegrationsPath() ? 'integrations' : isWhoIsThisForPath() ? 'who-is-this-for' : isAboutPath() ? 'about' : blog ? blog.kind : 'site');
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  if (view === 'product') return <Product />;

  if (view === 'legacy') return <LegacyLanding />;

  if (view === 'legacy-integrations') return <IntegrationsPage />;

  if (view === 'integrations') return <LobbyIntegrationsPage />;

  if (view === 'who-is-this-for') return <WhoIsThisForPage />;

  if (view === 'about') return <AboutPage />;

  const blog = getBlogRoute();
  if (view === 'index') return <BlogRoute kind="index" />;
  if (view === 'tag') return <BlogRoute kind="tag" slug={blog?.slug} />;
  if (view === 'series') return <BlogRoute kind="series" slug={blog?.slug} />;
  if (view === 'post') return <BlogPostRoute slug={blog?.slug || ''} />;

  return <LandingPage />;
}
