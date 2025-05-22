
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useSearchParams } from 'react-router-dom';
import CategoriesMenu from './CategoriesMenu';

const BlogHeader: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';

  const handleCategoryChange = (value: string) => {
    if (!value) return; // Ignore empty value
    
    if (value === 'all') {
      searchParams.delete('category');
      setSearchParams(searchParams);
    } else {
      setSearchParams({ category: value });
    }
    
    // Scroll to top when changing category
    window.scrollTo(0, 0);
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            Collection des Logos de Football
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Explorez notre collection de logos haute définition pour tous les clubs et équipes de football
          </p>
          
          {/* Yellow box with package information */}
          <div className="bg-amber-100 border border-amber-300 rounded-lg p-4 md:p-6 mb-8 max-w-2xl mx-auto">
            <h3 className="text-amber-800 font-semibold text-lg md:text-xl mb-2">
              Aperçu de quelques collections de ⦗FRONT-CLOUD⦘~ Football.zip
            </h3>
            <p className="text-amber-700 mb-1">
              Chaque collection contient tous les logos des clubs classés par pays, dans un dossier ZIP
            </p>
            <div className="flex justify-center items-center space-x-2 mt-3">
              <div className="flex flex-wrap justify-center gap-3">
                <img 
                  src="/lovable-uploads/229a8e75-4cd5-49d4-850f-82a71f5aa7da.png" 
                  alt="Collection France" 
                  className="h-16 w-16 object-contain rounded border border-amber-200"
                />
                <img 
                  src="/lovable-uploads/676cb646-fca3-4d6a-86ad-b4e909cb51bd.png" 
                  alt="Collection Allemagne" 
                  className="h-16 w-16 object-contain rounded border border-amber-200"
                />
                <img 
                  src="/lovable-uploads/81f57759-cc4e-457d-a95d-251dfa7958de.png" 
                  alt="Collection Angleterre" 
                  className="h-16 w-16 object-contain rounded border border-amber-200"
                />
                <img 
                  src="/lovable-uploads/df5bc77f-e9a3-4fd7-b383-29dfce99bcd3.png" 
                  alt="Collection Italie" 
                  className="h-16 w-16 object-contain rounded border border-amber-200"
                />
              </div>
            </div>
          </div>

          {/* Category Filter */}
          <CategoriesMenu activeCategory={activeCategory} onCategoryChange={handleCategoryChange} />
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
