import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import { treatments } from "@/lib/treatments";

export const metadata: Metadata = {
  title: "Treatments",
  description:
    "Comprehensive therapeutic apheresis treatments including plasma exchange for longevity, Alzheimer's, autoimmune disorders, PANS/PANDAS, Long COVID, and more.",
};

const stats = [
  { value: "52–71%", label: "Slowing of Alzheimer's Progression (AMBAR)" },
  { value: "1–3 yrs", label: "Biological Age Reversal (GeroScience 2022)" },
  { value: "50+", label: "Years of Established Safety Data" },
];

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        label="What We Offer"
        title="Comprehensive Therapeutic Apheresis"
        subtitle="Evidence-based treatments for longevity, neurological conditions, and immune health — led by the pioneers of the field."
      />

      {/* ═══════════ TREATMENT CARDS ═══════════ */}
      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {treatments.map((t, i) => (
              <RevealOnScroll
                key={t.slug}
                delay={i < 3 ? (i as 0 | 1 | 2) : 0}
              >
                <Link
                  href={
                    t.comingSoon ? `/treatments/${t.slug}` : `/treatments/${t.slug}`
                  }
                  className="treatment-card group relative flex h-full flex-col border border-black/6 bg-cream p-[clamp(28px,3vw,40px)]"
                >
                  {t.comingSoon && (
                    <span className="badge-coming-soon mb-5 self-start">
                      Coming Soon
                    </span>
                  )}
                  <h3 className="mb-3 font-display text-[1.3rem] font-normal leading-[1.15] text-forest">
                    {t.title}
                  </h3>
                  <p className="mb-5 flex-1 text-[0.92rem] leading-[1.7] text-stone">
                    {t.description}
                  </p>
                  {/* Tags */}
                  <div className="mb-5 flex flex-wrap gap-1.5">
                    {t.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-gold/15 px-2.5 py-0.5 font-body text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-gold-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="condition-link-arrow inline-flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.1em] text-gold-muted">
                    {t.comingSoon ? "Learn More" : "View Treatment"}{" "}
                    <span>&rarr;</span>
                  </span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ RESEARCH CALLOUT ═══════════ */}
      <section className="science-bg-glow relative overflow-hidden bg-forest py-[clamp(80px,12vw,140px)]">
        <div className="relative z-10 mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 text-center font-body text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-gold">
              The Evidence
            </p>
            <h2 className="mb-[clamp(40px,5vw,60px)] text-center font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-cream">
              Backed by Clinical Research
            </h2>
          </RevealOnScroll>

          <div className="grid gap-8 md:grid-cols-3">
            {stats.map((stat, i) => (
              <RevealOnScroll key={i} delay={i as 0 | 1 | 2}>
                <div className="border border-white/8 p-[clamp(24px,3vw,36px)] text-center">
                  <span className="mb-3 block font-display text-[clamp(2rem,4vw,3rem)] font-light leading-none text-gold">
                    {stat.value}
                  </span>
                  <span className="block font-body text-[0.78rem] leading-[1.5] text-cream/50">
                    {stat.label}
                  </span>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA BAND ═══════════ */}
      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-[700px] px-[clamp(24px,5vw,48px)] text-center">
          <RevealOnScroll>
            <h2 className="mb-6 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-forest">
              Not Sure Where to Start?
            </h2>
            <p className="mx-auto mb-10 max-w-[500px] text-[1rem] leading-[1.75] text-stone">
              Schedule a free consultation with our physicians. We&apos;ll help
              you understand your options and determine which treatment is right
              for you.
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
