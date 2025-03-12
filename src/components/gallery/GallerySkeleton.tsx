
import React from 'react';

const GallerySkeleton = () => {
  return (
    <div 
      className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 animate-pulse"
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-16 h-16 rounded-full bg-gray-200" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <div className="h-4 bg-gray-200 rounded w-3/4 mx-auto" />
      </div>
    </div>
  );
};

export default GallerySkeleton;
