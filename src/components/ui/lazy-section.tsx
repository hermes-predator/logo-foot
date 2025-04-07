
import React from 'react';
import { useLazyElement } from '@/hooks/useLazyElement';
import { cn } from '@/lib/utils';
import { Skeleton } from './skeleton';

interface LazySectionProps extends React.HTMLAttributes<HTMLDivElement> {
  placeholder?: React.ReactNode;
  height?: string;
  threshold?: number;
  rootMargin?: string;
  forceLoad?: boolean;
}

export function LazySection({
  children,
  placeholder,
  height = 'auto',
  threshold = 0.1,
  rootMargin = '100px',
  forceLoad = false,
  className,
  ...props
}: LazySectionProps) {
  const { isInView, elementRef } = useLazyElement({
    threshold,
    rootMargin,
    triggerOnce: true
  });

  const shouldRender = isInView || forceLoad;

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={cn("relative", className)}
      style={{ minHeight: shouldRender ? 'auto' : height }}
      {...props}
    >
      {shouldRender ? (
        children
      ) : (
        placeholder || (
          <Skeleton 
            className="w-full h-full absolute inset-0" 
            style={{ height: height !== 'auto' ? height : '200px' }}
          />
        )
      )}
    </div>
  );
}
