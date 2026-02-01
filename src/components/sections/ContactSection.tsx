import React from "react";
import { Mail } from "lucide-react";
import ContactForm from "../ContactForm";

const ContactSection = () => {
  return (
    <section id="contact-section" className="py-16 sm:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lime/20 text-navy font-medium text-sm mb-4">
              <Mail className="w-4 h-4" />
              <span>Contact</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-navy mb-3">
              Contactez-nous
            </h2>
            <p className="text-muted-foreground text-lg">
              Une question ? Notre équipe vous répond rapidement.
            </p>
          </div>

          {/* Contact Form Card */}
          <div className="bg-white rounded-2xl border border-border shadow-sm p-6 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
