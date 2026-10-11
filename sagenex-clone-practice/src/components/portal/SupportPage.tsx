"use client";

import { useState } from "react";
import {
  Headset,
  LifeBuoy,
  MessageSquarePlus,
  Phone,
  Mail,
} from "lucide-react";
import { supportTickets } from "@/data/mock/portal";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Drawer } from "@/components/ui/Drawer";

export function SupportPage() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-red">
            <Headset className="h-3.5 w-3.5" />
            Support Desk
          </p>
          <h1 className="mt-1 font-display text-3xl font-extrabold text-slate-900">
            Support & Complaints
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-muted">
            Raise tracked demo requests, review open tickets and review the
            grievance pathway. DEMO / PRACTICE only — no live agents.
          </p>
        </div>
        <Button type="button" onClick={() => setOpen(true)}>
          <MessageSquarePlus className="h-4 w-4" />
          New request
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <InfoTile
          icon={LifeBuoy}
          title="Portal tickets"
          body="Submit and track fictional support cases from this page."
        />
        <InfoTile
          icon={Mail}
          title="Complaints channel"
          body="Demo grievance intake for teaching UI flows only."
        />
        <InfoTile
          icon={Phone}
          title="Escalation"
          body="No phone escalation in this practice clone."
        />
      </div>

      <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)] sm:p-6">
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-display text-xl font-extrabold">
            Recent tickets
          </h2>
          <StatusBadge tone="neutral">Demo data</StatusBadge>
        </div>
        <ul className="mt-4 space-y-2">
          {supportTickets.map((ticket) => (
            <li
              key={ticket.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border px-4 py-3"
            >
              <div>
                <p className="text-sm font-bold text-slate-900">
                  {ticket.subject}
                </p>
                <p className="mt-0.5 text-xs text-muted">
                  {ticket.id} · {ticket.channel} · updated {ticket.updated}
                </p>
              </div>
              <StatusBadge
                tone={
                  ticket.status === "Resolved"
                    ? "success"
                    : ticket.status === "Open"
                      ? "warning"
                      : "neutral"
                }
              >
                {ticket.status}
              </StatusBadge>
            </li>
          ))}
        </ul>
      </section>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-950">
        <strong>Important:</strong> This page does not contact a real support
        team. Submissions stay in the browser session for layout practice.
      </section>

      <Drawer
        open={open}
        onClose={() => {
          setOpen(false);
          setSubmitted(false);
        }}
        title="New support request"
        description="Simulated intake form — nothing is sent to a server."
      >
        {submitted ? (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
            Demo ticket recorded locally as DEMO-TCK-NEW. Close the drawer to
            continue.
          </div>
        ) : (
          <form
            className="space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              setSubmitted(true);
            }}
          >
            <label className="block text-sm font-semibold">
              Category
              <select className="mt-2 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand-red">
                <option>Account / KYC</option>
                <option>Settlements</option>
                <option>Gold / custody</option>
                <option>Complaint</option>
              </select>
            </label>
            <label className="block text-sm font-semibold">
              Subject
              <input
                required
                className="mt-2 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand-red"
                placeholder="Short summary"
              />
            </label>
            <label className="block text-sm font-semibold">
              Details
              <textarea
                required
                rows={4}
                className="mt-2 w-full rounded-xl border border-border px-3 py-2.5 text-sm outline-none focus:border-brand-red"
                placeholder="Describe the demo issue"
              />
            </label>
            <Button type="submit" className="w-full">
              Submit demo request
            </Button>
          </form>
        )}
      </Drawer>
    </div>
  );
}

function InfoTile({
  icon: Icon,
  title,
  body,
}: {
  icon: typeof LifeBuoy;
  title: string;
  body: string;
}) {
  return (
    <article className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
      <Icon className="h-5 w-5 text-brand-red" />
      <p className="mt-3 text-sm font-bold">{title}</p>
      <p className="mt-1 text-xs text-muted">{body}</p>
    </article>
  );
}
