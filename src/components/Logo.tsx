
import React from 'react';
import { Folder } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2 font-medium">
      <div className="relative">
        <div className="relative flex items-center justify-center bg-white dark:bg-black rounded-lg ring-1 ring-gray-900/5 leading-none p-3">
          <Folder size={26} className="text-gray-500" strokeWidth={2.25} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-black">
          Logo-foot
        </span>
        <span className="text-[10px] text-gray-500 -mt-1 tracking-wider font-semibold opacity-80">.com</span>
      </div>
    </div>
  );
};

export default Logo;
