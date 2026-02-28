import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Post-Infectious Syndromes \u2014 PANS/PANDAS & Long COVID",
  description:
    "Therapeutic plasma exchange for PANS/PANDAS, Long COVID, and post-viral syndromes. Remove persistent autoantibodies and inflammatory factors driving ongoing symptoms.",
};

const conditions = [
  {
    title: "PANS / PANDAS",
    tag: "Pediatric & Adult",
    description:
      "Pediatric Acute-onset Neuropsychiatric Syndrome (PANS) and PANDAS are triggered by infections — most commonly streptococcal — that produce autoantibodies attacking the basal ganglia. TPE removes these pathogenic antibodies, offering meaningful symptom improvement for neuropsychiatric symptoms including OCD, tics, anxiety, cognitive regression, and behavioral changes.",
  },
  {
    title: "Long COVID / Post-Acute Sequelae (PASC)",
    tag: "Post-COVID Recovery",
    description:
      "Long COVID is characterized by persistent symptoms — fatigue, brain fog, autonomic dysfunction, and exercise intolerance — lasting weeks to months after acute infection. Growing evidence links these symptoms to persistent inflammatory factors, autoantibodies, and microclots circulating in the plasma. TPE removes these pathogenic factors that conventional treatments cannot address.",
  },
  {
    title: "Post-Viral Chronic Fatigue",
    tag: "Persistent Fatigue",
    description:
      "Many patients develop chronic fatigue and immune dysregulation following viral infections beyond COVID-19 — including EBV, influenza, and other pathogens. TPE addresses the circulating inflammatory mediators and autoantibodies that perpetuate symptoms long after the infection has cleared.",
  },
];

const faqs = [
  {
    question: "How does TPE help with PANS/PANDAS?",
    answer:
      "In PANS/PANDAS, infections trigger the immune system to produce antibodies that cross-react with brain tissue — particularly the basal ganglia. TPE physically removes these pathogenic autoantibodies from the blood, offering meaningful improvement in neuropsychiatric symptoms such as OCD, tics, anxiety, rage episodes, and cognitive regression.",
  },
  {
    question: "Is TPE effective for Long COVID?",
    answer:
      "Emerging research and clinical experience suggest that Long COVID symptoms are driven by persistent inflammatory factors, autoantibodies, and microclot formation in the plasma. TPE removes these pathogenic elements, and patients frequently report improvement in fatigue, brain fog, and autonomic symptoms. While large-scale trials are ongoing, the mechanistic rationale is strong and supported by case series and early clinical data.",
  },
  {
    question: "Can adults have PANS/PANDAS?",
    answer:
      "Yes. While PANS/PANDAS was originally described in children, it is increasingly recognized in adolescents and adults. The underlying mechanism — infection-triggered autoantibodies attacking the brain — can occur at any age. Our physicians evaluate adult patients presenting with acute-onset neuropsychiatric symptoms consistent with PANS.",
  },
  {
    question: "How many treatments are needed for post-infectious syndromes?",
    answer:
      "The number of treatments varies by condition and severity. A personalized protocol is designed during your consultation based on your specific symptoms and biomarkers.",
  },
  {
    question: "My child has been diagnosed with PANDAS. Is TPE appropriate?",
    answer:
      "TPE can be highly effective for PANDAS, particularly in moderate-to-severe cases or when symptoms are acute and disabling. Our physicians have extensive experience with PANDAS patients and will evaluate whether TPE is appropriate based on your child's clinical presentation, lab findings, and prior treatment history. We recommend scheduling a free consultation to discuss your child's specific situation.",
  },
];

export default function PostInfectiousSyndromesPage() {
  return (
    <>
      <PageHero
        label="Post-Infectious"
        title="Post-Infectious Syndromes"
        subtitle="Immunomodulatory therapeutic plasma exchange for PANS/PANDAS, Long COVID, and other post-infectious conditions — clearing the persistent inflammatory factors that conventional treatments cannot address."
      />
      {/* ═══════════ OVERVIEW ═══════════ */}
      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-[860px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              The Challenge
            </p>
            <h2 className="mb-6 font-display text-[clamp(1.6rem,2.5vw,2.2rem)] font-light leading-[1.15] text-forest">
              When Infection Triggers Lasting Immune Dysfunction
            </h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="flex flex-col gap-4 text-[0.95rem] leading-[1.75] text-body">
              <p>
                Infections can trigger persistent immune dysregulation that
                continues long after the original pathogen has been cleared.
                In conditions like PANS/PANDAS and Long COVID, the immune
                system produces autoantibodies and inflammatory mediators that
                circulate in the plasma, attacking the body&apos;s own tissues
                and driving debilitating symptoms.
              </p>
              <p>
                Conventional treatments — antibiotics, anti-inflammatories,
                immunosuppressants — address part of the problem but cannot
                physically remove the pathogenic autoantibodies and
                inflammatory factors already circulating in the blood.
                Therapeutic plasma exchange can.
              </p>
              <p>
                By removing and replacing the plasma, TPE eliminates the
                circulating autoantibodies, pro-inflammatory cytokines,
                microclot-promoting factors, and other pathogenic molecules
                that perpetuate post-infectious syndromes — often providing
                relief when other interventions have failed.
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
              Post-Infectious Conditions Responsive to TPE
            </h2>
          </RevealOnScroll>

          <div className="flex flex-col gap-8">
            {conditions.map((condition, i) => (
              <RevealOnScroll key={i}>
                <div className="border border-black/6 bg-ivory p-[clamp(28px,4vw,48px)]">
                  <div className="mb-4 flex flex-wrap items-center gap-3">
                    <h3 className="font-display text-[clamp(1.2rem,2vw,1.5rem)] font-normal leading-[1.15] text-forest">
                      {condition.title}
                    </h3>
                    <span className="border border-gold/20 px-3 py-0.5 font-body text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-gold-muted">
                      {condition.tag}
                    </span>
                  </div>
                  <p className="text-[0.95rem] leading-[1.75] text-body">
                    {condition.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ KEY FACTS BAND ═══════════ */}
      <section className="science-bg-glow relative overflow-hidden bg-forest py-[clamp(60px,10vw,100px)]">
        <div className="relative z-10 mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <div className="grid grid-cols-3 gap-8">
            {[
              { value: "50+ yrs", label: "Safety Record" },
              { value: "All Ages", label: "Pediatric & Adult" },
              { value: "PANS", label: "PANDAS & Post-Viral" },
            ].map((stat, i) => (
              <RevealOnScroll
                key={i}
                delay={i < 3 ? (i as 0 | 1 | 2) : 0}
              >
                <div className="text-center">
                  <span className="block font-display text-[clamp(1.8rem,3.5vw,2.5rem)] font-light leading-none text-gold">
                    {stat.value}
                  </span>
                  <span className="mt-3 block font-body text-[0.72rem] font-semibold uppercase tracking-[0.12em] text-cream/80">
                    {stat.label}
                  </span>
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
