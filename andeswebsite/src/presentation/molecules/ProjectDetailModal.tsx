import { useEffect } from "react";
import { useProjectsStore } from "../../stores/useProjectsStore";
import Icon from "../atoms/Icon";
import Badge from "../atoms/Badge";
import Button from "../atoms/Button";

const ProjectDetailModal = () => {
  const { selectedProject, isModalOpen, closeModal } = useProjectsStore();

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    if (isModalOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, closeModal]);

  if (!isModalOpen || !selectedProject) return null;

  const features = [
    {
      icon: "square_foot",
      label: "Área",
      value: selectedProject.features.area,
    },
    {
      icon: "bed",
      label: "Habitaciones",
      value: String(selectedProject.features.rooms),
    },
    {
      icon: "bathtub",
      label: "Baños",
      value: String(selectedProject.features.bathrooms),
    },
    {
      icon: "directions_car",
      label: "Parqueadero",
      value: String(selectedProject.features.parking),
    },
  ];

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-fade-in"
        onClick={closeModal}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-[900px] w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row animate-modal-in z-10">
        {/* Close button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm shadow-md flex items-center justify-center hover:bg-andes-main hover:text-white transition-all duration-300 cursor-pointer border border-gray-100"
          aria-label="Cerrar"
        >
          <Icon name="close" size="sm" />
        </button>

        {/* Left — Image */}
        <div className="md:w-[55%] relative h-64 md:h-auto min-h-[300px]">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />

          {/* Status badge */}
          <div className="absolute top-4 left-4">
            <Badge status={selectedProject.status} />
          </div>

          {/* Category pill */}
          <div className="absolute bottom-4 left-4">
            <span className="bg-white/90 backdrop-blur-sm text-neutral-700 text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
              {selectedProject.category}
            </span>
          </div>
        </div>

        {/* Right — Details */}
        <div className="md:w-[45%] p-6 md:p-8 flex flex-col overflow-y-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-2 tracking-tight">
            {selectedProject.title}
          </h2>

          <div className="flex items-center text-neutral-500 text-sm mb-4">
            <Icon
              name="location_on"
              size="sm"
              className="text-andes-main mr-1"
            />
            {selectedProject.location}
          </div>

          <div className="mb-4">
            <span className="text-2xl font-bold text-andes-main">
              {selectedProject.price}
            </span>
          </div>

          <hr className="border-gray-100 mb-4" />

          <p className="text-neutral-600 text-sm leading-relaxed mb-6">
            {selectedProject.description}
          </p>

          {/* Features grid */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {features.map((feat) => (
              <div
                key={feat.label}
                className="bg-andes-primary/50 rounded-xl p-3 flex items-center gap-3"
              >
                <div className="w-9 h-9 bg-andes-main/10 rounded-lg flex items-center justify-center shrink-0">
                  <Icon
                    name={feat.icon}
                    size="sm"
                    className="text-andes-main"
                    variant="filled"
                  />
                </div>
                <div>
                  <p className="text-xs text-neutral-400 leading-tight">
                    {feat.label}
                  </p>
                  <p className="text-sm font-semibold text-neutral-800">
                    {feat.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="mt-auto space-y-3">
            <Button fullWidth icon="send" className="py-3.5">
              Solicitar Información
            </Button>
            <Button
              variant="secondary"
              fullWidth
              icon="download"
              className="py-3"
            >
              Descargar Brochure
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
