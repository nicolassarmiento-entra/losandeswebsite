import { forwardRef } from "react";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";
import StatCounter from "../molecules/StatCounter";

const HERO_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD4P8vSpCZgINiKNn3X-A4O8uUZqI0qI0BThYiy41sc9Ycw_lzqpVFSimVzDSLsEEVeeciSSuTzyoCJKia9kmiKkItuUqtzBEtdHQVAOUGUVen6SNN7L23yXBx9tHFEbBwYEnjEv7ZZ0Qoh59ZtRcIMtS2H3zFYwfjuk7bJKreP_i__zlnsem9bYVqS2VBFfCIbesoYNt4VFSVzpPSpsMkcVcsyge6cKkmm1xFLVgTSKOmgbT-QvWDuIRKvcf7TgYGz_MmXn1SEraY";

interface HeroSectionProps {
  onScrollToProjects: () => void;
}

const HeroSection = forwardRef<HTMLElement, HeroSectionProps>(
  ({ onScrollToProjects }, ref) => {
    return (
      <header
        id="hero"
        ref={ref}
        className="relative w-full h-screen min-h-[600px] flex items-center justify-start overflow-hidden"
      >
        {/* Background Image + Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            alt="Desarrollo arquitectónico moderno en los Andes colombianos"
            className="w-full h-full object-cover object-center"
            src={HERO_IMAGE}
          />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/40 to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="max-w-2xl">
            <div className="glass-card p-8 md:p-10 rounded-xl shadow-2xl backdrop-blur-md">
              {/* Tagline */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="h-0.5 w-8 bg-andes-main" />
                <span className="text-gray-200 text-sm font-semibold tracking-wider uppercase">
                  Desde 1985
                </span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-shadow">
                Construyendo el <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-white to-gray-300">
                  Futuro de Los Andes
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg text-gray-200 mb-8 leading-relaxed font-light max-w-lg">
                Líderes en desarrollo arquitectónico y comercialización de
                bienes raíces. Transformamos el paisaje con innovación y respeto
                por la naturaleza.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={onScrollToProjects}
                  icon="arrow_forward"
                  className="group"
                >
                  Ver Proyectos
                </Button>
                <Button
                  variant="secondary"
                  icon="play_circle_outline"
                  iconPosition="left"
                >
                  Nuestro Video
                </Button>
              </div>

              {/* Stats */}
              <StatCounter />
            </div>
          </div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce cursor-pointer">
          <span className="text-white/70 text-xs font-light tracking-widest mb-2 uppercase">
            Descubre Más
          </span>
          <Icon
            name="keyboard_arrow_down"
            className="text-white/70"
            variant="filled"
          />
        </div>
      </header>
    );
  },
);

HeroSection.displayName = "HeroSection";

export default HeroSection;
