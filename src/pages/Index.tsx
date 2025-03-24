
import React from 'react';
import ProductGallery from '../components/ProductGallery';
import PaymentSection from '../components/PaymentSection';
import Footer from '../components/Footer';
import HeroSection from '../components/sections/HeroSection';
import Testimonials from '../components/Testimonials';
import BeforeAfterComparison from '../components/BeforeAfterComparison';
import BenefitsSection from '../components/sections/BenefitsSection';

const Index = () => {
  const scrollToPayment = () => {
    const paymentSection = document.querySelector('#payment-section');
    paymentSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main>
        <div className="container mx-auto">
          <HeroSection onScrollToPayment={scrollToPayment} />
          <ProductGallery />
          <BeforeAfterComparison 
            beforeImage="/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png" 
            afterImage="/lovable-uploads/99e16506-d368-4b20-9efa-77f3c4870bf7.png"
            beforeAlt="Logo de qualité basique trouvable gratuitement" 
            afterAlt="Logo haute qualité de notre collection premium"
            title="La différence de qualité est visible"
            description="Comparez la différence entre les logos gratuits de faible qualité et notre collection premium. Glissez pour voir la différence!"
          />
          <BenefitsSection />
          <div id="payment-section">
            <PaymentSection />
          </div>
        </div>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
