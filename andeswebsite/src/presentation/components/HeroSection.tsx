import { forwardRef } from "react";

const HeroSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section id="hero" ref={ref} className="h-[88vh] mt-[10vh] bg-blue-100">
      <h1>Hero Section</h1>
    </section>
  );
});

export default HeroSection;
