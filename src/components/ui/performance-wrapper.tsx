
import React, { useEffect, useRef } from 'react';
import { useLazyElement } from '@/hooks/useLazyElement';

interface PerformanceWrapperProps {
  children: React.ReactNode;
  id: string;
  priority?: boolean;
  lazyLoadOptions?: {
    rootMargin?: string;
    threshold?: number;
  };
}

/**
 * Un composant wrapper qui mesure les performances de rendu et implémente
 * la priorisation du chargement
 */
export function PerformanceWrapper({
  children,
  id,
  priority = false,
  lazyLoadOptions
}: PerformanceWrapperProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const { isInView, elementRef } = useLazyElement(lazyLoadOptions);
  const hasRendered = useRef(false);

  useEffect(() => {
    // Marquer le début du rendu
    if ((priority || isInView) && !hasRendered.current) {
      if (window.performance && window.performance.mark) {
        window.performance.mark(`${id}-start`);
      }

      hasRendered.current = true;
      
      // Utiliser requestAnimationFrame pour capturer quand le composant est peint
      requestAnimationFrame(() => {
        // Attendre un cycle de rendu supplémentaire pour s'assurer que tout est visible
        setTimeout(() => {
          if (window.performance && window.performance.mark) {
            window.performance.mark(`${id}-end`);
            window.performance.measure(`${id}-render-time`, `${id}-start`, `${id}-end`);
            
            // Optionnel: envoyer des métriques à un service d'analyse
            /*
            const entries = window.performance.getEntriesByName(`${id}-render-time`);
            if (entries.length > 0) {
              console.log(`${id} render time:`, entries[0].duration);
            }
            */
          }
        }, 0);
      });
    }
  }, [id, isInView, priority]);

  // Si le composant est prioritaire, le rendre immédiatement
  if (priority) {
    return <div ref={wrapperRef} data-component-id={id}>{children}</div>;
  }

  // Sinon, l'envelopper dans le lazy loading
  return (
    <div ref={elementRef as React.RefObject<HTMLDivElement>} data-component-id={id}>
      {isInView && children}
    </div>
  );
}
