export function DemoBanner() {
  return (
    <div className="relative z-[60] bg-foreground text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-2 px-4 py-2 text-center text-xs font-semibold tracking-wide sm:text-sm">
        <span className="inline-flex items-center rounded-full bg-brand-red px-2 py-0.5 text-[10px] uppercase tracking-wider">
          Demo
        </span>
        <span>
          PRACTICE CLONE — fictional data only. Not the official Sagenex site.
          No real payments, wallets, or accounts.
        </span>
      </div>
    </div>
  );
}
