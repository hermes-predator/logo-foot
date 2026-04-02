
import React from 'react';
import { Folder, ChevronRight, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import trustpilotLogo from '@/assets/trustpilot-logo.png';

const BlogHeader = () => {
  return (
    <div className="w-full relative overflow-hidden rounded-b-3xl bg-navy">
      {/* Contenu principal */}
      <div className="relative z-10 text-white">
        <div className="container mx-auto px-4 pt-10 pb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Contenu principal à gauche */}
            <div className="flex-1 space-y-5">
              <div className="space-y-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white max-w-xl leading-tight">
                  Téléchargez <span className="text-lime-400">+8 800 logos</span> de clubs de football
                </h2>
                <p className="text-sm md:text-base text-white/60">
                  Fichier ZIP complet parfaitement organisé par pays
                </p>
                
                {/* Badges de confiance */}
                <div className="flex flex-wrap items-center gap-4 text-xs text-white/60 pt-2">
                  <div className="flex items-center gap-2">
                    <img src="/lovable-uploads/158cf2a6-67ff-42e3-8af1-c42f1ac874b8.png" alt="SumUp" className="h-4 brightness-0 invert opacity-70" />
                    <span>Paiement Sécurisé</span>
                  </div>
                  <span className="text-white/30">•</span>
                  <div className="flex items-center gap-2">
                    <img src="/lovable-uploads/91043604-de74-45c7-bcbf-6621a40a1109.png" alt="Google Drive" className="h-4 opacity-90" />
                    <span>Stockable sur Drive</span>
                  </div>
                  <span className="text-white/30">•</span>
                  <div className="flex items-center gap-1.5">
                    <img src={trustpilotLogo} alt="TrustPilot" className="h-4 brightness-0 invert opacity-70" />
                    <span className="font-medium text-white/80">4.8/5</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Section droite - CTA */}
            <div className="lg:flex-shrink-0 flex flex-col items-center gap-4">
              <Link to="/" className="block">
                <button className="group px-6 py-4 text-sm font-semibold rounded-xl transition-all duration-300 flex items-center gap-3 bg-lime-500 hover:bg-lime-600 text-navy shadow-lg hover:shadow-xl hover:shadow-lime-500/25">
                  <Folder className="w-5 h-5" />
                  <span>Découvrir le produit</span>
                  <ChevronRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </Link>
              
              {/* TrustPilot avec étoiles */}
              <div className="flex items-center gap-2 text-xs text-white/50">
                <img src={trustpilotLogo} alt="TrustPilot" className="h-4 brightness-0 invert opacity-60" />
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 flex items-center justify-center rounded bg-lime-500">
                      <svg viewBox="0 0 24 24" className="w-2.5 h-2.5 text-navy fill-current">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    </div>
                  ))}
                </div>
                <span className="text-white/70 font-medium">1034 avis vérifiés</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Vidéo preview */}
      <div className="relative z-20 px-4 pb-8">
        <div className="container mx-auto max-w-3xl">
          <div className="relative bg-card rounded-2xl overflow-hidden border border-white/10 shadow-xl group">
            <video 
              className="w-full aspect-[6/5] object-cover"
              autoPlay 
              muted 
              loop 
              playsInline
              preload="auto"
            >
              <source src="https://www.logo-foot.com/videos/preview-zip.mp4" type="video/mp4" />
            </video>
            
            {/* Overlay cadenas */}
            <div className="absolute inset-0 bg-navy/30 backdrop-blur-[2px] flex items-center justify-center transition-all duration-300 opacity-100 group-hover:opacity-0 group-hover:pointer-events-none">
              <div className="bg-white rounded-full p-5 shadow-xl">
                <Lock className="w-8 h-8 text-navy" />
              </div>
            </div>
            
            {/* Label en bas */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/90 to-transparent p-4">
              <div className="flex items-center gap-2 text-white">
                <Folder className="w-5 h-5" />
                <span className="text-sm font-medium">⦗FRONT-CLOUD⦘~ Football.zip</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
