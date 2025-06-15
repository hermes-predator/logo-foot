
import React from 'react';
import { Star } from 'lucide-react';

const JudgeMeBadge = () => {
  return (
    <div className="flex items-center justify-center gap-3 px-4 py-3 mt-2 bg-gray-900/60 border-2 border-gray-700/50 rounded-lg backdrop-blur-md w-full">
      <img 
        src="/lovable-uploads/0e31da73-efe5-4f8a-9edc-581fa5d23995.png" 
        alt="Judge.me" 
        className="h-6 w-auto opacity-90 brightness-110" 
        loading="lazy"
      />
      <div className="flex items-center gap-1">
        <div className="flex">
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
          <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        </div>
        <span className="text-base text-white font-semibold ml-1">4.9/5</span>
      </div>
    </div>
  );
};

export default JudgeMeBadge;
