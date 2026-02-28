"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  items: FAQItem[];
}

export default function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) =>
    setOpenIndex((prev) => (prev === i ? null : i));

  return (
    <div className="flex flex-col gap-2.5">
      {items.map((faq, i) => {
        const isOpen = openIndex === i;
        return (
          <div
            key={i}
            className="overflow-hidden border border-black/6 bg-cream"
          >
            <button
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between p-6 text-left transition-colors hover:bg-ivory"
            >
              <span className="font-display text-[1.15rem] font-normal leading-[1.3] text-forest">
                {faq.question}
              </span>
              <span
                className={`ml-4 shrink-0 font-display text-[1.5rem] leading-none text-gold transition-transform duration-300 ${
                  isOpen ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-[0.95rem] leading-[1.75] text-body">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
