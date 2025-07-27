
import { generateSitemap, generateSpecializedSitemap } from '../../../src/utils/sitemapGenerator';
import { corsHeaders } from '../_shared/cors';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

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

    // Fetch blog posts from database
    const { data: blogPosts, error } = await supabaseClient
      .from('blog_posts')
      .select('id, title, date, category, sub_category, slug')
      .order('date', { ascending: false })

    if (error) {
      console.error('Error fetching blog posts:', error)
      throw error
    }

    const url = new URL(req.url);
    const sitemapType = url.searchParams.get('type') || 'complete';
    
    console.log(`Generating ${sitemapType} sitemap...`);
    console.log(`Found ${blogPosts?.length || 0} total blog posts from database`);
    
    let sitemap: string;
    
    if (sitemapType === 'complete') {
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
