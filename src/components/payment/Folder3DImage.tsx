import React from 'react';
import footballFolder3D from '@/assets/football-folder-3d.png';

interface Folder3DImageProps {
  isHovered?: boolean;
}

const Folder3DImage = ({ isHovered = false }: Folder3DImageProps) => {
  return (
    <div className="relative flex items-center justify-center my-4 sm:my-6">
      {/* Halo glow effect - multiple layers for depth */}
      <div 
        className={`absolute w-32 h-32 sm:w-40 sm:h-40 rounded-full transition-all duration-700 ease-out ${
          isHovered ? 'opacity-60 scale-125' : 'opacity-30 scale-100'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(59, 130, 246, 0.1) 50%, transparent 70%)',
          filter: 'blur(20px)',
        }}
      />
      <div 
        className={`absolute w-24 h-24 sm:w-32 sm:h-32 rounded-full transition-all duration-500 ease-out ${
          isHovered ? 'opacity-70 scale-110' : 'opacity-40 scale-100'
        }`}
        style={{
          background: 'radial-gradient(circle, rgba(147, 197, 253, 0.5) 0%, transparent 60%)',
          filter: 'blur(15px)',
        }}
      />
      
      {/* Floating animation container */}
      <div 
        className={`relative transition-all duration-700 ease-out ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
        style={{
          animation: 'float3D 4s ease-in-out infinite',
          transform: isHovered ? 'perspective(1000px) rotateY(-8deg) rotateX(5deg) scale(1.1)' : 'perspective(1000px) rotateY(0deg) rotateX(0deg) scale(1)',
        }}
      >
        {/* 3D Shadow effect */}
        <div 
          className={`absolute inset-0 transition-all duration-500 ${
            isHovered ? 'opacity-40 translate-y-4 scale-95' : 'opacity-20 translate-y-2 scale-98'
          }`}
          style={{
            background: 'radial-gradient(ellipse 80% 40% at 50% 100%, rgba(0, 0, 0, 0.5) 0%, transparent 60%)',
            filter: 'blur(12px)',
            transform: 'translateY(60%)',
          }}
        />
        
        {/* Main image with glow */}
        <img 
          src={footballFolder3D} 
          alt="Football Folder 3D" 
          className={`relative z-10 w-28 h-28 sm:w-36 sm:h-36 object-contain drop-shadow-2xl transition-all duration-500 ${
            isHovered ? 'brightness-110' : 'brightness-100'
          }`}
          style={{
            filter: isHovered 
              ? 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.4)) drop-shadow(0 10px 30px rgba(0, 0, 0, 0.3))' 
              : 'drop-shadow(0 0 10px rgba(59, 130, 246, 0.2)) drop-shadow(0 8px 20px rgba(0, 0, 0, 0.2))',
          }}
        />
      </div>
      
      {/* Keyframes for floating animation */}
      <style>{`
        @keyframes float3D {
          0%, 100% {
            transform: translateY(0px) perspective(1000px) rotateY(0deg);
          }
          25% {
            transform: translateY(-6px) perspective(1000px) rotateY(2deg);
          }
          50% {
            transform: translateY(-10px) perspective(1000px) rotateY(0deg);
          }
          75% {
            transform: translateY(-6px) perspective(1000px) rotateY(-2deg);
          }
        }
      `}</style>
    </div>
  );
};

export default Folder3DImage;
