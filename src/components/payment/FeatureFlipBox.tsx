import React from 'react';
import FlipBox from '../ui/FlipBox';

interface FeatureFlipBoxProps {
  icon: React.ElementType;
  text: string;
  description?: string;
  seoContent?: string;
  className?: string;
  iconColor?: string;
}

const FeatureFlipBox: React.FC<FeatureFlipBoxProps> = ({ 
  icon: Icon, 
  text, 
  description, 
  seoContent,
  className, 
  iconColor 
}) => {
  const frontContent = (
    <div className="flex items-center gap-4 h-full">
      <div className={`relative z-10 p-2.5 rounded-full ${className || 'bg-blue-100'}`}>
        <Icon className={`h-5 w-5 ${iconColor || 'text-blue-600'}`} />
      </div>
      <div className="relative z-10 flex-1">
        <span className="text-[15px] font-semibold text-gray-800">{text}</span>
        {description && (
          <p className="text-xs text-gray-500 mt-0.5 leading-tight">{description}</p>
        )}
      </div>
    </div>
  );

  const backContent = (
    <div className="h-full flex flex-col">
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-2 rounded-full ${className || 'bg-blue-100'}`}>
          <Icon className={`h-4 w-4 ${iconColor || 'text-blue-600'}`} />
        </div>
        <h4 className="text-sm font-semibold text-gray-800">{text}</h4>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        <p className="text-xs text-gray-600 leading-relaxed">
          {seoContent || description}
        </p>
      </div>
      
      <div className="mt-2 pt-2 border-t border-gray-100">
        <span className="text-xs text-gray-400 italic">Cliquez pour revenir</span>
      </div>
    </div>
  );

  return (
    <div className="h-20">
      <FlipBox 
        frontContent={frontContent}
        backContent={backContent}
        className="h-full"
      />
    </div>
  );
};

export default FeatureFlipBox;