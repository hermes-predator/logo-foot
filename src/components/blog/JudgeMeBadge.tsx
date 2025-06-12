
import React from 'react';
import { Star } from 'lucide-react';

const JudgeMeBadge = () => {
  return (
    <div className="flex items-center justify-center gap-2 px-3 py-2 mt-2 bg-white/50 rounded-lg border border-orange-100/50 backdrop-blur-sm w-full">
      <img 
        src="/lovable-uploads/0e31da73-efe5-4f8a-9edc-581fa5d23995.png" 
        alt="Judge.me" 
        className="h-5 w-auto opacity-90" 
        loading="lazy"
      />
      <div className="flex items-center gap-1">
        <div className="flex">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
        </div>
        <span className="text-sm text-orange-700 font-semibold ml-1">4.9/5</span>
      </div>
    </div>
  );
};

export default JudgeMeBadge;
