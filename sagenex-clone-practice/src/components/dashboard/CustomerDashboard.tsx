"use client";

import { useState } from "react";
import {
  Building2,
  CheckCircle2,
  Clock3,
  Copy,
  FileText,
  IndianRupee,
  Info,
  LifeBuoy,
  Lock,
  Mailbox,
  Scale,
  Shield,
  Target,
  TrendingUp,
  Wallet,
  AlertTriangle,
} from "lucide-react";
import { portalMember, sampleDocuments } from "@/data/mock/portal";
import { formatGrams, formatInr, formatInrCompact } from "@/lib/format";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function CustomerDashboard() {
  const [copied, setCopied] = useState(false);
  const referral = `https://demo.local/r/${portalMember.referralCode}`;

  return (
    <div className="space-y-6">
      {/* Welcome card */}
      <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)] sm:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="flex min-w-0 items-start gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-red-50 text-brand-red">
              <Building2 className="h-5 w-5" />
            </span>
            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-red">
                Gold Custody Account
              </p>
              <h1 className="mt-1 font-display text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Welcome back, {portalMember.displayName} (
                {portalMember.welcomeId})
              </h1>
              <p className="mt-1.5 max-w-2xl text-sm text-muted">
                Your ownership, distributions and compliance records at a
                glance.{" "}
                <span className="font-semibold text-slate-700">
                  DEMO / PRACTICE — not a real financial record.
                </span>
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-muted">
                  Referral link
                </span>
                <code className="max-w-[220px] truncate rounded-lg border border-border bg-surface-muted px-2.5 py-1 text-[11px] text-slate-700 sm:max-w-none">
                  {referral}
                </code>
                <Button
                  type="button"
                  variant="secondary"
                  className="!px-3 !py-1.5 !text-xs"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(referral);
                      setCopied(true);
                      window.setTimeout(() => setCopied(false), 2000);
                    } catch {
                      /* ignore */
                    }
                  }}
                >
                  <Copy className="h-3.5 w-3.5" />
                  {copied ? "Copied" : "Copy"}
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <StatusBadge tone="warning">KYC Requires Rekyc</StatusBadge>
            <StatusBadge tone="neutral">Bank on file</StatusBadge>
            <StatusBadge tone="success">Custody confirmed</StatusBadge>
          </div>
        </div>
      </section>

      {/* Customer Account Overview */}
      <section className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--card-shadow)]">
        <div className="gradient-hero-red flex flex-wrap items-center justify-between gap-3 px-5 py-4 sm:px-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white">
              Customer Account Overview
            </p>
            <p className="mt-1 text-xs text-white/80">
              Verified account values and recorded balances · demo figures only
            </p>
          </div>
          <Clock3 className="h-5 w-5 text-white/70" aria-hidden="true" />
        </div>
        <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6 xl:grid-cols-4">
          <OverviewMetric
            icon={IndianRupee}
            label="Package Purchase Value"
            value={formatInr(0)}
            hint="Current recorded package amount"
          />
          <OverviewMetric
            icon={Scale}
            label="Package Gold Equivalent"
            value={formatGrams(portalMember.packageGoldGrams)}
            hint="Based on recorded package activity; separate from SGNX custody gold"
          />
          <OverviewMetric
            icon={TrendingUp}
            label="Cumulative Value Returned"
            value={formatInrCompact(portalMember.cumulativeReturnedInr)}
            hint="Total recorded bonuses and reward distributions"
          />
          <OverviewMetric
            icon={Mailbox}
            label="Available for Settlement"
            value={formatInrCompact(portalMember.availableSettlementInr)}
            hint="Current available account balance"
          />
        </div>
        <div className="flex items-start gap-2 border-t border-amber-200 bg-amber-50 px-5 py-3.5 text-xs text-amber-950 sm:px-6">
          <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-600" />
          Performance-linked distributions are variable, may be zero and are
          never fixed or guaranteed. Demo illustration only.
        </div>
      </section>

      {/* Ownership + Compliance */}
      <div className="grid gap-5 lg:grid-cols-2">
        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)] sm:p-6">
          <div className="flex items-center gap-2">
            <Lock className="h-4 w-4 text-brand-gold" />
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-red">
              Gold Ownership & Custody
            </p>
          </div>
          <h2 className="mt-1 font-display text-xl font-extrabold text-slate-900">
            Ownership record
          </h2>
          <div className="mt-5 grid items-center gap-5 sm:grid-cols-[1fr_auto]">
            <ul className="space-y-3 text-sm">
              <RecordRow label="Title model" value="Allocated gold" />
              <RecordRow label="Purity" value="99.9%" />
              <RecordRow label="Custody status" value="Held in approved vault" />
              <RecordRow label="Insurance" value="Active" />
              <RecordRow label="Invoice" value="Verified" />
              <RecordRow label="Latest allocation" value="07 Oct 2026" />
            </ul>
            <GoldBarMini />
          </div>
          <p className="mt-5 rounded-full bg-slate-100 px-4 py-2 text-center text-xs font-medium text-slate-600">
            Latest recorded allocation: DEMO-ALLOC-1001
          </p>
        </section>

        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)] sm:p-6">
          <div className="flex items-center gap-2">
            <Shield className="h-4 w-4 text-brand-red" />
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-red">
              Account Verification
            </p>
          </div>
          <h2 className="mt-1 font-display text-xl font-extrabold text-slate-900">
            Compliance record
          </h2>
          <ul className="mt-5 space-y-2.5">
            <VerifyItem label="Identity & PAN" value="Update required" ok={false} />
            <VerifyItem label="Bank details" value="Saved" ok />
            <VerifyItem label="Source of funds" value="Not recorded" ok={false} />
            <VerifyItem label="Custody evidence" value="Not recorded" ok={false} />
          </ul>
          <Button
            href="/kyc"
            variant="secondary"
            className="mt-6 w-full !border-brand-red/40 !text-brand-red"
          >
            View verification record →
          </Button>
        </section>
      </div>

      {/* Distribution statement + ceiling */}
      <div className="grid gap-5 xl:grid-cols-[1.45fr_0.9fr]">
        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)] sm:p-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-red">
            Account Record
          </p>
          <h2 className="mt-1 font-display text-xl font-extrabold text-slate-900">
            Performance-Linked Distribution Statement
          </h2>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <Mini
              icon={Target}
              label="Current Review Status"
              value="Ceiling reached"
              tone="warning"
            />
            <Mini
              icon={IndianRupee}
              label="Next Estimated Distribution"
              value="Not available"
            />
            <Mini icon={Clock3} label="Next Cycle Date" value="Not scheduled" />
            <Mini
              icon={Wallet}
              label="Payouts Received to Date"
              value={formatInrCompact(portalMember.cumulativeReturnedInr)}
            />
          </div>
          <p className="mt-4 text-xs text-muted">
            Payouts received through June 2026 · latest recorded payout{" "}
            {formatInr(85000)} · demo history only
          </p>
          <p className="mt-3 inline-flex w-full items-start gap-2 rounded-xl border border-sky-100 bg-sky-50 px-3 py-2.5 text-xs text-sky-900">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
            A review frequency is not a promise that a distribution or payment
            will be declared.
          </p>
        </section>

        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)] sm:p-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
            Contractual Ceiling Disclosure
          </p>
          <div className="mt-5 flex flex-col items-center gap-4 sm:flex-row sm:items-start">
            <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-[10px] border-slate-100">
              <div className="text-center">
                <p className="font-display text-2xl font-extrabold">0%</p>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-muted">
                  recorded
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted">
                Demo ceiling illustration for a 2.5x contractual package limit.
                Not a live calculation.
              </p>
              <Button href="/payouts" variant="ghost" className="mt-4 !px-0 !py-0 !text-brand-blue">
                Understand the ceiling →
              </Button>
            </div>
          </div>
        </section>
      </div>

      {/* Documents & Protection */}
      <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)] sm:p-6">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-brand-red">
          Protection
        </p>
        <h2 className="mt-1 font-display text-xl font-extrabold text-slate-900">
          Documents & Protection
        </h2>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {sampleDocuments.map((doc) => (
            <article
              key={doc.id}
              className="rounded-xl border border-border bg-surface-muted/40 px-3.5 py-4"
            >
              <FileText className="h-4 w-4 text-brand-red" />
              <p className="mt-2.5 text-sm font-semibold text-slate-900">
                {doc.title}
              </p>
              <p className="mt-1.5 flex items-center gap-1 text-xs font-semibold text-brand-green">
                <CheckCircle2 className="h-3.5 w-3.5" /> Available
              </p>
            </article>
          ))}
          <article className="rounded-xl border border-emerald-100 bg-emerald-50 px-3.5 py-4">
            <LifeBuoy className="h-4 w-4 text-brand-green" />
            <p className="mt-2.5 text-sm font-semibold">Need help?</p>
            <p className="mt-1 text-xs text-muted">Raise a tracked demo request</p>
            <Button
              href="/support"
              className="mt-3 w-full !bg-emerald-700 !py-2 hover:!bg-emerald-800"
            >
              Open Support →
            </Button>
          </article>
        </div>
      </section>

      <p className="text-center text-[10px] font-bold uppercase tracking-[0.18em] text-muted">
        Partner Activity
      </p>
    </div>
  );
}

function OverviewMetric({
  icon: Icon,
  label,
  value,
  hint,
}: {
  icon: typeof Scale;
  label: string;
  value: string;
  hint: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-white px-4 py-4 shadow-sm">
      <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-brand-red">
        <Icon className="h-4 w-4" />
      </span>
      <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-muted">
        {label}
      </p>
      <p className="mt-1.5 font-display text-xl font-extrabold text-slate-900 sm:text-2xl">
        {value}
      </p>
      <p className="mt-1.5 text-[11px] leading-snug text-muted">{hint}</p>
    </div>
  );
}

function RecordRow({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-center justify-between gap-3">
      <span className="text-muted">{label}</span>
      <span className="font-semibold text-brand-green">{value}</span>
    </li>
  );
}

function VerifyItem({
  label,
  value,
  ok,
}: {
  label: string;
  value: string;
  ok: boolean;
}) {
  return (
    <li className="flex items-center justify-between rounded-xl border border-border bg-surface-muted/30 px-3.5 py-3 text-sm">
      <span className="font-medium text-slate-800">{label}</span>
      <span
        className={`inline-flex items-center gap-1.5 font-semibold ${
          ok ? "text-brand-green" : "text-brand-amber"
        }`}
      >
        {ok ? (
          <CheckCircle2 className="h-3.5 w-3.5" />
        ) : (
          <Clock3 className="h-3.5 w-3.5" />
        )}
        {value}
      </span>
    </li>
  );
}

function Mini({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: typeof Scale;
  label: string;
  value: string;
  tone?: "warning";
}) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted/30 px-3.5 py-3.5">
      <Icon className="h-4 w-4 text-brand-red" />
      <p className="mt-2 text-[10px] font-bold uppercase tracking-wider text-muted">
        {label}
      </p>
      <p
        className={`mt-1 text-sm font-bold ${
          tone === "warning" ? "text-brand-amber" : "text-slate-900"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function GoldBarMini() {
  return (
    <svg
      viewBox="0 0 140 100"
      className="mx-auto h-28 w-36 drop-shadow-md"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="gb" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f8e7a0" />
          <stop offset="45%" stopColor="#e0b84a" />
          <stop offset="100%" stopColor="#a67c16" />
        </linearGradient>
      </defs>
      <rect x="8" y="28" width="124" height="48" rx="5" fill="url(#gb)" />
      <rect x="8" y="28" width="124" height="10" rx="5" fill="#fff6c8" opacity="0.45" />
      <text
        x="70"
        y="48"
        textAnchor="middle"
        fontSize="9"
        fill="#5c4508"
        fontWeight="700"
      >
        SGNX DEMO
      </text>
      <text x="70" y="62" textAnchor="middle" fontSize="7" fill="#5c4508">
        999.9 FINE GOLD
      </text>
    </svg>
  );
}
