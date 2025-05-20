
import React from 'react';
import { ArrowRight, BookOpen, Folder, AlertTriangle, Info, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { BLOG_CATEGORIES } from '@/types/blog';
import GoogleDriveBadge from '../payment/GoogleDriveBadge';

const BlogHeader = () => {
  // Filter categories to display (exclude 'legacy')
  const categoriesToDisplay = Object.entries(BLOG_CATEGORIES).filter(([key]) => key !== 'legacy');

  // Get current category from URL
  const urlParams = new URLSearchParams(window.location.search);
  const currentCategory = urlParams.get('category');
  
  return (
    <div className="max-w-[64rem] mb-6 pl-4">
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
              {categoriesToDisplay.map(([key, category]) => (
                <a 
                  key={key} 
                  href={`/blog?category=${key}`} 
                  className={`px-3 py-1 rounded-full text-sm transition-colors ${currentCategory === key ? 'bg-blue-500 text-white font-medium shadow-sm' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}
                >
                  {category.name}
                </a>
              ))}
            </div>
          </div>

          {/* Container for the yellow block with mt-12 to lower it */}
          <div className="mt-12 relative">
            {/* Yellow alert block with the Google Drive Badge inside at the top center */}
            <div className="bg-amber-100 rounded-xl p-5 pt-14 border border-amber-200/70 transition-all duration-300 mt-2 relative">
              {/* Google Drive Badge centered at the top inside the yellow container */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-3">
                <GoogleDriveBadge cursorHelp={true} />
              </div>
              
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                <div>
                  <h3 className="font-bold text-black text-lg">
                    <div className="flex items-start gap-4 pl-3">
                      <div className="bg-amber-200/80 p-3.5 rounded-md flex items-center justify-center mt-4 transition-none relative overflow-hidden">
                        <AlertTriangle 
                          className="h-7 w-7 text-amber-600 flex-shrink-0 transition-none animate-icon-floating" 
                          style={{
                            transform: 'scale(1.1)'
                          }}
                        />
                      </div>
                      <div className="flex flex-col pl-1">
                        <span className="text-2xl font-bold">Vous cherchez tous les logos de football ?</span>
                        <span className="text-sm md:text-base text-amber-700/90 font-medium mt-1 leading-relaxed">
                          Téléchargez <u className="font-semibold">+ de 8600 LOGOS de Clubs de Foot</u> organisés par pays.
                          <br />Obtenez toutes les ressources dans un fichier ZIP complet.
                        </span>
                      </div>
                    </div>
                  </h3>
                </div>
                <div className="relative pr-2 pl-3">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button asChild className="bg-gradient-to-b from-white via-gray-50 to-gray-100 hover:from-gray-50 hover:to-gray-200 whitespace-nowrap text-gray-800 border-0 h-14 px-6 py-4 text-sm relative overflow-hidden shadow-[0_14px_28px_-8px_rgba(255,196,87,0.25),0_8px_16px_-6px_rgba(0,0,0,0.12),0_-10px_16px_0px_rgba(255,248,240,0.8),inset_0_1px_0_rgba(255,255,255,1)] hover:shadow-[0_20px_32px_-16px_rgba(255,196,87,0.45),0_12px_22px_-8px_rgba(255,183,77,0.3),0_-14px_20px_-4px_rgba(255,248,240,0.9),inset_0_1px_0_rgba(255,255,255,1)] transition-all duration-500 group before:content-[''] before:absolute before:bottom-0 before:left-[15%] before:w-[70%] before:h-12 before:bg-amber-100/25 before:blur-xl before:-mb-5 before:z-[-1] after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[6px] after:w-full after:bg-gradient-to-r after:from-transparent after:via-amber-200/90 after:to-transparent after:blur-sm">
                          <a href="/" className="flex items-center gap-3 relative">
                            {/* Leaf elements around the button */}
                            <div className="absolute left-0 top-0 w-full h-full">
                              <div className="absolute -left-2 -top-4 animate-float-slow opacity-60">
                                <Leaf 
                                  className="text-amber-500/40 transform rotate-15"
                                  style={{
                                    width: "14px",
                                    height: "14px",
                                    filter: "drop-shadow(0 2px 3px rgba(253, 186, 116, 0.4))"
                                  }}
                                />
                              </div>
                              <div className="absolute left-[30%] -top-3 animate-float-medium delay-300 opacity-50">
                                <Leaf 
                                  className="text-amber-500/30"
                                  style={{
                                    width: "10px",
                                    height: "10px",
                                    transform: "rotate(45deg)",
                                    filter: "drop-shadow(0 2px 2px rgba(253, 186, 116, 0.3))"
                                  }}
                                />
                              </div>
                              <div className="absolute -right-1 -top-3 animate-float-fast delay-150 opacity-70">
                                <Leaf 
                                  className="text-amber-500/40"
                                  style={{
                                    width: "12px",
                                    height: "12px",
                                    transform: "rotate(-20deg) scaleX(-1)",
                                    filter: "drop-shadow(0 2px 3px rgba(253, 186, 116, 0.4))"
                                  }}
                                />
                              </div>
                            </div>
                            <Folder 
                              className="text-amber-600 transition-none relative group-hover:animate-subtle-bounce" 
                              style={{
                                width: "22px",
                                height: "22px"
                              }}
                            />
                            <span className="font-medium text-base">Voir le fichier</span>
                            <ArrowRight 
                              className="text-amber-600 group-hover:translate-x-1 transition-transform" 
                              style={{
                                width: "22px",
                                height: "22px"
                              }}
                            />
                            <div className="absolute inset-0 w-full h-full overflow-hidden">
                              <div className="absolute top-0 -left-full h-full w-full bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine-effect"></div>
                            </div>
                          </a>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent 
                        side="top" 
                        align="center"
                        sideOffset={4}
                        className="bg-white border border-gray-200 text-gray-900 p-0 shadow-md rounded-lg overflow-hidden max-w-[300px]"
                      >
                        <div className="flex flex-col">
                          <div className="bg-gray-50 p-3 border-b border-gray-100 flex items-center gap-2">
                            <Info className="h-4 w-4 text-gray-600" />
                            <p className="font-semibold text-[14px]">Informations sur le fichier</p>
                          </div>
                          <div className="p-3">
                            <p className="text-[14px] mb-2"><span className="font-medium">Nom:</span> Football.zip</p>
                            <p className="text-[14px] mb-2"><span className="font-medium">Taille:</span> 250 Mo</p>
                            <p className="text-[14px] mb-2"><span className="font-medium">Contenu:</span> 8600+ logos au format PNG</p>
                          </div>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
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
        
        @keyframes float-slow {
          0% { transform: translateY(0) rotate(15deg); }
          50% { transform: translateY(-4px) rotate(20deg); }
          100% { transform: translateY(0) rotate(15deg); }
        }
        
        @keyframes float-medium {
          0% { transform: translateY(0) rotate(45deg); }
          50% { transform: translateY(-3px) rotate(40deg); }
          100% { transform: translateY(0) rotate(45deg); }
        }
        
        @keyframes float-fast {
          0% { transform: translateY(0) rotate(-20deg) scaleX(-1); }
          50% { transform: translateY(-2px) rotate(-25deg) scaleX(-1); }
          100% { transform: translateY(0) rotate(-20deg) scaleX(-1); }
        }
        
        @keyframes subtle-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-2px); }
        }
        
        @keyframes pulse {
          0% { opacity: 0.85; }
          50% { opacity: 1; }
          100% { opacity: 0.85; }
        }

        @keyframes shine {
          from {
            left: -100%;
          }
          50% {
            left: 100%;
          }
          to {
            left: 100%;
          }
        }
        
        @keyframes shine-effect {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }

        .animate-icon-floating {
          animation: floating 4s ease-in-out infinite, pulse 2.5s infinite ease-in-out;
        }
        
        .animate-float-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        
        .animate-float-medium {
          animation: float-medium 5s ease-in-out infinite;
        }
        
        .animate-float-fast {
          animation: float-fast 4s ease-in-out infinite;
        }
        
        .animate-subtle-bounce {
          animation: subtle-bounce 2s ease-in-out infinite;
        }
        
        .animate-shine {
          animation: shine 2s ease-in-out infinite;
        }
        
        .animate-shine-effect {
          animation: shine-effect 1.2s ease-out;
        }
        `}
      </style>
    </div>
  );
};

export default BlogHeader;
