
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const categories = [
  { name: 'Tous', path: '/blog' },
  { name: 'Logos', path: '/blog/category/logos' },
  { name: 'Histoire', path: '/blog/category/history' },
  { name: 'Analyses', path: '/blog/category/analysis' },
  { name: 'Technique', path: '/blog/category/technical' },
  { name: 'Pixel Art', path: '/blog/category/pixel-art' },
];

const CategoriesMenu: React.FC = () => {
  return (
    <div className="flex flex-wrap gap-2">
      {categories.map((category) => (
        <Link key={category.name} to={category.path}>
          <Button variant="outline" size="sm">
            {category.name}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default CategoriesMenu;
