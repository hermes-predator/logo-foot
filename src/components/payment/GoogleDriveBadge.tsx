
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { BadgeCheck } from 'lucide-react';

interface GoogleDriveBadgeProps {
  className?: string;
}

const GoogleDriveBadge = ({ className = '' }: GoogleDriveBadgeProps) => {
  return (
    <Badge className={`inline-flex items-center gap-2 px-4 py-2 bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100/70 transition-colors duration-200 ${className}`}>
      <BadgeCheck className="h-4 w-4" />
      <span className="font-medium text-sm">Stockable sur votre</span>
      <img src="/lovable-uploads/0962b530-529a-4878-85cb-a1720e91e2ad.png" alt="Google Drive" className="h-6" />
    </Badge>
  );
};

export default GoogleDriveBadge;
