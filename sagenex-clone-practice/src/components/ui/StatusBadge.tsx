type StatusBadgeProps = {
  children: React.ReactNode;
  tone?: "success" | "warning" | "error" | "neutral" | "gold" | "info";
  className?: string;
};

const tones = {
  success: "bg-emerald-50 text-emerald-700 border-emerald-200",
  warning: "bg-amber-50 text-amber-700 border-amber-200",
  error: "bg-red-50 text-brand-red border-red-200",
  neutral: "bg-slate-50 text-slate-600 border-slate-200",
  gold: "bg-amber-50 text-amber-800 border-amber-200",
  info: "bg-sky-50 text-sky-700 border-sky-200",
};

export function StatusBadge({
  children,
  tone = "neutral",
  className = "",
}: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold tracking-wide ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
