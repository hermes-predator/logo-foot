
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blog';
import { useReadingTime } from '../hooks/useReadingTime';
import { extractPostIdFromUrl, generatePostUrl } from '../utils/slugUtils';
import ReactMarkdown from 'react-markdown';
import Footer from '../components/Footer';
import { BookOpen, Calendar, Tag, Image } from 'lucide-react';
import RelatedPosts from '../components/blog/RelatedPosts';
import BlogSchemaMarkup from '../components/BlogSchemaMarkup';
import BlogHeader from '../components/blog/BlogHeader';
import PageTransition from "@/components/ui/page-transition";
import { BLOG_CATEGORIES } from '../types/blog';
import BlogImage from '../components/blog/BlogImage';
import { ImageObjectSchema } from '../components/schema/ImageObjectSchema';
import CanonicalTag from '../components/SEO/CanonicalTag';
import FloatingCTA from '../components/blog/FloatingCTA';
import { LazySection } from '@/components/ui/lazy-section';
import { prefetchCriticalResources } from '@/lib/core-web-vitals';
import { measurePerformance } from '@/lib/performance';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [isClient, setIsClient] = useState(false);
  const [mainImage, setMainImage] = useState<string | null>(null);
  const [imageFormat, setImageFormat] = useState<string>('webp');
  
  // Précharger les ressources critiques dès que possible
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Préchargement des ressources critiques pour la page
      measurePerformance('preload-critical', () => {
        prefetchCriticalResources();
      });
    }
  }, []);
  
  useEffect(() => {
    setIsClient(true);
    
    // Vérifier si l'image en .png existe
    if (typeof window !== 'undefined') {
      const checkImageExistence = async (id: string) => {
        try {
          const pngResponse = await fetch(`/images/gallery/${id}.png`, { method: 'HEAD' });
          if (pngResponse.ok) {
            setImageFormat('png');
            return;
          }
          
          const webpResponse = await fetch(`/images/gallery/${id}.webp`, { method: 'HEAD' });
          if (webpResponse.ok) {
            setImageFormat('webp');
          }
        } catch (error) {
          console.error('Erreur lors de la vérification de l\'image:', error);
        }
      };
      
      const postId = slug ? extractPostIdFromUrl(slug) : null;
      const post = postId ? blogPosts.find(post => post.id === postId) : null;
      
      if (post?.galleryImageId) {
        checkImageExistence(post.galleryImageId.toString());
      }
    }
  }, [slug]);
  
  useEffect(() => {
    setIsClient(true);
  }, []);
  
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [slug]);
  
  // Extraire l'ID depuis l'URL
  const postId = slug ? extractPostIdFromUrl(slug) : null;
  
  // Trouver l'article correspondant
  const post = postId ? blogPosts.find(post => post.id === postId) : null;
  
  // Pour le temps de lecture
  const readingTime = post ? useReadingTime(post.content) : 0;
  
  // Vérifier si l'URL est canonique, sinon rediriger
  useEffect(() => {
    if (isClient && slug && post) {
      const canonicalUrl = generatePostUrl(post.id, post.title);
      const currentPath = `/blog/${slug}`;
      
      // Log pour débogage
      console.debug('URL actuelle:', currentPath);
      console.debug('URL canonique:', canonicalUrl);
      
      // Rediriger vers l'URL canonique si différente
      if (canonicalUrl !== currentPath) {
        console.debug('Redirection vers URL canonique');
        navigate(canonicalUrl, { replace: true });
      }
    }
  }, [post, navigate, isClient, slug]);
  
  // Rediriger vers 404 si l'article n'existe pas
  useEffect(() => {
    if (isClient && slug && !post) {
      console.error(`Article non trouvé avec l'ID: ${postId}`);
      navigate('/not-found', { replace: true });
    }
  }, [post, navigate, isClient, slug, postId]);

  // Extraire la première image de l'article pour Google Images
  useEffect(() => {
    if (post?.content) {
      // Recherche d'URLs d'images dans le contenu markdown
      const imgRegex = /!\[.*?\]\((.*?)\)/;
      const match = post.content.match(imgRegex);
      if (match && match[1]) {
        setMainImage(match[1]);
      }
    }
  }, [post]);
  
  // Extraction des mots-clés principaux pour optimisation des titres
  const extractMainKeywords = (keywords?: string) => {
    if (!keywords) return [];
    return keywords.split(',').slice(0, 5).map(k => k.trim());
  };
  
  const mainKeywords = post ? extractMainKeywords(post.keywords) : [];
  
  // Si article non trouvé et client-side, afficher nothing (la redirection s'en occupera)
  if (!post && isClient) {
    return null;
  }
  
  // Pour le rendu côté serveur ou si le post n'est pas encore chargé
  if (!post) {
    return <div className="min-h-screen flex items-center justify-center">Chargement...</div>;
  }
  
  // Préparation du titre pour SEO
  const seoTitle = `${post.title} | Logo Foot`;

  // Création d'une image principale pour Google Images
  const featuredImageUrl = post.galleryImageId 
    ? `/images/gallery/${post.galleryImageId}.${imageFormat}` 
    : mainImage || "/og-image.png";
    
  // Définir l'URL canonique pour l'article
  const canonicalUrl = post.id ? `https://logo-foot.com${generatePostUrl(post.id, post.title)}` : undefined;

  return (
    <PageTransition>
      <div className="bg-gray-50">
        <Helmet>
          <title>{seoTitle}</title>
          <meta name="description" content={post.excerpt} />
          <meta name="keywords" content={post.keywords} />
          <meta property="og:title" content={seoTitle} />
          <meta property="og:description" content={post.excerpt} />
          <meta property="og:type" content="article" />
          <meta property="og:url" content={window.location.href} />
          <meta property="og:image" content={featuredImageUrl} />
          <meta property="og:site_name" content="Logo Foot" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={seoTitle} />
          <meta name="twitter:description" content={post.excerpt} />
          <meta name="twitter:image" content={featuredImageUrl} />
          
          {/* Métadonnées améliorées pour Google Images */}
          <meta name="image" content={featuredImageUrl} />
          <meta itemProp="image" content={featuredImageUrl} />
          
          {/* Preloading pour l'image principale */}
          <link rel="preload" href={featuredImageUrl} as="image" />
          
          {/* Preloading des polices essentielles */}
          <link rel="preload" href="/fonts/inter.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        </Helmet>
        
        {/* Tag canonique explicite */}
        <CanonicalTag url={canonicalUrl} isDefault={true} />
        
        {/* Schema.org pour les images */}
        {mainImage && (
          <Helmet>
            <script type="application/ld+json">
              {JSON.stringify(
                ImageObjectSchema({
                  imageUrl: featuredImageUrl,
                  title: post.title,
                  altText: post.excerpt,
                  datePublished: post.date
                })
              )}
            </script>
          </Helmet>
        )}
        
        <BlogSchemaMarkup post={post} />
        
        {/* Header de blog - chargement immédiat car critique */}
        <BlogHeader />
        
        <div className="container mx-auto px-4 py-8">
          <main className="max-w-4xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            {/* Article header - critique, chargé immédiatement */}
            <header className="p-6 md:p-8 border-b border-gray-200">
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                  {BLOG_CATEGORIES[post.category].name}
                </span>
                <time 
                  className="text-gray-500 text-xs flex items-center"
                  dateTime={post.date}
                >
                  <Calendar className="w-3.5 h-3.5 mr-1" />
                  {new Date(post.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
              </div>
              
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>
              
              <p className="text-lg text-gray-600 mb-4">
                {post.excerpt}
              </p>
              
              <div className="flex items-center text-gray-500 text-sm mt-4">
                <div className="flex items-center mr-4">
                  <BookOpen className="w-4 h-4 mr-1" />
                  {readingTime} min de lecture
                </div>
                
                {post.keywords && (
                  <div className="flex items-center">
                    <Tag className="w-4 h-4 mr-1" />
                    {post.keywords.split(',')[0]}
                  </div>
                )}

                {(post.galleryImageId || mainImage) && (
                  <div className="flex items-center ml-4">
                    <Image className="w-4 h-4 mr-1" />
                    Images optimisées
                  </div>
                )}
              </div>
            </header>
            
            {/* Image principale mise en avant pour Google Images - critique, chargée immédiatement */}
            {post.galleryImageId && (
              <div className="px-6 md:px-8 pt-6">
                <BlogImage 
                  src={`/images/gallery/${post.galleryImageId}.${imageFormat}`} 
                  alt={`Image principale: ${post.title}`}
                  priority={true}
                  title={post.title}
                  isDefault={true}
                />
              </div>
            )}
            
            {/* Article content avec style amélioré - Contenu principal, chargé immédiatement */}
            <article className="prose prose-lg max-w-none p-6 md:p-8" itemScope itemType="https://schema.org/Article">
              <ReactMarkdown
                components={{
                  img: ({node, ...props}) => {
                    const { src, alt } = props;
                    return <BlogImage src={src || ''} alt={alt || ''} />;
                  },
                  h1: ({node, ...props}) => (
                    <h1 className="text-3xl font-bold text-gray-900 mt-8 mb-4" itemProp="headline" {...props} />
                  ),
                  h2: ({node, ...props}) => {
                    // Extraction du texte du H2
                    const headingText = props.children?.toString() || '';
                    
                    // Vérifier si ce H2 contient des mots-clés principaux et les mettre en évidence
                    let enhancedText = headingText;
                    mainKeywords.forEach(keyword => {
                      if (headingText.toLowerCase().includes(keyword.toLowerCase()) && keyword.length > 3) {
                        // Ne pas modifier les mots-clés déjà en gras
                        if (!headingText.includes(`**${keyword}**`) && !headingText.includes(`**${keyword.toLowerCase()}**`)) {
                          const regex = new RegExp(`(${keyword})`, 'gi');
                          enhancedText = enhancedText.replace(regex, (match) => `${match}`);
                        }
                      }
                    });
                    
                    // Création d'un ID pour le H2 basé sur le texte (pour les ancres)
                    const headingId = headingText
                      .toLowerCase()
                      .replace(/[^\w\s-]/g, '') // Supprimer les caractères spéciaux
                      .replace(/\s+/g, '-'); // Remplacer les espaces par des tirets
                    
                    return (
                      <h2 
                        id={headingId}
                        className="text-2xl font-bold text-gray-800 mt-6 mb-3" 
                        itemProp="articleSection"
                        {...props}
                      >
                        {props.children}
                      </h2>
                    );
                  },
                  h3: ({node, ...props}) => (
                    <h3 className="text-xl font-bold text-gray-800 mt-5 mb-3" {...props} />
                  ),
                  p: ({node, ...props}) => (
                    <p className="text-gray-700 leading-relaxed mb-4" {...props} />
                  ),
                  ul: ({node, ...props}) => (
                    <ul className="list-disc pl-5 mb-4 text-gray-700" {...props} />
                  ),
                  ol: ({node, ...props}) => (
                    <ol className="list-decimal pl-5 mb-4 text-gray-700" {...props} />
                  ),
                  li: ({node, ...props}) => (
                    <li className="mb-1 text-gray-700" {...props} />
                  ),
                  strong: ({node, ...props}) => (
                    <strong className="font-bold text-gray-900" {...props} />
                  ),
                  blockquote: ({node, ...props}) => (
                    <blockquote className="border-l-4 border-blue-500 pl-4 py-2 italic text-gray-700 my-4" {...props} />
                  ),
                  a: ({node, ...props}) => (
                    <a className="text-blue-600 hover:text-blue-800 hover:underline" {...props} />
                  )
                }}
              >
                {post.content}
              </ReactMarkdown>
              
              {/* Table des matières générée automatiquement (cachée visuellement mais utile pour SEO) */}
              <div className="sr-only" aria-hidden="true">
                <h2>Table des matières</h2>
                <nav aria-label="Table des matières">
                  <ul>
                    {post.content.match(/## (.*?)(?:\n|$)/g)?.map((heading, index) => {
                      const headingText = heading.replace('## ', '').trim();
                      const headingId = headingText
                        .toLowerCase()
                        .replace(/[^\w\s-]/g, '')
                        .replace(/\s+/g, '-');
                      return (
                        <li key={index}>
                          <a href={`#${headingId}`}>{headingText}</a>
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
              
              {/* Métadonnées structurées supplémentaires pour l'article */}
              <meta itemProp="datePublished" content={post.date} />
              <meta itemProp="author" content="Logo Foot" />
              <meta itemProp="keywords" content={post.keywords} />
            </article>
            
            {/* Related posts - Non critique, chargé en lazy */}
            <LazySection height="300px" className="px-6 md:px-8 pb-8">
              <RelatedPosts post={post} allPosts={blogPosts} maxPosts={3} />
            </LazySection>
          </main>
        </div>
        
        {/* Footer - Non critique, chargé en lazy */}
        <LazySection height="200px">
          <Footer />
        </LazySection>
        
        {/* Affichage de la bannière flottante CTA - Non critique, chargé en lazy */}
        <LazySection height="0">
          <FloatingCTA />
        </LazySection>
      </div>
    </PageTransition>
  );
};

export default BlogPost;
