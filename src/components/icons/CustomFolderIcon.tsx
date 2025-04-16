
import React from 'react';

interface CustomFolderIconProps {
  className?: string;
  strokeWidth?: number;
}

export const CustomFolderIcon: React.FC<CustomFolderIconProps> = ({ 
  className = '', 
  strokeWidth = 1.5 
}) => {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth={strokeWidth}
      className={`w-6 h-6 text-black fill-gray-300 ${className}`}
    >
      <path d="M4.5 9.75l7.5-6 7.5 6v7.5a3 3 0 0 1-3 3h-9a3 3 0 0 1-3-3v-7.5z" />
      <line x1="8" y1="14" x2="16" y2="14" stroke="currentColor" strokeWidth={strokeWidth} />
    </svg>
  );
};
