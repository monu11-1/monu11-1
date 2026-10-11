type SectionLabelProps = {
  children: React.ReactNode;
  tone?: "green" | "red";
  className?: string;
};

export function SectionLabel({
  children,
  tone = "green",
  className = "",
}: SectionLabelProps) {
  const color =
    tone === "red" ? "text-brand-red" : "text-brand-green";

  return (
    <p
      className={`text-xs font-bold uppercase tracking-[0.18em] ${color} ${className}`}
    >
      {children}
    </p>
  );
}
