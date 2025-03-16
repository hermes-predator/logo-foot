
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { format } from 'date-fns';
import { blogPosts } from '../data/blogPosts';
import BlogSchemaMarkup from '../components/BlogSchemaMarkup';

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === Number(id));

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

  // Optimisation des meta descriptions avec les mots-clés ciblés
  const metaDescription = `${post.excerpt} Découvrez notre analyse détaillée sur ${post.title.toLowerCase()}. Guide complet et conseils d'experts sur les logos de football, écussons et emblèmes de clubs.`;
  
  // Amélioration des mots-clés avec plus de variations pertinentes
  const enhancedKeywords = `${post.title.toLowerCase()}, ${post.keywords || ''}, logo foot, logos football, écusson foot, emblème club foot, design football`;

  // Titre optimisé pour le SEO
  const seoTitle = `${post.title} | Expert Logo Foot & Football`;

  // Titre optimisé pour les réseaux sociaux
  const socialTitle = `${post.title} | Logo Foot - Guide Expert du Football`;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={socialTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={`https://logo-foot.com/blog/${post.id}`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={socialTitle} />
        <meta name="twitter:description" content={metaDescription} />
        <meta name="keywords" content={enhancedKeywords} />
        <meta name="author" content="Expert Logo Foot" />
        <link rel="canonical" href={`https://logo-foot.com/blog/${post.id}`} />
        <meta property="article:published_time" content={post.date} />
        <meta property="article:modified_time" content={post.date} />
        <meta property="article:section" content="Logos Football" />
        <meta property="article:tag" content="Logo Football" />
        <meta property="og:site_name" content="Logo Foot" />
        <meta property="og:locale" content="fr_FR" />
      </Helmet>
      <BlogSchemaMarkup post={post} />
      
      <div className="container mx-auto py-20 px-4">
        <Link 
          to="/blog"
          className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 group"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M15 19l-7-7 7-7" 
            />
          </svg>
          Retour aux articles
        </Link>

        <div className="max-w-3xl mx-auto">
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 mb-8 group"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M15 19l-7-7 7-7" 
              />
            </svg>
            Retour aux articles
          </Link>

          <article className="bg-gradient-to-b from-white to-gray-50/30 rounded-xl shadow-sm p-8 md:p-12">
            <time className="text-xs font-medium text-gray-600 px-2 py-1 rounded-full inline-block border border-gray-200 shadow-sm bg-white mb-6">
              {format(new Date(post.date), 'dd-MM-yyyy')}
            </time>
            <h1 className="text-4xl font-bold text-gray-800 mb-8">{post.title}</h1>
            <div className="prose prose-purple lg:prose-lg mx-auto">
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
