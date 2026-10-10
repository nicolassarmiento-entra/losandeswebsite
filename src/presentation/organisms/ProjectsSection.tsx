import { forwardRef } from "react";
import SectionTitle from "../atoms/SectionTitle";
import FilterPill from "../atoms/FilterPill";
import ProjectCarousel from "../molecules/ProjectCarousel";
import { useProjectsStore } from "../../stores/useProjectsStore";
import type { ProjectCategory } from "../../types/types";

const filters: { label: string; value: "todos" | ProjectCategory }[] = [
  { label: "Todos", value: "todos" },
  { label: "Residencial", value: "residencial" },
  { label: "Comercial", value: "comercial" },
  { label: "Industrial", value: "industrial" },
];

const ProjectsSection = forwardRef<HTMLElement>((_, ref) => {
  const { activeFilter, filteredProjects, setFilter } = useProjectsStore();

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-andes-primary relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <SectionTitle subtitle="Descubre nuestra selección de desarrollos inmobiliarios diseñados para elevar tu calidad de vida y potenciar tu inversión.">
            Nuestros Proyectos
          </SectionTitle>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <FilterPill
                key={f.value}
                label={f.label}
                isActive={activeFilter === f.value}
                onClick={() => setFilter(f.value)}
              />
            ))}
          </div>
        </div>

        {/* Project carousel */}
        <ProjectCarousel projects={filteredProjects} />

        {/* View all link */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center text-andes-main font-semibold hover:text-red-700 transition-colors border-b-2 border-andes-main/20 hover:border-andes-main pb-0.5"
          >
            Ver todos los proyectos
            <span className="material-symbols-outlined text-lg ml-1">
              arrow_right_alt
            </span>
          </a>
        </div>
      </div>
    </section>
  );
});

ProjectsSection.displayName = "ProjectsSection";

export default ProjectsSection;
