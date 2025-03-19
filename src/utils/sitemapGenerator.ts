
import { blogPosts } from "../data/blog";

export const generateSitemap = () => {
  const baseUrl = 'https://logo-foot.com';
  const today = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '/', priority: '1.0', lastmod: today, changefreq: 'weekly' },
    { url: '/blog', priority: '0.8', lastmod: today, changefreq: 'daily' },
  ];

  // Inclure tous les articles de blog
  const blogUrls = blogPosts.map(post => ({
    url: `/blog/${post.id}`,
    priority: '0.7',
    lastmod: post.date,
    changefreq: 'monthly'
  }));

  // Articles mis en avant avec priorité plus élevée
  const featuredArticles = blogPosts
    .filter(post => 
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
      post.title.toLowerCase().includes('stade brestois') ||
      post.title.toLowerCase().includes('reims') ||
      post.title.toLowerCase().includes('stade de reims') ||
      post.title.toLowerCase().includes('fc nantes') ||
      post.title.toLowerCase().includes('nantes') ||
      post.title.toLowerCase().includes('nice') ||
      post.title.toLowerCase().includes('ogc nice') ||
      post.title.toLowerCase().includes('ol') ||
      post.title.toLowerCase().includes('olympique lyonnais') ||
      post.title.toLowerCase().includes('lyon') ||
      post.title.toLowerCase().includes('dortmund') ||
      post.title.toLowerCase().includes('borussia dortmund') ||
      post.title.toLowerCase().includes('bvb') ||
      post.title.toLowerCase().includes('juventus') ||
      post.title.toLowerCase().includes('juve') ||
      post.title.toLowerCase().includes('inter milan') ||
      post.title.toLowerCase().includes('inter fc') ||
      post.title.toLowerCase().includes('fc inter')
    )
    .map(post => ({
      url: `/blog/${post.id}`,
      priority: '0.8',
      lastmod: post.date,
      changefreq: 'weekly'
    }));

  // Ajouter les pages de catégories
  const categoryPages = [
    { url: '/blog/category/logos', priority: '0.8', lastmod: today, changefreq: 'weekly' },
    { url: '/blog/category/technical', priority: '0.7', lastmod: today, changefreq: 'weekly' },
    { url: '/blog/category/history', priority: '0.7', lastmod: today, changefreq: 'weekly' },
    { url: '/blog/category/analysis', priority: '0.7', lastmod: today, changefreq: 'weekly' },
  ];

  // Ajouter les pages pour les pays
  const countryPages = [
    { url: '/gallery/country/france', priority: '0.6', lastmod: today, changefreq: 'monthly' },
    { url: '/gallery/country/england', priority: '0.6', lastmod: today, changefreq: 'monthly' },
    { url: '/gallery/country/spain', priority: '0.6', lastmod: today, changefreq: 'monthly' },
    { url: '/gallery/country/italy', priority: '0.6', lastmod: today, changefreq: 'monthly' },
    { url: '/gallery/country/germany', priority: '0.6', lastmod: today, changefreq: 'monthly' },
    { url: '/gallery/country/portugal', priority: '0.6', lastmod: today, changefreq: 'monthly' },
    { url: '/gallery/country/netherlands', priority: '0.6', lastmod: today, changefreq: 'monthly' },
    { url: '/gallery/country/argentina', priority: '0.6', lastmod: today, changefreq: 'monthly' },
  ];

  // Créer une Map pour éviter les doublons d'URLs
  const urlMap = new Map();
  
  // Ajouter tous les URLs dans la Map, en privilégiant les articles mis en avant
  [...staticPages, ...categoryPages, ...countryPages].forEach(page => {
    urlMap.set(page.url, page);
  });
  
  // Ajouter les articles mis en avant (ils peuvent remplacer les versions standards)
  featuredArticles.forEach(page => {
    urlMap.set(page.url, page);
  });
  
  // Ajouter les articles standards uniquement s'ils n'ont pas été remplacés par des featured
  blogUrls.forEach(page => {
    if (!urlMap.has(page.url)) {
      urlMap.set(page.url, page);
    }
  });

  // Convertir la Map en tableau
  const allUrls = Array.from(urlMap.values());

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemapXml;
};
