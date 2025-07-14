import React, { useState } from 'react';
import { ShoppingCart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FloatingCTAHomeProps {
  onScrollToPayment: () => void;
}

const FloatingCTAHome = ({ onScrollToPayment }: FloatingCTAHomeProps) => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const handleDismiss = () => {
    setDismissed(true);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-primary rounded-lg shadow-lg border border-white/20 overflow-hidden max-w-xs">
        <div className="p-3">
            <div className="flex items-start justify-between mb-2">
              <div className="flex items-center space-x-2">
                <ShoppingCart className="h-4 w-4 text-white flex-shrink-0" />
                <div className="text-white">
                  <p className="font-semibold text-xs">⦗FRONT-CLOUD⦘~ Football.zip</p>
                </div>
              </div>
            
            <button
              onClick={handleDismiss}
              className="p-1 rounded-full hover:bg-white/20 transition-colors ml-2"
              aria-label="Fermer"
            >
              <X className="h-3 w-3 text-white" />
            </button>
          </div>
          
          <Button 
            onClick={onScrollToPayment}
            variant="secondary"
            size="sm"
            className="bg-white hover:bg-gray-100 text-primary font-semibold text-xs w-full"
          >
            Télécharger (9€)
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTAHome;