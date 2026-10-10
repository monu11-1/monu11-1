import { tickerItems } from "@/data/homepage";

const toneClasses = {
  green: "bg-brand-green/10 text-brand-green",
  red: "bg-brand-red/10 text-brand-red",
  gold: "bg-brand-gold/15 text-amber-700",
  blue: "bg-brand-blue/10 text-brand-blue",
};

export function Ticker() {
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="overflow-hidden border-y border-border bg-white py-3">
      <div className="animate-ticker flex w-max gap-3">
        {items.map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-semibold text-foreground"
          >
            {item.name}
            <span
              className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${toneClasses[item.tone]}`}
            >
              {item.tag}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
