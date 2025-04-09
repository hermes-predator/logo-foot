
import React, { useEffect } from 'react';

const TranslateWidget = () => {
  useEffect(() => {
    // Fonction pour initialiser le widget Google Translate
    const addGoogleTranslateScript = () => {
      const googleTranslateScript = document.createElement('script');
      googleTranslateScript.type = 'text/javascript';
      googleTranslateScript.async = true;
      googleTranslateScript.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(googleTranslateScript);
      
      // Fonction globale utilisée par le script Google Translate
      window.googleTranslateElementInit = () => {
        if (window.google && window.google.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'fr',
              includedLanguages: 'en,es,de,it,pt,ar,zh-CN,ru', // Langues principales à inclure
              layout: window.innerWidth < 768 ? google.translate.TranslateElement.InlineLayout.SIMPLE : google.translate.TranslateElement.InlineLayout.HORIZONTAL,
              autoDisplay: false,
              gaTrack: true,
              gaId: 'G-67TH5XJZXX',
            },
            'google_translate_element'
          );
        }
      };
    };
    
    // Vérifier si le script est déjà présent
    if (!document.querySelector('script[src*="translate.google.com/translate_a/element.js"]')) {
      addGoogleTranslateScript();
    }
    
    return () => {
      // Nettoyer la fonction globale à la suppression du composant
      window.googleTranslateElementInit = undefined;
    };
  }, []);
  
  return (
    <div 
      id="google_translate_element" 
      className="flex items-center justify-center rounded-md overflow-hidden" 
    />
  );
};

export default TranslateWidget;
