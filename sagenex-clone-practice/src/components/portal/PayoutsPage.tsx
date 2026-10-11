"use client";

import {
  ChevronDown,
  Gift,
  Info,
  IndianRupee,
  LineChart,
  Wallet,
} from "lucide-react";
import { distributionEvents, portalMember } from "@/data/mock/portal";
import { formatInr, formatInrCompact } from "@/lib/format";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function PayoutsPage() {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-extrabold text-slate-900">
            Distribution Statements
          </h1>
          <p className="mt-1 text-sm text-muted">
            Review current-cycle values, activity sources and credited history.
          </p>
        </div>
        <Button variant="secondary" className="!px-4 !py-2">
          <Info className="h-3.5 w-3.5" />
          Distribution Info
        </Button>
      </div>

      <section className="gradient-hero-red relative overflow-hidden rounded-2xl px-5 py-6 text-white shadow-[var(--card-shadow)]">
        <IndianRupee className="pointer-events-none absolute -right-4 bottom-0 h-40 w-40 text-white/10" />
        <p className="font-display text-4xl font-extrabold">{formatInrCompact(0)}</p>
        <p className="mt-1 text-sm text-white/80">
          Current cycle value returned by the account service
        </p>
        <div className="mt-5 grid gap-2 md:grid-cols-3">
          <HeroTile
            icon={Wallet}
            label="Loaded Distribution Value"
            value={formatInr(19200)}
            hint="Current and loaded records"
          />
          <HeroTile
            icon={Gift}
            label="Loaded Additional Credits"
            value={formatInr(384291)}
            hint="Activity and recognition credits"
          />
          <HeroTile
            icon={Wallet}
            label="Loaded Total Credited"
            value={formatInr(403491)}
            hint="Credited records currently loaded"
          />
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
              Next Review
            </p>
            <div className="mt-1 flex items-center gap-2">
              <h2 className="font-display text-xl font-extrabold">
                Ceiling reached
              </h2>
              <StatusBadge tone="success">Completed</StatusBadge>
            </div>
            <p className="mt-1 text-sm text-muted">Review date: N/A</p>
          </div>
        </div>
        <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-3 py-3 text-sm text-amber-950">
          Your package has reached its 2.5x contractual ceiling of{" "}
          {formatInr(225000)}. Distributions and the review countdown are now
          closed. Add a contribution or reactivate your package to start a new
          cycle.{" "}
          <a href="/wallet" className="font-bold text-brand-red underline">
            Go to Settlements to reactivate
          </a>
          .
        </p>
        <div className="mt-4">
          <div className="mb-1 flex items-center justify-between text-xs text-muted">
            <span>100.0% of current cycle completed.</span>
            <span>The next account review becomes due when this cycle completes.</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-full rounded-full bg-brand-green" />
          </div>
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-red">
            <Wallet className="h-3.5 w-3.5" />
            Current Distribution Breakdown
          </p>
          <p className="mt-1 text-sm text-muted">
            Current cycle recorded components
          </p>
          <p className="mt-8 text-center text-sm text-muted">
            No distribution components are recorded for this cycle yet.
          </p>
          <div className="mt-8 flex items-center justify-between border-t border-border pt-3 text-sm font-bold">
            <span>TOTAL</span>
            <span className="text-brand-green">{formatInrCompact(0)}</span>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-brand-red">
            <LineChart className="h-3.5 w-3.5" />
            Distribution Review
          </p>
          <p className="mt-1 text-sm text-muted">
            Backend-calculated current cycle values
          </p>
          <p className="mt-6 font-display text-3xl font-extrabold">
            {formatInrCompact(0)}
          </p>
          <div className="mt-4 h-16 rounded-xl bg-gradient-to-r from-violet-200 via-sky-200 to-emerald-200 opacity-80" />
        </section>
      </div>

      <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-red">
              Current Distribution Composition
            </p>
            <h2 className="mt-1 font-display text-lg font-extrabold">
              Activity sources
            </h2>
          </div>
          <p className="max-w-sm text-right text-xs text-muted">
            Source rates and amounts are returned by the backend and reconcile to
            the current cycle total.
          </p>
        </div>
        <p className="mt-8 text-center text-sm text-muted">
          No source allocation is available for the current cycle.
        </p>
      </section>

      <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-display text-lg font-extrabold">
            Distribution Events
          </h2>
          <button
            type="button"
            className="text-sm font-semibold text-brand-red hover:underline"
          >
            View all
          </button>
        </div>
        <ul className="mt-4 space-y-2">
          {distributionEvents.map((event) => (
            <li
              key={event.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border px-4 py-3"
            >
              <div>
                <p className="font-display text-base font-extrabold">
                  {event.period}
                </p>
                <p className="text-xs text-muted">{event.label}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
                  Recorded Amount
                </p>
                <p className="font-bold">
                  {formatInrCompact(event.amountInr)}
                </p>
              </div>
              <StatusBadge tone="success">{event.status}</StatusBadge>
              <ChevronDown className="h-4 w-4 text-muted" />
            </li>
          ))}
        </ul>
        <p className="mt-4 text-xs text-muted">
          Package gold equivalent on file: demo{" "}
          {portalMember.packageGoldGrams.toFixed(3)} g — not a live distribution
          entitlement.
        </p>
      </section>
    </div>
  );
}

function HeroTile({
  icon: Icon,
  label,
  value,
  hint,
}: {
  icon: typeof Wallet;
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-xl border border-white/15 bg-black/20 px-3 py-3">
      <p className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white/70">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </p>
      <p className="mt-1 text-lg font-bold">{value}</p>
      <p className="text-xs text-white/70">{hint}</p>
    </div>
  );
}
