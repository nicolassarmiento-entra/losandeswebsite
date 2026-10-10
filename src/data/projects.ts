import type { Project } from "../types/types";

export const projects: Project[] = [
  {
    id: "mirador-del-golf",
    title: "Mirador del Golf",
    location: "Tunja - Boyacá",
    price: "Desde $150M+",
    description:
      "Exclusivos apartamentos con vista panorámica al campo de golf. Acabados de lujo y zonas húmedas privadas. Diseño arquitectónico contemporáneo que maximiza la luz natural y ofrece espacios abiertos para una vida moderna.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDvYEWZB8CNmJYh9fGZZgMP400h9uLtXJhFJNeVnxplLGQ0Wi5jjCZI-KIx78xH9LXNBHI40xXs98yjB81cDCB8IHzXbyTacjRzbYfidrBxlGGuySI34Wx0p4tCYEO4y1sS4Kx2xAuMGpEeOAgK5w6IsT_dSmUyPpVJYNPCEuvKWaXGiu5IOftbaP66IVdVk5O96YI0iEmQbm2ODZLFQhzYfoZXt1XMWq68zlAFBn9mqKGKdyEML_QgwFNd5JquOb_R1q07UnKy9zE",
    status: "en-venta",
    category: "residencial",
    features: { area: "120m²", rooms: 3, bathrooms: 2, parking: 1 },
  },
  {
    id: "torre-empresarial-andina",
    title: "Torre Empresarial Andina",
    location: "Sogamoso - Boyacá",
    price: "Desde $280M+",
    description:
      "Oficinas inteligentes en el corazón financiero de la ciudad. Espacios modulares desde 40m² con acabados corporativos de alta gama. Conectividad de fibra óptica, salas de juntas compartidas y lobby ejecutivo.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCemkdfBaNJTN6jDwNJk-g2wgY8234bYeJjQ85JLre7KfFwisZtGbGg43AJSpb4O3fLMh9SB1iBNQP6rW-xubkDWJLNlxNCYHUeVIA_oij2UxCla8vvQwsSooH8YR1kad7aLN7qUaUsURltBno4vH4IcOUUNXLZ68ZJbkB1Nath2YPO-IQtq50Xx5yFZEhbtePbg7gSj4Y3xb2ZBPsx3_SyHNyk-8FsAP7sfI1HspZ4ZdFtEKtNG-ZhlEMLCEPH7uH8D9vdfUZV7f8",
    status: "pre-venta",
    category: "comercial",
    features: { area: "40m²–200m²", rooms: 1, bathrooms: 2, parking: 2 },
  },
  {
    id: "reserva-del-bosque",
    title: "Reserva del Bosque",
    location: "Paipa - Boyacá",
    price: "Desde $450M+",
    description:
      "Casas campestres rodeadas de naturaleza. Sendero ecológico, club house y seguridad privada 24/7. Lotes desde 500m² con vistas panorámicas a las montañas y acceso exclusivo a zona de piscinas y spa.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSkqT6edc7ygxY-tkWOfhYrQzkfLeVALIAjVTfBs3plsWBP1XdPJ9mP01aSKbg8wf5F9XZUA1eSNHq67p9ul2WivZ23h9zGBxEieCmugIPgXtPaowJBkee-gqDa-Ipk_kPnthxkmFL5v-955CPbvjEs6YUFOjvXkGhxZhKTEiiBMt2A5rk4_fGLoSCYlxhiiZ5MvgzuXhaJM9Q8yPp19UmrvSme423BfP3MQ9RRwB-Mc5nvomt8smWlTdLpOdzDFWWzW71vzCJbCk",
    status: "en-venta",
    category: "residencial",
    features: { area: "500m²+", rooms: 4, bathrooms: 3, parking: 2 },
  },
  {
    id: "centro-logistico-andes",
    title: "Centro Logístico Andes",
    location: "Duitama - Boyacá",
    price: "Desde $800M+",
    description:
      "Bodegas industriales con acceso directo a la vía principal. Altura libre de 8m, zona de carga y descarga, oficinas administrativas y vigilancia 24/7.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDvYEWZB8CNmJYh9fGZZgMP400h9uLtXJhFJNeVnxplLGQ0Wi5jjCZI-KIx78xH9LXNBHI40xXs98yjB81cDCB8IHzXbyTacjRzbYfidrBxlGGuySI34Wx0p4tCYEO4y1sS4Kx2xAuMGpEeOAgK5w6IsT_dSmUyPpVJYNPCEuvKWaXGiu5IOftbaP66IVdVk5O96YI0iEmQbm2ODZLFQhzYfoZXt1XMWq68zlAFBn9mqKGKdyEML_QgwFNd5JquOb_R1q07UnKy9zE",
    status: "proximamente",
    category: "industrial",
    features: { area: "1200m²", rooms: 2, bathrooms: 3, parking: 6 },
  },
  {
    id: "parque-residencial-san-rafael",
    title: "Parque Residencial San Rafael",
    location: "Tunja - Boyacá",
    price: "Desde $180M+",
    description:
      "Apartamentos familiares con parque interior, zona de juegos infantiles, salón comunal y gimnasio. Torre de 12 pisos con ascensor y portería 24 horas.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCemkdfBaNJTN6jDwNJk-g2wgY8234bYeJjQ85JLre7KfFwisZtGbGg43AJSpb4O3fLMh9SB1iBNQP6rW-xubkDWJLNlxNCYHUeVIA_oij2UxCla8vvQwsSooH8YR1kad7aLN7qUaUsURltBno4vH4IcOUUNXLZ68ZJbkB1Nath2YPO-IQtq50Xx5yFZEhbtePbg7gSj4Y3xb2ZBPsx3_SyHNyk-8FsAP7sfI1HspZ4ZdFtEKtNG-ZhlEMLCEPH7uH8D9vdfUZV7f8",
    status: "en-venta",
    category: "residencial",
    features: { area: "85m²", rooms: 3, bathrooms: 2, parking: 1 },
  },
  {
    id: "plaza-comercial-boyaca",
    title: "Plaza Comercial Boyacá",
    location: "Tunja - Boyacá",
    price: "Desde $95M+",
    description:
      "Locales comerciales en la nueva zona de mayor crecimiento de la ciudad. Excelente flujo peatonal, parqueadero para clientes y food court.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCSkqT6edc7ygxY-tkWOfhYrQzkfLeVALIAjVTfBs3plsWBP1XdPJ9mP01aSKbg8wf5F9XZUA1eSNHq67p9ul2WivZ23h9zGBxEieCmugIPgXtPaowJBkee-gqDa-Ipk_kPnthxkmFL5v-955CPbvjEs6YUFOjvXkGhxZhKTEiiBMt2A5rk4_fGLoSCYlxhiiZ5MvgzuXhaJM9Q8yPp19UmrvSme423BfP3MQ9RRwB-Mc5nvomt8smWlTdLpOdzDFWWzW71vzCJbCk",
    status: "pre-venta",
    category: "comercial",
    features: { area: "35m²–150m²", rooms: 1, bathrooms: 1, parking: 0 },
  },
];
