
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
  return <div className="w-full relative overflow-hidden rounded-b-3xl" style={{ backgroundColor: 'rgb(30, 29, 28)' }}>
      {/* Particules flottantes */}
      <FloatingParticles />
      
      {/* Contenu principal */}
      <div className="relative z-10 text-white">
        <div className="container mx-auto px-4 pt-8 pb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pr-4">
            {/* Contenu principal à gauche */}
            <div className="flex-1 space-y-6">
              {/* Container intégré folder + Google Drive - design unifié et harmonieux */}
              <div className="relative ml-8 -mt-2">
                <Link to="/" className="block">
                  <TooltipProvider>
                    <Tooltip delayDuration={300}>
                      <TooltipTrigger asChild>
                        <div className="inline-flex items-center backdrop-blur-md rounded-xl overflow-hidden hover:bg-opacity-90 transition-all duration-200" 
                             style={{ backgroundColor: 'rgba(40, 38, 36, 0.98)' }}>
                          
                          {/* Section folder avec icône - sans couleur de fond */}
                          <div className="px-2.5 py-1.5 flex items-center justify-center rounded-l-xl relative overflow-hidden pl-4">
                            {/* Effet de brillance subtil pour le branding */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-500"></div>
                            <Folder className="w-5.5 h-5.5 relative z-10 transition-colors duration-300" fill="rgba(65, 63, 61, 0.8)" stroke="rgba(65, 63, 61, 0.8)" />
                          </div>
                          
                          {/* Séparateur élégant centré - parfaitement aligné */}
                          <div className="px-1 py-1.5 flex items-center justify-center">
                            <div className="w-px h-5 bg-gradient-to-b from-gray-500/30 via-gray-400/60 to-gray-500/30"></div>
                          </div>
                          
                          {/* Section Google Drive badge intégrée - parfaitement alignée */}
                          <div className="pl-1 pr-1.5 py-1.5 rounded-r-xl flex items-center justify-center">
                            <div className="relative z-10">
                              <GoogleDriveBadge 
                                className="border-0 bg-transparent" 
                                textOnly={true} 
                              />
                            </div>
                          </div>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent side="bottom" sideOffset={3} align="start" className="text-white p-3 shadow-lg max-w-xs" style={{ backgroundColor: 'rgb(45, 43, 41)', border: '1px solid rgba(55, 53, 51, 0.8)' }}>
                        <div className="text-sm">
                          <div className="font-semibold mb-2">Accès direct au fichier</div>
                          <div className="text-gray-300">Ce fichier est immédiatement utilisable. Stockage sur votre Google Drive, votre ordinateur ou un disque dur.</div>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
              
              
              {/* Texte principal */}
              <div className="space-y-3 ml-8">
                <p className="text-xl md:text-2xl text-white max-w-3xl leading-relaxed">
                  <span className="flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <span className="font-medium">Téléchargez <span className="font-bold underline text-white">+ de 8 600 LOGOS de Clubs de Football</span></span>
                  </span>
                </p>
                <p className="text-xs md:text-sm font-normal text-gray-300">
                  Obtenez un fichier ZIP complet parfaitement organisé par pays*
                </p>
              </div>
            </div>
            
            {/* Section droite - Button et JudgeMe */}
            <div className="lg:flex-shrink-0 flex flex-col items-center gap-0 mr-4">
              <div className="relative backdrop-blur-md rounded-lg overflow-hidden" style={{ backgroundColor: 'rgba(60, 56, 54, 0.4)' }}>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link to="/">
                        <button 
                          className="group h-20 px-10 py-4 text-lg gap-4 font-bold relative overflow-hidden rounded-lg rounded-b-none transition-all duration-300 flex items-center justify-center text-white"
                          style={{ 
                            backgroundColor: 'rgba(50, 48, 46, 0.6)',
                            border: 'none'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(70, 68, 66, 0.8)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'rgba(50, 48, 46, 0.6)';
                          }}
                        >
                          <Folder className="!w-7 !h-7 relative z-10 text-white" />
                          <span className="relative z-10 text-white">Voir le fichier</span>
                          <ArrowRight className="h-6 w-6 relative z-10 text-white transition-transform duration-300 group-hover:translate-x-1" />
                        </button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="text-white p-4" style={{ backgroundColor: 'rgb(30, 29, 28)', border: 'none' }}>
                      <div className="text-sm">
                        <div className="font-semibold mb-3 text-center">⦗FRONT-CLOUD⦘~ Football.zip</div>
                        <Separator className="bg-gray-700 mb-3" />
                        <div className="grid grid-cols-2 gap-2">
                          <Badge className="text-white" style={{ backgroundColor: 'rgba(45, 43, 41, 0.8)' }}>
                            1 fichier ZIP
                          </Badge>
                          <Badge className="text-white" style={{ backgroundColor: 'rgba(45, 43, 41, 0.8)' }}>
                            66 collections
                          </Badge>
                          <Badge className="text-white" style={{ backgroundColor: 'rgba(45, 43, 41, 0.8)' }}>
                            8 774 logos
                          </Badge>
                          <Badge className="text-white" style={{ backgroundColor: 'rgba(45, 43, 41, 0.8)' }}>
                            Format PNG
                          </Badge>
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                {/* Ligne de séparation subtile */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-600/30 to-transparent"></div>
                
                <div style={{ backgroundColor: 'rgba(50, 48, 46, 0.6)' }}>
                  <JudgeMeBadge />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section séparateur avec ligne et texte centré */}
      <div className="relative z-20 px-4 mb-8 mt-1">
        <div className="container mx-auto relative">
          <div className="relative h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative backdrop-blur-md rounded-lg px-4 py-2" style={{ backgroundColor: 'rgba(40, 39, 37, 0.8)' }}>
              <p className="text-white text-sm font-medium whitespace-nowrap relative z-10">
                Aperçu : ⦗FRONT-CLOUD⦘~ Football.zip
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Carrousel */}
      <div className="relative z-20 pb-6">
        <BlogHeaderCarousel />
      </div>
    </div>;
};

export default BlogHeader;
