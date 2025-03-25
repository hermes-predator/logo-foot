
import React from 'react';
import { Crown, Folder, ShieldCheck, Lock, CheckCircle2, ChevronDown, FileText, RefreshCcw, HelpCircle, Download, Sparkles, FileArchive } from "lucide-react";
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

interface HeroSectionProps {
  onScrollToPayment: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToPayment }) => {
  
  return (
    <section className="relative pt-12 pb-20 px-4 overflow-hidden">
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
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-50 border border-gray-200/70 shadow-sm transition-all duration-300 hover:shadow-md mb-2 hover:-translate-y-0.5 animate-fade-in"
          style={{ animationDuration: '0.8s' }}
        >
          <Crown className="w-5 h-5" style={{ fill: '#FFC107', stroke: '#FFC107' }} />
          <span className="text-sm font-medium text-gray-900">Collection Premium</span>
        </div>

        {/* Main title with improved gradient */}
        <h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-br from-purple-900 via-purple-700 to-indigo-800 bg-clip-text text-transparent px-4 py-2 animate-fade-in"
          style={{ animationDuration: '1s', animationDelay: '0.2s' }}
        >
          Logos des clubs de football
        </h1>

        {/* Subtitle with enhanced styling */}
        <h2 
          className="text-2xl md:text-3xl font-extrabold text-gray-700 italic mt-6 animate-fade-in"
          style={{ animationDuration: '1s', animationDelay: '0.4s' }}
        >
          <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">⦗FRONT-CLOUD⦘~ Football.zip</span>
        </h2>

        {/* Description with improved readability */}
        <p 
          className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed animate-fade-in"
          style={{ animationDuration: '1s', animationDelay: '0.6s' }}
        >
          La plus grande collection de logos des équipes de foot en haute qualité et uniforme. Plus de 8 600 logos de club de foot internationaux, les logos des compétitions... une couverture totale du football réunie dans un fichier ZIP arborescent.
        </p>

        {/* Trust badges with improved hover effects */}
        <div 
          className="flex flex-wrap items-center justify-center gap-6 mt-8 animate-fade-in"
          style={{ animationDuration: '1s', animationDelay: '0.8s' }}
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

        {/* CTA buttons with enhanced interactions */}
        <div 
          className="flex items-center justify-center gap-4 pt-6 animate-fade-in"
          style={{ animationDuration: '1s', animationDelay: '1s' }}
        >
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="lg" 
                className="group transition-all duration-300 hover:shadow-md bg-white border-gray-200 hover:border-gray-300 flex items-center relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-purple-50/50 opacity-100 transition-opacity duration-300"></div>
                <FileArchive className="h-4 w-4 mr-1" fill="black" stroke="black" />
                <span className="relative z-10 font-medium text-black">Descriptif du ZIP</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <div className="text-center pb-2 border-b border-gray-100">
                  <DialogTitle className="text-2xl font-bold mb-1 text-black">
                    Descriptif du ZIP
                  </DialogTitle>
                  <div className="relative inline-flex items-center justify-center">
                    <span className="text-sm font-mono tracking-tight bg-gray-800 px-3 py-1 rounded text-gray-100 inline-block mb-6 relative shadow-sm">
                      ⦗FRONT-CLOUD⦘~ Football.zip
                    </span>
                    <div className="absolute -bottom-2 w-3/4 h-0.5 bg-gradient-to-r from-transparent via-gray-400 to-transparent"></div>
                  </div>
                </div>
                <DialogDescription className="text-left space-y-6 pt-4">
                  <PackDescription />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          
          <Button
            variant="default"
            size="lg"
            onClick={onScrollToPayment}
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all duration-300 text-base gap-2 hover:-translate-y-0.5"
          >
            <ChevronDown className="h-4 w-4 animate-bounce" style={{ animationDuration: '1s' }} />
            Voir le prix
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
