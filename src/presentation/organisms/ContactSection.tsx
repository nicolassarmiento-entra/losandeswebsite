import { forwardRef } from "react";
import ContactForm from "../molecules/ContactForm";
import Icon from "../atoms/Icon";

const ContactSection = forwardRef<HTMLElement>((_, ref) => {
  return (
    <section
      id="contact"
      ref={ref}
      className="relative bg-white py-16 md:py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row shadow-2xl rounded-2xl overflow-hidden min-h-[500px]">
          {/* Red panel — clean left side, no clip-path */}
          <div className="md:w-[45%] bg-andes-main relative p-8 md:p-12 lg:p-16 flex flex-col justify-between overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Contáctanos
              </h2>
              <p className="text-white/80 text-lg font-light max-w-sm">
                Estamos listos para construir tus sueños. Cuéntanos sobre tu
                proyecto.
              </p>
            </div>

            {/* Logo in panel */}
            <div className="relative z-10 mt-12 flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded flex items-center justify-center">
                <Icon
                  name="landscape"
                  variant="filled"
                  className="text-white"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg tracking-tight text-white leading-tight">
                  CONSTRUCTORA
                </span>
                <span className="font-semibold text-xs tracking-widest text-white/80 uppercase">
                  De Los Andes
                </span>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />

            {/* Diagonal decorative edge — SVG instead of clip-path */}
            <div className="hidden md:block absolute top-0 -right-px bottom-0 w-16 z-20">
              <svg
                viewBox="0 0 64 500"
                preserveAspectRatio="none"
                className="h-full w-full"
                fill="white"
              >
                <polygon points="0,0 64,0 64,500 0,500" opacity="0" />
                <polygon points="0,0 64,50 64,500 0,500" fill="white" />
              </svg>
            </div>
          </div>

          {/* Form panel — clean white, never clipped */}
          <div className="md:w-[55%] bg-white p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
});

ContactSection.displayName = "ContactSection";

export default ContactSection;
