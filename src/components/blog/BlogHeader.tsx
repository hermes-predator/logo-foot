
import React from 'react';
import GoogleDriveBadge from '../payment/GoogleDriveBadge';
import { Button } from '@/components/ui/button';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Folder, ArrowRight } from 'lucide-react';

const BlogHeader = () => {
  return (
    <div className="w-full bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white">
      <div className="container mx-auto px-4 pt-6 pb-16">
        <div className="text-sm md:text-base text-gray-400 mb-8 text-center">Blog</div>
        
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Contenu principal à gauche */}
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-bold mb-4">
              Vous cherchez tous les logos de foot ?
            </h1>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed mb-6">
              Téléchargez + de 8 600 LOGOS de Clubs de Football organisés par pays.
              <br /><br />
              Obtenez toutes les ressources dans un fichier ZIP complet.
            </p>
            
            {/* Badge Google Drive */}
            <div className="flex justify-start">
              <GoogleDriveBadge />
            </div>
          </div>
          
          {/* Bouton à droite */}
          <div className="lg:flex-shrink-0">
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
                    <div className="font-semibold mb-1">⦗FRONT-CLOUD⦘~ Football.zip</div>
                    <div>1 fichier ZIP</div>
                    <div>66 collections</div>
                    <div>8 774 logos</div>
                    <div>Format PNG</div>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
