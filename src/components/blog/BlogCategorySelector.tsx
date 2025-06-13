
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
      <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg border border-blue-100 overflow-hidden relative">
        {/* Effet de brillance subtil */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_3s_ease-in-out_infinite] pointer-events-none"></div>
        
        {/* Cercles décoratifs statiques */}
        <div className="absolute top-0 right-8 w-20 h-20 bg-indigo-200 rounded-full opacity-35 -mr-10 -mt-10"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-100 rounded-full opacity-30 -ml-10 -mb-10"></div>
        
        
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-left flex items-center gap-2 relative z-10">
          <BookOpen className="h-5 w-5 text-black" />
          Catégories du blog
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3 px-4 relative z-10">
          {!currentCategory ? (
            <span className="px-4 py-2 rounded-full text-sm bg-blue-500 text-white font-medium shadow-md cursor-default whitespace-nowrap flex items-center gap-2 transition-all duration-300">
              {isLoading && <Loader className="w-3 h-3 animate-spin" />}
              Tout
            </span>
          ) : (
            <Link 
              to="/blog" 
              className="px-4 py-2 rounded-full text-sm transition-shadow duration-300 whitespace-nowrap bg-white text-gray-700 border border-gray-200 hover:shadow-lg"
            >
              Tout
            </Link>
          )}
          
          {categories.map(([key, category]) => (
            currentCategory === key ? (
              <span 
                key={key}
                className="px-4 py-2 rounded-full text-sm bg-blue-500 text-white font-medium shadow-md cursor-default whitespace-nowrap flex items-center gap-2 transition-all duration-300"
              >
                {isLoading && <Loader className="w-3 h-3 animate-spin" />}
                {category.name}
              </span>
            ) : (
              <Link 
                key={key} 
                to={`/blog?category=${key}`} 
                className="px-4 py-2 rounded-full text-sm transition-shadow duration-300 whitespace-nowrap bg-white text-gray-700 border border-gray-200 hover:shadow-lg"
              >
                {category.name}
              </Link>
            )
          ))}
        </div>
      </div>
      
      {/* Description de la catégorie actuelle */}
      {currentDescription && (
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8 animate-fade-in shadow-sm">
          <p className="text-sm text-blue-800">{currentDescription}</p>
        </div>
      )}
    </>
  );
};

export default BlogCategorySelector;
