import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Research & Insights",
  description:
    "The latest research, clinical insights, and news from Global Apheresis on therapeutic plasma exchange, longevity, and Alzheimer's treatment.",
};


export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <PageHero
        label="Research & Insights"
        title="The Global Apheresis Blog"
        subtitle="Exploring the science of therapeutic apheresis, clinical breakthroughs, and what they mean for your health."
      />

      {/* ═══════════ FEATURED VIDEO ═══════════ */}
      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 text-center font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              Featured Video
            </p>
            <h2 className="mb-[clamp(32px,4vw,48px)] text-center font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-forest">
              Latest from Global Apheresis
            </h2>
          </RevealOnScroll>

          <RevealOnScroll>
            <div className="mx-auto max-w-[860px] border border-black/6 bg-cream p-[clamp(16px,2vw,24px)]">
              {/* To feature a new video, replace the video ID below (e.g. LlD84yXxdGI) */}
              <div className="relative aspect-video w-full overflow-hidden bg-forest/5">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  src="https://www.youtube.com/embed/LlD84yXxdGI"
                  title="Global Apheresis — Latest Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4">
                <p className="text-[0.92rem] leading-[1.7] text-stone">
                  Subscribe to the{" "}
                  <span className="font-semibold text-forest">
                    Global Apheresis
                  </span>{" "}
                  YouTube channel for the latest on therapeutic plasma exchange,
                  clinical research, and patient stories.
                </p>
                <Link
                  href="https://www.youtube.com/@GlobalApheresis"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="condition-link-arrow shrink-0 inline-flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.1em] text-gold-muted"
                >
                  Visit Channel <span>&rarr;</span>
                </Link>
              </div>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════════ ARTICLES GRID ═══════════ */}
      <section className="section-pad bg-cream">
        <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <p className="mb-5 text-center font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
              From the Practice
            </p>
            <h2 className="mb-[clamp(32px,4vw,48px)] text-center font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-forest">
              Articles
            </h2>
          </RevealOnScroll>

          {/* Articles Grid */}
          <div className="grid gap-8 md:grid-cols-2">
            {posts.map((post, i) => (
              <RevealOnScroll
                key={post.slug}
                delay={i < 3 ? (i as 0 | 1 | 2) : 0}
              >
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col border border-black/6 bg-cream p-[clamp(28px,3vw,40px)] transition-all duration-500 hover:-translate-y-1 hover:border-gold-light hover:shadow-[0_20px_60px_rgba(27,51,40,0.06)]"
                >
                  <span className="mb-3 inline-block self-start border border-gold/15 px-2.5 py-0.5 font-body text-[0.65rem] font-semibold uppercase tracking-[0.08em] text-gold-muted">
                    {post.category}
                  </span>
                  <p className="mb-3 font-body text-[0.78rem] font-semibold uppercase tracking-[0.15em] text-gold-muted">
                    {post.date}
                  </p>
                  <h3 className="mb-3 font-display text-[clamp(1.25rem,2vw,1.5rem)] font-normal leading-[1.2] text-forest">
                    {post.title}
                  </h3>
                  <p className="mb-5 flex-1 text-[0.92rem] leading-[1.7] text-stone">
                    {post.excerpt}
                  </p>
                  <span className="condition-link-arrow inline-flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.1em] text-gold-muted">
                    Read Article <span>&rarr;</span>
                  </span>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ PUBLICATIONS — COMING SOON ═══════════ */}
      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-[860px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <div className="border-2 border-gold/30 bg-cream p-[clamp(32px,5vw,56px)] text-center">
              <p className="mb-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
                Coming in Phase 2
              </p>
              <h2 className="mb-4 font-display text-[clamp(1.6rem,2.5vw,2.2rem)] font-light leading-[1.15] text-forest">
                Peer-Reviewed Publications
              </h2>
              <p className="mx-auto max-w-[520px] text-[0.95rem] leading-[1.75] text-stone">
                A curated library of Dr. Kiprov&apos;s published research,
                clinical papers, and peer-reviewed studies on therapeutic plasma
                exchange will be available here soon. Check back for
                downloadable PDFs and direct links to journal publications.
              </p>
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ═══════════ CTA BAND ═══════════ */}
      <section className="science-bg-glow relative overflow-hidden bg-forest py-[clamp(60px,10vw,120px)]">
        <div className="relative z-10 mx-auto max-w-[700px] px-[clamp(24px,5vw,48px)] text-center">
          <RevealOnScroll>
            <h2 className="mb-6 font-display text-[clamp(1.8rem,3vw,2.6rem)] font-light leading-[1.15] text-cream">
              Have Questions? Talk to a Physician
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
