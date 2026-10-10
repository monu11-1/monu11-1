import { legacyStats } from "@/data/homepage";
import { SectionLabel } from "@/components/ui/SectionLabel";

export function Legacy() {
  return (
    <section id="legacy" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionLabel>Our Legacy</SectionLabel>
        <h2 className="mt-4 max-w-3xl font-display text-3xl font-extrabold leading-tight text-foreground sm:text-5xl">
          Trust is built by{" "}
          <span className="text-brand-green">structure.</span>
        </h2>

        <blockquote className="mt-8 max-w-3xl border-l-4 border-brand-red/30 pl-5 text-lg italic leading-relaxed text-muted sm:text-xl">
          &ldquo;Trust is not built by promises. It is built by structure,
          discipline, and time.&rdquo;
          <footer className="mt-3 text-sm font-semibold not-italic text-foreground">
            — Monish Adari, Founder & CEO
          </footer>
        </blockquote>

        <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted">
          At Sagenex, we prioritize sustainability over shortcuts. Our ecosystem
          is protected by strict caps, diverse real-world asset backing, and a
          structured growth model designed to endure market volatility.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {legacyStats.map((stat) => {
            const tone =
              stat.tone === "green"
                ? "text-brand-green"
                : stat.tone === "gold"
                  ? "text-amber-700"
                  : "text-brand-red";
            return (
              <div
                key={stat.label}
                className="rounded-3xl border border-border bg-surface px-6 py-7 shadow-[var(--card-shadow)]"
              >
                <p className={`font-display text-3xl font-extrabold ${tone}`}>
                  {stat.value}
                </p>
                <p className="mt-2 text-sm font-medium text-muted">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
