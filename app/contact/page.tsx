import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import RevealOnScroll from "@/components/RevealOnScroll";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Global Apheresis at 655 Redwood Highway, Suite 370, Mill Valley, CA. Call (415) 928-1352 or email info@globalapheresis.com.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Get in Touch"
        title="Contact Global Apheresis"
        subtitle="We welcome your questions. Reach out by phone, email, or visit us in Mill Valley."
      />

      {/* ═══════════ CONTACT DETAILS + FORM ═══════════ */}
      <section className="section-pad bg-ivory">
        <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          <div className="grid gap-[clamp(40px,6vw,80px)] md:grid-cols-2">
            {/* Left — Contact Info */}
            <RevealOnScroll>
              <div>
                <p className="mb-5 font-body text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-gold-muted">
                  Visit Us
                </p>
                <h2 className="mb-8 font-display text-[clamp(1.6rem,2.5vw,2.2rem)] font-light leading-[1.15] text-forest">
                  Our Mill Valley Clinic
                </h2>

                <div className="flex flex-col gap-6">
                  {/* Address */}
                  <div>
                    <h3 className="mb-1.5 font-body text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-stone">
                      Address
                    </h3>
                    <p className="text-[0.95rem] leading-[1.7] text-body">
                      655 Redwood Highway, Suite 370
                      <br />
                      Mill Valley, CA 94941
                    </p>
                  </div>

                  {/* Phone */}
                  <div>
                    <h3 className="mb-1.5 font-body text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-stone">
                      Phone
                    </h3>
                    <a
                      href="tel:+14159281352"
                      className="text-[0.95rem] text-forest underline underline-offset-2 transition-colors hover:text-gold-muted"
                    >
                      (415) 928-1352
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <h3 className="mb-1.5 font-body text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-stone">
                      Email
                    </h3>
                    <a
                      href="mailto:info@globalapheresis.com"
                      className="text-[0.95rem] text-forest underline underline-offset-2 transition-colors hover:text-gold-muted"
                    >
                      info@globalapheresis.com
                    </a>
                  </div>

                  {/* Hours */}
                  <div>
                    <h3 className="mb-1.5 font-body text-[0.75rem] font-semibold uppercase tracking-[0.1em] text-stone">
                      Hours
                    </h3>
                    <p className="text-[0.95rem] leading-[1.7] text-body">
                      Monday – Friday: 9:00 AM – 5:00 PM
                      <br />
                      Saturday – Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Right — Form */}
            <RevealOnScroll delay={1}>
              <div className="border border-black/6 bg-cream p-[clamp(28px,3vw,40px)]">
                <h3 className="mb-6 font-display text-[1.3rem] font-normal leading-[1.15] text-forest">
                  Send Us a Message
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
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="How can we help you?"
                      className="w-full border border-black/8 bg-ivory px-4 py-3 font-body text-[0.92rem] text-forest outline-none transition-colors focus:border-gold"
                    />
                  </div>
                  <button
                    type="submit"
                    className="group mt-2 inline-flex items-center justify-center gap-2.5 border border-gold bg-gold px-9 py-4 font-body text-[0.8rem] font-medium uppercase tracking-[0.1em] text-forest transition-all duration-400 hover:bg-gold-light"
                  >
                    Send Message{" "}
                    <span className="btn-arrow-animate">&rarr;</span>
                  </button>
                </form>
              </div>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ═══════════ GOOGLE MAP ═══════════ */}
      <section className="bg-cream">
        <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)] pb-[clamp(80px,12vw,160px)]">
          <RevealOnScroll>
            <div className="aspect-[21/9] w-full overflow-hidden border border-black/6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3145.8!2d-122.5256!3d37.9060!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s655+Redwood+Highway+Suite+370+Mill+Valley+CA+94941!5e0!3m2!1sen!2sus!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Global Apheresis — 655 Redwood Highway, Suite 370, Mill Valley, CA 94941"
              />
            </div>
          </RevealOnScroll>
        </div>
      </section>

    </>
  );
}
