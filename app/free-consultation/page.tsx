import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Book a Free Consultation",
  description:
    "Schedule a free consultation with Global Apheresis. Speak with our physicians about therapeutic plasma exchange for longevity, Alzheimer's, autoimmune disorders, and more.",
};

const steps = [
  {
    number: "01",
    title: "Free Consultation",
    description:
      "Speak with one of our physicians about your health goals and whether TPE is right for you. No commitment required.",
  },
  {
    number: "02",
    title: "Medical Evaluation",
    description:
      "We review your labs and health history to design a personalized protocol. Telemedicine appointments are available.",
  },
  {
    number: "03",
    title: "Treatment at Our Clinic",
    description:
      "Relax in our Mill Valley clinic while the apheresis machine gently processes your blood. Sessions take 2–3 hours — you can read, work, or watch a show.",
  },
  {
    number: "04",
    title: "Biomarker Monitoring",
    description:
      "We track your response through epigenetic clocks and clinical biomarkers, adjusting your protocol as needed.",
  },
  {
    number: "05",
    title: "Long-Term Protocol",
    description:
      "Most patients benefit from periodic maintenance treatments. We develop a long-term plan tailored to your goals.",
  },
];

const faqs = [
  {
    question: "What is therapeutic plasma exchange?",
    answer:
      "TPE is a medical procedure where blood passes through an apheresis machine that separates plasma — the liquid portion containing inflammatory proteins and aging factors — from blood cells. The plasma is removed and replaced with purified albumin solution, while your cells are returned. It has been performed safely for over 50 years.",
  },
  {
    question: "What conditions do you treat?",
    answer:
      "We treat longevity optimization and biological age reduction, Alzheimer's disease and mild cognitive impairment, Long COVID and post-acute sequelae, autoimmune conditions and PANDAS, and provide cytoreduction and stem cell collections. We are also adding Lipid Apheresis and Super Albumin therapy soon.",
  },
  {
    question: "How long does a treatment take?",
    answer:
      "A typical TPE session takes 2–3 hours. Patients remain awake and comfortable throughout — you can read, work on a laptop, or watch a show. Most patients drive themselves home afterward.",
  },
  {
    question: "Am I a candidate?",
    answer:
      "Good candidates are generally healthy adults who are interested in optimizing their healthspan. We also evaluate patients with Alzheimer's, Long COVID, autoimmune disease, and PANDAS. The best way to determine candidacy is a free consultation with our physicians.",
  },
  {
    question: "How many treatments will I need?",
    answer:
      "This depends on your goals and condition. Longevity patients often begin with an initial series and then transition to periodic maintenance. Alzheimer's patients follow AMBAR study-based protocols. A personalized plan is created during your consultation.",
  },
  {
    question: "Is this safe?",
    answer:
      "TPE has a well-established 50-year safety record. Serious complications are rare when performed by trained specialists. Dr. Kiprov has personally overseen thousands of procedures, and all treatments are administered by board-certified physicians and certified apheresis nurses using established clinical protocols.",
  },
  {
    question: "Does insurance cover TPE for longevity?",
    answer:
      "TPE for longevity optimization is generally not covered by insurance and is self-pay. TPE for certain approved indications — such as autoimmune or some neurological conditions — may have coverage depending on your plan. All costs and options are discussed during your free consultation.",
  },
  {
    question: "I'm a physician — how can I offer TPE in my practice?",
    answer:
      "We offer a comprehensive turn-key affiliate program that includes physician and staff training, equipment access, protocol support, medical directorship, and marketing resources. Visit our Affiliates page or contact us to learn more.",
  },
];

export default function FreeConsultationPage() {
  return (
    <>
      <PageHero
        label="Get Started"
        title="Book Your Free Consultation"
        subtitle="Take the first step toward optimizing your health with a complimentary consultation with our physicians."
      />

      {/* ═══════════ FORM + WHAT TO EXPECT ═══════════ */}
      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <div className="grid gap-[clamp(40px,6vw,80px)] md:grid-cols-2">
            {/* Left — What to Expect */}
            <RevealOnScroll>
              <div>
                <p className="mb-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
                  What to Expect
                </p>
                <h2 className="mb-6 font-display text-[clamp(1.6rem,2.5vw,2.2rem)] font-light leading-[1.15] text-forest">
                  Your Consultation,{" "}
                  <span className="italic">Simplified</span>
                </h2>
                <ul className="flex flex-col gap-4">
                  {[
                    "A one-on-one conversation with one of our physicians",
                    "Discussion of your health goals and medical history",
                    "Overview of treatment options and expected outcomes",
                    "Personalized protocol recommendation",
                    "Transparent discussion of costs and scheduling",
                    "No commitment — the decision is always yours",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                      <span className="text-[0.95rem] leading-[1.7] text-body">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-8 text-[0.92rem] leading-[1.7] text-stone">
                  Prefer to call?{" "}
                  <a
                    href="tel:+14159281352"
                    className="font-medium text-forest underline underline-offset-2"
                  >
                    (415) 928-1352
                  </a>
                </p>
              </div>
            </RevealOnScroll>

            {/* Right — Form placeholder */}
            <RevealOnScroll delay={1}>
              <div className="border border-black/6 bg-cream p-[clamp(28px,3vw,40px)]">
                <h3 className="mb-6 font-display text-[1.3rem] font-normal leading-[1.15] text-forest">
                  Request a Consultation
                </h3>
                <form className="flex flex-col gap-4">
                  <div>
                    <label className="mb-1.5 block font-body text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-stone">
                      Full Name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full border border-black/8 bg-ivory px-4 py-3 font-body text-[0.92rem] text-forest outline-none transition-colors focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block font-body text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-stone">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="you@email.com"
                      className="w-full border border-black/8 bg-ivory px-4 py-3 font-body text-[0.92rem] text-forest outline-none transition-colors focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block font-body text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-stone">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="(555) 000-0000"
                      className="w-full border border-black/8 bg-ivory px-4 py-3 font-body text-[0.92rem] text-forest outline-none transition-colors focus:border-gold"
                    />
                  </div>
                  <div>
                    <label className="mb-1.5 block font-body text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-stone">
                      Area of Interest
                    </label>
                    <select className="w-full border border-black/8 bg-ivory px-4 py-3 font-body text-[0.92rem] text-forest outline-none transition-colors focus:border-gold">
                      <option value="">Select a treatment area</option>
                      <option>Longevity &amp; Health Optimization</option>
                      <option>Alzheimer&apos;s &amp; Cognitive Decline</option>
                      <option>Autoimmune Disorders</option>
                      <option>Post-Infectious Syndromes</option>
                      <option>Cytoreduction &amp; Stem Cell</option>
                      <option>Other / Not Sure</option>
                    </select>
                  </div>
                  <div>
                    <label className="mb-1.5 block font-body text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-stone">
                      Message (Optional)
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your goals or ask a question..."
                      className="w-full border border-black/8 bg-ivory px-4 py-3 font-body text-[0.92rem] text-forest outline-none transition-colors focus:border-gold"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group mt-2 inline-flex items-center justify-center gap-2.5 border border-gold bg-gold px-9 py-4 font-body text-[0.8rem] font-medium uppercase tracking-[0.1em] text-forest transition-all duration-400 hover:bg-gold-light"
                  >
                    Request Consultation{" "}
                    <span className="btn-arrow-animate">&rarr;</span>
                  </button>
                </form>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════ HOW IT WORKS ═══════════ */}
      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 text-center font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              How It Works
            </p>
            <h2 className="mb-[clamp(40px,5vw,60px)] text-center font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-forest">
              Five Simple Steps
            </h2>
          </RevealOnScroll>

          <div className="grid gap-0 md:grid-cols-5">
            {steps.map((step, i) => (
              <RevealOnScroll
                key={i}
                delay={i < 3 ? (i as 0 | 1 | 2) : 0}
              >
                <div className="relative border-t border-gold/20 pt-8 pr-6">
                  <span className="mb-4 block font-display text-[2rem] font-light leading-none text-gold/40">
                    {step.number}
                  </span>
                  <h3 className="mb-3 font-display text-[1.15rem] font-normal leading-[1.2] text-forest">
                    {step.title}
                  </h3>
                  <p className="text-[0.88rem] leading-[1.7] text-stone">
                    {step.description}
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

    </>
  );
}
