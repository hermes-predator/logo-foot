
import React from 'react';
import { Crown, Book, ShieldCheck, Lock, CheckCircle2, ChevronDown, FileText, RefreshCcw, HelpCircle } from "lucide-react";
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
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/80 via-blue-50/40 to-white opacity-90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(155,135,245,0.08),transparent_50%)]" />
      </div>

      <div className="max-w-4xl mx-auto text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-md mb-2">
          <Crown className="w-5 h-5" style={{ fill: '#FFC107', stroke: '#FFC107' }} />
          <span className="text-sm font-medium text-gray-900">Collection Premium</span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-purple-900 via-purple-700 to-indigo-800 bg-clip-text text-transparent px-4 py-2">
          Logos des clubs de football
        </h1>

        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-700 italic mt-6">
          ⦗FRONT-CLOUD⦘~ Football.zip
        </h2>

        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          La plus grande collection de logos des équipes de foot en haute qualité et uniforme. Plus de 8 600 logos de club de foot internationaux, les logos des compétitions... une couverture complète réunie dans un seul fichier ZIP arborescent.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-8">
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/30 backdrop-blur-md border border-gray-200/50 shadow-sm transition-all duration-300 hover:bg-white/40 hover:shadow-md">
            <ShieldCheck className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Fichiers Consultables</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/30 backdrop-blur-md border border-gray-200/50 shadow-sm transition-all duration-300 hover:bg-white/40 hover:shadow-md">
            <Lock className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Paiement Sécurisé</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/30 backdrop-blur-md border border-gray-200/50 shadow-sm transition-all duration-300 hover:bg-white/40 hover:shadow-md">
            <CheckCircle2 className="w-5 h-5 text-green-600" />
            <span className="text-sm font-medium text-gray-700">Téléchargement Instantané</span>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 pt-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="lg" 
                className="gap-2 hover:bg-gray-50 group transition-all duration-300 hover:shadow-md"
              >
                <Book className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                Descriptif du ZIP
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold mb-4">Contenu du pack</DialogTitle>
                <DialogDescription className="text-left space-y-6">
                  <PackDescription />
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Button
            variant="default"
            size="lg"
            onClick={onScrollToPayment}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-lg hover:shadow-xl transition-all duration-300 text-base gap-2"
          >
            <ChevronDown className="h-4 w-4 animate-bounce" />
            Voir le prix
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
