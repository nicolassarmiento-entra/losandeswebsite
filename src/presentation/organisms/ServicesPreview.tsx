import ServiceCard from "../molecules/ServiceCard";
import { previewServices } from "../../data/services";

const ServicesPreview = () => {
  return (
    <section className="bg-andes-primary py-16 pb-0 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 -mt-24 relative z-20">
          {previewServices.map((service) => (
            <ServiceCard key={service.id} service={service} variant="preview" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
