import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import ProjectCard from "./ProjectCard";
import Icon from "../atoms/Icon";
import type { Project } from "../../types/types";

interface ProjectCarouselProps {
  projects: Project[];
}

const ProjectCarousel = ({ projects }: ProjectCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    containScroll: "trimSnaps",
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setScrollSnaps(emblaApi.scrollSnapList());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // Re-initialize carousel when filtered projects change
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      emblaApi.scrollTo(0);
    }
  }, [projects, emblaApi]);

  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <Icon
          name="search_off"
          size="xl"
          className="text-neutral-300 mb-4"
          variant="filled"
        />
        <p className="text-neutral-500 text-lg">
          No se encontraron proyectos en esta categoría.
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Carousel viewport */}
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] lg:flex-[0_0_33.333%]"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation arrows */}
      <button
        onClick={scrollPrev}
        disabled={!canScrollPrev}
        className={`absolute top-1/2 -left-4 xl:-left-6 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center transition-all duration-300 cursor-pointer z-10 ${
          canScrollPrev
            ? "hover:bg-andes-main hover:text-white hover:shadow-xl hover:border-andes-main"
            : "opacity-40 cursor-not-allowed"
        }`}
        aria-label="Proyecto anterior"
      >
        <Icon name="chevron_left" size="md" />
      </button>

      <button
        onClick={scrollNext}
        disabled={!canScrollNext}
        className={`absolute top-1/2 -right-4 xl:-right-6 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center transition-all duration-300 cursor-pointer z-10 ${
          canScrollNext
            ? "hover:bg-andes-main hover:text-white hover:shadow-xl hover:border-andes-main"
            : "opacity-40 cursor-not-allowed"
        }`}
        aria-label="Siguiente proyecto"
      >
        <Icon name="chevron_right" size="md" />
      </button>

      {/* Dot pagination */}
      <div className="flex justify-center gap-2 mt-8">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
              index === selectedIndex
                ? "bg-andes-main w-8"
                : "bg-neutral-300 hover:bg-neutral-400"
            }`}
            aria-label={`Ir al grupo ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
