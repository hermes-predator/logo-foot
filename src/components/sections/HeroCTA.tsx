
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

interface HeroCTAProps {
  onScrollToPayment: () => void;
}

const HeroCTA = ({ onScrollToPayment }: HeroCTAProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
      <Button 
        size="lg" 
        onClick={onScrollToPayment}
        className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group"
      >
        Accéder maintenant
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Button>
      <p className="text-sm text-gray-500 flex items-center gap-2">
        <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        Téléchargement instantané
      </p>
    </div>
  );
};

export default HeroCTA;
