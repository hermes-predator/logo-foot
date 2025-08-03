import React from 'react';
import { Folder, Download, ShoppingCart, CheckCircle2, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import PackDescription from './PackDescription';
import HeroTestimonialBadge from './HeroTestimonialBadge';

interface HeroSectionProps {
  onScrollToPayment: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToPayment }) => {
  return (
    <section className="relative pt-20 pb-16 px-4 overflow-hidden">
      {/* Background avec dégradé simple et professionnel */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-green-50/60" />
        <div className="absolute top-20 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-100/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto text-center">
        {/* Badge premium simple */}
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-green-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8 shadow-lg">
          <Zap className="w-4 h-4" />
          Solution complète de ressources football
        </div>

        {/* Titre principal - H1 avec le mot-clé important */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
          Logos des clubs de football
        </h1>


        {/* Layout en deux colonnes */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
          {/* Colonne gauche - Avis clients */}
          <div className="space-y-6">
            <HeroTestimonialBadge />
            
            {/* Points de confiance */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                <CheckCircle2 className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Format professionnel</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                <Shield className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Paiement sécurisé</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 px-4 py-2 rounded-lg border border-gray-200 shadow-sm">
                <Download className="w-5 h-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Accès immédiat</span>
              </div>
            </div>
          </div>

          {/* Colonne droite - Actions */}
          <div className="space-y-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full bg-white hover:bg-gray-50 border-2 border-gray-300 hover:border-gray-400 text-gray-700 font-semibold px-8 py-4 h-auto text-lg"
                >
                  <Folder className="w-5 h-5 mr-2" />
                  Descriptif du ZIP
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-gray-900">
                    Descriptif du ZIP
                  </DialogTitle>
                  <div className="text-sm text-gray-600 mb-4">
                    ⦗FRONT-CLOUD⦘~ Football.zip
                  </div>
                  <DialogDescription>
                    <PackDescription />
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            
            <Button 
              size="lg" 
              onClick={onScrollToPayment}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-bold px-10 py-4 h-auto text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <ShoppingCart className="w-5 h-5 mr-2" />
              Télécharger (8€)
            </Button>
          </div>
        </div>

        {/* Note de confiance */}
        <p className="text-sm text-gray-500 mt-6">
          Téléchargement instantané après paiement • Fichiers organisés • Support inclus
        </p>
      </div>
    </section>
  );
};

export default HeroSection;