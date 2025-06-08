
import React from 'react';
import HeroTestimonialBadge from '@/components/sections/HeroTestimonialBadge';
import GoogleDriveBadge from '@/components/payment/GoogleDriveBadge';

const HeroTrustBadges = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-4 lg:gap-8 pt-8">
      <HeroTestimonialBadge />
      <div className="hidden lg:block h-6 w-px bg-gray-200"></div>
      <GoogleDriveBadge className="scale-95 lg:scale-100" />
    </div>
  );
};

export default HeroTrustBadges;
