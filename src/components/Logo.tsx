
import React from 'react';
import { Rocket } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2.5 font-medium">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg blur-sm opacity-75 group-hover:opacity-100 transition-all duration-500"></div>
        <div className="relative bg-white dark:bg-black rounded-lg p-2 shadow-xl border border-gray-100 transition-transform group-hover:-translate-y-1">
          <Rocket 
            className="w-5 h-5 text-indigo-600 stroke-[1.5]" 
            fill="currentColor"
            fillOpacity={0.2}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold bg-gradient-to-r from-indigo-600 to-pink-600 bg-clip-text text-transparent">
          logo-foot
        </span>
        <span className="text-[10px] text-gray-500 -mt-1">.com</span>
      </div>
    </div>
  );
};

export default Logo;
