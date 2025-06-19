
import React from 'react';
import GoogleDriveBadge from '../payment/GoogleDriveBadge';
import FloatingParticles from './FloatingParticles';
import JudgeMeBadge from './JudgeMeBadge';
import BlogHeaderCarousel from './BlogHeaderCarousel';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';
import { Folder, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogHeader = () => {
  return (
    <div className="w-full relative overflow-hidden rounded-b-3xl" style={{ backgroundColor: 'rgb(30, 29, 28)' }}>
      {/* Particules flottantes */}
      <FloatingParticles />
      
      {/* Contenu principal */}
      <div className="relative z-10 text-white">
        <div className="container mx-auto px-4 pt-8 pb-6">
          {/* Conteneur principal avec design professionnel */}
          <div className="relative backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden" 
               style={{ backgroundColor: 'rgba(40, 38, 36, 0.6)' }}>
            
            {/* Effet de brillance subtil */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="relative z-10 p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                
                {/* Section principale à gauche */}
                <div className="flex-1 space-y-5">
                  
                  {/* Conteneur unifié pour le fichier et le badge Google Drive */}
                  <div className="inline-flex items-center gap-4 backdrop-blur-sm rounded-xl px-5 py-3.5 border border-white/15 bg-white/5">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-white/15">
                        <span className="text-xs font-bold text-white">📁</span>
                      </div>
                      <span className="text-sm font-semibold text-white tracking-wide">⦗FRONT-CLOUD⦘~ Football.zip</span>
                    </div>
                    
                    <div className="h-5 w-px bg-white/20"></div>
                    
                    <Link to="/" className="inline-block">
                      <GoogleDriveBadge className="shadow-sm hover:shadow-md transition-all duration-300" textOnly={true} />
                    </Link>
                  </div>
                  
                  {/* Titre principal avec design épuré */}
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <ArrowRight className="h-6 w-6 text-orange-400 flex-shrink-0 mt-1" />
                      <div>
                        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight tracking-tight">
                          Téléchargez <span className="bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent font-extrabold">+ de 8 600 LOGOS</span> de Clubs de Football
                        </h1>
                        <p className="text-sm md:text-base text-gray-300 mt-3 font-medium leading-relaxed">
                          Obtenez un fichier ZIP complet parfaitement organisé par pays*
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Section action à droite */}
                <div className="lg:flex-shrink-0 flex justify-center lg:justify-end">
                  <div className="relative backdrop-blur-sm rounded-xl overflow-hidden border border-white/15 shadow-xl group hover:shadow-2xl transition-all duration-500" 
                       style={{ backgroundColor: 'rgba(50, 48, 46, 0.7)' }}>
                    
                    {/* Effet de brillance sur hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-all duration-1000 ease-out"></div>
                    
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Link to="/">
                            <Button 
                              variant="outline" 
                              className="h-16 px-8 py-4 text-base gap-3 font-bold relative overflow-hidden rounded-xl rounded-b-none border-none transition-all duration-300 group" 
                              style={{ backgroundColor: 'rgba(60, 58, 56, 0.8)', color: 'white' }}
                            >
                              <Folder className="w-5 h-5 relative z-10" />
                              <span className="relative z-10">Voir le fichier</span>
                              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                            </Button>
                          </Link>
                        </TooltipTrigger>
                        <TooltipContent side="left" className="text-white p-4 max-w-xs border-white/10" style={{ backgroundColor: 'rgb(40, 38, 36)' }}>
                          <div className="text-sm space-y-3">
                            <div className="font-semibold text-center text-orange-400">⦗FRONT-CLOUD⦘~ Football.zip</div>
                            <Separator className="bg-gray-600" />
                            <div className="grid grid-cols-2 gap-2">
                              <Badge className="text-xs py-1 bg-white/10 text-white border-white/20">
                                1 fichier ZIP
                              </Badge>
                              <Badge className="text-xs py-1 bg-white/10 text-white border-white/20">
                                66 collections
                              </Badge>
                              <Badge className="text-xs py-1 bg-white/10 text-white border-white/20">
                                8 774 logos
                              </Badge>
                              <Badge className="text-xs py-1 bg-white/10 text-white border-white/20">
                                Format PNG
                              </Badge>
                            </div>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                    
                    {/* Badge Judge.me */}
                    <div className="border-t border-white/10" style={{ backgroundColor: 'rgba(55, 53, 51, 0.6)' }}>
                      <JudgeMeBadge />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ligne de séparation avec texte */}
      <div className="relative z-20 px-4 mb-8 mt-6">
        <div className="container mx-auto relative">
          <div className="relative h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative backdrop-blur-sm rounded-lg px-6 py-2.5 border border-white/15" 
                 style={{ backgroundColor: 'rgba(45, 43, 41, 0.8)' }}>
              <p className="text-white text-sm font-medium whitespace-nowrap relative z-10">
                Aperçu de quelques collections du fichier ZIP
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Carrousel */}
      <div className="relative z-20 pb-6">
        <BlogHeaderCarousel />
      </div>
    </div>
  );
};

export default BlogHeader;
