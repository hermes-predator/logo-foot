
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { format } from 'date-fns';
import { Clock } from 'lucide-react';
import { blogPosts } from '../data/blog';
import BlogSchemaMarkup from '../components/BlogSchemaMarkup';
import Breadcrumbs from '../components/Breadcrumbs';
import { useReadingTime } from '../hooks/useReadingTime';
import { BLOG_CATEGORIES } from '../types/blog';
import BlogImage from '../components/blog/BlogImage';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === Number(id));
  const currentYear = new Date().getFullYear();

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto py-20 px-4">
          <Helmet>
            <title>Article Non Trouvé | Blog Logo Foot</title>
            <meta 
              name="description" 
              content="La page que vous recherchez n'existe pas ou a été déplacée. Découvrez nos autres articles sur l'histoire des logos de football." 
            />
            <meta name="robots" content="noindex, follow" />
          </Helmet>
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Article non trouvé</h1>
            <Link to="/blog" className="text-purple-600 hover:text-purple-700">
              Retourner à la liste des articles
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const readingTime = useReadingTime(post.content);
  const categoryInfo = BLOG_CATEGORIES[post.category];
  const postDate = new Date(post.date);
  const formattedDate = format(postDate, 'yyyy-MM-dd');
  
  // Extraire le sujet principal de l'article (premier mot du titre généralement)
  const mainSubject = post.title.split(' ')[0].toLowerCase();
  
  // SEO Optimizations
  const metaTitle = `${post.title} | Guide Expert Logo Foot ${currentYear}`;
  const metaDescription = `${post.excerpt} Guide complet et analyse détaillée mis à jour en ${currentYear}. Tout savoir sur les logos, écussons et emblèmes du football.`;
  const enhancedKeywords = `${post.keywords}, logo foot ${currentYear}, logos football ${currentYear}, écusson foot, design football, football professionnel, football ${mainSubject}, logo ${mainSubject}`;
  
  // Définir l'URL de l'image OG
  const ogImageUrl = post.galleryImageId 
    ? `https://logo-foot.com/blog-images/${post.id}.png` 
    : 'https://logo-foot.com/og-image.png';

  const postUrl = `https://logo-foot.com/blog/${post.id}`;

  // Données structurées améliorées
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": postUrl
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": ogImageUrl,
    "author": {
      "@type": "Organization",
      "name": "Logo Foot"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Logo Foot",
      "logo": {
        "@type": "ImageObject",
        "url": "https://logo-foot.com/favicon.ico"
      }
    },
    "datePublished": post.date,
    "dateModified": post.date,
    "keywords": enhancedKeywords,
    "articleSection": categoryInfo.name,
    "wordCount": post.content.split(' ').length.toString()
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:site_name" content="Logo Foot" />
        <meta property="article:published_time" content={formattedDate} />
        <meta property="article:modified_time" content={formattedDate} />
        <meta property="article:section" content={categoryInfo.name} />
        <meta property="article:tag" content={post.keywords} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="twitter:image" content={ogImageUrl} />
        
        {/* Autres métadonnées SEO */}
        <meta name="keywords" content={enhancedKeywords} />
        <meta name="author" content="Logo Foot" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <meta name="language" content="fr-FR" />
        <link rel="canonical" href={postUrl} />
        
        {/* Données structurées */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <BlogSchemaMarkup post={post} />
      
      <div className="container mx-auto py-20 px-4">
        <Breadcrumbs />
        
        <div className="max-w-3xl mx-auto">
          <article className="bg-gradient-to-b from-white to-gray-50/30 rounded-xl shadow-sm p-8 md:p-12">
            <div className="flex items-center gap-4 mb-6">
              <time 
                className="text-xs font-medium text-gray-600 px-2 py-1 rounded-full inline-block border border-gray-200 shadow-sm bg-white"
                dateTime={formattedDate}
              >
                {format(new Date(post.date), 'dd-MM-yyyy')}
              </time>
              <div className="flex items-center gap-1 text-xs text-gray-600">
                <Clock className="h-3.5 w-3.5" />
                <span>{readingTime} min de lecture</span>
              </div>
            </div>
            
            <h1 className="text-4xl font-bold text-gray-800 mb-8" itemProp="headline">{post.title}</h1>
            
            {post.galleryImageId && (
              <BlogImage
                src={`/blog-images/${post.id}.png`}
                alt={`${post.title.split(':')[0]}`}
                className="mb-8"
              />
            )}
            
            <div className="prose prose-purple lg:prose-lg mx-auto" itemProp="articleBody">
              {post.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-600 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
