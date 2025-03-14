
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BookOpen, Star, Book, Search } from 'lucide-react';
import { blogPosts } from '../data/blogPosts';
import BlogSchemaMarkup from '../components/BlogSchemaMarkup';

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50/30">
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
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Articles sur les logos de foot
          </h1>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-100 via-gray-50 to-gray-100 rounded-2xl blur-lg"></div>
            <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-100">
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="bg-purple-100/80 p-3 rounded-xl">
                  <BookOpen className="w-6 h-6 text-purple-600" />
                </div>
                <span className="font-semibold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">Le Blog Logo-Foot</span>
              </div>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Plongez dans l'univers fascinant des logos de football à travers nos articles soigneusement rédigés. Découvrez l'histoire, l'évolution et la signification des emblèmes qui font la fierté des clubs.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                  <div className="flex items-start gap-3">
                    <Book className="w-5 h-5 text-gray-500 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-800">Histoires Détaillées</h3>
                      <p className="text-sm text-gray-600">Explorez l'origine des logos les plus emblématiques</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Star className="w-5 h-5 text-gray-500 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-800">Analyses Exclusives</h3>
                      <p className="text-sm text-gray-600">Des insights uniques sur le design des emblèmes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <Search className="w-5 h-5 text-gray-500 mt-1" />
                    <div>
                      <h3 className="font-medium text-gray-800">Recherches Approfondies</h3>
                      <p className="text-sm text-gray-600">Des articles basés sur des sources fiables</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <article 
              key={post.id}
              className="group flex flex-col bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="p-6 flex-1">
                <time className="text-sm text-gray-500">{post.date}</time>
                <h2 className="text-xl font-semibold text-gray-800 mt-2 mb-3 group-hover:text-gray-600 transition-colors">
                  {post.title}
                </h2>
                <p className="text-gray-600 line-clamp-3 mb-4">
                  {post.excerpt}
                </p>
              </div>
              
              <Link 
                to={`/blog/${post.id}`} 
                className="p-4 bg-gray-50 text-gray-700 hover:text-gray-900 font-medium inline-flex items-center gap-1 group-hover:bg-gray-100 transition-colors w-full"
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
