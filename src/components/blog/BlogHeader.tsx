
import React from 'react';
import { ArrowRight, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BlogHeader = () => {
  return (
    <div className="max-w-4xl mb-6 pl-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100/80 text-gray-800 font-medium mb-3 shadow-sm">
        <span>Le Blog des Logos de Football</span>
      </div>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-3">
        Articles sur le logo de foot
      </h1>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-100/50 via-white to-purple-100/50 rounded-2xl blur-lg"></div>
        <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-gray-100 p-2 rounded-xl">
              <BookOpen className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="font-semibold text-gray-900">
              Le Blog Logo-Foot
            </h2>
          </div>
          
          <div className="mb-4">
            <p className="text-base text-gray-700 leading-relaxed">
              Bienvenue sur le blog Logo-Foot, votre source d'expertise sur les logos et emblèmes du football. Chaque article est le fruit d'une recherche approfondie pour vous faire découvrir l'histoire fascinante et l'évolution des identités visuelles qui font la richesse du football mondial. Des grands clubs européens aux équipes slovaques comme le Slovan Bratislava, explorez l'art des logos de football, ou apprenez à créer votre propre logo pour votre club.
            </p>
          </div>
          
          {/* Ajout d'un CTA vers la page d'accueil */}
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-gray-900">Vous cherchez des logos de football ?</h3>
                <p className="text-sm text-gray-600">Accédez à notre collection complète de plus de 8600 logos en haute qualité</p>
              </div>
              <Button 
                asChild 
                className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap"
              >
                <Link to="/" className="flex items-center gap-2">
                  <span>En savoir plus</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
