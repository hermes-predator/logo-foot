
import React from 'react';

import FloatingParticles from './FloatingParticles';
import BlogHeaderCarousel from './BlogHeaderCarousel';
import { Folder, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import trustpilotLogo from '@/assets/trustpilot-logo.png';

const BlogHeader = () => {
  return <div className="w-full relative overflow-hidden rounded-b-3xl" style={{ backgroundColor: 'rgb(30, 29, 28)' }}>
      {/* Particules flottantes */}
      <FloatingParticles />
      
      {/* Contenu principal */}
      <div className="relative z-10 text-white">
        <div className="container mx-auto px-4 pt-8 pb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 pr-4">
            {/* Contenu principal à gauche */}
            <div className="flex-1 space-y-4">
              {/* Texte principal */}
              <div className="space-y-3 ml-8">
                <p className="text-xl md:text-2xl text-white max-w-3xl leading-relaxed">
                  <span className="flex items-center gap-2">
                    <ArrowRight className="h-5 w-5 text-orange-500 flex-shrink-0" />
                    <span className="font-medium">Téléchargez <span className="font-bold underline text-white">+ de 8 800 LOGOS de Clubs de Football</span></span>
                  </span>
                </p>
                <p className="text-xs md:text-sm font-normal text-gray-300">
                  Obtenez un fichier ZIP complet parfaitement organisé par pays*
                </p>
                
                {/* Badges de confiance minimalistes - sous les textes */}
                <div className="flex flex-wrap items-center gap-3 text-[11px] sm:text-xs text-gray-300 pt-2">
                  <div className="flex items-center gap-1.5">
                    <img src="/lovable-uploads/158cf2a6-67ff-42e3-8af1-c42f1ac874b8.png" alt="SumUp" className="h-3.5 brightness-0 invert opacity-70" />
                    <span>Paiement Sécurisé</span>
                  </div>
                  <span className="text-gray-500">•</span>
                  <div className="flex items-center gap-1.5">
                    <img src="/lovable-uploads/91043604-de74-45c7-bcbf-6621a40a1109.png" alt="Google Drive" className="h-3.5 opacity-90" />
                    <span>Stockable sur Drive</span>
                  </div>
                  <span className="text-gray-500">•</span>
                  <div className="flex items-center gap-1">
                    <img src={trustpilotLogo} alt="TrustPilot" className="h-3.5 brightness-0 invert opacity-70" />
                    <span className="font-medium">4.8/5</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Section droite - CTA simplifié */}
            <div className="lg:flex-shrink-0 flex flex-col items-center gap-3 mr-4">
              <Link to="/" className="block">
                <button 
                  className="group px-8 py-4 text-base font-semibold rounded-xl transition-all duration-300 flex items-center gap-3 text-white border border-white/20 hover:border-white/40 hover:bg-white/10"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                >
                  <Folder className="w-5 h-5" />
                  <span>Voir le fichier</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
              
              {/* TrustPilot discret */}
              <div className="flex items-center gap-2 text-xs text-gray-400">
                <img src={trustpilotLogo} alt="TrustPilot" className="h-4 brightness-0 invert opacity-60" />
                <span>4.8/5 • +1000 avis</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Section séparateur avec ligne et texte centré */}
      <div className="relative z-20 px-4 mb-8 mt-1">
        <div className="container mx-auto relative">
          <div className="relative h-px">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative backdrop-blur-md rounded-lg px-4 py-2" style={{ backgroundColor: 'rgba(40, 39, 37, 0.8)' }}>
              <p className="text-white text-sm font-medium whitespace-nowrap relative z-10">
                Aperçu : ⦗FRONT-CLOUD⦘~ Football.zip
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Carrousel */}
      <div className="relative z-20 pb-6">
        <BlogHeaderCarousel />
      </div>
    </div>;
};

export default BlogHeader;
