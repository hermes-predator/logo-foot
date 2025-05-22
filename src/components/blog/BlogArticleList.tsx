
import React from 'react';
import { BlogPost } from '../../types/blog';
import BlogArticleCard from './BlogArticleCard';
import { useSearchParams } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

interface BlogArticleListProps {
  articles: BlogPost[];
  isLoading?: boolean;
}

const BlogArticleList = ({ articles, isLoading = false }: BlogArticleListProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';

  // Fonction pour changer la catégorie
  const handleCategoryChange = (category: string) => {
    const newParams = new URLSearchParams(searchParams);
    
    if (category === 'all') {
      newParams.delete('category');
    } else {
      newParams.set('category', category);
    }
    
    setSearchParams(newParams);
  };

  if (isLoading) {
    return (
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5 px-4">
        {[...Array(6)].map((_, i) => (
          <div 
            key={`skeleton-${i}`} 
            className="h-60 bg-gray-100 animate-pulse rounded-xl"
            aria-hidden="true"
          />
        ))}
      </div>
    );
  }

  // Liste des catégories disponibles
  const categories = [
    { id: 'all', name: 'Tous les articles' },
    { id: 'players', name: 'Joueurs' },
    { id: 'logos', name: 'Logos' },
    { id: 'competition-logos', name: 'Compétitions' },
  ];

  if (articles.length === 0) {
    return (
      <div className="text-center py-4">
        <p className="text-gray-600 text-lg">Aucun article trouvé.</p>
      </div>
    );
  }

  return (
    <>
      {/* Système de catégories */}
      <div className="flex justify-center mb-6">
        <Tabs 
          defaultValue={currentCategory} 
          value={currentCategory} 
          onValueChange={handleCategoryChange} 
          className="w-full max-w-2xl"
        >
          <TabsList className="w-full justify-center bg-gray-100/80">
            {categories.map((category) => (
              <TabsTrigger 
                key={category.id} 
                value={category.id}
                className="px-4 py-2 data-[state=active]:bg-white"
              >
                {category.name}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Liste des articles */}
      <section 
        className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-5 px-4" 
        aria-label="Liste des articles"
      >
        {articles.map((post) => (
          <BlogArticleCard key={`post-${post.id}`} post={post} />
        ))}
      </section>
    </>
  );
};

export default BlogArticleList;
