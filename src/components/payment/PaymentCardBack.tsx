
import React, { useEffect, useRef, useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface PaymentCardBackProps {
  onFlipBack: () => void;
}

const PaymentCardBack = ({ onFlipBack }: PaymentCardBackProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoError, setVideoError] = useState(false);

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
    <div className="absolute inset-0 h-full w-full bg-gradient-to-b from-blue-50/90 to-white rounded-2xl backface-hidden [transform:rotateY(180deg)]">
      {/* Bouton de retour dans le coin supérieur droit */}
      <button 
        onClick={onFlipBack}
        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90 transition-colors duration-300 shadow-sm hover:shadow-md"
        aria-label="Retour à la vue principale"
      >
        <ArrowLeft className="w-5 h-5 text-blue-600" />
      </button>

      {!videoError ? (
        <video 
          ref={videoRef}
          className="w-full h-full object-cover rounded-2xl"
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
          <h3 className="text-xl font-bold text-blue-700 mb-2">Aperçu du Contenu</h3>
          <p className="text-gray-600">Découvrez plus de 500 logos de football en haute qualité dans ce pack.</p>
          <div className="mt-6 grid grid-cols-3 gap-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="w-full aspect-square bg-blue-100/60 rounded-lg flex items-center justify-center">
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
