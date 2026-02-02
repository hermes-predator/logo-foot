
import { Dialog, DialogTrigger } from "../ui/dialog";
import { Eye, Maximize2, Plus } from "lucide-react";
import VideoPlayer from "./VideoPlayer";
import { GalleryItemProps } from "@/types/gallery";
import { useLazyLoading } from "@/hooks/useLazyLoading";
import { Skeleton } from "@/components/ui/skeleton";

const GalleryItem = ({ item, onHover, isHovered, isPriority = false }: GalleryItemProps) => {
  const { isInView, imgRef } = useLazyLoading();

  const getVideoTitle = (country: string) => {
    if (item.id === 62) {
      return 'Collection complète des clubs de football populaire - PNG transparent - Wallet.Type';
    }
    if (item.id === 63) {
      return 'Collection complète des sélections nationales - PNG transparent - Wallet.Type';
    }
    if (item.id === 64) {
      return 'Collection complète des drapeaux mondiaux - PNG transparent';
    }
    if (country === 'Sélections Nationales') {
      return 'Animation logos des sélections nationales de football';
    }
    if (country === 'Compétitions de football' || country === 'Compétitions internationales' || country === 'Coupes nationales') {
      return `Animation logos ${country.toLowerCase()}`;
    }
    const championships: { [key: string]: string } = {
      'France': 'Ligue 1',
      'Allemagne': 'Bundesliga',
      'Espagne': 'La Liga',
      'Italie': 'Serie A',
      'Angleterre': 'Premier League',
      'Portugal': 'Liga Portugal',
      'Pays-Bas': 'Eredivisie',
      'Belgique': 'Pro League',
      'Turquie': 'Süper Lig',
      'Suisse': 'Super League',
      'Écosse': 'Scottish Premiership',
      'Autriche': 'Bundesliga',
      'Grèce': 'Super League',
      'Ukraine': 'Premier League',
      'Russie': 'Premier Liga',
      'Danemark': 'Superliga',
      'Norvège': 'Eliteserien',
      'Suède': 'Allsvenskan',
      'Pologne': 'Ekstraklasa',
      'République Tchèque': 'First League',
      'Croatie': 'HNL',
      'Serbie': 'Super Liga',
      'Roumanie': 'Liga I',
      'Hongrie': 'NB I',
      'Bulgarie': 'First League',
      'États-Unis': 'MLS',
      'Argentine': 'Primera División',
      'Australie': 'A-League',
      'Arabie Saoudite': 'Saudi Pro League'
    };
    return championships[country] ? 
      `Animation logo foot ${country} ${championships[country]}` : 
      `Animation logo foot ${country}`;
  };

  const getCollectionData = (item: GalleryItemProps['item']): { count: number; text: string; estimatedValue: number } => {
    if (item.id === 61) return { count: 100, text: "logos de compétitions de football", estimatedValue: 1 };
    if (item.id === 62) return { count: 100, text: "couvertures (Wallet.Type) de clubs européens", estimatedValue: 1 };
    if (item.id === 63) return { count: 100, text: "couvertures (Wallet.Type) de sélections nationales", estimatedValue: 1 };
    if (item.id === 64) return { count: 270, text: "logos de drapeaux mondiaux", estimatedValue: 2.70 };
    
    const logoCountByCountry: { [key: string]: number } = {
      'France': 450, 'Allemagne': 450, 'Espagne': 450, 'Italie': 400, 'Angleterre': 450,
      'Portugal': 200, 'Pays-Bas': 300, 'Belgique': 150, 'Turquie': 200, 'Suisse': 150,
      'Écosse': 100, 'Autriche': 120, 'Grèce': 150, 'Ukraine': 100, 'Russie': 150,
      'Danemark': 150, 'Norvège': 150, 'Suède': 150, 'Pologne': 150, 'République Tchèque': 150,
      'Croatie': 120, 'Serbie': 120, 'Slovaquie': 120, 'Roumanie': 150, 'Hongrie': 120,
      'Bulgarie': 120, 'États-Unis': 300, 'Argentine': 200, 'Brésil': 300, 'Biélorussie': 100,
      'Irlande': 100, 'Pays de Galles': 100, 'Finlande': 100, 'Australie': 80, 'Arabie Saoudite': 80,
      'Bosnie-Herzégovine': 80, 'Islande': 80, 'Israël': 80, 'Luxembourg': 80, 'Slovénie': 80,
      'Albanie': 70, 'Irlande du Nord': 60, 'Malte': 60, 'Azerbaïdjan': 50, 'Moldavie': 50,
      'Arménie': 40, 'Chypre': 40, 'Estonie': 40, 'Géorgie': 40, 'Kazakhstan': 40,
      'Kosovo': 40, 'Lettonie': 40, 'Lituanie': 40, 'Macédoine du Nord': 40, 'Monténégro': 40,
      'Default': 20, 'Iles Féroés': 20, 'Qatar': 20, 'Gibraltar': 12
    };

    const countryToAdjective: { [key: string]: string } = {
      'France': 'français', 'Allemagne': 'allemands', 'Espagne': 'espagnols', 'Italie': 'italiens',
      'Angleterre': 'anglais', 'Portugal': 'portugais', 'Pays-Bas': 'néerlandais', 'Belgique': 'belges',
      'Turquie': 'turcs', 'Suisse': 'suisses', 'Écosse': 'écossais', 'Autriche': 'autrichiens',
      'Grèce': 'grecs', 'Ukraine': 'ukrainiens', 'Russie': 'russes', 'Danemark': 'danois',
      'Norvège': 'norvégiens', 'Suède': 'suédois', 'Pologne': 'polonais', 'République Tchèque': 'tchèques',
      'Croatie': 'croates', 'Serbie': 'serbes', 'Roumanie': 'roumains', 'Hongrie': 'hongrois',
      'Bulgarie': 'bulgares', 'Slovaquie': 'slovaques', 'Biélorussie': 'biélorusses', 'Irlande': 'irlandais',
      'Pays de Galles': 'gallois', 'Finlande': 'finlandais', 'Bosnie-Herzégovine': 'bosniens',
      'Islande': 'islandais', 'Israël': 'israéliens', 'Luxembourg': 'luxembourgeois', 'Slovénie': 'slovènes',
      'Albanie': 'albanais', 'Irlande du Nord': 'nord-irlandais', 'Malte': 'maltais',
      'Azerbaïdjan': 'azerbaïdjanais', 'Moldavie': 'moldaves', 'Arménie': 'arméniens', 'Chypre': 'chypriotes',
      'Estonie': 'estoniens', 'Géorgie': 'géorgiens', 'Kazakhstan': 'kazakhs', 'Kosovo': 'kosovars',
      'Lettonie': 'lettons', 'Lituanie': 'lituaniens', 'Macédoine du Nord': 'macédoniens',
      'Monténégro': 'monténégrins', 'Iles Féroés': 'féroïens', 'Qatar': 'qataris', 'Gibraltar': 'gibraltariens',
      'États-Unis': 'américains', 'Argentine': 'argentins', 'Brésil': 'brésiliens',
      'Australie': 'australiens', 'Arabie Saoudite': 'saoudiens'
    };
    
    const logoCount = logoCountByCountry[item.country] || 240;
    const adjective = countryToAdjective[item.country] || item.country.toLowerCase();
    const estimatedValue = Math.round(logoCount * 0.01 * 100) / 100;
    
    return { count: logoCount, text: `logos de clubs ${adjective}`, estimatedValue };
  };

  const getSeoDescription = (item: GalleryItemProps['item']) => {
    if (item.id === 62) return "Collection complète des clubs de football populaire - PNG transparent - Wallet.Type";
    if (item.id === 63) return "Collection complète des sélections nationales - PNG transparent - Wallet.Type";
    if (item.id === 64) return "Collection complète des drapeaux mondiaux - PNG transparent";
    return item.altText;
  };

  return (
    <div className="group">
      {/* Carte avec style glassmorphism sur fond sombre */}
      <div
        className="relative rounded-2xl overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 transition-all duration-300 hover:border-lime-500/50 hover:shadow-[0_0_30px_rgba(205,255,0,0.15)]"
        style={{
          opacity: 0,
          animation: `fadeIn 0.4s ease-out ${item.id * 0.03}s forwards`
        }}
        onMouseEnter={() => onHover(item.id)}
        onMouseLeave={() => onHover(null)}
      >
        <Dialog>
          <DialogTrigger asChild>
            <button 
              className="w-full text-left"
              aria-label={`Voir ${item.title}`}
            >
              {/* Image/Video container */}
              <div className="relative aspect-square">
                {isHovered ? (
                  <div className="w-full h-full">
                    <video
                      src={item.videoUrl}
                      className="absolute inset-0 w-full h-full object-contain bg-slate-900"
                      autoPlay
                      muted
                      loop
                      playsInline
                      title={getVideoTitle(item.country)}
                    />
                    <div className="absolute top-3 right-3 transform transition-all duration-200 ease-out hover:scale-110">
                      <Maximize2 className="w-5 h-5 text-white drop-shadow-lg opacity-80" />
                    </div>
                  </div>
                ) : (
                  <>
                    {!isInView && !isPriority && (
                      <Skeleton className="w-full h-full absolute inset-0 bg-slate-700" />
                    )}
                    <img
                      ref={(el) => {
                        imgRef.current = el;
                        if (el && isPriority) {
                          el.setAttribute('fetchpriority', 'high');
                        }
                      }}
                      src={(isInView || isPriority) ? item.imageUrl : '/placeholder.svg'}
                      alt={getSeoDescription(item)}
                      className="w-full h-full object-contain transition-opacity duration-300 p-2"
                      loading={isPriority ? "eager" : "lazy"}
                      decoding={isPriority ? "sync" : "async"}
                      itemProp={isPriority ? "image" : undefined}
                      data-caption={item.title}
                      data-description={getSeoDescription(item)}
                    />
                    {/* Icône œil */}
                    <div className="absolute bottom-3 right-3 bg-slate-900/70 backdrop-blur-sm rounded-full p-2 opacity-60 group-hover:opacity-100 group-hover:bg-lime-500/90 transition-all duration-300">
                      <Eye className="w-4 h-4 text-white" />
                    </div>
                  </>
                )}
              </div>

              {/* Contenu texte */}
              <div className="p-4 space-y-2">
                <p className="text-sm font-semibold text-white leading-tight">
                  {item.title}
                </p>
                <p className="text-xs text-slate-400 font-medium flex items-center gap-1">
                  <Plus className="w-3 h-3 text-lime-400 stroke-[3]" />
                  <span className="text-lime-400 font-bold">{getCollectionData(item).count}</span>
                  <span className="ml-0.5 truncate">{getCollectionData(item).text}</span>
                </p>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-red-500/20 text-red-400 text-[10px] font-semibold border border-red-500/30">
                    Valeur : {getCollectionData(item).estimatedValue}€
                  </span>
                </div>
              </div>
            </button>
          </DialogTrigger>
          <VideoPlayer 
            videoUrl={item.videoUrl}
            title={getVideoTitle(item.country)}
            country={item.country}
          />
        </Dialog>
      </div>
    </div>
  );
};

export default GalleryItem;
