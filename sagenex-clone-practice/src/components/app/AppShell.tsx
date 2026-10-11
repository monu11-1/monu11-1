"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Shield,
  Home,
  LogIn,
  Menu,
  X,
  type LucideIcon,
} from "lucide-react";
import { useState } from "react";
import { BrandMark } from "@/components/ui/BrandMark";

type NavItem = {
  href: string;
  label: string;
  icon: LucideIcon;
};

const memberNav: NavItem[] = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/admin", label: "Admin (demo)", icon: Shield },
  { href: "/", label: "Marketing site", icon: Home },
  { href: "/login", label: "Login UI", icon: LogIn },
];

const adminNav: NavItem[] = [
  { href: "/admin", label: "Admin home", icon: Shield },
  { href: "/dashboard", label: "Member view", icon: LayoutDashboard },
  { href: "/", label: "Marketing site", icon: Home },
  { href: "/login", label: "Login UI", icon: LogIn },
];

type AppShellProps = {
  title: string;
  subtitle: string;
  mode: "member" | "admin";
  children: React.ReactNode;
};

export function AppShell({ title, subtitle, mode, children }: AppShellProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const nav = mode === "admin" ? adminNav : memberNav;

  return (
    <div className="min-h-[calc(100vh-40px)] bg-surface">
      <div className="mx-auto flex max-w-7xl gap-0 lg:gap-6 lg:px-4 lg:py-6">
        <aside className="hidden w-64 shrink-0 rounded-3xl border border-border bg-white p-4 shadow-[var(--card-shadow)] lg:block">
          <Link href="/" className="mb-6 block px-2">
            <BrandMark size="sm" />
          </Link>
          <p className="px-2 text-[10px] font-bold uppercase tracking-[0.18em] text-brand-red">
            {mode === "admin" ? "Admin practice" : "Member practice"}
          </p>
          <nav className="mt-4 flex flex-col gap-1">
            {nav.map((item) => {
              const active = pathname === item.href;
              const Icon = item.icon;
              return (
                <Link
                  key={item.href + item.label}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm font-semibold transition-colors ${
                    active
                      ? "bg-brand-red text-white"
                      : "text-muted hover:bg-surface hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <p className="mt-8 px-2 text-xs leading-relaxed text-muted-light">
            Fictional demo data only. No real auth, KYC, or money movement.
          </p>
        </aside>

        <div className="min-w-0 flex-1">
          <header className="sticky top-[2.75rem] z-40 border-b border-border bg-white/95 px-4 py-3 backdrop-blur lg:static lg:rounded-3xl lg:border lg:shadow-[var(--card-shadow)] lg:px-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-brand-green">
                  Demo / Practice
                </p>
                <h1 className="font-display text-2xl font-extrabold text-foreground sm:text-3xl">
                  {title}
                </h1>
                <p className="mt-1 text-sm text-muted">{subtitle}</p>
              </div>
              <button
                type="button"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
                aria-label={open ? "Close menu" : "Open menu"}
                onClick={() => setOpen((value) => !value)}
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
            {open ? (
              <nav className="mt-3 flex flex-col gap-1 border-t border-border pt-3 lg:hidden">
                {nav.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href + item.label}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-semibold text-foreground hover:bg-surface"
                    >
                      <Icon className="h-4 w-4" />
                      {item.label}
                    </Link>
                  );
                })}
              </nav>
            ) : null}
          </header>

          <div className="px-4 py-5 sm:px-6 lg:px-0 lg:pt-6">{children}</div>
        </div>
      </div>
    </div>
  );
}
