import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Our Story",
  description:
    "Since 1985, Dr. Dobri Kiprov has pioneered therapeutic apheresis. Learn about the history of Global Apheresis and our mission to advance plasma exchange medicine.",
};

// VERIFY: Confirm the correct year Dr. Kiprov began practicing therapeutic apheresis
const timeline = [
  {
    year: "1985",
    title: "A Field Is Born",
    description:
      "Dr. Kiprov founds Bay Area Mobile Apheresis — the first mobile therapeutic plasma exchange program in the United States.",
  },
  {
    year: "1992",
    title: "Taking Root in San Francisco",
    description:
      "Dr. Kiprov establishes the Center for Apheresis and Immunology in San Francisco, advancing outpatient TPE for autoimmune and neurological conditions.",
  },
  {
    year: "2020",
    title: "A Breakthrough for Alzheimer's",
    description:
      "The landmark AMBAR study demonstrates that therapeutic plasma exchange slows Alzheimer's progression by 52–71% — a turning point for the field.",
  },
  {
    year: "2021",
    title: "A New Chapter",
    description:
      "Dr. Kiprov founds Global Apheresis in Mill Valley, CA to bring therapeutic apheresis to a wider population through direct patient care and physician affiliates.",
  },
  {
    year: "2022",
    title: "Science Catches Up",
    description:
      "Published in GeroScience, Dr. Kiprov's study provides the first clinical proof that TPE reduces biological age by 1–3 years as measured by epigenetic clocks.",
  },
  {
    year: "2025",
    title: "Validation at the Frontier",
    description:
      "In partnership with the Buck Institute for Research on Aging, new data published in Aging Cell further validates the rejuvenating effects of plasma exchange.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* VERIFY: Confirm the correct year Dr. Kiprov began practicing therapeutic apheresis */}
      <PageHero
        label="Our Story"
        title="Pioneering Therapeutic Apheresis Since 1985"
        subtitle="Four decades of clinical innovation, one mission: to transform lives through the science of blood purification."
      />

      {/* ═══════════ MISSION QUOTE ═══════════ */}
      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-[860px] px-[clamp(24px,5vw,48px)] text-center">
          <RevealOnScroll>
            <blockquote className="font-display text-[clamp(1.3rem,2.2vw,1.7rem)] font-light italic leading-[1.55] text-forest">
              &ldquo;The plasma carries the story of aging and disease. When we
              exchange it, we give the body a chance to rewrite that
              story.&rdquo;
            </blockquote>
            <p className="mt-6 font-body text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-gold-muted">
              Dr. Dobri Kiprov, M.D.
            </p>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════════ PHILOSOPHY ═══════════ */}
      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-[860px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              Philosophy
            </p>
            <h2 className="mb-6 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-forest">
              Medicine the Way It Should Be
            </h2>
            <p className="mb-4 text-[0.95rem] italic leading-[1.75] text-body">
              A practice built on principle, not volume.
            </p>
            <div className="flex flex-col gap-4 text-[0.95rem] leading-[1.75] text-body">
              <p>
                At Global Apheresis, we believe that every patient deserves a
                physician who takes the time to understand not just their
                diagnosis, but their life. Therapeutic apheresis is a powerful
                tool — but it is only as good as the clinical judgment behind it.
              </p>
              <p>
                We founded this practice on a simple principle: do right by the
                patient. That means honest conversations about what the evidence
                shows and where it is still evolving. It means personalized
                protocols, not one-size-fits-all treatment plans. And it means
                measuring outcomes, not just administering procedures.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════════ WHAT MAKES US DIFFERENT ═══════════ */}
      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-[860px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              What Makes Us Different
            </p>
            <h2 className="mb-6 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-forest">
              Depth of Experience You Won&rsquo;t Find Elsewhere
            </h2>
            <p className="mb-4 text-[0.95rem] italic leading-[1.75] text-body">
              The nation&rsquo;s leading outpatient apheresis practice.
            </p>
            <div className="flex flex-col gap-4 text-[0.95rem] leading-[1.75] text-body">
              <p>
                Global Apheresis is one of the only outpatient practices in the
                United States dedicated exclusively to therapeutic apheresis.
                While most patients encounter this procedure only in hospital
                settings — often as a last resort — we have spent decades making
                it accessible, safe, and effective in an outpatient environment.
              </p>
              <p>
                Our physicians have performed more procedures, published more
                research, and trained more practitioners in this field than
                virtually anyone in the country. When you come to us, you are not
                receiving care from someone who offers apheresis as one of many
                services. This is all we do, and we do it at the highest level.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════════ YOUR VISIT ═══════════ */}
      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-[860px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              Your Visit
            </p>
            <h2 className="mb-6 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-forest">
              A Different Kind of Medical Experience
            </h2>
            <p className="mb-4 text-[0.95rem] italic leading-[1.75] text-body">
              Thoughtful care in a setting designed for healing.
            </p>
            <div className="flex flex-col gap-4 text-[0.95rem] leading-[1.75] text-body">
              <p>
                Our clinic in Mill Valley reflects the care we put into every
                aspect of your treatment. Set among the redwood groves of Marin
                County, it is a calm, private setting designed to put patients at
                ease. Treatment sessions typically last two to three hours — time
                our patients often describe as unexpectedly peaceful.
              </p>
              <p>
                You will always see a physician. Your protocol will be reviewed
                and adjusted based on your biomarkers and response. And you will
                never feel like a number.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════════ TIMELINE ═══════════ */}
      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-[860px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 text-center font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              40+ Years of Innovation
            </p>
            <h2 className="mb-[clamp(40px,5vw,60px)] text-center font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-forest">
              Our Journey
            </h2>
          </RevealOnScroll>

          <div className="relative">
            {/* Vertical connector line */}
            <div className="timeline-connector absolute left-[32px] top-2 bottom-2 hidden md:block" />

            <div className="flex flex-col gap-10">
              {timeline.map((item, i) => (
                <RevealOnScroll
                  key={i}
                  delay={i < 3 ? (i as 0 | 1 | 2) : 0}
                >
                  <div className="flex gap-8 md:items-start">
                    {/* Year badge */}
                    <div className="relative z-10 hidden shrink-0 md:block">
                      <span className="flex h-14 w-[4.25rem] items-center justify-center bg-gold font-display text-[0.85rem] font-semibold text-forest">
                        {item.year}
                      </span>
                    </div>
                    {/* Content */}
                    <div className="border-t border-gold/20 pt-6 md:border-t-0 md:pt-0">
                      <span className="mb-2 block font-body text-[0.72rem] font-semibold uppercase tracking-[0.15em] text-gold-muted md:hidden">
                        {item.year}
                      </span>
                      <h3 className="mb-2 font-display text-[1.25rem] font-normal leading-[1.2] text-forest">
                        {item.title}
                      </h3>
                      <p className="text-[0.92rem] leading-[1.7] text-stone">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
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
              whether therapeutic apheresis is right for you.
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
