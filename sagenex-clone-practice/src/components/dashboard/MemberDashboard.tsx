import {
  demoMember,
  packages,
  portfolioStats,
} from "@/data/dashboard";
import { AppShell } from "@/components/app/AppShell";
import { StatCard } from "@/components/ui/StatCard";
import { Button } from "@/components/ui/Button";
import { EarningsChart } from "@/components/dashboard/EarningsChart";
import { AllocationChart } from "@/components/dashboard/AllocationChart";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";

export function MemberDashboard() {
  return (
    <AppShell
      mode="member"
      title="Member dashboard"
      subtitle={`Welcome back, ${demoMember.name} · Rank ${demoMember.rank} (demo profile)`}
    >
      <div className="mb-5 rounded-2xl border border-brand-red/20 bg-brand-red/5 px-4 py-3 text-sm text-foreground">
        <strong className="text-brand-red">Practice view.</strong> Charts and
        balances are fictional teaching data — nothing here connects to a real
        wallet, bank, or KYC system.
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {portfolioStats.map((stat) => (
          <StatCard
            key={stat.id}
            label={stat.label}
            value={stat.value}
            hint={stat.hint}
            tone={stat.tone}
          />
        ))}
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.4fr_1fr]">
        <section className="rounded-3xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
            <div>
              <h2 className="font-display text-xl font-extrabold">
                Earnings trend
              </h2>
              <p className="text-sm text-muted">
                Illustrative simple vs compound growth (Recharts)
              </p>
            </div>
            <Button href="/admin" variant="secondary" className="!px-4 !py-2">
              Open admin demo
            </Button>
          </div>
          <EarningsChart />
        </section>

        <section className="rounded-3xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <h2 className="font-display text-xl font-extrabold">Allocation</h2>
          <p className="mb-2 text-sm text-muted">
            Mock portfolio mix for teaching layout
          </p>
          <AllocationChart />
        </section>
      </div>

      <div className="mt-5 grid gap-5 lg:grid-cols-2">
        <section className="rounded-3xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <h2 className="font-display text-xl font-extrabold">Your packages</h2>
          <p className="mb-4 text-sm text-muted">Demo packages only</p>
          <div className="space-y-3">
            {packages.map((pack) => (
              <article
                key={pack.id}
                className="rounded-2xl border border-border bg-surface px-4 py-3"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h3 className="font-semibold text-foreground">{pack.name}</h3>
                  <span className="rounded-full bg-brand-green/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-brand-green">
                    {pack.status}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted">
                  {pack.amount} · {pack.yieldLabel}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="rounded-3xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <h2 className="font-display text-xl font-extrabold">Recent activity</h2>
          <p className="mb-4 text-sm text-muted">Mock feed from local data</p>
          <ActivityFeed />
        </section>
      </div>
    </AppShell>
  );
}
