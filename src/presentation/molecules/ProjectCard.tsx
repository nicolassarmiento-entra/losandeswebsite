import Badge from "../atoms/Badge";
import Icon from "../atoms/Icon";
import type { Project } from "../../types/types";
import { useProjectsStore } from "../../stores/useProjectsStore";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { openModal } = useProjectsStore();

  return (
    <article className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-gray-100 flex flex-col h-full">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
          src={project.image}
        />
        {/* Status badge */}
        <div className="absolute top-4 right-4">
          <Badge status={project.status} />
        </div>
        {/* Category tag */}
        <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-100">
          <span className="text-xs font-semibold text-neutral-500 uppercase tracking-wider">
            {project.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 pt-8 grow flex flex-col">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-neutral-900 mb-1 group-hover:text-andes-main transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center text-neutral-500 text-sm mb-3">
            <Icon name="location_on" size="sm" className="mr-1" />
            {project.location}
          </div>
          <p className="text-neutral-600 text-sm line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* Price + CTA */}
        <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
          <div>
            <span className="block text-xs text-neutral-400 uppercase">
              Precio
            </span>
            <span className="font-bold text-lg text-neutral-900">
              {project.price}
            </span>
          </div>
          <button
            onClick={() => openModal(project)}
            className="bg-andes-main hover:bg-red-700 text-white p-2.5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center cursor-pointer"
          >
            <span className="text-sm font-medium px-2">Ver más</span>
            <Icon name="arrow_forward" size="sm" />
          </button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
