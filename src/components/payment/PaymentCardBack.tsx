
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft, FileArchive, Download, Image, File } from 'lucide-react';

interface PaymentCardBackProps {
  onFlipBack: () => void;
}

const PaymentCardBack = ({ onFlipBack }: PaymentCardBackProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [fallbackLoaded, setFallbackLoaded] = useState(false);

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
        <video 
          ref={videoRef}
          className={`w-full h-full object-cover rounded-2xl transition-transform duration-500 ${isHovered ? 'scale-[1.02]' : 'scale-[1]'}`}
          src="/videos/frontcloud-preview.mp4"
          autoPlay
          loop
          muted
          playsInline
          onError={() => setVideoError(true)}
        />
      ) : (
        <div className="w-full h-full flex flex-col p-6 overflow-hidden">
          {/* En-tête amélioré */}
          <div className="relative z-10 mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-blue-700 mb-2 flex items-center">
              <FileArchive className="mr-2 h-5 w-5 text-blue-600" />
              Aperçu du fichier
            </h3>
            <p className="text-gray-600 text-sm sm:text-base">
              Collection complète : <span className="font-semibold">⦗FRONT-CLOUD⦘~ Football.zip</span>
            </p>
          </div>

          {/* Grille améliorée avec icônes et effets */}
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-3 relative z-10">
            {[
              { icon: Image, label: "Logos Internationaux", color: "bg-blue-500" },
              { icon: Image, label: "Logos de Ligue", color: "bg-green-500" },
              { icon: Image, label: "Logos de Clubs", color: "bg-amber-500" },
              { icon: File, label: "Formats PNG", color: "bg-purple-500" },
              { icon: File, label: "Formats SVG", color: "bg-indigo-500" },
              { icon: Download, label: "Haute Qualité", color: "bg-rose-500" }
            ].map((item, index) => (
              <div 
                key={index} 
                className={`w-full aspect-square rounded-lg flex flex-col items-center justify-center transition-all duration-500 bg-white border border-gray-100 shadow-sm ${isHovered ? 'shadow-md hover:shadow-lg hover:scale-105' : ''}`}
              >
                <div className={`w-10 h-10 rounded-full ${item.color}/10 flex items-center justify-center mb-2`}>
                  <item.icon className={`h-5 w-5 ${item.color.replace('bg-', 'text-')}`} />
                </div>
                <span className="text-xs sm:text-sm text-gray-700 text-center px-2">{item.label}</span>
              </div>
            ))}
          </div>

          {/* Caractéristiques du fichier */}
          <div className="mt-6 p-4 bg-blue-50/70 rounded-lg border border-blue-100">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Taille</span>
                <span className="font-medium text-gray-700">63 Mo</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Éléments</span>
                <span className="font-medium text-gray-700">8 774</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500">Format</span>
                <span className="font-medium text-gray-700">ZIP</span>
              </div>
            </div>
          </div>

          {/* Élément décoratif */}
          <div className="absolute top-1/4 right-4 opacity-10 transform rotate-12">
            <Download className="h-24 w-24 text-blue-800/20" />
          </div>
          <div className="absolute bottom-1/3 left-4 opacity-5 transform -rotate-12">
            <FileArchive className="h-32 w-32 text-indigo-900/10" />
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentCardBack;
