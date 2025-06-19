
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { BadgeCheck } from 'lucide-react';

interface GoogleDriveBadgeProps {
  className?: string;
  alwaysEnlarged?: boolean; // Prop pour appliquer l'état agrandi par défaut
  cursorHelp?: boolean; // Nouvelle prop pour contrôler le cursor-help
  textOnly?: boolean; // Nouvelle prop pour afficher uniquement le texte
}

const GoogleDriveBadge = ({ 
  className = '', 
  alwaysEnlarged = false,
  cursorHelp = false, // Par défaut, pas de cursor-help
  textOnly = false // Par défaut, affichage complet
}: GoogleDriveBadgeProps) => {
  
  if (textOnly) {
    return (
      <Badge 
        className={`inline-flex items-center gap-2 px-3 py-2 text-gray-600 border border-white/20 rounded-md
          ${cursorHelp ? 'cursor-help' : ''} ${className}`}
        style={{ backgroundColor: 'rgba(55, 53, 51, 0.8)' }}
        role="status"
        aria-label="Stockable sur votre Google Drive"
      >
        <img 
          src="/lovable-uploads/0962b530-529a-4878-85cb-a1720e91e2ad.png" 
          alt="Google Drive" 
          className={`h-7 w-auto object-contain ${cursorHelp ? 'cursor-help' : ''}`}
          loading="lazy"
          width="70"
          height="28"
        />
      </Badge>
    );
  }
  
  
  return (
    <Badge 
      className={`inline-flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 border border-gray-300/80 hover:bg-gray-100/70 transition-colors duration-300
        shadow-[0_4px_16px_rgba(0,0,0,0.06),0_2px_8px_rgba(0,0,0,0.04),0_1px_4px_rgba(0,0,0,0.02)] 
        ${cursorHelp ? 'cursor-help' : ''} ${className}`}
      role="status"
      aria-label="Compatible avec Google Drive"
    >
      <BadgeCheck className={`h-4 w-4 text-green-600 ${cursorHelp ? 'cursor-help' : ''}`} aria-hidden="true" />
      <span className={`font-medium text-sm text-gray-600 ${cursorHelp ? 'cursor-help' : ''}`}>Fichier stockable sur votre</span>
      <img 
        src="/lovable-uploads/0962b530-529a-4878-85cb-a1720e91e2ad.png" 
        alt="Google Drive" 
        className={`h-6 w-auto object-contain ${cursorHelp ? 'cursor-help' : ''}`}
        loading="lazy"
        width="60"
        height="24"
      />
    </Badge>
  );
};

export default GoogleDriveBadge;
