
import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Home, Search, ArrowLeft } from 'lucide-react';
import PageTransition from '../components/ui/page-transition';

const NotFound = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Page non trouvée - Logo Foot</title>
        <meta name="description" content="La page que vous recherchez n'existe pas. Retournez à l'accueil pour découvrir notre collection de logos de football." />
        <link rel="canonical" href="https://logo-foot.com/404" />
        <meta name="robots" content="noindex, nofollow" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Page non trouvée - Logo Foot" />
        <meta property="og:description" content="La page que vous recherchez n'existe pas. Retournez à l'accueil pour découvrir notre collection de logos de football." />
        <meta property="og:url" content="https://logo-foot.com/404" />
        
        {/* Twitter */}
        <meta name="twitter:title" content="Page non trouvée - Logo Foot" />
        <meta name="twitter:description" content="La page que vous recherchez n'existe pas. Retournez à l'accueil pour découvrir notre collection de logos de football." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 flex items-center justify-center px-4">
        <div className="text-center max-w-md mx-auto">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-blue-100 rounded-full mb-6">
              <Search className="w-12 h-12 text-blue-600" />
            </div>
            <h1 className="text-6xl font-bold text-gray-900 mb-2">404</h1>
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page non trouvée</h2>
            <p className="text-gray-600 mb-8">
              Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
            </p>
          </div>

          <div className="space-y-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              <Home className="w-5 h-5" />
              Retour à l'accueil
            </Link>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Voir le blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default NotFound;
