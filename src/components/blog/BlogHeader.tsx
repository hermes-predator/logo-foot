import React from 'react';
import { ArrowRight, BookOpen, Folder, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { BLOG_CATEGORIES } from '@/types/blog';
const BlogHeader = () => {
  // Filter categories to display (exclude 'legacy')
  const categoriesToDisplay = Object.entries(BLOG_CATEGORIES).filter(([key]) => key !== 'legacy');

  // Get current category from URL
  const urlParams = new URLSearchParams(window.location.search);
  const currentCategory = urlParams.get('category');
  return <div className="max-w-4xl mb-6 pl-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100/80 text-gray-800 font-medium mb-3 shadow-sm">
        <span>Le Blog des Logos de Football</span>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-3">
        Articles sur le logo de foot
      </h1>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100/50 via-white to-gray-100/50 rounded-2xl blur-lg"></div>
        <div className="relative bg-gradient-to-br from-white via-white/95 to-gray-50/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/80 shadow-md hover:shadow-lg transition-all duration-300">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-gray-200 to-gray-100 p-2 rounded-xl shadow-inner">
              <BookOpen className="w-5 h-5 text-black" />
            </div>
            <h2 className="font-semibold text-gray-900 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              Le Blog Logo-Foot
            </h2>
          </div>

          <div className="mb-5">
            <p className="text-base text-gray-700 leading-relaxed">
              Bienvenue sur le blog Logo-Foot, votre source d'expertise sur les logos et emblèmes du football. Découvrez les plus grands clubs, explorez l'art des logos de football ou apprenez à créer votre propre logo.
            </p>
          </div>

          <div className="mb-6">
            <div className="flex flex-wrap gap-2">
              <a href="/blog" className={`px-3 py-1 rounded-full text-sm transition-colors ${!currentCategory ? 'bg-blue-500 text-white font-medium shadow-sm' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
                Tout
              </a>
              {categoriesToDisplay.map(([key, category]) => <a key={key} href={`/blog?category=${key}`} className={`px-3 py-1 rounded-full text-sm transition-colors ${currentCategory === key ? 'bg-blue-500 text-white font-medium shadow-sm' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
                  {category.name}
                </a>)}
            </div>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl p-5 border border-amber-200/50 shadow-inner">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-black text-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-100 p-3.5 rounded-md flex items-center justify-center mt-0.5">
                      <AlertTriangle className="h-7 w-7 text-amber-600 flex-shrink-0" style={{
                      transform: 'scale(1.1)'
                    }} />
                    </div>
                    <div className="flex flex-col">
                      <span>Vous cherchez tous les logos de football ?</span>
                      <span className="text-sm text-amber-700/90 font-medium mt-1">Téléchargez notre fichier ZIP complet en page d'accueil.
+ de 8600 LOGOS de Clubs de Foot organisé par pays</span>
                    </div>
                  </div>
                </h3>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button asChild className="bg-white hover:bg-white/90 whitespace-nowrap text-gray-900 border border-gray-200 shadow-sm hover:shadow group h-12 px-6 text-base relative overflow-hidden">
                      <a href="/" className="flex items-center gap-2">
                        <Folder className="h-5 w-5 text-amber-600" />
                        <span>Voir le fichier</span>
                        <ArrowRight className="h-5 w-5 text-amber-600 group-hover:translate-x-1 transition-transform" />
                        <div className="absolute top-0 right-0 h-full w-1/3 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent via-gray-200/20 to-gray-300/30 opacity-30 group-hover:opacity-40 group-hover:via-gray-500/30 group-hover:to-gray-500/40 group-hover:animate-shine transition-opacity duration-300" />
                      </a>
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-white border border-gray-200 text-gray-900">
                    <p>⦗FRONT-CLOUD⦘~ Football.zip</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default BlogHeader;