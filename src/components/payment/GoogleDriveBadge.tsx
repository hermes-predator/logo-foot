
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { BadgeCheck } from 'lucide-react';

const GoogleDriveBadge = () => {
  return (
    <div className="mb-2">
      <Badge 
        className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200 shadow-sm"
      >
        <BadgeCheck className="h-3.5 w-3.5" />
        <span className="font-medium">Compatible Google Drive</span>
        <img 
          src="/lovable-uploads/0962b530-529a-4878-85cb-a1720e91e2ad.png" 
          alt="Google Drive" 
          className="h-4 ml-1" 
        />
      </Badge>
    </div>
  );
};

export default GoogleDriveBadge;
