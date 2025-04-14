
import React from 'react';
import { FileArchive, Football } from 'lucide-react';

interface LogoFootProps {
  variant?: 'default' | 'small' | 'large';
  withText?: boolean;
  className?: string;
}

const LogoFoot = ({
  variant = 'default',
  withText = true,
  className = ''
}: LogoFootProps) => {
  // Définir les tailles en fonction de la variante
  let iconSize = 24;
  let fontSize = 'text-base';
  let spacing = 'gap-2';

  if (variant === 'small') {
    iconSize = 18;
    fontSize = 'text-sm';
    spacing = 'gap-1.5';
  } else if (variant === 'large') {
    iconSize = 32;
    fontSize = 'text-xl';
    spacing = 'gap-3';
  }

  return (
    <div className={`flex items-center ${spacing} ${className}`}>
      <div className="relative">
        <div className="absolute inset-0 bg-purple-500/20 rounded-full blur-sm"></div>
        <div className="relative bg-gradient-to-br from-purple-600 to-purple-800 text-white p-1.5 rounded-full flex items-center justify-center">
          <Football className={`w-${iconSize/8}rem h-${iconSize/8}rem text-white`} size={iconSize} />
        </div>
      </div>
      
      {withText && (
        <div className={`font-bold ${fontSize} bg-gradient-to-r from-purple-700 to-purple-500 bg-clip-text text-transparent`}>
          logo-foot<span className="text-gray-700">.com</span>
        </div>
      )}
    </div>
  );
};

export default LogoFoot;
