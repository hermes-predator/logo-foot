
import React from 'react';
import { Folder } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-3 font-medium">
      <div className="relative">
        <div className="relative flex items-center justify-center bg-white dark:bg-black rounded-lg ring-1 ring-gray-900/5 shadow-sm leading-none p-3">
          <Folder size={26} className="text-purple-600" strokeWidth={2.25} />
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-lg font-bold text-black tracking-normal">
          <span className="font-extrabold">logo</span><span className="font-black">-</span><span className="font-medium">foot</span>
        </span>
        <span className="text-[10px] text-gray-500 tracking-widest font-semibold opacity-80 mt-0.5">.com</span>
      </div>
    </div>
  );
};

export default Logo;
