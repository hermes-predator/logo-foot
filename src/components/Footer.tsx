
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { MessageCircle } from "lucide-react";
import ContactForm from './ContactForm';

// Composants refactorisés
import CGVDialog from './footer/CGVDialog';
import MentionsLegalesDialog from './footer/MentionsLegalesDialog';
import DisclaimerDialog from './footer/DisclaimerDialog';
import FAQDialog from './footer/FAQDialog';

const Footer = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <footer className="border-t border-border py-8 px-4 hidden md:block bg-background">
      <div className="container mx-auto">
        <div className="flex justify-center gap-8 text-sm text-muted-foreground">
          <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
            <DialogTrigger className="flex items-center gap-2 hover:text-foreground transition-colors">
              <MessageCircle className="w-4 h-4" />
              Contactez-nous
            </DialogTrigger>
            <DialogContent className="max-w-2xl w-full">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-foreground">Contacter notre Service Client</DialogTitle>
                <DialogDescription>
                  Pour toute question ou demande d'assistance.
                </DialogDescription>
              </DialogHeader>
              <div className="mt-4">
                <ContactForm onClose={() => setIsContactOpen(false)} />
              </div>
            </DialogContent>
          </Dialog>

          <CGVDialog />
          <MentionsLegalesDialog />
          <DisclaimerDialog />
          <FAQDialog />
        </div>
        
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Logo-foot.com · Tous droits réservés
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
