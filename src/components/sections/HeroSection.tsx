
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
  TooltipProvider,
} from "@/components/ui/tooltip";

interface HeroSectionProps {
  onScrollToPayment: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToPayment }) => {
  return (
    <section className="relative pt-12 pb-10 px-4 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-blue-50/40 to-white opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(155,135,245,0.08),transparent_50%)]" />
        <div className="absolute top-40 left-0 w-72 h-72 bg-blue-100/20 rounded-full blur-3xl -z-10" />
        <div className="absolute top-60 right-0 w-96 h-96 bg-purple-100/20 rounded-full blur-3xl -z-10" />
      </div>
      
      {/* Decorative elements - Adjusted position of floating star */}
      <div className="absolute top-28 left-1/3 text-blue-400/20">
        <Sparkles className="h-8 w-8" />
      </div>
      <div className="absolute bottom-20 right-1/4 text-purple-400/20">
        <Sparkles className="h-10 w-10" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center space-y-6">
        {/* Premium Badge with simple styling */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200/70 shadow-sm mb-2">
          <Crown className="w-5 h-5" style={{ fill: '#FFC107', stroke: '#FFC107' }} />
          <span className="text-sm font-medium text-gray-900">Collection Premium</span>
        </div>

        {/* Main title with improved gradient */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-800 bg-clip-text text-transparent px-4 py-2">
          Logos des clubs de football
        </h1>

        {/* Subtitle with enhanced styling */}
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-700 italic mt-6">
          <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">⦗FRONT-CLOUD⦘~ Football.zip</span>
        </h2>

        {/* Description with improved readability */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          La plus grande collection de logos des équipes de foot en haute qualité et uniforme. Plus de 8 600 logos de club de foot internationaux, les logos des compétitions... une couverture totale du football réunie dans un fichier ZIP arborescent.
        </p>

        {/* Trust badges with static styling */}
        <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 backdrop-blur-md border border-gray-200/50 shadow-sm">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Fichiers Consultables</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 backdrop-blur-md border border-gray-200/50 shadow-sm">
            <Lock className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Paiement Sécurisé</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/50 backdrop-blur-md border border-gray-200/50 shadow-sm">
            <Download className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Téléchargement Instantané</span>
          </div>
        </div>

        {/* CTA buttons with simplified styling */}
        <div className="flex items-center justify-center gap-4 pt-6">
          <Dialog>
            <DialogTrigger asChild>
              <button 
                className="flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-200/80 hover:border-gray-300 shadow-md relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-50/40 to-blue-50/40 opacity-80"></div>
                <Folder size={16} className="mr-1 text-gray-800" />
                <span className="relative z-10 font-semibold text-sm text-gray-800">Descriptif du ZIP</span>
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
                  className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg text-sm gap-4 px-7 py-2.5 h-auto relative group"
                >
                  <ShoppingCart className="h-4 w-4" style={{ color: "#FFE082" }} />
                  <span className="relative z-10 font-semibold tracking-wide">
                    Achat rapide ~ 10€
                  </span>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="top" align="center" className="bg-white/95 border border-gray-200 shadow-md p-3">
                <p className="text-xs font-medium text-gray-800 pb-2 border-b border-gray-100">Téléchargement du fichier ZIP complet</p>
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
