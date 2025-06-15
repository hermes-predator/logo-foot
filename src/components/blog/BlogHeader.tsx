
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
    <div className="w-full relative overflow-hidden rounded-b-3xl">
      {/* Gradient animé en arrière-plan */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-800 rounded-b-3xl">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-gray-900/30 animate-pulse rounded-b-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-gray-800/50 via-transparent to-gray-900/40 rounded-b-3xl" 
             style={{
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
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            {/* Contenu principal à gauche */}
            <div className="flex-1 pl-2 lg:pl-6">
              <h1 className="text-2xl md:text-3xl font-bold mb-3">
                Vous voulez tous les logos de foot ?
              </h1>
              <p className="text-base md:text-lg text-white max-w-3xl leading-relaxed mb-2">
                <span className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-orange-500 flex-shrink-0" />
                  <span className="font-medium">Téléchargez <span className="font-bold underline text-white">+ de 8 600 LOGOS de Clubs de Football</span> organisés par pays.</span>
                </span>
              </p>
              <p className="text-sm font-normal mb-5">
                Obtenez toutes les ressources dans un fichier ZIP complet*
              </p>
              
              {/* Badge Google Drive avec léger arrondi et lien vers l'accueil */}
              <div className="flex justify-start mb-5">
                <Link to="/">
                  <GoogleDriveBadge className="rounded-md" />
                </Link>
              </div>
            </div>
            
            {/* Bouton et badge à droite */}
            <div className="lg:flex-shrink-0 flex flex-col items-center gap-3 pr-2 lg:pr-6">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link to="/">
                      <Button 
                        variant="outline" 
                        className="bg-gray-900/60 border-2 border-gray-700/50 text-white hover:bg-gray-800/70 hover:border-gray-600/60 hover:text-white hover:shadow-2xl shadow-black/30 transition-all duration-300 h-20 px-8 py-5 text-xl gap-4 group backdrop-blur-md font-semibold relative overflow-hidden animate-pulse"
                      >
                        {/* Effet de brillance avec pulsation combinée */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-600/30 to-transparent -translate-x-full animate-[shimmer_2s_ease-in-out_infinite]"></div>
                        <Folder className="!w-8 !h-8 transition-transform duration-200 relative z-10" />
                        <span className="relative z-10">Voir le fichier</span>
                        <ArrowRight className="h-8 w-8 group-hover:translate-x-1 transition-transform duration-200 relative z-10" />
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
              
              {/* Badge Judge.me */}
              <JudgeMeBadge />
            </div>
          </div>
        </div>
      </div>
      
      {/* Ligne de séparation avec texte superposé */}
      <div className="relative z-20 px-4 mb-12">
        <div className="container mx-auto relative">
          <Separator className="bg-white/30" />
          {/* Texte centré sur la ligne */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative bg-gradient-to-r from-gray-900 via-black to-gray-800 px-6 py-2 rounded-full border border-white/20 shadow-lg backdrop-blur-sm">
              <p className="text-white text-base font-normal whitespace-nowrap relative z-10">
                Aperçu de quelques collections : 
                <Link to="/" className="inline-block ml-2 hover:opacity-80 transition-opacity duration-300">
                  <span className="font-bold text-sm">
                    ⦗FRONT-CLOUD⦘~ Football.zip
                  </span>
                </Link>
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
          100% { transform: translateX(100%); }
        }
        `}
      </style>
    </div>
  );
};

export default BlogHeader;
