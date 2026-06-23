export type Category =
  | "All"
  | "Business Branding"
  | "Personal Branding"
  | "Startup Branding"
  | "Entertainment Branding";

export type Project = {
  id: string;
  slug: string; // Added slug for routing
  title: string;
  client: string;
  categories: Category[];
  image: string; // Thumbnail for portfolio grid

  // Added Detail Page Fields
  year?: string;
  role?: string;
  heroImage?: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  nextProjectSlug?: string;
};

export const categories: Category[] = [
  "All",
  "Business Branding",
  "Personal Branding",
  "Startup Branding",
  "Entertainment Branding",
];

export const projects: Project[] = [
  {
    id: "1",
    slug: "fintech-dashboard-redesign",
    title: "Fintech Dashboard Redesign",
    client: "Aura Finance",
    categories: ["Business Branding"],
    image:
      "https://img.magnific.com/free-photo/empty-financial-department-office_482257-112016.jpg?semt=ais_hybrid&w=740&q=80",
    year: "2024",
    role: "Lead Product Designer",
    heroImage:
      "https://img.magnific.com/free-photo/empty-financial-department-office_482257-112016.jpg?semt=ais_hybrid&w=1920&q=80",
    overview:
      "Aura Finance approached us to completely reimagine their core analytics dashboard. The legacy system was data-heavy but lacked intuitive hierarchy, causing user drop-off.",
    challenge:
      "The primary challenge was balancing extreme data density with a clean, approachable user interface. Aura's power users needed deep customization, while new users required guided experiences.",
    solution:
      "We developed a modular widget system, allowing users to build their own command centers. By utilizing a minimalist monochromatic palette with strategic accent colors, we reduced cognitive load.",
    nextProjectSlug: "generative-brand-identity",
  },
  {
    id: "2",
    slug: "generative-brand-identity",
    title: "Generative Brand Identity",
    client: "Lumina Edge",
    categories: ["Personal Branding"],
    image:
      "https://img.magnific.com/free-photo/empty-financial-department-office_482257-112016.jpg?semt=ais_hybrid&w=740&q=80",
    year: "2023",
    role: "Brand Strategist",
    heroImage:
      "https://img.magnific.com/free-photo/empty-financial-department-office_482257-112016.jpg?semt=ais_hybrid&w=1920&q=80",
    overview:
      "Lumina Edge needed a dynamic brand identity that could adapt to their generative AI product lines.",
    challenge:
      "Creating a logo and design system that felt both highly technical and deeply human.",
    solution:
      "We created a dynamic, code-driven logo system that subtly changes state based on user interaction.",
    nextProjectSlug: "e-commerce-experience",
  },
  {
    id: "3",
    slug: "e-commerce-experience",
    title: "E-Commerce Experience",
    client: "ShopEase Global",
    categories: ["Startup Branding"],
    image:
      "https://img.magnific.com/free-photo/empty-financial-department-office_482257-112016.jpg?semt=ais_hybrid&w=740&q=80",
    year: "2024",
    role: "UX/UI Designer",
    heroImage:
      "https://img.magnific.com/free-photo/empty-financial-department-office_482257-112016.jpg?semt=ais_hybrid&w=1920&q=80",
    overview:
      "A massive overhaul of the global checkout flow for ShopEase to reduce cart abandonment.",
    challenge:
      "Streamlining a complex multi-step checkout process across 14 different countries and tax jurisdictions.",
    solution:
      "Implemented a seamless one-page checkout experience with predictive address entry and localized payment methods.",
    nextProjectSlug: "predictive-analytics-app",
  },
  {
    id: "4",
    slug: "e-commerce-experience",
    title: "E-Commerce Experience",
    client: "ShopEase Global",
    categories: ["Entertainment Branding"],
    image:
      "https://img.magnific.com/free-photo/empty-financial-department-office_482257-112016.jpg?semt=ais_hybrid&w=740&q=80",
    year: "2024",
    role: "UX/UI Designer",
    heroImage:
      "https://img.magnific.com/free-photo/empty-financial-department-office_482257-112016.jpg?semt=ais_hybrid&w=1920&q=80",
    overview:
      "A massive overhaul of the global checkout flow for ShopEase to reduce cart abandonment.",
    challenge:
      "Streamlining a complex multi-step checkout process across 14 different countries and tax jurisdictions.",
    solution:
      "Implemented a seamless one-page checkout experience with predictive address entry and localized payment methods.",
    nextProjectSlug: "predictive-analytics-app",
  },
  {
    id: "5",
    slug: "e-commerce-experience",
    title: "E-Commerce Experience",
    client: "ShopEase Global",
    categories: ["Entertainment Branding"],
    image:
      "https://img.magnific.com/free-photo/empty-financial-department-office_482257-112016.jpg?semt=ais_hybrid&w=740&q=80",
    year: "2024",
    role: "UX/UI Designer",
    heroImage:
      "https://img.magnific.com/free-photo/empty-financial-department-office_482257-112016.jpg?semt=ais_hybrid&w=1920&q=80",
    overview:
      "A massive overhaul of the global checkout flow for ShopEase to reduce cart abandonment.",
    challenge:
      "Streamlining a complex multi-step checkout process across 14 different countries and tax jurisdictions.",
    solution:
      "Implemented a seamless one-page checkout experience with predictive address entry and localized payment methods.",
    nextProjectSlug: "predictive-analytics-app",
  },
];
