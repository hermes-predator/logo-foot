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
    
    // Loguer les articles nationaux, de compétitions et clubs majeurs qui seront mis en avant
    const featuredPosts = blogPosts.filter(post => 
      post.subCategory === 'national-logos' || 
      post.title.toLowerCase().includes('équipe nationale') ||
      post.title.toLowerCase().includes('équipe de france') ||
      post.title.toLowerCase().includes('champions league') ||
      post.title.toLowerCase().includes('ligue des champions') ||
      post.title.toLowerCase().includes('europa league') ||
      post.title.toLowerCase().includes('ligue europa') ||
      post.title.toLowerCase().includes('coupe du monde') ||
      post.title.toLowerCase().includes('argentine') ||
      post.title.toLowerCase().includes('argentina') ||
      post.title.toLowerCase().includes('belgique') ||
      post.title.toLowerCase().includes('pays bas') ||
      post.title.toLowerCase().includes('autriche') ||
      post.title.toLowerCase().includes('liverpool') ||
      post.title.toLowerCase().includes('psg') ||
      post.title.toLowerCase().includes('paris saint-germain') ||
      post.title.toLowerCase().includes('paris saint germain') ||
      post.title.toLowerCase().includes('paris sg') ||
      post.title.toLowerCase().includes('logo paris') ||
      post.title.toLowerCase().includes('albiceleste') ||
      post.title.toLowerCase().includes('om') ||
      post.title.toLowerCase().includes('olympique de marseille') ||
      post.title.toLowerCase().includes('marseille') ||
      post.title.toLowerCase().includes('real madrid') ||
      post.title.toLowerCase().includes('madrid') ||
      post.title.toLowerCase().includes('fc barcelone') ||
      post.title.toLowerCase().includes('barcelone') ||
      post.title.toLowerCase().includes('barcelona') ||
      post.title.toLowerCase().includes('arsenal') ||
      post.title.toLowerCase().includes('gunners') ||
      post.title.toLowerCase().includes('ac milan') ||
      post.title.toLowerCase().includes('milan') ||
      post.title.toLowerCase().includes('rc lens') ||
      post.title.toLowerCase().includes('lens') ||
      post.title.toLowerCase().includes('as monaco') ||
      post.title.toLowerCase().includes('monaco') ||
      post.title.toLowerCase().includes('stade rennais') ||
      post.title.toLowerCase().includes('rennes') ||
      post.title.toLowerCase().includes('bayern munich') ||
      post.title.toLowerCase().includes('bayern') ||
      post.title.toLowerCase().includes('manchester city') ||
      post.title.toLowerCase().includes('man city') ||
      post.title.toLowerCase().includes('brest') ||
      post.title.toLowerCase().includes('stade brestois')
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
