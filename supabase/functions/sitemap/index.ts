
import { generateSitemap } from '../../../src/utils/sitemapGenerator';
import { corsHeaders } from '../_shared/cors';
import { blogPosts } from '../../../src/data/blog';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    console.log("Generating sitemap...");
    console.log(`Found ${blogPosts.length} total blog posts to include in sitemap`);
    
    const sitemap = generateSitemap();
    const urlCount = sitemap.split('<url>').length - 1;
    
    console.log(`Sitemap generated successfully with ${urlCount} URLs`);
    console.log(`Latest blog post included: ID ${blogPosts[0].id} - ${blogPosts[0].title}`);
    
    return new Response(sitemap, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/xml',
      },
    });
  } catch (error) {
    console.error("Error generating sitemap:", error);
    return new Response(JSON.stringify({ error: error.message }), {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/json',
      },
      status: 400,
    });
  }
});
