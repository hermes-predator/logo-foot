
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Download, Shield, Star, Sparkles } from 'lucide-react';
import HeroTestimonialBadge from './HeroTestimonialBadge';

interface HeroSectionProps {
  onScrollToPayment: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToPayment }) => {
  // Système de sparkles à 6 niveaux avec effets harmonieux
  const createSparkles = () => {
    const sparkles = [];
    
    // Niveau 1: Sparkles principaux (grand impact)
    const mainSparkles = [
      { top: '15%', left: '10%', size: 8, color: 'text-purple-400', glow: 'drop-shadow-[0_0_8px_rgba(147,51,234,0.6)]', delay: '0s', rotation: '45deg' },
      { top: '25%', right: '15%', size: 7, color: 'text-indigo-400', glow: 'drop-shadow-[0_0_6px_rgba(99,102,241,0.5)]', delay: '0.8s', rotation: '-30deg' },
      { top: '45%', left: '8%', size: 6, color: 'text-blue-400', glow: 'drop-shadow-[0_0_4px_rgba(59,130,246,0.4)]', delay: '1.6s', rotation: '60deg' },
    ];

    // Niveau 2: Sparkles secondaires (support)
    const secondarySparkles = [
      { top: '20%', left: '25%', size: 5, color: 'text-purple-300', glow: 'drop-shadow-[0_0_6px_rgba(196,181,253,0.4)]', delay: '0.4s', rotation: '-15deg' },
      { top: '35%', right: '25%', size: 5, color: 'text-indigo-300', glow: 'drop-shadow-[0_0_5px_rgba(165,180,252,0.4)]', delay: '1.2s', rotation: '75deg' },
      { top: '55%', left: '20%', size: 4, color: 'text-blue-300', glow: 'drop-shadow-[0_0_4px_rgba(147,197,253,0.3)]', delay: '2.0s', rotation: '-45deg' },
    ];

    // Niveau 3: Sparkles d'ambiance (subtils)
    const ambientSparkles = [
      { top: '18%', left: '35%', size: 3, color: 'text-violet-200', glow: 'drop-shadow-[0_0_3px_rgba(221,214,254,0.3)]', delay: '0.6s', rotation: '90deg' },
      { top: '30%', right: '35%', size: 3, color: 'text-purple-200', glow: 'drop-shadow-[0_0_3px_rgba(233,213,255,0.3)]', delay: '1.4s', rotation: '-60deg' },
      { top: '50%', left: '35%', size: 3, color: 'text-indigo-200', glow: 'drop-shadow-[0_0_2px_rgba(199,210,254,0.2)]', delay: '2.2s', rotation: '120deg' },
    ];

    // Niveau 4: Micro sparkles (détails fins)
    const microSparkles = [
      { top: '12%', left: '45%', size: 2, color: 'text-slate-300', glow: 'drop-shadow-[0_0_2px_rgba(203,213,225,0.2)]', delay: '0.3s', rotation: '15deg' },
      { top: '40%', right: '45%', size: 2, color: 'text-gray-300', glow: 'drop-shadow-[0_0_2px_rgba(209,213,219,0.2)]', delay: '1.1s', rotation: '-75deg' },
      { top: '58%', left: '45%', size: 2, color: 'text-blue-200', glow: 'drop-shadow-[0_0_2px_rgba(191,219,254,0.2)]', delay: '1.9s', rotation: '105deg' },
    ];

    // Niveau 5: Sparkles de transition (mouvement fluide)
    const transitionSparkles = [
      { top: '22%', left: '55%', size: 4, color: 'text-purple-300', glow: 'drop-shadow-[0_0_4px_rgba(196,181,253,0.3)]', delay: '0.7s', rotation: '-90deg' },
      { top: '42%', right: '55%', size: 4, color: 'text-indigo-300', glow: 'drop-shadow-[0_0_4px_rgba(165,180,252,0.3)]', delay: '1.5s', rotation: '30deg' },
    ];

    // Niveau 6: Sparkles de profondeur (arrière-plan)
    const depthSparkles = [
      { top: '28%', left: '65%', size: 3, color: 'text-violet-100', glow: 'drop-shadow-[0_0_1px_rgba(245,243,255,0.1)]', delay: '1.0s', rotation: '150deg' },
      { top: '48%', right: '65%', size: 3, color: 'text-purple-100', glow: 'drop-shadow-[0_0_1px_rgba(250,245,255,0.1)]', delay: '1.8s', rotation: '-120deg' },
    ];

    [...mainSparkles, ...secondarySparkles, ...ambientSparkles, ...microSparkles, ...transitionSparkles, ...depthSparkles].forEach((sparkle, index) => {
      sparkles.push(
        <Sparkles
          key={index}
          className={`absolute ${sparkle.color} animate-floating opacity-80 hover:opacity-100 transition-all duration-1000 ease-in-out ${sparkle.glow}`}
          style={{
            top: sparkle.top,
            left: sparkle.left,
            right: sparkle.right,
            width: `${sparkle.size * 4}px`,
            height: `${sparkle.size * 4}px`,
            animationDelay: sparkle.delay,
            animationDuration: `${6 + (index % 3)}s`,
            transform: `rotate(${sparkle.rotation})`,
            filter: 'brightness(1.2) saturate(1.1)',
          }}
        />
      );
    });

    return sparkles;
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden">
      {/* Sparkles animés avec système harmonieux */}
      <div className="absolute inset-0 pointer-events-none">
        {createSparkles()}
      </div>

      {/* Dégradé de fond amélioré */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-transparent to-indigo-50/30 pointer-events-none" />
      
      {/* Effet de lumière douce */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-gradient-radial from-purple-100/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Contenu principal */}
      <div className="relative z-10 container mx-auto px-4 pt-8 pb-16 h-full flex flex-col justify-center">
        {/* Badge testimonial */}
        <div className="flex justify-center mb-6">
          <HeroTestimonialBadge />
        </div>

        {/* Titre principal */}
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            <span className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">
              +8600 Logos
            </span>
            <br />
            <span className="text-gray-800">de Football</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            La collection la plus complète de logos de football au monde. 
            <span className="font-semibold text-indigo-600"> Tous les clubs, toutes les compétitions, parfaitement organisés.</span>
          </p>
        </div>

        {/* Points clés */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-purple-100">
            <Shield className="w-5 h-5 text-purple-600" />
            <span className="text-gray-700 font-medium">Qualité PNG HD</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-indigo-100">
            <Star className="w-5 h-5 text-indigo-600" />
            <span className="text-gray-700 font-medium">Organisé par pays</span>
          </div>
          <div className="flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 shadow-sm border border-blue-100">
            <Download className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700 font-medium">Téléchargement instantané</span>
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            onClick={onScrollToPayment}
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Obtenir la Collection Complète
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            variant="outline" 
            size="lg"
            className="border-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300"
          >
            Voir un Aperçu
          </Button>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">8600+</div>
            <div className="text-gray-600 font-medium">Logos HD</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">200+</div>
            <div className="text-gray-600 font-medium">Pays</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50+</div>
            <div className="text-gray-600 font-medium">Compétitions</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">100%</div>
            <div className="text-gray-600 font-medium">Organisé</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
