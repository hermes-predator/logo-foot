
import React from 'react';
import { Folder } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2 font-medium">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-lg blur opacity-25 group-hover:opacity-60 transition duration-300 group-hover:duration-200"></div>
        <div className="relative flex items-center justify-center bg-white dark:bg-black rounded-lg ring-1 ring-gray-900/5 leading-none p-2.5 transition-all duration-300 group-hover:shadow-lg">
          <Folder size={22} className="text-blue-600 group-hover:text-blue-500 transition-colors duration-300" strokeWidth={2.25} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600">
          logo-foot
        </span>
        <span className="text-[10px] text-gray-500 -mt-1 tracking-wider font-semibold opacity-80">.com</span>
      </div>
    </div>
  );
};

export default Logo;
