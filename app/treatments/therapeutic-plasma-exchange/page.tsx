import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TreatmentLayout from "@/components/TreatmentLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Therapeutic Plasma Exchange (TPE)",
  description:
    "Therapeutic plasma exchange removes aging factors, inflammatory proteins, and disease-associated molecules from your blood. Over 50 years of established safety.",
};

const conditionLinks = [
  {
    title: "Longevity Optimization",
    description: "Measurably reduce biological age and optimize healthspan through evidence-based plasma exchange, validated across 35 epigenetic clocks.",
    slug: "longevity-optimization",
  },
  {
    title: "Alzheimer's & Cognitive Decline",
    description: "The landmark AMBAR trial demonstrated TPE slows Alzheimer's progression by 52–71% — with a superior safety profile to monoclonal antibodies.",
    slug: "alzheimers-cognitive-decline",
  },
  {
    title: "Autoimmune Disorders",
    description: "Remove the pathogenic antibodies and inflammatory mediators driving conditions like myasthenia gravis, Guillain-Barré syndrome, and multiple sclerosis.",
    slug: "autoimmune-disorders",
  },
  {
    title: "Post-Infectious Syndromes",
    description: "Address the persistent inflammatory burden underlying Long COVID, PANDAS, and other chronic post-infectious conditions.",
    slug: "post-infectious-syndromes",
  },
];

const researchCards = [
  {
    stat: "52–71%",
    label: "Slowing of Alzheimer's Progression",
    source: "AMBAR Trial — multicenter, randomized, double-blind, placebo-controlled study of 496 patients with mild-to-moderate Alzheimer's disease.",
  },
  {
    stat: "1–3 yrs",
    label: "Biological Age Reversal",
    source: "Kim et al. (2022), GeroScience — first clinical evidence that TPE reduces biological age as measured by Horvath and GrimAge clocks, with Dr. Kiprov as co-author and clinical collaborator.",
  },
  {
    stat: "50+ yrs",
    label: "Established Safety Record",
    source: "Therapeutic plasma exchange has been performed worldwide for over 50 years with a well-documented safety profile across thousands of clinical studies.",
  },
];

const faqs = [
  {
    question: "Is TPE safe?",
    answer:
      "TPE has a well-established 50-year safety record. Serious complications are rare when performed by trained specialists. Dr. Kiprov has personally overseen thousands of procedures, and all treatments at Global Apheresis are administered by board-certified physicians and certified apheresis nurses.",
  },
  {
    question: "How many treatments will I need?",
    answer:
      "This depends on your goals and condition. Longevity patients often begin with an initial series and transition to periodic maintenance. Alzheimer's patients follow AMBAR study-based protocols. A personalized plan is created during your free consultation.",
  },
  {
    question: "Does TPE hurt?",
    answer:
      "TPE requires two small IV insertions, but our highly experienced apheresis nurses and lidocaine minimize discomfort. Once the IVs are placed, the procedure itself is completely comfortable, and many patients read, watch a show, or simply relax during their session.",
  },
  {
    question: "Is TPE covered by insurance?",
    answer:
      "Coverage varies by condition and insurer. TPE for longevity and health optimization is typically not covered by insurance. However, certain medical indications may qualify for reimbursement. We recommend contacting your insurance provider, and our team is happy to help clarify your options during your consultation.",
  },
];

export default function TherapeuticPlasmaExchangePage() {
  return (
    <TreatmentLayout
      slug="therapeutic-plasma-exchange"
      label="Core Treatment"
      title="Therapeutic Plasma Exchange"
      subtitle="Our flagship treatment — a clinically validated procedure that removes aging factors, inflammatory proteins, and disease-associated molecules from your blood."
    >
      {/* ═══════════ WHAT IS TPE ═══════════ */}
      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <div className="grid gap-[clamp(40px,6vw,80px)] md:grid-cols-2 md:items-stretch">
            <RevealOnScroll>
              <div>
                <p className="mb-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
                  Understanding TPE
                </p>
                <h2 className="mb-6 font-display text-[clamp(1.6rem,2.5vw,2.2rem)] font-light leading-[1.15] text-forest">
                  What Is Therapeutic Plasma Exchange?
                </h2>
                <div className="flex flex-col gap-4 text-[0.95rem] leading-[1.75] text-body">
                  <p>
                    Therapeutic Plasma Exchange (TPE) is a medical procedure in
                    which blood is drawn from the patient and passed through an
                    advanced apheresis machine. The machine separates plasma —
                    the liquid portion of blood that carries proteins,
                    antibodies, inflammatory factors, and aging-related
                    molecules — from the cellular components.
                  </p>
                  <p>
                    The old plasma is removed and replaced with purified albumin
                    solution, while all blood cells are returned to the patient.
                    This process effectively removes harmful or aging-associated
                    proteins and replaces them with clean albumin — the body's
                    most potent natural anti-inflammatory and antioxidant
                    protein.
                  </p>
                  <p>
                    TPE has been performed safely worldwide for over 50 years and
                    is the foundation of all treatment protocols at Global
                    Apheresis.
                  </p>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={1} className="h-full">
              <div className="relative h-full mx-auto max-w-[420px] overflow-hidden">
                <Image
                  src="/images/Optia Apheresis Machine.avif"
                  alt="Apheresis machine used for therapeutic plasma exchange"
                  fill
                  className="object-cover object-[center_60%]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════ CONDITIONS TREATED ═══════════ */}
      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 text-center font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              Applications
            </p>
            <h2 className="mb-[clamp(40px,5vw,60px)] text-center font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-forest">
              Conditions We Treat with TPE
            </h2>
          </RevealOnScroll>

          <div className="grid gap-8 md:grid-cols-2">
            {conditionLinks.map((condition, i) => (
              <RevealOnScroll
                key={condition.slug}
                delay={i < 2 ? (i as 0 | 1) : 0}
              >
                <Link
                  href={`/treatments/${condition.slug}`}
                  className="condition-card block border border-black/6 bg-ivory p-[clamp(28px,3vw,40px)]"
                >
                  <h3 className="mb-3 font-display text-[1.2rem] font-normal leading-[1.15] text-forest">
                    {condition.title}
                  </h3>
                  <p className="mb-4 text-[0.92rem] leading-[1.7] text-stone">
                    {condition.description}
                  </p>
                  <span className="condition-link-arrow inline-flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.1em] text-gold-muted">
                    Learn More <span>&rarr;</span>
                  </span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ RESEARCH EVIDENCE ═══════════ */}
      <section className="science-bg-glow relative overflow-hidden bg-forest py-[clamp(80px,12vw,140px)]">
        <div className="relative z-10 mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 text-center font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold">
              The Evidence
            </p>
            <h2 className="mb-[clamp(40px,5vw,60px)] text-center font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-cream">
              Clinically Proven Results
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
                    {card.source}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ WHAT TO EXPECT ═══════════ */}
      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-[860px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 text-center font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              Your Visit
            </p>
            <h2 className="mb-[clamp(40px,5vw,60px)] text-center font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-forest">
              What to Expect
            </h2>
          </RevealOnScroll>

          <div className="flex flex-col gap-8">
            {[
              {
                step: "01",
                title: "Arrive at Our Clinic",
                text: "Check in at our Mill Valley clinic at 655 Redwood Highway, Suite 370. Our team will welcome you and prepare you for treatment in a comfortable, private setting.",
              },
              {
                step: "02",
                title: "Vascular Access",
                text: "A certified apheresis nurse establishes peripheral IV access. The procedure uses two lines — one to draw blood and one to return it.",
              },
              {
                step: "03",
                title: "Plasma Separation",
                text: "Your blood flows through the apheresis machine, which gently separates plasma from blood cells using centrifugal force. The process is continuous and comfortable.",
              },
              {
                step: "04",
                title: "Albumin Replacement",
                text: "Your old plasma — carrying inflammatory factors, aging proteins, and disease-associated molecules — is discarded and replaced with purified albumin solution.",
              },
              {
                step: "05",
                title: "Completion & Recovery",
                text: "Throughout the procedure, your blood cells are continuously returned to your body along with purified albumin. The entire session takes 2–3 hours, after which virtually all patients feel well enough to drive themselves home.",
              },
            ].map((item, i) => (
              <RevealOnScroll key={i}>
                <div className="flex gap-6">
                  <span className="shrink-0 font-display text-[1.8rem] font-light leading-none text-gold/30">
                    {item.step}
                  </span>
                  <div className="border-t border-gold/15 pt-4">
                    <h3 className="mb-2 font-display text-[1.15rem] font-normal leading-[1.2] text-forest">
                      {item.title}
                    </h3>
                    <p className="text-[0.92rem] leading-[1.7] text-stone">
                      {item.text}
                    </p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FAQ ═══════════ */}
      <section className="section-pad bg-cream">
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
