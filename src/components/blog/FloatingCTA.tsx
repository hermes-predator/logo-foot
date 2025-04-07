
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from '@/hooks/use-toast';

const FloatingCTA = () => {
  const [showAnimation, setShowAnimation] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  
  // Effect pour l'animation pulsante et le suivi d'interaction
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowAnimation(true);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);

  // Fonction pour suivre l'interaction et afficher un toast
  const handleInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      toast({
        title: "Téléchargement prêt !",
        description: "Votre collection de 8 600+ logos de football est prête à être téléchargée.",
        variant: "default",
      });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in will-change-transform will-change-opacity">
      <div className="bg-gradient-to-r from-purple-700 via-indigo-600 to-purple-700 shadow-xl py-5 px-4 md:px-6 border-t-2 border-white/30">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between">
          <div className="flex items-center mb-3 sm:mb-0">
            <Link to="/" className="group flex items-center">
              <span className="hidden md:inline-block bg-white/20 p-3 rounded-full mr-3 group-hover:bg-white/30 transition-all duration-300 relative overflow-hidden hover:scale-105">
                <Download 
                  className="h-7 w-7 text-white" 
                  style={{ 
                    animation: 'bounce 1.2s ease infinite, glow 1.5s ease-in-out infinite alternate'
                  }} 
                />
                <span className="absolute inset-0 bg-white/30 rounded-full animate-ping opacity-75" style={{ animationDuration: '1.5s' }}></span>
              </span>
              <div className="relative">
                <span className="absolute -top-2 -right-2 md:-right-6 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full shadow-lg animate-pulse z-10 font-bold">NOUVEAU</span>
                <p className="text-white font-medium text-sm md:text-lg hover:text-white/90 transition-colors">
                  <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100 text-base md:text-2xl">⦗FRONT-CLOUD⦘~ Football.zip</span>{' '}
                  <span className="text-blue-100/90 font-light text-sm md:text-base ml-1 italic">8 600+ logos de foot organisés dans un fichier ZIP arborescent</span>
                </p>
                <div className="hidden sm:flex items-center mt-1 space-x-2">
                  <span className="bg-white/20 px-2 py-0.5 text-xs text-white/90 rounded-full">Haute qualité</span>
                  <span className="bg-white/20 px-2 py-0.5 text-xs text-white/90 rounded-full">Classement par ligue</span>
                  <span className="bg-white/20 px-2 py-0.5 text-xs text-white/90 rounded-full">Format vectoriel</span>
                </div>
              </div>
            </Link>
          </div>
          
          <div className="flex items-center">
            <Button 
              asChild
              variant="secondary" 
              className="bg-white hover:bg-gray-100 px-5 py-2.5 text-sm md:text-base group relative overflow-hidden shadow-lg transition-all hover:shadow-xl hover:scale-105 border-2 border-transparent hover:border-white/20"
              size="lg"
              onClick={handleInteraction}
            >
              <Link to="/" className="flex items-center gap-2">
                <span className="absolute -right-3 -top-3 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded-full opacity-90 z-10 font-semibold hidden md:block">GRATUIT</span>
                <Sparkles className="w-5 h-5 text-amber-500 hidden sm:inline" />
                <span className="text-blue-600 font-bold relative z-10">Télécharger maintenant</span>
                <ArrowRight className="h-5 w-5 text-blue-600 transform transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-100/30 to-transparent animate-shine" style={{ animationDuration: '2s' }}></span>
              </Link>
            </Button>
            <span className="text-white/70 text-xs ml-3 hidden md:block">Accès<br/>immédiat</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTA;
