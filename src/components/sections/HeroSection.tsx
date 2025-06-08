
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
    <section className="container mx-auto px-4 py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Contenu principal */}
        <div className="lg:w-1/2 space-y-8">
          <HeroTitle />
          <HeroCTA onScrollToPayment={onScrollToPayment} />
          <HeroTrustBadges />
        </div>

        {/* Images */}
        <HeroImages />
      </div>
    </section>
  );
};

export default HeroSection;
