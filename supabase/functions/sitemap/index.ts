
import { generateSitemap } from '../../../src/utils/sitemapGenerator';
import { corsHeaders } from '../_shared/cors';

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    console.log("Generating sitemap...");
    const sitemap = generateSitemap();
    console.log(`Sitemap generated successfully with ${sitemap.split('<url>').length - 1} URLs`);
    
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
