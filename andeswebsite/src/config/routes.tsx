import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import LayoutComponent from "../presentation/layout";
import LandingScreen from "../presentation/pages/LandingScreen";
import HeroSection from "../presentation/components/HeroSection";
import ProjectsSection from "../presentation/components/ProjectsSection";
import ReferencesSection from "../presentation/components/ReferencesSection";
import ContactSection from "../presentation/components/ContactSection";
import NavbarComponent from "../presentation/shared/NavbarComponent";
import { useRef } from "react";
import FooterComponent from "../presentation/shared/FooterComponent";

const MyRoutes = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const studiesRef = useRef<HTMLDivElement>(null);
  const techsRef = useRef<HTMLDivElement>(null);

  const handleScroll = (section: string) => {
    const refMap: Record<string, React.RefObject<HTMLDivElement | null>> = {
      about: aboutRef,
      projects: projectsRef,
      studies: studiesRef,
      technologies: techsRef,
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
      <Routes>
        <NavbarComponent onScroll={handleScroll} />
        <Route
          path="/"
          element={
            <LayoutComponent
              children={
                <LandingScreen
                  children={[
                    <HeroSection key="hero" />,
                    <ProjectsSection key="projects" />,
                    <ReferencesSection key="references" />,
                    <ContactSection key="contact" />,
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
