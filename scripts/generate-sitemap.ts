import { createClient } from '@supabase/supabase-js'
import { generateSitemap } from '../src/utils/sitemapGenerator'
import { writeFileSync } from 'fs'
import { join } from 'path'

const supabaseUrl = process.env.VITE_SUPABASE_URL || ''
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY || ''

async function generateStaticSitemap() {
  console.log('🔄 Génération du sitemap statique...')
  
  try {
    const supabase = createClient(supabaseUrl, supabaseKey)
    
    // Récupérer tous les articles depuis Supabase
    const { data: blogPosts, error } = await supabase
      .from('blog_posts')
      .select('id, title, excerpt, date, category, sub_category, gallery_image_id')
      .order('date', { ascending: false })

    if (error) {
      console.error('❌ Erreur Supabase:', error)
      // Fallback sur les données locales
      const { blogPosts: localPosts } = await import('../src/data/blog')
      console.log('📦 Utilisation des données locales en fallback')
      generateSiteMapFile(localPosts)
      return
    }

    console.log(`✅ ${blogPosts?.length || 0} articles récupérés depuis Supabase`)
    
    // Transformer les données pour le générateur
    const formattedPosts = (blogPosts || []).map(post => ({
      id: post.id,
      title: post.title,
      excerpt: post.excerpt,
      date: post.date,
      category: post.category,
      subCategory: post.sub_category,
      galleryImageId: post.gallery_image_id
    }))

    generateSiteMapFile(formattedPosts)
    
  } catch (error) {
    console.error('❌ Erreur lors de la génération:', error)
    // Fallback sur les données locales
    const { blogPosts: localPosts } = await import('../src/data/blog')
    console.log('📦 Utilisation des données locales en fallback')
    generateSiteMapFile(localPosts)
  }
}

function generateSiteMapFile(blogPosts: any[]) {
  // Générer le sitemap complet avec toutes les options
  const sitemap = generateSitemap({
    includeImages: true,
    includeHreflang: true,
    includeLastmod: true,
    includePriority: true,
    priorityCalculation: true,
    includeNewsTag: false,
    compressOutput: false,
    blogPosts
  })

  // Écrire le fichier dans public/
  const sitemapPath = join(process.cwd(), 'public', 'sitemap.xml')
  writeFileSync(sitemapPath, sitemap, 'utf-8')
  
  console.log(`🎉 Sitemap généré avec ${blogPosts.length} articles`)
  console.log(`📍 Fichier sauvé: ${sitemapPath}`)
}

// Exécuter si appelé directement
if (import.meta.url === `file://${process.argv[1]}`) {
  generateStaticSitemap()
}

export { generateStaticSitemap }