import { useEffect } from "react";
import { statics } from "../../assets/media";
import { useNavigationStore } from "../../stores/useNavigationStore";
import { navLinks } from "../../data/navigation";
import NavLinks from "../molecules/NavLinks";
import Button from "../atoms/Button";
import Icon from "../atoms/Icon";

interface NavbarProps {
  onScroll: (section: string) => void;
}

const Navbar = ({ onScroll }: NavbarProps) => {
  const {
    isMobileMenuOpen,
    toggleMobileMenu,
    closeMobileMenu,
    setCurrentSection,
  } = useNavigationStore();

  // Intersection Observer for active section tracking
  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.section);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && sectionIds.includes(entry.target.id)) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { root: null, rootMargin: "-50% 0px -50% 0px", threshold: 0 },
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setCurrentSection]);

  const handleMobileNav = (section: string) => {
    onScroll(section);
    setCurrentSection(section);
    closeMobileMenu();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md border-b border-andes-main/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="shrink-0 flex items-center gap-3 cursor-pointer group">
            <img
              src={statics.logo}
              alt="Constructora de los Andes - Logo"
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Nav */}
          <NavLinks onScroll={onScroll} />

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              onClick={() => onScroll("contact")}
              className="px-6 py-2.5 text-sm"
            >
              Solicitar Cotización
            </Button>
            <button className="p-2 text-neutral-500 hover:text-andes-main hover:bg-andes-main/5 rounded-full transition-colors cursor-pointer">
              <Icon name="person_outline" variant="filled" />
            </button>
          </div>

          {/* Mobile hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="text-neutral-500 hover:text-andes-main p-2 cursor-pointer"
              aria-label={isMobileMenuOpen ? "Cerrar menú" : "Abrir menú"}
            >
              <Icon
                name={isMobileMenuOpen ? "close" : "menu"}
                variant="filled"
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`
          md:hidden absolute top-20 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg border-t border-gray-100
          transition-all duration-300 ease-in-out overflow-hidden
          ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="px-4 py-4 space-y-1">
          {navLinks.map((link) => (
            <button
              key={link.section}
              onClick={() => handleMobileNav(link.section)}
              className="block w-full text-left px-4 py-3 text-sm font-medium text-neutral-600 hover:text-andes-main hover:bg-andes-main/5 rounded-lg transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2">
            <Button
              onClick={() => handleMobileNav("contact")}
              fullWidth
              className="text-sm"
            >
              Solicitar Cotización
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
