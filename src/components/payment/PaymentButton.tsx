import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronRight, Download } from 'lucide-react';
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface PaymentButtonProps { label?: string; }

const PaymentButton: React.FC<PaymentButtonProps> = ({ label }) => {
  const navigate = useNavigate();

  const handlePayment = () => {
    navigate('/payment');
  };

  return (
    <div className="space-y-4 mt-6">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button 
            onClick={handlePayment}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-7 text-lg rounded-xl transition-all duration-300 group h-16 sm:h-20 relative overflow-hidden shadow-lg hover:shadow-xl hover:shadow-blue-500/25"
            aria-label="Procéder au paiement sécurisé de 8€"
          >
            {/* Shine effect */}
            <div className="absolute inset-0 overflow-hidden rounded-xl">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-[shimmer_3s_ease-in-out_infinite]"
                style={{ transform: 'skewX(-12deg)' }}
              />
            </div>
            
            <div className="flex items-center justify-center w-full gap-4 relative z-10">
              <Download className="w-5 h-5 sm:w-6 sm:h-6" />
              <span className="text-center font-bold text-base sm:text-xl">
                {label ?? "Télécharger maintenant (8€)"}
              </span>
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </Button>
        </TooltipTrigger>
        <TooltipContent 
          side="top"
          sideOffset={12}
          className="bg-card border border-border shadow-lg p-3 rounded-xl" 
        >
          <p className="text-sm font-medium text-foreground">
            Accès immédiat après paiement sécurisé
          </p>
        </TooltipContent>
      </Tooltip>
      
      <div className="sr-only">
        Ce bouton vous permet d'acheter et télécharger immédiatement la collection de logos de football pour 8€.
      </div>
    </div>
  );
};

export default PaymentButton;
