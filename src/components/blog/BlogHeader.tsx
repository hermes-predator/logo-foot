
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
  
  return <div className="max-w-[64rem] mb-6 pl-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100/80 text-gray-800 font-medium mb-3 shadow-sm">
        <span>Le Blog des Logos de Football</span>
      </div>

      <h1 className="text-4xl font-bold text-gray-900 mb-3">
        Articles sur le logo de foot
      </h1>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-100/90 to-gray-50/80 rounded-2xl blur-lg"></div>
        <div className="relative bg-gradient-to-br from-white to-gray-50/90 rounded-2xl p-7 border border-gray-100 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05),0_8px_10px_-6px_rgba(0,0,0,0.03)] backdrop-blur-sm hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.08),0_10px_20px_-5px_rgba(0,0,0,0.04)] transition-all duration-500">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-gradient-to-br from-gray-200 to-gray-100 p-2 rounded-xl shadow-inner">
              <BookOpen className="w-5 h-5 text-black" />
            </div>
            <h2 className="font-semibold text-gray-900">Blog Logo-Foot</h2>
          </div>

          <div className="mb-5">
            <p className="text-base text-gray-700 leading-relaxed">Bienvenue sur le blog Logo-Foot, votre expert sur les logos de football. Découvrez les emblèmes des plus grands clubs, explorez l'art des logos de football ou apprenez à créer votre propre logo.</p>
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

          <div className="bg-amber-100 rounded-xl p-5 border border-amber-200/70 transform transition-all duration-300 overflow-visible relative group">
            <div className="absolute inset-0 bg-amber-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
              <div className="absolute -inset-x-full top-0 h-[1px] bg-amber-300/70 opacity-30 group-hover:animate-[shine_2s_ease-in-out_infinite] group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
              <div>
                <h3 className="font-bold text-black text-lg">
                  <div className="flex items-start gap-4">
                    <div className="bg-amber-200/80 p-3.5 rounded-md flex items-center justify-center mt-0.5 group-hover:bg-amber-200/80 transition-none relative overflow-hidden">
                      <div className="absolute inset-0 bg-amber-200/80 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <AlertTriangle 
                        className="h-7 w-7 text-amber-600 flex-shrink-0 group-hover:text-amber-600 transition-none animate-icon-floating" 
                        style={{
                          transform: 'scale(1.1)'
                        }}
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-2xl font-bold">Vous cherchez tous les logos de football ?</span>
                      <span className="text-sm md:text-base text-amber-700/90 font-medium mt-1 leading-relaxed">Téléchargez <u className="font-semibold">+ de 8600 LOGOS de Clubs de Foot</u> organisés par pays.
                      <br />Obtenez toutes les ressources dans un fichier ZIP complet.</span>
                    </div>
                  </div>
                </h3>
              </div>
              <div className="relative">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button asChild className="bg-gradient-to-b from-white to-gray-100 hover:from-gray-50 hover:to-gray-200 whitespace-nowrap text-gray-800 border border-gray-300 h-14 px-6 py-4 text-sm relative overflow-hidden shadow-[0_2px_4px_rgba(0,0,0,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] hover:shadow-[0_4px_8px_rgba(0,0,0,0.12),inset_0_1px_0_rgba(255,255,255,0.9)] transition-all duration-200">
                        <a href="/" className="flex items-center gap-4 relative">
                          <Folder 
                            className="text-amber-600" 
                            style={{
                              width: '22px',
                              height: '22px'
                            }}
                          />
                          <span className="font-medium text-sm">Voir le fichier</span>
                          <ArrowRight 
                            className="text-amber-600 group-hover:translate-x-1 transition-transform" 
                            style={{
                              width: '22px',
                              height: '22px'
                            }}
                          />
                          <div className="absolute inset-0 w-full h-full overflow-hidden">
                            <div className="absolute top-0 -left-full h-full w-full bg-gradient-to-r from-transparent via-gray-300/70 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine-effect"></div>
                          </div>
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent 
                      side="top" 
                      align="center"
                      sideOffset={20}
                      className="bg-white border border-gray-200 text-gray-900 text-base font-medium py-2 px-3 relative z-[1000]"
                    >
                      <p>⦗FRONT-CLOUD⦘~ Football.zip</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>
        {`
        @keyframes floating {
          0% { transform: translateY(0) rotate(0deg) scale(1.1); }
          25% { transform: translateY(-3px) rotate(0deg) scale(1.13); }
          50% { transform: translateY(0) rotate(0deg) scale(1.16); }
          75% { transform: translateY(2px) rotate(0deg) scale(1.13); }
          100% { transform: translateY(0) rotate(0deg) scale(1.1); }
        }
        
        @keyframes pulse {
          0% { opacity: 0.85; }
          50% { opacity: 1; }
          100% { opacity: 0.85; }
        }

        @keyframes shine {
          0% { left: -100%; }
          100% { left: 200%; }
        }
        
        @keyframes shine-effect {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-icon-floating {
          animation: floating 4s ease-in-out infinite, pulse 2.5s infinite ease-in-out;
        }
        
        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }
        
        .animate-shine-effect {
          animation: shine-effect 1.2s ease-out;
        }
        `}
      </style>
    </div>;
};
export default BlogHeader;

