import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useRef } from "react";

import LayoutComponent from "../presentation/layout";
import LandingScreen from "../presentation/pages/LandingScreen";
import HeroSection from "../presentation/components/HeroSection";
import ProjectsSection from "../presentation/components/ProjectsSection";
import ReferencesSection from "../presentation/components/ReferencesSection";
import ContactSection from "../presentation/components/ContactSection";
import NavbarComponent from "../presentation/shared/NavbarComponent";
import FooterComponent from "../presentation/shared/FooterComponent";

const MyRoutes = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const referencesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const handleScroll = (section: string) => {
    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      hero: heroRef,
      projects: projectsRef,
      references: referencesRef,
      contact: contactRef,
    };

    const element = refMap[section]?.current;

    if (element) {
      const navbarHeight = 100;
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Router>
      <NavbarComponent onScroll={handleScroll} />
      <HeroSection key="hero" ref={heroRef} />
      <Routes>
        <Route
          path="/"
          element={
            <LayoutComponent
            children={
              <LandingScreen
              children={[
                    <ProjectsSection key="projects" ref={projectsRef} />,
                    <ReferencesSection key="references" ref={referencesRef} />,
                    <ContactSection key="contact" ref={contactRef} />,
                  ]}
                />
              }
            />
          }
        />
        {/* <Route path="/privacypolicy" element={<PrivacyPolicyScreen />} /> */}
      </Routes>
      <FooterComponent />
    </Router>
  );
};

export default MyRoutes;
