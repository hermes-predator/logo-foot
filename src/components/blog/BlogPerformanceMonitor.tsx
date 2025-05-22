
import React, { useState } from 'react';
import { WebVitalsReporter } from '@/components/ui/web-vitals-reporter';
import { Button } from '@/components/ui/button';
import { Eye, EyeOff } from 'lucide-react';

export const BlogPerformanceMonitor = () => {
  // Initialement masqué par défaut
  const [showMonitor, setShowMonitor] = useState(false);
  
  return (
    <>
      {/* Bouton flottant pour activer/désactiver le moniteur - uniquement visible en mode développement */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed bottom-4 left-4 z-50">
          <Button
            onClick={() => setShowMonitor(!showMonitor)}
            variant="outline"
            size="sm"
            className="bg-white/80 backdrop-blur-sm shadow-md border border-gray-200"
            title={showMonitor ? "Masquer les métriques de performance" : "Afficher les métriques de performance"}
          >
            {showMonitor ? <EyeOff size={16} /> : <Eye size={16} />}
            <span className="ml-2 text-xs">Vitals</span>
          </Button>
        </div>
      )}
      
      {/* Afficher le moniteur Web Vitals uniquement si activé */}
      {showMonitor && process.env.NODE_ENV === 'development' && <WebVitalsReporter devMode={true} />}
    </>
  );
};

export default BlogPerformanceMonitor;
