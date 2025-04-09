
interface Window {
  googleTranslateElementInit?: () => void;
  google?: {
    translate?: {
      TranslateElement: {
        new (options: {
          pageLanguage: string;
          includedLanguages?: string;
          layout?: any;
          autoDisplay?: boolean;
          gaTrack?: boolean;
          gaId?: string;
        }, element: string): any;
        InlineLayout: {
          HORIZONTAL: number;
          SIMPLE: number;
          VERTICAL: number;
        };
      };
    };
  };
}
