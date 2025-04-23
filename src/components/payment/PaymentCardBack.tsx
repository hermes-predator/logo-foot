import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface PaymentCardBackProps {
  onFlipBack: () => void;
}

const PaymentCardBack = ({ onFlipBack }: PaymentCardBackProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

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
        <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
          <div className="text-4xl mb-4">🎬</div>
          <h3 className="text-xl font-bold text-blue-700 mb-2">Aperçu du fichier</h3>
          <p className="text-gray-600">Visualisez un aperçu de : "⦗FRONT-CLOUD⦘~ Football.zip"</p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item} 
                className={`w-full aspect-square bg-blue-100/60 rounded-lg flex items-center justify-center transition-all duration-500 ${isHovered ? 'shadow-md' : ''} transform ${isHovered ? 'hover:scale-105' : ''}`}
              >
                <div className="text-blue-500/30 text-2xl">⚽</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentCardBack;
