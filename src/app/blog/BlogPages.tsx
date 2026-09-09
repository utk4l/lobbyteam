import { useEffect, useState, type ReactNode } from 'react';
import { LobbyFooter } from '../lobby/LobbyFooter';
import { LobbyNavigation } from '../lobby/LobbyNavigation';
import { getFeaturedImage, getPost, getPostSeries, getPostTags, getPosts, getSeries, getSeriesPosts, getTag, sanitizeHtml, stripHtml, type WordPressPost, type WordPressTerm } from './wordpress';

const SITE_URL = 'https://lobbyteam.sophimind.com';

function useMetadata(title: string, description: string, path: string, jsonLd?: Record<string, unknown>) {
  useEffect(() => {
    document.title = title;
    const setMeta = (attribute: string, key: string, content: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
      if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, key); document.head.appendChild(element); }
      element.content = content;
    };
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', `${SITE_URL}${path}`);
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.appendChild(canonical); }
    canonical.href = `${SITE_URL}${path}`;
    if (jsonLd) {
      let script = document.head.querySelector<HTMLScriptElement>('script[data-lobbyteam-jsonld]');
      if (!script) { script = document.createElement('script'); script.type = 'application/ld+json'; script.dataset.lobbyteamJsonld = 'true'; document.head.appendChild(script); }
      script.textContent = JSON.stringify(jsonLd);
    }
    return () => { document.head.querySelector('script[data-lobbyteam-jsonld]')?.remove(); };
  }, [description, path, title, jsonLd]);
}

function dateLabel(date: string) { return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date(date)); }

function BlogShell({ children }: { children: ReactNode }) {
  return <div className="min-h-screen bg-paper text-ink"><LobbyNavigation /><main className="pt-16">{children}</main><LobbyFooter /></div>;
}

function PostCard({ post, index }: { post: WordPressPost; index: number }) {
  const image = getFeaturedImage(post);
  const tag = getPostTags(post)[0];
  return <article className="group rounded-md border border-ink/10 bg-white transition-colors hover:border-ink/30"><a href={`/blog/${post.slug}`} className="block"><div className="relative aspect-[1.55] overflow-hidden rounded-t-md bg-ink/5">{image ? <img src={image.sourceUrl} alt={image.altText} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" /> : <div className={`flex h-full items-end p-5 ${index % 3 === 0 ? 'bg-moss' : index % 3 === 1 ? 'bg-ink' : 'bg-[#d8cdbb]'}`}><span className="font-mono text-xs uppercase tracking-[0.16em] text-paper/70">LobbyTeam field note <strong className="ml-2 text-paper">{String(index + 1).padStart(2, '0')}</strong></span></div>}<span className="absolute right-4 top-4 rounded-full bg-paper/90 px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.12em]">{tag?.name || 'LobbyTeam'}</span></div><div className="p-6 md:p-7"><p className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink/40">{dateLabel(post.date)}</p><h2 className="mt-4 font-display text-2xl leading-tight group-hover:text-moss" dangerouslySetInnerHTML={{ __html: post.title.rendered }} /><p className="mt-4 line-clamp-3 text-sm leading-relaxed text-ink/60">{stripHtml(post.excerpt.rendered)}</p><span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">Read article <span aria-hidden="true">→</span></span></div></a></article>;
}

function BlogIndex({ page = 1, tag, series }: { page?: number; tag?: WordPressTerm; series?: WordPressTerm }) {
  const [result, setResult] = useState<{ posts: WordPressPost[]; totalPages: number }>({ posts: [], totalPages: 1 });
  useEffect(() => { getPosts(page, tag?.id, series?.id).then(setResult); }, [page, series?.id, tag?.id]);
  const term = tag || series;
  const title = term ? `${term.name} articles | LobbyTeam` : 'LobbyTeam field notes';
  const description = tag ? `LobbyTeam guidance about ${tag.name}.` : series ? `The ${series.name} series from LobbyTeam.` : 'Practical guidance for businesses that want every customer to reach an answer, completed request, or the right human next step.';
  const route = tag ? `/blog/tag/${tag.slug}` : series ? `/blog/series/${series.slug}` : '/blog';
  useMetadata(title, description, route, { '@context': 'https://schema.org', '@type': 'Blog', name: 'LobbyTeam field notes', description, url: `${SITE_URL}${route}`, publisher: { '@type': 'Organization', name: 'SophiMind' } });
  return <BlogShell><section className="relative overflow-hidden border-b border-ink/10 pb-20 pt-24 md:pb-28 md:pt-36"><div className="dot-grid pointer-events-none absolute inset-0" aria-hidden="true" /><div className="relative mx-auto max-w-6xl px-6"><a href="/blog" className="font-mono text-[10px] uppercase tracking-[0.15em] text-moss">{term ? '← All LobbyTeam field notes' : 'The LobbyTeam field notes'}</a><h1 className="mt-7 max-w-4xl font-display text-[clamp(3rem,7vw,6.2rem)] leading-[.91] tracking-[-0.045em]">{term ? term.name : <>Make the business front door <em>work better.</em></>}</h1><p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink/65">{description}</p></div></section><section className="py-20 md:py-28"><div className="mx-auto max-w-6xl px-6">{result.posts.length ? <div className="grid gap-5 md:grid-cols-2">{result.posts.map((post, index) => <PostCard key={post.id} post={post} index={index} />)}</div> : <div className="rounded-md border border-ink/10 bg-white p-10"><h2 className="font-display text-3xl">Useful guidance is on its way.</h2><p className="mt-4 max-w-xl text-ink/60">We are preparing practical notes about customer response, appointment work, front-desk coverage, routing, and human handoffs.</p></div>}<div className="mt-10 flex justify-between font-mono text-[10px] uppercase tracking-[0.12em] text-ink/50">{page > 1 ? <a href={`${route}?page=${page - 1}`}>← Newer</a> : <span />}{result.totalPages > page ? <a href={`${route}?page=${page + 1}`}>Older →</a> : <span />}</div></div></section></BlogShell>;
}

export function BlogRoute({ kind, slug }: { kind: 'index' | 'tag' | 'series'; slug?: string }) {
  const [term, setTerm] = useState<WordPressTerm | null>(null);
  useEffect(() => { if (slug) (kind === 'tag' ? getTag(slug) : getSeries(slug)).then(setTerm); }, [kind, slug]);
  if (kind !== 'index' && !term) return <BlogIndex />;
  return <BlogIndex page={Math.max(1, Number(new URLSearchParams(window.location.search).get('page') || '1'))} {...(kind === 'tag' ? { tag: term || undefined } : { series: term || undefined })} />;
}

export function BlogPostRoute({ slug }: { slug: string }) {
  const [post, setPost] = useState<WordPressPost | null>(null);
  const [seriesPosts, setSeriesPostsState] = useState<WordPressPost[]>([]);
  const [series, setSeries] = useState<WordPressTerm | null>(null);
  useEffect(() => { getPost(slug).then(async (value) => { setPost(value); const seriesTerm = value && getPostSeries(value)[0]; if (seriesTerm) { setSeries(seriesTerm); setSeriesPostsState(await getSeriesPosts(seriesTerm.id)); } }); }, [slug]);
  const title = post ? `${stripHtml(post.title.rendered)} | LobbyTeam` : 'LobbyTeam article';
  const description = post ? stripHtml(post.excerpt.rendered) : 'LobbyTeam field notes.';
  useMetadata(title, description, `/blog/${slug}`, post ? { '@context': 'https://schema.org', '@type': 'BlogPosting', headline: stripHtml(post.title.rendered), description, datePublished: post.date, dateModified: post.modified || post.date, mainEntityOfPage: `${SITE_URL}/blog/${post.slug}`, author: { '@type': 'Organization', name: 'SophiMind' }, publisher: { '@type': 'Organization', name: 'SophiMind' } } : undefined);
  if (!post) return <BlogShell><section className="mx-auto max-w-3xl px-6 py-32"><h1 className="font-display text-5xl">Finding the article...</h1><a href="/blog" className="mt-8 inline-block text-moss">Back to field notes →</a></section></BlogShell>;
  const tags = getPostTags(post);
  const image = getFeaturedImage(post);
  const position = seriesPosts.findIndex((item) => item.id === post.id) + 1;
  return <BlogShell><article className="pb-24 pt-16"><div className="mx-auto max-w-4xl px-6"><a href="/blog" className="font-mono text-[10px] uppercase tracking-[0.15em] text-moss">← Back to LobbyTeam field notes</a><header className="mt-12"><p className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink/40">{dateLabel(post.date)}</p><h1 className="mt-5 font-display text-[clamp(2.8rem,6vw,5.8rem)] leading-[.94] tracking-[-0.04em]" dangerouslySetInnerHTML={{ __html: post.title.rendered }} /><p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink/65">{description}</p><div className="mt-7 flex flex-wrap gap-2">{tags.map((tag) => <a key={tag.id} href={`/blog/tag/${tag.slug}`} className="rounded-full border border-ink/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-ink/60">{tag.name}</a>)}</div></header>{image && <img src={image.sourceUrl} alt={image.altText} className="mt-12 max-h-[540px] w-full rounded-md object-cover" />}{series && seriesPosts.length > 0 && <details className="mt-10 rounded-md border border-ink/10 bg-white p-5"><summary className="cursor-pointer font-mono text-[10px] uppercase tracking-[0.12em] text-ink/60">Post {position || 1} of {seriesPosts.length} in {series.name}</summary><ol className="mt-5 space-y-2 pl-5 text-sm">{seriesPosts.map((item) => <li key={item.id}>{item.id === post.id ? <span className="font-medium" dangerouslySetInnerHTML={{ __html: item.title.rendered }} /> : <a className="text-moss" href={`/blog/${item.slug}`} dangerouslySetInnerHTML={{ __html: item.title.rendered }} />}</li>)}</ol></details>}<div className="prose-lobby mt-12" dangerouslySetInnerHTML={{ __html: sanitizeHtml(post.content.rendered) }} /></div></article></BlogShell>;
}
