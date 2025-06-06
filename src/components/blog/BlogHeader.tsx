
import React from 'react';
import BlogHeroSection from './BlogHeroSection';
import BlogStatsSection from './BlogStatsSection';
import BlogCallToAction from './BlogCallToAction';
import BlogBadges from './BlogBadges';

const BlogHeader = () => {
  return (
    <header className="bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <BlogHeroSection />
        <BlogStatsSection />
        <BlogCallToAction />
        <BlogBadges />
      </div>
    </header>
  );
};

export default BlogHeader;
