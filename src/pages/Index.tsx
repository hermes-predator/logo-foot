
import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import ProductGallery from '../components/ProductGallery';
import PaymentSection from '../components/PaymentSection';
import Footer from '../components/Footer';
import HeroSection from '../components/sections/HeroSection';
import Testimonials from '../components/Testimonials';
import { LocalBusinessSchema } from '../components/schema/LocalBusinessSchema';
import { ProductSchema } from '../components/schema/ProductSchema';

const Index = () => {
  const scrollToPayment = () => {
    const paymentSection = document.querySelector('#payment-section');
    paymentSection?.scrollIntoView({ behavior: 'smooth' });
  };

  // Création des données structurées pour la page d'accueil
  const localBusinessData = LocalBusinessSchema({});
  const productData = ProductSchema({
    name: "Pack Complet de Logos de Football",
    description: "Accédez à plus de 8600 logos de football en haute qualité. Inclut les clubs de Ligue 1, Premier League, Liga, Serie A, Bundesliga et les équipes nationales.",
    image: "https://logo-foot.com/og-image.png",
    price: "29.90"
  });

  // Meta description dynamique avec plus de mots-clés ciblés
  const metaDescription = "Téléchargez plus de 8600 logos de foot en haute qualité : écussons et emblèmes des équipes de Ligue 1, Premier League, Liga, Serie A, Bundesliga et équipes nationales. Format PNG transparent idéal pour créations graphiques, sites web, vidéos et supports marketing.";

  // Protection anti-copie au niveau de la page entière
  useEffect(() => {
    // Désactiver les combinaisons de touches courantes pour enregistrer/imprimer
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        (e.ctrlKey && (e.key === 's' || e.key === 'p' || e.key === 'u')) ||
        e.key === 'F12' ||
        e.key === 'PrintScreen'
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Désactiver le clic droit global sur les images et vidéos
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'IMG' || 
        target.tagName === 'VIDEO' ||
        target.closest('.protected-content')
      ) {
        e.preventDefault();
        return false;
      }
    };

    // Empêcher la sélection du texte sur certains éléments
    const handleSelectStart = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'IMG' || 
        target.tagName === 'VIDEO' ||
        target.closest('.protected-content')
      ) {
        e.preventDefault();
        return false;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('selectstart', handleSelectStart);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('selectstart', handleSelectStart);
    };
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Nouvel arrière-plan unifié avec dégradé et motif */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-purple-50 via-white to-blue-50">
        {/* Effet de vague abstraite - top */}
        <div className="absolute top-0 left-0 right-0 h-[300px] bg-gradient-to-b from-purple-100/30 to-transparent rounded-[100%] blur-3xl -translate-y-1/2 opacity-60" />
        
        {/* Effet de vague abstraite - bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-t from-blue-100/40 to-transparent rounded-[100%] blur-3xl translate-y-1/3 opacity-60" />
        
        {/* Points subtils */}
        <div className="absolute inset-0 mix-blend-overlay opacity-10" 
             style={{
               backgroundImage: 'radial-gradient(circle at 1px 1px, purple 1px, transparent 0)',
               backgroundSize: '40px 40px'
             }} />
        
        {/* Accent de couleur douce */}
        <div className="absolute top-1/3 -right-40 w-96 h-96 rounded-full bg-indigo-200/20 blur-3xl" />
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 rounded-full bg-purple-200/20 blur-3xl" />
      </div>
      
      <Helmet>
        {/* Meta descriptions améliorées */}
        <meta name="description" content={metaDescription} />
        <meta property="og:description" content={metaDescription} />
        <meta name="twitter:description" content={metaDescription} />
        
        {/* Données structurées améliorées */}
        <script type="application/ld+json">
          {JSON.stringify(localBusinessData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(productData)}
        </script>
      </Helmet>
      
      <main>
        <div className="container mx-auto">
          {/* Reduced bottom padding on the hero section */}
          <div className="pb-0">
            <HeroSection 
              onScrollToPayment={scrollToPayment} 
            />
          </div>
          
          {/* Reduced top padding on the ProductGallery */}
          <div className="pt-2">
            <ProductGallery />
          </div>
          
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
