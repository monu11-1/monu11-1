"use client";

import { useState } from "react";
import {
  Copy,
  Scale,
  TrendingUp,
  Mailbox,
  IndianRupee,
  CheckCircle2,
  Clock3,
  FileText,
  LifeBuoy,
} from "lucide-react";
import { portalMember, sampleDocuments } from "@/data/mock/portal";
import { formatGrams, formatInr, formatInrCompact } from "@/lib/format";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";

export function CustomerDashboard() {
  const [copied, setCopied] = useState(false);
  const referral = `https://demo.local/r/${portalMember.referralCode}`;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Welcome back, {portalMember.displayName} ({portalMember.welcomeId})
          </h1>
          <p className="mt-1 text-sm text-muted">
            Your ownership, distributions and compliance records at a glance.
            DEMO / NOT A REAL FINANCIAL RECORD.
          </p>
        </div>
        <Button
          type="button"
          variant="secondary"
          className="!px-4 !py-2"
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
          {copied ? "Copied" : "Referral link"}
        </Button>
      </div>

      <div className="flex flex-wrap gap-2">
        <StatusBadge tone="warning">KYC Requires Rekyc</StatusBadge>
        <StatusBadge tone="neutral">Bank on file</StatusBadge>
        <StatusBadge tone="success">Custody confirmed</StatusBadge>
      </div>

      <section className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--card-shadow)]">
        <div className="gradient-hero-red px-5 py-3">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white">
            Customer Account Overview
          </p>
        </div>
        <div className="grid gap-3 p-4 sm:grid-cols-2 xl:grid-cols-4">
          <OverviewMetric
            icon={IndianRupee}
            label="Package Purchase Value"
            value={formatInr(0)}
          />
          <OverviewMetric
            icon={Scale}
            label="Package Gold Equivalent"
            value={formatGrams(portalMember.packageGoldGrams)}
          />
          <OverviewMetric
            icon={TrendingUp}
            label="Cumulative Value Returned"
            value={formatInrCompact(portalMember.cumulativeReturnedInr)}
          />
          <OverviewMetric
            icon={Mailbox}
            label="Available for Settlement"
            value={formatInrCompact(portalMember.availableSettlementInr)}
          />
        </div>
        <div className="border-t border-amber-200 bg-amber-50 px-4 py-3 text-xs text-amber-950">
          Performance-linked distributions are variable, may be zero and are
          never fixed or guaranteed. Demo illustration only.
        </div>
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-red">
            Gold Ownership & Custody
          </p>
          <h2 className="mt-1 font-display text-lg font-extrabold">
            Ownership record
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-[1fr_auto]">
            <ul className="space-y-2 text-sm">
              <RecordRow label="Title model" value="Allocated gold" ok />
              <RecordRow label="Purity" value="99.9%" ok />
              <RecordRow label="Custody status" value="Held in approved vault" ok />
              <RecordRow label="Insurance" value="Active (demo)" ok />
              <RecordRow label="Invoice" value="Verified (demo)" ok />
              <RecordRow label="Latest allocation" value="07 Oct 2026" ok />
            </ul>
            <GoldBarMini />
          </div>
          <p className="mt-4 rounded-xl bg-slate-50 px-3 py-2 text-xs text-muted">
            Latest recorded allocation: DEMO-ALLOC-1001
          </p>
        </section>

        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-red">
            Account Verification
          </p>
          <h2 className="mt-1 font-display text-lg font-extrabold">
            Compliance record
          </h2>
          <ul className="mt-4 space-y-2">
            <VerifyItem label="Identity & PAN" value="Update required" ok={false} />
            <VerifyItem label="Bank details" value="Saved" ok />
            <VerifyItem label="Source of funds" value="Not recorded" ok={false} />
            <VerifyItem label="Custody evidence" value="Not recorded" ok={false} />
          </ul>
          <Button href="/kyc" variant="secondary" className="mt-5 w-full">
            View verification record →
          </Button>
        </section>
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.3fr_0.7fr]">
        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-red">
            Account Record
          </p>
          <h2 className="mt-1 font-display text-lg font-extrabold">
            Performance-Linked Distribution Statement
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <Mini label="Current Review Status" value="Ceiling reached" tone="warning" />
            <Mini label="Next Estimated Distribution" value="Not available" />
            <Mini label="Next Cycle Date" value="Not scheduled" />
            <Mini
              label="Payouts Received to Date"
              value={formatInrCompact(portalMember.cumulativeReturnedInr)}
            />
          </div>
          <p className="mt-3 text-xs text-muted">
            Payouts received through June 2026 · demo history only
          </p>
          <p className="mt-3 rounded-xl border border-sky-100 bg-sky-50 px-3 py-2 text-xs text-sky-900">
            A review frequency is not a promise that a distribution or payment
            will be declared.
          </p>
        </section>

        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
            Contractual Ceiling Disclosure
          </p>
          <div className="mx-auto mt-4 flex h-28 w-28 items-center justify-center rounded-full border-8 border-slate-100">
            <div className="text-center">
              <p className="font-display text-xl font-extrabold">0%</p>
              <p className="text-[10px] text-muted">recorded</p>
            </div>
          </div>
          <p className="mt-3 text-xs text-muted">
            Demo ceiling illustration only — not a real contractual calculation.
          </p>
          <Button href="/payouts" variant="ghost" className="mt-3 w-full !py-2">
            Understand the ceiling →
          </Button>
        </section>
      </div>

      <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
        <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-red">
          Protection
        </p>
        <h2 className="mt-1 font-display text-lg font-extrabold">
          Documents & Protection
        </h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {sampleDocuments.map((doc) => (
            <article
              key={doc.id}
              className="rounded-xl border border-border px-3 py-3"
            >
              <FileText className="h-4 w-4 text-brand-red" />
              <p className="mt-2 text-sm font-semibold">{doc.title}</p>
              <p className="mt-1 flex items-center gap-1 text-xs text-brand-green">
                <CheckCircle2 className="h-3.5 w-3.5" /> Available (sample)
              </p>
            </article>
          ))}
          <article className="rounded-xl border border-emerald-100 bg-emerald-50 px-3 py-3">
            <LifeBuoy className="h-4 w-4 text-brand-green" />
            <p className="mt-2 text-sm font-semibold">Need help?</p>
            <p className="mt-1 text-xs text-muted">Raise a tracked demo request</p>
            <Button href="/support" className="mt-3 w-full !py-2">
              Open Support →
            </Button>
          </article>
        </div>
      </section>
    </div>
  );
}

function OverviewMetric({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Scale;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted px-4 py-4">
      <Icon className="h-4 w-4 text-brand-red" />
      <p className="mt-3 text-[10px] font-bold uppercase tracking-wider text-muted">
        {label}
      </p>
      <p className="mt-1 font-display text-xl font-extrabold text-slate-900">
        {value}
      </p>
    </div>
  );
}

function RecordRow({
  label,
  value,
  ok,
}: {
  label: string;
  value: string;
  ok?: boolean;
}) {
  return (
    <li className="flex items-center justify-between gap-2">
      <span className="text-muted">{label}</span>
      <span className={`font-semibold ${ok ? "text-brand-green" : "text-foreground"}`}>
        {value}
      </span>
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
    <li className="flex items-center justify-between rounded-xl border border-border px-3 py-2.5 text-sm">
      <span className="font-medium">{label}</span>
      <span className={`inline-flex items-center gap-1 font-semibold ${ok ? "text-brand-green" : "text-brand-amber"}`}>
        {ok ? <CheckCircle2 className="h-3.5 w-3.5" /> : <Clock3 className="h-3.5 w-3.5" />}
        {value}
      </span>
    </li>
  );
}

function Mini({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "warning";
}) {
  return (
    <div className="rounded-xl border border-border px-3 py-3">
      <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
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
    <svg viewBox="0 0 120 90" className="mx-auto h-24 w-28" aria-hidden="true">
      <defs>
        <linearGradient id="gb" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6e7a8" />
          <stop offset="100%" stopColor="#b8860b" />
        </linearGradient>
      </defs>
      <rect x="10" y="28" width="100" height="42" rx="4" fill="url(#gb)" />
      <text x="60" y="48" textAnchor="middle" fontSize="8" fill="#5c4508" fontWeight="700">
        DEMO
      </text>
      <text x="60" y="60" textAnchor="middle" fontSize="7" fill="#5c4508">
        999.9 FINE
      </text>
    </svg>
  );
}
