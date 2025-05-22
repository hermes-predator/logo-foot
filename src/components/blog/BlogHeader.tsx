
import React from 'react';
import { ArrowRight, BookOpen, Folder, AlertTriangle, Download, Check, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { TooltipProvider } from '@/components/ui/tooltip';
import { BLOG_CATEGORIES } from '@/types/blog';
import GoogleDriveBadge from '../payment/GoogleDriveBadge';
import { Badge } from '@/components/ui/badge';
import { OptimizedImage } from '@/components/ui/optimized-image';

const BlogHeader = () => {
  // Filter categories to display (exclude 'legacy')
  const categoriesToDisplay = Object.entries(BLOG_CATEGORIES).filter(([key]) => key !== 'legacy');

  // Get current category from URL
  const urlParams = new URLSearchParams(window.location.search);
  const currentCategory = urlParams.get('category');
  
  return <div className="container mx-auto px-4 mb-6">
      <div className="text-center">
        
        {/* Increased max-width from max-w-4xl to max-w-5xl to allow even more horizontal space */}
        <div className="max-w-5xl mx-auto relative">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-100/90 to-gray-50/80 rounded-b-2xl rounded-t-none blur-lg"></div>
          <div className="relative bg-gradient-to-br from-white to-gray-50/90 rounded-b-2xl rounded-t-none p-7 border border-gray-100 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05),0_8px_10px_-6px_rgba(0,0,0,0.03)] backdrop-blur-sm hover:shadow-[0_20px_35px_-10px_rgba(0,0,0,0.08),0_10px_20px_-5px_rgba(0,0,0,0.04)] transition-all duration-500">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="bg-gradient-to-br from-gray-200 to-gray-100 p-2 rounded-xl shadow-inner">
                <BookOpen className="w-5 h-5 text-black" />
              </div>
              <h2 className="font-semibold text-gray-900">Le Blog des logos de football</h2>
            </div>

            <div className="mb-5 text-center">
              <p className="text-base text-gray-700 leading-relaxed">Bienvenue sur le blog Logo-Foot, votre expert sur les logos de football.<br /> 
Découvrez les emblèmes des plus grands clubs, explorez l'art des logos de football<br /> ou apprenez à créer votre propre logo.</p>
            </div>

            {/* Category selection section with added horizontal spacing for wider layout */}
            <div className="mb-6">
              <div className="flex flex-wrap justify-center gap-2 px-3">
                <a href="/blog" className={`px-3 py-1 rounded-full text-sm transition-colors ${!currentCategory ? 'bg-blue-500 text-white font-medium shadow-sm' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
                  Tout
                </a>
                {categoriesToDisplay.map(([key, category]) => <a key={key} href={`/blog?category=${key}`} className={`px-3 py-1 rounded-full text-sm transition-colors ${currentCategory === key ? 'bg-blue-500 text-white font-medium shadow-sm' : 'bg-gray-100 hover:bg-gray-200 text-gray-800'}`}>
                    {category.name}
                  </a>)}
              </div>
            </div>

            {/* Container for the yellow block with improved attention-grabbing design */}
            <div className="mt-8 relative">
              {/* Google Drive Badge positioned absolutely with higher z-index to ensure it's always visible */}
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-3" style={{
              zIndex: 30
              }}>
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <div>
                        <GoogleDriveBadge cursorHelp={true} />
                      </div>
                    </TooltipTrigger>
                    <TooltipContent className="bg-gradient-to-b from-gray-50 to-white border border-blue-100/40 p-3 max-w-[350px] rounded-lg shadow-lg" side="top" align="center" sideOffset={5}>
                      <p className="text-gray-700 font-bold text-sm mb-1">Utilisation immédiate</p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        Ce fichier est parfaitement organisé et immédiatement utilisable. Vous pouvez le stocker directement sur votre Google Drive, votre ordinateur, votre disque dur et l'utiliser tel quel, sans aucune autre modification.
                      </p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              
              {/* Yellow alert block with enhanced visual appeal - REMOVED SHADOW */}
              <div className="bg-gradient-to-r from-amber-50 via-amber-100 to-amber-50 rounded-xl p-5 pt-14 border border-amber-200/70 transition-all duration-300 mt-2 relative overflow-hidden">
                {/* Animated pulse effect in the background */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shine_8s_ease-in-out_infinite] z-0"></div>
                
                {/* Alert Triangle in the upper left corner with improved animation */}
                <div className="absolute top-0 left-0" style={{
                zIndex: 20
                }}>
                  <div className="bg-amber-200/80 p-3.5 rounded-bl-none rounded-tr-none rounded-tl-xl rounded-br-2xl flex items-center justify-center transition-none">
                    <AlertTriangle className="h-7 w-7 text-amber-600 flex-shrink-0 animate-icon-floating" style={{
                    transform: 'scale(1.1)'
                    }} />
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                  <div className="text-center sm:text-left pl-10">
                    <h3 className="font-bold text-black text-lg">
                      <div className="flex flex-col">
                        <span className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-amber-900 text-transparent bg-clip-text">Vous cherchez tous les logos de club de foot ?</span>
                        <span className="text-sm md:text-base text-amber-700/90 font-medium mt-1 leading-relaxed">
                          Téléchargez <u className="font-semibold">+ de 8600 LOGOS de Clubs de Football</u> organisés par pays.
                          <br />Obtenez toutes les ressources dans un fichier ZIP complet.
                        </span>
                      </div>
                    </h3>
                    
                    {/* Added benefit points with check marks */}
                    <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-left">
                      <div className="flex items-start gap-1.5">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-amber-800/90">Format PNG haute qualité</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-amber-800/90">Classés par 66 pays</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-amber-800/90">Accès immédiat</span>
                      </div>
                      <div className="flex items-start gap-1.5">
                        <Check className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                        <span className="text-amber-800/90">Mise à jour régulière</span>
                      </div>
                    </div>
                  </div>
                  <div className="relative pr-4 pl-2">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Button asChild className="bg-gradient-to-b from-amber-400 via-amber-500 to-amber-600 hover:from-amber-500 hover:to-amber-700 whitespace-nowrap text-white border border-amber-600/40 h-14 px-6 py-4 text-sm relative overflow-hidden shadow-[0_4px_12px_-2px_rgba(255,196,87,0.3),0_3px_10px_-3px_rgba(0,0,0,0.1),inset_0_1px_0_rgba(255,255,255,0.4)] hover:shadow-[0_6px_16px_-4px_rgba(255,196,87,0.45),0_4px_12px_-2px_rgba(255,183,77,0.3),inset_0_1px_0_rgba(255,255,255,0.4)] transition-all duration-300 group">
                            <a href="/" className="flex items-center gap-3 relative">
                              <Folder className="text-white" style={{
                              width: "22px",
                              height: "22px"
                              }} />
                              <span className="font-medium text-base">Voir le fichier</span>
                              <ArrowRight className="text-white/90 group-hover:translate-x-1 transition-transform" style={{
                              width: "22px",
                              height: "22px"
                              }} />
                              <div className="absolute inset-0 w-full h-full overflow-hidden">
                                <div className="absolute top-0 -left-full h-full w-full bg-gradient-to-r from-transparent via-white/70 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-shine-effect"></div>
                              </div>
                            </a>
                          </Button>
                        </TooltipTrigger>
                        <TooltipContent side="top" align="center" sideOffset={4} className="bg-white border border-gray-200 p-0 shadow-md rounded-lg overflow-hidden max-w-[300px]">
                          <div className="flex flex-col">
                            <div className="bg-gray-50 p-3 border-b border-gray-100 flex items-center gap-2">
                              <p className="font-semibold text-[14px] text-center w-full">⦗FRONT-CLOUD⦘~ Football.zip</p>
                            </div>
                            <div className="p-3 text-center">
                              <p className="text-xs text-gray-600 mb-2 italic">La plus grande collection de logos de clubs de football en haute qualité</p>
                              <div className="flex items-center justify-center gap-2 mb-2">
                                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 px-2 py-1 text-xs font-medium">1 fichier ZIP</Badge>
                                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 px-2 py-1 text-xs font-medium">66 collections</Badge>
                              </div>
                              <div className="flex flex-wrap justify-center gap-2 mb-2">
                                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 px-2 py-1 text-xs font-medium">8 774 logos</Badge>
                                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-200 px-2 py-1 text-xs font-medium">Format : PNG</Badge>
                              </div>
                              <div className="mt-3 pt-2 border-t border-dashed border-gray-200">
                                <div className="flex items-center justify-center text-xs text-green-700 gap-1.5">
                                  <Download className="h-3.5 w-3.5" />
                                  <span>Télécharger maintenant</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                </div>
                
                {/* Preview images showing folders from different countries */}
                <div className="mt-6 p-3 bg-gray-800/95 rounded-lg border border-gray-700 shadow-inner mx-auto max-w-4xl">
                  <h4 className="text-center text-white/90 text-sm mb-3 flex items-center justify-center gap-2">
                    <Trophy className="h-4 w-4 text-amber-400" />
                    <span>Aperçu de la collection par pays</span>
                  </h4>
                  
                  {/* Grid for the two images side by side */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* First image */}
                    <div className="border border-gray-700/50 rounded-md overflow-hidden">
                      <OptimizedImage 
                        src="/lovable-uploads/a3bf3c12-7202-4344-b061-7fe12f1ca116.png" 
                        alt="Aperçu des dossiers de logos de football - Set 1" 
                        width={600}
                        height={600}
                        className="w-full h-auto"
                        priority={true}
                      />
                    </div>
                    
                    {/* Second image */}
                    <div className="border border-gray-700/50 rounded-md overflow-hidden">
                      <OptimizedImage 
                        src="/lovable-uploads/e4fdc9fa-6ed2-476a-bf78-ff7c416da34d.png" 
                        alt="Aperçu des dossiers de logos de football - Set 2" 
                        width={600}
                        height={600}
                        className="w-full h-auto"
                        priority={true}
                      />
                    </div>
                  </div>
                  
                  {/* Original image underneath */}
                  <div className="mt-4 border border-gray-700/50 rounded-md overflow-hidden">
                    <OptimizedImage 
                      src="/lovable-uploads/51b5be99-39d2-4526-9803-566ab15261d6.png" 
                      alt="Aperçu de la collection de logos de football organisée par pays" 
                      width={900}
                      height={600}
                      className="rounded-md mx-auto w-full h-auto"
                      priority={true}
                    />
                  </div>
                  
                  <p className="text-center text-gray-300 text-xs mt-3">66 pays disponibles avec plus de 8600 logos au total en haute qualité</p>
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
          animation: floating 4s ease-in-out infinite;
        }
        
        .animate-shine-effect {
          animation: shine-effect 1.2s ease-out;
        }
        `}
      </style>
    </div>;
};
export default BlogHeader;

