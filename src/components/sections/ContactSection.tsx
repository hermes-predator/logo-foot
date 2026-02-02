import React from "react";
import { ChevronRight, Mail } from "lucide-react";

const ContactSection = () => {
  const email = "contact@logo-foot.com";

  return (
    <section id="contact-section" className="relative py-16 sm:py-20 bg-secondary overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[400px] rounded-full border border-white/10" />
        <div className="absolute top-1/2 right-[-100px] -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-white/10" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Une question ?
          </h2>

          {/* Subtitle */}
          <p className="text-white/70 text-base sm:text-lg mb-8 max-w-xl mx-auto leading-relaxed">
            Notre équipe est disponible pour répondre à toutes vos questions.
          </p>

          {/* CTA Button */}
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5 text-lg"
          >
            <Mail className="w-5 h-5" />
            Nous contacter
            <ChevronRight className="w-5 h-5" />
          </a>

          {/* Email display */}
          <p className="mt-6 text-white/50 text-sm">
            ou écrivez-nous directement à{" "}
            <span className="text-primary font-medium">{email}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
