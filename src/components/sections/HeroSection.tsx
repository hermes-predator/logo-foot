
import React from 'react';
import { ArrowRight, FileArchive, Star, Shield, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroTestimonialBadge from './HeroTestimonialBadge';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import PackDescription from './PackDescription';
import GoogleDriveBadge from '../payment/GoogleDriveBadge';

interface HeroSectionProps {
  onScrollToPayment: () => void;
}

const HeroSection = ({ onScrollToPayment }: HeroSectionProps) => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-8 sm:pt-12 pb-8 sm:pb-16 overflow-hidden">
      {/* Éléments décoratifs de fond */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-50/10 to-purple-50/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge de témoignage */}
          <div className="mb-6 sm:mb-8">
            <HeroTestimonialBadge />
          </div>

          {/* Titre principal */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              +8 600 logos
            </span>
            <br />
            <span className="text-gray-900">de football en</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              haute qualité
            </span>
          </h1>

          {/* Sous-titre */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 sm:mb-10 leading-relaxed font-medium max-w-4xl mx-auto">
            Recevez <strong className="text-gray-900">+ de 8 600 logos de football</strong> en un fichier parfaitement organisé par pays. 
            <span className="block mt-2 text-base sm:text-lg text-gray-500">
              Collection complète de logo des équipes de foot du monde entier.
            </span>
          </p>

          {/* Points clés avec icônes */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-8 sm:mb-12 text-sm sm:text-base">
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-sm border border-gray-200/50">
              <Star className="h-4 w-4 sm:h-5 sm:w-5 text-yellow-500 fill-current" />
              <span className="font-medium text-gray-700">Qualité premium</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-sm border border-gray-200/50">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 text-green-500" />
              <span className="font-medium text-gray-700">Organisé par pays</span>
            </div>
            <div className="flex items-center gap-2 bg-white/60 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-full shadow-sm border border-gray-200/50">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-blue-500" />
              <span className="font-medium text-gray-700">Accès immédiat</span>
            </div>
          </div>

          {/* Nom du fichier et badge Google Drive */}
          <div className="mb-8 sm:mb-10">
            <div className="inline-flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-white/80 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-lg border border-gray-200/50">
              <span className="text-lg sm:text-xl font-bold text-gray-900 font-mono tracking-tight">
                ⦗FRONT-CLOUD⦘~ Football.zip
              </span>
              <GoogleDriveBadge />
            </div>
          </div>

          {/* Boutons d'action principaux - TAILLE AUGMENTÉE */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-12">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold bg-white/90 hover:bg-white border-2 border-gray-300 hover:border-gray-400 text-gray-800 hover:text-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-50/50 to-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <span className="relative z-10">Descriptif du ZIP</span>
                  <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 ml-2 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
                <DialogHeader className="pb-0">
                  <div className="flex flex-col mb-0">
                    <DialogTitle className="text-2xl font-bold text-black text-left mb-0">
                      Descriptif du ZIP
                    </DialogTitle>
                    
                    <div className="relative mt-1 mb-1">
                      <span className="text-sm font-mono tracking-tight bg-gray-800 px-3 py-1 rounded text-gray-100 inline-block relative shadow-sm">
                        ⦗FRONT-CLOUD⦘~ Football.zip
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center mb-6">
                    <div className="mt-4">
                      <GoogleDriveBadge />
                    </div>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <button onClick={() => {
                          const returnUrl = `${window.location.origin}/payment-success`;
                          window.location.href = `https://pay.sumup.com/b2c/QHNJZZLI?return_url=${encodeURIComponent(returnUrl)}`;
                        }} className="h-8 px-4 py-1 bg-blue-50 hover:bg-blue-100 border border-blue-200 text-blue-600 rounded text-xs font-medium flex items-center gap-1.5 mt-4">
                          <FileArchive className="h-3.5 w-3.5" />
                          <span>Télécharger ce fichier (9€)</span>
                        </button>
                      </TooltipTrigger>
                      <TooltipContent side="left" align="end" className="max-w-[180px] text-center">
                        <p className="text-xs">Accès immédiat après paiement</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>
                  
                  <DialogDescription className="text-left pt-0 mt-0">
                    <PackDescription />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            <Button 
              onClick={() => {
                const returnUrl = `${window.location.origin}/payment-success`;
                window.location.href = `https://pay.sumup.com/b2c/QHNJZZLI?return_url=${encodeURIComponent(returnUrl)}`;
              }}
              size="lg"
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-xl hover:shadow-2xl transition-all duration-300 border-0 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <span className="relative z-10">Achat rapide (9€)</span>
              <ArrowRight className="h-5 w-5 sm:h-6 sm:w-6 ml-2 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
            </Button>
          </div>

          {/* Informations sur le fichier */}
          <div className="text-center">
            <p className="text-gray-500 text-sm sm:text-base mb-2">
              <span className="font-semibold text-gray-700">63 Mo</span> • 
              <span className="font-semibold text-gray-700 ml-1">8 774 éléments</span>
            </p>
            <p className="text-gray-400 text-xs sm:text-sm">
              Fichier ZIP organisé et prêt à l'emploi
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
