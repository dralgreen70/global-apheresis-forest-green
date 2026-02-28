import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Our Physicians & Team",
  description:
    "Meet the Global Apheresis team led by Dr. Dobri Kiprov and Dr. Alexander Green — board-certified specialists in therapeutic apheresis with decades of combined experience.",
};

const leadership = [
  {
    name: "Keeli Rose",
    role: "Chief Operating Officer",
    image: "/images/Keeli Rose.avif",
  },
  {
    name: "Regina Rohe, RN",
    role: "Senior Vice President",
    image: "/images/Regina Rohe.avif",
  },
  {
    name: "Chelo Roska-Pamaong, RN",
    role: "Vice President of Nursing",
    image: "/images/Chelo.avif",
  },
  {
    name: "Ashley Campbell",
    role: "Director of Marketing",
    image: "/images/Ashley Campbell.avif",
  },
];

export default function PhysiciansPage() {
  return (
    <>
      <PageHero
        label="Our Team"
        title="Led by the Pioneers of Therapeutic Apheresis"
        subtitle="Board-certified physicians and certified apheresis nurses with decades of combined experience."
      />

      {/* ═══════════ LEAD PHYSICIANS ═══════════ */}
      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          {/* Dr. Kiprov */}
          <div className="mb-[clamp(60px,8vw,100px)] grid gap-[clamp(40px,6vw,80px)] md:grid-cols-2 md:items-center">
            <RevealOnScroll>
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/images/Dr. Kiprov Headshot from his site.jpg"
                  alt="Dr. Dobri Kiprov, Founder & Medical Director"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={1}>
              <div>
                <p className="mb-2 font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
                  Founder & Medical Director
                </p>
                <h2 className="mb-6 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-forest">
                  Dr. Dobri Kiprov, M.D., H.P. (ASCP)
                </h2>
                <div className="flex flex-col gap-4 text-[0.95rem] leading-[1.75] text-body">
                  <p>
                    Dr. Kiprov is a globally recognized authority in therapeutic
                    apheresis — one of the physicians who established therapeutic
                    plasma exchange as a clinical discipline over 40 years ago. He
                    completed his fellowship in Clinical Immunology and
                    Immunopathology at Massachusetts General Hospital / Harvard
                    Medical School under an NIH-sponsored program.
                  </p>
                  <p>
                    He became the first U.S. physician to pass the Hemapheresis
                    Practitioner Exam (ASCP), and went on to serve as Chief of
                    the Division of Immunotherapy, Emeritus at California Pacific
                    Medical Center. He is a founding member of both ASFA and The
                    Journal of Clinical Apheresis.
                  </p>
                  <p>
                    Dr. Kiprov has been honored with three of ASFA's highest
                    awards: the Presidential Award, the Lecturers Award, and the
                    Francis Morrison Memorial Award. He has authored over 100
                    peer-reviewed publications and overseen more than 15,000 therapeutic apheresis
                    treatments.
                  </p>
                </div>
                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "ASFA Founding Member",
                    "100+ Publications",
                    "15,000+ Treatments",
                    "Harvard / MGH Fellowship",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="border border-gold/20 px-3 py-1 font-body text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-gold-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>

          {/* Dr. Green */}
          <div className="grid gap-[clamp(40px,6vw,80px)] md:grid-cols-2 md:items-center">
            <RevealOnScroll className="md:order-2">
              <div className="relative aspect-[3/4] w-full overflow-hidden">
                <Image
                  src="/images/DrGreen with amicus machine.jpeg"
                  alt="Dr. Allen Green, Associate Medical Director"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </RevealOnScroll>
            <RevealOnScroll delay={1} className="md:order-1">
              <div>
                <p className="mb-2 font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
                  Associate Medical Director
                </p>
                <h2 className="mb-6 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-forest">
                  Dr. Allen Green, M.D.
                </h2>
                <div className="flex flex-col gap-4 text-[0.95rem] leading-[1.75] text-body">
                  <p>
                    Dr. Allen Green is a board-certified clinical pathologist
                    specializing in therapeutic apheresis. A graduate of the
                    Medical University of South Carolina, he completed his
                    residency at UT Southwestern Medical Center and served in
                    the United States Air Force.
                  </p>
                  <p>
                    With over 500 therapeutic plasma exchange procedures to his
                    name, Dr. Green previously established TPE protocols for
                    Alzheimer's disease and cognitive enhancement at a leading
                    longevity clinic in Dallas before joining Global Apheresis.
                  </p>
                  <p>
                    As Associate Medical Director, Dr. Green oversees clinical
                    operations, supports the affiliate network, and works
                    directly with patients seeking longevity optimization and
                    neurodegenerative treatment.
                  </p>
                </div>
                {/* Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    "Board-Certified Clinical Pathology",
                    "UT Southwestern",
                    "500+ TPE Procedures",
                    "ASFA Member",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="border border-gold/20 px-3 py-1 font-body text-[0.68rem] font-semibold uppercase tracking-[0.08em] text-gold-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════ LEADERSHIP TEAM ═══════════ */}
      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 text-center font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              Leadership & Clinical Staff
            </p>
            <h2 className="mb-[clamp(40px,5vw,60px)] text-center font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-forest">
              The Team Behind the Practice
            </h2>
          </RevealOnScroll>

          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            {leadership.map((member, i) => (
              <RevealOnScroll
                key={member.name}
                delay={i < 3 ? (i as 0 | 1 | 2) : 0}
              >
                <div className="team-card">
                  <div className="relative mb-5 aspect-[3/4] w-full overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <h3 className="font-display text-[1.15rem] font-normal leading-[1.2] text-forest">
                    {member.name}
                  </h3>
                  <p className="mt-1 font-body text-[0.78rem] text-stone">
                    {member.role}
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
