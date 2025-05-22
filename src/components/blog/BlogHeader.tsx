
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../ui/button';
import CategoriesMenu from './CategoriesMenu';

const BlogHeader = () => {
  const navigate = useNavigate();
  
  return (
    <div className="w-full bg-gradient-to-b from-blue-50 to-gray-50 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Logos & Écussons Football
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Explorez notre collection de logos de clubs et équipes nationales de football, 
            analysez leur design, et découvrez leur histoire.
          </p>
          
          {/* Menu des catégories */}
          <div className="w-full max-w-4xl mx-auto mb-12">
            <CategoriesMenu />
          </div>

          {/* Boîte jaune avec call-to-action - avec hauteur légèrement réduite */}
          <div className="w-full max-w-4xl mx-auto bg-yellow-50 border-2 border-yellow-200 rounded-lg p-4 md:p-5 mb-8">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-3/4 text-left mb-4 md:mb-0 md:pr-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Aperçu de quelques collections de ⦗FRONT-CLOUD⦘~ Football.zip
                </h3>
                <p className="text-gray-700 text-sm md:text-base">
                  Téléchargez tous les logos de football en haute définition dans notre pack complet pour vos projets.
                </p>
                <ul className="mt-3 text-sm text-gray-600 space-y-1">
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>+1000 logos vectorisés (PNG, SVG)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    <span>Mises à jour régulières</span>
                  </li>
                </ul>
              </div>
              <div className="md:w-1/4 flex justify-center md:justify-end">
                <Button 
                  onClick={() => navigate('/')}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-all transform hover:scale-105"
                >
                  Voir le pack
                </Button>
              </div>
            </div>
          </div>
          
          {/* Statistiques */}
          <div className="w-full max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-blue-600">300+</div>
              <div className="text-sm text-gray-500">Clubs européens</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-blue-600">200+</div>
              <div className="text-sm text-gray-500">Sélections nationales</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-blue-600">150+</div>
              <div className="text-sm text-gray-500">Compétitions</div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
              <div className="text-2xl font-bold text-blue-600">500+</div>
              <div className="text-sm text-gray-500">Clubs mondiaux</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
