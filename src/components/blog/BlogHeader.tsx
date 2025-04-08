
import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogHeader = () => {
  return (
    <div className="max-w-4xl mb-6 pl-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 text-gray-900 font-medium mb-3">
        <span>Le Blog des Logos de Football</span>
      </div>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-3 whitespace-nowrap">
        Articles sur le logo de foot
      </h1>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100/50 via-white to-gray-100/50 rounded-2xl blur-lg"></div>
        <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-4 border border-gray-200">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-gray-100 p-2 rounded-xl">
              <BookOpen className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="font-semibold text-gray-900">
              Le Blog Logo-Foot
            </h2>
          </div>
          
          <div>
            <p className="text-base text-gray-700 leading-relaxed">
              Bienvenue sur le blog Logo-Foot, votre source d'expertise sur les logos et emblèmes du football. Chaque article est le fruit d'une recherche approfondie pour vous faire découvrir l'histoire fascinante et l'évolution des identités visuelles qui font la richesse du football mondial.
            </p>
          </div>
          
          {/* Ajouter un lien vers l'article sur les transferts du PSG */}
          <div className="mt-4 bg-blue-50 p-3 rounded-lg border border-blue-100 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="bg-blue-600 p-1.5 rounded-full">
                <BookOpen className="w-4 h-4 text-white" />
              </div>
              <span className="font-medium text-blue-800">Nouvel article : Analyse des transferts PSG</span>
            </div>
            <Link to="/blog/42" className="text-blue-600 hover:text-blue-800 flex items-center gap-1.5 text-sm font-medium">
              <span>Lire l'article</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
