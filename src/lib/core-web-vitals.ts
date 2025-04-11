
/**
 * Utilitaires pour optimiser les Core Web Vitals
 */

// Types pour les métriques Web Vitals
type WebVitalMetric = {
  name: string;
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
};

type WebVitalsReportHandler = (metric: WebVitalMetric) => void;

// Interface pour le reporting des métriques
interface WebVitalsOptions {
  reportTo?: string; // URL du endpoint de reporting
  analyticsId?: string; // ID pour Google Analytics ou autre service
  debug?: boolean; // Afficher les logs en console
}

// Fonction pour observer et mesurer LCP (Largest Contentful Paint)
export const measureLCP = (callback?: (value: number) => void) => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
  
  try {
    const lcpObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const lastEntry = entries[entries.length - 1];
      
      // Valeur LCP en millisecondes
      const lcpValue = lastEntry.startTime;
      
      // Classifier la performance selon les seuils de Core Web Vitals
      // Good: < 2.5s, Needs Improvement: 2.5s-4s, Poor: > 4s
      const lcpRating = lcpValue < 2500 
        ? 'good' 
        : lcpValue < 4000 
          ? 'needs-improvement' 
          : 'poor';
          
      if (callback) {
        callback(lcpValue);
      }
      
      console.info(`LCP: ${lcpValue.toFixed(1)}ms (${lcpRating})`);
    });
    
    lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });
    return lcpObserver;
  } catch (e) {
    console.warn('LCP measurement failed:', e);
    return null;
  }
};

// Fonction pour observer et mesurer FID (First Input Delay)
export const measureFID = (callback?: (value: number) => void) => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
  
  try {
    const fidObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      const firstEntry = entries[0];
      
      // Valeur FID en millisecondes
      const fidValue = firstEntry.processingStart - firstEntry.startTime;
      
      // Classifier la performance selon les seuils de Core Web Vitals
      // Good: < 100ms, Needs Improvement: 100-300ms, Poor: > 300ms
      const fidRating = fidValue < 100 
        ? 'good' 
        : fidValue < 300 
          ? 'needs-improvement' 
          : 'poor';
          
      if (callback) {
        callback(fidValue);
      }
      
      console.info(`FID: ${fidValue.toFixed(1)}ms (${fidRating})`);
    });
    
    fidObserver.observe({ type: 'first-input', buffered: true });
    return fidObserver;
  } catch (e) {
    console.warn('FID measurement failed:', e);
    return null;
  }
};

// Fonction pour observer et mesurer CLS (Cumulative Layout Shift)
export const measureCLS = (callback?: (value: number) => void) => {
  if (typeof window === 'undefined' || !('PerformanceObserver' in window)) return;
  
  let clsValue = 0;
  let clsEntries: PerformanceEntry[] = [];
  
  try {
    const clsObserver = new PerformanceObserver((entryList) => {
      const entries = entryList.getEntries();
      
      entries.forEach(entry => {
        // Ne pas inclure les entrées qui ont 0 de layout shift
        if (!(entry as any).hadRecentInput) {
          const currentEntry = entry as PerformanceEntry;
          clsEntries.push(currentEntry);
          clsValue += (currentEntry as any).value;
        }
      });
      
      // Classifier la performance selon les seuils de Core Web Vitals
      // Good: < 0.1, Needs Improvement: 0.1-0.25, Poor: > 0.25
      const clsRating = clsValue < 0.1 
        ? 'good' 
        : clsValue < 0.25 
          ? 'needs-improvement' 
          : 'poor';
          
      if (callback) {
        callback(clsValue);
      }
      
      console.info(`CLS: ${clsValue.toFixed(3)} (${clsRating})`);
    });
    
    clsObserver.observe({ type: 'layout-shift', buffered: true });
    return clsObserver;
  } catch (e) {
    console.warn('CLS measurement failed:', e);
    return null;
  }
};

// Fonction principale pour mesurer tous les Core Web Vitals
export const measureCoreWebVitals = (options: WebVitalsOptions = {}) => {
  const { debug = true } = options;
  
  if (debug) {
    console.info('Starting Core Web Vitals measurement...');
  }
  
  // Observer les trois métriques principales
  const lcpObserver = measureLCP();
  const fidObserver = measureFID();
  const clsObserver = measureCLS();
  
  // Retourner une fonction pour arrêter l'observation
  return () => {
    lcpObserver?.disconnect();
    fidObserver?.disconnect();
    clsObserver?.disconnect();
    
    if (debug) {
      console.info('Core Web Vitals measurement stopped.');
    }
  };
};

// Function to prefetch critical resources
export const prefetchCriticalResources = () => {
  if (typeof window === 'undefined') return;
  
  // Wait until browser is idle
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(() => {
      // Detect most visited page and prefetch it
      const links = document.querySelectorAll('a');
      const prefetchCandidates = new Map<string, number>();
      
      links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('/') && !href.includes('#')) {
          const count = prefetchCandidates.get(href) || 0;
          prefetchCandidates.set(href, count + 1);
        }
      });
      
      // Get top 3 most linked internal pages
      const sortedCandidates = [...prefetchCandidates.entries()]
        .sort((a, b) => b[1] - a[1])
        .slice(0, 3);
      
      // Prefetch these pages
      sortedCandidates.forEach(([url]) => {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        document.head.appendChild(link);
        console.info(`Prefetching: ${url}`);
      });
    });
  }
};

// Image optimization helper for React with proper sizes attribute and quality
export const generateSrcSet = (
  baseSrc: string,
  widths: number[] = [640, 750, 828, 1080, 1200, 1920, 2048],
  quality: number = 75
) => {
  // Not for external images
  if (baseSrc.startsWith('http') && !baseSrc.includes('logo-foot.com')) {
    return { src: baseSrc, srcSet: '', sizes: '' };
  }
  
  // Add query parameters for resizing if applicable
  const url = new URL(baseSrc, 'https://logo-foot.com');
  
  // Generate srcset
  const srcSet = widths
    .map(width => {
      // Create a new URL to avoid modifying the original
      const imgUrl = new URL(url.toString());
      imgUrl.searchParams.set('w', width.toString());
      imgUrl.searchParams.set('q', quality.toString());
      return `${imgUrl.toString()} ${width}w`;
    })
    .join(', ');
  
  // Generate sizes
  const sizes = '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
  
  return {
    src: baseSrc,
    srcSet,
    sizes
  };
};

// Font loading optimization
export const optimizeFontLoading = () => {
  if (typeof document === 'undefined') return;
  
  // Add font display swap to improve rendering speed
  const style = document.createElement('style');
  style.textContent = `
    @font-face {
      font-family: 'CustomFont';
      font-display: swap;
    }
  `;
  document.head.appendChild(style);
  
  // Preload critical fonts
  const fonts = [
    { href: '/fonts/inter-var.woff2', type: 'font/woff2' }
  ];
  
  fonts.forEach(font => {
    const link = document.createElement('link');
    link.rel = 'preload';
    link.href = font.href;
    link.as = 'font';
    link.type = font.type;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
};
