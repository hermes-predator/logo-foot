import React, { useEffect, lazy, Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../components/Footer';
import HeroSection from '../components/sections/HeroSection';
import ProductGallery from '../components/ProductGallery';
import FlipBox from '../components/ui/FlipBox';
import TopBar from '../components/TopBar';
import { LocalBusinessSchema } from '../components/schema/LocalBusinessSchema';
import { ProductSchema } from '../components/schema/ProductSchema';
import { Skeleton } from '@/components/ui/skeleton';




// Lazy load components that aren't needed for initial render
const LazyPaymentSection = lazy(() => import('../components/payment/PaymentSection'));
const LazyTestimonials = lazy(() => import('../components/Testimonials'));

const Index = () => {
  const scrollToPayment = () => {
    const url = new URL(window.location.href);
    url.searchParams.set('pay', '1');
    window.history.pushState({}, '', url.toString());
    window.dispatchEvent(new CustomEvent('open-payment-modal'));
  };

  // Création des données structurées optimisées pour la page d'accueil
  const localBusinessData = LocalBusinessSchema({});
  const productData = ProductSchema({
    name: "Pack Complet de Logos de Football",
    description: "Accédez à plus de 8600 logos de football en haute qualité. Inclut les clubs de Ligue 1, Premier League, Liga, Serie A, Bundesliga et les équipes nationales.",
    image: "https://www.logo-foot.com/og-image.png",
    price: "29.90",
    aggregateRating: {
      ratingValue: "4.8",
      reviewCount: "127"
    }
  });

  // Meta description optimisée
  const metaDescription = "Téléchargez tous les logos des clubs de foot en une fois · Tous les logos des équipes de foot nommés et classés par pays · 8 774 logos classés · Format PNG.";

  // Protection anti-copie et test de synchronisation
  useEffect(() => {
    // Test de synchronisation Supabase en arrière-plan
    const testSync = async () => {
      try {
        const { blogPosts } = await import('../data/blog');
        console.log(`🔄 Test sync: ${blogPosts.length} articles à synchroniser`);
        
        const response = await fetch('https://awhmodyqxysnqkuczgss.supabase.co/functions/v1/sync-blog-posts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ blogPosts }),
        });
        
        if (response.ok) {
          const result = await response.json();
          console.log('✅ Sync réussie:', result.count, 'articles');
        }
      } catch (error) {
        console.log('ℹ️ Sync sera disponible après déploiement');
      }
    };
    
    testSync();
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

    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'IMG' || 
        target.tagName === 'VIDEO' ||
        (target instanceof HTMLElement && target.closest('.protected-content'))
      ) {
        e.preventDefault();
        return false;
      }
    };

    const handleSelectStart = (e: Event) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'IMG' || 
        target.tagName === 'VIDEO' ||
        (target instanceof HTMLElement && target.closest('.protected-content'))
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
      {/* TopBar promotionnelle en premier */}
      <TopBar />
      <Helmet>
        {/* Title tag optimisé pour la page d'accueil */}
        <title>Logo Foot | Fichier +8700 Logos des Clubs de Football</title>
        {/* Meta tags optimisées pour éviter les doublons */}
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content="Logo Foot | Fichier +8700 Logos des Clubs de Football" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.logo-foot.com" />
        <meta property="og:image" content="https://www.logo-foot.com/og-image.png" />
        <meta property="og:description" content={metaDescription} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Logo Foot | Fichier +8700 Logos des Clubs de Football" />
        <meta name="twitter:description" content={metaDescription} />
        
        {/* Canonical URL absolue */}
        <link rel="canonical" href="https://www.logo-foot.com/" />
        
        {/* Balise hreflang pour indiquer la langue */}
        <link rel="alternate" href="https://www.logo-foot.com/" hrefLang="fr" />
        <link rel="alternate" href="https://www.logo-foot.com/" hrefLang="x-default" />
        
        {/* Performance hints */}
        <link rel="preconnect" href="https://www.logo-foot.com" />
        <link rel="dns-prefetch" href="https://www.logo-foot.com" />
        <link rel="preload" href="/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png" as="image" />

        {/* RSS feed */}
        <link rel="alternate" type="application/rss+xml" title="Logo Foot RSS" href="https://awhmodyqxysnqkuczgss.functions.supabase.co/rss" />
        
        {/* Données structurées spécifiques à la page d'accueil */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.logo-foot.com/#webpage",
            "url": "https://www.logo-foot.com",
            "name": "Logo Foot - Collection de Logos de Football",
            "description": metaDescription,
            "isPartOf": {
              "@type": "WebSite",
              "@id": "https://www.logo-foot.com/#website"
            },
            "primaryImageOfPage": {
              "@type": "ImageObject",
              "url": "https://www.logo-foot.com/og-image.png"
            },
            "mainEntity": {
              "@type": "Product",
              "name": "Pack Complet de Logos de Football",
              "description": "Collection de plus de 8700 logos de clubs de football"
            }
          })}
        </script>
        
        <script type="application/ld+json">
          {JSON.stringify(localBusinessData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(productData)}
        </script>

        {/* WebSite + SearchAction for sitewide search intent */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://www.logo-foot.com",
            "name": "Logo Foot",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://www.logo-foot.com/blog?query={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
      </Helmet>
      
      <main>
        <div className="container mx-auto">
          <div className="pb-0">
            <HeroSection 
              onScrollToPayment={scrollToPayment} 
            />
          </div>
          
          {/* FlipBox indépendante juste au-dessus de la galerie */}
          <div className="pb-0 mt-8">
            <div className="container mx-auto px-4">
              <div className="max-w-7xl mx-auto">
                <FlipBox
                  frontTitle="Besoin des logos des Clubs de Foot ?"
                  frontDescription={<>Le fichier contient plus de 8 600 logos des clubs de football uniformes, nommés et triés par pays</>}
                  backTitle="Logos des équipes de foot"
                  backContent="Le fichier regroupe les logos des clubs de foot de l'Angleterre, de l'Allemagne, de l'Espagne et du reste du monde."
                />
              </div>
            </div>
          </div>
          
          <div className="pt-0 pb-6 -mt-8">
            <ProductGallery />
          </div>
          
          <div id="payment-section" className="pt-6">
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
