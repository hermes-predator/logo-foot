
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const BlogCTASection = () => {
  return (
    <div className="bg-gradient-to-r from-orange-400 to-orange-500 text-white p-8 rounded-lg shadow-lg mb-8">
      <div className="max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">
          🎯 Accédez à Plus de 1000 Logos de Football en HD
        </h3>
        <p className="text-lg mb-6 opacity-90">
          Téléchargez notre collection complète de logos PNG transparents, parfaits pour vos projets créatifs !
        </p>
        <Button 
          size="lg" 
          className="bg-white text-orange-500 hover:bg-gray-100 font-semibold px-8 py-3 rounded-full shadow-lg transform hover:scale-105 transition-all duration-200"
          onClick={() => window.location.href = '#payment'}
        >
          Télécharger Maintenant
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};
