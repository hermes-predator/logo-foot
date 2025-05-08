
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { BadgeCheck } from 'lucide-react';

interface GoogleDriveBadgeProps {
  className?: string;
  alwaysEnlarged?: boolean; // Nouvelle prop pour appliquer l'état de survol par défaut
}

const GoogleDriveBadge = ({ className = '', alwaysEnlarged = false }: GoogleDriveBadgeProps) => {
  return (
    <Badge 
      className={`inline-flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 border border-gray-200 
        ${alwaysEnlarged ? 'scale-105 shadow-md' : 'hover:bg-gray-100/70 hover:shadow-md hover:-translate-y-0.5 hover:scale-105'} 
        transition-all duration-300 hover:border-gray-300/80 ${className}`}
      role="status"
      aria-label="Compatible avec Google Drive"
    >
      <BadgeCheck className="h-4 w-4 text-green-600" aria-hidden="true" />
      <span className="font-medium text-sm">Stockable sur votre</span>
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
