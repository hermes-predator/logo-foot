
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

  // Ajouter les pages de catégories
  const categoryPages = [
    { url: '/blog/category/logos', priority: '0.8', lastmod: today, changefreq: 'weekly' },
    { url: '/blog/category/technical', priority: '0.7', lastmod: today, changefreq: 'weekly' },
    { url: '/blog/category/history', priority: '0.7', lastmod: today, changefreq: 'weekly' },
    { url: '/blog/category/analysis', priority: '0.7', lastmod: today, changefreq: 'weekly' },
  ];

  const allUrls = [...staticPages, ...categoryPages, ...blogUrls];

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
