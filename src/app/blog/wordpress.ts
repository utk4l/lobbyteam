const WORDPRESS_API_URL = import.meta.env.VITE_DEVONBLOG_WP_API_URL || 'https://dblog.4xn.in/wp-json/wp/v2';
const CATEGORY_SLUG = import.meta.env.VITE_DEVONBLOG_CATEGORY_SLUG || 'lobby-team';

export type WordPressTerm = {
  id: number;
  name: string;
  slug: string;
  taxonomy?: string;
  description?: string;
};

export type WordPressPost = {
  id: number;
  slug: string;
  date: string;
  modified?: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  tags: number[];
  post_series?: number[];
  _embedded?: {
    'wp:featuredmedia'?: Array<{ source_url?: string; alt_text?: string }>;
    'wp:term'?: Array<WordPressTerm[]>;
  };
};

type WordPressResponse<T> = { value: T; headers: Headers };

let categoryIdPromise: Promise<number> | undefined;

async function request<T>(path: string): Promise<WordPressResponse<T>> {
  const response = await fetch(`${WORDPRESS_API_URL}${path}`, {
    headers: { Accept: 'application/json' },
  });
  if (!response.ok) throw new Error(`WordPress request failed: ${response.status}`);
  return { value: await response.json() as T, headers: response.headers };
}

async function getCategoryId(): Promise<number> {
  if (!categoryIdPromise) {
    categoryIdPromise = request<WordPressTerm[]>(`/categories?slug=${encodeURIComponent(CATEGORY_SLUG)}`)
      .then(({ value }) => {
        const category = value[0];
        if (!category || category.slug !== CATEGORY_SLUG) throw new Error(`WordPress category not found: ${CATEGORY_SLUG}`);
        return category.id;
      })
      .catch((error: unknown) => {
        categoryIdPromise = undefined;
        throw error;
      });
  }
  return categoryIdPromise;
}

function postQuery(categoryId: number, extra: Record<string, string> = {}): string {
  const query = new URLSearchParams({
    categories: String(categoryId),
    per_page: '12',
    order: 'desc',
    orderby: 'date',
    _embed: '1',
    ...extra,
  });
  return `/posts?${query.toString()}`;
}

export async function getPosts(page = 1, tagId?: number, seriesId?: number): Promise<{ posts: WordPressPost[]; totalPages: number }> {
  try {
    const categoryId = await getCategoryId();
    const { value, headers } = await request<WordPressPost[]>(postQuery(categoryId, { page: String(page), ...(tagId ? { tags: String(tagId) } : {}), ...(seriesId ? { post_series: String(seriesId) } : {}) }));
    return { posts: value, totalPages: Number(headers.get('X-WP-TotalPages') || '1') };
  } catch {
    return { posts: [], totalPages: 1 };
  }
}

export async function getAllPosts(): Promise<WordPressPost[]> {
  try {
    const categoryId = await getCategoryId();
    const { value } = await request<WordPressPost[]>(postQuery(categoryId, { page: '1', per_page: '100' }));
    return value;
  } catch {
    return [];
  }
}

export async function getPost(slug: string): Promise<WordPressPost | null> {
  try {
    const categoryId = await getCategoryId();
    const { value } = await request<WordPressPost[]>(`/posts?slug=${encodeURIComponent(slug)}&categories=${categoryId}&_embed=1`);
    return value[0] || null;
  } catch {
    return null;
  }
}

export async function getTag(slug: string): Promise<WordPressTerm | null> {
  try {
    const { value } = await request<WordPressTerm[]>(`/tags?slug=${encodeURIComponent(slug)}`);
    return value[0] || null;
  } catch {
    return null;
  }
}

export async function getSeries(slug: string): Promise<WordPressTerm | null> {
  try {
    const { value } = await request<WordPressTerm[]>(`/post_series?slug=${encodeURIComponent(slug)}`);
    return value[0] || null;
  } catch {
    return null;
  }
}

export async function getSeriesPosts(seriesId: number): Promise<WordPressPost[]> {
  try {
    const categoryId = await getCategoryId();
    const query = new URLSearchParams({ categories: String(categoryId), post_series: String(seriesId), per_page: '100', order: 'asc', orderby: 'date', _embed: '1' });
    const { value } = await request<WordPressPost[]>(`/posts?${query.toString()}`);
    return value;
  } catch {
    return [];
  }
}

export function getPostTags(post: WordPressPost): WordPressTerm[] {
  const terms = post._embedded?.['wp:term']?.flat() || [];
  return terms.filter((term) => post.tags.includes(term.id));
}

export function getPostSeries(post: WordPressPost): WordPressTerm[] {
  const terms = post._embedded?.['wp:term']?.flat() || [];
  return terms.filter((term) => term.taxonomy === 'post_series' && (post.post_series || []).includes(term.id));
}

export function getFeaturedImage(post: WordPressPost): { sourceUrl: string; altText: string } | null {
  const media = post._embedded?.['wp:featuredmedia']?.[0];
  return media?.source_url ? { sourceUrl: media.source_url, altText: media.alt_text || stripHtml(post.title.rendered) } : null;
}

export function stripHtml(value: string): string {
  return value.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/&#8217;/g, "'").replace(/&amp;/g, '&').trim();
}

export function sanitizeHtml(value: string): string {
  return value
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<iframe[\s\S]*?<\/iframe>/gi, '')
    .replace(/\son\w+\s*=\s*(['"]).*?\1/gi, '')
    .replace(/javascript:/gi, '');
}

export { CATEGORY_SLUG };
