import { useNavigationStore } from "../../stores/useNavigationStore";
import { navLinks } from "../../data/navigation";

interface NavLinksProps {
  onScroll: (section: string) => void;
}

const NavLinks = ({ onScroll }: NavLinksProps) => {
  const { currentSection, setCurrentSection } = useNavigationStore();

  const handleClick = (section: string) => {
    setCurrentSection(section);
    onScroll(section);
  };

  return (
    <div className="hidden md:flex items-center space-x-8">
      {navLinks.map((link) => (
        <button
          key={link.section}
          onClick={() => handleClick(link.section)}
          className={`
            text-sm font-medium transition-colors cursor-pointer
            ${
              currentSection === link.section
                ? "text-andes-main"
                : "text-neutral-600 hover:text-andes-main"
            }
          `}
        >
          {link.label}
        </button>
      ))}
    </div>
  );
};

export default NavLinks;
