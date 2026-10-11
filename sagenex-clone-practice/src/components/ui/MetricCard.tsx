type MetricCardProps = {
  label: string;
  value: string;
  hint?: string;
  tone?: "default" | "red" | "green" | "gold" | "navy";
  className?: string;
};

const valueTone = {
  default: "text-foreground",
  red: "text-brand-red",
  green: "text-brand-green",
  gold: "text-brand-gold",
  navy: "text-slate-900",
};

export function MetricCard({
  label,
  value,
  hint,
  tone = "navy",
  className = "",
}: MetricCardProps) {
  return (
    <article
      className={`rounded-2xl border border-border bg-surface p-4 shadow-[var(--card-shadow)] ${className}`}
    >
      <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
        {label}
      </p>
      <p
        className={`mt-2 font-display text-2xl font-extrabold tracking-tight ${valueTone[tone]}`}
      >
        {value}
      </p>
      {hint ? <p className="mt-2 text-xs leading-relaxed text-muted">{hint}</p> : null}
    </article>
  );
}
