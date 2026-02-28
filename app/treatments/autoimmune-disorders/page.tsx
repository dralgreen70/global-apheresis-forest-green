import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Autoimmune Disorders",
  description:
    "Therapeutic plasma exchange for autoimmune disorders including myasthenia gravis, Guillain-Barr\u00e9, CIDP, MS, NMO, and autoimmune encephalitis.",
};

const conditions = [
  {
    title: "Myasthenia Gravis",
    description:
      "TPE rapidly removes acetylcholine receptor antibodies that cause progressive muscle weakness, providing relief when conventional immunosuppression is inadequate or too slow to act.",
  },
  {
    title: "Guillain-Barré Syndrome",
    description:
      "Therapeutic plasma exchange is a first-line treatment for GBS, removing the anti-ganglioside antibodies that attack peripheral nerves and cause ascending paralysis.",
  },
  {
    title: "Chronic Inflammatory Demyelinating Polyneuropathy (CIDP)",
    description:
      "TPE removes the pathogenic antibodies driving chronic nerve demyelination, offering an alternative or adjunct to IVIG therapy for patients with CIDP.",
  },
  {
    title: "Multiple Sclerosis (Acute Relapses)",
    description:
      "For severe MS relapses that are refractory to high-dose corticosteroids, TPE can remove the inflammatory mediators and antibodies driving acute demyelination.",
  },
  {
    title: "Neuromyelitis Optica (NMO)",
    description:
      "TPE targets aquaporin-4 antibodies, the primary driver of NMO, reducing the risk of devastating optic neuritis and transverse myelitis attacks.",
  },
  {
    title: "Autoimmune Encephalitis",
    description:
      "Removal of pathogenic antibodies — including anti-NMDA receptor antibodies — that attack brain tissue, causing seizures, psychiatric symptoms, and cognitive decline.",
  },
];

const faqs = [
  {
    question: "How does TPE treat autoimmune disorders?",
    answer:
      "In autoimmune disorders, the immune system produces antibodies that mistakenly attack the body's own tissues. TPE physically removes these pathogenic antibodies — along with immune complexes and inflammatory mediators — from the blood. This provides rapid symptomatic relief while other immunomodulatory therapies take effect.",
  },
  {
    question: "How quickly does TPE work for autoimmune conditions?",
    answer:
      "Many patients experience improvement within days of their first treatment. Because TPE directly removes circulating pathogenic antibodies rather than waiting for medications to suppress antibody production, the onset of relief is typically much faster than with conventional immunosuppressive therapy alone.",
  },
  {
    question: "Is TPE used alone or with other treatments?",
    answer:
      "TPE is often used in combination with immunosuppressive medications, corticosteroids, or IVIG depending on the specific condition. It can serve as a first-line treatment in acute crises or as an adjunct when conventional therapies provide insufficient control.",
  },
  {
    question: "Does insurance cover TPE for autoimmune conditions?",
    answer:
      "TPE for many autoimmune neurological conditions — including myasthenia gravis, Guillain-Barré syndrome, and CIDP — is an established, guideline-supported therapy that may be covered by insurance depending on your plan. All costs and coverage options are discussed during your free consultation.",
  },
];

export default function AutoimmuneDisordersPage() {
  return (
    <>
      <PageHero
        label="Autoimmune"
        title="Autoimmune Disorders"
        subtitle="Removing the circulating antibodies and inflammatory mediators that drive autoimmune disease — offering rapid relief when conventional treatments fall short."
      />
      {/* ═══════════ HOW TPE HELPS ═══════════ */}
      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-[860px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              The Mechanism
            </p>
            <h2 className="mb-6 font-display text-[clamp(1.6rem,2.5vw,2.2rem)] font-light leading-[1.15] text-forest">
              How Plasma Exchange Treats Autoimmune Disease
            </h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="flex flex-col gap-4 text-[0.95rem] leading-[1.75] text-body">
              <p>
                In autoimmune disorders, the immune system produces antibodies
                that mistakenly attack the body&apos;s own tissues — nerves,
                muscles, the blood-brain barrier, and other vital structures.
                These pathogenic antibodies circulate in the plasma, continuously
                driving inflammation and tissue damage.
              </p>
              <p>
                Therapeutic plasma exchange directly removes these antibodies,
                immune complexes, and inflammatory cytokines from the blood.
                Unlike immunosuppressive medications — which may take weeks or
                months to reduce antibody levels — TPE provides immediate
                reduction, offering rapid symptomatic relief in acute crises
                and improved disease control in chronic conditions.
              </p>
              <p>
                TPE is recognized as a first-line or second-line treatment
                for numerous autoimmune conditions by the American Society
                for Apheresis (ASFA), and Dr. Kiprov — a founding member of
                ASFA — has over 40 years of experience treating these
                conditions with therapeutic apheresis.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════════ CONDITIONS ═══════════ */}
      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 text-center font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              Conditions We Treat
            </p>
            <h2 className="mb-[clamp(40px,5vw,60px)] text-center font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-forest">
              Autoimmune Conditions Responsive to TPE
            </h2>
          </RevealOnScroll>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {conditions.map((condition, i) => (
              <RevealOnScroll
                key={i}
                delay={i < 3 ? (i as 0 | 1 | 2) : 0}
              >
                <div className="h-full flex flex-col border border-black/6 bg-ivory p-[clamp(24px,3vw,36px)]">
                  <h3 className="mb-3 font-display text-[1.15rem] font-normal leading-[1.2] text-forest">
                    {condition.title}
                  </h3>
                  <p className="text-[0.88rem] leading-[1.7] text-stone">
                    {condition.description}
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
      {/* ═══════════ CTA BAND ═══════════ */}
      <section className="science-bg-glow relative overflow-hidden bg-forest py-[clamp(60px,10vw,120px)]">
        <div className="relative z-10 mx-auto max-w-[700px] px-[clamp(24px,5vw,48px)] text-center">
          <RevealOnScroll>
            <h2 className="mb-6 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-cream">
              Ready to Begin?
            </h2>
            <p className="mx-auto mb-10 max-w-[500px] text-[1rem] leading-[1.75] text-cream/80">
              Schedule a free consultation with our physicians to discuss whether this treatment is right for you.
            </p>
            <Link
              href="/free-consultation"
              className="group inline-flex items-center gap-2.5 border border-gold bg-gold px-9 py-4 font-body text-[0.8rem] font-medium uppercase tracking-[0.1em] text-forest transition-all duration-400 hover:bg-gold-light"
            >
              Book a Free Consultation{" "}
              <span className="btn-arrow-animate">&rarr;</span>
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
