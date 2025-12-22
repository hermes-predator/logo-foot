
import React from 'react';

import FloatingParticles from './FloatingParticles';
import TrustPilotBadge from '../TrustPilotBadge';
import BlogHeaderCarousel from './BlogHeaderCarousel';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Separator } from '@/components/ui/separator';
import { Folder, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import trustpilotLogo from '@/assets/trustpilot-logo.png';

const BlogHeader = () => {
  return <div className="w-full relative overflow-hidden rounded-b-3xl" style={{ backgroundColor: 'rgb(30, 29, 28)' }}>
      {/* Particules flottantes */}
      <FloatingParticles />
      
      {/* Contenu principal */}
      <div className="relative z-10 text-white">
        <div className="container mx-auto px-4 pt-8 pb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pr-4">
            {/* Contenu principal à gauche */}
            <div className="flex-1 space-y-4">
              {/* Texte principal */}
              <div className="space-y-3 ml-8">
                <p className="text-xl md:text-2xl text-white max-w-3xl leading-relaxed">
                  <span className="flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <span className="font-medium">Téléchargez <span className="font-bold underline text-white">+ de 8 800 LOGOS de Clubs de Football</span></span>
                  </span>
                </p>
                <p className="text-xs md:text-sm font-normal text-gray-300">
                  Obtenez un fichier ZIP complet parfaitement organisé par pays*
                </p>
                
                {/* Badges de confiance minimalistes - sous les textes */}
                <div className="flex flex-wrap items-center gap-3 text-[11px] sm:text-xs text-gray-400 pt-2">
                  <div className="flex items-center gap-1.5">
                    <img src="/lovable-uploads/158cf2a6-67ff-42e3-8af1-c42f1ac874b8.png" alt="SumUp" className="h-3.5 opacity-80" />
                    <span>Paiement Sécurisé</span>
                  </div>
                  <span className="text-gray-600">•</span>
                  <div className="flex items-center gap-1.5">
                    <img src="/lovable-uploads/91043604-de74-45c7-bcbf-6621a40a1109.png" alt="Google Drive" className="h-3.5 opacity-80" />
                    <span>Stockable sur Drive</span>
                  </div>
                  <span className="text-gray-600">•</span>
                  <div className="flex items-center gap-1">
                    <img src={trustpilotLogo} alt="TrustPilot" className="h-3.5 opacity-80" />
                    <span className="font-medium">4.8/5</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Section droite - Button et JudgeMe */}
            <div className="lg:flex-shrink-0 flex flex-col items-center gap-0 mr-4">
              <div className="relative backdrop-blur-md rounded-lg overflow-hidden" style={{ backgroundColor: 'rgba(60, 56, 54, 0.4)' }}>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link to="/" className="block w-full">
                        <button 
                          className="group w-full h-20 px-10 py-4 text-lg gap-4 font-bold relative overflow-hidden rounded-lg rounded-b-none transition-all duration-300 flex items-center justify-center text-white"
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
                
                <div 
                  className="group px-4 py-2" 
                  style={{ backgroundColor: 'rgba(50, 48, 46, 0.6)' }}
                >
                  <TrustPilotBadge variant="dark" />
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
