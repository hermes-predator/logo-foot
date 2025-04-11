
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { BadgeCheck } from 'lucide-react';

interface GoogleDriveBadgeProps {
  className?: string;
}

const GoogleDriveBadge = ({ className = '' }: GoogleDriveBadgeProps) => {
  return (
    <Badge className={`inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100/70 transition-colors duration-200 ${className}`}>
      <BadgeCheck className="h-3.5 w-3.5" />
      <span className="font-medium text-xs">Stockable sur votre</span>
      <img src="/lovable-uploads/0962b530-529a-4878-85cb-a1720e91e2ad.png" alt="Google Drive" className="h-5" />
    </Badge>
  );
};

export default GoogleDriveBadge;
