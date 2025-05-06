
/// <reference types="vite/client" />

// Étendre l'interface Window pour inclure les fonctions de performance et Google Analytics
interface Window {
  requestIdleCallback?: (
    callback: (deadline: {
      didTimeout: boolean;
      timeRemaining: () => number;
    }) => void,
    opts?: { timeout: number }
  ) => number;
  cancelIdleCallback?: (id: number) => void;
  
  // Google Analytics
  gtag?: (
    command: string,
    action: string | Date,
    params?: {
      [key: string]: any;
      transaction_id?: string;
      value?: number;
      currency?: string;
      items?: Array<{
        item_name?: string;
        [key: string]: any;
      }>;
    }
  ) => void;
}

// Étendre PerformanceEntry pour inclure les propriétés spécifiques du CLS
interface PerformanceEntry {
  hadRecentInput?: boolean;
  value?: number;
}

// Définir l'environnement métadonnées pour Vite
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
  readonly VITE_API_URL: string;
  readonly DEV: boolean;
  readonly PROD: boolean;
  readonly MODE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
