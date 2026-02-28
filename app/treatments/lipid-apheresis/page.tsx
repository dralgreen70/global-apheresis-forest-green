import type { Metadata } from "next";
import TreatmentLayout from "@/components/TreatmentLayout";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Lipid Apheresis",
  description:
    "Targeted removal of LDL cholesterol and lipoprotein(a) for patients with familial hypercholesterolemia and elevated Lp(a). Coming soon to Global Apheresis.",
};

export default function LipidApheresisPage() {
  return (
    <TreatmentLayout
      slug="lipid-apheresis"
      label="Cardiovascular"
      title="Lipid Apheresis"
      subtitle="Targeted removal of LDL cholesterol and lipoprotein(a) beyond what medications alone can achieve."
      comingSoon
    >
      {/* ═══════════ ABOUT THIS TREATMENT ═══════════ */}
      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-[860px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              About This Treatment
            </p>
            <h2 className="mb-6 font-display text-[clamp(1.6rem,2.5vw,2.2rem)] font-light leading-[1.15] text-forest">
              A New Approach to Cardiovascular Risk
            </h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="flex flex-col gap-4 text-[0.95rem] leading-[1.75] text-body">
              <p>
                Lipid apheresis is a specialized procedure that selectively
                removes LDL cholesterol and lipoprotein(a) — or Lp(a) — from
                the blood. For patients with familial hypercholesterolemia,
                dangerously elevated Lp(a), or cardiovascular risk that cannot
                be adequately managed with statins and other medications alone,
                lipid apheresis offers a powerful therapeutic option.
              </p>
              <p>
                Unlike therapeutic plasma exchange, which replaces the entire
                plasma volume, lipid apheresis uses selective adsorption
                technology to target and remove specific lipid particles while
                returning the remainder of the plasma to the patient. This
                allows for highly targeted cholesterol reduction in a single
                session.
              </p>
              <p>
                Global Apheresis is developing a lipid apheresis program that
                will bring this advanced treatment to patients in the Bay Area
                and beyond. Contact us to learn more and be the first to know
                when this service becomes available.
              </p>
              <p>
                In addition, lipid apheresis has shown promise in the treatment
                of Focal Segmental Glomerulosclerosis (FSGS) — a kidney disease
                driven in part by circulating permeability factors. By removing
                these pathogenic molecules, lipid apheresis may help reduce
                proteinuria and slow disease progression. We are actively
                developing protocols for FSGS alongside our cardiovascular
                lipid apheresis program.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════════ WHO BENEFITS ═══════════ */}
      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 text-center font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              Ideal Candidates
            </p>
            <h2 className="mb-[clamp(40px,5vw,60px)] text-center font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-forest">
              Who May Benefit
            </h2>
          </RevealOnScroll>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Familial Hypercholesterolemia",
                description:
                  "Patients with genetic conditions causing extremely elevated LDL that is resistant to maximum-dose statin therapy.",
              },
              {
                title: "Elevated Lipoprotein(a)",
                description:
                  "Lp(a) is a genetically determined cardiovascular risk factor with no FDA-approved medication. Lipid apheresis is the only established method to significantly reduce Lp(a) levels.",
              },
              {
                title: "Statin-Intolerant Patients",
                description:
                  "Patients who cannot tolerate statin medications due to side effects but require aggressive LDL reduction for cardiovascular risk management.",
              },
              {
                title: "FSGS & Kidney Disease",
                description:
                  "Patients with Focal Segmental Glomerulosclerosis (FSGS) driven by circulating permeability factors. Lipid apheresis may reduce proteinuria and slow disease progression.",
              },
            ].map((item, i) => (
              <RevealOnScroll key={i} delay={i as 0 | 1 | 2}>
                <div className="border border-black/6 bg-ivory p-[clamp(24px,3vw,36px)]">
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
