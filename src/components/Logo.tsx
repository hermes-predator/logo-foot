
import React from 'react';
import { Folder } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center gap-2 font-medium">
      <div className="relative">
        <div className="relative flex items-center justify-center bg-white dark:bg-black rounded-lg ring-1 ring-gray-900/5 leading-none p-3">
          <Folder size={26} className="text-purple-600" strokeWidth={2.25} />
        </div>
      </div>
      <span className="text-lg font-bold text-black">
        logo-foot
      </span>
    </div>
  );
};

export default Logo;
