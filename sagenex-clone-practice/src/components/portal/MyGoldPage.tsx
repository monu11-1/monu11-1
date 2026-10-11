"use client";

import { useState } from "react";
import {
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  goldActivity,
  myGoldSeries,
  portalMember,
  valuationChecklist,
} from "@/data/mock/portal";
import { formatGrams, formatInr, formatInrCompact } from "@/lib/format";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ChartFrame } from "@/components/ui/ChartFrame";
import { Truck, ShoppingCart } from "lucide-react";

export function MyGoldPage() {
  const [tab, setTab] = useState<"holdings" | "history">("holdings");
  const done = valuationChecklist.filter((item) => item.done).length;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-red">
            Account Gold Record
          </p>
          <h1 className="mt-1 font-display text-3xl font-extrabold text-slate-900">
            My Gold
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-muted">
            View the gold equivalent recorded from package activity, kept
            separate from SGNX custody gold. DEMO figures only.
          </p>
        </div>
        <Button type="button" variant="secondary" className="!px-4 !py-2">
          Refresh records
        </Button>
      </div>

      <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-gold">
              Package Gold Equivalent
            </p>
            <p className="mt-2 font-display text-4xl font-extrabold text-slate-900">
              {formatGrams(portalMember.packageGoldGrams)}
            </p>
            <p className="mt-2 text-sm text-muted">
              Based on 3 priced demo records · indicative market{" "}
              {formatInrCompact(portalMember.indicativeMarketInr)}
            </p>
          </div>
        </div>
        <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <Stat label="Gold Equivalent" value={formatGrams(portalMember.packageGoldGrams)} />
          <Stat label="Package Value" value={formatInr(portalMember.packageValueInr)} />
          <Stat
            label="Live Reference"
            value={`${formatInr(portalMember.liveReferencePerGramInr)} / g`}
          />
          <Stat
            label="Market Movement"
            value={`+${formatInr(portalMember.marketMovementInr)}`}
            tone="green"
          />
        </div>
        <div className="mt-5 rounded-xl border border-border bg-surface-muted p-4">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-semibold">Package valuation checklist</p>
            <p className="text-xs text-muted">
              {done}/{valuationChecklist.length}
            </p>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200">
            <div
              className="h-full rounded-full bg-brand-red"
              style={{ width: `${(done / valuationChecklist.length) * 100}%` }}
            />
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {valuationChecklist.map((item) => (
              <StatusBadge key={item.id} tone={item.done ? "success" : "warning"}>
                {item.label}
              </StatusBadge>
            ))}
          </div>
        </div>
      </section>

      <div className="grid gap-4 md:grid-cols-3">
        <StatusCard title="Package valuation" status="Complete" tone="success" body={formatGrams(portalMember.packageGoldGrams)} />
        <StatusCard title="Custody" status="Pending" tone="warning" body="Document unavailable" />
        <StatusCard title="Identity" status="Pending" tone="warning" body="Requires ReKYC" />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-red">
            Separate Custody Record
          </p>
          <h2 className="mt-1 font-display text-lg font-extrabold">
            SGNX custody holding
          </h2>
          <div className="mt-3 inline-flex rounded-full bg-slate-100 p-1">
            {(["holdings", "history"] as const).map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => setTab(id)}
                className={`rounded-full px-3 py-1.5 text-xs font-bold capitalize ${
                  tab === id ? "bg-brand-red text-white" : "text-muted"
                }`}
              >
                {id}
              </button>
            ))}
          </div>
          {tab === "holdings" ? (
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <Stat label="Holding ID" value="DEMO-HOLD-7781" />
              <Stat label="Quantity" value={formatGrams(portalMember.sgnxCustodyGrams)} />
              <Stat label="Latest Allocation" value="07 Oct 2026" />
              <Stat label="Allocation Reference" value="DEMO-ALLOC-1001" />
              <Stat
                label="Purchase Reference"
                value={`${formatInr(portalMember.purchaseReferencePerGramInr)} / g`}
              />
              <Stat label="Custody Evidence" value="Not recorded" />
            </div>
          ) : (
            <p className="mt-4 text-sm text-muted">
              No separate history rows in this demo view yet.
            </p>
          )}
        </section>

        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
            Market Reference
          </p>
          <h2 className="mt-1 font-display text-lg font-extrabold">
            Indicative valuation
          </h2>
          <ChartFrame className="mt-4 h-56">
            {({ width, height }) => (
              <LineChart width={width} height={height} data={myGoldSeries}>
                <XAxis dataKey="day" tick={{ fontSize: 11, fill: "#64748b" }} />
                <YAxis tick={{ fontSize: 11, fill: "#64748b" }} domain={["auto", "auto"]} />
                <Tooltip />
                <Line type="monotone" dataKey="value" stroke="#c81e3a" strokeWidth={2} dot={false} />
              </LineChart>
            )}
          </ChartFrame>
          <p className="mt-2 text-xs text-muted">
            Reference data is informational and does not represent an executable
            quote.
          </p>
        </section>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--card-shadow)]">
          <div className="gradient-hero-red px-5 py-4 text-white">
            <p className="inline-flex items-center gap-2 text-sm font-bold">
              <Truck className="h-4 w-4" /> Physical delivery
            </p>
            <p className="mt-1 text-xs text-white/80">
              Submit an address for review. Title, quantity and eligibility still
              apply.
            </p>
          </div>
          <div className="space-y-2 p-4">
            <Button className="w-full">Submit delivery address →</Button>
            <Button href="/custody-title" variant="secondary" className="w-full">
              Open custody & title
            </Button>
          </div>
        </section>
        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <p className="inline-flex items-center gap-2 text-sm font-bold">
            <ShoppingCart className="h-4 w-4 text-brand-red" /> New gold purchase
          </p>
          <p className="mt-2 text-sm text-muted">
            Continue to the product flow to start another recorded purchase
            schedule.
          </p>
          <Button href="/sgnx-gold" className="mt-4 w-full !bg-slate-900 hover:!bg-slate-800">
            Open gold purchase flow →
          </Button>
          <div className="mt-4 grid grid-cols-2 gap-3 text-xs">
            <Stat label="Enrollments" value="2" />
            <Stat label="Holding ID" value="DEMO-HOLD-7781" />
          </div>
        </section>
      </div>

      <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
        <h2 className="font-display text-lg font-extrabold text-brand-red">
          Timeline · Gold activity
        </h2>
        <div className="mt-4 overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-[10px] uppercase tracking-wider text-muted">
                <th className="py-2 pr-3">Date</th>
                <th className="py-2 pr-3">Reference</th>
                <th className="py-2 pr-3">Activity</th>
                <th className="py-2 pr-3">Quantity</th>
                <th className="py-2">Status</th>
              </tr>
            </thead>
            <tbody>
              {goldActivity.map((row) => (
                <tr key={row.id} className="border-b border-border/70">
                  <td className="py-3 pr-3">{row.date}</td>
                  <td className="py-3 pr-3 font-mono text-xs">{row.reference}</td>
                  <td className="py-3 pr-3">{row.activity}</td>
                  <td className="py-3 pr-3">{row.quantity}</td>
                  <td className="py-3">
                    <StatusBadge tone="success">{row.status}</StatusBadge>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-950">
          <strong>Important:</strong> An app balance alone does not establish
          ownership. This page is a demonstration UI with fictional records.
        </p>
      </section>
    </div>
  );
}

function Stat({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone?: "green";
}) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted px-3 py-3">
      <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
        {label}
      </p>
      <p
        className={`mt-1 text-sm font-bold ${
          tone === "green" ? "text-brand-green" : "text-slate-900"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function StatusCard({
  title,
  status,
  tone,
  body,
}: {
  title: string;
  status: string;
  tone: "success" | "warning";
  body: string;
}) {
  return (
    <article className="rounded-2xl border border-border bg-white p-4 shadow-[var(--card-shadow)]">
      <div className="flex items-center justify-between gap-2">
        <p className="text-sm font-semibold">{title}</p>
        <StatusBadge tone={tone}>{status}</StatusBadge>
      </div>
      <p className="mt-3 font-display text-xl font-extrabold">{body}</p>
    </article>
  );
}
