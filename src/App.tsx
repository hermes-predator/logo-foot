
import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import Header from './components/Header';
import HreflangTags from './components/SEO/HreflangTags';
import GlobalCanonical from './components/SEO/GlobalCanonical';

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

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <TooltipProvider>
          <Router>
            {/* Balises SEO globales appliquées à toutes les pages */}
            <GlobalCanonical />
            <HreflangTags />
            
            <Header />
            <Suspense fallback={<div className="min-h-screen bg-white flex items-center justify-center">Chargement...</div>}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/category/:category" element={<Blog />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/payment-success" element={<PaymentSuccess />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <Toaster />
          </Router>
        </TooltipProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
}

export default App;
