
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
  isLast?: boolean;
  decorativeIcon?: React.ReactNode;
}

const FolderCard: React.FC<FolderCardProps> = ({
  title,
  icon = <Folder className="h-4 w-4" />,
  colorScheme = 'gray',
  items,
  collections,
  isFirst = false,
  isLast = false,
  decorativeIcon,
}) => {
  // Map color schemes to tailwind classes - Enhanced grayscale for visual distinction
  const colorClasses = {
    gray: {
      bg: 'from-gray-50/95 to-gray-50/70',
      border: 'border-gray-200/80',
      title: 'text-gray-900',
      icon: 'text-gray-800',
      label: 'text-gray-800',
      value: 'text-gray-600',
      decorative: 'text-gray-500',
      itemBg: 'bg-white/90',
      separator: 'border-gray-200/80'
    },
    blue: {
      bg: 'from-gray-100/90 to-gray-50/60',
      border: 'border-gray-300/70',
      title: 'text-gray-900',
      icon: 'text-gray-800',
      label: 'text-gray-800',
      value: 'text-gray-600',
      decorative: 'text-gray-500',
      itemBg: 'bg-white/95',
      separator: 'border-gray-300/70'
    },
    green: {
      bg: 'from-gray-50/90 to-gray-50/60',
      border: 'border-gray-200/70',
      title: 'text-gray-900',
      icon: 'text-gray-800',
      label: 'text-gray-800',
      value: 'text-gray-600',
      decorative: 'text-gray-500',
      itemBg: 'bg-white/90',
      separator: 'border-gray-200/70'
    },
    yellow: {
      bg: 'from-gray-100/85 to-gray-50/50',
      border: 'border-gray-300/60',
      title: 'text-gray-900',
      icon: 'text-gray-800',
      label: 'text-gray-800',
      value: 'text-gray-600',
      decorative: 'text-gray-500',
      itemBg: 'bg-white/95',
      separator: 'border-gray-300/60'
    },
    red: {
      bg: 'from-gray-100/80 to-gray-50/40',
      border: 'border-gray-300/50',
      title: 'text-gray-900',
      icon: 'text-gray-800',
      label: 'text-gray-800',
      value: 'text-gray-600',
      decorative: 'text-gray-500',
      itemBg: 'bg-white/95',
      separator: 'border-gray-300/50'
    },
  };

  const colors = colorClasses[colorScheme];
  
  // Apply rounded corners only to first and last items
  const roundedClass = isFirst ? 'rounded-t-lg' : '';
  const roundedBottomClass = isLast ? 'rounded-b-lg' : '';
  
  // Create separation without space using border-bottom (except for last item)
  const separatorClass = !isLast ? `border-b ${colors.separator}` : '';

  return (
    <div className={`p-3 bg-gradient-to-br ${colors.bg} ${separatorClass} transition-all duration-200 hover:shadow-md ${roundedClass} ${roundedBottomClass} relative`}>
      {/* Decorative icon in top right corner - moved further from edges */}
      {decorativeIcon && (
        <div className={`absolute top-5 right-8 ${colors.decorative} opacity-80`}>
          {React.cloneElement(decorativeIcon as React.ReactElement, { className: 'h-6 w-6' })}
        </div>
      )}
      
      <h3 className={`text-lg font-bold ${colors.title} flex items-center gap-3`}>
        <span className={colors.icon}>{icon}</span>
        {title}
      </h3>
      <div className={`grid grid-cols-2 gap-3 ${colors.itemBg} rounded-lg p-3 shadow-sm mt-2`}>
        {items.map((item, index) => (
          <div key={index}>
            <p className={`font-semibold ${colors.label} text-sm`}>{item.label} :</p>
            <p className={`${colors.value} text-xs`}>{item.value}</p>
          </div>
        ))}
      </div>
      {collections && (
        <div className="mt-1">
          <p className={`font-semibold ${colors.label} mb-1 flex items-center gap-3`}>
            <List className={`h-4 w-4 ${colors.icon}`} />
            Collections incluses :
          </p>
          <p className={`text-xs leading-relaxed ${colors.value} ${colors.itemBg} rounded-lg p-3 shadow-sm`}>
            {collections}
          </p>
        </div>
      )}
    </div>
  );
};

export default FolderCard;
