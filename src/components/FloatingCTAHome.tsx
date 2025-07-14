import React from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { useFloatingCTA } from '@/hooks/useFloatingCTA';
import { Button } from '@/components/ui/button';

interface FloatingCTAHomeProps {
  onScrollToPayment: () => void;
}

const FloatingCTAHome = ({ onScrollToPayment }: FloatingCTAHomeProps) => {
  const { visible, dismissed, isAtBottom, scrollProgress, handleDismiss } = useFloatingCTA();

  if (dismissed) return null;

  // Calcul du glissement progressif
  const translateY = isAtBottom ? (1 - scrollProgress) * 100 : 100;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50"
      style={{
        transform: `translateY(${translateY}%)`,
        transition: 'transform 2.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      }}
    >
      <div className="relative overflow-hidden bg-primary">
        <div className="relative z-10 py-3 px-4 border-t-2 border-white/20">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <ShoppingCart className="h-5 w-5 text-white" />
                <div className="text-white">
                  <p className="font-semibold text-sm">Plus de 8600 logos disponibles</p>
                  <p className="text-xs opacity-90">Obtenez votre collection complète maintenant</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Button 
                onClick={onScrollToPayment}
                variant="secondary"
                size="sm"
                className="bg-white hover:bg-gray-100 text-primary font-semibold"
              >
                Acheter maintenant
              </Button>
              
              <button
                onClick={handleDismiss}
                className="p-1 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Fermer"
              >
                <X className="h-4 w-4 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTAHome;