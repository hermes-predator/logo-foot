
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { bookOpen } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import BlogSchemaMarkup from '../components/BlogSchemaMarkup';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50/30">
      <Helmet>
        <title>Blog | Logo Foot & Football | Articles sur les Clubs de Football</title>
        <meta 
          name="description" 
          content="Découvrez nos articles sur le foot : histoire des logos et clubs de football, design des emblèmes, signification et évolution des logos des plus grands clubs." 
        />
        <meta 
          property="og:title" 
          content="Blog | Logo Foot & Football | Articles sur les Clubs de Football" 
        />
        <meta 
          property="og:description" 
          content="Découvrez nos articles sur le foot : histoire des logos et clubs de football, design des emblèmes, signification et évolution des logos des plus grands clubs." 
        />
        <meta 
          name="keywords" 
          content="logo foot, logos football, club de foot, clubs de football, logo club, logos des clubs, article foot, article football, histoire logo, histoire club"
        />
      </Helmet>
      <BlogSchemaMarkup isBlogList />
      
      <div className="container mx-auto py-20 px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6 leading-tight">
            Articles sur les logos de foot
          </h1>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-indigo-500/10 rounded-2xl transform rotate-1"></div>
            <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-purple-100">
              <div className="flex items-center justify-center gap-3 mb-4 text-purple-600">
                <bookOpen className="w-6 h-6" />
                <span className="font-medium">Le Blog Logo-Foot</span>
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
