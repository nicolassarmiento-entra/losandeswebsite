import SectionTitle from "../atoms/SectionTitle";
import ServiceCard from "../molecules/ServiceCard";
import { services } from "../../data/services";

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <SectionTitle
            centered
            subtitle="Soluciones integrales para cada etapa de tu proyecto inmobiliario, respaldadas por décadas de experiencia."
          >
            Servicios
          </SectionTitle>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} variant="full" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
