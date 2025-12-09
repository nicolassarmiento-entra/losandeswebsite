import { forwardRef } from "react";
import { statics } from "../../assets/media";

const HeroSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section id="hero" ref={ref} className="h-full">
      <img src={statics.hero} alt="" className="w-full h-[88vh] object-cover" />
      <div className="absolute top-1/2 left-1/2 md:top-3/4 md:left-1/3 transform -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-4xl font-extrabold text-andes-main">
          Construyendo el futuro de los Andes
        </h1>
        <p className="text-lg font-normal text-andes-dark md:max-w-[620px]">
          Somos una empresa líder en construcción, comprometidos con la calidad
          y la innovación. Transformamos tus ideas en realidad.
        </p>
      </div>
    </section>
  );
});

export default HeroSection;
