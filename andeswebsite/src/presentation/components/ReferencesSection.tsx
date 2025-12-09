import { forwardRef } from "react";
import ReferenceCardComponent from "../shared/ReferenceCardComponent";

const ReferencesSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section
      id="references"
      ref={ref}
      className="col-span-12 h-[90vh] flex justify-center items-start mt-20 gap-x-12 p-4"
    >
      {Array.from({ length: 3 }).map((_, index) => (
        <ReferenceCardComponent key={index} />
      ))}
    </section>
  );
});

export default ReferencesSection;
