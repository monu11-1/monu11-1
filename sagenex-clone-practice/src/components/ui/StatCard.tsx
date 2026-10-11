type StatCardProps = {
  label: string;
  value: string;
  hint?: string;
  tone?: "green" | "red" | "gold" | "blue";
};

const tones = {
  green: "text-brand-green",
  red: "text-brand-red",
  gold: "text-amber-600",
  blue: "text-brand-blue",
};

export function StatCard({
  label,
  value,
  hint,
  tone = "green",
}: StatCardProps) {
  return (
    <article className="rounded-3xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted">
        {label}
      </p>
      <p className={`mt-2 font-display text-2xl font-extrabold ${tones[tone]}`}>
        {value}
      </p>
      {hint ? <p className="mt-2 text-xs text-muted-light">{hint}</p> : null}
    </article>
  );
}
