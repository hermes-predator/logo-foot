
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { BadgeCheck, HelpCircle } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface GoogleDriveBadgeProps {
  className?: string;
}

const GoogleDriveBadge = ({ className = '' }: GoogleDriveBadgeProps) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Badge 
          className={`inline-flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100/70 transition-colors duration-200 cursor-help ${className}`}
          role="status"
          aria-label="Compatible avec Google Drive"
        >
          <BadgeCheck className="h-4 w-4 text-green-600" aria-hidden="true" />
          <span className="font-medium text-sm">Stockable sur votre</span>
          <img 
            src="/lovable-uploads/0962b530-529a-4878-85cb-a1720e91e2ad.png" 
            alt="Google Drive" 
            className="h-6" 
            loading="lazy"
            width="60"
            height="24"
          />
          <HelpCircle className="h-4 w-4 ml-1 text-gray-400" aria-hidden="true" />
        </Badge>
      </TooltipTrigger>
      <TooltipContent side="top" className="bg-white border border-gray-200/70 shadow-md p-3 max-w-xs" role="tooltip">
        <p className="text-sm text-gray-700">
          Tous nos fichiers peuvent être facilement stockés sur votre Google Drive. 
          Après téléchargement, importez-les simplement dans votre espace Drive pour y accéder depuis n'importe quel appareil.
        </p>
      </TooltipContent>
    </Tooltip>
  );
};

export default GoogleDriveBadge;
