import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

interface BlogPost {
  id: number
  title: string
  excerpt: string
  content: string
  date: string
  category: string
  subCategory?: string
  galleryImageId?: number
  keywords?: string
  slug?: string
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders })
  }

  try {
    // Initialize Supabase client
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    if (req.method === 'POST') {
      const { blogPosts } = await req.json()
      
      console.log(`🔄 Début de synchronisation de ${blogPosts.length} articles`)

      // Fonction pour générer un slug à partir du titre
      const generateSlug = (title: string): string => {
        return title
          .toLowerCase()
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '') // Supprimer les accents
          .replace(/[^a-z0-9\s-]/g, '') // Garder seulement lettres, chiffres, espaces et tirets
          .replace(/\s+/g, '-') // Remplacer espaces par tirets
          .replace(/-+/g, '-') // Fusionner tirets multiples
          .replace(/^-|-$/g, '') // Supprimer tirets en début/fin
      }

      // Préparer les données pour Supabase
      const postsForSupabase = blogPosts.map((post: BlogPost) => ({
        id: post.id,
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        date: post.date,
        category: post.category,
        sub_category: post.subCategory || null,
        gallery_image_id: post.galleryImageId || null,
        keywords: post.keywords || null,
        slug: post.slug || generateSlug(post.title) // Générer slug si manquant
      }))

      // Insérer tous les articles avec upsert
      const { data, error } = await supabase
        .from('blog_posts')
        .upsert(postsForSupabase, { onConflict: 'id' })

      if (error) {
        console.error('❌ Erreur Supabase:', error)
        return new Response(
          JSON.stringify({ 
            success: false, 
            error: error.message,
            details: error
          }),
          {
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          }
        )
      }

      console.log(`✅ ${blogPosts.length} articles synchronisés avec succès`)

      return new Response(
        JSON.stringify({ 
          success: true, 
          message: `${blogPosts.length} articles synchronisés`,
          synced: blogPosts.length
        }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Method not allowed
    return new Response(
      JSON.stringify({ error: 'Method not allowed' }),
      {
        status: 405,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('❌ Erreur générale:', error)
    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error.message 
      }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})