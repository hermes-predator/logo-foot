
import React from 'react';
import { OptimizedImage } from '@/components/ui/optimized-image';

interface BlogHeaderProps {
  title?: string;
  description?: string;
  imageUrl?: string;
  showBreadcrumbs?: boolean;
}

const BlogHeader = ({ 
  title = "Blog Football", 
  description = "Découvrez nos articles sur le football",
  imageUrl,
  showBreadcrumbs = true
}: BlogHeaderProps) => {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with Background */}
      <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              {description}
            </p>
          </div>
        </div>
        
        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg className="w-full h-12 md:h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z" 
                  fill="white"/>
          </svg>
        </div>
      </div>

      {/* Content Section */}
      <div className="bg-white pt-8 pb-0 shadow-sm overflow-visible">
        <div className="container mx-auto px-4">
          {/* Breadcrumbs */}
          {showBreadcrumbs && (
            <nav className="text-sm text-gray-600 mb-6">
              <ol className="flex items-center space-x-2">
                <li>
                  <a href="/" className="hover:text-blue-600 transition-colors">
                    Accueil
                  </a>
                </li>
                <li className="flex items-center">
                  <span className="mx-2">/</span>
                  <span className="text-gray-800 font-medium">Blog</span>
                </li>
              </ol>
            </nav>
          )}

          {/* Featured Image */}
          {imageUrl && (
            <div className="mb-8">
              <OptimizedImage
                src={imageUrl}
                alt={title}
                width={1200}
                height={400}
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg shadow-lg"
                priority
              />
            </div>
          )}

          {/* Stats or Additional Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-gray-600">Articles publiés</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-green-600 mb-2">1000+</div>
              <div className="text-gray-600">Logos disponibles</div>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <div className="text-3xl font-bold text-purple-600 mb-2">100k+</div>
              <div className="text-gray-600">Lecteurs mensuels</div>
            </div>
          </div>
        </div>
      </div>

      {/* Yellow Call-to-Action Banner */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold mb-2">
                Téléchargez notre collection complète de logos !
              </h3>
              <p className="text-gray-800">
                Plus de 1000 logos de football en haute qualité
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
                Voir la collection
              </button>
              <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors border border-gray-300">
                En savoir plus
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
