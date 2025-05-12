
import React from 'react';
import { Folder, Footprints } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2 font-medium">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex items-center bg-white dark:bg-black rounded-lg ring-1 ring-gray-900/5 leading-none p-1.5">
          <div className="flex items-center space-x-1">
            <Folder size={18} className="text-blue-600" /> {/* Taille augmentée de 14 à 18 */}
            <Footprints size={12} className="text-purple-600" /> {/* Taille réduite à 12 pour donner plus d'importance au dossier */}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
          logo-foot
        </span>
        <span className="text-[10px] text-gray-500 -mt-1 tracking-wider font-semibold opacity-80">.com</span>
      </div>
    </div>
  );
};

export default Logo;
