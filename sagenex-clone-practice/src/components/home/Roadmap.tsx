"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { roadmap } from "@/data/homepage";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Roadmap() {
  const [index, setIndex] = useState(0);
  const visible = roadmap.slice(index, index + 3);
  const canPrev = index > 0;
  const canNext = index + 3 < roadmap.length;

  return (
    <section id="roadmap" className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <SectionLabel>Strategic Vision</SectionLabel>
            <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground sm:text-5xl">
              Roadmap <span className="text-brand-green">2025–2030</span>
            </h2>
            <p className="mt-4 max-w-2xl text-muted">
              A step-by-step masterplan to build the most resilient and expansive
              wealth ecosystem of the decade.
            </p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              aria-label="Previous roadmap cards"
              disabled={!canPrev}
              onClick={() => setIndex((value) => Math.max(0, value - 1))}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white disabled:opacity-40"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              aria-label="Next roadmap cards"
              disabled={!canNext}
              onClick={() =>
                setIndex((value) =>
                  Math.min(roadmap.length - 3, value + 1),
                )
              }
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white disabled:opacity-40"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {(visible.length ? visible : roadmap.slice(0, 3)).map((item) => (
            <article
              key={item.year}
              className="rounded-3xl border border-border bg-white p-6 shadow-[var(--card-shadow)]"
            >
              <p className="font-display text-3xl font-extrabold text-brand-green">
                {item.year}
              </p>
              <h3 className="mt-2 font-display text-xl font-bold text-foreground">
                {item.title}
              </h3>
              <ul className="mt-4 space-y-2">
                {item.items.map((point) => (
                  <li
                    key={point}
                    className="flex gap-2 text-sm leading-relaxed text-muted"
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {Array.from({ length: Math.max(1, roadmap.length - 2) }).map(
            (_, dot) => (
              <button
                key={dot}
                type="button"
                aria-label={`Show roadmap starting at position ${dot + 1}`}
                onClick={() => setIndex(dot)}
                className={`h-2.5 w-2.5 rounded-full transition-colors ${
                  index === dot ? "bg-brand-green" : "bg-border"
                }`}
              />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
