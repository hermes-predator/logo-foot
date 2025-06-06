
import React from 'react';

const HeroBackground = () => {
  const svgPattern = "data:image/svg+xml,%3csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3e%3cg fill='none' fill-rule='evenodd'%3e%3cg fill='%23e0e7ff' fill-opacity='0.3'%3e%3ccircle cx='30' cy='30' r='4'/%3e%3c/g%3e%3c/g%3e%3c/svg%3e";
  
  return (
    <div 
      className="absolute inset-0 opacity-50"
      style={{
        backgroundImage: `url("${svgPattern}")`,
        backgroundSize: '60px 60px'
      }}
    />
  );
};

export default HeroBackground;
