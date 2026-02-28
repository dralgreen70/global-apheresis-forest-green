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
    title: "Longevity Optimization",
    slug: "longevity-optimization",
    description:
      "TPE protocols shown to reduce biological age by 1–3 years, measured by validated epigenetic clocks. Published in GeroScience and validated by the Buck Institute for Research on Aging.",
    tags: ["Anti-Aging", "Epigenetic Clocks", "Healthspan"],
  },
  {
    title: "Alzheimer\u2019s & Cognitive Decline",
    slug: "alzheimers-cognitive-decline",
    description:
      "Evidence-based plasma exchange with albumin replacement, validated in the landmark AMBAR trial to slow cognitive and functional decline by 52–71% — with a vastly superior safety profile to monoclonal antibodies.",
    tags: ["AMBAR Trial", "Cognitive Health", "Neurodegeneration"],
  },
  {
    title: "Autoimmune Disorders",
    slug: "autoimmune-disorders",
    description:
      "Comprehensive therapeutic apheresis for autoimmune and inflammatory conditions, removing the circulating antibodies and mediators that drive disease.",
    tags: ["Autoimmune", "Myasthenia Gravis", "Guillain-Barré"],
  },
  {
    title: "Post-Infectious Syndromes",
    slug: "post-infectious-syndromes",
    description:
      "Immunomodulatory therapeutic plasma exchange protocols for Long COVID and other post-acute infectious syndromes, clearing persistent inflammatory factors that conventional treatments cannot address.",
    tags: ["Long COVID", "Post-Acute", "Immunomodulation"],
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
