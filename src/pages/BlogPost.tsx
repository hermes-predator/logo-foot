
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blog';
import { extractPostIdFromUrl } from '../utils/slugUtils';
import NotFound from './NotFound';
import PageTransition from '@/components/ui/page-transition';

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    if (slug) {
      // Extraire l'ID de l'URL
      const postId = extractPostIdFromUrl(slug);
      console.log("Recherche de l'article avec ID:", postId, "depuis le slug:", slug);
      
      if (postId) {
        // Chercher l'article correspondant par son ID
        const foundPost = blogPosts.find(p => p.id === postId);
        
        if (foundPost) {
          console.log("Article trouvé:", foundPost.title);
          setPost(foundPost);
        } else {
          console.error("Article non trouvé avec l'ID:", postId);
        }
      } else {
        console.error("Impossible d'extraire un ID valide du slug:", slug);
      }
      
      setLoading(false);
    }
  }, [slug]);
  
  // Si chargement en cours
  if (loading) {
    return (
      <PageTransition>
        <div className="container mx-auto py-8 min-h-screen">
          <div className="animate-pulse flex flex-col space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
            <div className="h-48 bg-gray-200 rounded"></div>
          </div>
        </div>
      </PageTransition>
    );
  }
  
  // Si article non trouvé
  if (!post) {
    return <NotFound />;
  }
  
  // Afficher l'article
  return (
    <PageTransition>
      <div className="container mx-auto py-8 min-h-screen">
        <article className="prose prose-lg max-w-none">
          <h1>{post.title}</h1>
          <p className="text-gray-600">{post.date}</p>
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </article>
      </div>
    </PageTransition>
  );
};

export default BlogPost;
