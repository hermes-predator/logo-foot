
import React from 'react';
import { Folder } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2 font-medium group">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
        <div className="relative flex items-center bg-white dark:bg-black rounded-lg ring-1 ring-gray-900/5 leading-none p-1.5 group-hover:scale-105 transition-transform duration-300">
          <Folder 
            className="w-5 h-5 text-purple-600" 
            strokeWidth={2}
          />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent group-hover:from-purple-500 group-hover:to-blue-500 transition-colors duration-300">
          logo-foot
        </span>
        <span className="text-[10px] -mt-1 tracking-[0.2em] font-medium text-gray-500/70 pl-0.5 uppercase">
          .com
        </span>
      </div>
    </div>
  );
};

export default Logo;
