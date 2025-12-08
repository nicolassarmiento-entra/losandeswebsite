import { forwardRef } from "react";

const ReferencesSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section id="references" ref={ref} className="col-span-12 h-[90vh] bg-red-100">
      <h1>References Section</h1>
    </section>
  );
});

export default ReferencesSection;
