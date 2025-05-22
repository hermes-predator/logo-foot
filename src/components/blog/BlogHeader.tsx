import { useNavigate } from 'react-router-dom';
import { CategoriesMenu } from './CategoriesMenu';
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronRight, CloudIcon, Download, FileDown } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from '../ui/scroll-area';
import { BLOG_CATEGORIES } from '@/types/blog';
import GoogleDriveBadge from '../payment/GoogleDriveBadge';
import { Badge } from '@/components/ui/badge';
import { OptimizedImage } from '@/components/ui/optimized-image';

const BlogHeader = () => {
  const navigate = useNavigate();

  // Filter categories to display (exclude 'legacy')
  const displayedCategories = Object.keys(BLOG_CATEGORIES)
    .filter(key => key !== 'legacy')
    .reduce((obj: any, key: string) => {
      obj[key] = BLOG_CATEGORIES[key as keyof typeof BLOG_CATEGORIES];
      return obj;
    }, {});

  const handleCategoryClick = (category: string) => {
    navigate(`/blog?category=${category}`);
  };

  return (
    <div className="w-full bg-white">
      {/* Hero section avec image de fond */}
      <div
        className="relative w-full h-64 sm:h-96 md:h-[60vh] lg:h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/blog-header.webp')`,
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container relative z-10 flex flex-col justify-center items-center text-center h-full px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Le Blog des Logos de Football
          </h1>
          <p className="text-sm sm:text-md md:text-lg text-gray-300 max-w-3xl mx-auto">
            Découvrez l'histoire, les anecdotes et les secrets des logos de football du monde entier.
          </p>
        </div>
      </div>

      {/* Liste des catégories */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="container mx-auto px-4">
          <CategoriesMenu categories={displayedCategories} onCategoryClick={handleCategoryClick} />
        </div>
      </div>

      {/* Section CTA jaune */}
      <div className="w-full bg-amber-50 py-8 px-4">
        <div className="container mx-auto">
          <div className="rounded-xl bg-amber-100 px-4 sm:px-6 py-6 md:py-8 border border-amber-200">
            <div className="flex flex-col lg:flex-row lg:items-start gap-6 lg:gap-8">
              <div className="flex-shrink-0">
                <CloudIcon className="w-12 h-12 text-amber-700" />
              </div>

              <div className="flex-1">
                <h2 className="text-xl sm:text-2xl font-semibold text-amber-800 mb-2">
                  Téléchargez toutes les collections de logos
                </h2>
                <p className="text-amber-700">
                  Accédez à l'intégralité de notre base de données de logos de football, classés par pays et compétitions.
                </p>

                <div className="mt-6 pt-4 border-t border-amber-200/40">
                  <div className="flex flex-wrap items-center gap-3">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a href="https://www.logofootball.net/" target="_blank" rel="noopener noreferrer">
                            <GoogleDriveBadge />
                          </a>
                        </TooltipTrigger>
                        <TooltipContent className="bg-amber-800 border-amber-900 text-amber-50">
                          Notre base de données complète
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>

                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <a href="https://www.logofootball.net/" target="_blank" rel="noopener noreferrer">
                            <Badge variant="outline" className="text-amber-800 border-amber-300 hover:bg-amber-100">
                              Téléchargement rapide <ChevronRight className="w-4 h-4 ml-1" />
                            </Badge>
                          </a>
                        </TooltipTrigger>
                        <TooltipContent className="bg-amber-800 border-amber-900 text-amber-50">
                          Téléchargez tous les logos en un clic
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>

                {/* Ajout de la section d'images des dossiers */}
                <div className="mt-6 pt-5 border-t border-amber-200/60">
                  <p className="text-center text-amber-800 font-medium mb-4">Aperçu de quelques collections de ⦗FRONT-CLOUD⦘~ Football.zip</p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    {/* Première image - Premier groupe de pays */}
                    <div className="relative rounded-lg overflow-hidden shadow-md max-w-full sm:max-w-[48%] h-auto">
                      <img 
                        src="/lovable-uploads/e47a6810-ce15-4923-aaa6-7f01ad10481d.png"
                        alt="Collections de logos: Angleterre, Allemagne, Espagne, France, Italie, Brésil, USA, Pays-Bas et équipes nationales"
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                        <p className="text-white text-xs text-center font-medium">Les collections principales</p>
                      </div>
                    </div>
                    
                    {/* Deuxième image - Second groupe de pays */}
                    <div className="relative rounded-lg overflow-hidden shadow-md max-w-full sm:max-w-[48%] h-auto">
                      <img 
                        src="/lovable-uploads/d6aa1c61-5729-4033-a669-4573d524deed.png"
                        alt="Collections de logos: Argentine, Portugal, Turquie, Belgique, Danemark, Grèce, Norvège, Pologne et Roumanie"
                        className="w-full h-auto object-cover"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-2">
                        <p className="text-white text-xs text-center font-medium">Les collections secondaires</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Légende explicative des images */}
                  <div className="mt-3 text-center">
                    <p className="text-xs text-amber-700/80 italic">Chaque collection contient tous les logos des clubs classés par pays, dans un dossier dédié</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Liste des catégories en filtres */}
      <div className="container mx-auto py-6 px-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">
          Explorez par catégorie
        </h3>
        <ScrollArea className="pb-4">
          <div className="flex flex-nowrap gap-3">
            {Object.entries(displayedCategories).map(([category, data]) => (
              <Button
                key={category}
                variant="outline"
                className="rounded-full text-sm font-medium whitespace-nowrap"
                onClick={() => handleCategoryClick(category)}
              >
                {data.name}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default BlogHeader;
