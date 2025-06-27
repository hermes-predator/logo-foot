import React from 'react';
import { ArrowDown, Download, Star, Users, CheckCircle2, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import HeroTestimonialBadge from './HeroTestimonialBadge';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeroSectionProps {
  onScrollToPayment: () => void;
}

const HeroSection = ({ onScrollToPayment }: HeroSectionProps) => {
  const isMobile = useIsMobile();

  const handleDownloadClick = () => {
    // Rediriger vers la page de paiement dédiée
    window.location.href = '/payment';
  };
  
  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50/80 via-white to-indigo-50/60">
      {/* Animated background circles */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-32 h-32 rounded-full bg-blue-300/30 filter blur-2xl animate-floatOne"></div>
        <div className="absolute bottom-1/4 right-0 w-40 h-40 rounded-full bg-purple-300/30 filter blur-3xl animate-floatTwo"></div>
      </div>
      
      {/* Floating elements (only on larger screens) */}
      {!isMobile && (
        <>
          <div className="absolute top-16 left-10 w-24 h-24 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob"></div>
          <div className="absolute top-40 right-10 w-20 h-20 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 left-20 w-32 h-32 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-blob animation-delay-4000"></div>
        </>
      )}
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-6 flex justify-center">
          <HeroTestimonialBadge />
        </div>

        <div className="mb-8">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-gray-900 mb-6 leading-tight">
            <span className="inline-block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent animate-gradient">
              +8600 logos
            </span>
            <br />
            <span className="text-gray-800">de football</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto leading-relaxed">
            La collection la plus complète de logos de clubs de football du monde entier
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <Star className="w-4 h-4 mr-2 text-yellow-500" />
              Haute qualité PNG
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <Users className="w-4 h-4 mr-2 text-blue-500" />
              Tous les championnats
            </Badge>
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">
              <CheckCircle2 className="w-4 h-4 mr-2 text-green-500" />
              Téléchargement instantané
            </Badge>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={handleDownloadClick}
            size="lg"
            className="group relative px-8 py-6 text-lg font-bold bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl border-0 rounded-xl"
          >
            <Download className="w-5 h-5 mr-3 group-hover:animate-bounce" />
            Télécharger maintenant - 9€
            <Sparkles className="w-4 h-4 ml-2 group-hover:rotate-12 transition-transform" />
          </Button>
          
          <Button 
            onClick={onScrollToPayment}
            variant="outline" 
            size="lg"
            className="px-8 py-6 text-lg font-semibold border-2 border-gray-300 hover:border-blue-500 hover:text-blue-600 transition-all duration-300 rounded-xl"
          >
            <ArrowDown className="w-5 h-5 mr-2" />
            Voir la collection
          </Button>
        </div>

        <div className="flex flex-col md:flex-row justify-around items-center gap-6 py-8 px-6 bg-white/70 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200/50">
          <div className="text-center">
            <span className="text-4xl font-bold text-blue-600">8600+</span>
            <p className="text-gray-700">Logos inclus</p>
          </div>
          <div className="text-center">
            <span className="text-4xl font-bold text-green-600">100+</span>
            <p className="text-gray-700">Compétitions</p>
          </div>
          <div className="text-center">
            <span className="text-4xl font-bold text-purple-600">200+</span>
            <p className="text-gray-700">Pays couverts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
