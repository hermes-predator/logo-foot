
import React from 'react';
import { Button } from '../ui/button';
import { BLOG_CATEGORIES } from '@/types/blog';

interface CategoriesMenuProps {
  categories: {
    [key: string]: {
      name: string;
      description: string;
    };
  };
}

const CategoriesMenu: React.FC<CategoriesMenuProps> = ({ categories }) => {
  return (
    <div className="flex flex-wrap gap-2 justify-center">
      {Object.entries(categories).map(([key, category]) => (
        <Button 
          key={key}
          variant="outline" 
          className="bg-white/10 hover:bg-white/20 border-white/20"
        >
          {category.name}
        </Button>
      ))}
    </div>
  );
};

export default CategoriesMenu;
