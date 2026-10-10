import { create } from "zustand";
import type { Project, ProjectCategory } from "../types/types";
import { projects as allProjects } from "../data/projects";

type FilterOption = "todos" | ProjectCategory;

interface ProjectsState {
  projects: Project[];
  activeFilter: FilterOption;
  filteredProjects: Project[];
  selectedProject: Project | null;
  isModalOpen: boolean;
  setFilter: (filter: FilterOption) => void;
  openModal: (project: Project) => void;
  closeModal: () => void;
}

export const useProjectsStore = create<ProjectsState>((set) => ({
  projects: allProjects,
  activeFilter: "todos",
  filteredProjects: allProjects,
  selectedProject: null,
  isModalOpen: false,
  setFilter: (filter) =>
    set((state) => ({
      activeFilter: filter,
      filteredProjects:
        filter === "todos"
          ? state.projects
          : state.projects.filter((p) => p.category === filter),
    })),
  openModal: (project) => set({ selectedProject: project, isModalOpen: true }),
  closeModal: () => set({ selectedProject: null, isModalOpen: false }),
}));
