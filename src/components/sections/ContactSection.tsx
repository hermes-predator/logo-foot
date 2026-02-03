import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronsRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ContactSection = () => {
  const navigate = useNavigate();

  return (
    <section id="contact-section" className="relative py-10 sm:py-12 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
            Prêt à télécharger ?
          </h2>

          {/* CTA Button */}
          <Button
            size="lg"
            className="rounded-full bg-lime text-navy font-semibold px-8 hover:bg-lime/90 transition-all shadow-lg hover:shadow-xl hover:shadow-lime-500/25"
            onClick={() => navigate('/payment')}
          >
            Télécharger le fichier
            <ChevronsRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
