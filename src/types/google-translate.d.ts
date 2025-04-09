
// Déclaration des types pour l'API Google Translate
interface GoogleTranslateElementInit {
  pageLanguage: string;
  includedLanguages?: string;
  layout?: google.translate.TranslateElementLayout;
  autoDisplay?: boolean;
  gaTrack?: boolean;
  gaId?: string;
  multilanguagePage?: boolean;
}

declare namespace google {
  namespace translate {
    function TranslateElement(options: GoogleTranslateElementInit, element: string | HTMLElement): void;
    
    enum TranslateElementLayout {
      HORIZONTAL = 0,
      VERTICAL = 1,
      SIMPLE = 2
    }
    
    class TranslateElement {
      constructor(options: GoogleTranslateElementInit, element: string | HTMLElement);
    }
    
    class InlineTranslateElement {
      constructor(options: GoogleTranslateElementInit, element: string | HTMLElement);
    }
  }
}

// Déclaration globale pour que l'objet google soit reconnu
declare global {
  interface Window {
    google: typeof google;
  }
  var google: typeof google;
}
