
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { GoogleDrive } from 'lucide-react';

const GoogleDriveBadge = () => {
  return (
    <Badge className="inline-flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-600 border border-blue-200 hover:bg-blue-100/70 transition-colors duration-200">
      <GoogleDrive className="h-3.5 w-3.5" />
      <span className="font-medium text-xs">Stockable sur votre Google Drive</span>
    </Badge>
  );
};

export default GoogleDriveBadge;
