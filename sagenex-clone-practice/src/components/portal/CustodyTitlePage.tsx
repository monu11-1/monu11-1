"use client";

import {
  Building2,
  CheckCircle2,
  Download,
  FileText,
  MapPin,
  RefreshCw,
  Scale,
  ShieldCheck,
  Truck,
  Umbrella,
} from "lucide-react";
import {
  ownershipChecklist,
  portalMember,
  sampleDocuments,
} from "@/data/mock/portal";
import { formatGrams, formatInr } from "@/lib/format";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";

const journey = [
  { label: "Invoice verified", date: "18 Jan 2026" },
  { label: "Package gold recorded", date: "18 Jan 2026" },
  { label: "Vault confirmed", date: "18 Jan 2026" },
  { label: "Insurance active", date: "18 Jan 2026" },
];

export function CustodyTitlePage() {
  const ready = ownershipChecklist.filter((item) => item.done).length;

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-brand-red">
            Ownership Vault
          </p>
          <h1 className="mt-1 font-display text-3xl font-extrabold text-slate-900">
            Custody & Title
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-muted">
            Package gold quantity, title status, vault record and supporting
            evidence in one place. DEMO records only.
          </p>
        </div>
        <Button type="button" variant="secondary" className="!px-4 !py-2">
          <RefreshCw className="h-3.5 w-3.5" />
          Refresh records
        </Button>
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-red">
            Readiness
          </p>
          <h2 className="mt-1 font-display text-xl font-extrabold">
            Ownership checklist.
          </h2>
          <div className="mx-auto mt-6 flex h-36 w-36 items-center justify-center rounded-full border-[10px] border-emerald-500">
            <div className="text-center">
              <p className="font-display text-2xl font-extrabold text-slate-900">
                {ready}/{ownershipChecklist.length}
              </p>
              <p className="text-[10px] font-bold uppercase tracking-wider text-brand-green">
                Ready
              </p>
            </div>
          </div>
          <ul className="mt-6 space-y-2">
            {ownershipChecklist.map((item) => (
              <li
                key={item.id}
                className="flex items-center justify-between gap-2 rounded-xl border border-border bg-surface-muted px-3 py-2.5"
              >
                <span className="inline-flex items-center gap-2 text-sm font-medium">
                  <CheckCircle2 className="h-4 w-4 text-brand-green" />
                  {item.label}
                </span>
                <StatusBadge tone="success">Done</StatusBadge>
              </li>
            ))}
          </ul>
        </section>

        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-amber-700">
            Package Gold Record
          </p>
          <h2 className="mt-1 font-display text-xl font-extrabold">
            Gold on record.
          </h2>
          <p className="mt-2 text-sm text-muted">
            Legal claim information for the demo package quantity held against
            this practice account.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <RecordStat
              icon={Scale}
              label="Net Quantity"
              value={formatGrams(portalMember.packageGoldGrams)}
            />
            <RecordStat
              icon={Building2}
              label="Package Value"
              value={formatInr(portalMember.packageValueInr)}
            />
            <RecordStat icon={ShieldCheck} label="Purity" value="99.9% Fine Gold" />
            <RecordStat
              icon={Umbrella}
              label="Custody Evidence"
              value="Held in approved vault"
              tone="green"
            />
          </div>
        </section>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        <StatusTile
          icon={FileText}
          title="Title"
          body="Allocated gold"
          badge="Complete"
        />
        <StatusTile
          icon={Building2}
          title="Vault"
          body="Approved vault"
          badge="Complete"
        />
        <StatusTile
          icon={Umbrella}
          title="Insurance"
          body="Active cover"
          badge="Complete"
        />
      </div>

      <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted">
              Traceability
            </p>
            <h2 className="mt-1 font-display text-lg font-extrabold">
              Ownership journey.
            </h2>
          </div>
          <p className="text-xs font-semibold text-muted">
            {journey.length} of {journey.length} milestones complete
          </p>
        </div>
        <ol className="mt-6 grid gap-4 md:grid-cols-4">
          {journey.map((step, index) => (
            <li key={step.label} className="relative">
              {index < journey.length - 1 ? (
                <span className="absolute left-4 top-4 hidden h-0.5 w-[calc(100%+1rem)] bg-emerald-200 md:block" />
              ) : null}
              <div className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-brand-green text-white">
                <CheckCircle2 className="h-4 w-4" />
              </div>
              <p className="mt-3 text-sm font-semibold">{step.label}</p>
              <p className="text-xs text-muted">{step.date}</p>
            </li>
          ))}
        </ol>
      </section>

      <div className="grid gap-4 lg:grid-cols-2">
        <PassportCard />
        <VaultDossierCard />
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-red">
            Evidence Vault
          </p>
          <h2 className="mt-1 font-display text-lg font-extrabold">
            Supporting documents.
          </h2>
          <p className="mt-1 text-sm text-muted">
            Download any available record. Missing files stay locked until
            recorded.
          </p>
          <ul className="mt-4 space-y-2">
            {sampleDocuments.map((doc) => (
              <li
                key={doc.id}
                className="flex items-center justify-between gap-3 rounded-xl border border-border px-3 py-3"
              >
                <span className="inline-flex items-center gap-2 text-sm font-semibold">
                  <FileText className="h-4 w-4 text-brand-red" />
                  {doc.title}
                </span>
                <span className="inline-flex items-center gap-2 text-xs font-semibold text-brand-green">
                  {doc.status}
                  <Download className="h-4 w-4 text-muted" />
                </span>
              </li>
            ))}
          </ul>
          <Button className="mt-4 w-full">
            <Download className="h-4 w-4" />
            Download full document pack
          </Button>
        </section>

        <section className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--card-shadow)]">
          <div className="gradient-hero-red px-5 py-4 text-white">
            <p className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white/80">
              <Truck className="h-3.5 w-3.5" />
              Action Dock
            </p>
            <h2 className="mt-1 font-display text-xl font-extrabold">
              Physical delivery
            </h2>
            <p className="mt-1 text-sm text-white/80">
              Request insured delivery once title and vault records are complete.
            </p>
          </div>
          <div className="space-y-3 p-5">
            <div className="flex flex-wrap gap-2">
              <StatusBadge tone="success">Identity review</StatusBadge>
              <StatusBadge tone="success">Title check</StatusBadge>
              <StatusBadge tone="neutral">Delivery quote</StatusBadge>
            </div>
            <p className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-900">
              Core custody checks look complete. You can submit a delivery
              address for review.
            </p>
            <Button className="w-full">
              <MapPin className="h-4 w-4" />
              Submit delivery address →
            </Button>
            <div className="grid grid-cols-2 gap-2">
              <button
                type="button"
                className="rounded-xl border border-border px-3 py-3 text-left text-sm font-semibold hover:bg-slate-50"
              >
                Ownership transfer
              </button>
              <button
                type="button"
                className="rounded-xl border border-border px-3 py-3 text-left text-sm font-semibold hover:bg-slate-50"
              >
                Buyback quote
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function RecordStat({
  icon: Icon,
  label,
  value,
  tone,
}: {
  icon: typeof Scale;
  label: string;
  value: string;
  tone?: "green";
}) {
  return (
    <div className="rounded-xl border border-border bg-surface-muted px-3 py-3">
      <p className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-muted">
        <Icon className="h-3.5 w-3.5" />
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

function StatusTile({
  icon: Icon,
  title,
  body,
  badge,
}: {
  icon: typeof FileText;
  title: string;
  body: string;
  badge: string;
}) {
  return (
    <article className="rounded-2xl border border-border bg-white p-4 shadow-[var(--card-shadow)]">
      <div className="flex items-start justify-between gap-2">
        <Icon className="h-5 w-5 text-brand-green" />
        <StatusBadge tone="success">{badge}</StatusBadge>
      </div>
      <p className="mt-3 text-sm font-bold">{title}</p>
      <p className="text-xs text-muted">{body}</p>
    </article>
  );
}

function PassportCard() {
  const rows = [
    ["Invoice status", "Verified"],
    ["Valuation records", "3 priced package records"],
    ["Refinery standard", "99.9% fine gold"],
    ["Ownership status", "Allocated gold"],
    ["Gross weight", formatGrams(portalMember.packageGoldGrams)],
    ["Net fine weight", formatGrams(portalMember.packageGoldGrams)],
    ["Latest package activity", "18 Jan 2026"],
    ["Package record", "3 priced package records"],
  ];
  return (
    <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-red">
            Package Gold Passport
          </p>
          <h2 className="mt-1 font-display text-lg font-extrabold">
            Gold identification
          </h2>
        </div>
        <Scale className="h-4 w-4 text-brand-red" />
      </div>
      <dl className="mt-4 grid gap-3 sm:grid-cols-2">
        {rows.map(([label, value]) => (
          <div key={label}>
            <dt className="text-[10px] font-bold uppercase tracking-wider text-muted">
              {label}
            </dt>
            <dd className="mt-0.5 text-sm font-bold">{value}</dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 rounded-xl bg-emerald-50 px-3 py-2 text-center text-sm font-semibold text-emerald-800">
        Gold invoice verified.
      </p>
    </section>
  );
}

function VaultDossierCard() {
  const rows = [
    ["Custodian", "Approved vault"],
    ["Vault location", "Held in approved vault"],
    ["Custody reference", "3 priced package records"],
    ["Segregation", "Allocated"],
    ["Last reconciliation", "18 Jan 2026"],
    ["Next reconciliation", "Not recorded"],
    ["Insurance status", "ACTIVE"],
    ["Last audit", "18 Jan 2026"],
  ];
  return (
    <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-brand-red">
            Vault Dossier
          </p>
          <h2 className="mt-1 font-display text-lg font-extrabold">
            Custody verification
          </h2>
        </div>
        <Building2 className="h-4 w-4 text-brand-red" />
      </div>
      <dl className="mt-4 grid gap-3 sm:grid-cols-2">
        {rows.map(([label, value]) => (
          <div key={label}>
            <dt className="text-[10px] font-bold uppercase tracking-wider text-muted">
              {label}
            </dt>
            <dd
              className={`mt-0.5 text-sm font-bold ${
                value === "Not recorded" ? "text-amber-600" : ""
              }`}
            >
              {value}
            </dd>
          </div>
        ))}
      </dl>
      <p className="mt-4 rounded-xl bg-emerald-50 px-3 py-2 text-center text-sm font-semibold text-emerald-800">
        Custody confirmed in approved vault.
      </p>
    </section>
  );
}
