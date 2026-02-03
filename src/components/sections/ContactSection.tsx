import React from "react";
import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const ContactSection = () => {
  const email = "contact@logo-foot.com";

  return (
    <section id="contact-section" className="relative py-10 sm:py-12 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-4">
            Une question ?
          </h2>

          {/* CTA Button */}
          <Button
            size="lg"
            className="rounded-full bg-lime text-navy font-semibold px-8 hover:bg-lime/90 transition-all shadow-lg hover:shadow-xl"
            onClick={() => window.location.href = `mailto:${email}`}
          >
            <Mail className="w-4 h-4 mr-2" />
            Contactez-nous
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
