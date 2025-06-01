import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, CheckCircle } from 'lucide-react';
import HeroTestimonialBadge from './HeroTestimonialBadge';

interface HeroSectionProps {
  onScrollToPayment: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToPayment }) => {
  const sparkles = [
    // Top section sparkles - medium and large only
    { top: '15%', left: '10%', size: 2, delay: 0 },
    { top: '20%', left: '85%', size: 3, delay: 0.5 },
    { top: '25%', left: '75%', size: 2, delay: 1 },
    
    // Title area sparkles
    { top: '35%', left: '5%', size: 3, delay: 1.5 },
    { top: '40%', left: '90%', size: 2, delay: 2 },
    
    // Content area sparkles
    { top: '55%', left: '8%', size: 2, delay: 2.5 },
    { top: '60%', left: '88%', size: 3, delay: 3 },
    
    // Button area sparkles
    { top: '70%', left: '12%', size: 2, delay: 3.5 },
    { top: '75%', left: '85%', size: 2, delay: 4 },
    
    // Image area sparkles
    { top: '45%', left: '50%', size: 3, delay: 4.5 },
    { top: '65%', left: '55%', size: 2, delay: 5 },
    
    // Bottom section sparkles
    { top: '85%', left: '15%', size: 2, delay: 5.5 },
    { top: '90%', left: '80%', size: 3, delay: 6 },
    
    // Corner sparkles
    { top: '10%', left: '5%', size: 2, delay: 6.5 },
    { top: '10%', left: '95%', size: 2, delay: 7 },
    { top: '95%', left: '5%', size: 3, delay: 7.5 },
    { top: '95%', left: '95%', size: 2, delay: 8 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-gray-50 overflow-hidden px-4 py-20">
      {/* Background sparkles */}
      {sparkles.map((sparkle, index) => (
        <div
          key={index}
          className="absolute pointer-events-none"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            animationDelay: `${sparkle.delay}s`,
          }}
        >
          <div 
            className={`
              ${sparkle.size === 2 ? 'w-2 h-2' : 'w-3 h-3'}
              bg-gradient-to-r from-blue-400 to-purple-500 rounded-full
              animate-[ping_2s_ease-in-out_infinite]
              shadow-lg
            `}
            style={{
              filter: sparkle.size === 3 ? 'blur(0.5px)' : 'none',
            }}
          />
        </div>
      ))}

      {/* Main Content */}
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-6">
          <HeroTestimonialBadge />
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Plus de <span className="text-blue-600">8600 logos</span> de foot en{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  haute qualité
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
                Accédez instantanément à la plus grande collection de logos de football au monde. 
                Parfaitement organisés par pays et ligues pour tous vos projets créatifs.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Format PNG haute qualité',
                'Organisé par pays/ligues',
                'Téléchargement instantané',
                'Utilisation commerciale'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={onScrollToPayment}
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Télécharger maintenant
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                onClick={onScrollToPayment}
                className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg font-semibold transition-all duration-300"
              >
                Voir les exemples
              </Button>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <img
                src="/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png"
                alt="Collection de logos de football"
                className="w-full h-auto object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg animate-bounce">
              8600+
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
