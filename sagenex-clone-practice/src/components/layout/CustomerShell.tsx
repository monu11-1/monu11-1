"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";
import { CustomerSidebar } from "@/components/layout/CustomerSidebar";
import { FloatingPortalControls } from "@/components/layout/FloatingPortalControls";
import { useDemoRole } from "@/hooks/useDemoRole";

type CustomerShellProps = {
  children: React.ReactNode;
};

export function CustomerShell({ children }: CustomerShellProps) {
  const [open, setOpen] = useState(false);
  const { role, setRole } = useDemoRole("customer");

  return (
    <div className="min-h-[calc(100vh-40px)] bg-background">
      <div className="flex min-h-[calc(100vh-40px)]">
        <div className="sticky top-10 hidden h-[calc(100vh-40px)] shrink-0 lg:block">
          <CustomerSidebar />
        </div>

        <div className="min-w-0 flex-1">
          <div className="sticky top-10 z-30 flex items-center justify-between gap-3 border-b border-border bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
            <p className="text-sm font-bold text-foreground">Customer portal</p>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border"
              aria-label={open ? "Close navigation" : "Open navigation"}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {open ? (
            <div className="fixed inset-0 z-40 lg:hidden">
              <button
                type="button"
                className="absolute inset-0 bg-slate-900/40"
                aria-label="Close menu backdrop"
                onClick={() => setOpen(false)}
              />
              <div className="absolute inset-y-0 left-0 shadow-xl">
                <CustomerSidebar onNavigate={() => setOpen(false)} />
              </div>
            </div>
          ) : null}

          <div className="border-b border-border bg-white px-4 py-2 lg:px-6">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-xs font-semibold text-brand-red">
                DEMO / PRACTICE · Not a real financial record
              </p>
              <label className="flex items-center gap-2 text-xs text-muted">
                Demo role
                <select
                  value={role}
                  onChange={(event) =>
                    setRole(event.target.value as typeof role)
                  }
                  className="rounded-lg border border-border bg-white px-2 py-1 text-xs font-semibold text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red"
                >
                  <option value="customer">Demo customer</option>
                  <option value="support">Demo support agent</option>
                  <option value="admin">Demo admin</option>
                </select>
              </label>
            </div>
          </div>

          <main className="px-4 py-5 sm:px-6 lg:px-8">{children}</main>
        </div>
      </div>

      <FloatingPortalControls />
    </div>
  );
}
