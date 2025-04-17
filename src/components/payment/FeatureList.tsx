
const Feature = ({ icon: Icon, text, description, className, iconColor }: FeatureProps) => {
  return (
    <div className="flex items-center gap-4 text-gray-800 p-2 rounded-lg">
      <div className={`p-2 rounded-full ${className || 'bg-blue-100'}`}>
        <Icon className={`h-5 w-5 ${iconColor || 'text-blue-600'}`} />
      </div>
      <div>
        <span className="text-[15px] font-medium">{text}</span>
        {description && (
          <p className="text-xs text-gray-500 mt-0.5 leading-tight max-w-[280px]">{description}</p>
        )}
      </div>
    </div>
  );
};
