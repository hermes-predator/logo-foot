
import React from 'react';

const FolderIcon = ({ className = "", size = 24 }: { className?: string; size?: number }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M3 7.8C3 6.80589 3.80589 6 4.8 6H9.2C9.68427 6 10.1 6.41573 10.1 6.9V7.8C10.1 8.28427 10.5157 8.7 11 8.7H19.2C20.1941 8.7 21 9.50589 21 10.5V17.2C21 18.1941 20.1941 19 19.2 19H4.8C3.80589 19 3 18.1941 3 17.2V7.8Z"
        className="stroke-gray-800"
        strokeWidth={1.5}
      />
      <path
        d="M3 9L21 9"
        className="stroke-gray-800"
        strokeWidth={1.5}
        strokeLinecap="round"
      />
    </svg>
  );
};

export default FolderIcon;
