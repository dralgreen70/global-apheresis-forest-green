export interface Treatment {
  title: string;
  slug: string;
  description: string;
  tags: string[];
  comingSoon?: boolean;
}

export const treatments: Treatment[] = [
  {
    title: "Therapeutic Plasma Exchange",
    slug: "therapeutic-plasma-exchange",
    description:
      "Our signature treatment removes aging plasma proteins, pro-inflammatory factors, and disease-associated molecules — replacing them with purified albumin. Clinically shown to reduce biological age and slow Alzheimer\u2019s progression.",
    tags: ["Longevity", "Alzheimer\u2019s", "Long COVID", "Autoimmune", "PANDAS"],
  },
  {
    title: "Cytoreduction & Stem Cell Collections",
    slug: "cytoreduction-stem-cell",
    description:
      "Specialized apheresis for white blood cell reduction and stem cell harvesting by board-certified specialists using advanced apheresis technology.",
    tags: ["Hematology", "Transplant Support", "Stem Cells"],
  },
  {
    title: "Lipid Apheresis",
    slug: "lipid-apheresis",
    description:
      "Targeted removal of LDL cholesterol and lipoprotein(a) beyond what medications alone can achieve. Ideal for familial hypercholesterolemia and elevated cardiovascular risk.",
    tags: ["Cardiovascular", "Cholesterol", "Lp(a)"],
    comingSoon: true,
  },
  {
    title: "Super Albumin",
    slug: "super-albumin",
    description:
      "A proprietary IV infusion therapy delivering enhanced albumin enriched with vitamins, antioxidants, and therapeutic cofactors — designed as a standalone treatment or bridge therapy between TPE sessions.",
    tags: ["Longevity", "Anti-Inflammatory", "Antioxidant"],
    comingSoon: true,
  },
];
