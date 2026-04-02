
import React from 'react';
import { Folder, ChevronRight, Lock, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import trustpilotLogo from '@/assets/trustpilot-logo.png';

const BlogHeader = () => {
  return (
    <div className="w-full relative overflow-hidden rounded-b-3xl bg-navy">
      <div className="relative z-10 text-white">
        <div className="container mx-auto px-4 pt-10 pb-10">
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 max-w-5xl mx-auto">
            
            {/* Vidéo - côté gauche */}
            <div className="lg:w-[45%] flex-shrink-0">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
                <video 
                  className="w-full aspect-[4/3] object-cover"
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
                  <div className="bg-white rounded-full p-4 shadow-xl">
                    <Lock className="w-6 h-6 text-navy" />
                  </div>
                </div>
                
                {/* Label en bas */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-navy/90 to-transparent p-3">
                  <div className="flex items-center gap-2 text-white">
                    <Folder className="w-4 h-4" />
                    <span className="text-xs font-medium">⦗FRONT-CLOUD⦘~ Football.zip</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenu - côté droit */}
            <div className="flex-1 space-y-6">
              <div className="space-y-3">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-3 py-1 text-xs text-white/80 border border-white/10">
                  <Download className="w-3.5 h-3.5" />
                  <span>+8 800 logos disponibles</span>
                </div>
                <h2 className="text-xl md:text-2xl font-bold text-white leading-tight">
                  Tous les logos des clubs de football, en un fichier.
                </h2>
                <p className="text-sm text-white/50 leading-relaxed">
                  Fichier ZIP parfaitement organisé par pays. Téléchargement instantané après paiement.
                </p>
              </div>
              
              {/* CTA */}
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <Link to="/">
                  <button className="group px-5 py-3 text-sm font-semibold rounded-xl transition-all duration-300 flex items-center gap-2.5 bg-lime-500 hover:bg-lime-600 text-navy shadow-lg hover:shadow-xl hover:shadow-lime-500/25">
                    <span>Découvrir le produit</span>
                    <ChevronRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </Link>
                
                {/* TrustPilot */}
                <div className="flex items-center gap-2 text-xs text-white/50 py-2">
                  <img src={trustpilotLogo} alt="TrustPilot" className="h-3.5 brightness-0 invert opacity-60" />
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-3.5 h-3.5 flex items-center justify-center rounded-sm bg-lime-500">
                        <svg viewBox="0 0 24 24" className="w-2 h-2 text-navy fill-current">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      </div>
                    ))}
                  </div>
                  <span className="text-white/60 font-medium">4.8/5</span>
                </div>
              </div>

              {/* Badges de confiance */}
              <div className="flex flex-wrap items-center gap-4 text-xs text-white/40 pt-2 border-t border-white/10">
                <div className="flex items-center gap-1.5">
                  <img src="/lovable-uploads/158cf2a6-67ff-42e3-8af1-c42f1ac874b8.png" alt="SumUp" className="h-3.5 brightness-0 invert opacity-60" />
                  <span>Paiement Sécurisé</span>
                </div>
                <span className="text-white/20">•</span>
                <div className="flex items-center gap-1.5">
                  <img src="/lovable-uploads/91043604-de74-45c7-bcbf-6621a40a1109.png" alt="Google Drive" className="h-3.5 opacity-80" />
                  <span>Stockable sur Drive</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogHeader;
