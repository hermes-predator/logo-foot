
import React from 'react';
import { ArrowRight, BookOpen, Folder, Grid3X3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const BlogHeader = () => {
  return <div className="max-w-4xl mb-6 pl-4">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100/80 text-gray-800 font-medium mb-3 shadow-sm">
        <span>Le Blog des Logos de Football</span>
      </div>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-3">
        Articles sur le logo de foot
      </h1>

      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100/50 via-white to-gray-100/50 rounded-2xl blur-lg"></div>
        <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 shadow-sm">
          <div className="flex items-center gap-3 mb-3">
            <div className="bg-gray-100 p-2 rounded-xl">
              <BookOpen className="w-5 h-5 text-black" />
            </div>
            <h2 className="font-semibold text-gray-900">
              Le Blog Logo-Foot
            </h2>
          </div>
          
          <div className="mb-4">
            <p className="text-base text-gray-700 leading-relaxed">
              Bienvenue sur le blog Logo-Foot, votre source d'expertise sur les logos et emblèmes du football. Découvrez les plus grands clubs, explorez l'art des logos de football ou apprenez à créer votre propre logo.
            </p>
          </div>
          
          <div className="mb-4">
            <div className="flex flex-wrap gap-2">
              <Link to="/blog" className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors">
                Tout
              </Link>
              <Link to="/blog?category=logos" className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors">
                Logos & Design
              </Link>
              <Link to="/blog?category=history" className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors">
                Histoire
              </Link>
              <Link to="/blog?category=technical" className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors">
                Technique
              </Link>
              <Link to="/blog?category=analysis" className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm transition-colors">
                Analyses
              </Link>
              <Link to="/blog?category=pixel-art" className="px-3 py-1 bg-purple-100 hover:bg-purple-200 rounded-full text-sm transition-colors flex items-center gap-1">
                <Grid3X3 className="h-3 w-3" />
                Pixel Art
              </Link>
            </div>
          </div>
          
          {/* Modification du style du CTA avec des couleurs jaune ambré */}
          <div className="bg-amber-50 rounded-xl p-4 border border-amber-200/70 shadow-inner">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-bold text-gray-900">Vous souhaitez obtenir tous les logos de football ?</h3>
                <p className="text-sm text-amber-800/80">Recevez + de 8 600 logos réunis dans un fichier ZIP unique et parfaitement organisé</p>
              </div>
              <Button asChild className="bg-white hover:bg-gray-50 whitespace-nowrap text-gray-900 border border-gray-200">
                <Link to="/" className="flex items-center gap-2">
                  <Folder className="h-4 w-4" />
                  <span>Voir le fichier</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default BlogHeader;
