
import { lazy, Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import Header from './components/Header';
import HreflangTags from './components/SEO/HreflangTags';
import GlobalCanonical from './components/SEO/GlobalCanonical';
import { measureCoreWebVitals, prefetchCriticalResources, optimizeFontLoading } from './lib/core-web-vitals';
import { WebVitalsReporter } from './components/ui/web-vitals-reporter';

// Lazy loading des pages pour améliorer les performances
const Home = lazy(() => import('./pages/Index'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PaymentSuccess = lazy(() => import('./pages/PaymentSuccess'));

// Configuration du client de requête pour React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
      retry: 1
    }
  }
});

// Composant de chargement amélioré pour un meilleur UX
const OptimizedSuspense = ({ children }: { children: React.ReactNode }) => (
  <Suspense 
    fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4 text-gray-600">Chargement en cours...</p>
        </div>
      </div>
    }
  >
    {children}
  </Suspense>
);

function App() {
  // Mesurer les Core Web Vitals au chargement de l'application
  useEffect(() => {
    // Démarrer la mesure des Core Web Vitals
    const stopMeasuring = measureCoreWebVitals({ debug: import.meta.env.DEV });

    // Pré-chargement des ressources critiques 
    prefetchCriticalResources();
    
    // Optimiser le chargement des polices
    optimizeFontLoading();
    
    return () => {
      stopMeasuring();
    };
  }, []);

  const isDev = import.meta.env.DEV;

  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Router>
            {/* Balises SEO globales appliquées à toutes les pages */}
            <GlobalCanonical />
            <HreflangTags />
            
            <Header />
            <OptimizedSuspense>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/category/:category" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </OptimizedSuspense>
            <Toaster />
            
            {/* Afficher le reporter de Web Vitals uniquement en développement */}
            <WebVitalsReporter devMode={isDev} />
          </Router>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
