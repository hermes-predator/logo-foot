
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
    <div className="w-full relative overflow-hidden">
      {/* Gradient animé en arrière-plan */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-black to-gray-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/10 to-gray-900/30 animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-gray-800/50 via-transparent to-gray-900/40" 
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
        <div className="container mx-auto px-4 pt-6 pb-8">
          <div className="text-sm md:text-base text-gray-400 mb-8 text-center">Blog</div>
          
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Contenu principal à gauche */}
            <div className="flex-1 pl-4 lg:pl-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Vous cherchez tous les logos de foot ?
              </h1>
              <p className="font-semibold text-lg md:text-xl text-white max-w-3xl leading-relaxed mb-6">
                Téléchargez <span className="font-bold underline text-white">+ de 8 600 LOGOS de Clubs de Football</span> organisés par pays.
                <br /><br />
                <span className="text-sm md:text-base font-normal">Obtenez toutes les ressources dans un fichier ZIP complet.</span>
              </p>
              
              {/* Badge Google Drive avec léger arrondi et lien vers l'accueil */}
              <div className="flex justify-start mb-6">
                <Link to="/">
                  <GoogleDriveBadge className="rounded-md" />
                </Link>
              </div>
            </div>
            
            {/* Bouton et badge à droite */}
            <div className="lg:flex-shrink-0 flex flex-col items-center gap-4 pr-4 lg:pr-8">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="bg-white/10 border-white/20 text-white hover:bg-white/20 hover:border-white/30 hover:text-white transition-all duration-300 h-20 px-8 py-5 text-xl gap-4"
                    >
                      <Folder className="h-10 w-10" />
                      Voir le fichier
                      <ArrowRight className="h-10 w-10" />
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent className="bg-gray-900 border-gray-700 text-white p-3">
                    <div className="text-sm">
                      <div className="font-semibold mb-2">⦗FRONT-CLOUD⦘~ Football.zip</div>
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
      
      {/* Ligne de séparation */}
      <div className="relative z-20 px-4">
        <div className="container mx-auto">
          <Separator className="bg-orange-500/30 mb-6" />
        </div>
      </div>
      
      {/* Texte d'aperçu des collections */}
      <div className="relative z-20 text-white text-center mb-8">
        <p className="text-lg font-normal">
          Aperçu de quelques collections : 
          <span className="inline-block ml-2 px-3 py-1 border-2 border-orange-500 rounded-md bg-orange-500/20">
            ⦗FRONT-CLOUD⦘~ Football.zip
          </span>
        </p>
      </div>
      
      {/* Carrousel en superposition qui déborde légèrement */}
      <div className="relative z-20 -mt-4 pb-8">
        <BlogHeaderCarousel />
      </div>
      
      <style>
        {`
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        `}
      </style>
    </div>
  );
};

export default BlogHeader;
