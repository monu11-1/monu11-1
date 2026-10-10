import { ArrowUpRight } from "lucide-react";
import { platforms } from "@/data/homepage";
import { SectionLabel } from "@/components/ui/SectionLabel";

const badgeTone = {
  red: "bg-brand-red/10 text-brand-red",
  green: "bg-brand-green/10 text-brand-green",
  gold: "bg-brand-gold/15 text-amber-700",
  blue: "bg-brand-blue/10 text-brand-blue",
};

export function Ecosystem() {
  return (
    <section id="ecosystem" className="relative overflow-hidden bg-white py-16 sm:py-20">
      <p
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 whitespace-nowrap font-display text-[12vw] font-extrabold uppercase tracking-tighter text-surface"
      >
        Sagenex Ecosystem
      </p>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <SectionLabel>Our Platforms</SectionLabel>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-extrabold text-foreground sm:text-5xl">
          One Ecosystem.{" "}
          <span className="text-brand-green">Infinite Possibilities.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-muted">
          Innovative platforms designed to revolutionise blockchain, trading,
          and investment — all under one roof.
        </p>

        <div className="mt-12 divide-y divide-border border-y border-border">
          {platforms.map((platform) => (
            <article
              key={platform.number}
              className="group grid gap-4 py-7 transition-colors hover:bg-surface/60 sm:grid-cols-[88px_1fr_auto] sm:items-center sm:gap-8"
            >
              <span className="font-display text-3xl font-extrabold text-border group-hover:text-brand-red/40">
                {platform.number}
              </span>
              <div>
                <h3 className="font-display text-2xl font-extrabold text-foreground">
                  {platform.name}
                </h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
                  {platform.description}
                </p>
              </div>
              <span
                className={`inline-flex w-fit items-center gap-1 rounded-full px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider ${badgeTone[platform.tone]}`}
              >
                {platform.badge}
                <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
