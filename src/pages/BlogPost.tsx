
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { format } from 'date-fns';
import { Clock, Download, ArrowRight, BookOpen, Calendar, Tag, Share2, Home, ChevronRight, ExternalLink, Check } from 'lucide-react';
import { blogPosts } from '../data/blog';
import BlogSchemaMarkup from '../components/BlogSchemaMarkup';
import Breadcrumbs from '../components/Breadcrumbs';
import { useReadingTime } from '../hooks/useReadingTime';
import { BLOG_CATEGORIES } from '../types/blog';
import BlogImage from '../components/blog/BlogImage';
import FloatingCTA from '../components/blog/FloatingCTA';
import ReactMarkdown from 'react-markdown';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Card } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';
import RelatedPosts from '../components/blog/RelatedPosts';
import CanonicalTag from '../components/SEO/CanonicalTag';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === Number(id));
  const currentYear = new Date().getFullYear();
  
  // Barre de progression
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // État de la position de défilement pour les animations conditionnelles
  const [scrollPosition, setScrollPosition] = useState(0);
  
  // Gestion du scroll pour la barre de progression et la position
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
      setScrollPosition(window.scrollY);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Animation d'entrée pour le contenu
  useEffect(() => {
    const article = document.querySelector('article');
    if (article) {
      article.classList.add('fade-in');
    }
  }, []);

  // State for button hover
  const [isButtonHovered, setIsButtonHovered] = useState(false);
  
  // Fonction pour partager l'article
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: post?.title || 'Article de blog Logo Foot',
        text: post?.excerpt || 'Article intéressant sur les logos de football',
        url: window.location.href,
      })
      .then(() => {
        console.log('Partage réussi');
      })
      .catch(error => {
        console.error('Erreur lors du partage:', error);
        copyToClipboard();
      });
    } else {
      copyToClipboard();
    }
  };
  
  // Copier l'URL dans le presse-papier
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href).then(
      () => {
        toast({
          title: "URL copiée",
          description: "L'URL de cet article a été copiée dans votre presse-papier.",
          duration: 3000,
        });
      },
      () => {
        toast({
          title: "Échec de la copie",
          description: "Impossible de copier l'URL dans le presse-papier.",
          variant: "destructive",
          duration: 3000,
        });
      }
    );
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-purple-50/30">
        <div className="container mx-auto py-12 px-4">
          <Helmet>
            <title>Article Non Trouvé | Blog Logo Foot</title>
            <meta 
              name="description" 
              content="La page que vous recherchez n'existe pas ou a été déplacée. Découvrez nos autres articles sur l'histoire des logos de football." 
            />
            <meta name="robots" content="noindex, follow" />
          </Helmet>
          <CanonicalTag />
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
  
  // Extract the main subject from the title
  const mainSubject = post.title.split(' : ')[0].toLowerCase();
  
  // SEO Optimizations - Enhanced for all the keywords
  const subCategory = post.subCategory ? BLOG_CATEGORIES[post.category].subCategories.find(sc => sc.id === post.subCategory)?.name : '';
  const keywordsFromTitle = post.title.toLowerCase().split(/[\s:,-]+/).filter(word => word.length > 3);
  
  const metaTitle = `${post.title} | Guide Expert Logo Foot ${currentYear}`;
  
  // Enhanced meta description with more keywords
  const metaDescription = `${post.excerpt} Guide complet sur ${mainSubject} mis à jour en ${currentYear}. Histoire, analyse et évolution du ${post.keywords?.split(',')[0] || mainSubject}. Tout savoir sur les logos, écussons et emblèmes du football.`;
  
  // Enhanced keywords with current year
  const enhancedKeywords = `${post.keywords}, logo foot ${currentYear}, logos football ${currentYear}, écusson foot, design football, football professionnel, football ${mainSubject}, logo ${mainSubject}, écusson ${mainSubject}`;
  
  // Define OG image URL - use default image if no galleryImageId
  const ogImageUrl = post.galleryImageId 
    ? `https://logo-foot.com/blog-images/${post.id}.png` 
    : 'https://logo-foot.com/og-image.png';

  const postUrl = `https://logo-foot.com/blog/${post.id}`;

  // Enhanced structured data with more detailed information
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
    "articleSection": categoryInfo.name + (subCategory ? ` - ${subCategory}` : ''),
    "wordCount": post.content.split(' ').length.toString()
  };

  const markdownComponents = {
    // Reduced spacing for paragraphs
    p: ({children}: {children: React.ReactNode}) => (
      <p className="text-gray-700 leading-7 mb-3 text-base md:text-lg">{children}</p>
    ),
    // Reduced spacing for headings
    h1: ({children}: {children: React.ReactNode}) => (
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6 mb-3 leading-tight pl-0 md:pl-2 pb-1 border-b border-gray-200">
        {children}
      </h1>
    ),
    h2: ({children}: {children: React.ReactNode}) => (
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-6 mb-3 leading-tight border-l-2 border-gray-300 pl-3 py-1">
        {children}
      </h2>
    ),
    h3: ({children}: {children: React.ReactNode}) => (
      <h3 className="text-xl md:text-2xl font-bold text-gray-800 mt-5 mb-2 leading-tight">
        {children}
      </h3>
    ),
    h4: ({children}: {children: React.ReactNode}) => (
      <h4 className="text-lg md:text-xl font-semibold text-gray-800 mt-4 mb-2">
        {children}
      </h4>
    ),
    // Improved styling for links with better hover effects
    a: ({href, children}: {href: string; children: React.ReactNode}) => (
      <Link to={href} className="text-purple-600 hover:text-purple-800 underline decoration-2 underline-offset-2 transition-colors duration-200">
        {children}
      </Link>
    ),
    // Enhanced styling for lists with better spacing and bullets
    ul: ({children}: {children: React.ReactNode}) => (
      <ul className="list-disc pl-6 mb-3 text-gray-700 space-y-1 ml-3 marker:text-gray-400">{children}</ul>
    ),
    ol: ({children}: {children: React.ReactNode}) => (
      <ol className="list-decimal pl-6 mb-3 text-gray-700 space-y-1 ml-3 marker:text-gray-400">{children}</ol>
    ),
    li: ({children}: {children: React.ReactNode}) => (
      <li className="mb-1 pl-1">{children}</li>
    ),
    // Enhanced styling for blockquotes with more distinct design
    blockquote: ({children}: {children: React.ReactNode}) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 py-1 italic my-4 text-gray-600 bg-gray-50/30 rounded-r">{children}</blockquote>
    ),
    // Better styling for code blocks
    code: ({children}: {children: React.ReactNode}) => (
      <code className="bg-gray-100 rounded px-1.5 py-0.5 text-sm font-mono text-gray-700">{children}</code>
    ),
    // Add styling for horizontal rules
    hr: () => (
      <hr className="my-6 border-t border-gray-200" />
    ),
    // Better table styling
    table: ({children}: {children: React.ReactNode}) => (
      <div className="overflow-x-auto mb-6 rounded-lg border border-gray-200 shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">{children}</table>
      </div>
    ),
    thead: ({children}: {children: React.ReactNode}) => (
      <thead className="bg-gray-50">{children}</thead>
    ),
    tbody: ({children}: {children: React.ReactNode}) => (
      <tbody className="divide-y divide-gray-200 bg-white">{children}</tbody>
    ),
    tr: ({children}: {children: React.ReactNode}) => (
      <tr>{children}</tr>
    ),
    th: ({children}: {children: React.ReactNode}) => (
      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{children}</th>
    ),
    td: ({children}: {children: React.ReactNode}) => (
      <td className="px-4 py-3 text-sm text-gray-700">{children}</td>
    ),
  };

  const getDefaultImageSrc = (category: string) => {
    const categoryMap = {
      'logos': '/blog-images/default-logos.png',
      'history': '/blog-images/default-history.png',
      'technical': '/blog-images/default-technical.png',
      'analysis': '/blog-images/default-analysis.png'
    };
    
    return categoryMap[category] || '/blog-images/default.png';
  };
  
  // URL canonique pour cet article spécifique
  const canonicalUrl = `https://logo-foot.com/blog/${post.id}`;
  
  // Détecter si l'utilisateur a défilé suffisamment pour afficher les CTA renforcés
  const hasScrolledEnough = scrollPosition > 1000;
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30 relative">
      {/* Barre de progression verticale améliorée sur le côté droit */}
      <div className="fixed right-0 top-0 h-full w-1 z-50 flex items-center">
        <div className="h-full w-1 relative overflow-hidden rounded-full shadow-lg">
          <div className="absolute inset-0 bg-white/30 backdrop-blur-md"></div>
          <Progress 
            value={scrollProgress} 
            className="h-full w-1" 
            orientation="vertical" 
          />
          <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-white/40 to-transparent"></div>
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white/40 to-transparent"></div>
        </div>
      </div>

      <CanonicalTag url={canonicalUrl} isDefault={true} />
      
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        
        {/* Open Graph / Facebook - Enhanced for better social sharing */}
        <meta property="og:type" content="article" />
        <meta property="og:url" content={postUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={ogImageUrl} />
        <meta property="og:site_name" content="Logo Foot" />
        <meta property="article:published_time" content={formattedDate} />
        <meta property="article:modified_time" content={formattedDate} />
        <meta property="article:section" content={categoryInfo.name} />
        {post.keywords?.split(',').slice(0, 5).map((keyword, index) => (
          <meta key={index} property="article:tag" content={keyword.trim()} />
        ))}
        
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
        
        {/* Données structurées */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      </Helmet>
      <BlogSchemaMarkup post={post} />
      <FloatingCTA />
      
      <div className="container mx-auto py-3 md:py-5 px-3">
        {/* Breadcrumbs améliorées avec lien d'accueil */}
        <nav className="flex items-center text-sm mb-4 bg-white/70 backdrop-blur-sm py-2 px-4 rounded-full shadow-sm">
          <Link to="/" className="text-purple-600 hover:text-purple-800 transition-colors flex items-center gap-1 font-medium">
            <Home className="h-3.5 w-3.5" />
            <span>Accueil</span>
          </Link>
          <ChevronRight className="h-3.5 w-3.5 mx-2 text-gray-400" />
          <Link to="/blog" className="text-gray-600 hover:text-purple-800 transition-colors">
            Blog
          </Link>
          <ChevronRight className="h-3.5 w-3.5 mx-2 text-gray-400" />
          <span className="text-gray-800 font-medium truncate">{post.title.split(':')[0]}</span>
        </nav>
        
        <div className="flex flex-col lg:flex-row gap-6 max-w-7xl mx-auto">
          {/* Colonne principale */}
          <div className="lg:w-2/3">
            {/* Info Card plus compact */}
            <div className="mb-4">
              <Card className="bg-white/80 backdrop-blur-sm p-1.5 shadow-sm">
                <div className="flex flex-wrap items-center justify-between gap-2 text-xs p-2">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-3.5 w-3.5 text-gray-500" />
                    <time 
                      className="text-black"
                      dateTime={format(new Date(post.date), 'yyyy-MM-dd')}
                    >
                      {format(new Date(post.date), 'dd MMMM yyyy')}
                    </time>
                  </div>
                  
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="h-3.5 w-3.5 text-gray-500" />
                    <span className="text-black">{post.content.length > 0 ? `${post.content.length / 1000 | 0} min de lecture` : ''}</span>
                  </div>
                  
                  <div className="flex items-center gap-1.5">
                    <Tag className="h-3.5 w-3.5 text-gray-500" />
                    <span className="font-medium text-black">
                      {BLOG_CATEGORIES[post.category]?.name || post.category}
                    </span>
                  </div>
                  
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="p-1 h-auto text-gray-500 hover:text-purple-600"
                    onClick={handleShare}
                  >
                    <div className="flex items-center gap-1.5">
                      <Share2 className="h-3.5 w-3.5" />
                      <span className="text-xs">Partager</span>
                    </div>
                  </Button>
                </div>
              </Card>
            </div>
            
            <article className="bg-white shadow-md rounded-xl p-3 md:p-5 transition-all duration-300">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 leading-tight text-gray-900" itemProp="headline">
                {post.title}
              </h1>
              
              {post.excerpt && (
                <div className="mb-4 text-base md:text-lg text-gray-600 font-light italic border-l-4 border-purple-200 pl-3 py-1">
                  {post.excerpt}
                </div>
              )}
              
              {post.galleryImageId ? (
                <BlogImage
                  src={`/blog-images/${post.id}.png`}
                  alt={`${post.title.split(':')[0]}`}
                  className="mb-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                />
              ) : (
                <BlogImage
                  src={getDefaultImageSrc(post.category)}
                  alt={`${post.title.split(':')[0]}`}
                  className="mb-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  isDefault={true}
                />
              )}
              
              {/* Bouton CTA supérieur - plus visible après défilement */}
              {hasScrolledEnough && (
                <div className="my-6 bg-purple-50 border border-purple-100 rounded-lg p-4 shadow-sm">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div>
                      <h3 className="font-bold text-purple-900 mb-1">Accédez à notre pack complet</h3>
                      <p className="text-sm text-purple-700">8600+ logos de football en haute qualité</p>
                    </div>
                    <Button 
                      asChild 
                      className="bg-purple-600 hover:bg-purple-700 shadow-sm px-4 py-2 w-full sm:w-auto animate-pulse"
                    >
                      <Link to="/" className="flex items-center justify-center gap-1.5">
                        <Download className="h-4 w-4" />
                        <span>Télécharger maintenant</span>
                      </Link>
                    </Button>
                  </div>
                </div>
              )}
              
              {/* Note: BlogCTA component has been removed as requested */}
              
              <div className="prose prose-gray lg:prose-lg mx-auto relative" itemProp="articleBody">
                <ReactMarkdown components={markdownComponents}>
                  {post.content}
                </ReactMarkdown>
              </div>
              
              {/* CTA de fin d'article amélioré */}
              <div className="mt-8 mb-2 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl p-5 border border-purple-100 shadow-sm">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">Vous avez aimé cet article ?</h3>
                    <p className="text-gray-600">Découvrez notre pack complet de <strong>8600+ logos de football</strong> en haute qualité</p>
                  </div>
                  <Button 
                    asChild 
                    className="bg-purple-600 hover:bg-purple-700 shadow-md px-5 py-2.5 w-full md:w-auto"
                  >
                    <Link to="/" className="flex items-center justify-center gap-2">
                      <Download className="h-5 w-5" />
                      <span>Télécharger tous les logos</span>
                    </Link>
                  </Button>
                </div>
              </div>
              
              {/* Partage et retour */}
              <div className="flex flex-wrap items-center justify-between gap-3 mt-6 pt-4 border-t border-gray-100">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="text-gray-600"
                  onClick={handleShare}
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Partager cet article
                </Button>
                
                <Link 
                  to="/blog" 
                  className="text-sm text-purple-600 hover:text-purple-800 transition-colors flex items-center gap-1.5"
                >
                  <span>Retour au blog</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </article>
            
            {/* Ajout du composant RelatedPosts pour améliorer le maillage interne */}
            <div className="mt-6 bg-white shadow-md rounded-xl p-3 md:p-5">
              <RelatedPosts currentPost={post} allPosts={blogPosts} maxPosts={3} />
            </div>
          </div>
          
          {/* Colonne latérale */}
          <div className="lg:w-1/3 space-y-6">
            {/* Encart "Télécharger maintenant" */}
            <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-5 sticky top-24">
              <h3 className="font-bold text-lg text-gray-800 mb-3 flex items-center gap-2">
                <Download className="h-5 w-5 text-purple-600" />
                Téléchargement express
              </h3>
              
              <div className="bg-purple-50 rounded-lg p-4 mb-4">
                <h4 className="font-bold text-purple-900 mb-2 text-lg">⦗FRONT-CLOUD⦘~ Football.zip</h4>
                <ul className="space-y-2 mb-4">
                  <li className="flex items-start gap-2">
                    <div className="mt-0.5 flex-shrink-0">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-700">8600+ logos en haute qualité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-0.5 flex-shrink-0">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-700">Format PNG transparent</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="mt-0.5 flex-shrink-0">
                      <Check className="h-4 w-4 text-green-600" />
                    </div>
                    <span className="text-sm text-gray-700">Livraison instantanée</span>
                  </li>
                </ul>
                
                {/* Prix avec réduction */}
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-gray-400 line-through text-sm">49.90€</span>
                  <span className="text-xl font-bold text-purple-600">29.90€</span>
                  <span className="bg-purple-200 text-purple-800 text-xs px-2 py-0.5 rounded">-40%</span>
                </div>
                
                <Button 
                  asChild 
                  className="w-full bg-purple-600 hover:bg-purple-700"
                >
                  <Link to="/" className="flex items-center justify-center gap-1.5">
                    <Download className="h-4 w-4" />
                    <span>Télécharger maintenant</span>
                  </Link>
                </Button>
                
                <div className="mt-3 text-center">
                  <Link 
                    to="/" 
                    className="text-xs text-purple-700 hover:text-purple-800 transition-colors flex items-center justify-center gap-1"
                  >
                    <span>Voir tous les détails</span>
                    <ExternalLink className="h-3 w-3" />
                  </Link>
                </div>
              </div>
              
              {/* Articles populaires */}
              
            </div>
          </div>
        </div>
        
        {/* Adding extra padding at the bottom to ensure content isn't hidden by the FloatingCTA */}
        <div className="h-24 md:h-28 w-full"></div>
      </div>
    </div>
  );
};

export default BlogPost;

