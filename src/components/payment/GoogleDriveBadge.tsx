
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { BadgeCheck } from 'lucide-react';

const GoogleDriveBadge = () => {
  return (
    <Badge 
      className="inline-flex items-center gap-2 px-4 py-2 mt-4 bg-blue-50 text-blue-600 border border-blue-200 shadow-sm"
    >
      <BadgeCheck className="h-4 w-4" />
      <span className="font-medium text-sm">Stockable sur Google Drive</span>
      <img 
        src="/lovable-uploads/0962b530-529a-4878-85cb-a1720e91e2ad.png" 
        alt="Google Drive" 
        className="h-5 ml-1" 
      />
    </Badge>
  );
};

export default GoogleDriveBadge;
