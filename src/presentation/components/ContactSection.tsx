import { forwardRef } from "react";

const ContactSection = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <section id="contact" ref={ref} className="col-span-12 h-[90vh] bg-yellow-100">
      <h1>Contact Section</h1>
    </section>
  );
});

export default ContactSection;
