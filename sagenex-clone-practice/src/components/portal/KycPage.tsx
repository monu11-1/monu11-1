"use client";

import { useState } from "react";
import {
  BadgeCheck,
  CheckCircle2,
  Clock3,
  FileUp,
  ShieldAlert,
} from "lucide-react";
import { kycSteps, portalMember } from "@/data/mock/portal";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Drawer } from "@/components/ui/Drawer";

export function KycPage() {
  const [uploadOpen, setUploadOpen] = useState(false);
  const [uploaded, setUploaded] = useState(false);
  const complete = kycSteps.filter((step) => step.status === "complete").length;

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-red">
            <BadgeCheck className="h-3.5 w-3.5" />
            Identity Record
          </p>
          <h1 className="mt-1 font-display text-3xl font-extrabold text-slate-900">
            KYC Verification
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-muted">
            Review fictional identity checklist items for {portalMember.shortName}.
            DEMO / PRACTICE — no real documents are processed.
          </p>
        </div>
        <StatusBadge tone="warning">ReKYC required</StatusBadge>
      </div>

      <section className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--card-shadow)]">
        <div className="gradient-hero-red px-5 py-5 sm:px-6">
          <p className="text-[11px] font-bold uppercase tracking-[0.16em] text-white/80">
            Verification progress
          </p>
          <p className="mt-2 font-display text-3xl font-extrabold text-white">
            {complete}/{kycSteps.length} complete
          </p>
          <p className="mt-1 text-sm text-white/80">
            Identity update required before demo settlement requests unlock.
          </p>
        </div>
        <div className="h-2 bg-slate-100">
          <div
            className="h-full bg-brand-amber"
            style={{ width: `${(complete / kycSteps.length) * 100}%` }}
          />
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)] sm:p-6">
        <h2 className="font-display text-xl font-extrabold">Checklist</h2>
        <ul className="mt-4 space-y-2.5">
          {kycSteps.map((step) => {
            const done = step.status === "complete";
            const update = step.status === "update_required";
            return (
              <li
                key={step.id}
                className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border px-4 py-3"
              >
                <span className="inline-flex items-center gap-2 text-sm font-semibold">
                  {done ? (
                    <CheckCircle2 className="h-4 w-4 text-brand-green" />
                  ) : (
                    <Clock3 className="h-4 w-4 text-brand-amber" />
                  )}
                  {step.label}
                </span>
                <StatusBadge
                  tone={done ? "success" : update ? "warning" : "neutral"}
                >
                  {done
                    ? "Complete"
                    : update
                      ? "Update required"
                      : "Pending"}
                </StatusBadge>
              </li>
            );
          })}
        </ul>
        <div className="mt-5 flex flex-wrap gap-2">
          <Button type="button" onClick={() => setUploadOpen(true)}>
            <FileUp className="h-4 w-4" />
            Upload demo document
          </Button>
          <Button href="/risk-centre" variant="secondary">
            Review risk acknowledgements
          </Button>
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)] sm:p-6">
        <p className="inline-flex items-center gap-2 text-sm font-bold">
          <ShieldAlert className="h-4 w-4 text-brand-red" />
          Signed record
        </p>
        <p className="mt-2 text-sm text-muted">
          A signed KYC form is simulated for this practice account. Viewing it
          does not satisfy a live compliance process.
        </p>
        <Button variant="secondary" className="mt-4">
          View signed KYC form (demo)
        </Button>
      </section>

      <Drawer
        open={uploadOpen}
        onClose={() => {
          setUploadOpen(false);
          setUploaded(false);
        }}
        title="Upload demo document"
        description="Files are not stored. This only demonstrates the UI."
      >
        {uploaded ? (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
            Demo upload acknowledged. Checklist status is unchanged because this
            is a practice clone.
          </div>
        ) : (
          <form
            className="space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              setUploaded(true);
            }}
          >
            <label className="block text-sm font-semibold">
              Document type
              <select className="mt-2 w-full rounded-xl border border-border px-3 py-2.5 text-sm">
                <option>Passport / National ID</option>
                <option>PAN card</option>
                <option>Address proof</option>
              </select>
            </label>
            <label className="block text-sm font-semibold">
              Choose file
              <input
                type="file"
                className="mt-2 block w-full text-sm"
                accept=".pdf,.png,.jpg,.jpeg"
              />
            </label>
            <Button type="submit" className="w-full">
              Submit demo upload
            </Button>
          </form>
        )}
      </Drawer>
    </div>
  );
}
