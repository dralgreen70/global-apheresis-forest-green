import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import { treatments } from "@/lib/treatments";

interface TreatmentLayoutProps {
  slug: string;
  label: string;
  title: string;
  subtitle: string;
  comingSoon?: boolean;
  children: React.ReactNode;
}

export default function TreatmentLayout({
  slug,
  label,
  title,
  subtitle,
  comingSoon,
  children,
}: TreatmentLayoutProps) {
  const related = treatments.filter(
    (t) => t.slug !== slug && !t.comingSoon
  ).slice(0, 3);

  return (
    <>
      <PageHero
        label={comingSoon ? "Coming Soon" : label}
        title={title}
        subtitle={subtitle}
      />

      {comingSoon && (
        <section className="bg-cream pb-[clamp(60px,8vw,100px)]">
          <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)] text-center">
            <RevealOnScroll>
              <span className="badge-coming-soon">Coming Soon</span>
            </RevealOnScroll>
          </div>
        </section>
      )}

      {children}

      {/* ═══════════ RELATED TREATMENTS ═══════════ */}
      {!comingSoon && (
        <section className="section-pad bg-ivory">
          <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
            <RevealOnScroll>
              <p className="mb-5 text-center font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
                Explore More
              </p>
              <h2 className="mb-[clamp(40px,5vw,60px)] text-center font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-forest">
                Other Treatments
              </h2>
            </RevealOnScroll>
            <div className="grid gap-8 md:grid-cols-3">
              {related.map((t, i) => (
                <RevealOnScroll key={t.slug} delay={i as 0 | 1 | 2}>
                  <Link
                    href={`/treatments/${t.slug}`}
                    className="treatment-card block border border-black/6 bg-cream p-[clamp(28px,3vw,40px)]"
                  >
                    <h3 className="mb-3 font-display text-[1.3rem] font-normal leading-[1.15] text-forest">
                      {t.title}
                    </h3>
                    <p className="mb-4 text-[0.92rem] leading-[1.7] text-stone">
                      {t.description}
                    </p>
                    <span className="condition-link-arrow inline-flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.1em] text-gold-muted">
                      Learn More <span>&rarr;</span>
                    </span>
                  </Link>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════════ CTA BAND ═══════════ */}
      <section className="science-bg-glow relative overflow-hidden bg-forest py-[clamp(60px,10vw,120px)]">
        <div className="relative z-10 mx-auto max-w-[700px] px-[clamp(24px,5vw,48px)] text-center">
          <RevealOnScroll>
            <h2 className="mb-6 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-cream">
              {comingSoon
                ? "Interested in This Treatment?"
                : "Ready to Begin?"}
            </h2>
            <p className="mx-auto mb-10 max-w-[500px] text-[1rem] leading-[1.75] text-cream/80">
              {comingSoon
                ? "Contact us to learn more about this upcoming treatment and be the first to know when it becomes available."
                : "Schedule a free consultation with our physicians to discuss whether this treatment is right for you."}
            </p>
            <Link
              href={comingSoon ? "/contact" : "/free-consultation"}
              className="group inline-flex items-center gap-2.5 border border-gold bg-gold px-9 py-4 font-body text-[0.8rem] font-medium uppercase tracking-[0.1em] text-forest transition-all duration-400 hover:bg-gold-light"
            >
              {comingSoon ? "Contact Us" : "Book a Free Consultation"}{" "}
              <span className="btn-arrow-animate">&rarr;</span>
            </Link>
          </RevealOnScroll>
        </div>
      </section>
    </>
  );
}
