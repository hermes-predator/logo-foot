
import React from 'react';
import { Folder, Football } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2 font-medium">
      <div className="relative">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative flex items-center bg-white dark:bg-black rounded-lg ring-1 ring-gray-900/5 leading-none p-1.5">
          <div className="flex items-center space-x-1">
            <Folder size={14} className="text-blue-600" />
            <Football size={14} className="text-purple-600" />
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
