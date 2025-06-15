
import React from 'react';
import { Star } from 'lucide-react';

const JudgeMeBadge = () => {
  return (
    <div className="flex items-center justify-center gap-3 px-4 py-3 mt-2 bg-gray-800/50 border border-gray-600/40 rounded-lg backdrop-blur-sm w-full">
      <img 
        src="/lovable-uploads/0e31da73-efe5-4f8a-9edc-581fa5d23995.png" 
        alt="Judge.me" 
        className="h-6 w-auto opacity-80 brightness-105" 
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
        <span className="text-base text-gray-200 font-medium ml-1 bg-yellow-400/20 px-2 py-1 rounded border border-yellow-400/30">4.9/5</span>
      </div>
    </div>
  );
};

export default JudgeMeBadge;
