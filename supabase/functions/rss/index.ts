import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { corsHeaders } from "../_shared/cors.ts";

function escapeXml(s: string) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response('ok', { headers: corsHeaders });

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? ''
    );

    // Fetch posts (fallback handled by empty array)
    const { data: posts, error } = await supabase
      .from('blog_posts')
      .select('id, title, excerpt, content, date, slug, category')
      .order('date', { ascending: false })
      .limit(100);

    if (error) {
      console.warn('RSS: DB fetch error:', error.message);
    }

    const siteUrl = 'https://logo-foot.com';
    const now = new Date().toUTCString();

    const items = (posts || []).map((p) => {
      const slug = p.slug || String(p.title || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
      const url = `${siteUrl}/blog/${p.id}-${slug}`;
      const pubDate = p.date ? new Date(p.date).toUTCString() : now;
      return `    <item>
      <title>${escapeXml(p.title || '')}</title>
      <link>${escapeXml(url)}</link>
      <guid>${escapeXml(url)}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${(p.excerpt || '').slice(0, 500)}]]></description>
    </item>`;
    }).join('\n');

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>Logo Foot - Derniers articles</title>
    <link>${siteUrl}</link>
    <description>Actualités, analyses et histoires des logos de clubs de football</description>
    <language>fr-fr</language>
    <lastBuildDate>${now}</lastBuildDate>
${items}
  </channel>
</rss>`;

    return new Response(xml, {
      headers: {
        ...corsHeaders,
        'Content-Type': 'application/rss+xml; charset=utf-8',
        'Cache-Control': 'public, max-age=1800'
      }
    });
  } catch (e) {
    console.error('RSS error:', e);
    return new Response('Internal Error', { status: 500, headers: corsHeaders });
  }
});
