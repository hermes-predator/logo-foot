
import React from 'react';
import ProductGallery from '../components/ProductGallery';
import PaymentSection from '../components/PaymentSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <main className="container mx-auto">
        {/* Hero Section */}
        <section className="py-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              ⦗FRONT-CLOUD⦘~ Football.zip
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Obtenez une couverture complète des ressources numériques du football en un coup.
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <ProductGallery />

        {/* Payment Section */}
        <PaymentSection />
      </main>
    </div>
  );
};

export default Index;
