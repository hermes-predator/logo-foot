
import React from 'react';
import { ScrollArea } from '../ui/scroll-area';
import { Button } from '../ui/button';

interface CategoriesMenuProps {
  categories: Record<string, { name: string; description: string }>;
  onCategoryClick: (category: string) => void;
}

export const CategoriesMenu = ({ 
  categories, 
  onCategoryClick 
}: CategoriesMenuProps) => {
  return (
    <ScrollArea className="pb-4">
      <div className="flex flex-wrap gap-2">
        {Object.entries(categories).map(([category, data]) => (
          <Button
            key={category}
            variant="outline"
            className="rounded-full text-sm font-medium whitespace-nowrap"
            onClick={() => onCategoryClick(category)}
          >
            {data.name}
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
};
