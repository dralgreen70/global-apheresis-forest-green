import type { Metadata } from "next";
import Link from "next/link";
import TreatmentLayout from "@/components/TreatmentLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Longevity Optimization",
  description:
    "Evidence-based therapeutic plasma exchange shown to reduce biological age by 1–3 years. Validated by the Buck Institute across 35 epigenetic clocks.",
};

const researchCards = [
  {
    stat: "1–3 yrs",
    label: "Biological Age Reversal",
    description:
      "Kiprov et al. (2022), published in GeroScience, demonstrated that a series of TPE treatments reduced biological age by 1–3 years as measured by validated Horvath and GrimAge epigenetic clocks.",
  },
  {
    stat: "35",
    label: "Epigenetic Clocks Validated",
    description:
      "The Buck Institute for Research on Aging independently confirmed these findings across 35 distinct epigenetic clocks, published in Aging Cell — one of the most comprehensive validations to date.",
  },
  {
    stat: "50+ yrs",
    label: "Established Safety Record",
    description:
      "Therapeutic plasma exchange has a well-documented safety profile spanning more than 50 years of worldwide clinical use, making it one of the most established procedures in transfusion medicine.",
  },
];

const faqs = [
  {
    question: "What does 'biological age reversal' mean?",
    answer:
      "Biological age is a measure of how old your body is at the cellular and molecular level, as distinct from your chronological age. Epigenetic clocks — which analyze patterns of DNA methylation — can estimate biological age with high accuracy. TPE has been shown to reduce biological age by 1–3 years, meaning your body functions at a measurably younger level after treatment.",
  },
  {
    question: "How is biological age measured?",
    answer:
      "We use validated epigenetic clocks including the Horvath clock and GrimAge to measure biological age before and after treatment. These are considered the gold standard in aging research and are based on patterns of DNA methylation that change predictably with aging.",
  },
  {
    question: "How many treatments are needed for longevity?",
    answer:
      "Longevity patients typically begin with an initial series of TPE treatments over several weeks, then transition to periodic maintenance sessions. The specific protocol is personalized during your consultation based on your biomarkers, health goals, and response to treatment.",
  },
  {
    question: "Am I a candidate for longevity TPE?",
    answer:
      "Good candidates are generally healthy adults ages 40–80 who are interested in optimizing their healthspan and reducing biological age. The best way to determine candidacy is a free consultation with our physicians, who will review your health history and goals.",
  },
];

export default function LongevityOptimizationPage() {
  return (
    <TreatmentLayout
      slug="longevity-optimization"
      label="Longevity"
      title="Longevity Optimization"
      subtitle="Evidence-based therapeutic plasma exchange protocols shown to reduce biological age and optimize healthspan."
    >
      {/* ═══════════ THE SCIENCE ═══════════ */}
      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-[860px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              The Science of Aging
            </p>
            <h2 className="mb-6 font-display text-[clamp(1.6rem,2.5vw,2.2rem)] font-light leading-[1.15] text-forest">
              Why Plasma Holds the Key to Biological Age
            </h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="flex flex-col gap-4 text-[0.95rem] leading-[1.75] text-body">
              <p>
                As we age, our plasma accumulates pro-inflammatory proteins,
                damaged albumin, and aging-associated factors that signal
                deterioration to every cell in the body. These circulating
                molecules are increasingly recognized as primary drivers of
                biological aging.
              </p>
              <p>
                Therapeutic plasma exchange removes this burden in a single
                session, replacing old plasma with purified albumin — one of
                the body&apos;s most potent natural anti-inflammatory and
                antioxidant proteins. The result is a measurable reset of
                the circulating environment, creating conditions that support
                cellular repair and regeneration.
              </p>
              <p>
                Dr. Kiprov&apos;s research, first published in GeroScience in
                2022, demonstrated that TPE measurably reduces biological
                age. A subsequent multi-omics study conducted with the Buck
                Institute for Research on Aging validated and expanded these
                findings across 35 epigenetic clocks.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════════ RESEARCH EVIDENCE ═══════════ */}
      <section className="science-bg-glow relative overflow-hidden bg-forest py-[clamp(80px,12vw,140px)]">
        <div className="relative z-10 mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 text-center font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold">
              Published Research
            </p>
            <h2 className="mb-[clamp(40px,5vw,60px)] text-center font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-cream">
              Clinical Evidence for Age Reversal
            </h2>
          </RevealOnScroll>

          <div className="grid gap-8 md:grid-cols-3">
            {researchCards.map((card, i) => (
              <RevealOnScroll key={i} delay={i as 0 | 1 | 2}>
                <div className="border border-white/8 p-[clamp(24px,3vw,36px)]">
                  <span className="mb-3 block font-display text-[clamp(2rem,4vw,2.8rem)] font-light leading-none text-gold">
                    {card.stat}
                  </span>
                  <h3 className="mb-4 font-display text-[1.1rem] font-normal leading-[1.2] text-cream">
                    {card.label}
                  </h3>
                  <p className="text-[0.82rem] leading-[1.65] text-cream/80">
                    {card.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ WHAT WE MEASURE ═══════════ */}
      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 text-center font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              Biomarker Tracking
            </p>
            <h2 className="mb-[clamp(40px,5vw,60px)] text-center font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-forest">
              What We Measure
            </h2>
          </RevealOnScroll>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Epigenetic Age",
                description:
                  "Horvath clock, GrimAge, and PhenoAge measurements to quantify biological age before, during, and after treatment protocols.",
              },
              {
                title: "Inflammatory Markers",
                description:
                  "CRP, IL-6, TNF-alpha, and other key inflammatory biomarkers that correlate with accelerated aging and chronic disease.",
              },
              {
                title: "Proteomic Profile",
                description:
                  "Analysis of circulating plasma proteins — including pro-aging factors, damaged albumin, and inflammatory mediators — to track the rejuvenating effects of TPE.",
              },
            ].map((item, i) => (
              <RevealOnScroll key={i} delay={i as 0 | 1 | 2}>
                <div className="border border-black/6 bg-ivory p-[clamp(28px,3vw,40px)]">
                  <h3 className="mb-3 font-display text-[1.2rem] font-normal leading-[1.15] text-forest">
                    {item.title}
                  </h3>
                  <p className="text-[0.92rem] leading-[1.7] text-stone">
                    {item.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-[860px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 text-center font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              Common Questions
            </p>
            <h2 className="mb-[clamp(40px,5vw,60px)] text-center font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-forest">
              Frequently Asked Questions
            </h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <FAQAccordion items={faqs} />
          </RevealOnScroll>
        </div>
      </section>
    </TreatmentLayout>
  );
}
