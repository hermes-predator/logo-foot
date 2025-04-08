
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
  const [post, setPost] = useState(blogPosts.find(item => item.id === Number(id)));
  const [progress, setProgress] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const readingTime = useReadingTime(post?.content || '');
  const [showSuccessToast, setShowSuccessToast] = useState(false);

  useEffect(() => {
    if (id) {
      const foundPost = blogPosts.find(item => item.id === Number(id));
      setPost(foundPost);
    }
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      const maxHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (position / maxHeight) * 100;
      
      setScrollPosition(position);
      setProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!post) {
    return <div className="container mx-auto p-4 text-center">Article non trouvé.</div>;
  }

  const handleCopyLink = () => {
    const url = `${window.location.origin}/blog/${post.id}`;
    navigator.clipboard.writeText(url)
      .then(() => {
        toast({
          title: "Lien copié !",
          description: "L'URL a été copiée dans votre presse-papiers.",
        });
      })
      .catch(err => {
        console.error('Erreur lors de la copie : ', err);
      });
  };

  const handleDownloadButtonClick = () => {
    setShowSuccessToast(true);
    
    setTimeout(() => {
      setShowSuccessToast(false);
    }, 3000);
  };

  // Create excerpt for meta tags from post content if no excerpt exists
  const metaDescription = post.excerpt || post.content.substring(0, 160).trim() + '...';
  
  // Assume galleryImageId is used to determine post image URL
  const imageUrl = post.galleryImageId ? `/blog-images/${post.id}.png` : '/og-image.png';
  
  // Create keywords from category and subCategory if no keywords exist
  const metaKeywords = post.keywords || `${post.category}, ${post.subCategory || ''}`;

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>{post.title} - Logo-Foot</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:type" content="article" />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:section" content={post.category} />
        <meta property="article:tag" content={metaKeywords} />
      </Helmet>
      
      <CanonicalTag url={`/blog/${post.id}`} />
      <BlogSchemaMarkup post={post} />
      
      {/* Progress Bar */}
      <div className="fixed top-16 left-0 right-0 z-30 h-1 bg-gray-200">
        <Progress value={progress} className="h-full rounded-none" />
      </div>
      
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Breadcrumbs */}
        <Breadcrumbs />
        
        <article className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
          {/* Header avec image */}
          <div className="relative h-64 sm:h-80 md:h-96 overflow-hidden">
            <BlogImage 
              src={imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6">
              <div className="text-white">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-blue-600 text-white text-xs font-medium px-2.5 py-0.5 rounded">
                    {typeof BLOG_CATEGORIES[post.category] === 'object' 
                      ? BLOG_CATEGORIES[post.category].name 
                      : post.category}
                  </span>
                </div>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white drop-shadow-sm">
                  {post.title}
                </h1>
              </div>
            </div>
          </div>
          
          {/* Meta Data */}
          <div className="flex flex-wrap justify-between items-center p-4 border-b border-gray-100">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                <time dateTime={post.date}>{format(new Date(post.date), 'dd/MM/yyyy')}</time>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                <span>{readingTime} min de lecture</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 mt-2 sm:mt-0">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={handleCopyLink}
                className="flex items-center gap-1.5 text-xs"
              >
                <Share2 className="h-3.5 w-3.5" />
                <span>Partager</span>
              </Button>
              <Button
                variant="default"
                size="sm"
                onClick={handleDownloadButtonClick}
                className="flex items-center gap-1.5 text-xs bg-blue-600 hover:bg-blue-700"
              >
                <Download className="h-3.5 w-3.5" />
                <span>Télécharger</span>
              </Button>
            </div>
          </div>
          
          {/* Article Content */}
          <div className="prose prose-blue max-w-none p-6 md:p-8">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
          
          {/* Tags */}
          <div className="px-6 pb-6">
            <div className="flex flex-wrap gap-2">
              {post.keywords && post.keywords.split(',').map((tag) => (
                <Link 
                  key={tag.trim()} 
                  to={`/blog?tag=${tag.trim()}`}
                  className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-800 hover:bg-gray-200 transition-colors"
                >
                  <Tag className="h-3.5 w-3.5" />
                  {tag.trim()}
                </Link>
              ))}
            </div>
          </div>
        </article>
        
        {/* Related Posts */}
        <RelatedPosts currentPost={post} allPosts={blogPosts} maxPosts={3} />
        
        {/* Floating CTA */}
        <FloatingCTA />
      </main>
    </div>
  );
};

export default BlogPost;
