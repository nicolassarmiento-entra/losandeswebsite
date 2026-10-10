import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useRef } from "react";

import LayoutComponent from "../presentation/layout";
import LandingScreen from "../presentation/pages/LandingScreen";
import Navbar from "../presentation/organisms/Navbar";
import HeroSection from "../presentation/organisms/HeroSection";
import ServicesPreview from "../presentation/organisms/ServicesPreview";
import ProjectsSection from "../presentation/organisms/ProjectsSection";
import TestimonialsSection from "../presentation/organisms/TestimonialsSection";
import ServicesSection from "../presentation/organisms/ServicesSection";
import ContactSection from "../presentation/organisms/ContactSection";
import Footer from "../presentation/organisms/Footer";
import ProjectDetailModal from "../presentation/molecules/ProjectDetailModal";

const AppRouter = () => {
  const heroRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const testimonialsRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  const scrollToSection = (section: string) => {
    const refs: Record<string, React.RefObject<HTMLElement | null>> = {
      hero: heroRef,
      projects: projectsRef,
      testimonials: testimonialsRef,
      contact: contactRef,
    };

    const target = refs[section]?.current;
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    } else {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Router basename={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <LayoutComponent>
        <Navbar onScroll={scrollToSection} />
        <Routes>
          <Route
            path="/"
            element={
              <LandingScreen>
                <HeroSection
                  ref={heroRef}
                  onScrollToProjects={() => scrollToSection("projects")}
                />
                <ServicesPreview />
                <ProjectsSection ref={projectsRef} />
                <ServicesSection />
                <TestimonialsSection ref={testimonialsRef} />
                <ContactSection ref={contactRef} />
              </LandingScreen>
            }
          />
        </Routes>
        <Footer />
        <ProjectDetailModal />
      </LayoutComponent>
    </Router>
  );
};

export default AppRouter;
