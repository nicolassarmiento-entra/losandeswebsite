// import { Button } from "@nextui-org/react";
// import { useProjects } from "../../stores/stores";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { statics } from "../../assets/media";

const NavbarComponent = ({
  onScroll,
}: {
  onScroll: (section: string) => void;
}) => {
  const path = useLocation();

  const [isOpen, setIsOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState("hero");

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Detectar la sección visible al hacer scroll
  useEffect(() => {
    const sections = ["hero", "references", "projects", "contact"];

    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px", // Detecta cuando la sección está en el centro del viewport
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          if (sections.includes(sectionId)) {
            setCurrentSection(sectionId);
          }
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observar todas las secciones
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Limpiar observer al desmontar
    return () => {
      sections.forEach((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  //   const fetchProjects = useProjects((state) => state.fetchProjects);

  //   useEffect(() => {
  //     fetchProjects();
  //   }, [fetchProjects]);

  return (
    <>
      {path.pathname === "/" ? (
        <nav className="flex justify-between items-center h-[10vh] md:grid md:grid-cols-12 text-andes-dark font-semibold bg-andes-primary z-20 fixed w-full shadow-lg">
          {/* Título */}
          <div className="md:col-span-4 lg:col-span-3">
            <img
              src={statics.logo}
              alt="Constructora de los Andes - Logo"
              className="w-72 p-5"
            />
          </div>

          {/* Botón de menú (solo visible en móviles) */}
          <div className="relative md:hidden">
            <Link
              to="#"
              className="block text-lightblue border-none bg-transparent"
              //   variant="bordered"
              onClick={toggleMenu}
              aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            >
              ☰
            </Link>

            {/* Menú de navegación para móviles */}
            <section
              className={`absolute top-12 left-0 bg-darkblue text-lightblue rounded-md shadow-lg transition-all duration-300 ease-in-out overflow-hidden ${
                isOpen
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
              style={{ transformOrigin: "top center" }}
            >
              <Link
                to="#"
                onClick={() => {
                  onScroll("hero");
                  toggleMenu();
                }}
                className="block px-4 py-2 hover:bg-midblue transition-all duration-250 cursor-pointer bg-transparent border-none w-24 text-lightblue"
              >
                Sobre mí
              </Link>
              <Link
                to="#"
                onClick={() => {
                  onScroll("references");
                  toggleMenu();
                }}
                className="block px-4 py-2 hover:bg-midblue transition-all duration-250 cursor-pointer bg-transparent border-none w-24 text-lightblue"
              >
                Estudios
              </Link>
              <Link
                // variant="bordered"
                to="#"
                onClick={() => {
                  onScroll("projects");
                  toggleMenu();
                }}
                className="block px-4 py-2 hover:bg-midblue transition-all duration-250 cursor-pointer bg-transparent border-none w-24 text-lightblue"
              >
                Proyectos
              </Link>
              <Link
                // variant="bordered"
                to="#"
                onClick={() => {
                  onScroll("contact");
                  toggleMenu();
                }}
                className="block px-4 py-2 hover:bg-midblue transition-all duration-250 cursor-pointer bg-transparent border-none w-24 text-lightblue"
              >
                Tecnologías
              </Link>
            </section>
          </div>

          {/* Menú de navegación para pantallas grandes */}
          <section className="hidden md:flex md:col-span-6 lg:col-span-8 items-center justify-end gap-x-8">
            <Link
              to="#"
              onClick={() => {
                onScroll("hero");
                setCurrentSection("hero");
              }}
              className={`text-lg lg:text-xl hover:text-andes-main transition-all duration-100 cursor-pointer z-10 ${
                currentSection === "hero" ? "text-andes-main" : ""
              }`}
            >
              Inicio
            </Link>
            <Link
              to="#"
              onClick={() => {
                onScroll("projects");
                setCurrentSection("projects");
              }}
              className={`text-lg lg:text-xl hover:text-andes-main transition-all duration-100 cursor-pointer z-10 ${
                currentSection === "projects" ? "text-andes-main" : ""
              }`}
            >
              Proyectos
            </Link>
            <Link
              to="#"
              onClick={() => {
                onScroll("references");
                setCurrentSection("references");
              }}
              className={`text-lg lg:text-xl hover:text-andes-main transition-all duration-100 cursor-pointer z-10 ${
                currentSection === "references" ? "text-andes-main" : ""
              }`}
            >
              Nosotros
            </Link>
            <Link
              to="#"
              onClick={() => {
                onScroll("contact");
                setCurrentSection("contact");
              }}
              className={`text-lg lg:text-xl hover:text-andes-main transition-all duration-100 cursor-pointer z-10 ${
                currentSection === "contact" ? "text-andes-main" : ""
              }`}
            >
              Contacto
            </Link>
          </section>
        </nav>
      ) : null}
    </>
  );
};

export default NavbarComponent;
