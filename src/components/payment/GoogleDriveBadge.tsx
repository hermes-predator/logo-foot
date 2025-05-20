
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { BadgeCheck } from 'lucide-react';

interface GoogleDriveBadgeProps {
  className?: string;
  alwaysEnlarged?: boolean; // Prop pour appliquer l'état agrandi par défaut
  cursorHelp?: boolean; // Nouvelle prop pour contrôler le cursor-help
}

const GoogleDriveBadge = ({ 
  className = '', 
  alwaysEnlarged = false,
  cursorHelp = false // Par défaut, pas de cursor-help
}: GoogleDriveBadgeProps) => {
  return (
    <Badge 
      className={`inline-flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-700 border border-gray-200/80 
        shadow-[0_2px_5px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_10px_rgba(0,0,100,0.08)] 
        transition-all duration-300 ${cursorHelp ? 'cursor-help' : ''} ${className}`}
      role="status"
      aria-label="Compatible avec Google Drive"
    >
      <BadgeCheck className="h-4 w-4 text-green-600" aria-hidden="true" />
      <span className="font-medium text-sm">Fichier stockable sur votre</span>
      <img 
        src="/lovable-uploads/0962b530-529a-4878-85cb-a1720e91e2ad.png" 
        alt="Google Drive" 
        className="h-6 w-auto object-contain" 
        loading="lazy"
        width="60"
        height="24"
      />
    </Badge>
  );
};

export default GoogleDriveBadge;
