
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { BadgeCheck } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const GoogleDriveBadge = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Badge 
            className="inline-flex items-center gap-2 px-3 py-1.5 mt-2 bg-blue-50 text-blue-600 border border-blue-200 shadow-sm hover:bg-blue-100/70 transition-all duration-200 cursor-pointer hover:scale-105 hover:shadow-md"
          >
            <BadgeCheck className="h-3.5 w-3.5" />
            <span className="font-medium text-xs">Stockable sur Google Drive</span>
            <img src="/lovable-uploads/0962b530-529a-4878-85cb-a1720e91e2ad.png" alt="Google Drive" className="h-4" />
          </Badge>
        </TooltipTrigger>
        <TooltipContent className="bg-blue-50 border-blue-200 text-blue-700">
          <p>Stockez vos logos sur Google Drive en un clic</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default GoogleDriveBadge;
