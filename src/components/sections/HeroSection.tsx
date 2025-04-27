import React from 'react';
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
} from "@/components/ui/tooltip";
import GoogleDriveBadge from '../payment/GoogleDriveBadge';

interface HeroSectionProps {
  onScrollToPayment: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToPayment }) => {
  return (
    <section className="relative pt-12 pb-10 px-4 overflow-hidden">
      {/* Background effects - Optimisés pour les performances */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-blue-50/40 to-white opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(155,135,245,0.08),transparent_50%)]" />
        <div className="absolute top-40 left-0 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl -z-10" style={{ animation: 'pulse 7s ease-in-out infinite' }} />
        <div className="absolute top-60 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl -z-10" style={{ animation: 'pulse 10s ease-in-out infinite' }} />
      </div>
      
      {/* Decorative elements avec animation optimisée */}
      <div 
        className="absolute top-28 left-1/3 text-blue-400/20 animate-floating"
        style={{ 
          animationDuration: '7s',
          animationDelay: '-2s'
        }}
      >
        <Sparkles className="h-8 w-8" />
      </div>
      <div 
        className="absolute bottom-20 right-1/4 text-purple-400/20 animate-floating"
        style={{ 
          animationDuration: '8s',
          animationDelay: '-1s'
        }}
      >
        <Sparkles className="h-10 w-10" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Premium Badge - Optimisé */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200/70 shadow-sm transition-transform duration-300 hover:shadow-md mb-2 hover:-translate-y-0.5">
          <Crown className="w-5 h-5" style={{ fill: '#FFC107', stroke: '#FFC107' }} />
          <span className="text-sm font-medium text-gray-900">Collection Premium</span>
        </div>

        {/* Main title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-800 bg-clip-text text-transparent px-4 py-2">
          Logos des clubs de football
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-700 italic mt-6">
          <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">⦗FRONT-CLOUD⦘~ Football.zip</span>
        </h2>

        {/* Description */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          La plus grande collection de logos des équipes de foot en haute qualité et uniforme. Plus de 8 600 logos de club de foot internationaux, les logos des compétitions... une couverture totale du football réunie dans un fichier ZIP arborescent.
        </p>

        {/* Trust badges - Animation optimisée */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 backdrop-blur-md border border-gray-200/50 shadow-sm transition-transform duration-300 hover:bg-white/90 hover:shadow-md hover:-translate-y-1">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Fichiers Consultables</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 backdrop-blur-md border border-gray-200/50 shadow-sm transition-transform duration-300 hover:bg-white/90 hover:shadow-md hover:-translate-y-1">
            <Lock className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Paiement Sécurisé</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 backdrop-blur-md border border-gray-200/50 shadow-sm transition-transform duration-300 hover:bg-white/90 hover:shadow-md hover:-translate-y-1">
            <Download className="w-5 w-5 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Téléchargement Instantané</span>
          </div>
        </div>

        {/* CTA buttons - Taille augmentée et meilleur espacement */}
        <div className="flex items-center justify-center gap-6 pt-8">
          <Dialog>
            <DialogTrigger asChild>
              <button 
                className="group flex items-center gap-3 px-10 py-5 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200/80 hover:border-gray-300 transition-transform duration-300 hover:shadow-md relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50/40 to-blue-50/40 opacity-80"></div>
                <Folder size={24} className="mr-2 text-gray-800 transition-colors duration-300" />
                <span className="relative z-10 font-bold text-[18px] text-gray-800 transition-colors duration-300">Descriptif du ZIP</span>
              </button>
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
                      <Button 
                        onClick={() => {
                          const returnUrl = `${window.location.origin}/payment-success`;
                          window.location.href = `https://pay.sumup.com/b2c/QHNJZZLI?return_url=${encodeURIComponent(returnUrl)}`;
                        }}
                        variant="outline" 
                        size="sm" 
                        className="h-8 bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-600 gap-1 mt-4"
                      >
                        <Download className="h-3.5 w-3.5" />
                        <span className="text-xs font-medium">Télécharger ce fichier (9€)</span>
                      </Button>
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
          
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="default"
                size="lg"
                onClick={() => {
                  const returnUrl = `${window.location.origin}/payment-success`;
                  window.location.href = `https://pay.sumup.com/b2c/QHNJZZLI?return_url=${encodeURIComponent(returnUrl)}`;
                }}
                className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-transform duration-300 text-[19px] gap-5 hover:-translate-y-0.5 px-12 py-5 h-auto relative group overflow-hidden"
              >
                {/* Outer glow animation - restaurée à l'original */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 via-yellow-300/20 to-amber-400/20 rounded-md blur-md opacity-70 group-hover:opacity-100 transition-opacity duration-300" 
                     style={{ animation: 'pulse 2s ease-in-out infinite' }}></div>

                <div className="relative">
                  <ShoppingCart 
                    style={{
                      color: "#FFE082",
                      filter: 'drop-shadow(0 0 3px rgba(255, 224, 130, 0.8))',
                      animation: 'cartMove 1.5s ease-in-out infinite',
                      width: '24px',
                      height: '24px',
                      transform: 'scale(1.1)',
                      transition: 'transform 0.3s ease'
                    }}
                  />
                </div>
                
                <span className="relative z-10 font-bold tracking-wide">
                  Achat rapide ~ 9€
                </span>
                
                <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white/30 opacity-40 group-hover:animate-shine" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top" align="center" className="bg-white/95 border border-gray-200 shadow-md p-3">
              <p className="text-xs font-semibold text-gray-800 pb-2 border-b border-gray-100">Téléchargement du fichier ZIP complet</p>
              <div className="pt-2 flex flex-col gap-1.5">
                <div className="flex items-center gap-1.5">
                  <span className="text-gray-400 text-[10px] w-4 text-center">1</span>
                  <span className="text-gray-500 text-xs">Paiement sécurisé via SumUp</span>
                </div>
                <div className="flex items-start gap-1.5">
                  <span className="text-gray-400 text-[10px] w-4 text-center">2</span>
                  <span className="text-gray-500 text-xs text-left">
                    Accès en page d'après-paiement
                  </span>
                </div>
                <div className="mt-1 flex items-center text-xs">
                  <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-medium">⏱️ 2 minutes seulement</span>
                </div>
              </div>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
