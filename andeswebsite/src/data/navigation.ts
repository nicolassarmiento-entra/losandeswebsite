import type { NavLink, FooterLinkGroup } from "../types/types";

export const navLinks: NavLink[] = [
  { label: "Inicio", section: "hero" },
  { label: "Proyectos", section: "projects" },
  { label: "Servicios", section: "services" },
  { label: "Nosotros", section: "testimonials" },
  { label: "Contacto", section: "contact" },
];

export const footerProjectLinks: FooterLinkGroup = {
  title: "Proyectos",
  links: [
    { label: "Tunja", href: "#" },
    { label: "Manizales", href: "#" },
    { label: "Villa María", href: "#" },
    { label: "Duitama", href: "#" },
  ],
};

export const footerInfoLinks: FooterLinkGroup = {
  title: "Información",
  links: [
    { label: "Sobre Nosotros", href: "#" },
    { label: "Política de Privacidad", href: "#" },
    { label: "Términos y Condiciones", href: "#" },
    { label: "Cookies", href: "#" },
  ],
};
