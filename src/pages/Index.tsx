
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
              ⦗𝐅𝐑𝐎𝐍𝐓-𝐂𝐋𝐎𝐔𝐃⦘~ 𝐅𝐨𝐨𝐭𝐛𝐚𝐥𝐥.𝐳𝐢𝐩
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Le ⦗𝐅𝐑𝐎𝐍𝐓-𝐂𝐋𝐎𝐔𝐃⦘~ 𝐅𝐨𝐨𝐭𝐛𝐚𝐥𝐥.𝐳𝐢𝐩 est un fichier précieux à ajouter à votre patrimoine numérique si vous cherchez à obtenir TOUTES LES RESSOURCES DU FOOTBALL en un coup.
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
