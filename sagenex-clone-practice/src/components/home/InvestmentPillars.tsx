import { Check } from "lucide-react";
import { investmentPillars } from "@/data/homepage";
import { SectionLabel } from "@/components/ui/SectionLabel";

const themes = {
  red: {
    badge: "bg-brand-red/10 text-brand-red",
    accent: "text-brand-red",
    ring: "border-brand-red/20",
  },
  green: {
    badge: "bg-brand-green/10 text-brand-green",
    accent: "text-brand-green",
    ring: "border-brand-green/20",
  },
  blue: {
    badge: "bg-brand-blue/10 text-brand-blue",
    accent: "text-brand-blue",
    ring: "border-brand-blue/20",
  },
};

export function InvestmentPillars() {
  return (
    <section className="bg-surface py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionLabel>Capital Deployment</SectionLabel>
        <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground sm:text-5xl">
          Our Investment <span className="text-brand-red">Pillars</span>
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Structured, capped, and diversified. We deploy capital across strictly
          managed verticals to ensure maximum ecosystem safety.
        </p>
        <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-brand-red">
          Fictional demo figures for teaching — not real offers
        </p>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {investmentPillars.map((pillar) => {
            const theme = themes[pillar.theme];
            return (
              <article
                key={pillar.id}
                className={`rounded-3xl border bg-white p-6 shadow-[var(--card-shadow)] ${theme.ring}`}
              >
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${theme.badge}`}
                >
                  {pillar.tag}
                </span>
                <h3
                  className={`mt-4 font-display text-xl font-extrabold ${theme.accent}`}
                >
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {pillar.summary}
                </p>
                <ul className="mt-5 space-y-2.5">
                  {pillar.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <Check
                        className={`mt-0.5 h-4 w-4 shrink-0 ${theme.accent}`}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
