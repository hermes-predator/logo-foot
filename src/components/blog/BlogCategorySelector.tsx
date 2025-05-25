
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
      {/* Category selection section avec animations améliorées */}
      <div className="mb-10 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-100 max-w-6xl mx-auto overflow-hidden relative transition-all duration-700 ease-out hover:shadow-xl">
        <div className="absolute top-0 right-0 w-40 h-40 bg-blue-100 rounded-full opacity-20 -mr-20 -mt-20 transition-transform duration-1000 hover:scale-110"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-indigo-100 rounded-full opacity-30 -ml-10 -mb-10 transition-transform duration-1000 hover:scale-110"></div>
        
        {/* Titre avec meilleure typographie */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 text-center relative z-10">
          Explorez par Catégorie
        </h2>
        <p className="text-gray-600 text-center mb-8 relative z-10 max-w-2xl mx-auto leading-relaxed">
          Découvrez nos articles organisés par thématiques pour une navigation optimale
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 px-3 relative z-10">
          <a 
            href="/blog" 
            className={`group px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 hover:-translate-y-1 ${!currentCategory 
              ? 'bg-blue-500 text-white shadow-lg hover:shadow-xl hover:bg-blue-600' 
              : 'bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg'}`}
          >
            <span className="relative z-10">Toutes les catégories</span>
            {!currentCategory && (
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            )}
          </a>
          
          {categories.map(([key, category]) => (
            <a 
              key={key} 
              href={`/blog?category=${key}`} 
              className={`group px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 active:scale-95 hover:-translate-y-1 ${currentCategory === key 
                ? 'bg-blue-500 text-white shadow-lg hover:shadow-xl hover:bg-blue-600' 
                : 'bg-white hover:bg-gray-50 text-gray-700 border-2 border-gray-200 hover:border-blue-300 hover:shadow-lg'}`}
            >
              <span className="relative z-10">{category.name}</span>
              {currentCategory === key && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              )}
            </a>
          ))}
        </div>
      </div>
      
      {/* Description de la catégorie actuelle avec animation */}
      {currentDescription && (
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 mb-12 max-w-6xl mx-auto animate-fade-in transition-all duration-500 ease-out hover:shadow-md">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <p className="text-blue-800 leading-relaxed font-medium">{currentDescription}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default BlogCategorySelector;
