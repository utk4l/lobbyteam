import { mkdir, writeFile } from 'node:fs/promises';

const apiUrl = process.env.DEVONBLOG_WP_API_URL || 'https://dblog.4xn.in/wp-json/wp/v2';
const categorySlug = process.env.DEVONBLOG_CATEGORY_SLUG || 'lobby-team';
const siteUrl = process.env.SITE_URL || 'https://lobbyteam.sophimind.com';

const escapeXml = (value) => String(value).replace(/[<>&'\"]/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[character]);

async function fetchJson(path) {
  const response = await fetch(`${apiUrl}${path}`);
  if (!response.ok) throw new Error(`WordPress request failed: ${response.status}`);
  return response.json();
}

const urls = new Map([
  ['/', 'weekly'],
  ['/who-is-this-for', 'monthly'],
  ['/integrations', 'monthly'],
  ['/about', 'yearly'],
  ['/blog', 'weekly'],
]);

try {
  const categories = await fetchJson(`/categories?slug=${encodeURIComponent(categorySlug)}`);
  const category = categories[0];
  if (category) {
    const posts = await fetchJson(`/posts?categories=${category.id}&per_page=100&_embed=1&orderby=date&order=desc`);
    for (const post of posts) urls.set(`/blog/${post.slug}`, 'monthly');
    const tags = new Set();
    const series = new Set();
    for (const post of posts) {
      for (const terms of post._embedded?.['wp:term'] || []) {
        for (const term of terms) {
          if (post.tags?.includes(term.id)) tags.add(term.slug);
          if (term.taxonomy === 'post_series' && post.post_series?.includes(term.id)) series.add(term.slug);
        }
      }
    }
    for (const tag of tags) urls.set(`/blog/tag/${tag}`, 'monthly');
    for (const item of series) urls.set(`/blog/series/${item}`, 'monthly');
  }
} catch (error) {
  console.warn(`Could not load WordPress posts for sitemap: ${error.message}`);
}

const body = [...urls.entries()].map(([path, changeFrequency]) => `  <url><loc>${escapeXml(`${siteUrl}${path}`)}</loc><changefreq>${changeFrequency}</changefreq></url>`).join('\n');
await mkdir('public', { recursive: true });
await writeFile('public/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`);
