
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
      <div className="mb-8 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-5 shadow-md border border-blue-100 max-w-5xl mx-auto overflow-hidden relative">
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full opacity-20 -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-100 rounded-full opacity-30 -ml-10 -mb-10"></div>
        
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Catégories</h2>
        
        <div className="flex flex-wrap justify-center gap-2 px-3 relative z-10">
          <a 
            href="/blog" 
            className={`px-4 py-2 rounded-full text-sm transition-all ${!currentCategory 
              ? 'bg-blue-500 text-white font-medium shadow-md transform hover:scale-105' 
              : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 hover:border-gray-300'}`}
          >
            Tout
          </a>
          
          {categories.map(([key, category]) => (
            <a 
              key={key} 
              href={`/blog?category=${key}`} 
              className={`px-4 py-2 rounded-full text-sm transition-all ${currentCategory === key 
                ? 'bg-blue-500 text-white font-medium shadow-md transform hover:scale-105' 
                : 'bg-white hover:bg-gray-100 text-gray-700 border border-gray-200 hover:border-gray-300'}`}
            >
              {category.name}
            </a>
          ))}
        </div>
      </div>
      
      {/* Description de la catégorie actuelle */}
      {currentDescription && (
        <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8 max-w-5xl mx-auto">
          <p className="text-sm text-blue-800">{currentDescription}</p>
        </div>
      )}
    </>
  );
};

export default BlogCategorySelector;
