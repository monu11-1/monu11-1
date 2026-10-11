type PageHeaderProps = {
  title: string;
  subtitle?: string;
  actions?: React.ReactNode;
};

export function PageHeader({ title, subtitle, actions }: PageHeaderProps) {
  return (
    <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
      <div>
        <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-red">
          Demo / Practice
        </p>
        <h1 className="mt-1 font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-1 max-w-2xl text-sm text-muted">{subtitle}</p>
        ) : null}
      </div>
      {actions}
    </div>
  );
}
