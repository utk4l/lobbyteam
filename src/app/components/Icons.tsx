import { ReactNode } from 'react';

/* One minimal line-icon set for the whole site. 24x24, stroke = currentColor. */
const PATHS: Record<string, ReactNode> = {
  phone: (
    <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" />
  ),
  chat: (
    <>
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      <path d="M8 9h8M8 12.5h5" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M21 11.5a8.5 8.5 0 0 1-12.7 7.4L3 21l2.1-5.3A8.5 8.5 0 1 1 21 11.5z" />
      <path d="M9 10.5c.4 1.6 2.4 3.6 4 4l1-1.4-1.8-1-.7.5c-.8-.4-1.7-1.3-2.1-2.1l.5-.7-1-1.8z" />
    </>
  ),
  imessage: (
    <>
      <path d="M12 4C6.5 4 2 7.6 2 12c0 2.4 1.3 4.5 3.3 6L4 21.5l4.2-1.7c1.2.3 2.5.5 3.8.5 5.5 0 10-3.6 10-8s-4.5-8.3-10-8.3z" />
      <path d="M12 8.2h.01M12 11.5v4.5" />
    </>
  ),
  zoho: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M9 8.5h6l-6 7h6" />
    </>
  ),
  hubspot: (
    <>
      <circle cx="12" cy="12" r="2.2" />
      <path d="M12 3.5v3.2M12 17.3v3.2M3.5 12h3.2M17.3 12h3.2M6 6l2.3 2.3M15.7 15.7L18 18M18 6l-2.3 2.3M8.3 15.7L6 18" />
    </>
  ),
  salesforce: (
    <path d="M18 10h-1.3A8 8 0 1 0 9 20h9a4 4 0 0 0 0-8z" />
  ),
  export: (
    <>
      <path d="M12 15V4M7.5 8L12 3.5 16.5 8" />
      <path d="M4 15v3a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-3" />
    </>
  ),
  greet: (
    <>
      <path d="M4 5h11v9H9l-5 4z" />
      <path d="M18 9h3v6.5h-2M19 15.5V18l-2.2-1.6" />
    </>
  ),
  funnel: <path d="M3 5h18l-7 8v5l-4 2v-7z" />,
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M3 9.5h18M8 3v4M16 3v4" />
    </>
  ),
  loop: (
    <>
      <path d="M21 4v6h-6M3 20v-6h6" />
      <path d="M4.5 9a8 8 0 0 1 13.4-3L21 9M3 15l3.1 3A8 8 0 0 0 19.5 15" />
    </>
  ),
  eye: (
    <>
      <path d="M2 12s3.5-6.5 10-6.5S22 12 22 12s-3.5 6.5-10 6.5S2 12 2 12z" />
      <circle cx="12" cy="12" r="2.8" />
    </>
  ),
  door: (
    <>
      <path d="M5 21V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17M3 21h18" />
      <path d="M14.5 12h.01" />
    </>
  ),
  exchange: (
    <>
      <path d="M8 3L4 7l4 4M4 7h16" />
      <path d="M16 21l4-4-4-4M20 17H4" />
    </>
  ),
  exit: (
    <>
      <path d="M15 4h3a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-3" />
      <path d="M10 17l5-5-5-5M15 12H3" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.2 2" />
    </>
  ),
  note: (
    <>
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 13h6M9 17h4" />
    </>
  ),
  spark: <path d="M12 2.5l2.3 7.2 7.2 2.3-7.2 2.3L12 21.5l-2.3-7.2L2.5 12l7.2-2.3z" />,
  star: <path d="M12 2.5l3 6.4 7 .8-5.2 4.8 1.4 6.9L12 17.2 5.8 21.4l1.4-6.9L2 9.7l7-.8z" />,
  bolt: <path d="M13 2L4.5 14H11l-1.5 8L18 10h-6.5z" />,
  webhook: (
    <>
      <circle cx="6" cy="17" r="2.6" />
      <circle cx="18" cy="17" r="2.6" />
      <circle cx="12" cy="7" r="2.6" />
      <path d="M10.9 9.4L7.1 14.6M13.1 9.4l3.8 5.2M8.6 17h6.8" />
    </>
  ),
  gem: (
    <>
      <path d="M7 3h10l4 6-9 12L2 9z" />
      <path d="M2 9h20M12 3L7.5 9l4.5 12L16.5 9 12 3z" />
    </>
  ),
  check: <path d="M4 12.5l5 5L20 6.5" />,
};

export type IconName = keyof typeof PATHS;

/* Real brand marks: loaded from the brand folder at build time. */

const brandFiles = import.meta.glob('../brand/*.{svg,png,webp}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const BRAND_FILES = {
  whatsapp: 'whatsapp.svg',
  imessage: 'imessage.svg',
  zoho: 'zoho.svg',
  hubspot: 'hubspot.svg',
  salesforce: 'salesforce.svg',
  zapier: 'zapier.svg',
  servicem8: 'servicem8.webp',
  simpro: 'simpro.png',
  googlecalendar: 'googlecalendar.svg',
  outlook: 'outlook.svg',
  xero: 'xero.svg',
  quickbooks: 'quickbooks.svg',
  gmail: 'gmail.svg',
};

function brandUrl(name: keyof typeof BRAND_FILES): string | undefined {
  const file = BRAND_FILES[name];
  return Object.values(brandFiles).find((_, i) => Object.keys(brandFiles)[i].endsWith('/' + file));
}

export type BrandName = keyof typeof BRANDS;

export function BrandIcon({
  name,
  fallback,
  className,
}: {
  name: BrandName;
  fallback?: IconName;
  className?: string;
}) {
  const url = brandUrl(name);
  if (!url) {
    // Logo not in the brand folder yet — fall back to the line icon.
    if (fallback) return <Icon name={fallback} className={className ?? 'h-4 w-4'} />;
    return null;
  }
  return (
    <img
      src={url}
      alt=""
      aria-hidden="true"
      className={`shrink-0 ${className ?? 'h-4 w-auto'}`}
    />
  );
}

export function Icon({ name, className }: { name: IconName; className?: string }) {
  return (
    <svg
      className={className ?? 'h-4 w-4'}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {PATHS[name]}
    </svg>
  );
}
