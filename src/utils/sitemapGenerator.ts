
import { blogPosts } from "../data/blogPosts";

export const generateSitemap = () => {
  const baseUrl = 'https://logo-foot.com';
  const today = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '/', priority: '1.0', lastmod: today },
    { url: '/blog', priority: '0.8', lastmod: today },
  ];

  const blogUrls = blogPosts.map(post => ({
    url: `/blog/${post.id}`,
    priority: '0.6',
    lastmod: post.date
  }));

  const allUrls = [...staticPages, ...blogUrls];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(page => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <priority>${page.priority}</priority>
  </url>`).join('\n')}
</urlset>`;

  return sitemapXml;
};
