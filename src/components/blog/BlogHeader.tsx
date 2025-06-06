
import React from 'react';
import HeroBackground from './HeroBackground';
import BlogHeroSection from './BlogHeroSection';
import BlogPreviewCarousel from './BlogPreviewCarousel';
import { BlogPost } from '../../types/blog';

interface BlogHeaderProps {
  featuredPosts?: BlogPost[];
}

const BlogHeader = ({ featuredPosts = [] }: BlogHeaderProps) => {
  return (
    <header className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 overflow-hidden">
      <HeroBackground />
      
      <div className="container mx-auto relative z-10">
        <BlogHeroSection />
        
        {featuredPosts.length > 0 && (
          <div className="mt-12">
            <BlogPreviewCarousel posts={featuredPosts} />
          </div>
        )}
      </div>
    </header>
  );
};

export default BlogHeader;
