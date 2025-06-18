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
        <div className="container mx-auto px-4 pt-8 pb-6">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
            {/* Contenu principal à gauche */}
            <div className="flex-1 pl-2 lg:pl-6 mt-4">
              {/* Container harmonisé pour le nom du fichier et badge Google Drive */}
              <div className="relative mb-4">
                <div className="inline-flex items-center gap-2 backdrop-blur-md rounded-md px-1.5 py-1.5 shadow-lg" style={{ backgroundColor: 'rgba(50, 48, 46, 0.8)' }}>
                  
                  <div className="relative z-10 px-2 py-2.5 rounded backdrop-blur-sm border border-gray-600/30 flex items-center justify-center" style={{ backgroundColor: 'rgba(40, 38, 36, 0.9)' }}>
                    <span className="text-xs font-bold text-gray-200">⦗FRONT-CLOUD⦘~ Football.zip</span>
                  </div>
                  
                  <Link to="/" className="relative z-10">
                    <GoogleDriveBadge className="rounded" textOnly={true} />
                  </Link>
                </div>
              </div>
              
              
              <p className="text-xl md:text-2xl text-white max-w-3xl leading-relaxed mb-2">
                <span className="flex items-center gap-2">
                  <ArrowRight className="h-5 w-5 text-orange-500 flex-shrink-0" />
                  <span className="font-medium">Téléchargez <span className="font-bold underline text-white">+ de 8 600 LOGOS de Clubs de Football</span></span>
                </span>
              </p>
              <p className="text-xs md:text-sm font-normal mb-6">
                Obtenez un fichier ZIP complet parfaitement organisé par pays*
              </p>
            </div>
            
            
            <div className="lg:flex-shrink-0 flex flex-col items-center gap-0 pr-2 lg:pr-6">
              {/* Container unifié pour le bouton et le badge avec harmonie des couleurs */}
              <div className="relative backdrop-blur-md rounded-lg shadow-2xl group hover:shadow-3xl transition-all duration-300 overflow-hidden" style={{ backgroundColor: 'rgba(60, 56, 54, 0.4)' }}>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link to="/">
                        <Button variant="outline" className="h-20 px-10 py-4 text-lg gap-4 group font-bold relative overflow-hidden rounded-lg rounded-b-none shadow-lg transition-all duration-300" style={{ backgroundColor: 'rgba(45, 43, 41, 0.9)', color: 'white', border: 'none' }}>
                          <Folder className="!w-7 !h-7 transition-transform duration-200 relative z-10 text-white" />
                          <span className="relative z-10 text-white">Voir le fichier</span>
                          <ArrowRight className="h-7 w-7 group-hover:translate-x-1 transition-transform duration-200 relative z-10 text-white" />
                        </Button>
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
                
                {/* Badge Judge.me avec couleurs harmonisées */}
                <div style={{ backgroundColor: 'rgba(50, 48, 46, 0.6)' }}>
                  <JudgeMeBadge />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ligne de séparation avec texte superposé et effet de fondu aux extrémités */}
      <div className="relative z-20 px-4 mb-12">
        <div className="container mx-auto relative">
          {/* Ligne de séparation avec dégradé */}
          <div className="relative h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </div>
          {/* Texte centré sur la ligne */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative backdrop-blur-md rounded-lg px-4 py-2" style={{ backgroundColor: 'rgba(40, 39, 37, 0.8)' }}>
              <p className="text-white text-sm font-medium whitespace-nowrap relative z-10">
                Aperçu de quelques collections du fichier ZIP
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Carrousel en superposition qui déborde légèrement - avec plus d'espace */}
      <div className="relative z-20 pb-6">
        <BlogHeaderCarousel />
      </div>
    </div>;
};

export default BlogHeader;
