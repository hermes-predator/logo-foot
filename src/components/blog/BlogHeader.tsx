

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
  return <div className="w-full relative overflow-hidden rounded-b-3xl">
      {/* Gradient animé en arrière-plan */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-800 rounded-b-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-gray-900/30 animate-pulse rounded-b-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-gray-800/50 via-transparent to-gray-900/40 rounded-b-3xl" style={{
        background: 'linear-gradient(45deg, rgba(17,24,39,0.8) 0%, rgba(55,65,81,0.3) 25%, rgba(17,24,39,0.9) 50%, rgba(31,41,55,0.4) 75%, rgba(17,24,39,0.8) 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradientShift 8s ease-in-out infinite'
      }}></div>
      </div>
      
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
                <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-md rounded-lg px-3 py-2 shadow-lg">
                  {/* Effet de brillance subtil */}
                  <div className="absolute inset-0 bg-gradient-to-r from-slate-700/10 via-slate-600/5 to-slate-700/10 rounded-lg"></div>
                  
                  <div className="relative z-10 bg-slate-700/80 border border-slate-500/60 px-2 py-1 rounded backdrop-blur-sm">
                    <span className="text-sm font-semibold text-slate-200">⦗FRONT-CLOUD⦘~ Football.zip</span>
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
              {/* Container unifié pour le bouton et le badge - effet incorporé */}
              <div className="relative bg-slate-800/40 backdrop-blur-md rounded-lg shadow-2xl group hover:shadow-3xl transition-all duration-300 overflow-hidden">
                {/* Effet de brillance subtil sur le container */}
                <div className="absolute inset-0 bg-gradient-to-r from-slate-700/20 via-slate-600/10 to-slate-700/20"></div>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link to="/">
                        <Button variant="outline" className="bg-transparent border-0 text-slate-200 hover:bg-slate-600/30 hover:text-white transition-all duration-300 h-20 px-10 py-4 text-lg gap-4 group backdrop-blur-none font-semibold relative overflow-hidden rounded-lg rounded-b-none group-hover:bg-slate-600/20" style={{
                        animation: 'subtlePulse 2.5s ease-in-out infinite'
                      }}>
                          {/* Effet de brillance shimmer */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-slate-400/20 to-transparent -translate-x-full" style={{
                          animation: 'shimmer 2.5s ease-in-out infinite'
                        }}></div>
                          <Folder className="!w-7 !h-7 transition-transform duration-200 relative z-10" />
                          <span className="relative z-10">Voir le fichier</span>
                          <ArrowRight className="h-7 w-7 group-hover:translate-x-1 transition-transform duration-200 relative z-10" />
                        </Button>
                      </Link>
                    </TooltipTrigger>
                    <TooltipContent side="right" className="bg-gray-900 border-gray-700 text-white p-4">
                      <div className="text-sm">
                        <div className="font-semibold mb-3 text-center">⦗FRONT-CLOUD⦘~ Football.zip</div>
                        <Separator className="bg-gray-700 mb-3" />
                        <div className="grid grid-cols-2 gap-2">
                          <Badge className="bg-orange-500 text-white hover:bg-orange-600">
                            1 fichier ZIP
                          </Badge>
                          <Badge className="bg-orange-500 text-white hover:bg-orange-600">
                            66 collections
                          </Badge>
                          <Badge className="bg-orange-500 text-white hover:bg-orange-600">
                            8 774 logos
                          </Badge>
                          <Badge className="bg-orange-500 text-white hover:bg-orange-600">
                            Format PNG
                          </Badge>
                        </div>
                      </div>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
                
                {/* Ligne de séparation subtile */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-500/30 to-transparent"></div>
                
                {/* Badge Judge.me intégré */}
                <JudgeMeBadge />
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
            <div className="relative bg-slate-800/50 backdrop-blur-md rounded-lg px-4 py-2 border border-slate-500/30">
              {/* Effet de brillance subtil */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-700/10 via-slate-600/5 to-slate-700/10 rounded-lg"></div>
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
      
      <style>
        {`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes subtlePulse {
          0%, 20% { 
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 10px 40px 8px rgba(0, 0, 0, 0.6);
            transform: scale(1.02);
          }
          80%, 100% { 
            box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
            transform: scale(1);
          }
        }
        `}
      </style>
    </div>;
};

export default BlogHeader;

