"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/data/homepage";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <SectionLabel>FAQ</SectionLabel>
        <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground sm:text-5xl">
          Questions, <span className="text-brand-green">answered.</span>
        </h2>

        <div className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map((faq, index) => {
            const open = openIndex === index;
            return (
              <div key={faq.question} className="py-1">
                <button
                  type="button"
                  className="flex w-full items-start gap-4 py-5 text-left"
                  aria-expanded={open}
                  onClick={() =>
                    setOpenIndex((current) =>
                      current === index ? null : index,
                    )
                  }
                >
                  <span className="mt-0.5 font-display text-sm font-bold text-brand-green">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 font-semibold text-foreground">
                    {faq.question}
                  </span>
                  {open ? (
                    <Minus className="mt-0.5 h-5 w-5 shrink-0 text-muted" />
                  ) : (
                    <Plus className="mt-0.5 h-5 w-5 shrink-0 text-muted" />
                  )}
                </button>
                {open ? (
                  <p className="pb-5 pl-12 text-sm leading-relaxed text-muted">
                    {faq.answer}
                  </p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
