
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

interface Category {
  value: string;
  name: string;
  description: string;
}

interface CategoriesMenuProps {
  activeCategory: string;
  onCategoryChange: (value: string) => void;
}

const CategoriesMenu: React.FC<CategoriesMenuProps> = ({ activeCategory, onCategoryChange }) => {
  const categories: Category[] = [
    { value: 'all', name: 'Tous', description: 'Tous les articles' },
    { value: 'logos', name: 'Logos', description: 'Articles sur les logos de football' },
    { value: 'technical', name: 'Techniques', description: 'Articles techniques sur le design' },
    { value: 'analysis', name: 'Analyses', description: 'Analyses des logos et designs' },
    { value: 'history', name: 'Histoire', description: 'Histoire des logos de football' },
    { value: 'pixel-art', name: 'Pixel Art', description: 'Logos en pixel art' }
  ];

  return (
    <div className="mb-6">
      <p className="text-gray-500 mb-3">Filtrer par catégorie:</p>
      <ToggleGroup 
        type="single" 
        value={activeCategory}
        onValueChange={onCategoryChange}
        className="flex-wrap justify-center"
      >
        {categories.map((category) => (
          <ToggleGroupItem 
            key={category.value} 
            value={category.value}
            aria-label={`Filtrer par ${category.name}`}
            className={`px-4 py-2 ${
              category.value === 'all' ? 'bg-blue-100 hover:bg-blue-200' :
              category.value === 'logos' ? 'bg-green-100 hover:bg-green-200' :
              category.value === 'technical' ? 'bg-purple-100 hover:bg-purple-200' :
              category.value === 'analysis' ? 'bg-amber-100 hover:bg-amber-200' :
              category.value === 'history' ? 'bg-red-100 hover:bg-red-200' :
              'bg-gray-100 hover:bg-gray-200'
            }`}
          >
            {category.name}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>
    </div>
  );
};

export default CategoriesMenu;
