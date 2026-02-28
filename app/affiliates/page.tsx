import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Affiliate Program for Physicians",
  description:
    "Bring therapeutic apheresis to your practice. Global Apheresis offers turnkey affiliate programs with physician training, equipment, and medical directorship.",
};

const valueProps = [
  {
    title: "Physician & Staff Training",
    description:
      "Comprehensive certification for physicians, NPs, PAs, and nurses in Dr. Kiprov's proprietary protocols — built on 40+ years of clinical expertise.",
  },
  {
    title: "Equipment & Supplies",
    description:
      "Full access to apheresis equipment, albumin, replacement fluids, and consumables — everything your clinic needs to perform TPE on day one.",
  },
  {
    title: "Medical Directorship",
    description:
      "Multiple tiers of medical directorship and ongoing clinical consultation, ensuring your program meets the highest standards of care.",
  },
  {
    title: "Marketing & Operational Support",
    description:
      "Co-branded patient education materials, marketing resources, and implementation guidance to help you launch and grow your apheresis program.",
  },
];

const stats = [
  { value: "40+", label: "Years of Protocol Development" },
  { value: "Turn-Key", label: "Launch in Weeks, Not Months" },
  { value: "Multi-State", label: "Active Affiliate Network" },
  { value: "Full Support", label: "Training, Supplies & Marketing" },
];

const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description:
      "Schedule a call with our affiliate team to discuss your practice, patient population, and goals. We'll walk you through the program in detail.",
  },
  {
    number: "02",
    title: "Training & Setup",
    description:
      "Your physicians and clinical staff receive hands-on training in Dr. Kiprov's protocols. We help you source equipment, supplies, and configure your treatment space.",
  },
  {
    number: "03",
    title: "Launch & Grow",
    description:
      "Begin treating patients with full ongoing support — from clinical consultation and quality assurance to marketing and patient acquisition.",
  },
];

export default function AffiliatesPage() {
  return (
    <>
      <PageHero
        label="For Providers & Partners"
        title="Bring Therapeutic Apheresis to Your Practice"
        subtitle="A turn-key affiliate partnership backed by the pioneers of the field."
      />

      {/* ═══════════ PROGRAM OVERVIEW ═══════════ */}
      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-[860px] px-[clamp(24px,5vw,48px)] text-center">
          <RevealOnScroll>
            <p className="mb-8 text-[1.05rem] leading-[1.75] text-body">
              Global Apheresis offers a complete turn-key solution for clinics
              and providers who want to offer therapeutic apheresis — backed by
              the pioneers of the field. Our affiliate program is designed for
              longevity clinics, integrative medicine practices, oncology
              centers, and specialty care providers.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════════ VALUE PROPOSITIONS ═══════════ */}
      <section className="bg-cream pt-[clamp(40px,6vw,80px)] pb-[clamp(80px,12vw,160px)]">
        <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 text-center font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              What We Provide
            </p>
            <h2 className="mb-[clamp(40px,5vw,60px)] text-center font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-forest">
              Everything You Need to Succeed
            </h2>
          </RevealOnScroll>

          <div className="grid gap-8 md:grid-cols-2">
            {valueProps.map((prop, i) => (
              <RevealOnScroll
                key={i}
                delay={i < 2 ? (i as 0 | 1) : 0}
              >
                <div className="border border-black/6 bg-ivory p-[clamp(28px,3vw,40px)]">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center bg-gold/10">
                    <span className="font-display text-[1.2rem] font-semibold text-gold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mb-3 font-display text-[1.2rem] font-normal leading-[1.2] text-forest">
                    {prop.title}
                  </h3>
                  <p className="text-[0.92rem] leading-[1.7] text-stone">
                    {prop.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ STATS ═══════════ */}
      <section className="science-bg-glow relative overflow-hidden bg-forest py-[clamp(60px,10vw,100px)]">
        <div className="relative z-10 mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, i) => (
              <RevealOnScroll
                key={i}
                delay={i < 3 ? (i as 0 | 1 | 2) : 0}
              >
                <div className="text-center">
                  <span className="block font-display text-[clamp(2rem,4vw,3rem)] font-light leading-none text-gold">
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

      {/* ═══════════ DR. KAPLAN FEATURE ═══════════ */}
      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <div className="grid gap-[clamp(40px,6vw,80px)] md:grid-cols-2 md:items-center">
            <RevealOnScroll>
              <div className="flex justify-center">
                <div className="relative aspect-[3/4] w-full max-w-[360px] overflow-hidden">
                  <Image
                    src="/images/Gary_Kaplan_Affiliate.jpg"
                    alt="Dr. Gary Kaplan, D.O. — Affiliate Partner"
                    fill
                    className="object-cover object-top"
                    sizes="360px"
                  />
                </div>
              </div>
            </RevealOnScroll>

            {/* Text */}
            <RevealOnScroll delay={1}>
              <div>
                <p className="mb-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
                  Affiliate Partner
                </p>
                <h2 className="mb-6 font-display text-[clamp(1.6rem,2.5vw,2.2rem)] font-light leading-[1.15] text-forest">
                  Gary Kaplan, D.O.
                </h2>
                <p className="text-[0.95rem] leading-[1.75] text-body">
                  Dr. Gary Kaplan is the founder and medical director of the
                  Kaplan Center for Integrative Medicine in McLean, Virginia —
                  one of the country&apos;s leading integrative medicine
                  practices. Board-certified in both Family Medicine and Pain
                  Medicine, Dr. Kaplan partnered with Global Apheresis to bring
                  therapeutic plasma exchange to the Washington, D.C. area,
                  making the Kaplan Center the first outpatient TPE clinic in
                  the region. Working under Dr. Kiprov&apos;s clinical guidance,
                  the Kaplan Center now offers TPE for Alzheimer&apos;s disease,
                  Long COVID, PANS/PANDAS, and longevity support.
                </p>
                <blockquote className="mt-8 border-l-2 border-gold/40 pl-6">
                  <p className="font-display text-[clamp(1rem,1.4vw,1.15rem)] font-light italic leading-[1.55] text-forest">
                    &ldquo;We are particularly excited because we&apos;re going
                    to be able to bring this technology to Northern Virginia,
                    which we&apos;ve been trying to do for the last four
                    years — and Dr. Kiprov has now made it possible for us to
                    be able to do that.&rdquo;
                  </p>
                  <p className="mt-3 text-[0.8rem] tracking-[0.04em] text-stone">
                    &mdash; Dr. Gary Kaplan, D.O., Kaplan Center for Integrative Medicine
                  </p>
                </blockquote>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════ HOW TO GET STARTED ═══════════ */}
      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 text-center font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              Get Started
            </p>
            <h2 className="mb-[clamp(40px,5vw,60px)] text-center font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-forest">
              Three Steps to Launch
            </h2>
          </RevealOnScroll>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <RevealOnScroll key={i} delay={i as 0 | 1 | 2}>
                <div className="border-t border-gold/20 pt-8">
                  <span className="mb-4 block font-display text-[2.5rem] font-light leading-none text-gold/30">
                    {step.number}
                  </span>
                  <h3 className="mb-3 font-display text-[1.2rem] font-normal leading-[1.2] text-forest">
                    {step.title}
                  </h3>
                  <p className="text-[0.92rem] leading-[1.7] text-stone">
                    {step.description}
                  </p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ CTA BAND ═══════════ */}
      <section className="science-bg-glow relative overflow-hidden bg-forest py-[clamp(60px,10vw,120px)]">
        <div className="relative z-10 mx-auto max-w-[700px] px-[clamp(24px,5vw,48px)] text-center">
          <RevealOnScroll>
            <h2 className="mb-6 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-cream">
              Ready to Explore a Partnership?
            </h2>
            <p className="mx-auto mb-10 max-w-[500px] text-[1rem] leading-[1.75] text-cream/80">
              Contact our affiliate team to learn how you can bring
              evidence-based therapeutic apheresis to your patients.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2.5 border border-gold bg-gold px-9 py-4 font-body text-[0.8rem] font-medium uppercase tracking-[0.1em] text-forest transition-all duration-400 hover:bg-gold-light"
            >
              Contact Our Affiliate Team{" "}
              <span className="btn-arrow-animate">&rarr;</span>
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
