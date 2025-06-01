
import React from 'react';
import { Button } from "@/components/ui/button";
import { Download, Shield, Users, Star } from "lucide-react";
import HeroTestimonialBadge from './HeroTestimonialBadge';
import { useImageOptimization } from '@/hooks/useImageOptimization';

interface HeroSectionProps {
  onScrollToPayment: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToPayment }) => {
  const { optimizedSrc } = useImageOptimization({
    src: '/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png',
    width: 600,
    height: 400,
    quality: 90,
    format: 'webp'
  });

  return (
    <section className="relative pt-20 pb-16 px-4 bg-gradient-to-br from-blue-50 via-white to-green-50 overflow-hidden">
      {/* Sparkles avec répartition optimisée */}
      {/* Autour du titre principal */}
      <div className="absolute top-24 left-8 w-3 h-3 bg-yellow-400 rounded-full animate-pulse opacity-70"></div>
      <div className="absolute top-28 right-12 w-2 h-2 bg-blue-400 rounded-full animate-bounce opacity-60"></div>
      <div className="absolute top-32 left-1/4 w-1.5 h-1.5 bg-green-400 rounded-full animate-ping opacity-50"></div>
      <div className="absolute top-36 right-1/3 w-2.5 h-2.5 bg-purple-400 rounded-full animate-pulse opacity-65"></div>
      
      {/* Autour du contenu central */}
      <div className="absolute top-48 left-16 w-2 h-2 bg-orange-400 rounded-full animate-bounce opacity-55 transform rotate-45"></div>
      <div className="absolute top-52 right-20 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping opacity-70 transform rotate-12"></div>
      <div className="absolute top-56 left-1/3 w-3 h-3 bg-cyan-400 rounded-full animate-pulse opacity-60 transform -rotate-30"></div>
      <div className="absolute top-60 right-1/4 w-2 h-2 bg-indigo-400 rounded-full animate-bounce opacity-65 transform rotate-60"></div>
      
      {/* Autour des boutons */}
      <div className="absolute top-72 left-24 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping opacity-70 transform rotate-90"></div>
      <div className="absolute top-76 right-28 w-1.5 h-1.5 bg-red-400 rounded-full animate-pulse opacity-55 transform -rotate-45"></div>
      <div className="absolute top-80 left-1/5 w-2 h-2 bg-teal-400 rounded-full animate-bounce opacity-60 transform rotate-180"></div>
      <div className="absolute top-84 right-1/5 w-3 h-3 bg-violet-400 rounded-full animate-ping opacity-65 transform rotate-30"></div>
      
      {/* Autour de l'image */}
      <div className="absolute top-32 right-32 w-2 h-2 bg-amber-400 rounded-full animate-pulse opacity-70 transform rotate-120"></div>
      <div className="absolute top-40 right-24 w-1.5 h-1.5 bg-lime-400 rounded-full animate-bounce opacity-55 transform -rotate-60"></div>
      <div className="absolute top-48 right-40 w-2.5 h-2.5 bg-rose-400 rounded-full animate-ping opacity-65 transform rotate-270"></div>
      <div className="absolute top-56 right-16 w-2 h-2 bg-sky-400 rounded-full animate-pulse opacity-60 transform rotate-150"></div>
      <div className="absolute top-64 right-36 w-1.5 h-1.5 bg-fuchsia-400 rounded-full animate-bounce opacity-70 transform -rotate-90"></div>
      <div className="absolute top-72 right-20 w-3 h-3 bg-emerald-300 rounded-full animate-ping opacity-55 transform rotate-45"></div>
      
      {/* Coins de la section */}
      <div className="absolute top-16 left-4 w-2 h-2 bg-yellow-300 rounded-full animate-pulse opacity-60 transform rotate-15"></div>
      <div className="absolute top-20 right-4 w-1.5 h-1.5 bg-blue-300 rounded-full animate-bounce opacity-50 transform -rotate-30"></div>
      <div className="absolute bottom-16 left-6 w-2.5 h-2.5 bg-green-300 rounded-full animate-ping opacity-65 transform rotate-75"></div>
      <div className="absolute bottom-20 right-8 w-2 h-2 bg-purple-300 rounded-full animate-pulse opacity-55 transform -rotate-120"></div>
      
      {/* Milieu des côtés pour équilibrer */}
      <div className="absolute top-1/2 left-2 w-2 h-2 bg-orange-300 rounded-full animate-bounce opacity-60 transform rotate-45"></div>
      <div className="absolute top-1/2 right-2 w-1.5 h-1.5 bg-pink-300 rounded-full animate-ping opacity-50 transform -rotate-60"></div>
      <div className="absolute top-2/3 left-8 w-2.5 h-2.5 bg-cyan-300 rounded-full animate-pulse opacity-65 transform rotate-90"></div>
      <div className="absolute top-2/3 right-12 w-2 h-2 bg-indigo-300 rounded-full animate-bounce opacity-55 transform -rotate-45"></div>

      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <HeroTestimonialBadge />
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                  +8600 Logos
                </span>
                <br />
                <span className="text-gray-800">
                  de Football
                </span>
                <br />
                <span className="text-gray-800">
                  en 1 Fichier
                </span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-2xl">
                Accédez instantanément à la plus grande collection de logos de football au monde. 
                <span className="text-blue-600 font-semibold"> Parfaitement organisés par pays</span> pour vos projets.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={onScrollToPayment}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Download className="mr-2 h-5 w-5" />
                Télécharger Maintenant
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={onScrollToPayment}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Voir les Détails
              </Button>
            </div>

            <div className="flex items-center space-x-8 pt-6">
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="text-sm font-medium text-gray-700">Paiement Sécurisé</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-medium text-gray-700">+10k Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium text-gray-700">4.9/5</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-white to-gray-50 p-8">
              <img
                src={optimizedSrc}
                alt="Collection de +8600 logos de football organisés par pays"
                className="w-full h-auto max-w-md mx-auto rounded-lg shadow-lg"
                loading="eager"
                width={600}
                height={400}
              />
              
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                +8600 Logos
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                Haute Qualité
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
