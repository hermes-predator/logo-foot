
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { TooltipProvider } from "@/components/ui/tooltip";

import Index from './pages/Index';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import BlogPostSEO from './pages/BlogPostSEO';
import Payment from './pages/Payment';
import PaymentSuccess from './pages/PaymentSuccess';
import NotFound from './pages/NotFound';
import { Toaster } from "@/components/ui/toaster";
import Header from './components/Header';
import MetaTagsManager from './components/SEO/MetaTagsManager';

// Créer un client pour React Query
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Router basename="/">
            <MetaTagsManager />
            <Header />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/blog-seo/:slug" element={<BlogPostSEO />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/payment-success-token13061995" element={<PaymentSuccess />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
};

export default App;
