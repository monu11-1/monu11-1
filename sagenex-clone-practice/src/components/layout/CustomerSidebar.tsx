"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BrandMark } from "@/components/ui/BrandMark";
import { customerNav } from "@/components/portal/CustomerNav";

type CustomerSidebarProps = {
  onNavigate?: () => void;
};

export function CustomerSidebar({ onNavigate }: CustomerSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-[var(--sidebar-width)] flex-col border-r border-border bg-white">
      <div className="border-b border-border px-4 py-4">
        <Link href="/" onClick={onNavigate} className="block">
          <BrandMark size="sm" />
        </Link>
        <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.16em] text-brand-red">
          Customer portal · Demo
        </p>
      </div>

      <nav className="flex-1 space-y-0.5 overflow-y-auto px-2 py-3">
        {customerNav.map((item) => {
          const Icon = item.icon;
          const active =
            item.href !== "/login" &&
            (pathname === item.href || pathname.startsWith(`${item.href}/`));
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={`flex items-center gap-2.5 rounded-lg px-3 py-2.5 text-[13px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red ${
                active
                  ? "bg-brand-red text-white shadow-sm"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span className="leading-tight">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-border px-4 py-3 text-[11px] leading-relaxed text-muted">
        DEMO / NOT A REAL FINANCIAL RECORD. Fictional balances and documents
        only.
      </div>
    </aside>
  );
}
