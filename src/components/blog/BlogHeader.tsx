
import React from 'react';
import HeroBackground from './HeroBackground';
import BlogHeroSection from './BlogHeroSection';

const BlogHeader = () => {
  return (
    <header className="relative bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 overflow-hidden">
      <HeroBackground />
      
      <div className="container mx-auto relative z-10">
        <BlogHeroSection />
      </div>
    </header>
  );
};

export default BlogHeader;
