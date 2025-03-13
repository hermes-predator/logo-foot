
import React from 'react';
import ProductGallery from '../components/ProductGallery';
import PaymentSection from '../components/PaymentSection';
import Footer from '../components/Footer';
import HeroSection from '../components/sections/HeroSection';
import BenefitsSection from '../components/sections/BenefitsSection';
import Testimonials from '../components/Testimonials';

const Index = () => {
  const scrollToPayment = () => {
    const paymentSection = document.querySelector('#payment-section');
    paymentSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main className="container mx-auto">
        <HeroSection onScrollToPayment={scrollToPayment} />
        <BenefitsSection />
        <ProductGallery />
        <div id="payment-section">
          <PaymentSection />
        </div>
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
