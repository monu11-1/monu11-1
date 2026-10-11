"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Copy,
  FileText,
  Shield,
  Landmark,
  Scale,
} from "lucide-react";
import { getCustomerDashboardData } from "@/data/mock";
import { formatGrams, formatInr } from "@/lib/format";
import { PageHeader } from "@/components/ui/PageHeader";
import { GradientHero } from "@/components/ui/GradientHero";
import { MetricCard } from "@/components/ui/MetricCard";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { DemoWatermark } from "@/components/ui/DemoWatermark";
import { Button } from "@/components/ui/Button";

const data = getCustomerDashboardData();

function kycTone(status: string) {
  if (status === "approved") return "success" as const;
  if (status === "pending" || status === "re_kyc_required") return "warning" as const;
  return "error" as const;
}

export function CustomerDashboard() {
  const { user, wallet, packageGold, custody, documents, distributions, partnerActivity } =
    data;
  const [copied, setCopied] = useState(false);

  const referralUrl = `https://demo.local/r/${user.referralCode}`;

  const copyReferral = async () => {
    try {
      await navigator.clipboard.writeText(referralUrl);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="space-y-5">
      <PageHeader
        title={`Welcome, ${user.name}`}
        subtitle={`Gold Custody Account · Demo ID ${user.demoId} · Rank ${user.rank}`}
        actions={
          <Button
            type="button"
            variant="secondary"
            className="!px-4 !py-2"
            onClick={copyReferral}
          >
            <Copy className="h-3.5 w-3.5" />
            {copied ? "Copied demo link" : "Copy referral link"}
          </Button>
        }
      />

      <div className="flex flex-wrap gap-2">
        <StatusBadge tone={kycTone(user.kycStatus)}>
          KYC · {user.kycStatus.replaceAll("_", " ")}
        </StatusBadge>
        <StatusBadge
          tone={user.bankStatus === "verified" ? "success" : "warning"}
        >
          Bank · {user.bankStatus}
        </StatusBadge>
        <StatusBadge
          tone={user.custodyStatus === "active" ? "success" : "warning"}
        >
          Custody · {user.custodyStatus}
        </StatusBadge>
      </div>

      <GradientHero
        eyebrow="Customer Account Overview"
        title="Demonstration portfolio snapshot"
      >
        <p className="max-w-2xl text-sm text-white/85">
          All figures below are fictional teaching data. DEMO / NOT A REAL
          FINANCIAL RECORD. No guaranteed returns.
        </p>
      </GradientHero>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <MetricCard
          label="Package Purchase Value"
          value={formatInr(wallet?.packagePurchaseValueInr ?? 0)}
          hint="Demo package contribution total"
          tone="navy"
        />
        <MetricCard
          label="Package Gold Equivalent"
          value={formatGrams(packageGold?.grams ?? 0)}
          hint={`Indicative market ref ${formatInr(packageGold?.indicativeMarketInr ?? 0)} (demo)`}
          tone="gold"
        />
        <MetricCard
          label="Cumulative Value Returned"
          value={formatInr(wallet?.cumulativeValueReturnedInr ?? 0)}
          hint="Historical demo credits only — not a promise"
          tone="green"
        />
        <MetricCard
          label="Available for Settlement"
          value={formatInr(wallet?.settlementAvailableInr ?? 0)}
          hint="Simulated settlement capacity"
          tone="red"
        />
      </div>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
        <strong>Variable-distribution disclosure:</strong> Any distribution
        figures in this practice app are illustrative fiction. They are not
        guaranteed investment returns and do not create a real entitlement.
      </section>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="relative overflow-hidden rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <DemoWatermark label="DEMO" />
          <div className="relative">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-gold">
              Gold Ownership & Custody record
            </p>
            <h3 className="mt-2 font-display text-xl font-extrabold text-slate-900">
              {formatGrams(packageGold?.grams ?? 0)} on demo record
            </h3>
            <p className="mt-2 text-sm text-muted">
              Purity {packageGold?.purity} · {custody?.vaultLabel}. This is a
              simulated custody illustration — not genuine verification, title,
              insurance, or audit.
            </p>
            <div className="mt-5 flex justify-center">
              <GoldBarIllustration />
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              <MiniStat label="Package value" value={formatInr(packageGold?.packageValueInr ?? 0)} />
              <MiniStat label="Readiness" value={`${custody?.readinessPercent ?? 0}%`} />
              <MiniStat label="Title status" value={custody?.titleStatus ?? "—"} />
            </div>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
            Account Verification record
          </p>
          <ul className="mt-4 space-y-3">
            <VerifyRow
              icon={Shield}
              title="KYC review"
              detail="Re-KYC required in this demo profile"
              ok={false}
            />
            <VerifyRow
              icon={Landmark}
              title="Bank proof"
              detail="Pending fictional bank verification"
              ok={false}
            />
            <VerifyRow
              icon={Scale}
              title="Custody status"
              detail="Active demo custody allocation"
              ok
            />
          </ul>
          <Button href="/kyc" variant="secondary" className="mt-5 w-full">
            Open KYC demo
          </Button>
        </section>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
            Performance-Linked Distribution Statement
          </p>
          <h3 className="mt-2 font-display text-lg font-extrabold">
            Historical demo cycles
          </h3>
          <ul className="mt-4 space-y-3">
            {distributions.map((event) => (
              <li
                key={event.id}
                className="rounded-xl border border-border bg-surface-muted px-3 py-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="text-sm font-semibold">{event.cycleLabel}</p>
                  <StatusBadge tone="success">{event.status}</StatusBadge>
                </div>
                <p className="mt-1 text-sm text-muted">
                  {formatInr(event.amountInr)}
                  {event.creditsInr
                    ? ` + ${formatInr(event.creditsInr)} credits`
                    : ""}
                </p>
              </li>
            ))}
          </ul>
          <p className="mt-4 rounded-xl border border-border bg-slate-50 px-3 py-2 text-xs text-muted">
            <strong className="text-foreground">Contractual Ceiling Disclosure (demo):</strong>{" "}
            This practice UI does not calculate ceilings, yields, or promised
            profits. Numbers are static mock records.
          </p>
        </section>

        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
            Documents & Protection
          </p>
          <div className="mt-4 space-y-3">
            {documents.map((doc) => (
              <article
                key={doc.id}
                className="flex items-start gap-3 rounded-xl border border-border px-3 py-3"
              >
                <FileText className="mt-0.5 h-4 w-4 text-brand-red" />
                <div>
                  <p className="text-sm font-semibold">{doc.title}</p>
                  <p className="text-xs text-muted">
                    Sample ref {doc.sampleRef} · {doc.updatedAt}
                  </p>
                  <p className="mt-1 text-[11px] font-bold uppercase tracking-wider text-brand-red">
                    Sample document · not authentic
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
              Partner Activity
            </p>
            <h3 className="mt-1 font-display text-lg font-extrabold">
              Recent demo network events
            </h3>
          </div>
          <Button href="/payouts" variant="secondary" className="!px-4 !py-2">
            View statements
          </Button>
        </div>
        <ul className="mt-4 divide-y divide-border">
          {partnerActivity.map((item) => (
            <li key={item.id} className="flex flex-wrap items-start justify-between gap-2 py-3">
              <div>
                <p className="text-sm font-semibold">{item.title}</p>
                <p className="text-sm text-muted">{item.detail}</p>
              </div>
              <p className="text-xs text-muted-light">{item.time}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-surface-muted px-3 py-2">
      <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
        {label}
      </p>
      <p className="mt-1 text-sm font-semibold text-foreground">{value}</p>
    </div>
  );
}

function VerifyRow({
  icon: Icon,
  title,
  detail,
  ok,
}: {
  icon: typeof Shield;
  title: string;
  detail: string;
  ok: boolean;
}) {
  return (
    <li className="flex gap-3 rounded-xl border border-border px-3 py-3">
      <Icon className={`mt-0.5 h-4 w-4 ${ok ? "text-brand-green" : "text-brand-amber"}`} />
      <div className="flex-1">
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-xs text-muted">{detail}</p>
      </div>
      {ok ? (
        <CheckCircle2 className="h-4 w-4 text-brand-green" />
      ) : (
        <StatusBadge tone="warning">Action</StatusBadge>
      )}
    </li>
  );
}

function GoldBarIllustration() {
  return (
    <svg
      viewBox="0 0 220 110"
      className="h-28 w-auto drop-shadow-md"
      role="img"
      aria-label="Decorative demo gold bar illustration"
    >
      <defs>
        <linearGradient id="goldBar" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5e6a6" />
          <stop offset="45%" stopColor="#c9a227" />
          <stop offset="100%" stopColor="#8a6a12" />
        </linearGradient>
      </defs>
      <path
        d="M30 35h160l18 45H12L30 35z"
        fill="url(#goldBar)"
        stroke="#8a6a12"
        strokeWidth="2"
      />
      <path d="M30 35h160l-10 18H40L30 35z" fill="#fff3bf" opacity="0.55" />
      <text
        x="110"
        y="72"
        textAnchor="middle"
        fill="#5c4508"
        fontSize="14"
        fontWeight="700"
      >
        DEMO GOLD
      </text>
    </svg>
  );
}
