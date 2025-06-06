
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Sparkles } from 'lucide-react';

const BlogCallToAction = () => {
  const handleScrollToPayment = () => {
    const element = document.getElementById('payment-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mb-8">
      <div className="flex items-center justify-center mb-4">
        <Sparkles className="w-8 h-8 text-yellow-300 mr-2" />
        <h3 className="text-2xl font-bold">Collection Complète</h3>
        <Sparkles className="w-8 h-8 text-yellow-300 ml-2" />
      </div>
      <p className="text-lg mb-6 opacity-90">
        Accédez à plus de 1000 logos haute définition dans notre pack exclusif
      </p>
      <Button 
        onClick={handleScrollToPayment}
        size="lg" 
        className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3"
      >
        <Download className="w-5 h-5 mr-2" />
        Télécharger la Collection
      </Button>
    </div>
  );
};

export default BlogCallToAction;
