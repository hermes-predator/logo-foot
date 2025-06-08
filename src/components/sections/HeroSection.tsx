
import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import HeroTestimonialBadge from './HeroTestimonialBadge';
import GoogleDriveBadge from '../payment/GoogleDriveBadge';
import SumUpBadge from '../payment/SumUpBadge';

interface HeroSectionProps {
  onScrollToPayment: () => void;
}

const HeroSection = ({ onScrollToPayment }: HeroSectionProps) => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Arrière-plan avec formes géométriques animées */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-orange-200/20 to-pink-200/20 rounded-full blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Badge de témoignage en haut */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-8 flex justify-center"
          >
            <HeroTestimonialBadge />
          </motion.div>

          {/* Titre principal optimisé SEO */}
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 bg-clip-text text-transparent leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="block">+8600 Logo Club de Foot</span>
            <span className="block text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-2">
              en un fichier parfaitement organisé
            </span>
          </motion.h1>

          {/* Sous-titre */}
          <motion.p 
            className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Collection complète de logo des équipes de foot du monde entier. 
            <span className="font-semibold text-blue-700"> Ligue 1, Premier League, Liga, Serie A, Bundesliga</span> et les équipes nationales.
          </motion.p>

          {/* Images de démonstration */}
          <motion.div 
            className="mb-10 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="relative">
              <img 
                src="/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png"
                alt="Aperçu collection logos football organisée par pays et compétitions"
                className="rounded-2xl shadow-2xl max-w-full h-auto w-full max-w-4xl mx-auto transform hover:scale-105 transition-transform duration-500"
                loading="eager"
                width="800"
                height="600"
              />
              
              {/* Badge Google Drive superposé */}
              <motion.div 
                className="absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <GoogleDriveBadge alwaysEnlarged={true} />
              </motion.div>
            </div>
          </motion.div>

          {/* Call to Action avec animation */}
          <motion.div 
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Button 
              onClick={onScrollToPayment}
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold text-lg px-12 py-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-3">
                Accéder maintenant
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
              
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 group-hover:animate-pulse transition-opacity duration-300"></div>
            </Button>

            {/* Badge SumUp pour la réassurance paiement */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <SumUpBadge />
            </motion.div>
          </motion.div>

          {/* Texte informatif */}
          <motion.p 
            className="text-sm text-gray-500 mt-6 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            Téléchargement instantané • Format PNG haute qualité • Compatible tous supports
          </motion.p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
