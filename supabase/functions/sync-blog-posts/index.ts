import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  galleryImageId?: number;
  keywords?: string;
  category: string;
  subCategory?: string;
}

function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/[àáâãäå]/g, 'a')
    .replace(/[èéêë]/g, 'e')
    .replace(/[ìíîï]/g, 'i')
    .replace(/[òóôõö]/g, 'o')
    .replace(/[ùúûü]/g, 'u')
    .replace(/[ç]/g, 'c')
    .replace(/[ñ]/g, 'n')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    if (req.method === 'POST') {
      const { blogPosts }: { blogPosts: BlogPost[] } = await req.json()
      
      console.log(`Synchronizing ${blogPosts.length} blog posts...`)

      // Clear existing posts
      await supabaseClient.from('blog_posts').delete().neq('id', 0)

      // Insert new posts
      const postsToInsert = blogPosts.map(post => ({
        id: post.id,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        date: post.date,
        gallery_image_id: post.galleryImageId || null,
        keywords: post.keywords || null,
        category: post.category,
        sub_category: post.subCategory || null,
        slug: generateSlug(post.title)
      }))

      const { error } = await supabaseClient
        .from('blog_posts')
        .insert(postsToInsert)

      if (error) {
        console.error('Error inserting posts:', error)
        throw error
      }

      console.log(`Successfully synchronized ${blogPosts.length} posts`)

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: `Synchronized ${blogPosts.length} blog posts`,
          count: blogPosts.length
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200
        }
      )
    }

    if (req.method === 'GET') {
      // Get all posts from database
      const { data: posts, error } = await supabaseClient
        .from('blog_posts')
        .select('*')
        .order('date', { ascending: false })

      if (error) {
        throw error
      }

      return new Response(
        JSON.stringify({ posts, count: posts?.length || 0 }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 200
        }
      )
    }

    return new Response('Method not allowed', { status: 405, headers: corsHeaders })

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500
      }
    )
  }
})