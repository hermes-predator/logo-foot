import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
            <title>Article non trouvé | Logo Foot & Football</title>
            <meta name="description" content="Cet article sur les logos et clubs de foot n'existe pas ou a été déplacé." />
            <meta name="keywords" content="logo foot, logos football, club de foot, clubs de football" />
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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50/30">
      <Helmet>
        <title>{post.title} | Logo Foot & Football</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} | Logo Foot & Football`} />
        <meta property="og:description" content={post.excerpt} />
        <meta name="twitter:title" content={`${post.title} | Logo Foot & Football`} />
        <meta name="twitter:description" content={post.excerpt} />
        <meta name="keywords" content="logo foot, logos football, club de foot, clubs de football, logo club, logos des clubs" />
      </Helmet>
      <BlogSchemaMarkup post={post} />
      
      <div className="container mx-auto py-20 px-4">
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

          <article className="bg-white rounded-xl shadow-sm p-8 md:p-12">
            <time className="text-sm text-gray-500 block mb-4">{post.date}</time>
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
