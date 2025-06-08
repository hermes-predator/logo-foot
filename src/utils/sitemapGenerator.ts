
import { blogPosts } from '../data/blog';

interface SitemapOptions {
  includeImages?: boolean;
  includeHreflang?: boolean;
  includeLastmod?: boolean;
  includePriority?: boolean;
  priorityCalculation?: boolean;
  includeNewsTag?: boolean;
  compressOutput?: boolean;
}

export const generateSitemap = (options: SitemapOptions = {}) => {
  const { 
    includeImages = false, 
    includeHreflang = false,
    includeLastmod = true,
    includePriority = true,
    priorityCalculation = true,
    includeNewsTag = false,
    compressOutput = false
  } = options;
  
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
  
  if (includeNewsTag) {
    xml += '\n        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9"';
  }
  
  xml += '>\n';
  
  // Pages statiques avec dates réalistes
  const staticPages = [
    { url: 'https://logo-foot.com/', priority: '1.0', changefreq: 'weekly', lastmod: today },
    { url: 'https://logo-foot.com/blog', priority: '0.8', changefreq: 'daily', lastmod: today },
    { url: 'https://logo-foot.com/blog/category/logos', priority: '0.8', changefreq: 'weekly', lastmod: '2024-12-01' },
    { url: 'https://logo-foot.com/blog/category/technical', priority: '0.7', changefreq: 'weekly', lastmod: '2024-11-15' },
    { url: 'https://logo-foot.com/blog/category/history', priority: '0.7', changefreq: 'weekly', lastmod: '2024-11-10' },
    { url: 'https://logo-foot.com/blog/category/analysis', priority: '0.7', changefreq: 'weekly', lastmod: '2024-11-20' },
    { url: 'https://logo-foot.com/gallery/country/france', priority: '0.7', changefreq: 'monthly', lastmod: '2024-10-15' },
    { url: 'https://logo-foot.com/gallery/country/england', priority: '0.7', changefreq: 'monthly', lastmod: '2024-10-15' },
    { url: 'https://logo-foot.com/gallery/country/spain', priority: '0.7', changefreq: 'monthly', lastmod: '2024-10-15' },
    { url: 'https://logo-foot.com/gallery/country/italy', priority: '0.7', changefreq: 'monthly', lastmod: '2024-10-15' },
    { url: 'https://logo-foot.com/gallery/country/germany', priority: '0.7', changefreq: 'monthly', lastmod: '2024-10-15' },
    { url: 'https://logo-foot.com/gallery/country/netherlands', priority: '0.6', changefreq: 'monthly', lastmod: '2024-10-15' },
    { url: 'https://logo-foot.com/gallery/country/portugal', priority: '0.6', changefreq: 'monthly', lastmod: '2024-10-15' },
    { url: 'https://logo-foot.com/gallery/country/belgium', priority: '0.6', changefreq: 'monthly', lastmod: '2024-10-15' },
  ];
  
  // Ajouter les pages statiques
  for (const page of staticPages) {
    xml += '  <url>\n';
    xml += `    <loc>${page.url}</loc>\n`;
    
    if (includeLastmod) {
      xml += `    <lastmod>${page.lastmod}</lastmod>\n`;
    }
    
    xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
    
    if (includePriority) {
      xml += `    <priority>${page.priority}</priority>\n`;
    }
    
    if (includeHreflang) {
      xml += `    <xhtml:link rel="alternate" hrefLang="fr" href="${page.url}" />\n`;
      
      // Ajouter d'autres langues pour les pages principales
      if (page.url === 'https://logo-foot.com/' || page.url === 'https://logo-foot.com/blog') {
        xml += `    <xhtml:link rel="alternate" hrefLang="en" href="${page.url.replace('.com', '.com/en')}" />\n`;
        xml += `    <xhtml:link rel="alternate" hrefLang="x-default" href="${page.url}" />\n`;
      }
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
    
    if (priorityCalculation) {
      const postAge = new Date().getTime() - new Date(post.date).getTime();
      const isRecent = postAge < 30 * 24 * 60 * 60 * 1000;
      
      if (isRecent) {
        priority = '0.8';
        changefreq = 'weekly';
      }
      
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
    }
    
    xml += '  <url>\n';
    xml += `    <loc>${postUrl}</loc>\n`;
    
    if (includeLastmod) {
      xml += `    <lastmod>${postDate}</lastmod>\n`;
    }
    
    xml += `    <changefreq>${changefreq}</changefreq>\n`;
    
    if (includePriority) {
      xml += `    <priority>${priority}</priority>\n`;
    }
    
    if (includeHreflang) {
      xml += `    <xhtml:link rel="alternate" hrefLang="fr" href="${postUrl}" />\n`;
      xml += `    <xhtml:link rel="alternate" hrefLang="x-default" href="${postUrl}" />\n`;
    }
    
    if (includeImages) {
      xml += '    <image:image>\n';
      xml += `      <image:loc>${imageUrl}</image:loc>\n`;
      xml += `      <image:title>${post.title.split(':')[0].trim()}</image:title>\n`;
      if (post.excerpt) {
        xml += `      <image:caption>${post.excerpt.substring(0, 100)}...</image:caption>\n`;
      }
      xml += '    </image:image>\n';
    }
    
    if (includeNewsTag && isPostRecent(post.date, 2)) {
      xml += '    <news:news>\n';
      xml += '      <news:publication>\n';
      xml += '        <news:name>Logo Foot</news:name>\n';
      xml += '        <news:language>fr</news:language>\n';
      xml += '      </news:publication>\n';
      xml += `      <news:publication_date>${formatDateForNews(post.date)}</news:publication_date>\n`;
      xml += `      <news:title>${post.title}</news:title>\n`;
      xml += '    </news:news>\n';
    }
    
    xml += '  </url>\n';
  }
  
  xml += '</urlset>';
  
  if (compressOutput) {
    xml = xml.replace(/>\s+</g, '><').trim();
  }
  
  return xml;
};

// Fonction utilitaire pour vérifier si un post est récent (pour news tag)
const isPostRecent = (dateString: string, days: number = 2): boolean => {
  const postDate = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - postDate.getTime());
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays <= days;
};

// Format de date pour News sitemap
const formatDateForNews = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toISOString();
};

// Nouvelle fonction pour générer des sitemaps spécialisés
export const generateSpecializedSitemap = (type: 'main' | 'clubs' | 'competitions' | 'countries' | 'categories') => {
  const today = new Date().toISOString().split('T')[0];
  
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"\n';
  xml += '        xmlns:xhtml="http://www.w3.org/1999/xhtml"\n';
  xml += '        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';
  
  switch (type) {
    case 'main':
      xml += generateMainPages(today);
      break;
    case 'clubs':
      xml += generateClubPages(today);
      break;
    case 'competitions':
      xml += generateCompetitionPages(today);
      break;
    case 'countries':
      xml += generateCountryPages(today);
      break;
    case 'categories':
      xml += generateCategoryPages(today);
      break;
  }
  
  xml += '</urlset>';
  return xml;
};

// Fonctions utilitaires pour générer chaque type de sitemap
const generateMainPages = (today: string) => {
  return `  <url>
    <loc>https://logo-foot.com/</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
    <xhtml:link rel="alternate" hrefLang="fr" href="https://logo-foot.com/" />
    <xhtml:link rel="alternate" hrefLang="x-default" href="https://logo-foot.com/" />
  </url>
  <url>
    <loc>https://logo-foot.com/blog</loc>
    <lastmod>${today}</lastmod>
    <changefreq>daily</changefreq>
    <priority>0.8</priority>
    <xhtml:link rel="alternate" hrefLang="fr" href="https://logo-foot.com/blog" />
  </url>
  <url>
    <loc>https://logo-foot.com/gallery</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>
`;
};

const generateClubPages = (today: string) => {
  // Récupérer les articles de clubs majeurs
  const majorClubs = blogPosts.filter(post => 
    post.title.toLowerCase().includes('real madrid') ||
    post.title.toLowerCase().includes('barcelone') ||
    post.title.toLowerCase().includes('psg') ||
    post.title.toLowerCase().includes('marseille') ||
    post.title.toLowerCase().includes('juventus') ||
    post.title.toLowerCase().includes('manchester') ||
    post.title.toLowerCase().includes('bayern') ||
    post.title.toLowerCase().includes('liverpool') ||
    post.title.toLowerCase().includes('arsenal')
  ).slice(0, 20); // Limiter à 20 clubs majeurs
  
  return majorClubs.map(post => `  <url>
    <loc>https://logo-foot.com/blog/${post.id}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hrefLang="fr" href="https://logo-foot.com/blog/${post.id}" />
    <image:image>
      <image:loc>https://logo-foot.com/blog-images/${post.id}.png</image:loc>
      <image:title>${post.title.split(':')[0].trim()}</image:title>
    </image:image>
  </url>`).join('\n');
};

const generateCompetitionPages = (today: string) => {
  const competitions = blogPosts.filter(post => 
    post.category === 'competition-logos' ||
    post.title.toLowerCase().includes('champions league') ||
    post.title.toLowerCase().includes('europa league') ||
    post.title.toLowerCase().includes('coupe du monde')
  ).slice(0, 15);
  
  return competitions.map(post => `  <url>
    <loc>https://logo-foot.com/blog/${post.id}</loc>
    <lastmod>${post.date}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hrefLang="fr" href="https://logo-foot.com/blog/${post.id}" />
  </url>`).join('\n');
};

const generateCountryPages = (today: string) => {
  const countries = ['france', 'england', 'spain', 'italy', 'germany', 'netherlands', 'portugal', 'belgium'];
  
  return countries.map(country => `  <url>
    <loc>https://logo-foot.com/gallery/country/${country}</loc>
    <lastmod>2024-10-15</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hrefLang="fr" href="https://logo-foot.com/gallery/country/${country}" />
    <image:image>
      <image:loc>https://logo-foot.com/country-images/${country}.png</image:loc>
      <image:title>Logos des clubs ${country === 'france' ? 'français' : country === 'england' ? 'anglais' : country === 'spain' ? 'espagnols' : country}</image:title>
    </image:image>
  </url>`).join('\n');
};

const generateCategoryPages = (today: string) => {
  const categories = [
    { name: 'logos', priority: '0.8' },
    { name: 'history', priority: '0.7' },
    { name: 'technical', priority: '0.7' },
    { name: 'analysis', priority: '0.7' },
    { name: 'competition-logos', priority: '0.8' },
    { name: 'pixel-art', priority: '0.6' }
  ];
  
  return categories.map(cat => `  <url>
    <loc>https://logo-foot.com/blog/category/${cat.name}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${cat.priority}</priority>
    <xhtml:link rel="alternate" hrefLang="fr" href="https://logo-foot.com/blog/category/${cat.name}" />
  </url>`).join('\n');
};
