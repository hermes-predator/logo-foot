
import React from 'react';

interface BlogCategorySelectorProps {
  categories: [string, any][];
  currentCategory?: string | null;
  currentDescription: string;
}

const BlogCategorySelector = ({ 
  categories, 
  currentCategory, 
  currentDescription 
}: BlogCategorySelectorProps) => {
  return (
    <>
      {/* Category selection section */}
      <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 shadow-md border border-blue-100 max-w-5xl mx-auto overflow-hidden relative">
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full opacity-20 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-100 rounded-full opacity-30 -ml-10 -mb-10"></div>
        
        <h2 className="text-base font-semibold text-gray-800 mb-3">Catégories du blog</h2>
        
        <div className="flex flex-wrap justify-center gap-2 px-2 relative z-10">
          <a 
            href="/blog" 
            className={`px-3 py-1.5 rounded-full text-xs transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap ${!currentCategory 
              ? 'bg-blue-500 text-white font-medium shadow-md hover:shadow-lg hover:bg-blue-600' 
              : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-md'}`}
          >
            Tout
          </a>
          
          {categories.map(([key, category]) => (
            <a 
              key={key} 
              href={`/blog?category=${key}`} 
              className={`px-3 py-1.5 rounded-full text-xs transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap ${currentCategory === key 
                ? 'bg-blue-500 text-white font-medium shadow-md hover:shadow-lg hover:bg-blue-600' 
                : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow-md'}`}
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>
      
      {/* Description de la catégorie actuelle */}
      {currentDescription && (
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8 max-w-5xl mx-auto animate-fade-in">
          <p className="text-sm text-blue-800">{currentDescription}</p>
        </div>
      )}
    </>
  );
};

export default BlogCategorySelector;
