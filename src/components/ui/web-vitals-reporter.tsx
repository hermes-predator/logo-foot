
import React, { useEffect, useState } from 'react';
import { measureLCP, measureFID, measureCLS } from '@/lib/core-web-vitals';

type VitalsRating = 'good' | 'needs-improvement' | 'poor' | 'measuring';

interface WebVitalsData {
  lcp: {
    value: number;
    rating: VitalsRating;
  };
  fid: {
    value: number;
    rating: VitalsRating;
  };
  cls: {
    value: number;
    rating: VitalsRating;
  };
}

/**
 * Component that measures Core Web Vitals in a development/testing environment
 * This should only be used in development or when explicitly testing metrics
 */
export function WebVitalsReporter({ devMode = false }: { devMode?: boolean }) {
  const [vitals, setVitals] = useState<WebVitalsData>({
    lcp: { value: 0, rating: 'measuring' },
    fid: { value: 0, rating: 'measuring' },
    cls: { value: 0, rating: 'measuring' }
  });

  useEffect(() => {
    if (!devMode) return;

    // Measure LCP
    const lcpObserver = measureLCP((value) => {
      const rating: VitalsRating = 
        value < 2500 
          ? 'good' 
          : value < 4000 
            ? 'needs-improvement' 
            : 'poor';
      
      setVitals(prev => ({
        ...prev,
        lcp: { value, rating }
      }));
    });
    
    // Measure FID
    const fidObserver = measureFID((value) => {
      const rating: VitalsRating = 
        value < 100 
          ? 'good' 
          : value < 300 
            ? 'needs-improvement' 
            : 'poor';
      
      setVitals(prev => ({
        ...prev,
        fid: { value, rating }
      }));
    });
    
    // Measure CLS
    const clsObserver = measureCLS((value) => {
      const rating: VitalsRating = 
        value < 0.1 
          ? 'good' 
          : value < 0.25 
            ? 'needs-improvement' 
            : 'poor';
      
      setVitals(prev => ({
        ...prev,
        cls: { value, rating }
      }));
    });
    
    return () => {
      lcpObserver?.disconnect();
      fidObserver?.disconnect();
      clsObserver?.disconnect();
    };
  }, [devMode]);

  if (!devMode) return null;

  return (
    <div className="fixed bottom-0 right-0 bg-white/90 border border-gray-200 p-3 rounded-tl-lg shadow-lg z-50 text-xs font-mono">
      <h3 className="font-bold mb-1 text-gray-800">Core Web Vitals</h3>
      <div className="space-y-1">
        <div className="flex items-center gap-2">
          <span className="w-8">LCP:</span>
          <span className={`font-medium ${
            vitals.lcp.rating === 'good' 
              ? 'text-green-600' 
              : vitals.lcp.rating === 'needs-improvement' 
                ? 'text-amber-600'
                : vitals.lcp.rating === 'poor'
                  ? 'text-red-600'
                  : 'text-gray-400'
          }`}>
            {vitals.lcp.value.toFixed(1)}ms
          </span>
          <span className="text-[10px] italic">
            {vitals.lcp.rating === 'measuring' ? 'Measuring...' : vitals.lcp.rating}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="w-8">FID:</span>
          <span className={`font-medium ${
            vitals.fid.rating === 'good' 
              ? 'text-green-600' 
              : vitals.fid.rating === 'needs-improvement' 
                ? 'text-amber-600'
                : vitals.fid.rating === 'poor'
                  ? 'text-red-600'
                  : 'text-gray-400'
          }`}>
            {vitals.fid.value.toFixed(1)}ms
          </span>
          <span className="text-[10px] italic">
            {vitals.fid.rating === 'measuring' ? 'Measuring...' : vitals.fid.rating}
          </span>
        </div>
        
        <div className="flex items-center gap-2">
          <span className="w-8">CLS:</span>
          <span className={`font-medium ${
            vitals.cls.rating === 'good' 
              ? 'text-green-600' 
              : vitals.cls.rating === 'needs-improvement' 
                ? 'text-amber-600'
                : vitals.cls.rating === 'poor'
                  ? 'text-red-600'
                  : 'text-gray-400'
          }`}>
            {vitals.cls.value.toFixed(3)}
          </span>
          <span className="text-[10px] italic">
            {vitals.cls.rating === 'measuring' ? 'Measuring...' : vitals.cls.rating}
          </span>
        </div>
      </div>
    </div>
  );
}
