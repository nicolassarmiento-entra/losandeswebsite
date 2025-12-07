// import { Button } from "@nextui-org/react";
// import { useProjects } from "../../stores/stores";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const NavbarComponent = ({
  onScroll,
}: {
  onScroll: (section: string) => void;
}) => {
  const path = useLocation();

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //   const fetchProjects = useProjects((state) => state.fetchProjects);

  //   useEffect(() => {
  //     fetchProjects();
  //   }, [fetchProjects]);

  return (
    <>
      {path.pathname === "/" ? (
        <nav className="flex justify-between items-center h-[10vh] md:grid md:grid-cols-12 bg-darkblue z-20 fixed w-full shadow-lg opacity-95">
          {/* Espaciado para diseño */}
          <div className="md:col-span-1"></div>

          {/* Título */}
          <span className="md:col-span-4 lg:col-span-3 text-lightblue md:text-2xl lg:text-3xl font-medium">
            EL CÓDIGO RECUERDA
          </span>

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
                  onScroll("about");
                  toggleMenu();
                }}
                className="block px-4 py-2 hover:bg-midblue transition-all duration-250 cursor-pointer bg-transparent border-none w-24 text-lightblue"
              >
                Sobre mí
              </Link>
              <Link
                to="#"
                onClick={() => {
                  onScroll("studies");
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
                  onScroll("technologies");
                  toggleMenu();
                }}
                className="block px-4 py-2 hover:bg-midblue transition-all duration-250 cursor-pointer bg-transparent border-none w-24 text-lightblue"
              >
                Tecnologías
              </Link>
            </section>
          </div>

          {/* Menú de navegación para pantallas grandes */}
          <section className="hidden md:flex md:col-span-6 lg:col-span-7 gap-x-2 justify-self-end">
            <Link
              to="#"
              onClick={() => onScroll("about")}
              className="text-lightblue text-lg lg:text-xl hover:text-midblue transition-all duration-250 cursor-pointer z-10 bg-transparent border-none"
            >
              Inicio
            </Link>
            <Link
              to="#"
              onClick={() => onScroll("studies")}
              className="text-lightblue text-lg lg:text-xl hover:text-midblue transition-all duration-250 cursor-pointer z-10 bg-transparent border-none"
            >
              Nosotros
            </Link>
            <Link
              to="#"
              onClick={() => onScroll("projects")}
              className="text-lightblue text-lg lg:text-xl hover:text-midblue transition-all duration-250 cursor-pointer z-10 bg-transparent border-none"
            >
              Proyectos
            </Link>
            <Link
              to="#"
              onClick={() => onScroll("technologies")}
              className="text-lightblue text-lg lg:text-xl hover:text-midblue transition-all duration-250 cursor-pointer z-10 bg-transparent border-none"
            >
              Contacto
            </Link>
          </section>

          {/* Espaciado para diseño */}
          <div className="md:col-span-1"></div>
        </nav>
      ) : null}
    </>
  );
};

export default NavbarComponent;
