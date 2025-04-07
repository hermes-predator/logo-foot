
/**
 * Utilitaires pour les mesures de performance
 */

export const measurePerformance = (markName: string, callback: () => void) => {
  if (window.performance && window.performance.mark) {
    // Marquer le début
    window.performance.mark(`${markName}-start`);
    
    // Exécuter le callback
    callback();
    
    // Marquer la fin et mesurer
    window.performance.mark(`${markName}-end`);
    window.performance.measure(
      `${markName}-duration`,
      `${markName}-start`,
      `${markName}-end`
    );
    
    // Récupérer la mesure
    const measures = window.performance.getEntriesByName(`${markName}-duration`);
    if (measures.length > 0) {
      console.log(`${markName} took ${measures[0].duration.toFixed(2)}ms`);
    }
  } else {
    // Fallback si l'API Performance n'est pas disponible
    callback();
  }
};

export const preloadResources = (resources: Array<{ url: string, type: 'image' | 'style' | 'script' | 'font' }>) => {
  if (typeof window === 'undefined') return;
  
  // Utiliser requestIdleCallback pour ne pas bloquer le rendu principal
  const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
  
  idleCallback(() => {
    resources.forEach(resource => {
      const link = document.createElement('link');
      
      switch (resource.type) {
        case 'image':
          link.rel = 'preload';
          link.href = resource.url;
          link.as = 'image';
          break;
        case 'style':
          link.rel = 'preload';
          link.href = resource.url;
          link.as = 'style';
          break;
        case 'script':
          link.rel = 'preload';
          link.href = resource.url;
          link.as = 'script';
          break;
        case 'font':
          link.rel = 'preload';
          link.href = resource.url;
          link.as = 'font';
          link.crossOrigin = 'anonymous';
          break;
      }
      
      document.head.appendChild(link);
    });
  });
};

export const startObservingLCP = () => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
  
  try {
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('LCP:', lastEntry.startTime, lastEntry);
    });
    
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
  } catch (e) {
    console.warn('LCP observation failed:', e);
  }
};
