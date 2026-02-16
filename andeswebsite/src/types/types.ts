export type ProjectStatus = "en-venta" | "pre-venta" | "proximamente";
export type ProjectCategory = "residencial" | "comercial" | "industrial";

export interface ProjectFeatures {
  area: string;
  rooms: number;
  bathrooms: number;
  parking: number;
}

export interface Project {
  id: string;
  title: string;
  location: string;
  price: string;
  description: string;
  image: string;
  status: ProjectStatus;
  category: ProjectCategory;
  features: ProjectFeatures;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface NavLink {
  label: string;
  section: string;
}

export interface FooterLinkGroup {
  title: string;
  links: { label: string; href: string }[];
}

export interface ContactFormValues {
  nombre: string;
  correo: string;
  numero: string;
  mensaje: string;
}
