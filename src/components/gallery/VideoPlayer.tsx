
import { useState, useRef } from "react";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "../ui/dialog";
import { VideoPlayerProps } from "@/types/gallery";
import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Folder } from "lucide-react";

const VideoPlayer = ({ videoUrl, title, country }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [error, setError] = useState<string | null>(null);

  const handleError = () => {
    setError('Erreur lors du chargement de la vidéo');
  };

  const getVideoTitle = (country: string) => {
    return `Fichier - ${country}`;
  };

  const getVideoDescription = (country: string) => {
    // Collections spéciales
     if (country === 'Compétitions de football') {
       return "Aperçu du fichier de + 100 logos de compétitions de football";
     }
     if (country === 'Clubs populaires') {
       return "Aperçu du fichier de + 100 couvertures (Wallet.Type) de clubs européens";
     }
     if (country === 'Sélections Nationales') {
       return "Aperçu du fichier de + 50 couvertures (Wallet.Type) de sélections nationales";
     }
     if (country === 'Drapeaux mondiaux') {
       return "Aperçu du fichier de + 270 logos de drapeaux mondiaux";
     }
    
    // Logos par pays avec adjectifs de nationalité
    const logoCountByCountry: { [key: string]: number } = {
      'France': 450,
      'Allemagne': 450,
      'Espagne': 450,
      'Italie': 400,
      'Angleterre': 450,
      'Portugal': 200,
      'Pays-Bas': 300,
      'Belgique': 150,
      'Turquie': 200,
      'Suisse': 150,
      'Écosse': 100,
      'Autriche': 120,
      'Grèce': 150,
      'Ukraine': 100,
      'Russie': 150,
      'Danemark': 150,
      'Norvège': 150,
      'Suède': 150,
      'Pologne': 150,
      'République Tchèque': 150,
      'Croatie': 120,
      'Serbie': 120,
      'Slovaquie': 120,
      'Roumanie': 150,
      'Hongrie': 120,
      'Bulgarie': 120,
      'États-Unis': 300,
      'Argentine': 200,
      'Brésil': 300,
      'Biélorussie': 100,
      'Irlande': 100,
      'Pays de Galles': 100,
      'Finlande': 100,
      'Australie': 80,
      'Arabie Saoudite': 80,
      'Bosnie-Herzégovine': 80,
      'Islande': 80,
      'Israël': 80,
      'Luxembourg': 80,
      'Slovénie': 80,
      'Albanie': 70,
      'Irlande du Nord': 60,
      'Malte': 60,
      'Azerbaïdjan': 50,
      'Moldavie': 50,
      'Arménie': 40,
      'Chypre': 40,
      'Estonie': 40,
      'Géorgie': 40,
      'Kazakhstan': 40,
      'Kosovo': 40,
      'Lettonie': 40,
      'Lituanie': 40,
      'Macédoine du Nord': 40,
      'Monténégro': 40,
      'Default': 20,
      'Iles Féroés': 20,
      'Qatar': 20,
      'Gibraltar': 12
    };

    const countryToAdjective: { [key: string]: string } = {
      'France': 'français',
      'Allemagne': 'allemands',
      'Espagne': 'espagnols',
      'Italie': 'italiens',
      'Angleterre': 'anglais',
      'Portugal': 'portugais',
      'Pays-Bas': 'néerlandais',
      'Belgique': 'belges',
      'Turquie': 'turcs',
      'Suisse': 'suisses',
      'Écosse': 'écossais',
      'Autriche': 'autrichiens',
      'Grèce': 'grecs',
      'Ukraine': 'ukrainiens',
      'Russie': 'russes',
      'Danemark': 'danois',
      'Norvège': 'norvégiens',
      'Suède': 'suédois',
      'Pologne': 'polonais',
      'République Tchèque': 'tchèques',
      'Croatie': 'croates',
      'Serbie': 'serbes',
      'Roumanie': 'roumains',
      'Hongrie': 'hongrois',
      'Bulgarie': 'bulgares',
      'Slovaquie': 'slovaques',
      'Biélorussie': 'biélorusses',
      'Irlande': 'irlandais',
      'Pays de Galles': 'gallois',
      'Finlande': 'finlandais',
      'Bosnie-Herzégovine': 'bosniens',
      'Islande': 'islandais',
      'Israël': 'israéliens',
      'Luxembourg': 'luxembourgeois',
      'Slovénie': 'slovènes',
      'Albanie': 'albanais',
      'Irlande du Nord': 'nord-irlandais',
      'Malte': 'maltais',
      'Azerbaïdjan': 'azerbaïdjanais',
      'Moldavie': 'moldaves',
      'Arménie': 'arméniens',
      'Chypre': 'chypriotes',
      'Estonie': 'estoniens',
      'Géorgie': 'géorgiens',
      'Kazakhstan': 'kazakhs',
      'Kosovo': 'kosovars',
      'Lettonie': 'lettons',
      'Lituanie': 'lituaniens',
      'Macédoine du Nord': 'macédoniens',
      'Monténégro': 'monténégrins',
      'Iles Féroés': 'féroïens',
      'Qatar': 'qataris',
      'Gibraltar': 'gibraltariens',
      'États-Unis': 'américains',
      'Argentine': 'argentins',
      'Brésil': 'brésiliens',
      'Australie': 'australiens',
      'Arabie Saoudite': 'saoudiens'
    };
    
    const logoCount = logoCountByCountry[country] || 240;
    const adjective = countryToAdjective[country] || country.toLowerCase();
    return `Aperçu du fichier de + ${logoCount} logos de clubs ${adjective}`;
  };

  return (
    <DialogContent className="max-w-[540px] w-full overflow-hidden p-0 border-none shadow-2xl bg-gradient-to-br from-gray-100 via-gray-50 to-white">
      <div className="flex flex-col h-full">
        <DialogHeader className="p-1 pl-4 pb-1 bg-gradient-to-b from-gray-100/90 via-gray-50/50 to-transparent space-y-0.5">
          <div className="flex items-start gap-2">
            <Folder className="w-3.5 h-3.5 text-gray-500 mt-1 flex-shrink-0" />
            <div className="flex flex-col space-y-0.5">
              <DialogTitle className="text-gray-800 font-medium text-xs">
                {getVideoTitle(country)}
              </DialogTitle>
              <DialogDescription className="text-gray-600 text-[10px] font-extralight">
                {getVideoDescription(country)}
              </DialogDescription>
            </div>
          </div>
        </DialogHeader>
        
        <div className="w-full aspect-square max-w-[540px] bg-gradient-to-br from-gray-50 to-white flex items-center justify-center relative">
          {error && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-100/90 z-10">
              <p className="text-red-600 text-sm mb-4">{error}</p>
            </div>
          )}
          
          <video
            ref={videoRef}
            src={videoUrl}
            className="w-full h-full object-contain [&]:pointer-events-auto"
            controls
            playsInline
            disablePictureInPicture
            controlsList="nodownload nofullscreen"
            title={title}
            onError={handleError}
            preload="metadata"
            style={{ 
              pointerEvents: 'auto',
              userSelect: 'none',
              outline: 'none'
            }}
          />
        </div>

        <div className="p-4 px-4 bg-gradient-to-t from-gray-100/90 via-gray-50/50 to-transparent">
          <DialogClose asChild>
            <Button 
              variant="outline"
              className={cn(
                "w-full font-medium bg-gray-50/95 border-gray-200/80",
                "hover:bg-white/95 hover:border-gray-300/90",
                "transition-all duration-300 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08)]",
                "text-gray-700 hover:text-gray-900",
                "backdrop-blur-sm"
              )}
            >
              Fermer
            </Button>
          </DialogClose>
        </div>
      </div>
    </DialogContent>
  );
};

export default VideoPlayer;
