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
          <div className="space-y-4">
            {/* Section avis clients inspirée du modèle */}
            <div className="bg-white/80 rounded-2xl p-6 border border-gray-200 shadow-lg text-center">
              {/* Étoiles en haut */}
              <div className="flex justify-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <CheckCircle2 key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              {/* Avatars circulaires */}
              <div className="flex justify-center items-center gap-2 mb-4 flex-wrap">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-semibold text-sm border-2 border-white shadow-lg">
                  JM
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center text-white font-semibold text-sm border-2 border-white shadow-lg">
                  AL
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-sm border-2 border-white shadow-lg">
                  SC
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold text-sm border-2 border-white shadow-lg">
                  MC
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-semibold text-sm border-2 border-white shadow-lg">
                  TL
                </div>
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-indigo-600 rounded-full flex items-center justify-center text-white font-semibold text-sm border-2 border-white shadow-lg">
                  +
                </div>
              </div>
              
              {/* Texte principal */}
              <p className="text-lg font-semibold text-gray-800 mb-2">
                <span className="text-green-600">+ 200</span> personnes ont téléchargé
              </p>
              <p className="text-sm text-gray-600 mb-4">
                nos packs de logos football <span className="font-semibold text-yellow-600">4,9/5</span>
              </p>
              
              {/* Badge Judge.me */}
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-2 bg-white rounded-full px-3 py-1 border border-gray-200 shadow-sm">
                  <img 
                    src="/lovable-uploads/0e31da73-efe5-4f8a-9edc-581fa5d23995.png" 
                    alt="Judge.me" 
                    className="h-4 w-auto" 
                    loading="lazy"
                  />
                  <span className="text-xs text-gray-600 font-medium">Avis vérifiés</span>
                </div>
              </div>
            </div>

            {/* Animation des témoignages - Section séparée pour plus de visibilité */}
            <div className="bg-white/90 rounded-xl p-4 border border-gray-200 shadow-md">
              <HeroTestimonialBadge />
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

        {/* Points de confiance - en dessous */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
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

        {/* Note de confiance */}
        <p className="text-sm text-gray-500 mt-6">
          Téléchargement instantané après paiement • Fichiers organisés • Support inclus
        </p>
      </div>
    </section>
  );
};

export default HeroSection;