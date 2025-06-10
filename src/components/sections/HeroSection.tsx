
import React, { useState } from 'react';
import { Download, Star, Users, Calendar, Shield } from 'lucide-react';
import { Button } from '../ui/button';
import HeroTestimonialBadge from './HeroTestimonialBadge';

interface HeroSectionProps {
  onScrollToPayment: () => void;
}

const HeroSection = ({ onScrollToPayment }: HeroSectionProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-green-50/20 pt-4 pb-8">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-green-500/5" />
      
      {/* Effet de particules subtil */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
        <div className="absolute top-32 right-20 w-1 h-1 bg-green-400 rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-pulse delay-500" />
        <div className="absolute top-20 right-1/3 w-1 h-1 bg-green-300 rounded-full animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Colonne gauche - Contenu principal */}
          <div className="flex-1 text-center lg:text-left space-y-4">
            {/* Badge testimonial plus compact */}
            <div className="flex justify-center lg:justify-start mb-3">
              <HeroTestimonialBadge />
            </div>

            {/* Titre principal plus compact */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
                <span className="block">Plus de</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-blue-700 to-green-600 font-extrabold">
                  8600 logos
                </span>
                <span className="block">de football</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Collection complète et organisée par pays. Parfait pour vos projets, sites web ou applications.
              </p>
            </div>

            {/* Statistiques compactes */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 text-sm text-gray-600 py-2">
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4 text-blue-500" />
                <span>2000+ clients</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                <span>4.9/5 étoiles</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-green-500" />
                <span>Livraison instantanée</span>
              </div>
            </div>

            {/* CTA compacts */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
              <Button 
                onClick={onScrollToPayment}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] group"
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Télécharger maintenant
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={onScrollToPayment}
                className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 font-semibold px-8 py-3 rounded-xl transition-all duration-300 hover:border-blue-300"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Voir les détails
              </Button>
            </div>
          </div>

          {/* Colonne droite - Image optimisée */}
          <div className="flex-1 relative max-w-md lg:max-w-lg xl:max-w-xl">
            <div className="relative group">
              {/* Container d'image avec ratio optimisé */}
              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl overflow-hidden transform group-hover:scale-[1.02] transition-all duration-500">
                {!imageLoaded && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse rounded-2xl" />
                )}
                
                <img
                  src="/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png"
                  alt="Collection de logos de football organisée"
                  className={`w-full h-auto object-cover transition-opacity duration-500 ${
                    imageLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  onLoad={() => setImageLoaded(true)}
                  loading="eager"
                />
                
                {/* Overlay décoratif */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
              </div>
              
              {/* Éléments décoratifs compacts */}
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Star className="w-6 h-6 text-white fill-white" />
              </div>
              
              <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center shadow-lg animate-pulse delay-500">
                <Download className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
