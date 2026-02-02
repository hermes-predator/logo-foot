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
            className="group relative inline-flex items-center bg-white/20 backdrop-blur-sm border border-white/30 shadow-md rounded-full p-2 transition-all duration-300 hover:bg-white/30 hover:shadow-xl"
          >
            {/* Inner lime button with hexagon pattern */}
            <span className="relative overflow-hidden bg-lime text-secondary font-semibold px-8 py-3.5 rounded-full text-lg flex items-center gap-2">
              {/* Hexagon pattern overlay */}
              <span className="absolute inset-0 opacity-40" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='50' height='43' viewBox='0 0 50 43'%3E%3Cpath fill='%23000000' fill-opacity='0.12' d='M25 0l25 14.4v28.8L25 43 0 28.6V14.4L25 0zm0 4.8L4.2 16.2v21.6L25 48.2l20.8-10.4V16.2L25 4.8z'/%3E%3C/svg%3E")`,
                backgroundSize: '50px 43px',
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
