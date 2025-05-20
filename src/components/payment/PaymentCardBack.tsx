
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Folder, LoaderCircle, FileZip } from 'lucide-react';
import GoogleDriveBadge from './GoogleDriveBadge';
import { Skeleton } from "@/components/ui/skeleton";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
import PackDescription from '../sections/PackDescription';

interface PaymentCardBackProps {
  onFlipBack: () => void;
}

const PaymentCardBack = ({ onFlipBack }: PaymentCardBackProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Make sure video plays when the component mounts
    if (videoRef.current) {
      videoRef.current.play().catch(err => {
        console.log('Video autoplay failed:', err);
        setVideoError(true);
      });
    }
  }, []);

  return (
    <div 
      className="absolute inset-0 h-full w-full bg-gradient-to-b from-blue-50/90 to-white rounded-2xl backface-hidden [transform:rotateY(180deg)]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Effet de lueur subtil sur le bord supérieur */}
      <div className="absolute top-0 left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"></div>
      
      {/* Titre du fichier en grand dans le coin supérieur gauche */}
      <div className="absolute top-6 left-6 z-30">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-black">⦗FRONT-CLOUD⦘~ Football.zip</h2>
        <p className="text-sm sm:text-base text-gray-700 mt-1">La plus grande collection de logos de football en haute qualité</p>
        <div className="mt-3 flex items-center justify-start">
          <TooltipProvider delayDuration={100}>
            <Tooltip>
              <TooltipTrigger asChild>
                <div>
                  <GoogleDriveBadge cursorHelp={true} alwaysEnlarged={true} />
                </div>
              </TooltipTrigger>
              <TooltipContent 
                className="bg-gradient-to-b from-gray-50 to-white border border-blue-100/40 p-3 max-w-[350px] rounded-lg shadow-lg"
                side="bottom" 
                align="center"
                sideOffset={5}
              >
                <p className="text-gray-700 font-bold text-sm mb-1">Utilisation immédiate</p>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Ce fichier est parfaitement organisé et immédiatement utilisable. Vous pouvez le stocker directement sur votre Google Drive, votre ordinateur, votre disque dur et l'utiliser tel quel, sans aucune autre modification.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
      </div>
      
      {/* Boutons dans le coin supérieur droit */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        {/* Bouton descriptif du ZIP */}
        <Dialog>
          <DialogTrigger asChild>
            <button 
              className="p-2 rounded-full bg-purple-50 text-purple-600 hover:bg-purple-100 transition-all duration-300 shadow-sm hover:shadow-md group flex items-center gap-2 px-4"
              aria-label="Voir le descriptif du contenu"
            >
              <FileZip className="w-4 h-4 text-purple-600" />
              <span className="text-sm font-semibold whitespace-nowrap">Descriptif du ZIP</span>
              {/* Cercle d'animation au clic */}
              <span className="absolute inset-0 rounded-full pointer-events-none overflow-hidden">
                <span className="absolute inset-0 rounded-full bg-purple-200/0 group-active:bg-purple-200/40 transition-all duration-300 group-active:scale-[2.5] opacity-0 group-active:opacity-100"></span>
              </span>
            </button>
          </DialogTrigger>
          <DialogContent className="w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <PackDescription />
          </DialogContent>
        </Dialog>

        {/* Bouton de retour */}
        <button 
          onClick={onFlipBack}
          className="p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 shadow-sm hover:shadow-md group"
          aria-label="Retour à la vue principale"
        >
          {/* Cercle d'animation au clic */}
          <span className="absolute inset-0 rounded-full pointer-events-none overflow-hidden">
            <span className="absolute inset-0 rounded-full bg-blue-200/0 group-active:bg-blue-200/40 transition-all duration-300 group-active:scale-[2.5] opacity-0 group-active:opacity-100"></span>
          </span>
          <ArrowLeft className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
        </button>
      </div>

      {!videoError ? (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 pt-28">
          <div className="aspect-square w-full max-w-[560px] relative rounded-lg overflow-hidden border-4 border-blue-200/50">
            {/* État de préchargement */}
            {isLoading && (
              <div className="absolute inset-0 bg-blue-50 flex flex-col items-center justify-center z-20">
                <div className="flex flex-col items-center">
                  <LoaderCircle className="h-12 w-12 text-blue-500 animate-spin mb-4" />
                  <div className="space-y-2 w-3/4 max-w-[300px]">
                    <Skeleton className="h-3 w-full bg-blue-200/60" />
                    <Skeleton className="h-3 w-11/12 bg-blue-200/60" />
                    <Skeleton className="h-3 w-4/5 bg-blue-200/60" />
                  </div>
                  <p className="text-sm text-blue-600 mt-3 font-medium">Chargement de la prévisualisation...</p>
                </div>
              </div>
            )}
            
            <video 
              ref={videoRef}
              className="w-full h-full object-cover transition-transform duration-500"
              src="/videos/frontcloud-preview.mp4"
              autoPlay
              loop
              muted
              playsInline
              onError={() => setVideoError(true)}
              onLoadedData={() => setIsLoading(false)}
              onCanPlay={() => setIsLoading(false)}
              style={{ opacity: isLoading ? 0 : 1 }}
            />
          </div>

          {/* Information sur la taille sous la vidéo */}
          <div className="mt-4 py-2 px-6 rounded-full shadow-sm bg-gradient-to-r from-blue-50 via-blue-50/90 to-blue-50 border border-blue-100/80">
            <span className="text-sm font-medium text-blue-700">63 Mo • 8 774 éléments</span>
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-col items-center justify-center p-4 pt-28">
          <div className="aspect-square w-full max-w-[560px] bg-blue-50 rounded-lg border-4 border-blue-200/50 flex flex-col items-center justify-center p-5 relative overflow-hidden">
            <div className="absolute inset-0 border-8 border-dashed border-blue-100 m-4 rounded-lg pointer-events-none"></div>
            
            <Folder className="h-16 w-16 text-blue-400/70 mb-4" />
            
            <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 text-center">
              Aperçu du fichier
            </h3>
            
            <p className="text-gray-600 text-sm sm:text-base text-center">
              <span className="font-semibold">⦗FRONT-CLOUD⦘~ Football.zip</span>
            </p>
            
            {/* Informations sur la taille du fichier modifiées */}
            <div className="mt-6 py-2 px-6 rounded-full bg-gradient-to-r from-blue-100/40 via-blue-100/60 to-blue-100/40">
              <span className="text-sm font-medium text-blue-600">63 Mo • 8 774 éléments</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentCardBack;
