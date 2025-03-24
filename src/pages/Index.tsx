
import React, { useState } from 'react';
import ProductGallery from '../components/ProductGallery';
import PaymentSection from '../components/PaymentSection';
import Footer from '../components/Footer';
import HeroSection from '../components/sections/HeroSection';
import Testimonials from '../components/Testimonials';
import { Button } from '../components/ui/button';
import { Play } from 'lucide-react';
import BeforeAfterComparison from '../components/BeforeAfterComparison';

const Index = () => {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
  
  const scrollToPayment = () => {
    const paymentSection = document.querySelector('#payment-section');
    paymentSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="fixed top-20 right-6 z-30">
        <Button
          onClick={() => setDemoDialogOpen(true)}
          className="relative group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
          size="sm"
        >
          <div className="flex items-center gap-2 px-2 py-1">
            <div className="bg-white/20 rounded-full p-1 group-hover:scale-110 transition-transform duration-300">
              <Play className="h-3 w-3 fill-white text-white" />
            </div>
            <span className="font-medium text-xs">Voir la démo</span>
          </div>
        </Button>
      </div>
      
      <main>
        <div className="container mx-auto">
          <HeroSection onScrollToPayment={scrollToPayment} />
          <ProductGallery />
          {/* La section BeforeAfterComparison a été supprimée ici */}
          <div id="payment-section">
            <PaymentSection />
          </div>
        </div>
        <Testimonials />
      </main>
      <Footer />
      
      {/* On garde le composant BeforeAfterComparison mais seulement pour la boîte de dialogue */}
      <BeforeAfterComparison 
        videoUrl="/lovable-uploads/df5bc77f-e9a3-4fd7-b383-29dfce99bcd3.png" 
        title="La différence de qualité est visible"
        description="Découvrez la différence entre les logos gratuits de faible qualité et notre collection premium avec cette démonstration rapide."
        showButton={false}
        isDialogOpen={demoDialogOpen}
        onDialogOpenChange={setDemoDialogOpen}
      />
    </div>
  );
};

export default Index;
