
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
        <div className="container mx-auto px-4 pt-12 pb-8">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            {/* Contenu principal à gauche */}
            <div className="flex-1 pl-2 lg:pl-8 space-y-6">
              {/* Container harmonisé pour le nom du fichier et badge Google Drive */}
              <div className="relative">
                <div className="inline-flex items-center gap-3 backdrop-blur-lg rounded-xl px-4 py-3 shadow-2xl border border-white/10 bg-gradient-to-r from-white/5 to-white/10 hover:from-white/10 hover:to-white/15 transition-all duration-500 group">
                  
                  <div className="relative z-10 border border-white/20 px-3 py-2 rounded-lg backdrop-blur-sm bg-gradient-to-r from-black/20 to-black/30 group-hover:border-white/30 transition-all duration-300">
                    <span className="text-sm font-bold text-white tracking-wide">⦗FRONT-CLOUD⦘~ Football.zip</span>
                  </div>
                  
                  <Link to="/" className="relative z-10 transform hover:scale-105 transition-transform duration-200">
                    <GoogleDriveBadge className="rounded-lg shadow-lg" textOnly={true} />
                  </Link>
                </div>
              </div>
              
              {/* Texte principal avec design amélioré */}
              <div className="space-y-3">
                <p className="text-2xl md:text-3xl lg:text-4xl text-white max-w-4xl leading-relaxed">
                  <span className="flex items-center gap-3">
                    <ArrowRight className="h-6 w-6 md:h-7 md:w-7 text-orange-400 flex-shrink-0 animate-pulse" />
                    <span className="font-semibold">Téléchargez <span className="font-black bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">+ de 8 600 LOGOS</span> de Clubs de Football</span>
                  </span>
                </p>
                <p className="text-sm md:text-base font-light text-gray-200 ml-9 md:ml-10">
                  Obtenez un fichier ZIP complet parfaitement organisé par pays*
                </p>
              </div>
            </div>
            
            {/* Section droite avec bouton et badge améliorés */}
            <div className="lg:flex-shrink-0 flex flex-col items-center gap-0 pr-2 lg:pr-8">
              {/* Container unifié pour le bouton et le badge avec design premium */}
              <div className="relative backdrop-blur-lg rounded-2xl shadow-2xl group hover:shadow-3xl transition-all duration-500 overflow-hidden border border-white/10 bg-gradient-to-b from-white/5 to-white/10">
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link to="/">
                        <Button variant="outline" className="bg-transparent border-0 text-white hover:bg-white/10 hover:text-white transition-all duration-300 h-24 px-12 py-6 text-lg gap-4 group backdrop-blur-none font-bold relative overflow-hidden rounded-2xl rounded-b-none">
                          <Folder className="!w-8 !h-8 transition-all duration-300 relative z-10 group-hover:scale-110" />
                          <span className="relative z-10 text-lg">Voir le fichier</span>
                          <ArrowRight className="h-8 w-8 group-hover:translate-x-2 transition-all duration-300 relative z-10" />
                          
                          {/* Effet de brillance au survol */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"></div>
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="border-white/20 text-white p-6 rounded-xl shadow-2xl" style={{ backgroundColor: 'rgb(20, 19, 18)' }}>
                      <div className="text-sm">
                        <div className="font-bold mb-4 text-center text-lg">⦗FRONT-CLOUD⦘~ Football.zip</div>
                        <Separator className="bg-white/20 mb-4" />
                        <div className="grid grid-cols-2 gap-3">
                          <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg">
                            1 fichier ZIP
                          </Badge>
                          <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg">
                            66 collections
                          </Badge>
                          <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg">
                            8 774 logos
                          </Badge>
                          <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-lg">
                            Format PNG
                          </Badge>
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                {/* Ligne de séparation élégante */}
                <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                
                {/* Badge Judge.me intégré avec design amélioré */}
                <JudgeMeBadge />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Ligne de séparation avec texte superposé et design premium */}
      <div className="relative z-20 px-4 mb-16">
        <div className="container mx-auto relative">
          {/* Ligne de séparation avec dégradé amélioré */}
          <div className="relative h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
          </div>
          {/* Texte centré sur la ligne avec design premium */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative backdrop-blur-lg rounded-xl px-6 py-3 border border-white/20 bg-gradient-to-r from-black/30 to-black/40 shadow-2xl">
              <p className="text-white text-sm md:text-base font-semibold whitespace-nowrap relative z-10">
                Aperçu de quelques collections du fichier ZIP
              </p>
              {/* Effet de brillance subtil */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse rounded-xl"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Carrousel en superposition qui déborde légèrement - avec plus d'espace */}
      <div className="relative z-20 pb-8">
        <BlogHeaderCarousel />
      </div>
    </div>;
};

export default BlogHeader;
