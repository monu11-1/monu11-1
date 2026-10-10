import Link from "next/link";
import { footerLinks } from "@/data/homepage";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-extrabold tracking-tight">
            <span className="text-foreground">SAGE</span>
            <span className="text-brand-red">NEX</span>
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            A global wealth ecosystem uniting AI, real-world assets, and
            community power. Built with transparency and performance at its
            core.
          </p>
          <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-brand-red">
            Practice clone · Demo data only
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
            Ecosystem
          </h3>
          <ul className="mt-4 space-y-2">
            {footerLinks.ecosystem.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-brand-red"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-foreground">
            Legal & Resources
          </h3>
          <ul className="mt-4 space-y-2">
            {footerLinks.legal.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="text-sm text-muted transition-colors hover:text-brand-red"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <Link
                href="/login"
                className="text-sm text-muted transition-colors hover:text-brand-red"
              >
                Login (placeholder)
              </Link>
            </li>
            <li>
              <Link
                href="/dashboard"
                className="text-sm text-muted transition-colors hover:text-brand-red"
              >
                Dashboard (placeholder)
              </Link>
            </li>
            <li>
              <Link
                href="/admin"
                className="text-sm text-muted transition-colors hover:text-brand-red"
              >
                Admin (placeholder)
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-4 py-5 text-sm text-muted-light sm:px-6">
          © 2026 Sagenex practice clone. Unofficial teaching project. All rights
          reserved by their respective owners.
        </p>
      </div>
    </footer>
  );
}
