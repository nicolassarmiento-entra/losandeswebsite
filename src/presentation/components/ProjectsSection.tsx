import { forwardRef } from "react";

const ProjectsSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section id="projects" ref={ref} className="col-span-12 h-[90vh] bg-green-100">
      <h1>Projects Section</h1>
    </section>
  );
});

export default ProjectsSection;
