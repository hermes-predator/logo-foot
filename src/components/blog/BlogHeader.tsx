
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
      {/* Gradient optimisé pour harmoniser avec vos visuels RGB(33,33,33) vers RGB(112,112,112) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-black rounded-b-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/25 via-black/40 to-gray-700/25 animate-pulse rounded-b-3xl"></div>
        <div 
          className="absolute inset-0 rounded-b-3xl" 
          style={{
            backgroundImage: 'linear-gradient(45deg, rgba(0,0,0,0.97) 0%, rgba(45,45,45,0.3) 25%, rgba(20,20,20,0.85) 50%, rgba(80,80,80,0.25) 75%, rgba(0,0,0,0.97) 100%)',
            backgroundSize: '400% 400%',
            animation: 'gradientShift 8s ease-in-out infinite'
          }}
        ></div>
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
                <div className="inline-flex items-center gap-2 bg-gray-900/60 backdrop-blur-md rounded-lg px-3 py-2 shadow-lg border border-gray-700/30">
                  {/* Effet de brillance subtil */}
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 via-gray-600/10 to-gray-800/20 rounded-lg"></div>
                  
                  <div className="relative z-10 bg-gray-800/90 border border-gray-600/60 px-2 py-1 rounded backdrop-blur-sm">
                    <span className="text-sm font-semibold text-gray-200">⦗FRONT-CLOUD⦘~ Football.zip</span>
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
              <div className="relative bg-gray-900/50 backdrop-blur-md rounded-lg shadow-2xl group hover:shadow-3xl transition-all duration-300 overflow-hidden border border-gray-700/20">
                {/* Effet de brillance subtil sur le container */}
                <div className="absolute inset-0 bg-gradient-to-r from-gray-800/30 via-gray-600/15 to-gray-800/30"></div>
                
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Link to="/">
                        <Button variant="outline" className="bg-transparent border-0 text-gray-200 hover:bg-gray-700/40 hover:text-white transition-all duration-300 h-20 px-10 py-4 text-lg gap-4 group backdrop-blur-none font-semibold relative overflow-hidden rounded-lg rounded-b-none group-hover:bg-gray-700/30" style={{
                        animation: 'subtlePulse 2.5s ease-in-out infinite'
                      }}>
                          {/* Effet de brillance shimmer */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-400/30 to-transparent -translate-x-full" style={{
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
                <div className="h-px bg-gradient-to-r from-transparent via-gray-600/40 to-transparent"></div>
                
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
            <div className="relative bg-gray-900/60 backdrop-blur-md rounded-lg px-4 py-2 border border-gray-600/30">
              {/* Effet de brillance subtil */}
              <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 via-gray-600/10 to-gray-800/20 rounded-lg"></div>
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
