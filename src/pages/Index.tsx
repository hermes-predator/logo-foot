
import React, { useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import HeroSection from '../components/sections/HeroSection';
import { LocalBusinessSchema } from '../components/schema/LocalBusinessSchema';
import { ProductSchema } from '../components/schema/ProductSchema';
import { Skeleton } from '@/components/ui/skeleton';

// Lazy load components that aren't needed for initial render
const LazyProductGallery = lazy(() => import('../components/ProductGallery'));
const LazyPaymentSection = lazy(() => import('../components/payment/PaymentSection'));
const LazyTestimonials = lazy(() => import('../components/Testimonials'));

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

  // Utiliser requestIdleCallback pour les tâches non critiques
  useEffect(() => {
    const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
    
    const handleIdleWork = () => {
      // Précharger les ressources importantes mais non critiques pour l'affichage initial
      const prefetchLinks = [
        '/lovable-uploads/df5bc77f-e9a3-4fd7-b383-29dfce99bcd3.png',
        '/frontcloud-football.zip'
      ];
      
      prefetchLinks.forEach(url => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        document.head.appendChild(link);
      });
    };
    
    const idleCallbackId = idleCallback(handleIdleWork);
    
    return () => {
      if (window.cancelIdleCallback) {
        window.cancelIdleCallback(idleCallbackId);
      } else {
        clearTimeout(idleCallbackId);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Helmet>
        {/* Meta tags for performance */}
        <meta name="description" content={metaDescription} />
        <meta property="og:description" content={metaDescription} />
        <meta name="twitter:description" content={metaDescription} />
        <link rel="preconnect" href="https://logo-foot.com" />
        <link rel="dns-prefetch" href="https://logo-foot.com" />
        
        {/* Resource hints */}
        <link rel="preload" href="/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png" as="image" />
        
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
          {/* HeroSection is critical and remains eagerly loaded */}
          <div className="pb-0">
            <HeroSection 
              onScrollToPayment={scrollToPayment} 
            />
          </div>
          
          {/* Lazy load non-critical components with suspense fallbacks */}
          <div className="pt-2">
            <Suspense fallback={<Skeleton className="w-full h-96 rounded-lg" />}>
              <LazyProductGallery />
            </Suspense>
          </div>
          
          <div id="payment-section">
            <Suspense fallback={<Skeleton className="w-full h-[500px] rounded-lg" />}>
              <LazyPaymentSection />
            </Suspense>
          </div>
        </div>
        
        <Suspense fallback={<Skeleton className="w-full h-80 rounded-lg" />}>
          <LazyTestimonials />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
