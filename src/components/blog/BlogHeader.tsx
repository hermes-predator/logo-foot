
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
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            
            {/* Section principale à gauche */}
            <div className="flex-1 space-y-6">
              
              {/* En-tête avec fichier et badge */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="inline-flex items-center gap-3 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10" 
                     style={{ backgroundColor: 'rgba(45, 43, 41, 0.7)' }}>
                  <div className="flex items-center justify-center w-8 h-8 rounded-md bg-white/10">
                    <span className="text-xs font-bold text-white">📁</span>
                  </div>
                  <span className="text-sm font-semibold text-white tracking-wide">⦗FRONT-CLOUD⦘~ Football.zip</span>
                </div>
                
                <Link to="/" className="inline-block">
                  <GoogleDriveBadge className="shadow-md hover:shadow-lg transition-all duration-300" textOnly={true} />
                </Link>
              </div>
              
              {/* Titre principal */}
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <ArrowRight className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
                  <div>
                    <h1 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                      Téléchargez <span className="underline decoration-orange-500 decoration-2 underline-offset-4">+ de 8 600 LOGOS</span> de Clubs de Football
                    </h1>
                    <p className="text-sm text-gray-300 mt-2 font-medium">
                      Obtenez un fichier ZIP complet parfaitement organisé par pays*
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Section action à droite */}
            <div className="lg:flex-shrink-0 flex justify-center lg:justify-end">
              <div className="relative backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 shadow-2xl group hover:shadow-3xl transition-all duration-500" 
                   style={{ backgroundColor: 'rgba(45, 43, 41, 0.6)' }}>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link to="/">
                        <Button 
                          variant="outline" 
                          className="h-16 px-8 py-4 text-base gap-3 font-bold relative overflow-hidden rounded-xl rounded-b-none border-none transition-all duration-300 group" 
                          style={{ backgroundColor: 'rgba(55, 53, 51, 0.8)', color: 'white' }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transform -skew-x-12 group-hover:animate-pulse transition-all duration-700"></div>
                          <Folder className="w-5 h-5 relative z-10" />
                          <span className="relative z-10">Voir le fichier</span>
                          <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="left" className="text-white p-4 max-w-xs" style={{ backgroundColor: 'rgb(30, 29, 28)', border: 'none' }}>
                      <div className="text-sm space-y-3">
                        <div className="font-semibold text-center text-orange-400">⦗FRONT-CLOUD⦘~ Football.zip</div>
                        <Separator className="bg-gray-600" />
                        <div className="grid grid-cols-2 gap-2">
                          <Badge className="text-xs py-1" style={{ backgroundColor: 'rgba(55, 53, 51, 0.8)', color: 'white' }}>
                            1 fichier ZIP
                          </Badge>
                          <Badge className="text-xs py-1" style={{ backgroundColor: 'rgba(55, 53, 51, 0.8)', color: 'white' }}>
                            66 collections
                          </Badge>
                          <Badge className="text-xs py-1" style={{ backgroundColor: 'rgba(55, 53, 51, 0.8)', color: 'white' }}>
                            8 774 logos
                          </Badge>
                          <Badge className="text-xs py-1" style={{ backgroundColor: 'rgba(55, 53, 51, 0.8)', color: 'white' }}>
                            Format PNG
                          </Badge>
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                {/* Badge Judge.me */}
                <div style={{ backgroundColor: 'rgba(50, 48, 46, 0.5)' }}>
                  <JudgeMeBadge />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ligne de séparation avec texte */}
      <div className="relative z-20 px-4 mb-8">
        <div className="container mx-auto relative">
          <div className="relative h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative backdrop-blur-sm rounded-lg px-6 py-2.5 border border-white/10" 
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
