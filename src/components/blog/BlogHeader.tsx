
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Sparkles, Star } from 'lucide-react';
import { Badge } from '../ui/badge';

const BlogHeader = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-blue-50/30 overflow-hidden">
      {/* Éléments décoratifs flottants */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 text-blue-200 opacity-40 animate-floating">
          <Sparkles className="w-8 h-8" />
        </div>
        <div className="absolute top-32 right-16 text-yellow-300 opacity-30 animate-floating" style={{ animationDelay: '1s' }}>
          <Star className="w-6 h-6" />
        </div>
        <div className="absolute bottom-20 left-20 text-blue-300 opacity-25 animate-floating" style={{ animationDelay: '2s' }}>
          <FileText className="w-7 h-7" />
        </div>
        <div className="absolute top-16 right-32 text-yellow-200 opacity-35 animate-floating" style={{ animationDelay: '0.5s' }}>
          <Sparkles className="w-5 h-5" />
        </div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Bouton retour */}
        <div className="mb-8">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors duration-200 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium">Retour à l'accueil</span>
          </Link>
        </div>

        {/* Contenu principal */}
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge premium */}
          <div className="mb-6">
            <Badge 
              variant="secondary" 
              className="bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 border-yellow-300 px-4 py-2 text-sm font-semibold shadow-sm"
            >
              <Star className="w-4 h-4 mr-2 fill-yellow-600" />
              Blog Premium Logo Foot
            </Badge>
          </div>

          {/* Titre principal */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
              Découvrez l'Univers
            </span>
            <br />
            <span className="text-gray-800">des Logos de Football</span>
          </h1>

          {/* Sous-titre */}
          <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Plongez dans l'histoire fascinante des emblèmes footballistiques, leurs évolutions, 
            leurs significations et les tendances du design sportif moderne.
          </p>

          {/* Statistiques */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-1">500+</div>
              <div className="text-sm text-gray-600">Articles détaillés</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">1000+</div>
              <div className="text-sm text-gray-600">Logos analysés</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-600 mb-1">50+</div>
              <div className="text-sm text-gray-600">Pays couverts</div>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-600 mb-1">100k+</div>
              <div className="text-sm text-gray-600">Lecteurs mensuels</div>
            </div>
          </div>
        </div>
      </div>

      {/* Container jaune décoratif en bas - sans marge */}
      <div className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-400 h-2"></div>
    </div>
  );
};

export default BlogHeader;
