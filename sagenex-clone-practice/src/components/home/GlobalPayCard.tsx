import { KeyRound, Layers3, Shield } from "lucide-react";
import { payCardFeatures } from "@/data/homepage";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";

const pills = [
  { icon: KeyRound, label: "Non-custodial & seedless" },
  { icon: Layers3, label: "14,100+ assets • 90+ networks" },
  { icon: Shield, label: "Rugged, sealed build" },
];

export function GlobalPayCard() {
  return (
    <section id="global-pay" className="pay-atmosphere py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 text-center sm:px-6">
        <SectionLabel tone="red">Sagenex Global Pay Card</SectionLabel>
        <h2 className="mt-4 font-display text-3xl font-extrabold text-foreground sm:text-5xl">
          Secure by heritage. Spend worldwide.
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-muted">
          Your hardware wallet and Visa card in one — private keys sealed
          offline, SG Coins that spend anywhere Visa is accepted.
        </p>
        <p className="mt-3 text-sm font-semibold text-foreground">
          EAL6+ certified secure element{" "}
          <span className="font-normal text-muted">
            · Built with Samsung Semiconductors
          </span>
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {pills.map(({ icon: Icon, label }) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 rounded-full border border-brand-red/10 bg-white/80 px-3 py-1.5 text-xs font-semibold text-foreground"
            >
              <Icon className="h-3.5 w-3.5 text-brand-red" />
              {label}
            </span>
          ))}
        </div>

        <div className="relative mx-auto mt-12 max-w-3xl">
          <PayCardVisual />
          <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
            {payCardFeatures.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl border border-border bg-white/95 p-5 shadow-[var(--card-shadow)]"
              >
                <h3 className="font-display text-base font-bold text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {feature.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button href="/login">
            Apply now
            <span aria-hidden="true">→</span>
          </Button>
          <Button href="#faq" variant="secondary">
            How it works
          </Button>
        </div>
        <p className="mx-auto mt-4 max-w-2xl text-xs text-muted-light">
          *Demo only. Card subject to KYC, issuer approval, and regional
          availability in the official product story. This practice site never
          collects KYC or issues cards.
        </p>
      </div>
    </section>
  );
}

function PayCardVisual() {
  return (
    <div className="mx-auto w-full max-w-md perspective-[1000px]">
      <div className="relative aspect-[1.586/1] overflow-hidden rounded-2xl bg-gradient-to-br from-[#1a1a1a] via-[#111111] to-[#2a2118] p-6 text-left shadow-2xl ring-1 ring-white/10">
        <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-amber-500/10" />
        <div className="absolute bottom-0 left-0 h-24 w-40 rounded-tr-full bg-brand-red/10" />
        <div className="relative flex h-full flex-col justify-between">
          <div className="flex items-start justify-between">
            <div className="h-10 w-12 rounded-md bg-gradient-to-br from-amber-200 to-amber-600 shadow-inner" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-200/80">
              Global Pay · Platinum
            </p>
          </div>
          <div>
            <p className="font-display text-lg font-bold tracking-wide text-amber-100">
              SAGENEX Global Pay Card
            </p>
            <p className="mt-3 font-mono text-sm tracking-[0.25em] text-white/80">
              4000 0000 0000 0000
            </p>
            <div className="mt-3 flex items-end justify-between text-[10px] uppercase tracking-wider text-white/60">
              <span>Valid thru 09/30</span>
              <span>Demo · Not a real card</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
