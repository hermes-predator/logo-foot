
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { BadgeCheck } from 'lucide-react';

interface GoogleDriveBadgeProps {
  className?: string;
  alwaysEnlarged?: boolean; // Prop to apply the enlarged state by default
  cursorHelp?: boolean; // Prop to control the cursor-help
}

const GoogleDriveBadge = ({ 
  className = '', 
  alwaysEnlarged = false,
  cursorHelp = false 
}: GoogleDriveBadgeProps) => {
  // Apply enhanced styling if alwaysEnlarged is true
  const enhancedStyles = alwaysEnlarged ? 
    'bg-white shadow-md border-blue-200/70 scale-105' : 
    'bg-gray-50 border-gray-200';

  return (
    <Badge 
      className={`inline-flex items-center gap-2 px-4 py-2 ${enhancedStyles} text-gray-600
        shadow-[0_2px_5px_rgba(0,0,0,0.05)] hover:shadow-[0_4px_10px_rgba(0,0,100,0.08)] 
        transition-all duration-300 hover:bg-white hover:border-blue-200/70 hover:scale-105 ${cursorHelp ? 'cursor-help' : ''} ${className}`}
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
