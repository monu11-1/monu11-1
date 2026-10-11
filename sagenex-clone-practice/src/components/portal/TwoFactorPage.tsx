"use client";

import { useState } from "react";
import { KeyRound, ShieldCheck, Smartphone } from "lucide-react";
import { twoFactorMethods } from "@/data/mock/portal";
import { Button } from "@/components/ui/Button";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Drawer } from "@/components/ui/Drawer";

export function TwoFactorPage() {
  const [setupOpen, setSetupOpen] = useState(false);
  const [code, setCode] = useState("");
  const [verified, setVerified] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.16em] text-brand-red">
            <KeyRound className="h-3.5 w-3.5" />
            Account Security
          </p>
          <h1 className="mt-1 font-display text-3xl font-extrabold text-slate-900">
            Two-Factor Authentication
          </h1>
          <p className="mt-1 max-w-2xl text-sm text-muted">
            Manage fictional 2FA methods for this practice portal. Codes are
            validated locally with a demo rule only.
          </p>
        </div>
        <StatusBadge tone="success">Authenticator on</StatusBadge>
      </div>

      <section className="overflow-hidden rounded-2xl border border-border bg-white shadow-[var(--card-shadow)]">
        <div className="gradient-hero-red px-5 py-5 sm:px-6">
          <p className="inline-flex items-center gap-2 text-sm font-bold text-white">
            <ShieldCheck className="h-4 w-4" />
            Protection status
          </p>
          <p className="mt-2 font-display text-2xl font-extrabold text-white">
            Demo 2FA enabled
          </p>
          <p className="mt-1 text-sm text-white/80">
            Settlement and transfer confirmations can request a practice code.
          </p>
        </div>
      </section>

      <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)] sm:p-6">
        <h2 className="font-display text-xl font-extrabold">Methods</h2>
        <ul className="mt-4 space-y-2.5">
          {twoFactorMethods.map((method) => (
            <li
              key={method.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-border px-4 py-3"
            >
              <div className="flex items-start gap-3">
                <Smartphone className="mt-0.5 h-4 w-4 text-brand-red" />
                <div>
                  <p className="text-sm font-bold">{method.title}</p>
                  <p className="text-xs text-muted">{method.detail}</p>
                </div>
              </div>
              <StatusBadge tone={method.enabled ? "success" : "neutral"}>
                {method.enabled ? "Enabled" : "Off"}
              </StatusBadge>
            </li>
          ))}
        </ul>
        <Button
          type="button"
          className="mt-5"
          onClick={() => setSetupOpen(true)}
        >
          Test verification challenge
        </Button>
      </section>

      <section className="rounded-2xl border border-border bg-white p-5 shadow-[var(--card-shadow)] sm:p-6">
        <h2 className="font-display text-lg font-extrabold">
          Recovery codes (demo)
        </h2>
        <div className="mt-3 grid gap-2 sm:grid-cols-2">
          {["DEMO-A1B2", "DEMO-C3D4", "DEMO-E5F6", "DEMO-G7H8"].map((item) => (
            <code
              key={item}
              className="rounded-lg border border-border bg-surface-muted px-3 py-2 text-center text-sm font-semibold tracking-wider"
            >
              {item}
            </code>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted">
          These codes are fictional placeholders for teaching UI layout.
        </p>
      </section>

      <Drawer
        open={setupOpen}
        onClose={() => {
          setSetupOpen(false);
          setCode("");
          setVerified(false);
        }}
        title="Verification challenge"
        description='Enter demo code "123456" to simulate success.'
      >
        {verified ? (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900">
            Challenge passed. No real authenticator was contacted.
          </div>
        ) : (
          <form
            className="space-y-4"
            onSubmit={(event) => {
              event.preventDefault();
              setVerified(code.trim() === "123456");
            }}
          >
            <label className="block text-sm font-semibold">
              One-time code
              <input
                value={code}
                onChange={(event) => setCode(event.target.value)}
                inputMode="numeric"
                maxLength={6}
                placeholder="123456"
                className="mt-2 w-full rounded-xl border border-border px-3 py-2.5 text-sm tracking-[0.3em] outline-none focus:border-brand-red"
              />
            </label>
            {code && code !== "123456" ? (
              <p className="text-xs text-brand-red">
                Incorrect demo code. Use 123456.
              </p>
            ) : null}
            <Button type="submit" className="w-full">
              Verify
            </Button>
          </form>
        )}
      </Drawer>
    </div>
  );
}
