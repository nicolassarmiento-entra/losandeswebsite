import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomeScreen from '../../pages/screens/HomeScreen';
// import MenuBarComponent from '../../pages/shared/MenuBarComponent';
import React, { useRef } from "react";
import LayoutComponent from "../presentation/layout";
import LandingScreen from "../presentation/pages/LandingScreen";
import NavbarComponent from "../presentation/shared/NavbarComponent";
// import NavbarComponent from "../presentation/shared/NavbarComponent";
// import PrivacyPolicyScreen from '../../pages/screens/PrivacyPolicyScreen';

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
      <NavbarComponent onScroll={handleScroll} />
      <Routes>
        <Route
          path="/"
          element={<LayoutComponent children={<LandingScreen />} />}
        />
        {/* <Route path="/privacypolicy" element={<PrivacyPolicyScreen />} /> */}
      </Routes>
    </Router>
  );
};

export default MyRoutes;
