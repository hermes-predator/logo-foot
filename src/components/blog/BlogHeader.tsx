
import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { BLOG_CATEGORIES } from '../../types/blog';

const BlogHeader = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get('category');
  const navigate = useNavigate();

  // Gestion du changement de catégorie
  const handleCategoryChange = (value: string) => {
    if (value === "all") {
      navigate('/blog');
    } else {
      navigate(`/blog?category=${value}`);
    }
  };

  // Déterminer la valeur actuelle pour ToggleGroup
  const currentValue = categoryParam || "all";

  return (
    <div className="bg-blue-700 text-white py-10 md:py-14 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-4">Blog Logo Football</h1>
        <p className="text-center text-lg max-w-3xl mx-auto mb-8">
          Découvrez notre blog dédié aux logos de football : analyses, histoires, évolutions 
          et tout ce qui concerne les emblèmes des clubs et équipes nationales.
        </p>
        
        {/* Système de catégories déplacé ici */}
        <div className="flex justify-center mt-8">
          <div className="bg-white p-2 rounded-lg shadow-md">
            <ToggleGroup 
              type="single" 
              value={currentValue}
              onValueChange={(value) => {
                if (value) handleCategoryChange(value);
              }}
              className="flex flex-wrap justify-center gap-1.5"
            >
              <ToggleGroupItem value="all" className="px-4 py-2 rounded-md text-sm font-medium data-[state=on]:bg-blue-600 data-[state=on]:text-white">
                Tous
              </ToggleGroupItem>
              <ToggleGroupItem value="logos" className="px-4 py-2 rounded-md text-sm font-medium data-[state=on]:bg-blue-600 data-[state=on]:text-white">
                Logos de Club
              </ToggleGroupItem>
              <ToggleGroupItem value="technical" className="px-4 py-2 rounded-md text-sm font-medium data-[state=on]:bg-blue-600 data-[state=on]:text-white">
                Techniques
              </ToggleGroupItem>
              <ToggleGroupItem value="analysis" className="px-4 py-2 rounded-md text-sm font-medium data-[state=on]:bg-blue-600 data-[state=on]:text-white">
                Analyses
              </ToggleGroupItem>
              <ToggleGroupItem value="legacy" className="px-4 py-2 rounded-md text-sm font-medium data-[state=on]:bg-blue-600 data-[state=on]:text-white">
                Histoire du football
              </ToggleGroupItem>
              <ToggleGroupItem value="pixel-art" className="px-4 py-2 rounded-md text-sm font-medium data-[state=on]:bg-blue-600 data-[state=on]:text-white">
                Pixel Art
              </ToggleGroupItem>
              <ToggleGroupItem value="national-logos" className="px-4 py-2 rounded-md text-sm font-medium data-[state=on]:bg-blue-600 data-[state=on]:text-white">
                Logos de Nation
              </ToggleGroupItem>
              <ToggleGroupItem value="competition-logos" className="px-4 py-2 rounded-md text-sm font-medium data-[state=on]:bg-blue-600 data-[state=on]:text-white">
                Logos de Compétition
              </ToggleGroupItem>
            </ToggleGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
