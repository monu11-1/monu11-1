"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LogOut } from "lucide-react";
import { customerNav } from "@/components/portal/CustomerNav";
import { portalMember } from "@/data/mock/portal";
import { formatGrams } from "@/lib/format";
import { BrandMark } from "@/components/ui/BrandMark";

type CustomerSidebarProps = {
  onNavigate?: () => void;
};

export function CustomerSidebar({ onNavigate }: CustomerSidebarProps) {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-[225px] flex-col border-r border-border bg-white">
      <div className="border-b border-border px-4 py-4">
        <Link href="/" onClick={onNavigate} className="block">
          <BrandMark size="sm" />
          <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.14em] text-muted">
            Customer & Partner Portal
          </p>
        </Link>

        <div className="mt-4 flex items-center gap-2.5 rounded-xl border border-border bg-surface-muted px-2.5 py-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-red/15 text-sm font-bold text-brand-red">
            {portalMember.initial}
          </div>
          <div className="min-w-0">
            <p className="truncate text-xs font-bold text-slate-900">
              {portalMember.shortName}
            </p>
            <span className="mt-0.5 inline-flex rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-bold text-brand-red">
              {portalMember.memberLabel}
            </span>
          </div>
        </div>
      </div>

      <nav className="flex-1 space-y-0.5 overflow-y-auto px-2 py-3">
        {customerNav
          .filter((item) => item.href !== "/login")
          .map((item) => {
            const Icon = item.icon;
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onNavigate}
                className={`flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-[13px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red ${
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

      <div className="space-y-2 border-t border-border p-3">
        <div className="rounded-xl bg-gradient-to-br from-amber-100 via-amber-50 to-yellow-50 px-3 py-3 ring-1 ring-amber-200/70">
          <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-amber-800">
            Package Gold Equivalent
          </p>
          <p className="mt-1 font-display text-lg font-extrabold text-slate-900">
            {formatGrams(portalMember.packageGoldGrams)}
          </p>
          <p className="mt-1 text-[10px] text-amber-900/70">Demo figure only</p>
        </div>
        <Link
          href="/login"
          onClick={onNavigate}
          className="flex items-center gap-2 rounded-lg px-2 py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50"
        >
          <LogOut className="h-4 w-4" />
          Logout
        </Link>
      </div>
    </aside>
  );
}
