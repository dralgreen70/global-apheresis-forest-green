import type { Metadata } from "next";
import TreatmentLayout from "@/components/TreatmentLayout";
import RevealOnScroll from "@/components/RevealOnScroll";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Cytoreduction & Stem Cell Collections",
  description:
    "Specialized apheresis for white blood cell reduction and peripheral blood stem cell collection by board-certified specialists.",
};

const services = [
  {
    title: "Leukapheresis (White Blood Cell Reduction)",
    description:
      "Selective removal of excess white blood cells in patients with elevated WBC counts. Global Apheresis offers leukapheresis on an outpatient basis for select non-emergency indications, providing a targeted approach to white blood cell reduction outside of the acute hospital setting.",
  },
  {
    title: "Peripheral Blood Stem Cell Collection",
    description:
      "Global Apheresis has the clinical infrastructure to support peripheral blood stem cell collection and is actively developing partnerships with transplant programs and biotech companies. Contact us to discuss potential collaboration.",
  },
];

const faqs = [
  {
    question: "What is cytoreduction?",
    answer:
      "Cytoreduction refers to the therapeutic reduction of specific blood cell populations — such as white blood cells or platelets — when they are dangerously elevated. Apheresis-based cytoreduction is often faster and more targeted than medication alone, making it critical in acute situations.",
  },
  {
    question: "How are stem cells collected with apheresis?",
    answer:
      "After stem cells are mobilized into the peripheral blood using growth factors, the patient undergoes apheresis. The machine draws blood, selectively collects the stem cells (identified by CD34+ markers), and returns all other blood components. The process typically takes 3–5 hours and may require one or more sessions.",
  },
  {
    question: "Is this different from therapeutic plasma exchange?",
    answer:
      "Yes. While TPE exchanges the liquid portion of blood (plasma), cytoreduction and stem cell collection target specific cellular components — white blood cells, platelets, or stem cells. Both procedures use apheresis technology but serve different clinical purposes.",
  },
  {
    question: "Who needs these procedures?",
    answer:
      "These specialized apheresis procedures are typically indicated for patients with specific hematologic or infectious conditions, or those preparing for stem cell transplantation. Unlike many centers, Global Apheresis evaluates each patient individually. If you or your physician believe one of these procedures may be appropriate for your situation, we welcome you to reach out directly for a consultation — no referral required.",
  },
];

export default function CytoreductionStemCellPage() {
  return (
    <TreatmentLayout
      slug="cytoreduction-stem-cell"
      label="Hematology"
      title="Cytoreduction & Stem Cell Collections"
      subtitle="Specialized apheresis for white blood cell reduction and stem cell harvesting by board-certified specialists."
    >
      {/* ═══════════ OVERVIEW ═══════════ */}
      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-[860px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              Specialized Apheresis
            </p>
            <h2 className="mb-6 font-display text-[clamp(1.6rem,2.5vw,2.2rem)] font-light leading-[1.15] text-forest">
              Targeted Cellular Therapies
            </h2>
          </RevealOnScroll>
          <RevealOnScroll>
            <div className="flex flex-col gap-4 text-[0.95rem] leading-[1.75] text-body">
              <p>
                Beyond therapeutic plasma exchange, apheresis technology enables
                the selective removal or collection of specific cellular
                components from the blood. These procedures are critical in
                hematologic emergencies, transplant preparation, and the
                management of myeloproliferative disorders.
              </p>
              <p>
                At Global Apheresis, all cytoreduction and stem cell collection
                procedures are performed by board-certified physicians with
                specialized training in therapeutic apheresis, using advanced
                apheresis equipment that allows precise cellular separation
                and collection.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════════ SERVICES ═══════════ */}
      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 text-center font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              Procedures
            </p>
            <h2 className="mb-[clamp(40px,5vw,60px)] text-center font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-forest">
              What We Offer
            </h2>
          </RevealOnScroll>

          <div className="flex flex-col gap-8">
            {services.map((service, i) => (
              <RevealOnScroll key={i}>
                <div className="border border-black/6 bg-ivory p-[clamp(28px,4vw,48px)]">
                  <h3 className="mb-3 font-display text-[clamp(1.2rem,2vw,1.4rem)] font-normal leading-[1.15] text-forest">
                    {service.title}
                  </h3>
                  <p className="text-[0.95rem] leading-[1.75] text-body">
                    {service.description}
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
