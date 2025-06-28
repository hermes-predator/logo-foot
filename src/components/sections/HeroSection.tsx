import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Play, Download, Clock, Shield, Users, CheckCircle, ArrowRight } from 'lucide-react';
import HeroTestimonialBadge from './HeroTestimonialBadge';

const HeroSection = ({ onScrollToPayment }: { onScrollToPayment: () => void }) => {
  const navigate = useNavigate();

  const handlePaymentRedirect = () => {
    navigate('/payment');
  };

  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50 py-16 overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-200 via-blue-50 to-white mix-blend-soft-light"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-blue-50 bg-opacity-20 backdrop-blur-sm"></div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white"></div>
      
      <div className="absolute top-1/4 left-1/4 transform -translate-x-1/4 -translate-y-1/4 rounded-full bg-blue-200 opacity-30 filter blur-3xl w-48 h-48"></div>
      <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/4 translate-y-1/4 rounded-full bg-blue-200 opacity-30 filter blur-3xl w-48 h-48"></div>
      
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Collection de <span className="text-blue-600">+8600 logos</span> de football
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Téléchargez instantanément la plus grande collection de logos de clubs de football au monde
            </p>
          </div>

          <HeroTestimonialBadge />

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={onScrollToPayment}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Download className="mr-2 h-5 w-5" />
              Télécharger maintenant - 9€
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              onClick={handlePaymentRedirect}
              className="h-8 bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-600 gap-1 mt-4"
            >
              <Shield className="h-4 w-4" />
              Paiement sécurisé
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            <div className="flex items-center justify-center space-x-3 text-gray-600">
              <Clock className="h-6 w-6 text-blue-500" />
              <span>Accès instantané</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-600">
              <Shield className="h-6 w-6 text-blue-500" />
              <span>Paiement sécurisé</span>
            </div>
            <div className="flex items-center justify-center space-x-3 text-gray-600">
              <Users className="h-6 w-6 text-blue-500" />
              <span>+1000 clients satisfaits</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="flex items-center space-x-3 text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Clubs de Ligue 1</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Premier League</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Liga Santander</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Serie A</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Bundesliga</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Equipes Nationales</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Format PNG</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-700">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <span>Haute résolution</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
