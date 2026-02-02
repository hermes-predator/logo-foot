
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const GallerySkeleton = () => {
  return (
    <div className="rounded-2xl overflow-hidden bg-slate-800/50 backdrop-blur-sm border border-slate-700/50">
      <Skeleton className="aspect-square w-full bg-slate-700/50" />
      <div className="p-4 space-y-2">
        <Skeleton className="h-4 w-3/4 bg-slate-700/50" />
        <Skeleton className="h-3 w-1/2 bg-slate-700/50" />
      </div>
    </div>
  );
};

export default GallerySkeleton;
