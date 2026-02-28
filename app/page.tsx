import Link from "next/link";
import Image from "next/image";
import RevealOnScroll from "@/components/RevealOnScroll";

export default function HomePage() {
  return (
    <>
      {/* ═══════════ HERO ═══════════ */}
      <header className="relative flex min-h-screen items-center justify-center overflow-hidden bg-cream text-center">
        {/* Background */}
        <div className="hero-bg-gradient absolute inset-0">
          <div className="absolute -top-[10%] -right-[5%] h-[500px] w-[500px] rounded-full bg-[rgba(42,82,64,0.04)] blur-[80px] will-change-transform animate-orb-1" />
          <div className="absolute -bottom-[5%] -left-[5%] h-[400px] w-[400px] rounded-full bg-[rgba(196,162,101,0.04)] blur-[80px] will-change-transform animate-orb-2" />
          <div className="absolute top-[30%] left-[20%] h-[300px] w-[300px] rounded-full bg-[rgba(42,82,64,0.025)] blur-[80px] will-change-transform animate-orb-3" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-[900px] px-[clamp(24px,5vw,48px)]">
          <p className="mb-8 font-body text-[0.82rem] font-medium uppercase tracking-[0.25em] text-gold-muted">
            Mill Valley, California
          </p>
          <h1 className="mb-8 font-display text-[clamp(2.8rem,5.5vw,5.2rem)] font-light leading-[1.05] text-forest">
            Pioneering the Next Frontier of
            <br />
            Therapeutic Apheresis
          </h1>
          <hr className="gold-rule mx-auto mb-8" />
          <p className="mx-auto mb-12 max-w-[520px] font-display text-[clamp(1.15rem,1.8vw,1.35rem)] font-light italic leading-[1.6] text-body">
            Led by Dr. Dobri Kiprov, one of the physicians who established therapeutic
            plasma exchange as a clinical discipline over 40 years ago.
          </p>
          <Link
            href="/free-consultation"
            className="group inline-flex items-center gap-2.5 border border-forest bg-forest px-9 py-4 font-body text-[0.8rem] font-medium uppercase tracking-[0.1em] text-cream transition-all duration-400 hover:border-forest-mid hover:bg-forest-mid"
          >
            Book a Free Consultation{" "}
            <span className="btn-arrow-animate">&rarr;</span>
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 flex animate-scroll-hint flex-col items-center gap-2.5 text-[0.65rem] uppercase tracking-[0.15em] text-stone">
          <span>Discover</span>
          <div className="h-10 w-px bg-gradient-to-b from-gold to-transparent" />
        </div>
      </header>

      {/* ═══════════ PHILOSOPHY ═══════════ */}
      <section className="section-pad bg-ivory text-center">
        <div className="mx-auto max-w-[780px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <blockquote className="mx-auto max-w-[720px] font-display text-[clamp(1.5rem,2.6vw,2.15rem)] font-light italic leading-[1.55] text-forest">
              &ldquo;When we remove what burdens the blood, we give the body
              permission to heal itself. This has been our guiding principle for
              four decades.&rdquo;
            </blockquote>
            <p className="mt-6 text-[0.8rem] tracking-[0.04em] text-stone">
              &mdash; Dr. Dobri Kiprov, M.D., H.P. (ASCP)
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <hr className="gold-rule mx-auto mt-10" />
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════════ LEGACY ═══════════ */}
      <section id="legacy" className="section-pad bg-cream">
        <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <div className="grid items-center gap-[clamp(40px,6vw,80px)] md:grid-cols-2">
            {/* Image */}
            <RevealOnScroll>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/Dr. Kiprov Headshot from his site.jpg"
                  alt="Dr. Dobri Kiprov, M.D. — Founder of Global Apheresis"
                  fill
                  className="object-cover object-[35%_top]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </RevealOnScroll>

            {/* Text */}
            <div>
              <RevealOnScroll>
                <p className="mb-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
                  Our Legacy
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={1}>
                <h2 className="mb-6 font-display text-[clamp(2.1rem,3.5vw,3.1rem)] font-light leading-[1.15] text-forest">
                  Four Decades of
                  <br />
                  Pioneering Medicine
                </h2>
                <hr className="gold-rule mb-6" />
              </RevealOnScroll>
              <RevealOnScroll delay={2}>
                <p className="mb-6">
                  In 1985, Dr. Dobri Kiprov founded the first mobile therapeutic
                  apheresis program in the United States. A Harvard- and
                  NIH-trained immunologist and the first U.S. physician to pass
                  the Hemapheresis Practitioner Exam, he has spent over four
                  decades defining the modern era of therapeutic plasma exchange.
                </p>
                <p className="mb-6">
                  His landmark research — from the AMBAR trial demonstrating
                  significant slowing of Alzheimer&apos;s progression, to the
                  first published evidence that TPE reduces biological age — has
                  been validated by independent researchers including the Buck
                  Institute for Research on Aging.
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={3}>
                <div className="mt-10 flex gap-10 border-t border-black/6 pt-8">
                  <div>
                    <div className="font-display text-[2.5rem] font-light leading-none text-forest">
                      40+
                    </div>
                    <div className="mt-1.5 text-[0.75rem] tracking-[0.04em] text-stone">
                      Years Practicing
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-[2.5rem] font-light leading-none text-forest">
                      15,000+
                    </div>
                    <div className="mt-1.5 text-[0.75rem] tracking-[0.04em] text-stone">
                      Treatments Overseen
                    </div>
                  </div>
                  <div>
                    <div className="font-display text-[2.5rem] font-light leading-none text-forest">
                      100+
                    </div>
                    <div className="mt-1.5 text-[0.75rem] tracking-[0.04em] text-stone">
                      Publications
                    </div>
                  </div>
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CONDITIONS ═══════════ */}
      <section id="conditions" className="section-pad bg-ivory">
        <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          {/* Header */}
          <div className="mb-[clamp(48px,6vw,72px)] text-center">
            <RevealOnScroll>
              <p className="mb-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
                Conditions We Treat
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={1}>
              <h2 className="mb-6 font-display text-[clamp(2.1rem,3.5vw,3.1rem)] font-light leading-[1.15] text-forest">
                Restoring What
                <br />
                Matters Most
              </h2>
            </RevealOnScroll>
            <RevealOnScroll delay={2}>
              <p className="mx-auto max-w-[560px] text-stone">
                Therapeutic apheresis offers a path forward for patients
                navigating complex and often resistant conditions.
              </p>
            </RevealOnScroll>
          </div>

          {/* Cards — 4 equal-height cards */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Longevity & Health Optimization",
                description:
                  "Measurably reduce biological age and optimize healthspan through evidence-based plasma exchange, validated across 35 epigenetic clocks.",
                delay: 0,
                href: "/treatments/longevity-optimization",
              },
              {
                title: "Alzheimer\u2019s & Cognitive Decline",
                description:
                  "The landmark AMBAR trial demonstrated TPE slows Alzheimer\u2019s progression by 52\u201371% \u2014 with a superior safety profile to monoclonal antibodies.",
                delay: 1,
                href: "/treatments/alzheimers-cognitive-decline",
              },
              {
                title: "Autoimmune Disorders",
                description:
                  "Remove the pathogenic antibodies and inflammatory mediators driving conditions like myasthenia gravis, Guillain-Barr\u00e9 syndrome, and multiple sclerosis.",
                delay: 2,
                href: "/treatments/autoimmune-disorders",
              },
              {
                title: "Post-Infectious Syndromes",
                description:
                  "Address the persistent inflammatory burden underlying Long COVID, PANDAS, and other chronic post-infectious conditions.",
                delay: 0,
                href: "/treatments/post-infectious-syndromes",
              },
            ].map((condition) => (
              <RevealOnScroll key={condition.title} delay={condition.delay as 0 | 1 | 2}>
                <div className="condition-card flex h-full flex-col border border-black/6 bg-cream p-[clamp(28px,3vw,40px)]">
                  <h3 className="mb-3.5 font-display text-[1.3rem] font-normal leading-[1.15] text-forest">
                    {condition.title}
                  </h3>
                  <p className="mb-5 flex-1 text-[0.92rem] leading-[1.75] text-stone">
                    {condition.description}
                  </p>
                  <Link
                    href={condition.href}
                    className="condition-link-arrow inline-flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.1em] text-gold-muted transition-colors hover:text-forest"
                  >
                    Learn More <span>&rarr;</span>
                  </Link>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ SCIENCE (DARK) ═══════════ */}
      <section
        id="science"
        className="science-bg-glow section-pad relative overflow-hidden bg-forest text-cream"
      >
        <div className="relative z-10 mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold">
              The Science
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={1}>
            <h2 className="mb-6 max-w-[600px] font-display text-[clamp(2.1rem,3.5vw,3.1rem)] font-light leading-[1.15] text-cream">
              Understanding
              <br />
              Therapeutic Apheresis
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={2}>
            <p className="mb-[clamp(48px,5vw,64px)] max-w-[600px] text-[1.0625rem] text-cream/80">
              A sophisticated medical procedure that selectively removes
              disease-causing substances from the blood, allowing the
              body&apos;s natural healing mechanisms to restore balance.
            </p>
          </RevealOnScroll>

          <div className="grid items-center gap-[clamp(40px,6vw,80px)] md:grid-cols-2">
            {/* Steps */}
            <div className="flex flex-col gap-9">
              {[
                {
                  num: "01",
                  title: "Comprehensive Assessment",
                  desc: "Every protocol begins with a thorough clinical evaluation — blood panels, biomarkers, and medical history — to design a treatment plan tailored to your specific condition and goals.",
                },
                {
                  num: "02",
                  title: "Selective Plasma Exchange",
                  desc: "Using advanced apheresis technology, aging plasma — including pro-inflammatory factors, disease-associated proteins, and accumulated toxins — is gently separated and removed from your blood.",
                },
                {
                  num: "03",
                  title: "Albumin Replacement",
                  desc: "Purified albumin, one of the body\u2019s most potent natural antioxidants and anti-inflammatory proteins, replaces the removed plasma — restoring balance and supporting the body\u2019s innate healing capacity.",
                },
                {
                  num: "04",
                  title: "Monitoring & Optimization",
                  desc: "Post-treatment biomarker analysis tracks measurable outcomes — from epigenetic age clocks to inflammatory markers — ensuring every session builds on the last.",
                },
              ].map((step, i) => (
                <RevealOnScroll key={step.num} delay={i as 0 | 1 | 2}>
                  <div className="flex items-start gap-6">
                    <span className="min-w-[40px] font-display text-[2.5rem] font-light leading-none text-gold">
                      {step.num}
                    </span>
                    <div>
                      <h4 className="mb-1.5 font-display text-[1.2rem] font-normal text-cream">
                        {step.title}
                      </h4>
                      <p className="text-[0.92rem] leading-[1.7] text-cream/80">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            {/* Image */}
            <RevealOnScroll delay={1}>
              <div className="relative hidden aspect-[4/3] overflow-hidden md:block">
                <Image
                  src="/images/Optia Apheresis Machine.avif"
                  alt="Therapeutic apheresis machine used at Global Apheresis"
                  fill
                  className="object-cover object-[center_30%]"
                  sizes="50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════ AFFILIATES ═══════════ */}
      <section id="affiliates" className="section-pad bg-sage">
        <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <div className="grid items-center gap-[clamp(40px,6vw,80px)] md:grid-cols-2">
            {/* Text */}
            <div>
              <RevealOnScroll>
                <p className="mb-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
                  For Physicians
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={1}>
                <h2 className="mb-4 font-display text-[clamp(2.1rem,3.5vw,3.1rem)] font-light leading-[1.15] text-forest">
                  Bring Therapeutic Apheresis
                  <br />
                  to Your Practice
                </h2>
                <hr className="gold-rule mb-6" />
              </RevealOnScroll>
              <RevealOnScroll delay={2}>
                <p className="mb-8">
                  Global Apheresis offers a complete turnkey solution for clinics
                  and providers who want to offer evidence-based therapeutic
                  apheresis — backed by protocols refined over four decades and
                  direct training from the pioneers of the field.
                </p>
                <ul className="mb-10">
                  {[
                    "Physician and staff certification in Dr. Kiprov\u2019s protocols",
                    "Equipment procurement, albumin, and consumable supply chain",
                    "Multiple tiers of medical directorship and clinical consultation",
                    "Co-branded marketing materials and patient education resources",
                  ].map((benefit, i) => (
                    <li
                      key={i}
                      className={`flex items-start gap-3.5 border-b border-black/6 py-3 text-[0.95rem] ${i === 0 ? "border-t" : ""}`}
                    >
                      <span className="mt-2.5 h-1.5 w-1.5 min-w-[6px] rounded-full bg-gold" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </RevealOnScroll>
              <RevealOnScroll delay={3}>
                <Link
                  href="/affiliates"
                  className="group inline-flex items-center gap-2.5 border border-gold px-9 py-4 font-body text-[0.8rem] font-medium uppercase tracking-[0.1em] text-forest transition-all duration-400 hover:border-forest hover:bg-forest hover:text-cream"
                >
                  Explore Partnership{" "}
                  <span className="btn-arrow-animate">&rarr;</span>
                </Link>
              </RevealOnScroll>
            </div>

            {/* Image */}
            <RevealOnScroll delay={1}>
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src="/images/DrGreen with amicus machine.jpeg"
                  alt="Dr. Allen Green operating an apheresis machine at an affiliate clinic"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════ LOCATION ═══════════ */}
      <section id="contact" className="section-pad bg-ivory">
        <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <div className="grid items-center gap-[clamp(40px,6vw,80px)] md:grid-cols-2">
            {/* Text */}
            <div>
              <RevealOnScroll>
                <p className="mb-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
                  Visit Us
                </p>
              </RevealOnScroll>
              <RevealOnScroll delay={1}>
                <h2 className="mb-6 font-display text-[clamp(2.1rem,3.5vw,3.1rem)] font-light leading-[1.15] text-forest">
                  Nestled in the Heart
                  <br />
                  of Mill Valley
                </h2>
                <hr className="gold-rule mb-6" />
              </RevealOnScroll>
              <RevealOnScroll delay={2}>
                <p className="mb-8">
                  Set among the serene redwood groves of Marin County, our
                  practice reflects the same philosophy we bring to medicine —
                  that healing begins when the environment itself supports
                  restoration and renewal.
                </p>
                <address className="mb-8 not-italic leading-[2] text-stone">
                  655 Redwood Highway, Suite 370
                  <br />
                  Mill Valley, CA 94941
                  <br />
                  <a href="tel:+14159281352" className="transition-colors hover:text-forest">(415) 928-1352</a>
                  <br />
                  <a href="mailto:info@globalapheresis.com" className="transition-colors hover:text-forest">info@globalapheresis.com</a>
                </address>
              </RevealOnScroll>
              <RevealOnScroll delay={3}>
                <Link
                  href="/free-consultation"
                  className="group inline-flex items-center gap-2.5 border border-forest bg-forest px-9 py-4 font-body text-[0.8rem] font-medium uppercase tracking-[0.1em] text-cream transition-all duration-400 hover:border-forest-mid hover:bg-forest-mid"
                >
                  Book a Free Consultation{" "}
                  <span className="btn-arrow-animate">&rarr;</span>
                </Link>
              </RevealOnScroll>
            </div>

            {/* Team Photo — full column width, natural image ratio */}
            <RevealOnScroll delay={1}>
              <div className="relative aspect-[12/5] w-full overflow-hidden">
                <Image
                  src="/images/Global Apheresis Team.avif"
                  alt="The Global Apheresis team at their Mill Valley practice"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>
    </>
  );
}
