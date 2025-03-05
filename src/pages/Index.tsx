
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
              Un fichier qui vous permet d'obtenir une couverture complète des ressources numériques du football en un coup.
            </p>
            <div className="max-w-2xl mx-auto text-left space-y-2">
              <h3 className="text-base font-semibold mb-3">Important :</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex items-center">
                  <span className="mr-2">▸</span>
                  Produits consultables (capture vidéo).
                </li>
                <li className="flex items-center">
                  <span className="mr-2">▸</span>
                  Ressources cadrées, uniformes, nommées et triées.
                </li>
                <li className="flex items-center">
                  <span className="mr-2">▸</span>
                  Couverture totale du football pour vos projets WEB.
                </li>
                <li className="flex items-center">
                  <span className="mr-2">▸</span>
                  Directement stockable sur ordinateur ou cloud privé.
                </li>
              </ul>
            </div>
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
