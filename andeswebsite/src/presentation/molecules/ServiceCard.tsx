import Icon from "../atoms/Icon";
import type { Service } from "../../types/types";

interface ServiceCardProps {
  service: Service;
  variant?: "preview" | "full";
}

const ServiceCard = ({ service, variant = "full" }: ServiceCardProps) => {
  if (variant === "preview") {
    return (
      <div className="bg-white p-8 rounded-lg shadow-xl border-b-4 border-andes-main hover:-translate-y-2 transition-transform duration-300">
        <div className="w-12 h-12 bg-andes-main/10 rounded-lg flex items-center justify-center mb-4">
          <Icon
            name={service.icon}
            className="text-andes-main"
            size="lg"
            variant="filled"
          />
        </div>
        <h3 className="text-xl font-bold text-neutral-900 mb-2">
          {service.title}
        </h3>
        <p className="text-neutral-600 text-sm leading-relaxed">
          {service.description}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 group">
      <div className="w-12 h-12 bg-andes-main/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-andes-main transition-colors duration-300">
        <Icon
          name={service.icon}
          className="text-andes-main group-hover:text-white"
          size="xl"
        />
      </div>
      <h3 className="text-lg font-bold text-neutral-900 mb-2">
        {service.title}
      </h3>
      <p className="text-sm text-neutral-600 leading-snug">
        {service.description}
      </p>
    </div>
  );
};

export default ServiceCard;
