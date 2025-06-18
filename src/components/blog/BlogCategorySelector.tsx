
import React from 'react';
import { Link } from 'react-router-dom';
import { Loader, BookOpen } from 'lucide-react';

interface BlogCategorySelectorProps {
  categories: [string, any][];
  currentCategory?: string | null;
  currentDescription: string;
  isLoading?: boolean;
}

const BlogCategorySelector = ({ 
  categories, 
  currentCategory, 
  currentDescription,
  isLoading = false
}: BlogCategorySelectorProps) => {
  return (
    <>
      {/* Category selection section */}
      <div className="mb-8 rounded-xl p-6 shadow-lg border overflow-hidden relative" style={{ backgroundColor: 'rgb(248, 249, 250)', borderColor: 'rgb(229, 231, 235)' }}>
        {/* Effet de brillance subtil */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-[shimmer_3s_ease-in-out_infinite] pointer-events-none"></div>
        
        {/* Cercles décoratifs avec couleurs harmonisées */}
        <div className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-20 -mr-10 -mt-10" style={{ backgroundColor: 'rgb(40, 39, 37)' }}></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 rounded-full opacity-15 -ml-10 -mb-10" style={{ backgroundColor: 'rgb(30, 29, 28)' }}></div>
        
        
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-left flex items-center gap-2 relative z-10">
          <BookOpen className="h-5 w-5" style={{ color: 'rgb(40, 39, 37)' }} />
          Catégories du blog
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3 px-4 relative z-10">
          {!currentCategory ? (
            <span className="px-6 py-3 rounded-full text-base text-white font-medium shadow-md cursor-default whitespace-nowrap flex items-center gap-2 transition-all duration-300" style={{ backgroundColor: 'rgb(40, 39, 37)' }}>
              {isLoading && <Loader className="w-3 h-3 animate-spin" />}
              Tout
            </span>
          ) : (
            <Link 
              to="/blog" 
              className="px-6 py-3 rounded-full text-base transition-all duration-300 whitespace-nowrap bg-white text-gray-700 border hover:shadow-md" style={{ borderColor: 'rgb(209, 213, 219)' }}
            >
              Tout
            </Link>
          )}
          
          {categories.map(([key, category]) => (
            currentCategory === key ? (
              <span 
                key={key}
                className="px-6 py-3 rounded-full text-base text-white font-medium shadow-md cursor-default whitespace-nowrap flex items-center gap-2 transition-all duration-300"
                style={{ backgroundColor: 'rgb(40, 39, 37)' }}
              >
                {isLoading && <Loader className="w-3 h-3 animate-spin" />}
                {category.name}
              </span>
            ) : (
              <Link 
                key={key} 
                to={`/blog?category=${key}`} 
                className="px-6 py-3 rounded-full text-base transition-all duration-300 whitespace-nowrap bg-white text-gray-700 border hover:shadow-md"
                style={{ borderColor: 'rgb(209, 213, 219)' }}
              >
                {category.name}
              </Link>
            )
          ))}
        </div>
      </div>
      
      {/* Description de la catégorie actuelle avec couleurs harmonisées */}
      {currentDescription && (
        <div className="rounded-lg p-4 mb-8 animate-fade-in shadow-sm border" style={{ backgroundColor: 'rgb(249, 250, 251)', borderColor: 'rgb(229, 231, 235)' }}>
          <p className="text-sm" style={{ color: 'rgb(55, 65, 81)' }}>{currentDescription}</p>
        </div>
      )}
    </>
  );
};

export default BlogCategorySelector;
