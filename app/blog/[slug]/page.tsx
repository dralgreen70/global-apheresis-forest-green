import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";
import { getPostBySlug, getAllPostSlugs } from "@/lib/blog";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return { title: "Post Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <PageHero
        label={post.category}
        title={post.title}
        subtitle={post.date}
      />

      {/* ═══════════ ARTICLE CONTENT ═══════════ */}
      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-[860px] px-[clamp(24px,5vw,48px)]">
          <RevealOnScroll>
            <div className="mb-8">
              <Link
                href="/blog"
                className="condition-link-arrow inline-flex items-center gap-2 text-[0.75rem] font-medium uppercase tracking-[0.1em] text-gold-muted"
              >
                <span>&larr;</span> Back to Blog
              </Link>
            </div>
          </RevealOnScroll>

          <RevealOnScroll>
            <article
              className="prose-ga flex flex-col gap-5 text-[0.95rem] leading-[1.75] text-body"
              dangerouslySetInnerHTML={{ __html: post.contentHtml || "" }}
            />
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
