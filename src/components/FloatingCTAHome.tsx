import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FloatingCTAHome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-primary rounded-lg shadow-lg border border-white/20 overflow-hidden max-w-xs">
        <div className="p-3">
          <div className="mb-2">
            <div className="flex items-center space-x-1 mb-1">
              <ShoppingCart className="h-4 w-4 text-white flex-shrink-0" />
              <span className="text-white font-semibold text-sm">Football.zip</span>
            </div>
            <p className="text-white/90 text-xs leading-tight">Recevez instantanément tous les logos de clubs de football uniformes, nommés et triés par pays</p>
          </div>
          
          <Button 
            onClick={() => navigate('/payment')}
            variant="secondary"
            size="sm"
            className="bg-white hover:bg-gray-100 text-primary font-semibold text-xs w-full"
          >
            <span className="font-semibold">Télécharger</span>
            <span className="ml-1 font-normal">(5€)</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FloatingCTAHome;
