
import React, { useState } from 'react';
import ProductGallery from '../components/ProductGallery';
import PaymentSection from '../components/PaymentSection';
import Footer from '../components/Footer';
import HeroSection from '../components/sections/HeroSection';
import Testimonials from '../components/Testimonials';
import BeforeAfterComparison from '../components/BeforeAfterComparison';

const Index = () => {
  const [demoDialogOpen, setDemoDialogOpen] = useState(false);
  
  const scrollToPayment = () => {
    const paymentSection = document.querySelector('#payment-section');
    paymentSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main>
        <div className="container mx-auto">
          <HeroSection 
            onScrollToPayment={scrollToPayment} 
          />
          <ProductGallery />
          <div id="payment-section">
            <PaymentSection />
          </div>
        </div>
        <Testimonials />
      </main>
      <Footer />
      
      {/* BeforeAfterComparison component for dialog */}
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
