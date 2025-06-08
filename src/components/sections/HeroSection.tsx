
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Star, Users, Shield } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import HeroTestimonialBadge from './HeroTestimonialBadge';

interface HeroSectionProps {
  onScrollToPayment: () => void;
}

const HeroSection = ({ onScrollToPayment }: HeroSectionProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Contenu textuel */}
          <motion.div 
            className="text-center lg:text-left order-2 lg:order-1"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6">
              <HeroTestimonialBadge />
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                +8600 logos
              </span>
              <br />
              de foot en 1 fichier
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Recevez immédiatement tous les logos des clubs de football du monde entier, 
              parfaitement organisés par pays et championnats.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="font-semibold">4.9/5</span>
                <span>(2,847 avis)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="font-semibold">15,000+</span>
                <span>téléchargements</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="font-semibold">100%</span>
                <span>sécurisé</span>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                onClick={onScrollToPayment}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Télécharger maintenant - 29,90€
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Card className="relative p-6 bg-white/80 backdrop-blur-sm shadow-2xl border-0 overflow-hidden">
              <div className="relative z-10">
                <img
                  src="/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png"
                  alt="Collection de logos de football"
                  className="w-full h-auto rounded-lg shadow-lg"
                  loading="eager"
                />
              </div>
              
              {/* Effet de brillance */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shine"></div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
