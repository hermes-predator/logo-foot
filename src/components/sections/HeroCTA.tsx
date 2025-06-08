
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HeroCTAProps {
  onScrollToPayment: () => void;
}

const HeroCTA = ({ onScrollToPayment }: HeroCTAProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
      <Button
        onClick={onScrollToPayment}
        size="lg"
        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
      >
        <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
        Accéder maintenant
        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
      </Button>
      
      <Button
        variant="outline"
        size="lg"
        onClick={onScrollToPayment}
        className="border-2 border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:border-blue-300"
      >
        Voir le contenu
      </Button>
    </div>
  );
};

export default HeroCTA;
