import React from "react";
import { ChevronsRight } from "lucide-react";

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

          {/* CTA Button with hexagon pattern */}
          <a
            href={`mailto:${email}`}
            className="group relative inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full p-1.5 pr-2 transition-all duration-300 hover:bg-white/15"
          >
            {/* Inner lime button with hexagon pattern */}
            <span className="relative overflow-hidden bg-lime text-secondary font-semibold px-8 py-3.5 rounded-full text-lg flex items-center gap-2">
              {/* Hexagon pattern overlay */}
              <span className="absolute inset-0 opacity-30" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.15'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }} />
              <span className="relative">Contacter un agent</span>
              <ChevronsRight className="relative w-5 h-5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </a>

          {/* Email display */}
          <p className="mt-6 text-white/50 text-sm">
            ou écrivez-nous directement à{" "}
            <span className="text-lime font-medium">{email}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
