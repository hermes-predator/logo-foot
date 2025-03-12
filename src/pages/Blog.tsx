
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BookOpen } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import BlogSchemaMarkup from '../components/BlogSchemaMarkup';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50/30">
      <Helmet>
        <title>Blog Football : Histoire et Évolution des Logos des Clubs | Logo Foot</title>
        <meta 
          name="description" 
          content="Découvrez l'histoire fascinante des logos de football à travers nos articles exclusifs. Histoire des emblèmes, évolution des designs et signification des logos des plus grands clubs." 
        />
        <meta 
          property="og:title" 
          content="Blog Football : Histoire et Évolution des Logos des Clubs | Logo Foot" 
        />
        <meta 
          property="og:description" 
          content="Plongez dans l'histoire des logos de football : articles détaillés sur l'évolution des emblèmes, leur signification et leur impact dans le monde du football." 
        />
        <meta 
          name="keywords" 
          content="histoire logos football, évolution logos clubs, design logo foot, signification emblèmes foot, logos historiques football"
        />
        <meta property="og:type" content="blog" />
        <meta property="og:url" content="https://logo-foot.com/blog" />
        <link rel="canonical" href="https://logo-foot.com/blog" />
      </Helmet>
      <BlogSchemaMarkup isBlogList />
      
      <div className="container mx-auto py-20 px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
            Articles sur les logos de foot
          </h1>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-indigo-500/10 to-purple-500/5 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-purple-100/30">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="bg-purple-100 p-3 rounded-xl">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <span className="font-semibold text-purple-700">Le Blog Logo-Foot</span>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Découvrez nos articles approfondis sur l'histoire des logos de football, leur évolution et leur signification.
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-purple-100/20 overflow-hidden"
            >
              <div className="p-6 flex-1">
                <time className="text-sm text-gray-500">{post.date}</time>
                <h2 className="text-xl font-semibold text-gray-800 mt-2 mb-3 group-hover:text-purple-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
              </div>
              
              <Link 
                to={`/blog/${post.id}`} 
                className="p-4 bg-gray-50 text-purple-600 hover:text-purple-700 font-medium inline-flex items-center gap-1 group-hover:bg-gray-100 transition-colors w-full"
              >
                Lire l'article
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M9 5l7 7-7 7" 
                  />
                </svg>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
