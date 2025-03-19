
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
    
    // Loguer les articles récemment ajoutés
    const recentPosts = blogPosts
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
      .slice(0, 5);
    
    console.log("Recent posts being added to sitemap:");
    recentPosts.forEach(post => {
      console.log(`- ID ${post.id}: ${post.title} (${post.date})`);
    });
    
    // Loguer les articles nationaux et de compétitions qui seront mis en avant
    const featuredPosts = blogPosts.filter(post => 
      post.subCategory === 'national-logos' || 
      post.title.toLowerCase().includes('équipe nationale') ||
      post.title.toLowerCase().includes('équipe de france') ||
      post.title.toLowerCase().includes('champions league') ||
      post.title.toLowerCase().includes('ligue des champions') ||
      post.title.toLowerCase().includes('europa league') ||
      post.title.toLowerCase().includes('ligue europa') ||
      post.title.toLowerCase().includes('coupe du monde') ||
      post.title.toLowerCase().includes('belgique') ||
      post.title.toLowerCase().includes('pays bas') ||
      post.title.toLowerCase().includes('autriche')
    );
    
    console.log(`Found ${featuredPosts.length} featured posts with higher priority:`);
    featuredPosts.forEach(post => {
      console.log(`- ID ${post.id}: ${post.title}`);
    });
    
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
