"use client";

import { useState } from "react";
import {
  ArrowDownLeft,
  ArrowLeftRight,
  ArrowUpRight,
  Eye,
  Info,
  Lock,
  Package,
  TrendingUp,
  Wallet,
  AlertTriangle,
} from "lucide-react";
import {
  demoRecipients,
  portalMember,
  settlementTransactions,
} from "@/data/mock/portal";
import { formatInr, formatInrCompact } from "@/lib/format";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Tabs } from "@/components/ui/Tabs";
import { Drawer } from "@/components/ui/Drawer";

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "sgchain", label: "SGChain" },
  { id: "rewards", label: "Rewards" },
  { id: "history", label: "History" },
  { id: "lppool", label: "LP Pool" },
];

export function SettlementsPage() {
  const [tab, setTab] = useState("overview");
  const [settlementOpen, setSettlementOpen] = useState(false);
  const [transferOpen, setTransferOpen] = useState(false);
  const [destination, setDestination] = useState<"balance" | "package">(
    "balance",
  );
  const [compounding, setCompounding] = useState(false);

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <h1 className="font-display text-3xl font-extrabold text-slate-900">
            Settlements
          </h1>
          <p className="mt-1 text-sm text-muted">
            Manage your available balance, verified transfers and history.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <StatusBadge tone="warning">KYC Pending</StatusBadge>
          <label className="inline-flex items-center gap-2 rounded-full border border-sky-200 bg-sky-50 px-3 py-1.5 text-xs font-semibold text-sky-900">
            <TrendingUp className="h-3.5 w-3.5" />
            Compounding
            <button
              type="button"
              role="switch"
              aria-checked={compounding}
              onClick={() => setCompounding((value) => !value)}
              className={`relative h-5 w-9 rounded-full transition-colors ${
                compounding ? "bg-brand-red" : "bg-slate-300"
              }`}
            >
              <span
                className={`absolute top-0.5 h-4 w-4 rounded-full bg-white transition-transform ${
                  compounding ? "left-4" : "left-0.5"
                }`}
              />
            </button>
            <span>{compounding ? "ON" : "OFF"}</span>
          </label>
        </div>
      </div>

      <section className="gradient-hero-red relative overflow-hidden rounded-2xl px-5 py-6 text-white shadow-[var(--card-shadow)]">
        <div className="pointer-events-none absolute -right-6 top-4 h-28 w-40 rounded-xl bg-gradient-to-br from-amber-200/40 to-yellow-500/20 blur-sm" />
        <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white/75">
          Available for Settlement
          <Eye className="h-3.5 w-3.5" />
        </p>
        <p className="mt-2 font-display text-4xl font-extrabold">
          {formatInrCompact(portalMember.availableSettlementInr)}
        </p>
        <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-black/25 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          0% cap used
        </span>
        <div className="mt-5 grid gap-2 sm:grid-cols-2 xl:grid-cols-4">
          <HeroMetric
            icon={Lock}
            label="On Hold"
            value={formatInr(portalMember.onHoldInr)}
          />
          <HeroMetric
            icon={Wallet}
            label="Settlement Available"
            value={formatInr(portalMember.availableSettlementInr)}
          />
          <HeroMetric
            icon={TrendingUp}
            label="Credit Capacity"
            value={formatInr(portalMember.creditCapacityInr)}
          />
          <HeroMetric
            icon={ArrowUpRight}
            label="Settled"
            value={formatInr(portalMember.settledInr)}
          />
        </div>
      </section>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          label="Settlement Ceiling"
          value={formatInr(portalMember.settlementCeilingInr)}
          hint="Total limit"
          iconClass="bg-emerald-50 text-brand-green"
        />
        <StatCard
          label="Available for Settlement"
          value={formatInr(portalMember.availableSettlementInr)}
          hint={`${formatInr(portalMember.settledInr)} settled`}
          iconClass="bg-amber-50 text-amber-700"
        />
        <StatCard
          label="Credit Ceiling"
          value={formatInr(portalMember.creditCeilingInr)}
          hint="0% used"
          iconClass="bg-violet-50 text-violet-700"
        />
        <StatCard
          label="Credit Capacity"
          value={formatInr(portalMember.creditCapacityInr)}
          hint={`${formatInr(portalMember.recordedThisCycleInr)} recorded this cycle`}
          iconClass="bg-emerald-50 text-brand-green"
        />
      </div>

      <Tabs items={tabs} value={tab} onChange={setTab} />

      {tab === "overview" ? (
        <OverviewPanel
          onRequestSettlement={() => setSettlementOpen(true)}
          onTransfer={() => setTransferOpen(true)}
        />
      ) : null}
      {tab === "sgchain" ? (
        <PanelCard title="SG Staking Purchase Code">
          <label className="block text-sm font-semibold">
            Staking Amount
            <input
              type="number"
              placeholder="0.00"
              className="mt-2 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand-red"
            />
          </label>
          <p className="mt-2 text-xs text-muted">
            Available Balance:{" "}
            {formatInrCompact(portalMember.availableSettlementInr)}
          </p>
          <button
            type="button"
            className="mt-4 text-sm font-bold text-brand-red hover:underline"
          >
            Create Staking Code
          </button>
        </PanelCard>
      ) : null}
      {tab === "rewards" ? (
        <PanelCard title="SGGOLD Loyalty Reward">
          <p className="text-sm text-muted">
            Generate your eligibility code to enroll with SG Gold. Minimum
            package: {formatInr(9000)}.
          </p>
          <Button className="mt-4 !bg-brand-green hover:!bg-emerald-700">
            Generate Code
          </Button>
          <div className="mt-6 rounded-xl border border-border p-4">
            <div className="flex items-center justify-between gap-2">
              <div>
                <h3 className="font-display text-lg font-extrabold">
                  Credit Summary
                </h3>
                <p className="text-xs text-muted">1 of 5 levels unlocked</p>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-border bg-surface-muted px-4 py-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
                Total Locked Credits
              </p>
              <p className="mt-1 font-display text-2xl font-extrabold">
                {formatInrCompact(49999.5)}
              </p>
            </div>
          </div>
        </PanelCard>
      ) : null}
      {tab === "history" ? <HistoryPanel /> : null}
      {tab === "lppool" ? (
        <PanelCard title="LP Pool">
          <p className="text-sm text-muted">
            No LP pool positions in this demo account. Figures remain fictional
            for layout practice.
          </p>
        </PanelCard>
      ) : null}

      <Drawer
        open={settlementOpen}
        onClose={() => setSettlementOpen(false)}
        title="Request Settlement"
        description="Request a transfer from your available settlement balance"
      >
        <div className="space-y-4">
          <div className="rounded-xl border border-amber-300 bg-amber-50 p-4">
            <p className="inline-flex items-center gap-2 text-sm font-bold text-amber-950">
              <AlertTriangle className="h-4 w-4" />
              KYC Verification Required
            </p>
            <p className="mt-2 text-sm text-amber-900">
              You must complete KYC verification before requesting settlement.
            </p>
            <Button href="/kyc" variant="secondary" className="mt-3 !px-4 !py-2">
              Complete KYC
            </Button>
          </div>
          <div className="rounded-xl border border-orange-200 bg-orange-50 px-3 py-2 text-sm text-orange-950">
            Your KYC must be verified before you can request settlement.
          </div>
        </div>
      </Drawer>

      <Drawer
        open={transferOpen}
        onClose={() => setTransferOpen(false)}
        title="Transfer Funds"
        description="Send funds to another user in your network"
      >
        <div className="space-y-4">
          <p className="text-sm text-muted">
            Available Balance:{" "}
            <strong>
              {formatInrCompact(portalMember.availableSettlementInr)}
            </strong>
          </p>
          <div className="rounded-xl border border-border p-4">
            <label className="block text-sm font-semibold">
              Recipient
              <input
                list="demo-recipients"
                placeholder="Search by name, user ID, or Fancy ID."
                className="mt-2 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand-red"
              />
              <datalist id="demo-recipients">
                {demoRecipients.map((item) => (
                  <option key={item.id} value={`${item.name} (${item.id})`} />
                ))}
              </datalist>
            </label>
            <label className="mt-4 block text-sm font-semibold">
              Amount (INR)
              <input
                type="number"
                placeholder="0.00"
                className="mt-2 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand-red"
              />
            </label>
            <p className="mt-4 text-sm font-semibold">Transfer destination</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              <DestinationCard
                active={destination === "balance"}
                onClick={() => setDestination("balance")}
                icon={Wallet}
                title="To Balance"
                body="For withdrawals & spending."
              />
              <DestinationCard
                active={destination === "package"}
                onClick={() => setDestination("package")}
                icon={Package}
                title="To Package"
                body="For package upgrades."
              />
            </div>
            <Button className="mt-4 w-full">Proceed to Verification →</Button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

function OverviewPanel({
  onRequestSettlement,
  onTransfer,
}: {
  onRequestSettlement: () => void;
  onTransfer: () => void;
}) {
  return (
    <div className="space-y-5">
      <div className="grid gap-4 lg:grid-cols-[1.4fr_0.9fr]">
        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
            Available for Settlement
          </p>
          <p className="mt-2 font-display text-3xl font-extrabold">
            {formatInrCompact(portalMember.availableSettlementInr)}
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            <MiniStat label="On Hold" value={formatInr(portalMember.onHoldInr)} />
            <MiniStat
              label="Settlement Available"
              value={formatInr(portalMember.availableSettlementInr)}
            />
            <MiniStat
              label="Credit Capacity"
              value={formatInr(portalMember.creditCapacityInr)}
            />
            <MiniStat
              label="Settled"
              value={formatInr(portalMember.settledInr)}
            />
          </div>
        </section>
        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <h2 className="font-display text-lg font-extrabold">Quick Actions</h2>
          <div className="mt-4 space-y-2">
            <Button className="w-full" onClick={onRequestSettlement}>
              <ArrowUpRight className="h-4 w-4" />
              Request Settlement
            </Button>
            <Button
              variant="secondary"
              className="w-full !border-brand-red/40 !text-brand-red"
              onClick={onTransfer}
            >
              <ArrowLeftRight className="h-4 w-4" />
              Transfer
            </Button>
          </div>
          <p className="mt-4 rounded-xl border border-red-100 bg-red-50 px-3 py-2 text-xs text-red-900">
            Move funds through account transfers or request settlement when your
            KYC and ceiling allow it.
          </p>
        </section>
      </div>

      <div className="grid gap-3 md:grid-cols-2">
        <article className="rounded-2xl border border-border bg-white p-4 shadow-[var(--card-shadow)]">
          <div className="flex items-center justify-between gap-2">
            <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
              Credit Ceiling
            </p>
            <p className="text-xs font-bold text-muted">0% used</p>
          </div>
          <p className="mt-2 font-display text-2xl font-extrabold">
            {formatInr(portalMember.creditCeilingInr)}
          </p>
          <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-0 rounded-full bg-brand-red" />
          </div>
        </article>
        <article className="rounded-2xl border border-border bg-white p-4 shadow-[var(--card-shadow)]">
          <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
            Credit Capacity
          </p>
          <p className="mt-2 font-display text-2xl font-extrabold">
            {formatInr(portalMember.creditCapacityInr)}
          </p>
          <p className="mt-2 text-xs text-muted">
            {formatInr(portalMember.recordedThisCycleInr)} recorded this cycle
          </p>
        </article>
      </div>

      <p className="inline-flex w-full items-start gap-2 rounded-xl border border-sky-200 bg-sky-50 px-3 py-2.5 text-sm text-sky-950">
        <Info className="mt-0.5 h-4 w-4 shrink-0" />
        Locked credits are released when you reinvest and count toward your new
        ceiling.
      </p>

      <RecentTransactions />

      <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <h2 className="font-display text-lg font-extrabold">
              Recorded This Cycle
            </h2>
            <p className="text-xs text-muted">18/01/2026 - N/A</p>
          </div>
          <div className="flex gap-2">
            <button
              type="button"
              className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold"
            >
              Current cycle
            </button>
            <button
              type="button"
              className="rounded-full border border-border px-3 py-1.5 text-xs font-semibold"
            >
              Show details
            </button>
          </div>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
          <CycleStat
            label="Recorded So Far"
            value={formatInrCompact(portalMember.recordedThisCycleInr)}
          />
          <CycleStat label="Daily Avg" value={formatInrCompact(657.3)} />
          <CycleStat label="Weekly Avg" value={formatInrCompact(4601.1)} />
          <CycleStat label="Best Day" value={formatInrCompact(9800)} />
        </div>
      </section>
    </div>
  );
}

function RecentTransactions() {
  return (
    <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
      <div className="flex items-center justify-between gap-2">
        <h2 className="font-display text-lg font-extrabold">
          Recent Transactions
        </h2>
        <button
          type="button"
          className="text-sm font-semibold text-brand-red hover:underline"
        >
          View all
        </button>
      </div>
      <ul className="mt-4 space-y-2">
        {settlementTransactions.map((tx) => {
          const credit = tx.amountInr > 0;
          return (
            <li
              key={tx.id}
              className="flex items-center justify-between gap-3 rounded-xl border border-border px-3 py-3"
            >
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-full ${
                    credit
                      ? "bg-emerald-50 text-brand-green"
                      : "bg-red-50 text-brand-red"
                  }`}
                >
                  {credit ? (
                    <ArrowDownLeft className="h-4 w-4" />
                  ) : (
                    <ArrowUpRight className="h-4 w-4" />
                  )}
                </span>
                <div>
                  <p className="text-sm font-semibold">{tx.title}</p>
                  <p className="text-xs text-muted">{tx.at}</p>
                </div>
              </div>
              <div className="text-right">
                <p
                  className={`text-sm font-bold ${
                    credit ? "text-brand-green" : "text-brand-red"
                  }`}
                >
                  {credit ? "+" : ""}
                  {formatInrCompact(tx.amountInr)} INR
                </p>
                <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
                  {tx.status}
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function HistoryPanel() {
  return (
    <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
      <h2 className="font-display text-lg font-extrabold">
        Settlement History
      </h2>
      <div className="mt-4 overflow-x-auto">
        <table className="min-w-full text-left text-sm">
          <thead>
            <tr className="border-b border-border text-[10px] uppercase tracking-wider text-muted">
              <th className="py-2 pr-3">Details</th>
              <th className="py-2 pr-3">Amount</th>
              <th className="py-2 pr-3">Status</th>
              <th className="py-2">Date & Time</th>
            </tr>
          </thead>
          <tbody>
            {settlementTransactions.map((tx) => {
              const credit = tx.amountInr > 0;
              return (
                <tr key={`hist-${tx.id}`} className="border-b border-border/70">
                  <td className="py-3 pr-3">
                    <p className="font-semibold">{tx.title}</p>
                    <p className="text-xs text-muted">Type: {tx.type}</p>
                  </td>
                  <td
                    className={`py-3 pr-3 font-bold ${
                      credit ? "text-brand-green" : "text-brand-red"
                    }`}
                  >
                    {credit ? "+" : ""}
                    {tx.amountInr.toFixed(2)} INR
                  </td>
                  <td className="py-3 pr-3">{tx.status}</td>
                  <td className="py-3 text-muted">{tx.at}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function PanelCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
      <h2 className="font-display text-lg font-extrabold">{title}</h2>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function HeroMetric({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Wallet;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/15 bg-black/20 px-3 py-3">
      <p className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white/70">
        <Icon className="h-3.5 w-3.5" />
        {label}
      </p>
      <p className="mt-1 text-sm font-bold">{value}</p>
    </div>
  );
}

function StatCard({
  label,
  value,
  hint,
  iconClass,
}: {
  label: string;
  value: string;
  hint: string;
  iconClass: string;
}) {
  return (
    <article className="rounded-2xl border border-border bg-white p-4 shadow-[var(--card-shadow)]">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
            {label}
          </p>
          <p className="mt-1 font-display text-xl font-extrabold">{value}</p>
          <p className="mt-1 text-xs text-muted">{hint}</p>
        </div>
        <span
          className={`flex h-9 w-9 items-center justify-center rounded-full ${iconClass}`}
        >
          <Wallet className="h-4 w-4" />
        </span>
      </div>
    </article>
  );
}

function MiniStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted px-3 py-2">
      <p className="text-[10px] font-bold uppercase tracking-wider text-muted">
        {label}
      </p>
      <p className="mt-1 text-sm font-bold">{value}</p>
    </div>
  );
}

function CycleStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl border border-emerald-100 bg-emerald-50/70 px-3 py-3">
      <p className="text-[10px] font-bold uppercase tracking-wider text-emerald-800">
        {label}
      </p>
      <p className="mt-1 font-display text-lg font-extrabold text-slate-900">
        {value}
      </p>
    </div>
  );
}

function DestinationCard({
  active,
  onClick,
  icon: Icon,
  title,
  body,
}: {
  active: boolean;
  onClick: () => void;
  icon: typeof Wallet;
  title: string;
  body: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-xl border px-3 py-3 text-left ${
        active
          ? "border-brand-red bg-red-50"
          : "border-border hover:bg-slate-50"
      }`}
    >
      <Icon className="h-4 w-4 text-brand-red" />
      <p className="mt-2 text-sm font-bold">{title}</p>
      <p className="text-xs text-muted">{body}</p>
    </button>
  );
}
