"use client";

import Link from "next/link";
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
  ShieldAlert,
  Target,
  TrendingUp,
  Wallet,
  CircleDot,
} from "lucide-react";
import { portalMember, sampleDocuments } from "@/data/mock/portal";
import { formatGrams, formatInr, formatInrCompact } from "@/lib/format";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { DemoGoldBar } from "@/components/dashboard/DemoGoldBar";

export function CustomerDashboard() {
  const [copied, setCopied] = useState(false);
  const referral = `https://demo.local/r/${portalMember.referralCode}`;

  return (
    <div className="space-y-6 lg:space-y-7">
      {/* Welcome */}
      <section className="rounded-[var(--card-radius)] border border-border bg-white p-6 shadow-[var(--card-shadow)] sm:p-7">
        <div className="flex flex-wrap items-start justify-between gap-5">
          <div className="flex min-w-0 items-start gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fde8ec] text-brand-red">
              <Building2 className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <div className="min-w-0">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-red">
                Gold Custody Account
              </p>
              <h1 className="mt-1.5 font-display text-[1.75rem] font-extrabold leading-tight tracking-tight text-slate-900 sm:text-[2rem] lg:text-[2.15rem]">
                Welcome back, {portalMember.displayName} (
                {portalMember.welcomeId})
              </h1>
              <p className="mt-2 max-w-2xl text-[15px] leading-relaxed text-muted">
                Your ownership, distributions and compliance records at a
                glance.{" "}
                <span className="font-semibold text-slate-700">
                  DEMO / PRACTICE — not a real financial record.
                </span>
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-semibold text-muted">
                  Referral link
                </span>
                <code className="max-w-[240px] truncate rounded-lg border border-border bg-surface-muted px-3 py-1.5 text-xs text-slate-700 sm:max-w-md">
                  {referral}
                </code>
                <button
                  type="button"
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(referral);
                      setCopied(true);
                      window.setTimeout(() => setCopied(false), 2000);
                    } catch {
                      /* ignore */
                    }
                  }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-brand-red/35 bg-white px-3.5 py-1.5 text-xs font-bold text-brand-red transition-colors hover:bg-red-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
                >
                  <Copy className="h-3.5 w-3.5" />
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <StatusBadge tone="warning">
              <CircleDot className="h-3 w-3" />
              KYC Requires Rekyc
            </StatusBadge>
            <StatusBadge tone="info">
              <CircleDot className="h-3 w-3" />
              Bank on file
            </StatusBadge>
            <StatusBadge tone="success">
              <CircleDot className="h-3 w-3" />
              Custody confirmed
            </StatusBadge>
          </div>
        </div>
      </section>

      {/* Account overview */}
      <section className="overflow-hidden rounded-[var(--card-radius)] border border-border bg-white shadow-[var(--card-shadow)]">
        <div className="gradient-hero-red flex flex-wrap items-center justify-between gap-3 px-6 py-4 sm:px-7">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white">
              Customer Account Overview
            </p>
            <p className="mt-1 text-[13px] text-white/80">
              Verified account values and recorded balances
            </p>
          </div>
          <Clock3 className="h-5 w-5 text-white/75" aria-hidden="true" />
        </div>
        <div className="grid gap-4 p-5 sm:grid-cols-2 sm:p-6 lg:p-7 xl:grid-cols-4">
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
        <div className="flex items-start gap-2.5 border-t border-amber-200/80 bg-[#fffbeb] px-6 py-3.5 text-[13px] text-amber-950 sm:px-7">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          Performance-linked distributions are variable, may be zero and are
          never fixed or guaranteed.
        </div>
      </section>

      {/* Ownership + Compliance */}
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="flex flex-col rounded-[var(--card-radius)] border border-border bg-white p-6 shadow-[var(--card-shadow)] sm:p-7">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-red">
                Ownership Record
              </p>
              <h2 className="mt-1 font-display text-[1.35rem] font-extrabold tracking-tight text-slate-900 sm:text-[1.5rem]">
                Gold Ownership & Custody
              </h2>
            </div>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-50 text-brand-gold">
              <Lock className="h-4 w-4" />
            </span>
          </div>
          <div className="mt-6 grid flex-1 items-center gap-6 sm:grid-cols-[1.1fr_0.9fr]">
            <ul className="space-y-3.5 text-[14px]">
              <RecordRow label="Title model" value="Allocated gold" />
              <RecordRow label="Purity" value="99.9%" />
              <RecordRow label="Custody status" value="Held in approved vault" />
              <RecordRow label="Insurance" value="Active" />
              <RecordRow label="Invoice" value="Verified" />
              <RecordRow label="Latest allocation" value="07 Oct 2026" />
            </ul>
            <DemoGoldBar />
          </div>
          <p className="mt-6 rounded-xl bg-[#eef2f7] px-4 py-2.5 text-center text-[12px] font-medium text-slate-600">
            Latest recorded allocation: DEMO-ALLOC-1001
          </p>
        </section>

        <section className="flex flex-col rounded-[var(--card-radius)] border border-border bg-white p-6 shadow-[var(--card-shadow)] sm:p-7">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-red">
                Compliance Record
              </p>
              <h2 className="mt-1 font-display text-[1.35rem] font-extrabold tracking-tight text-slate-900 sm:text-[1.5rem]">
                Account Verification
              </h2>
            </div>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-brand-red">
              <Shield className="h-4 w-4" />
            </span>
          </div>
          <ul className="mt-6 flex-1 space-y-3">
            <VerifyItem label="Identity & PAN" value="Update required" ok={false} />
            <VerifyItem label="Bank details" value="Saved" ok />
            <VerifyItem label="Source of funds" value="Not recorded" ok={false} />
            <VerifyItem label="Custody evidence" value="Not recorded" ok={false} />
          </ul>
          <Button
            href="/kyc"
            variant="secondary"
            className="mt-7 w-full !rounded-xl !border-brand-red/45 !py-3 !text-brand-red hover:!bg-red-50"
          >
            View verification record →
          </Button>
        </section>
      </div>

      {/* Distribution + ceiling */}
      <div className="grid gap-6 xl:grid-cols-[1.45fr_0.95fr]">
        <section className="rounded-[var(--card-radius)] border border-border bg-white p-6 shadow-[var(--card-shadow)] sm:p-7">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-red">
            Account Record
          </p>
          <h2 className="mt-1 font-display text-[1.35rem] font-extrabold tracking-tight text-slate-900 sm:text-[1.5rem]">
            Performance-Linked Distribution Statement
          </h2>
          <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
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
              emphasize
            />
          </div>
          <p className="mt-4 text-[13px] text-muted">
            Payouts received through June 2026 · latest recorded payout{" "}
            {formatInr(85000)}
          </p>
          <p className="mt-3 inline-flex w-full items-start gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3.5 py-2.5 text-[13px] text-slate-700">
            <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-slate-500" />
            A review frequency is not a promise that a distribution or payment
            will be declared.
          </p>
        </section>

        <section className="rounded-[var(--card-radius)] border border-border bg-white p-6 shadow-[var(--card-shadow)] sm:p-7">
          <h2 className="font-display text-[1.2rem] font-extrabold tracking-tight text-slate-900">
            Contractual Ceiling Disclosure
          </h2>
          <div className="mt-6 flex flex-col items-center gap-5 sm:flex-row sm:items-center">
            <div className="relative flex h-[7.5rem] w-[7.5rem] shrink-0 items-center justify-center rounded-full border-[11px] border-slate-100">
              <div className="text-center">
                <p className="font-display text-[1.75rem] font-extrabold leading-none text-slate-900">
                  0%
                </p>
                <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-muted">
                  recorded
                </p>
              </div>
            </div>
            <div>
              <p className="text-[14px] leading-relaxed text-muted">
                Demo ceiling illustration for a 2.5x contractual package limit.
                Not a live calculation.
              </p>
              <Link
                href="/payouts"
                className="mt-3 inline-flex text-[14px] font-semibold text-brand-blue hover:underline"
              >
                Understand the ceiling →
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* Protection */}
      <section className="rounded-[var(--card-radius)] border border-border bg-white p-6 shadow-[var(--card-shadow)] sm:p-7">
        <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-brand-red">
          Protection
        </p>
        <h2 className="mt-1 font-display text-[1.35rem] font-extrabold tracking-tight text-slate-900 sm:text-[1.5rem]">
          Documents & Protection
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {sampleDocuments.map((doc) => (
            <article
              key={doc.id}
              className="rounded-xl border border-border bg-white px-4 py-4 shadow-sm"
            >
              <FileText className="h-4 w-4 text-brand-red" />
              <p className="mt-3 text-[14px] font-semibold text-slate-900">
                {doc.title}
              </p>
              <p className="mt-2 flex items-center gap-1 text-[12px] font-semibold text-brand-green">
                <CheckCircle2 className="h-3.5 w-3.5" /> Available
              </p>
            </article>
          ))}
          <article className="rounded-xl border border-emerald-100 bg-emerald-50/80 px-4 py-4">
            <LifeBuoy className="h-4 w-4 text-brand-green" />
            <p className="mt-3 text-[14px] font-semibold text-slate-900">
              Need help?
            </p>
            <p className="mt-1 text-[12px] text-muted">
              Raise a tracked request
            </p>
            <Button
              href="/support"
              className="mt-3 w-full !rounded-xl !bg-emerald-700 !py-2.5 hover:!bg-emerald-800"
            >
              <LifeBuoy className="h-3.5 w-3.5" />
              Open Support →
            </Button>
          </article>
        </div>
      </section>

      <p className="pb-2 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-muted-light">
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
    <div className="rounded-xl border border-border bg-[#fbfcfd] px-4 py-5 shadow-sm">
      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fde8ec] text-brand-red">
        <Icon className="h-[18px] w-[18px]" strokeWidth={1.75} />
      </span>
      <p className="mt-4 text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
        {label}
      </p>
      <p className="mt-2 font-display text-[1.55rem] font-extrabold leading-none tracking-tight text-slate-900 sm:text-[1.7rem]">
        {value}
      </p>
      <p className="mt-2.5 text-[12px] leading-snug text-muted">{hint}</p>
    </div>
  );
}

function RecordRow({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex items-center justify-between gap-4 border-b border-border/70 pb-3 last:border-0 last:pb-0">
      <span className="text-muted">{label}</span>
      <span className="text-right font-semibold text-brand-green">{value}</span>
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
    <li className="flex items-center justify-between gap-3 rounded-xl border border-border bg-[#fbfcfd] px-4 py-3.5 text-[14px]">
      <span className="font-medium text-slate-800">{label}</span>
      <span
        className={`inline-flex items-center gap-1.5 font-semibold ${
          ok ? "text-brand-green" : "text-brand-amber"
        }`}
      >
        {ok ? (
          <CheckCircle2 className="h-4 w-4" />
        ) : (
          <Clock3 className="h-4 w-4" />
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
  emphasize,
}: {
  icon: typeof Scale;
  label: string;
  value: string;
  tone?: "warning";
  emphasize?: boolean;
}) {
  return (
    <div className="rounded-xl border border-border bg-[#fbfcfd] px-3.5 py-4">
      <Icon className="h-4 w-4 text-brand-red" strokeWidth={1.75} />
      <p className="mt-2.5 text-[10px] font-bold uppercase tracking-[0.12em] text-muted">
        {label}
      </p>
      <p
        className={`mt-1.5 font-bold ${
          emphasize
            ? "font-display text-[1.25rem] tracking-tight text-slate-900"
            : "text-[14px]"
        } ${tone === "warning" ? "text-brand-amber" : "text-slate-900"}`}
      >
        {value}
      </p>
    </div>
  );
}
