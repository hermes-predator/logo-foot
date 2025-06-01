
import React from 'react';
import { Star } from 'lucide-react';

const JudgeMeBadge = () => {
  return (
    <div className="flex items-center gap-2 px-3 py-2 bg-white border border-gray-200 rounded-lg shadow-sm">
      <img 
        src="/lovable-uploads/0e31da73-efe5-4f8a-9edc-581fa5d23995.png" 
        alt="Judge.me" 
        className="h-5 w-auto" 
        loading="lazy"
      />
      <div className="flex items-center gap-1">
        <div className="flex">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
        </div>
        <span className="text-xs text-gray-600 font-medium ml-1">4.9/5</span>
      </div>
    </div>
  );
};

export default JudgeMeBadge;
