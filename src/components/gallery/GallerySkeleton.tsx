
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const GallerySkeleton = () => {
  return (
    <div className="space-y-3">
      <Skeleton className="aspect-square w-full rounded-lg" />
      <Skeleton className="h-4 w-3/4 mx-auto" />
    </div>
  );
};

export default GallerySkeleton;
