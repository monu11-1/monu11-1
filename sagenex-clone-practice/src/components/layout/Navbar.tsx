"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks } from "@/data/homepage";
import { BrandMark } from "@/components/ui/BrandMark";
import { Button } from "@/components/ui/Button";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-3 z-50 px-3 sm:px-4">
      <nav className="mx-auto flex max-w-6xl items-center justify-between rounded-full border border-white/70 bg-white/90 px-4 py-2.5 shadow-[var(--nav-shadow)] backdrop-blur-md sm:px-6">
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          <BrandMark size="sm" />
        </Link>

        <div className="hidden items-center gap-5 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs font-semibold uppercase tracking-[0.12em] text-muted transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <Button href="/dashboard" variant="secondary" className="!px-4 !py-2.5">
            Dashboard
          </Button>
          <Button href="/login" className="!px-5 !py-2.5">
            Login
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open ? (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-border bg-white p-4 shadow-[var(--card-shadow)] lg:hidden">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-xl px-3 py-2 text-sm font-semibold text-foreground hover:bg-surface"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button href="/dashboard" variant="secondary" className="w-full">
              Dashboard (demo)
            </Button>
            <Button href="/admin" variant="ghost" className="w-full">
              Admin (demo)
            </Button>
            <Button href="/login" className="w-full">
              Login
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
