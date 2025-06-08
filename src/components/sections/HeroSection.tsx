
import React from 'react';
import HeroTitle from './HeroTitle';
import HeroCTA from './HeroCTA';
import HeroImages from './HeroImages';
import HeroTrustBadges from './HeroTrustBadges';

interface HeroSectionProps {
  onScrollToPayment: () => void;
}

const HeroSection = ({ onScrollToPayment }: HeroSectionProps) => {
  return (
    <section className="py-12 md:py-20 px-4 bg-gradient-to-br from-blue-50/30 via-white to-purple-50/20">
      <div className="max-w-7xl mx-auto">
        <div className="space-y-12">
          <HeroTitle />
          <HeroCTA onScrollToPayment={onScrollToPayment} />
          <HeroImages />
          <HeroTrustBadges />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
