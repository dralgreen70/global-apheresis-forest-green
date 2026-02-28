import type { Metadata } from "next";
import TreatmentLayout from "@/components/TreatmentLayout";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Super Albumin",
  description:
    "A proprietary IV infusion therapy delivering enhanced albumin enriched with vitamins, antioxidants, and therapeutic cofactors. Coming soon.",
};

export default function SuperAlbuminPage() {
  return (
    <TreatmentLayout
      slug="super-albumin"
      label="Next Generation"
      title="Super Albumin"
      subtitle="A proprietary IV infusion therapy delivering enhanced albumin enriched with vitamins, antioxidants, and therapeutic cofactors."
      comingSoon
    >
      {/* ═══════════ ABOUT THIS TREATMENT ═══════════ */}
      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-[860px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              The Innovation
            </p>
            <h2 className="mb-6 font-display text-[clamp(1.6rem,2.5vw,2.2rem)] font-light leading-[1.15] text-forest">
              A New Class of IV Therapy
            </h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="flex flex-col gap-4 text-[0.95rem] leading-[1.75] text-body">
              <p>
                Super Albumin is a proprietary IV infusion therapy — not a plasma
                exchange procedure — delivering a specially enhanced albumin
                solution enriched with vitamins, antioxidants, and therapeutic
                cofactors directly into the bloodstream. It can be used as a
                standalone treatment for its potent anti-inflammatory and
                antioxidant properties, or administered between TPE sessions as a
                bridge therapy to maintain and amplify treatment benefits. It is
                not used as a replacement fluid during plasma exchange.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════════ BENEFITS ═══════════ */}
      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 text-center font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              Potential Benefits
            </p>
            <h2 className="mb-[clamp(40px,5vw,60px)] text-center font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-forest">
              Why Enhanced Albumin Matters
            </h2>
          </RevealOnScroll>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Enhanced Anti-Inflammatory Action",
                description:
                  "Additional antioxidants and anti-inflammatory cofactors may amplify albumin's natural ability to neutralize oxidative stress and reduce systemic inflammation.",
              },
              {
                title: "Improved Nutrient Delivery",
                description:
                  "Albumin is the body's primary transport protein. Enhanced formulations can optimize the delivery of therapeutic vitamins and cofactors directly into the circulation.",
              },
              {
                title: "Complements TPE",
                description:
                  "Super Albumin works alongside therapeutic plasma exchange as a bridge therapy between sessions — maintaining and extending the anti-inflammatory benefits of treatment without replacing plasma during the procedure itself.",
              },
            ].map((item, i) => (
              <RevealOnScroll key={i} delay={i as 0 | 1 | 2}>
                <div className="h-full flex flex-col border border-black/6 bg-ivory p-[clamp(24px,3vw,36px)]">
                  <h3 className="mb-3 font-display text-[1.15rem] font-normal leading-[1.2] text-forest">
                    {item.title}
                  </h3>
                  <p className="text-[0.88rem] leading-[1.7] text-stone">
                    {item.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>
    </TreatmentLayout>
  );
}
