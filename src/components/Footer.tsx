
import React from 'react';

// Composants refactorisés
import CGVDialog from './footer/CGVDialog';
import MentionsLegalesDialog from './footer/MentionsLegalesDialog';
import DisclaimerDialog from './footer/DisclaimerDialog';
import FAQDialog from './footer/FAQDialog';

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 px-4 hidden md:block bg-background">
      <div className="container mx-auto">
        <div className="flex justify-center gap-8 text-sm text-muted-foreground">
          <CGVDialog />
          <MentionsLegalesDialog />
          <DisclaimerDialog />
          <FAQDialog />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
