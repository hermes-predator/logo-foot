import React from 'react';
import { Folder, List } from 'lucide-react';

interface FolderItemProps {
  label: string;
  value: string;
}

interface FolderCardProps {
  title: string;
  icon?: React.ReactNode;
  colorScheme: 'gray' | 'blue' | 'green' | 'yellow' | 'red';
  items: FolderItemProps[];
  collections?: string;
  isFirst?: boolean;
  decorativeIcon?: React.ReactNode; // New prop for the decorative icon
}

const FolderCard: React.FC<FolderCardProps> = ({
  title,
  icon = <Folder className="h-4 w-4" />,
  colorScheme = 'gray',
  items,
  collections,
  isFirst = false,
  decorativeIcon, // Add the decorative icon prop
}) => {
  // Map color schemes to tailwind classes
  const colorClasses = {
    gray: {
      bg: 'from-gray-100/90 to-gray-100/50',
      border: 'border-gray-200/80',
      title: 'text-gray-900',
      icon: 'text-gray-600',
      label: 'text-gray-900',
      value: 'text-gray-700',
      decorative: 'text-gray-400/80',
    },
    blue: {
      bg: 'from-blue-50/80 to-blue-50/30',
      border: 'border-blue-100/80',
      title: 'text-blue-900',
      icon: 'text-blue-600',
      label: 'text-blue-900',
      value: 'text-blue-700',
      decorative: 'text-blue-400/80',
    },
    green: {
      bg: 'from-green-50/80 to-green-50/30',
      border: 'border-green-100/80',
      title: 'text-green-900',
      icon: 'text-green-600',
      label: 'text-green-900',
      value: 'text-green-700',
      decorative: 'text-green-400/80',
    },
    yellow: {
      bg: 'from-yellow-50/80 to-yellow-50/30',
      border: 'border-yellow-100/80',
      title: 'text-yellow-900',
      icon: 'text-yellow-600',
      label: 'text-yellow-900',
      value: 'text-yellow-700',
      decorative: 'text-yellow-400/80',
    },
    red: {
      bg: 'from-red-50/80 to-red-50/30',
      border: 'border-red-100/80',
      title: 'text-red-900',
      icon: 'text-red-600',
      label: 'text-red-900',
      value: 'text-red-700',
      decorative: 'text-red-400/80',
    },
  };

  const colors = colorClasses[colorScheme];
  
  // Add rounded-t-lg class only if it's the first card
  const roundedClass = isFirst ? 'rounded-t-lg' : '';

  return (
    <div className={`space-y-3 p-4 bg-gradient-to-br ${colors.bg} border ${colors.border} transition-all duration-200 hover:shadow-md ${roundedClass} relative`}>
      {/* Decorative icon in top right corner - updated to be smaller */}
      {decorativeIcon && (
        <div className={`absolute top-2 right-2 ${colors.decorative} opacity-80`}>
          {React.cloneElement(decorativeIcon as React.ReactElement, { className: 'h-6 w-6' })}
        </div>
      )}
      
      <h3 className={`text-lg font-bold ${colors.title} flex items-center gap-3`}>
        <span className={colors.icon}>{icon}</span>
        {title}
      </h3>
      <div className="grid grid-cols-2 gap-3 bg-white/50 rounded-lg p-3">
        {items.map((item, index) => (
          <div key={index}>
            <p className={`font-semibold ${colors.label} text-sm`}>{item.label} :</p>
            <p className={`${colors.value} text-xs`}>{item.value}</p>
          </div>
        ))}
      </div>
      {collections && (
        <div className="mt-3">
          <p className={`font-semibold ${colors.label} mb-1.5 flex items-center gap-3`}>
            <List className={`h-4 w-4 ${colors.icon}`} />
            Collections incluses :
          </p>
          <p className={`text-xs leading-relaxed ${colors.value} bg-white/50 rounded-lg p-3`}>
            {collections}
          </p>
        </div>
      )}
    </div>
  );
};

export default FolderCard;
