"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const serviceTreatments = [
  { label: "Therapeutic Plasma Exchange", href: "/treatments/therapeutic-plasma-exchange" },
  { label: "Lipid Apheresis", href: "/treatments/lipid-apheresis" },
  { label: "Cytoreduction & Stem Cell Collections", href: "/treatments/cytoreduction-stem-cell" },
  { label: "Super Albumin", href: "/treatments/super-albumin" },
];

const serviceConditions = [
  { label: "Alzheimer\u2019s & Cognitive Decline", href: "/treatments/alzheimers-cognitive-decline" },
  { label: "Longevity & Health Optimization", href: "/treatments/longevity-optimization" },
  { label: "Autoimmune Disorders", href: "/treatments/autoimmune-disorders" },
  { label: "Post-Infectious Syndromes", href: "/treatments/post-infectious-syndromes" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  // aboutExpanded kept for potential future use
  const [aboutExpanded, setAboutExpanded] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesExpanded(false);
    setAboutExpanded(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const navLinkClass =
    "nav-link-animated text-[0.78rem] font-normal uppercase tracking-[0.06em] text-body transition-colors hover:text-forest";

  const dropdownLinkClass =
    "block whitespace-nowrap px-3 py-2 text-[0.78rem] font-normal normal-case tracking-normal text-body transition-colors hover:bg-ivory hover:text-forest";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          scrolled || mobileOpen
            ? "bg-cream/92 backdrop-blur-[16px] py-3 shadow-[0_1px_0_rgba(0,0,0,0.06)]"
            : "py-4"
        }`}
      >
        <div className="mx-auto max-w-[1160px] px-[clamp(24px,5vw,48px)]">
          {/* Row 1: Logo + Nav Links */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/ga-sphere-only.png"
                alt="Global Apheresis"
                width={40}
                height={40}
                className="h-10 w-auto mix-blend-multiply transition-opacity duration-300 hover:opacity-80"
              />
              <span className="whitespace-nowrap font-display text-[1.35rem] tracking-[0.01em]">
                <span className="font-semibold text-gold">Global</span>{" "}
                <span className="font-light text-gold">Apheresis</span>
              </span>
            </Link>

            {/* Desktop Nav Links */}
            <ul className="hidden items-center gap-[clamp(18px,2.5vw,36px)] lg:flex">
              {/* Services — with dropdown */}
              <li className="group relative">
                <Link href="/treatments" className={navLinkClass}>
                  Services
                </Link>
                {/* Two-column dropdown */}
                <div className="nav-dropdown absolute right-0 top-full pt-4">
                  <div className="flex w-[520px] gap-0 border border-black/6 bg-cream/98 shadow-[0_16px_48px_rgba(27,51,40,0.08)] backdrop-blur-[12px]">
                    {/* Treatments column */}
                    <div className="flex-1 border-r border-black/6 p-4">
                      <p className="mb-2 px-3 font-body text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-gold-muted">
                        Treatments
                      </p>
                      <ul className="flex flex-col gap-0.5">
                        {serviceTreatments.map((item) => (
                          <li key={item.href}>
                            <Link href={item.href} className={dropdownLinkClass}>
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Conditions column */}
                    <div className="flex-1 p-4">
                      <p className="mb-2 px-3 font-body text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-gold-muted">
                        Conditions
                      </p>
                      <ul className="flex flex-col gap-0.5">
                        {serviceConditions.map((item) => (
                          <li key={item.href}>
                            <Link href={item.href} className={dropdownLinkClass}>
                              {item.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>

              <li>
                <Link href="/physicians" className={navLinkClass}>
                  Physicians
                </Link>
              </li>
              <li>
                <Link href="/affiliates" className={navLinkClass}>
                  Affiliates
                </Link>
              </li>

              <li>
                <Link href="/about" className={navLinkClass}>
                  About
                </Link>
              </li>

              <li>
                <Link href="/blog" className={navLinkClass}>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className={navLinkClass}>
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/free-consultation"
                  className="whitespace-nowrap border border-gold px-4 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.06em] text-forest transition-all duration-400 hover:border-forest hover:bg-forest hover:text-cream"
                >
                  Book a Free Consultation
                </Link>
              </li>
            </ul>

            {/* Hamburger Toggle (mobile) */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="relative z-[1001] flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
            >
              <span
                className={`block h-[1.5px] w-5 bg-forest transition-all duration-300 ${
                  mobileOpen ? "translate-y-[6.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-5 bg-forest transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-[1.5px] w-5 bg-forest transition-all duration-300 ${
                  mobileOpen ? "-translate-y-[6.5px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Menu Overlay — rendered outside nav to avoid stacking context issues */}
      <div
        className={`fixed inset-0 z-[999] bg-cream transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex h-full flex-col overflow-y-auto pt-24 pb-10 px-[clamp(24px,5vw,48px)]">
          <ul className="flex flex-col gap-0">
            {/* Services — expandable */}
            <li className="border-b border-black/6">
              <button
                onClick={() => setServicesExpanded(!servicesExpanded)}
                className="flex w-full items-center justify-between py-4 font-display text-[1.4rem] font-light text-forest"
              >
                <span>Services</span>
                <span
                  className={`text-gold transition-transform duration-300 ${
                    servicesExpanded ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <div
                className={`grid transition-all duration-400 ${
                  servicesExpanded
                    ? "grid-rows-[1fr] pb-4 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  {/* Treatments */}
                  <p className="mb-1 pl-2 font-body text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-gold-muted">
                    Treatments
                  </p>
                  <ul className="mb-4 flex flex-col gap-1 pl-2">
                    {serviceTreatments.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block py-2 text-[0.92rem] text-body transition-colors hover:text-forest"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  {/* Conditions */}
                  <p className="mb-1 pl-2 font-body text-[0.65rem] font-semibold uppercase tracking-[0.12em] text-gold-muted">
                    Conditions
                  </p>
                  <ul className="flex flex-col gap-1 pl-2">
                    {serviceConditions.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className="block py-2 text-[0.92rem] text-body transition-colors hover:text-forest"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-2 border-t border-black/6 pt-2 pl-2">
                    <Link
                      href="/treatments"
                      className="block py-2 text-[0.78rem] font-semibold uppercase tracking-[0.08em] text-gold-muted"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            {/* Physicians */}
            <li className="border-b border-black/6">
              <Link
                href="/physicians"
                className="block py-4 font-display text-[1.4rem] font-light text-forest transition-colors hover:text-gold"
              >
                Physicians
              </Link>
            </li>

            {/* Affiliates */}
            <li className="border-b border-black/6">
              <Link
                href="/affiliates"
                className="block py-4 font-display text-[1.4rem] font-light text-forest transition-colors hover:text-gold"
              >
                Affiliates
              </Link>
            </li>

            {/* About — direct link */}
            <li className="border-b border-black/6">
              <Link
                href="/about"
                className="block py-4 font-display text-[1.4rem] font-light text-forest transition-colors hover:text-gold"
              >
                About
              </Link>
            </li>

            {/* Blog */}
            <li className="border-b border-black/6">
              <Link
                href="/blog"
                className="block py-4 font-display text-[1.4rem] font-light text-forest transition-colors hover:text-gold"
              >
                Blog
              </Link>
            </li>

            {/* Contact */}
            <li className="border-b border-black/6">
              <Link
                href="/contact"
                className="block py-4 font-display text-[1.4rem] font-light text-forest transition-colors hover:text-gold"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* CTA */}
          <div className="mt-8">
            <Link
              href="/free-consultation"
              className="block w-full border border-gold py-4 text-center text-[0.78rem] font-medium uppercase tracking-[0.1em] text-forest transition-all duration-400 hover:border-forest hover:bg-forest hover:text-cream"
            >
              Book a Free Consultation
            </Link>
          </div>

          {/* Contact fallback */}
          <div className="mt-auto pt-8 text-center text-[0.82rem] text-stone">
            <a
              href="tel:+14159281352"
              className="transition-colors hover:text-forest"
            >
              (415) 928-1352
            </a>
            <span className="mx-2">&middot;</span>
            <a
              href="mailto:info@globalapheresis.com"
              className="transition-colors hover:text-forest"
            >
              info@globalapheresis.com
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
