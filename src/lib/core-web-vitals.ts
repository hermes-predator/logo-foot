
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

// Ajouter les fonctions manquantes qui sont importées dans App.tsx
export const measureCoreWebVitals = (options: { debug?: boolean } = {}): () => void => {
  const { debug = false } = options;
  
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) {
    return () => {}; // Retourne une fonction vide pour la désactivation
  }
  
  // Démarrer les mesures de CWV
  const lcpObserver = measureLCP();
  const fidObserver = measureFID();
  const clsObserver = measureCLS();
  
  if (debug) {
    console.log('Core Web Vitals measurement started');
  }
  
  // Fonction pour arrêter les mesures
  return () => {
    if (lcpObserver && typeof lcpObserver.disconnect === 'function') {
      lcpObserver.disconnect();
    }
    if (fidObserver && typeof fidObserver.disconnect === 'function') {
      fidObserver.disconnect();
    }
    if (clsObserver && typeof clsObserver.disconnect === 'function') {
      clsObserver.disconnect();
    }
    
    if (debug) {
      console.log('Core Web Vitals measurement stopped');
    }
  };
};

export const prefetchCriticalResources = () => {
  if (typeof window === 'undefined') return;
  
  // Liste des ressources critiques à précharger
  const criticalResources = [
    { url: '/lovable-uploads/df7b24e2-8ed1-41e2-a959-f2a9db473237.png', type: 'image' },
    { url: '/public/main.css', type: 'style' },
    { url: '/fonts/main-font.woff2', type: 'font' },
  ];
  
  // Utiliser requestIdleCallback pour précharger quand le navigateur est inactif
  const idleCallback = window.requestIdleCallback || ((cb) => setTimeout(cb, 1));
  
  idleCallback(() => {
    criticalResources.forEach(resource => {
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

export const optimizeFontLoading = () => {
  if (typeof window === 'undefined') return;
  
  // Ajouter font-display: swap pour les polices Google Fonts
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-family: 'CustomFont';
      font-display: swap;
    }
  `;
  document.head.appendChild(style);
  
  // Utiliser le Font Loading API si disponible
  if ('fonts' in document) {
    const font = new FontFace('CustomFont', 'url(/fonts/main-font.woff2)', {
      weight: '400',
      display: 'swap'
    });
    
    font.load().then(() => {
      (document.fonts as any).add(font);
    }).catch(err => {
      console.error('Font loading failed:', err);
    });
  }
};

export const measureLCP = (callback?: (value: number) => void) => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
  
  try {
    // Observer pour mesurer LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      // Log LCP value
      const lcpValue = Math.round(lastEntry.startTime);
      console.log('LCP:', lcpValue, 'ms');
      
      // Appeler le callback avec la valeur de LCP
      if (callback) {
        callback(lcpValue);
      }
      
      // Send to analytics (si nécessaire)
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'core_web_vitals',
          metric_name: 'LCP',
          metric_value: lcpValue,
          metric_unit: 'ms'
        });
      }
    });
    
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    return lcpObserver;
  } catch (e) {
    console.error('Failed to observe LCP:', e);
  }
};

export const measureFID = (callback?: (value: number) => void) => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
  
  try {
    // Observer pour mesurer FID (First Input Delay)
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      entries.forEach(entry => {
        // FID est la différence entre processingStart et startTime
        // Utilisation de type assertion pour accéder à processingStart
        const fidEntry = entry as PerformanceEventTiming;
        const fidValue = Math.round(fidEntry.processingStart - fidEntry.startTime);
        
        console.log('FID:', fidValue, 'ms');
        
        // Appeler le callback avec la valeur de FID
        if (callback) {
          callback(fidValue);
        }
        
        // Send to analytics (si nécessaire)
        if (window.dataLayer) {
          window.dataLayer.push({
            event: 'core_web_vitals',
            metric_name: 'FID',
            metric_value: fidValue,
            metric_unit: 'ms'
          });
        }
      });
    });
    
    fidObserver.observe({ type: 'first-input', buffered: true });
    return fidObserver;
  } catch (e) {
    console.error('Failed to observe FID:', e);
    return undefined;
  }
};

export const measureCLS = (callback?: (value: number) => void) => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
  
  try {
    // Observer pour mesurer CLS (Cumulative Layout Shift)
    let clsValue = 0;
    let clsEntries: any[] = [];
    
    const clsObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      
      entries.forEach(entry => {
        // Only count layout shifts without recent user input
        const layoutShiftEntry = entry as LayoutShift;
        if (!layoutShiftEntry.hadRecentInput) {
          clsValue += layoutShiftEntry.value;
          clsEntries.push(entry);
          
          // Appeler le callback avec la valeur mise à jour de CLS
          if (callback) {
            callback(clsValue);
          }
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
    return clsObserver;
  } catch (e) {
    console.error('Failed to observe CLS:', e);
    return undefined;
  }
};

// Ajouter les interfaces pour les types Web Vitals qui manquent
interface LayoutShift extends PerformanceEntry {
  value: number;
  hadRecentInput: boolean;
}

interface PerformanceEventTiming extends PerformanceEntry {
  processingStart: number;
}

// Déclaration pour window.dataLayer
declare global {
  interface Window {
    dataLayer?: any[];
    requestIdleCallback?: (callback: IdleRequestCallback, options?: IdleRequestOptions) => number;
    cancelIdleCallback?: (handle: number) => void;
  }
}
