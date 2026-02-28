import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Alzheimer\u2019s & Cognitive Decline",
  description:
    "The AMBAR trial demonstrated 52\u201371% slowing of Alzheimer\u2019s progression with therapeutic plasma exchange. A safer alternative to monoclonal antibodies with no ARIA risk.",
};

const faqs = [
  {
    question: "How many treatments are needed?",
    answer:
      "Alzheimer's patients typically follow protocols based on the AMBAR study design. The specific number and frequency of treatments is personalized during your consultation based on disease stage, biomarkers, and clinical response.",
  },
  {
    question: "Can TPE reverse Alzheimer's symptoms?",
    answer:
      "The primary goal of TPE for Alzheimer's is slowing the progression of cognitive and functional decline, not reversal \u2014 and the AMBAR trial demonstrated this meaningfully. That said, in the mild Alzheimer's subgroup, some patients showed measurable improvement on global disease scales, suggesting that earlier intervention may offer the greatest benefit. Every patient is different, and outcomes depend on disease stage, overall health, and treatment consistency.",
  },
  {
    question: "Is TPE covered by insurance for Alzheimer's?",
    answer:
      "Coverage for TPE in Alzheimer\u2019s disease varies by insurer and individual circumstances. While TPE is an established medical procedure covered for many conditions, its use in Alzheimer\u2019s is still emerging. Our team can help you understand your options during your free consultation.",
  },
  {
    question: "Who is a good candidate for TPE?",
    answer:
      "Patients with mild-to-moderate Alzheimer\u2019s disease generally have the most to gain, as the AMBAR trial demonstrated the greatest benefit in this group. However, we evaluate each patient individually based on disease stage, overall health, and treatment goals. A free consultation with our physicians is the best way to determine candidacy.",
  },
];

export default function AlzheimersCognitiveDeclinePage() {
  return (
    <>
      <PageHero
        label="Cognitive Health"
        title="Alzheimer's & Cognitive Decline"
        subtitle="Evidence-based plasma exchange with albumin replacement, validated in the landmark AMBAR trial to slow cognitive and functional decline by 52–71%."
      />

      {/* ═══════════ THE AMBAR TRIAL ═══════════ */}
      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-[860px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              Landmark Research
            </p>
            <h2 className="mb-6 font-display text-[clamp(1.6rem,2.5vw,2.2rem)] font-light leading-[1.15] text-forest">
              The AMBAR Trial: A Breakthrough for Alzheimer&apos;s
            </h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="flex flex-col gap-4 text-[0.95rem] leading-[1.75] text-body">
              <p>
                The AMBAR (Alzheimer&apos;s Management By Albumin Replacement)
                trial is a landmark multicenter, randomized, double-blind,
                placebo-controlled study. This study enrolled 496 patients
                with mild-to-moderate Alzheimer&apos;s disease across sites
                in the United States and Europe.
              </p>
              <p>
                The results were striking: patients receiving therapeutic
                plasma exchange with albumin replacement showed 52–71%
                slowing of cognitive and functional decline compared to
                placebo. The treatment was well-tolerated with a safety
                profile consistent with over 50 years of TPE clinical use.
              </p>
              <p>
                The AMBAR trial suggests that removing aging and inflammatory
                plasma proteins — including amyloid-beta, tau fragments, and
                pro-inflammatory cytokines — and replacing them with purified
                albumin provides meaningful clinical benefit for Alzheimer&apos;s
                patients, particularly in the early-to-moderate stages of
                disease.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════════ KEY RESULTS ═══════════ */}
      <section className="science-bg-glow relative overflow-hidden bg-forest py-[clamp(80px,12vw,140px)]">
        <div className="relative z-10 mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 text-center font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold">
              AMBAR Results
            </p>
            <h2 className="mb-[clamp(40px,5vw,60px)] text-center font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-cream">
              Clinical Evidence
            </h2>
          </RevealOnScroll>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                stat: "52–71%",
                label: "Slowing of Decline",
                description:
                  "Cognitive and functional decline was slowed by 52–71% in the treatment group compared to placebo across validated assessment scales.",
              },
              {
                stat: "496",
                label: "Patients Enrolled",
                description:
                  "Multicenter, randomized, double-blind, placebo-controlled trial across sites in the United States and Europe.",
              },
              {
                stat: "No ARIA",
                label: "Superior Safety Profile",
                description:
                  "Unlike monoclonal antibody treatments, TPE carries no risk of ARIA (brain swelling and microbleeds) — serious adverse events that have limited the adoption of newer Alzheimer's drugs.",
              },
            ].map((card, i) => (
              <RevealOnScroll key={i} delay={i as 0 | 1 | 2}>
                <div className="h-full flex flex-col border border-white/8 p-[clamp(24px,3vw,36px)]">
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

      {/* ═══════════ TPE vs MONOCLONAL ANTIBODIES ═══════════ */}
      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-[860px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              Treatment Comparison
            </p>
            <h2 className="mb-6 font-display text-[clamp(1.6rem,2.5vw,2.2rem)] font-light leading-[1.15] text-forest">
              How TPE Compares to Other Alzheimer&apos;s Treatments
            </h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="flex flex-col gap-4 text-[0.95rem] leading-[1.75] text-body">
              <p>
                FDA-approved monoclonal antibody treatments such as lecanemab
                and donanemab represent meaningful progress in Alzheimer&apos;s
                care. Like any treatment, they carry risks — most notably
                amyloid-related imaging abnormalities (ARIA), which include
                brain swelling and microbleeds in a subset of patients.
              </p>
              <p>
                Therapeutic plasma exchange offers a fundamentally different
                approach. Rather than targeting a single protein, TPE removes
                the full spectrum of aging and inflammatory factors from the
                blood — including amyloid-beta, tau, and pro-inflammatory
                cytokines — while replacing them with purified albumin.
              </p>
              <p>
                The AMBAR trial demonstrated comparable or superior efficacy
                in slowing decline, with a safety profile backed by over 50
                years of clinical use and zero risk of ARIA.
              </p>
              <p>
                While TPE for Alzheimer&apos;s is not yet a mainstream first-line
                recommendation, the AMBAR trial results are among the most
                compelling clinical data in the field. For patients seeking an
                evidence-based option with a decades-long safety record, it
                represents a meaningful path forward — particularly for those
                who are not good candidates for monoclonal antibody therapies
                or who want to pursue treatment alongside conventional care.
              </p>
            </div>
          </RevealOnScroll>
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
              Schedule a free consultation with our physicians to discuss
              whether this treatment is right for you.
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
