
import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

const GallerySkeleton = () => {
  return (
    <div className="space-y-3">
      <Skeleton className="aspect-square w-full rounded-lg bg-gray-100/80" />
      <Skeleton className="h-4 w-3/4 mx-auto bg-gray-100/80" />
    </div>
  );
};

export default GallerySkeleton;
