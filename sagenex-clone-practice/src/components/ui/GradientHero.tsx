type GradientHeroProps = {
  eyebrow?: string;
  title: string;
  children?: React.ReactNode;
  className?: string;
};

export function GradientHero({
  eyebrow,
  title,
  children,
  className = "",
}: GradientHeroProps) {
  return (
    <section
      className={`gradient-hero-red relative overflow-hidden rounded-2xl px-5 py-6 text-white shadow-[var(--card-shadow)] sm:px-7 sm:py-7 ${className}`}
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
      <div className="pointer-events-none absolute -bottom-16 left-10 h-40 w-40 rounded-full bg-black/10 blur-2xl" />
      {eyebrow ? (
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/75">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="relative mt-2 font-display text-xl font-extrabold sm:text-2xl">
        {title}
      </h2>
      {children ? <div className="relative mt-4">{children}</div> : null}
    </section>
  );
}
