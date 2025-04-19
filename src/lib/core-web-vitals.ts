
/**
 * Utilitaires pour améliorer les Core Web Vitals
 */

type GenerateSrcSetOptions = {
  src: string;
  widths: number[];
  quality: number;
};

export const generateSrcSet = (
  src: string, 
  widths: number[] = [320, 640, 768, 1024, 1280, 1536], 
  quality: number = 80
): { srcSet: string; sizes: string } => {
  // Ne pas traiter les URLs externes
  if (src.startsWith('http') && !src.includes('logo-foot.com')) {
    return { 
      srcSet: '', 
      sizes: '100vw' 
    };
  }

  let srcSetArray: string[] = [];
  
  // Trier les largeurs par ordre croissant
  const sortedWidths = [...widths].sort((a, b) => a - b);
  
  sortedWidths.forEach(width => {
    // Construire un lien pour chaque taille
    const separator = src.includes('?') ? '&' : '?';
    const imgSrc = `${src}${separator}w=${width}&q=${quality}`;
    srcSetArray.push(`${imgSrc} ${width}w`);
  });

  // Générer le sizes attribute pour le responsive
  const sizes = `
    (max-width: 640px) 100vw,
    (max-width: 768px) 85vw,
    (max-width: 1024px) 75vw,
    (max-width: 1280px) 50vw,
    33vw
  `.trim();

  return {
    srcSet: srcSetArray.join(', '),
    sizes
  };
};

export const measureLCP = (): void => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
  
  try {
    // Observer pour mesurer LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      // Log LCP value
      console.log('LCP:', Math.round(lastEntry.startTime), 'ms');
      
      // Send to analytics (si nécessaire)
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'core_web_vitals',
          metric_name: 'LCP',
          metric_value: Math.round(lastEntry.startTime),
          metric_unit: 'ms'
        });
      }
    });
    
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (e) {
    console.error('Failed to observe LCP:', e);
  }
};

export const measureFID = (): void => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
  
  try {
    // Observer pour mesurer FID (First Input Delay)
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        console.log('FID:', Math.round(entry.processingStart - entry.startTime), 'ms');
        
        // Send to analytics (si nécessaire)
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'core_web_vitals',
            metric_name: 'FID',
            metric_value: Math.round(entry.processingStart - entry.startTime),
            metric_unit: 'ms'
          });
        }
      });
    });
    
    fidObserver.observe({ type: 'first-input', buffered: true });
  } catch (e) {
    console.error('Failed to observe FID:', e);
  }
};

export const measureCLS = (): void => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
  
  try {
    // Observer pour mesurer CLS (Cumulative Layout Shift)
    let clsValue = 0;
    let clsEntries: any[] = [];
    
    const clsObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      
      entries.forEach(entry => {
        // Only count layout shifts without recent user input
        if (!(entry as any).hadRecentInput) {
          clsValue += (entry as any).value;
          clsEntries.push(entry);
        }
      });
      
      console.log('Current CLS:', clsValue);
      
      // Send to analytics (si nécessaire)
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'core_web_vitals',
          metric_name: 'CLS',
          metric_value: clsValue,
          metric_unit: ''
        });
      }
    });
    
    clsObserver.observe({ type: 'layout-shift', buffered: true });
  } catch (e) {
    console.error('Failed to observe CLS:', e);
  }
};
