
import { corsHeaders } from '../_shared/cors.ts';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Local sitemap generators (Edge Functions cannot import from src code)
const BASE_URL = 'https://www.logo-foot.com';

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

  // Posts - URLs propres sans paramètres
  for (const p of blogPosts) {
    const slug = p.slug || slugify(p.title);
    const loc = `${BASE_URL}/blog/${p.id}-${slug}`;
    const last = includeLastmod && p.date ? new Date(p.date).toISOString().split('T')[0] : undefined;
    parts.push(urlEntry(loc, last, 'weekly', includePriority ? '0.6' : undefined));
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
      .order('date', { ascending: false })
      .limit(400); // Limiter à 400 articles les plus récents pour éviter le budget crawl
    if (error) {
      console.warn('Sitemap: DB fetch error, continuing with fallback:', error.message);
    } else if (data) {
      blogPosts = data as any[];
    }
  } catch (e) {
    console.warn('Sitemap: DB fetch threw, continuing with fallback:', (e as Error).message);
  }

    const url = new URL(req.url);
    
    // Sitemap simple et propre - pas de paramètres pour éviter les redirections
    console.log(`Generating clean sitemap...`);
    console.log(`Found ${blogPosts?.length || 0} blog posts from database (limited to most recent)`);
    
    const sitemap = generateSitemap({
      includeImages: false, // Désactiver les images pour alléger
      includeHreflang: false, // Désactiver hreflang (géré dans les pages)
      includeLastmod: true,
      includePriority: true,
      blogPosts: blogPosts || []
    });
    
    const urlCount = sitemap.split('<url>').length - 1;
    console.log(`✅ Sitemap optimisé généré: ${urlCount} URLs propres`);
    
    // Récupérer les articles récents pour le log
    const recentPosts = (blogPosts || []).slice(0, 3);
    
    console.log("📝 Derniers articles inclus:");
    recentPosts.forEach(post => {
      console.log(`  - ID ${post.id}: ${post.title.substring(0, 50)}... (${post.date})`);
    });
    
    const headers = {
      ...corsHeaders,
      'Content-Type': 'text/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=7200', // Cache plus long (2h)
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
