
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
      <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 shadow-md border border-blue-100 max-w-6xl mx-auto overflow-hidden relative">
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full opacity-20 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-100 rounded-full opacity-30 -ml-10 -mb-10"></div>
        
        <h2 className="text-lg font-semibold text-gray-800 mb-4 text-left flex items-center gap-2">
          <BookOpen className="h-5 w-5 text-black" />
          Catégories du blog
        </h2>
        
        <div className="flex flex-wrap justify-center gap-3 px-4 relative z-10">
          {!currentCategory ? (
            <span className="px-4 py-2 rounded-full text-sm bg-blue-500 text-white font-medium shadow-md cursor-default whitespace-nowrap flex items-center gap-2">
              {isLoading && <Loader className="w-3 h-3 animate-spin" />}
              Tout
            </span>
          ) : (
            <Link 
              to="/blog" 
              className="px-4 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-md"
            >
              Tout
            </Link>
          )}
          
          {categories.map(([key, category]) => (
            currentCategory === key ? (
              <span 
                key={key}
                className="px-4 py-2 rounded-full text-sm bg-blue-500 text-white font-medium shadow-md cursor-default whitespace-nowrap flex items-center gap-2"
              >
                {isLoading && <Loader className="w-3 h-3 animate-spin" />}
                {category.name}
              </span>
            ) : (
              <Link 
                key={key} 
                to={`/blog?category=${key}`} 
                className="px-4 py-2 rounded-full text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-md"
              >
                {category.name}
              </Link>
            )
          ))}
        </div>
      </div>
      
      {/* Description de la catégorie actuelle */}
      {currentDescription && (
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8 max-w-6xl mx-auto animate-fade-in">
          <p className="text-sm text-blue-800">{currentDescription}</p>
        </div>
      )}
    </>
  );
};

export default BlogCategorySelector;
