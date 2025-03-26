
import { blogPosts } from '../data/blog';

interface SitemapOptions {
  includeImages?: boolean;
  includeHreflang?: boolean;
}

export const generateSitemap = (options: SitemapOptions = {}) => {
  const { includeImages = false, includeHreflang = false } = options;
  const today = new Date().toISOString().split('T')[0];
  
  // Trier les articles par date
  const sortedPosts = [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  
  // En-tête XML avec les namespaces nécessaires
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"';
  
  if (includeHreflang) {
    xml += '\n        xmlns:xhtml="http://www.w3.org/1999/xhtml"';
  }
  
  if (includeImages) {
    xml += '\n        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"';
  }
  
  xml += '>\n';
  
  // Pages statiques
  const staticPages = [
    { url: 'https://logo-foot.com/', priority: '1.0', changefreq: 'weekly' },
    { url: 'https://logo-foot.com/blog', priority: '0.8', changefreq: 'daily' },
    { url: 'https://logo-foot.com/blog/category/logos', priority: '0.8', changefreq: 'weekly' },
    { url: 'https://logo-foot.com/blog/category/technical', priority: '0.7', changefreq: 'weekly' },
    { url: 'https://logo-foot.com/blog/category/history', priority: '0.7', changefreq: 'weekly' },
    { url: 'https://logo-foot.com/blog/category/analysis', priority: '0.7', changefreq: 'weekly' },
    { url: 'https://logo-foot.com/gallery/country/france', priority: '0.7', changefreq: 'monthly' },
    { url: 'https://logo-foot.com/gallery/country/england', priority: '0.7', changefreq: 'monthly' },
    { url: 'https://logo-foot.com/gallery/country/spain', priority: '0.7', changefreq: 'monthly' },
    { url: 'https://logo-foot.com/gallery/country/italy', priority: '0.7', changefreq: 'monthly' },
    { url: 'https://logo-foot.com/gallery/country/germany', priority: '0.7', changefreq: 'monthly' },
    { url: 'https://logo-foot.com/gallery/country/netherlands', priority: '0.6', changefreq: 'monthly' },
    { url: 'https://logo-foot.com/gallery/country/portugal', priority: '0.6', changefreq: 'monthly' },
    { url: 'https://logo-foot.com/gallery/country/belgium', priority: '0.6', changefreq: 'monthly' },
  ];
  
  // Ajouter les pages statiques
  for (const page of staticPages) {
    xml += '  <url>\n';
    xml += `    <loc>${page.url}</loc>\n`;
    xml += `    <lastmod>${today}</lastmod>\n`;
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    xml += `    <priority>${page.priority}</priority>\n`;
    
    if (includeHreflang) {
      xml += `    <xhtml:link rel="alternate" hreflang="fr" href="${page.url}" />\n`;
    }
    
    xml += '  </url>\n';
  }
  
  // Ajouter les articles de blog
  for (const post of sortedPosts) {
    const postUrl = `https://logo-foot.com/blog/${post.id}`;
    const postDate = new Date(post.date).toISOString().split('T')[0];
    const imageUrl = post.galleryImageId ? 
      `https://logo-foot.com/blog-images/${post.id}.png` : 
      'https://logo-foot.com/og-image.png';
    
    // Déterminer la priorité en fonction du contenu
    let priority = '0.5';
    let changefreq = 'monthly';
    
    // Les articles récents ont une priorité plus élevée
    const postAge = new Date().getTime() - new Date(post.date).getTime();
    const isRecent = postAge < 30 * 24 * 60 * 60 * 1000; // Moins de 30 jours
    
    if (isRecent) {
      priority = '0.8';
      changefreq = 'weekly';
    }
    
    // Les articles sur les grandes équipes/compétitions ont une priorité plus élevée
    const isHighPriority = 
      post.title.toLowerCase().includes('champions league') ||
      post.title.toLowerCase().includes('europa league') ||
      post.title.toLowerCase().includes('coupe du monde') ||
      post.title.toLowerCase().includes('équipe de france') ||
      post.title.toLowerCase().includes('real madrid') ||
      post.title.toLowerCase().includes('barcelone') ||
      post.title.toLowerCase().includes('psg') ||
      post.title.toLowerCase().includes('marseille') ||
      post.title.toLowerCase().includes('juventus') ||
      post.title.toLowerCase().includes('manchester') ||
      post.title.toLowerCase().includes('bayern');
      
    if (isHighPriority && !isRecent) {
      priority = '0.7';
    } else if (isHighPriority && isRecent) {
      priority = '0.9';
    }
    
    xml += '  <url>\n';
    xml += `    <loc>${postUrl}</loc>\n`;
    xml += `    <lastmod>${postDate}</lastmod>\n`;
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    xml += `    <priority>${priority}</priority>\n`;
    
    if (includeHreflang) {
      xml += `    <xhtml:link rel="alternate" hreflang="fr" href="${postUrl}" />\n`;
    }
    
    if (includeImages) {
      xml += '    <image:image>\n';
      xml += `      <image:loc>${imageUrl}</image:loc>\n`;
      xml += `      <image:title>${post.title.split(':')[0].trim()}</image:title>\n`;
      xml += '    </image:image>\n';
    }
    
    xml += '  </url>\n';
  }
  
  xml += '</urlset>';
  return xml;
};
