
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';

const TranslateWidget: React.FC = () => {
  const isMobile = useIsMobile();
  const translateElementRef = useRef<HTMLDivElement>(null);
  
  // Fonction pour initialiser le widget Google Translate
  useEffect(() => {
    // Vérifions si le script Google Translate a déjà été ajouté
    const hasScript = document.querySelector('script[src*="translate.google.com"]');
    
    if (!hasScript) {
      // Ajout du script de l'API Google Translate
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
      
      // Définition de la fonction de callback
      window.googleTranslateElementInit = () => {
        if (translateElementRef.current && window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'fr',
              includedLanguages: 'en,es,de,it,pt,ar,zh-CN,ja,ru',
              layout: google.translate.TranslateElementLayout.SIMPLE,
              autoDisplay: false
            },
            translateElementRef.current
          );
        }
      };
    }
    
    // Nettoyage à la suppression du composant
    return () => {
      delete window.googleTranslateElementInit;
    };
  }, []);
  
  return (
    <div className={`translate-widget ${isMobile ? 'ml-2' : 'ml-4'}`}>
      <div ref={translateElementRef} id="google_translate_element" className="h-8 overflow-hidden"></div>
    </div>
  );
};

// Déclaration de la fonction de callback pour l'initialisation du widget
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
  }
}

export default TranslateWidget;
