
import React from 'react';
import { Badge } from '@/components/ui/badge';
import { BadgeCheck } from 'lucide-react';

interface GoogleDriveBadgeProps {
  className?: string;
  variant?: 'default' | 'hero';
}

const GoogleDriveBadge = ({ className = '', variant = 'default' }: GoogleDriveBadgeProps) => {
  // Define specific classes based on the variant
  const baseClasses = "inline-flex items-center gap-2 px-4 py-2 border transition-all duration-300";
  
  const variantClasses = {
    default: "bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100/70 hover:shadow-md hover:-translate-y-0.5 hover:border-gray-300/80",
    hero: "bg-gray-50/95 text-gray-600 border-gray-200/90 hover:bg-gray-100/80 hover:shadow-md hover:-translate-y-0.5 hover:border-gray-300/90 transform hover:scale-105"
  };
  
  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  return (
    <Badge 
      className={combinedClasses}
      role="status"
      aria-label="Compatible avec Google Drive"
      data-variant={variant} // Adding a data attribute for easier targeting with CSS if needed
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
