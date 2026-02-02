import React from "react";


const ContactSection = () => {
  const email = "contact@logo-foot.com";

  return (
    <section id="contact-section" className="relative py-10 sm:py-12 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          {/* Heading */}
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-white mb-3">
            Contactez-nous
          </h2>

          {/* Subtitle */}
          <p className="text-white/70 text-sm sm:text-base mb-4 max-w-md mx-auto">
            Notre équipe est disponible pour répondre à toutes vos questions.
          </p>

          {/* Email display */}
          <p className="text-white/60 text-base">
            Écrivez-nous à{" "}
            <a href={`mailto:${email}`} className="text-lime font-semibold hover:underline transition-colors">
              {email}
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
