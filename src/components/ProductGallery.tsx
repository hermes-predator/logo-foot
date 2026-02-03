import React, { useState } from 'react';
import ClubGallery from './gallery/ClubGallery';
import CompetitionGallery from './gallery/CompetitionGallery';
import { generateGalleryItems } from '@/utils/galleryData';
import { LazySection } from './ui/lazy-section';
import { Helmet } from 'react-helmet-async';
import { Gift, Folder, Eye, MousePointer } from 'lucide-react';

const ProductGallery = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isFlipped, setIsFlipped] = useState(false);
  const { clubItems, competitionItems } = generateGalleryItems();
  
  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Récupérer les 3 premières images pour le SEO
  const bestSellerItems = clubItems.slice(0, 3);
  
  return (
    <section className="w-full py-16 rounded-3xl bg-navy relative overflow-hidden">
      {/* Pattern de fond subtil */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Décorations géométriques */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-blue-500/5 blur-3xl" />
      <div className="absolute bottom-40 right-10 w-48 h-48 rounded-full bg-blue-500/5 blur-3xl" />
      
      <Helmet>
        {bestSellerItems.map((item, index) => (
          <link key={`preload-${index}`} rel="preload" href={item.imageUrl} as="image" />
        ))}
        
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Logos des Clubs de Football - Collection Premium",
            "description": "Plus de 8 600 logo foot des clubs de football en haute qualité",
            "image": bestSellerItems.map(item => item.imageUrl),
            "contentUrl": bestSellerItems.map(item => item.imageUrl),
            "thumbnailUrl": bestSellerItems.map(item => item.imageUrl),
            "about": {
              "@type": "Thing",
              "name": "Logos de Football",
              "description": "Collection des logos de football officiels des grands clubs européens"
            }
          })}
        </script>
      </Helmet>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Header de la section avec flip */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
              <Folder className="w-4 h-4 text-blue-400" />
              <span className="text-sm font-extrabold not-italic text-slate-300">⦗FRONT-CLOUD⦘~ Football.zip</span>
            </div>
            
            {/* Titre cliquable pour flip */}
            <h2 
              onClick={() => setIsFlipped(!isFlipped)}
              className="text-3xl sm:text-4xl font-bold text-white cursor-pointer hover:text-blue-400 transition-colors duration-300"
            >
              {isFlipped ? "Logos des équipes de foot" : "Vous cherchez les logos des Clubs de Foot ?"}
            </h2>
            
            {/* Description avec contenu SEO */}
            <p className={`text-slate-400 transition-all duration-300 ${isFlipped ? 'max-w-2xl mx-auto' : 'whitespace-nowrap'}`}>
              {isFlipped 
                ? "Le fichier regroupe les logos des clubs de foot de l'Angleterre, de l'Allemagne, de l'Espagne et du reste du monde."
                : "Notre fichier contient tous les logos de clubs de football uniformes, nommés et triés par pays"
              }
            </p>
            
            {/* Bouton indicateur */}
            <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 text-slate-300 mt-4">
              <MousePointer className="w-4 h-4 text-blue-400" />
              <span className="hidden sm:inline">Survolez les dossiers pour voir le contenu</span>
              <Eye className="w-4 h-4 text-blue-400" />
            </div>
          </div>

          {/* Section principale des clubs */}
          <div className="relative">
            <LazySection height="400px">
              <ClubGallery items={clubItems} isLoading={isLoading} />
            </LazySection>
          </div>

          {/* Section bonus */}
          <LazySection height="350px" rootMargin="200px">
            <div className="relative text-center">
              {/* Badge bonus */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-500/10 border border-blue-500/30 mb-6">
                <Gift className="w-5 h-5 text-blue-400" />
                <span className="text-sm font-semibold text-blue-400">Bonus offert</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Logos de foot - Autres logos de football
              </h2>
              <p className="text-slate-400 mb-8">
                Compétitions, drapeaux et autres logos inclus dans le fichier.
              </p>
              
              <CompetitionGallery items={competitionItems} isLoading={isLoading} />
            </div>
          </LazySection>
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;
