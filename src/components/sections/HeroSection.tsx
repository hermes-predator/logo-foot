import React, { useEffect, useState } from 'react';
import { Crown, Folder, ShieldCheck, Lock, CheckCircle2, Download, Sparkles, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import PackDescription from './PackDescription';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

interface HeroSectionProps {
  onScrollToPayment: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToPayment }) => {
  // État pour contrôler l'animation des éléments
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Déclencher l'animation après le chargement de la page
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  
  return (
    
    <section className="relative pt-12 pb-10 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-blue-50/40 to-white opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(155,135,245,0.08),transparent_50%)]" />
        <div className="absolute top-40 left-0 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '7s' }} />
        <div className="absolute top-60 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDuration: '10s' }} />
      </div>
      
      {/* Decorative elements - Adjusted position of floating star */}
      <div className="absolute top-28 left-1/3 text-blue-400/20 animate-bounce" style={{ animationDuration: '5s' }}>
        <Sparkles className="h-8 w-8" />
      </div>
      <div className="absolute bottom-20 right-1/4 text-purple-400/20 animate-pulse" style={{ animationDuration: '7s', animationDelay: '1s' }}>
        <Sparkles className="h-10 w-10" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Premium Badge with enhanced animation */}
        <div 
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200/70 shadow-sm transition-all duration-500 hover:shadow-md mb-2 hover:-translate-y-0.5 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '100ms' }}
        >
          <Crown className="w-5 h-5" style={{ fill: '#FFC107', stroke: '#FFC107' }} />
          <span className="text-sm font-medium text-gray-900">Collection Premium</span>
        </div>

        {/* Main title with improved gradient */}
        <h1 
          className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-800 bg-clip-text text-transparent px-4 py-2 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '200ms' }}
        >
          Logos des clubs de football
        </h1>

        {/* Subtitle with enhanced styling */}
        <h2 
          className={`text-2xl md:text-3xl font-extrabold text-gray-700 italic mt-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '300ms' }}
        >
          <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">⦗FRONT-CLOUD⦘~ Football.zip</span>
        </h2>

        {/* Description with improved readability */}
        <p 
          className={`text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '400ms' }}
        >
          La plus grande collection de logos des équipes de foot en haute qualité et uniforme. Plus de 8 600 logos de club de foot internationaux, les logos des compétitions... une couverture totale du football réunie dans un fichier ZIP arborescent.
        </p>

        {/* Trust badges with improved hover effects */}
        <div 
          className={`flex flex-wrap items-center justify-center gap-6 mt-8 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '500ms' }}
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 backdrop-blur-md border border-gray-200/50 shadow-sm transition-all duration-300 hover:bg-white/90 hover:shadow-md hover:-translate-y-1">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Fichiers Consultables</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 backdrop-blur-md border border-gray-200/50 shadow-sm transition-all duration-300 hover:bg-white/90 hover:shadow-md hover:-translate-y-1">
            <Lock className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Paiement Sécurisé</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 backdrop-blur-md border border-gray-200/50 shadow-sm transition-all duration-300 hover:bg-white/90 hover:shadow-md hover:-translate-y-1">
            <Download className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Téléchargement Instantané</span>
          </div>
        </div>

        {/* CTA buttons with enhanced interactions and updated effects */}
        <div 
          className={`flex items-center justify-center gap-4 pt-6 transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ transitionDelay: '600ms' }}
        >
          <Dialog>
            <DialogTrigger asChild>
              <button 
                className="group flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200/80 hover:border-gray-300 transition-all duration-300 hover:shadow-md relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50/40 to-blue-50/40 opacity-80"></div>
                <Folder size={16} className="mr-1 text-gray-800 transition-colors duration-300" />
                <span className="relative z-10 font-semibold text-sm text-gray-800 transition-colors duration-300">Descriptif du ZIP</span>
              </button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
              <DialogHeader className="pb-0">
                <div className="flex flex-col mb-0">
                  <DialogTitle className="text-2xl font-bold text-black text-left mb-1">
                    Descriptif du ZIP
                  </DialogTitle>
                  
                  <div className="relative mb-2">
                    <span className="text-sm font-mono tracking-tight bg-gray-800 px-3 py-1 rounded text-gray-100 inline-block relative shadow-sm">
                      ⦗FRONT-CLOUD⦘~ Football.zip
                    </span>
                  </div>
                </div>
                
                <div className="flex justify-end mb-2">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button 
                          onClick={() => {
                            const returnUrl = `${window.location.origin}/payment-success`;
                            window.location.href = `https://pay.sumup.com/b2c/QWBH42Z8?return_url=${encodeURIComponent(returnUrl)}`;
                          }}
                          variant="outline" 
                          size="sm" 
                          className="h-8 bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-600 gap-1"
                        >
                          <Download className="h-3.5 w-3.5" />
                          <span className="text-xs font-medium">Télécharger ce fichier (10€)</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent side="left" align="end" className="max-w-[180px] text-center">
                        <p className="text-xs">Accès immédiat après paiement</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                
                <DialogDescription className="text-left pt-0 mt-0">
                  <PackDescription />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="default"
                  size="lg"
                  onClick={() => {
                    const returnUrl = `${window.location.origin}/payment-success`;
                    window.location.href = `https://pay.sumup.com/b2c/QWBH42Z8?return_url=${encodeURIComponent(returnUrl)}`;
                  }}
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 text-sm gap-4 hover:-translate-y-0.5 px-7 py-2.5 h-auto relative group overflow-hidden"
                >
                  {/* Outer glow animation */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 via-yellow-300/20 to-amber-400/20 rounded-md blur-md opacity-70 group-hover:opacity-100 animate-pulse transition-opacity duration-300" 
                       style={{ animationDuration: '2s' }}></div>

                  {/* Inner glow for the cart icon with updated bouncy animation */}
                  <div className="relative">
                    <ShoppingCart 
                      className="h-4 w-4 transition-all animate-[cartMove_1.5s_ease-in-out_infinite]" 
                      style={{
                        color: "#FFE082",
                        filter: 'drop-shadow(0 0 3px rgba(255, 224, 130, 0.8))'
                      }}
                    />
                  </div>
                  
                  {/* Text with updated text symbol */}
                  <span className="relative z-10 font-semibold tracking-wide">
                    Achat rapide ~ 10€
                  </span>
                  
                  {/* Shine effect */}
                  <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/30 opacity-40 group-hover:animate-shine" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top" align="center" className="bg-white/95 border border-gray-200 shadow-md p-3">
                <p className="text-xs font-medium text-gray-800 pb-2 border-b border-gray-100">Accès immédiat après paiement</p>
                <div className="pt-2 flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-gray-400 text-[10px]">1</span>
                    <span className="text-gray-500 text-xs">Paiement via SumUp</span>
                  </div>
                  <div className="flex flex-col gap-1 pl-4">
                    <span className="text-gray-400 text-[10px] self-start">2</span>
                    <span className="text-gray-500 text-xs -mt-4 pl-4">
                      Téléchargement instantanée via<br />
                      la page d'après-paiement
                    </span>
                  </div>
                </div>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
