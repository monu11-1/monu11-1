"use client";

import { useMemo, useState } from "react";
import { Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import {
  CalendarDays,
  CheckCircle2,
  Circle,
  Network,
  ShoppingCart,
} from "lucide-react";
import {
  marketSeries,
  portalMember,
  scheduleMonths,
} from "@/data/mock/portal";
import { formatGrams, formatInrCompact } from "@/lib/format";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { ChartFrame } from "@/components/ui/ChartFrame";

const ranges = ["1D", "1W", "1M", "5M", "1Y", "5Y"] as const;

export function SgnxGoldPage() {
  const [metal, setMetal] = useState<"gold" | "silver">("gold");
  const [range, setRange] = useState<(typeof ranges)[number]>("1M");

  const chartData = useMemo(() => {
    const series = marketSeries.find((item) => item.label === range)?.points ?? [];
    return series.map((value, index) => ({
      label: `${index + 1}`,
      value: metal === "gold" ? value : Math.round(value * 1.35),
    }));
  }, [metal, range]);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-green">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-green" />
            My Gold
          </span>
          <h1 className="mt-3 font-display text-3xl font-extrabold text-slate-900">
            {formatGrams(portalMember.recordedGoldWeightGrams)} Recorded Gold
            Weight
          </h1>
          <p className="mt-1 text-sm text-muted">
            Indicative current value:{" "}
            {formatInrCompact(portalMember.sgnxIndicativeValueInr)}
          </p>
          <p className="mt-2 text-sm font-bold text-brand-red">
            Configured plan credit: +{portalMember.planCreditPercent.toFixed(1)}%
          </p>
        </div>
        <article className="min-w-[220px] rounded-2xl border border-border bg-white p-4 shadow-[var(--card-shadow)]">
          <div className="flex items-center justify-between gap-2">
            <p className="text-sm font-semibold text-slate-900">
              Purchase schedule
            </p>
            <StatusBadge tone="success">Active</StatusBadge>
          </div>
          <p className="mt-2 text-xs text-muted">
            Monthly purchase contributions are recorded automatically.
          </p>
          <div className="mt-3 rounded-xl border border-border bg-surface-muted px-3 py-2">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
              Indicative gold reference / gram
            </p>
            <p className="mt-1 font-display text-lg font-extrabold">
              {formatInrCompact(portalMember.purchaseReferencePerGramInr)}
            </p>
          </div>
          <p className="mt-2 text-[11px] text-muted">
            Demo reference only — not an executable quote.
          </p>
        </article>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <Metric
          label="Total Contributions"
          value={formatInrCompact(portalMember.totalContributionsInr)}
        />
        <Metric
          label="Scheduled Completion Value"
          value={formatInrCompact(portalMember.scheduledCompletionInr)}
        />
        <Metric
          label="Promotional Cash Credit"
          value={formatInrCompact(portalMember.promotionalCreditInr)}
        />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Button className="!bg-brand-gold !text-slate-900 hover:!bg-amber-500">
          <ShoppingCart className="h-4 w-4" />
          New Gold Purchase
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <SnapshotCard
          title="Gold 24K"
          price={formatInrCompact(portalMember.goldSpotPer10gInr)}
          unit="Per 10 grams"
          change="+1.43%"
        />
        <SnapshotCard
          title="Silver"
          price={formatInrCompact(portalMember.silverSpotPerKgInr)}
          unit="Per 1 kilogram"
          change="+2.73%"
        />
      </div>

      <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
              Market Reference
            </p>
            <h2 className="mt-1 font-display text-lg font-extrabold">
              Historical {metal} reference
            </h2>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {(["gold", "silver"] as const).map((id) => (
              <button
                key={id}
                type="button"
                onClick={() => setMetal(id)}
                className={`rounded-full px-3 py-1.5 text-xs font-bold capitalize ${
                  metal === id
                    ? "bg-brand-red text-white"
                    : "bg-slate-100 text-muted"
                }`}
              >
                {id}
              </button>
            ))}
            <span className="rounded-full border border-border bg-surface-muted px-2.5 py-1 text-[10px] font-bold">
              INR
            </span>
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-1">
          {ranges.map((id) => (
            <button
              key={id}
              type="button"
              onClick={() => setRange(id)}
              className={`rounded-lg px-2.5 py-1 text-xs font-bold ${
                range === id
                  ? "bg-slate-900 text-white"
                  : "text-muted hover:bg-slate-100"
              }`}
            >
              {id}
            </button>
          ))}
        </div>
        <ChartFrame className="mt-4 h-64">
          {({ width, height }) => (
            <LineChart width={width} height={height} data={chartData}>
              <XAxis dataKey="label" tick={{ fontSize: 11, fill: "#64748b" }} />
              <YAxis
                tick={{ fontSize: 11, fill: "#64748b" }}
                domain={["auto", "auto"]}
                width={56}
              />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#b8860b"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          )}
        </ChartFrame>
        <p className="mt-2 text-xs text-muted">
          Latest point in selected range:{" "}
          <strong>
            {formatInrCompact(chartData[chartData.length - 1]?.value ?? 0)}
          </strong>{" "}
          · demo feed only
        </p>
      </section>

      <ScheduleBlock
        title="11-Month Purchase Schedule"
        badge="Cash Schedule"
        badgeTone="success"
        subtitle={`${formatInrCompact(9999.9)}/month · started 6 Apr 2026`}
      />
      <ScheduleBlock
        title="11-Month Purchase Schedule"
        badge="Gold Purchase"
        badgeTone="gold"
        subtitle="Recorded purchase months mirror the cash schedule in this demo."
      />

      <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
        <div className="flex items-center gap-2">
          <Network className="h-4 w-4 text-brand-red" />
          <h2 className="font-display text-lg font-extrabold">
            Gold Purchase Network
          </h2>
        </div>
        <p className="mt-4 rounded-xl border border-dashed border-border bg-surface-muted px-4 py-8 text-center text-sm text-muted">
          No linked participants yet. Share your sponsor code to connect your
          network.
        </p>
      </section>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-white px-4 py-3 shadow-[var(--card-shadow)]">
      <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
        {label}
      </p>
      <p className="mt-1 font-display text-lg font-extrabold">{value}</p>
    </div>
  );
}

function SnapshotCard({
  title,
  price,
  unit,
  change,
}: {
  title: string;
  price: string;
  unit: string;
  change: string;
}) {
  return (
    <article className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
            Indicative Snapshot
          </p>
          <p className="mt-1 text-sm font-semibold text-slate-700">{title}</p>
        </div>
        <StatusBadge tone="success">{change}</StatusBadge>
      </div>
      <p className="mt-3 font-display text-2xl font-extrabold">{price}</p>
      <p className="mt-1 text-xs text-muted">{unit}</p>
      <p className="mt-3 text-[11px] text-muted">
        yahoo finance · demo timestamp
      </p>
    </article>
  );
}

function ScheduleBlock({
  title,
  badge,
  badgeTone,
  subtitle,
}: {
  title: string;
  badge: string;
  badgeTone: "success" | "gold";
  subtitle: string;
}) {
  return (
    <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
      <div className="flex flex-wrap items-center gap-2">
        <CalendarDays className="h-4 w-4 text-brand-red" />
        <h2 className="font-display text-lg font-extrabold">{title}</h2>
        <StatusBadge tone={badgeTone}>{badge}</StatusBadge>
      </div>
      <p className="mt-1 text-sm text-muted">{subtitle}</p>
      <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-6 lg:grid-cols-11">
        {scheduleMonths.map((month) => {
          const paid = month.status === "paid";
          return (
            <div
              key={`${badge}-${month.id}`}
              className={`rounded-xl border px-2 py-3 text-center ${
                paid
                  ? "border-emerald-200 bg-emerald-50/60"
                  : "border-border bg-surface-muted"
              }`}
            >
              <p className="text-xs font-bold">{month.label}</p>
              <div className="mt-2 flex justify-center">
                {paid ? (
                  <CheckCircle2 className="h-4 w-4 text-brand-green" />
                ) : (
                  <Circle className="h-4 w-4 text-slate-400" />
                )}
              </div>
              <p className="mt-1 text-[10px] font-semibold text-muted">
                {paid ? "Paid" : "Upcoming"}
              </p>
            </div>
          );
        })}
      </div>
      <div className="mt-4 flex flex-wrap gap-3 text-[11px] text-muted">
        <LegendDot className="bg-brand-green" label="Paid" />
        <LegendDot className="bg-amber-400" label="Pending" />
        <LegendDot className="bg-red-500" label="Failed" />
        <LegendDot className="bg-orange-400" label="Skipped" />
        <LegendDot className="bg-slate-500" label="Upcoming" />
      </div>
    </section>
  );
}

function LegendDot({ className, label }: { className: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={`h-2 w-2 rounded-full ${className}`} />
      {label}
    </span>
  );
}
