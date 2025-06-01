
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Star, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import HeroTestimonialBadge from './HeroTestimonialBadge';

interface HeroSectionProps {
  onScrollToPayment: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToPayment }) => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Sparkles around title area */}
      <Sparkles className="absolute top-20 left-[15%] w-4 h-4 text-purple-400 animate-pulse" style={{ animationDelay: '0s' }} />
      <Sparkles className="absolute top-32 right-[20%] w-3 h-3 text-blue-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
      <Sparkles className="absolute top-24 left-[70%] w-5 h-5 text-indigo-400 animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Sparkles around content area */}
      <Sparkles className="absolute top-1/3 left-[8%] w-3 h-3 text-violet-400 animate-pulse" style={{ animationDelay: '1.5s' }} />
      <Sparkles className="absolute top-1/3 right-[12%] w-4 h-4 text-cyan-400 animate-pulse" style={{ animationDelay: '2s' }} />
      <Sparkles className="absolute top-[45%] left-[25%] w-6 h-6 text-purple-500 animate-pulse" style={{ animationDelay: '2.5s' }} />
      <Sparkles className="absolute top-[40%] right-[8%] w-3 h-3 text-blue-500 animate-pulse" style={{ animationDelay: '3s' }} />
      
      {/* Sparkles around button area */}
      <Sparkles className="absolute top-[55%] left-[18%] w-4 h-4 text-indigo-500 animate-pulse" style={{ animationDelay: '3.5s' }} />
      <Sparkles className="absolute top-[60%] right-[25%] w-5 h-5 text-purple-400 animate-pulse" style={{ animationDelay: '4s' }} />
      <Sparkles className="absolute top-[52%] left-[65%] w-3 h-3 text-cyan-500 animate-pulse" style={{ animationDelay: '4.5s' }} />
      
      {/* Sparkles around image area */}
      <Sparkles className="absolute top-[25%] right-[5%] w-4 h-4 text-violet-500 animate-pulse" style={{ animationDelay: '5s' }} />
      <Sparkles className="absolute top-[50%] right-[15%] w-6 h-6 text-blue-400 animate-pulse" style={{ animationDelay: '5.5s' }} />
      <Sparkles className="absolute top-[70%] right-[10%] w-3 h-3 text-purple-600 animate-pulse" style={{ animationDelay: '6s' }} />
      <Sparkles className="absolute top-[65%] left-[75%] w-5 h-5 text-indigo-400 animate-pulse" style={{ animationDelay: '6.5s' }} />
      
      {/* Bottom area sparkles */}
      <Sparkles className="absolute bottom-32 left-[20%] w-4 h-4 text-cyan-400 animate-pulse" style={{ animationDelay: '7s' }} />
      <Sparkles className="absolute bottom-28 right-[30%] w-3 h-3 text-violet-400 animate-pulse" style={{ animationDelay: '7.5s' }} />
      <Sparkles className="absolute bottom-40 left-[60%] w-5 h-5 text-blue-500 animate-pulse" style={{ animationDelay: '8s' }} />
      
      {/* Corner sparkles for balance */}
      <Sparkles className="absolute top-16 left-[5%] w-3 h-3 text-purple-300 animate-pulse" style={{ animationDelay: '8.5s' }} />
      <Sparkles className="absolute top-12 right-[8%] w-4 h-4 text-indigo-300 animate-pulse" style={{ animationDelay: '9s' }} />
      <Sparkles className="absolute bottom-20 left-[10%] w-4 h-4 text-blue-300 animate-pulse" style={{ animationDelay: '9.5s' }} />
      <Sparkles className="absolute bottom-24 right-[5%] w-3 h-3 text-violet-300 animate-pulse" style={{ animationDelay: '10s' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors">
                <Star className="w-4 h-4 mr-2 fill-current" />
                Collection Premium
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
                +8600 Logos de Football
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0">
                La collection la plus complète de logos de clubs et équipes nationales. 
                Téléchargement instantané en haute qualité.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={onScrollToPayment}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Télécharger Maintenant
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              >
                Voir les Exemples
              </Button>
            </div>

            <HeroTestimonialBadge />
          </div>

          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
              <img
                src="/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png"
                alt="Aperçu de la collection de logos de football"
                className="w-full h-auto rounded-lg"
                loading="eager"
              />
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full font-bold shadow-lg">
                Nouveau !
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
