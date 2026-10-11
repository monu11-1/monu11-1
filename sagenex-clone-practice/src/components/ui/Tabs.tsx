"use client";

type TabItem = {
  id: string;
  label: string;
};

type TabsProps = {
  items: TabItem[];
  value: string;
  onChange: (id: string) => void;
};

export function Tabs({ items, value, onChange }: TabsProps) {
  return (
    <div
      role="tablist"
      className="inline-flex flex-wrap gap-1 rounded-full bg-slate-100 p-1"
    >
      {items.map((item) => {
        const active = item.id === value;
        return (
          <button
            key={item.id}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(item.id)}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red ${
              active
                ? "bg-brand-red text-white shadow-sm"
                : "text-slate-600 hover:bg-white"
            }`}
          >
            {item.label}
          </button>
        );
      })}
    </div>
  );
}
