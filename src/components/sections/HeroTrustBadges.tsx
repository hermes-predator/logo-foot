
import React from 'react';
import HeroTestimonialBadge from './HeroTestimonialBadge';
import GoogleDriveBadge from '../payment/GoogleDriveBadge';

const HeroTrustBadges = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 mt-8">
      <HeroTestimonialBadge />
      <GoogleDriveBadge className="lg:flex-shrink-0" />
    </div>
  );
};

export default HeroTrustBadges;
