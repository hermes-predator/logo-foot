
import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { BLOG_CATEGORIES } from '@/types/blog';

const CategoriesMenu = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get('category');

  const handleCategoryClick = (category: string | null) => {
    if (category) {
      navigate(`/blog?category=${category}`);
    } else {
      navigate('/blog');
    }
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 md:gap-3">
      <Button
        variant={!currentCategory ? "default" : "outline"}
        size="sm"
        onClick={() => handleCategoryClick(null)}
        className="rounded-full"
      >
        Tous
      </Button>
      
      {Object.values(BLOG_CATEGORIES).map((category) => (
        <Button
          key={category}
          variant={currentCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => handleCategoryClick(category)}
          className="rounded-full"
        >
          {category === 'logos' && 'Logos'}
          {category === 'history' && 'Histoire'}
          {category === 'technical' && 'Technique'}
          {category === 'analysis' && 'Analyse'}
          {category === 'pixel-art' && 'Pixel Art'}
        </Button>
      ))}
    </div>
  );
};

export default CategoriesMenu;
