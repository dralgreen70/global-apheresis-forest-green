import RevealOnScroll from "@/components/RevealOnScroll";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  bgClass?: string;
}

export default function PageHero({
  label,
  title,
  subtitle,
  bgClass = "bg-cream",
}: PageHeroProps) {
  return (
    <section className={`page-hero-pad ${bgClass}`}>
      <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)] text-center">
        <RevealOnScroll>
          <p className="mb-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
            {label}
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={1}>
          <h1 className="mb-6 font-display text-[clamp(2.4rem,4.5vw,3.8rem)] font-light leading-[1.1] text-forest">
            {title}
          </h1>
          <hr className="gold-rule mx-auto" />
        </RevealOnScroll>
        {subtitle && (
          <RevealOnScroll delay={2}>
            <p className="mx-auto mt-8 max-w-[600px] font-display text-[clamp(1.1rem,1.6vw,1.25rem)] font-light italic leading-[1.6] text-body">
              {subtitle}
            </p>
          </RevealOnScroll>
        )}
      </div>
    </section>
  );
}
