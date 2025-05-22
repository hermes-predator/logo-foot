
import React from 'react';
import { Button } from '../ui/button';
import CategoriesMenu from './CategoriesMenu';
import { OptimizedImage } from '../ui/optimized-image';
import { BLOG_CATEGORIES } from '@/types/blog';

const BlogHeader: React.FC = () => {
  // These are the categories we want to display in our menu
  const displayedCategories = {
    'logos': BLOG_CATEGORIES['logos'],
    'national-logos': BLOG_CATEGORIES['national-logos'],
    'competition-logos': BLOG_CATEGORIES['competition-logos'],
    'players': BLOG_CATEGORIES['players'],
    'technical': BLOG_CATEGORIES['technical'],
    'pixel-art': BLOG_CATEGORIES['pixel-art']
  };

  return (
    <header className="bg-gray-900 text-white py-12 relative overflow-hidden">
      {/* Overlay pattern */}
      <div className="absolute inset-0 opacity-10 pattern-grid-lg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
            Logo Foot Blog
          </h1>
          
          <p className="text-xl md:text-2xl mb-6 text-gray-300 leading-relaxed">
            Découvrez les dernières actualités et analyses sur les logos de football, 
            les emblèmes des clubs et équipes nationales, et l'histoire du design sportif.
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center mb-8">
            <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20">
              Logos de Clubs
            </Button>
            <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20">
              Équipes Nationales
            </Button>
            <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20">
              Design & Histoire
            </Button>
            <Button variant="outline" className="bg-white/10 hover:bg-white/20 border-white/20">
              Pixel Art
            </Button>
          </div>
        </div>
      </div>
      
      {/* Categories section */}
      <div className="bg-gray-800 py-6 mt-8">
        <div className="container mx-auto px-4">
          <CategoriesMenu categories={displayedCategories} />
        </div>
      </div>
      
      {/* Collection Preview Section - Yellow Box */}
      <div className="bg-yellow-500 py-8 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              Aperçu de quelques collections de ⦗FRONT-CLOUD⦘~ Football.zip
            </h2>
            <p className="text-gray-800 mt-2">
              Des centaines de logos de football en haute qualité, parfaits pour vos projets
            </p>
          </div>
          
          <div className="flex justify-center gap-6 flex-wrap">
            <div className="w-[120px] h-[120px] bg-white rounded-lg shadow-lg overflow-hidden">
              <OptimizedImage 
                src="/lovable-uploads/473f7b51-aeab-46c6-8dae-ae1850e2f111.png" 
                alt="Collection de logos de football" 
                width={120} 
                height={120} 
                aspectRatio={1}
              />
            </div>
            <div className="w-[120px] h-[120px] bg-white rounded-lg shadow-lg overflow-hidden">
              <OptimizedImage 
                src="/lovable-uploads/0e31da73-efe5-4f8a-9edc-581fa5d23995.png" 
                alt="Collection de logos d'équipes nationales" 
                width={120} 
                height={120} 
                aspectRatio={1}
              />
            </div>
          </div>
          
          <div className="text-center mt-6">
            <Button variant="default" className="bg-gray-900 hover:bg-gray-800">
              Voir toutes les collections
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default BlogHeader;
