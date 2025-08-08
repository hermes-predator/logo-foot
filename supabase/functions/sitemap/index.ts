
import { corsHeaders } from '../_shared/cors.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Local sitemap generators (Edge Functions cannot import from src code)
const BASE_URL = 'https://logo-foot.com';

function slugify(text: string = ''): string {
  return text
    .normalize('NFD')
    .replace(/\p{Diacritic}+/gu, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

function escapeXml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function urlEntry(loc: string, lastmod?: string, changefreq?: string, priority?: string) {
  return `  <url>\n    <loc>${escapeXml(loc)}</loc>\n${lastmod ? `    <lastmod>${lastmod}</lastmod>\n` : ''}${changefreq ? `    <changefreq>${changefreq}</changefreq>\n` : ''}${priority ? `    <priority>${priority}</priority>\n` : ''}  </url>`;
}

function generateSitemap({
  blogPosts = [],
  includeImages = true,
  includeHreflang = true,
  includeLastmod = true,
  includePriority = true,
}: {
  blogPosts: any[];
  includeImages?: boolean;
  includeHreflang?: boolean;
  includeLastmod?: boolean;
  includePriority?: boolean;
}): string {
  const today = new Date().toISOString().split('T')[0];
  const parts: string[] = [];
  parts.push('<?xml version="1.0" encoding="UTF-8"?>');
  parts.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"');
  parts.push('        xmlns:xhtml="http://www.w3.org/1999/xhtml"');
  if (includeImages) parts.push('        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"');
  parts.push('>');

  // Homepage
  parts.push(urlEntry(`${BASE_URL}/`, today, 'weekly', includePriority ? '1.0' : undefined));
  // Blog list
  parts.push(urlEntry(`${BASE_URL}/blog`, today, 'daily', includePriority ? '0.8' : undefined));

  // Posts
  for (const p of blogPosts) {
    const slug = p.slug || slugify(p.title);
    const loc = `${BASE_URL}/blog/${p.id}-${slug}`;
    const last = includeLastmod && p.date ? new Date(p.date).toISOString().split('T')[0] : undefined;
    parts.push(urlEntry(loc, last, 'weekly', includePriority ? '0.6' : undefined));
  }

  parts.push('</urlset>');
  return parts.join('\n');
}

function generateSpecializedSitemap(
  type: 'main' | 'clubs' | 'competitions' | 'countries' | 'categories',
  blogPosts: any[] = []
): string {
  const today = new Date().toISOString().split('T')[0];
  const parts: string[] = [];
  parts.push('<?xml version="1.0" encoding="UTF-8"?>');
  parts.push('<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">');

  if (type === 'main') {
    parts.push(urlEntry(`${BASE_URL}/`, today, 'weekly', '1.0'));
    parts.push(urlEntry(`${BASE_URL}/blog`, today, 'daily', '0.8'));
  } else if (type === 'categories') {
    const cats = Array.from(new Set(blogPosts.map((p: any) => p.category).filter(Boolean)));
    for (const c of cats) {
      parts.push(urlEntry(`${BASE_URL}/blog?category=${encodeURIComponent(c)}`, today, 'weekly', '0.7'));
    }
  } else {
    // Fallback – include recent posts
    for (const p of blogPosts.slice(0, 1000)) {
      const slug = p.slug || slugify(p.title);
      parts.push(urlEntry(`${BASE_URL}/blog/${p.id}-${slug}`, p.date ? new Date(p.date).toISOString().split('T')[0] : today, 'weekly', '0.6'));
    }
  }

  parts.push('</urlset>');
  return parts.join('\n');
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    // Initialize Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    )

  // Fetch blog posts from database (graceful fallback if unavailable)
  let blogPosts: any[] = [];
  try {
    const { data, error } = await supabaseClient
      .from('blog_posts')
      .select('id, title, date, category, sub_category, slug')
      .order('date', { ascending: false });
    if (error) {
      console.warn('Sitemap: DB fetch error, continuing with fallback:', error.message);
    } else if (data) {
      blogPosts = data as any[];
    }
  } catch (e) {
    console.warn('Sitemap: DB fetch threw, continuing with fallback:', (e as Error).message);
  }

    const url = new URL(req.url);
    const sitemapType = url.searchParams.get('type') || 'complete';
    
    console.log(`Generating ${sitemapType} sitemap...`);
    console.log(`Found ${blogPosts?.length || 0} total blog posts from database`);
    
    let sitemap: string;
    
    if (sitemapType === 'index') {
      // Générer un sitemap INDEX qui référence les variantes dynamiques
      const base = `${url.origin}${url.pathname}`;
      const lastmod = new Date().toISOString().split('T')[0];
      sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n` +
        `<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n` +
        `  <sitemap><loc>${base}?type=main</loc><lastmod>${lastmod}</lastmod></sitemap>\n` +
        `  <sitemap><loc>${base}?type=clubs</loc><lastmod>${lastmod}</lastmod></sitemap>\n` +
        `  <sitemap><loc>${base}?type=competitions</loc><lastmod>${lastmod}</lastmod></sitemap>\n` +
        `  <sitemap><loc>${base}?type=countries</loc><lastmod>${lastmod}</lastmod></sitemap>\n` +
        `  <sitemap><loc>${base}?type=categories</loc><lastmod>${lastmod}</lastmod></sitemap>\n` +
        `  <sitemap><loc>${base}?type=complete</loc><lastmod>${lastmod}</lastmod></sitemap>\n` +
        `</sitemapindex>`;
    } else if (sitemapType === 'complete') {
      // Générer le sitemap complet avec toutes les options
      const includeImages = url.searchParams.get('images') !== 'false';
      const includeHreflang = url.searchParams.get('hreflang') !== 'false';
      const includeLastmod = url.searchParams.get('lastmod') !== 'false';
      const includePriority = url.searchParams.get('priority') !== 'false';
      const includeNewsTag = url.searchParams.get('news') === 'true';
      const compressOutput = url.searchParams.get('compress') === 'true';
      
      console.log(`Options: images=${includeImages}, hreflang=${includeHreflang}, news=${includeNewsTag}`);
      
      sitemap = generateSitemap({
        includeImages,
        includeHreflang,
        includeLastmod,
        includePriority,
        priorityCalculation: true,
        includeNewsTag,
        compressOutput,
        blogPosts: blogPosts || []
      });
    } else {
      // Générer un sitemap spécialisé
      const validTypes = ['main', 'clubs', 'competitions', 'countries', 'categories'];
      const type = validTypes.includes(sitemapType) ? sitemapType as any : 'main';
      
      console.log(`Generating specialized sitemap for: ${type}`);
      sitemap = generateSpecializedSitemap(type, blogPosts || []);
    }
    
    const urlCount = sitemap.split('<url>').length - 1;
    console.log(`Sitemap generated successfully with ${urlCount} URLs`);
    
    // Récupérer les articles récents pour le log
    const recentPosts = (blogPosts || [])
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 3);
    
    console.log("Latest posts included:");
    recentPosts.forEach(post => {
      console.log(`- ID ${post.id}: ${post.title.substring(0, 50)}... (${post.date})`);
    });
    
    const headers = {
      ...corsHeaders,
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
      'X-Robots-Tag': 'noindex',
      'X-Content-Type-Options': 'nosniff',
      'X-Sitemap-Type': sitemapType,
      'X-URL-Count': urlCount.toString()
    };
    
    return new Response(sitemap, { headers });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response(JSON.stringify({ 
      error: error.message,
      timestamp: new Date().toISOString()
    }), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
      status: 500,
    });
  }
});
