"use client";

import {
  AlertTriangle,
  Building2,
  ChevronRight,
  FileText,
  Globe2,
  Lock,
  Scale,
  ShieldAlert,
  ShieldCheck,
  Users,
  Warehouse,
} from "lucide-react";
import { riskRegister } from "@/data/mock/portal";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";

const additionalRisks = [
  {
    title: "Import, Export & Tax",
    level: "Elevated",
    body: "Cross-border movement and tax treatment can change package economics.",
    icon: Globe2,
  },
  {
    title: "Operational & Fraud",
    level: "Medium",
    body: "Process failures and social-engineering attempts remain possible.",
    icon: ShieldAlert,
  },
  {
    title: "Concentration & Conflicts",
    level: "Medium",
    body: "Reliance on a small set of counterparties concentrates exposure.",
    icon: Users,
  },
  {
    title: "Data & Privacy",
    level: "Medium",
    body: "Identity and banking data require ongoing safeguarding.",
    icon: Lock,
  },
];

const monitoring = [
  "Gold and custody records",
  "Bank and settlement details",
  "KYC and identity screening",
  "Counterparty dependencies",
];

const protectionTopics = [
  { title: "Gold records", icon: ShieldCheck },
  { title: "Banking", icon: Building2 },
  { title: "Counterparties", icon: Warehouse },
  { title: "Classification", icon: Scale },
];

const concernActions = [
  "Gold record mismatch",
  "Inconsistent statement",
  "Suspicious request",
  "Account access issue",
];

const documents = ["Account Terms", "Privacy Notice", "KYC Record"];

export function RiskCentrePage() {
  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-bold text-slate-900">
            <ShieldAlert className="h-4 w-4 text-brand-red" />
            Risk Centre
          </p>
          <p className="mt-1 max-w-2xl text-sm text-muted">
            Understand material risks, safeguards and your KYC-linked account
            status.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button variant="secondary" className="!border-amber-300 !px-4 !py-2 !text-amber-800">
            KYC: Update required
          </Button>
          <Button variant="secondary" className="!border-amber-300 !px-4 !py-2 !text-amber-800">
            Risk information available
          </Button>
        </div>
      </div>

      <section className="gradient-hero-red relative overflow-hidden rounded-2xl px-5 py-6 text-white shadow-[var(--card-shadow)]">
        <h1 className="font-display text-3xl font-extrabold">
          Risk level: Elevated
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-white/85">
          Gold-related products involve legal, market and operational risks.
          This page is educational UI with fictional demo status only.
        </p>
        <div className="mt-5 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
          <HeroMetric label="Risk Categories" value="9 Areas to review" />
          <HeroMetric
            label="KYC Status"
            value="Update required - Identity record"
          />
          <HeroMetric label="Key Notice" value="1 Read before proceeding" />
          <HeroMetric
            label="Information Date"
            value="11 Oct 2026 - Current page date"
          />
        </div>
        <p className="mt-4 border-t border-white/15 pt-3 text-xs text-white/75">
          KYC confirms identity only and is not a substitute for legal advice.
        </p>
      </section>

      <div className="grid gap-4 xl:grid-cols-[1.4fr_0.9fr]">
        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <h2 className="font-display text-lg font-extrabold">
            Material Risk Register
          </h2>
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b border-border text-[10px] uppercase tracking-wider text-muted">
                  <th className="py-2 pr-3">Risk</th>
                  <th className="py-2 pr-3">Level</th>
                  <th className="py-2 pr-3">What it means</th>
                  <th className="py-2">Suggested review</th>
                </tr>
              </thead>
              <tbody>
                {riskRegister.map((row) => (
                  <tr key={row.risk} className="border-b border-border/70 align-top">
                    <td className="py-3 pr-3 font-semibold">{row.risk}</td>
                    <td className="py-3 pr-3">
                      <StatusBadge
                        tone={row.level === "High" ? "error" : "warning"}
                      >
                        {row.level}
                      </StatusBadge>
                    </td>
                    <td className="py-3 pr-3 text-muted">{row.means}</td>
                    <td className="py-3 text-muted">{row.review}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h2 className="font-display text-lg font-extrabold">
              Risk Acknowledgement
            </h2>
            <StatusBadge tone="warning">KYC Update required</StatusBadge>
          </div>
          <p className="mt-2 text-sm text-muted">
            Update your KYC record before continuing.
          </p>
          <ul className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
            {[
              "Loss of value is possible",
              "Distributions are not guaranteed",
              "Custody evidence can lag",
              "Regulatory classification may change",
              "Settlement timing can vary",
              "FX and gold prices move",
            ].map((item) => (
              <li key={item} className="inline-flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                {item}
              </li>
            ))}
          </ul>
          <Button href="/kyc" className="mt-5 w-full">
            View signed KYC form →
          </Button>
        </section>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <h2 className="font-display text-lg font-extrabold">
            Additional Risk Areas
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {additionalRisks.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-border bg-surface-muted p-3"
                >
                  <div className="flex items-start justify-between gap-2">
                    <Icon className="h-4 w-4 text-brand-red" />
                    <StatusBadge tone="warning">{item.level}</StatusBadge>
                  </div>
                  <p className="mt-2 text-sm font-bold">{item.title}</p>
                  <p className="mt-1 text-xs text-muted">{item.body}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <h2 className="font-display text-lg font-extrabold">
            Monitoring Topics
          </h2>
          <ul className="mt-4 space-y-2">
            {monitoring.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-xl border border-border px-3 py-2.5 text-sm font-medium"
              >
                <AlertTriangle className="h-4 w-4 text-amber-500" />
                {item}
              </li>
            ))}
          </ul>
          <button
            type="button"
            className="mt-4 text-sm font-bold text-brand-red hover:underline"
          >
            Report a monitoring concern →
          </button>
        </section>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <h2 className="font-display text-lg font-extrabold">
            Protection & Review Topics
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {protectionTopics.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="rounded-xl border border-border p-3"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
                    <Icon className="h-4 w-4" />
                  </span>
                  <p className="mt-2 text-sm font-bold">{item.title}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <h2 className="font-display text-lg font-extrabold">
            Report a Concern
          </h2>
          <p className="mt-1 text-sm text-muted">
            Choose a topic to open a demo support pathway.
          </p>
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            {concernActions.map((item) => (
              <button
                key={item}
                type="button"
                className="inline-flex items-center justify-between rounded-xl border border-border px-3 py-3 text-left text-sm font-semibold hover:bg-slate-50"
              >
                {item}
                <ChevronRight className="h-4 w-4 text-muted" />
              </button>
            ))}
          </div>
        </section>
      </div>

      <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
        <p className="inline-flex items-center gap-2 text-sm font-bold">
          <FileText className="h-4 w-4 text-brand-red" />
          Risk Documents
        </p>
        <ul className="mt-4 space-y-2">
          {documents.map((doc) => (
            <li
              key={doc}
              className="flex items-center justify-between gap-3 rounded-xl border border-border px-3 py-3"
            >
              <span className="inline-flex items-center gap-2 text-sm font-semibold">
                <FileText className="h-4 w-4 text-brand-red" />
                {doc}
              </span>
              <span className="text-xs font-semibold text-muted">PDF</span>
            </li>
          ))}
        </ul>
      </section>

      <div className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
        <p className="inline-flex items-start gap-2">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-600" />
          Contact Support if anything on this page conflicts with signed
          agreements or account records. This is a demonstration UI only.
        </p>
      </div>
      <p className="inline-flex items-start gap-2 text-xs text-muted">
        <InfoIcon />
        This page provides general risk information and account-linked KYC
        status; it is not legal, tax or investment advice.
      </p>
    </div>
  );
}

function HeroMetric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-white/15 bg-black/20 px-3 py-3">
      <p className="text-[10px] font-bold uppercase tracking-wider text-white/70">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold">{value}</p>
    </div>
  );
}

function InfoIcon() {
  return (
    <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-slate-300 text-[10px] font-bold">
      i
    </span>
  );
}
