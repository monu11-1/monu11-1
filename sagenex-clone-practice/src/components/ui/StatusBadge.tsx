type StatusBadgeProps = {
  children: React.ReactNode;
  tone?: "success" | "warning" | "error" | "neutral" | "gold";
  className?: string;
};

const tones = {
  success: "bg-emerald-50 text-brand-green border-emerald-100",
  warning: "bg-amber-50 text-brand-amber border-amber-100",
  error: "bg-red-50 text-brand-red border-red-100",
  neutral: "bg-slate-50 text-muted border-border",
  gold: "bg-amber-50 text-amber-800 border-amber-100",
};

export function StatusBadge({
  children,
  tone = "neutral",
  className = "",
}: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
