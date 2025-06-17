
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { HardDrive } from 'lucide-react';

interface GoogleDriveBadgeAltProps {
  className?: string;
}

const GoogleDriveBadgeAlt = ({ className = '' }: GoogleDriveBadgeAltProps) => {
  return (
    <Badge 
      className={`inline-flex items-center gap-2 px-3 py-2 bg-white text-gray-700 border border-gray-200 
        shadow-md hover:shadow-lg transition-all duration-300 hover:bg-gray-50 hover:border-gray-300 
        backdrop-blur-sm font-medium text-xs ${className}`}
      role="status"
      aria-label="Compatible avec Google Drive"
    >
      <HardDrive className="h-3 w-3 text-blue-400" aria-hidden="true" />
      <span className="font-medium">Stockage</span>
      <img 
        src="/lovable-uploads/0962b530-529a-4878-85cb-a1720e91e2ad.png" 
        alt="Google Drive" 
        className="h-4 w-auto object-contain opacity-90"
        loading="lazy"
        width="40"
        height="16"
      />
    </Badge>
  );
};

export default GoogleDriveBadgeAlt;
