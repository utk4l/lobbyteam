import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { createServer } from 'node:http';
import { join } from 'node:path';

const PORT = Number(process.env.CONTENT_PROXY_PORT || '3011');
const configuredWordPressApiUrl = process.env.DEVONBLOG_WP_API_URL || 'https://dblog.4xn.in';
const WORDPRESS_API_URL = configuredWordPressApiUrl.replace(/\/wp-json\/wp\/v2\/?$/, '');
const CATEGORY_SLUG = process.env.DEVONBLOG_CATEGORY_SLUG || 'lobby-team';
const SITE_URL = process.env.SITE_URL || 'https://lobbyteam.sophimind.com';
const CACHE_DIR = process.env.CONTENT_CACHE_DIR || '/var/lib/lobbyteam-content';
const FRESH_CACHE_MS = 10 * 60 * 1000;
const MAX_STALE_CACHE_MS = 7 * 24 * 60 * 60 * 1000;
const DEVON_REQ_IDENTIFIER = 'c3cf9e2d70acd6817807426b8cfb73b3f263f178';
const memoryCache = new Map();

function cacheKey(path) {
  return createHash('sha256').update(path).digest('hex');
}

async function readCache(path) {
  const key = cacheKey(path);
  const inMemory = memoryCache.get(key);
  if (inMemory) return inMemory;
  try {
    const value = JSON.parse(await readFile(join(CACHE_DIR, key + '.json'), 'utf8'));
    memoryCache.set(key, value);
    return value;
  } catch {
    return null;
  }
}

async function writeCache(path, value) {
  const key = cacheKey(path);
  memoryCache.set(key, value);
  try {
    await mkdir(CACHE_DIR, { recursive: true });
    await writeFile(join(CACHE_DIR, key + '.json'), JSON.stringify(value));
  } catch (error) {
    console.warn('Could not persist content cache: ' + error.message);
  }
}

async function fetchCachedJson(path) {
  const apiPath = path.startsWith('/wp-json/wp/v2/') ? path : '/wp-json/wp/v2' + path;
  const cached = await readCache(apiPath);
  if (cached && Date.now() - cached.storedAt < FRESH_CACHE_MS) {
    return { body: cached.body, headers: cached.headers, stale: false };
  }

  try {
    const response = await fetch(WORDPRESS_API_URL + apiPath, {
      headers: {
        Accept: 'application/json',
        'devon-req-identifier': DEVON_REQ_IDENTIFIER,
      },
      signal: AbortSignal.timeout(8_000),
    });
    if (!response.ok) throw new Error('WordPress request failed: ' + response.status);
    const body = await response.text();
    const headers = {
      'content-type': response.headers.get('content-type') || 'application/json; charset=UTF-8',
      'x-wp-total': response.headers.get('x-wp-total') || '',
      'x-wp-totalpages': response.headers.get('x-wp-totalpages') || '',
    };
    await writeCache(apiPath, { body, headers, storedAt: Date.now() });
    return { body, headers, stale: false };
  } catch (error) {
    if (cached && Date.now() - cached.storedAt < MAX_STALE_CACHE_MS) {
      return { body: cached.body, headers: cached.headers, stale: true };
    }
    throw error;
  }
}

function escapeXml(value) {
  return String(value).replace(/[<>&'"]/g, (character) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;', "'": '&apos;', '"': '&quot;' })[character]);
}

async function buildSitemap() {
  const urls = new Map([
    ['/', 'weekly'],
    ['/who-is-this-for', 'monthly'],
    ['/integrations', 'monthly'],
    ['/about', 'yearly'],
    ['/blog', 'weekly'],
    ['/faqs', 'monthly'],
  ]);
  try {
    const categoryResponse = await fetchCachedJson('/categories?slug=' + encodeURIComponent(CATEGORY_SLUG));
    const category = JSON.parse(categoryResponse.body)[0];
    if (category) {
      const postsResponse = await fetchCachedJson('/posts?categories=' + category.id + '&per_page=100&_embed=1&orderby=date&order=desc');
      const posts = JSON.parse(postsResponse.body);
      const tags = new Set();
      const series = new Set();
      for (const post of posts) {
        urls.set('/blog/' + post.slug, 'monthly');
        for (const terms of post._embedded?.['wp:term'] || []) {
          for (const term of terms) {
            if (post.tags?.includes(term.id)) tags.add(term.slug);
            if (term.taxonomy === 'post_series' && post.post_series?.includes(term.id)) series.add(term.slug);
          }
        }
      }
      for (const tag of tags) urls.set('/blog/tag/' + tag, 'monthly');
      for (const item of series) urls.set('/blog/series/' + item, 'monthly');
    }
  } catch (error) {
    console.warn('LobbyTeam sitemap source unavailable; serving cached core routes: ' + error.message);
  }
  const body = [...urls.entries()].map(([path, changeFrequency]) => '  <url><loc>' + escapeXml(SITE_URL + path) + '</loc><changefreq>' + changeFrequency + '</changefreq></url>').join('\n');
  return '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + body + '\n</urlset>\n';
}

function isAllowedWordPressPath(path) {
  return path.startsWith('/wp-json/wp/v2/') && !path.includes('..');
}

const server = createServer(async (request, response) => {
  const requestUrl = new URL(request.url || '/', 'http://' + (request.headers.host || 'localhost'));
  try {
    if (requestUrl.pathname === '/sitemap.xml') {
      const body = await buildSitemap();
      response.writeHead(200, { 'content-type': 'application/xml; charset=UTF-8', 'cache-control': 'public, max-age=600, stale-while-revalidate=604800', 'x-lobbyteam-cache': 'fresh-or-stale-source' });
      response.end(body);
      return;
    }

    if (requestUrl.pathname.startsWith('/content') && isAllowedWordPressPath(requestUrl.pathname.replace('/content', ''))) {
      const path = requestUrl.pathname.replace('/content', '') + requestUrl.search;
      const result = await fetchCachedJson(path);
      response.writeHead(200, {
        ...result.headers,
        'cache-control': 'public, max-age=600, stale-while-revalidate=604800',
        'access-control-allow-origin': 'https://lobbyteam.sophimind.com',
        'x-lobbyteam-cache': result.stale ? 'stale' : 'fresh',
      });
      response.end(result.body);
      return;
    }

    response.writeHead(404, { 'content-type': 'text/plain; charset=UTF-8' });
    response.end('Not found');
  } catch (error) {
    console.error('LobbyTeam content request failed: ' + error.message);
    response.writeHead(502, { 'content-type': 'application/json; charset=UTF-8', 'cache-control': 'no-store' });
    response.end(JSON.stringify({ error: 'Content temporarily unavailable' }));
  }
});

server.listen(PORT, '127.0.0.1', () => {
  console.log('LobbyTeam content proxy listening on 127.0.0.1:' + PORT);
});
