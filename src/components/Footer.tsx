
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogTrigger } from "@/components/ui/dialog";
import { MessageCircle } from "lucide-react";
import ContactForm from './ContactForm';

// Nouveaux composants refactorisés
import CGVDialog from './footer/CGVDialog';
import MentionsLegalesDialog from './footer/MentionsLegalesDialog';
import DisclaimerDialog from './footer/DisclaimerDialog';
import FAQDialog from './footer/FAQDialog';

const Footer = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <footer className="border-t mt-12 py-6 px-4 hidden md:block">
      <div className="container mx-auto">
        <div className="flex justify-center gap-8 text-sm text-gray-600">
          <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
            <DialogTrigger className="flex items-center gap-2 hover:text-gray-900 transition-colors">
              <MessageCircle className="w-4 h-4" />
              Contactez-nous
            </DialogTrigger>
            <DialogContent className="max-w-2xl w-full">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-gray-800" style={{ letterSpacing: '-0.01em' }}>Contacter le Service Client</DialogTitle>
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
        <div className="flex justify-center mt-6">
          <span className="text-xs text-gray-500">© logo-foot.com</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
