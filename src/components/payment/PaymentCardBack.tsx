
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, Folder, LoaderCircle, FileArchive } from 'lucide-react';
import GoogleDriveBadge from './GoogleDriveBadge';
import { Skeleton } from "@/components/ui/skeleton";

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
        <div className="mt-3">
          <GoogleDriveBadge cursorHelp={true} />
        </div>
      </div>
      
      {/* Bouton de retour dans le coin supérieur droit */}
      <button 
        onClick={onFlipBack}
        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-all duration-300 shadow-sm hover:shadow-md group"
        aria-label="Retour à la vue principale"
      >
        {/* Cercle d'animation au clic */}
        <span className="absolute inset-0 rounded-full pointer-events-none overflow-hidden">
          <span className="absolute inset-0 rounded-full bg-blue-200/0 group-active:bg-blue-200/40 transition-all duration-300 group-active:scale-[2.5] opacity-0 group-active:opacity-100"></span>
        </span>
        <ArrowLeft className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
      </button>

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
          <div className="mt-4 flex items-center justify-center gap-2 bg-blue-50 py-2 px-4 rounded-full shadow-sm border border-blue-100">
            <FileArchive className="h-4 w-4 text-blue-500" />
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
            
            {/* Déplacé les informations sur la taille du fichier ici aussi */}
            <div className="mt-6 flex items-center justify-center gap-2 bg-blue-100/50 py-2 px-5 rounded-full">
              <FileArchive className="h-4 w-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-600">63 Mo • 8 774 éléments</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentCardBack;
