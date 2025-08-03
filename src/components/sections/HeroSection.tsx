import React from 'react';
import { Folder, Download, ShoppingCart, Star, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import PackDescription from './PackDescription';

interface HeroSectionProps {
  onScrollToPayment: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToPayment }) => {
  return (
    <section className="relative pt-24 pb-20 px-4 overflow-hidden bg-white">
      {/* Background subtil */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-b from-gray-100/30 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Badge premium sobre */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">
            <Award className="w-4 h-4" />
            Collection Professionnelle
          </div>
        </div>

        {/* Section principale avec promesse brandée */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <span className="text-lg font-medium text-gray-600 tracking-wide uppercase">
              La référence des ressources football
            </span>
          </div>
          
          {/* H1 avec promesse forte */}
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black text-gray-900 mb-8 leading-none tracking-tight">
            Logos des clubs
            <br />
            <span className="text-gray-700">de football</span>
          </h1>

          {/* Promesse de valeur claire */}
          <div className="max-w-4xl mx-auto mb-10">
            <p className="text-2xl md:text-3xl font-light text-gray-800 mb-4 leading-relaxed">
              8 600+ logos professionnels en un seul fichier
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Format uniforme • Haute résolution • Organisation parfaite • Couverture mondiale
            </p>
          </div>
        </div>

        {/* Badge de confiance sobre avec étoiles */}
        <div className="flex justify-center mb-12">
          <div className="bg-white border border-gray-200 rounded-2xl px-8 py-4 shadow-sm">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-medium text-gray-700">4.9/5</span>
              </div>
              <div className="h-4 w-px bg-gray-300" />
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-gray-600" />
                <span className="text-sm font-medium text-gray-700">1000+ utilisateurs</span>
              </div>
              <div className="h-4 w-px bg-gray-300" />
              <span className="text-sm text-gray-600">Téléchargement instantané</span>
            </div>
          </div>
        </div>

        {/* Statistiques impressionnantes */}
        <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto mb-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">8 600+</div>
            <div className="text-sm text-gray-600 font-medium">Logos inclus</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">200+</div>
            <div className="text-sm text-gray-600 font-medium">Pays couverts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
            <div className="text-sm text-gray-600 font-medium">Haute qualité</div>
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Dialog>
            <DialogTrigger asChild>
              <Button 
                variant="outline" 
                size="lg" 
                className="bg-white hover:bg-gray-50 border-2 border-gray-300 hover:border-gray-400 text-gray-800 font-semibold px-10 py-4 h-auto text-lg transition-all duration-300"
              >
                <Folder className="w-5 h-5 mr-3" />
                Voir le contenu détaillé
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-900">
                  Contenu du fichier ZIP
                </DialogTitle>
                <div className="text-sm text-gray-600 mb-4 font-mono">
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
            className="bg-green-600 hover:bg-green-700 text-white font-bold px-12 py-4 h-auto text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group"
          >
            <div className="flex items-center relative z-10">
              <Download className="w-5 h-5 mr-3" />
              Télécharger maintenant
              <span className="ml-2 text-green-100">(8€)</span>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>

        {/* Garanties */}
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            ✓ Accès immédiat après paiement  •  ✓ Fichiers organisés  •  ✓ Support technique inclus
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;