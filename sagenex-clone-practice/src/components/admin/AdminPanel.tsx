import { adminStats, adminUsers, systemNotices } from "@/data/admin";
import { AppShell } from "@/components/app/AppShell";
import { StatCard } from "@/components/ui/StatCard";
import { Button } from "@/components/ui/Button";
import { SignupsChart } from "@/components/admin/SignupsChart";
import { KycQueueTable } from "@/components/admin/KycQueueTable";

export function AdminPanel() {
  return (
    <AppShell
      mode="admin"
      title="Admin console"
      subtitle="Operations practice UI · fictional users and queues only"
    >
      <div className="mb-5 rounded-2xl border border-brand-gold/40 bg-amber-50 px-4 py-3 text-sm text-foreground">
        <strong className="text-amber-800">No real admin powers.</strong> This
        screen teaches layout and tables. It cannot change production data,
        approve KYC, or send payouts.
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {adminStats.map((stat) => (
          <StatCard
            key={stat.id}
            label={stat.label}
            value={stat.value}
            hint={stat.change}
            tone={stat.tone}
          />
        ))}
      </div>

      <div className="mt-5 grid gap-5 xl:grid-cols-[1.2fr_1fr]">
        <section className="rounded-3xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-2">
            <div>
              <h2 className="font-display text-xl font-extrabold">
                Weekly signups
              </h2>
              <p className="text-sm text-muted">Mock bar chart for admin trends</p>
            </div>
            <Button href="/dashboard" variant="secondary" className="!px-4 !py-2">
              View member demo
            </Button>
          </div>
          <SignupsChart />
        </section>

        <section className="rounded-3xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
          <h2 className="font-display text-xl font-extrabold">System notices</h2>
          <ul className="mt-4 space-y-3">
            {systemNotices.map((notice) => (
              <li
                key={notice.id}
                className="rounded-2xl border border-border bg-surface px-4 py-3"
              >
                <p className="font-semibold text-foreground">{notice.title}</p>
                <p className="mt-1 text-sm text-muted">{notice.body}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      <section className="mt-5 rounded-3xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
        <h2 className="font-display text-xl font-extrabold">
          KYC review queue
        </h2>
        <p className="mb-4 text-sm text-muted">
          Fake applicants for practicing table UI — no documents uploaded
        </p>
        <KycQueueTable />
      </section>

      <section className="mt-5 rounded-3xl border border-border bg-white p-5 shadow-[var(--card-shadow)]">
        <h2 className="font-display text-xl font-extrabold">Directory</h2>
        <p className="mb-4 text-sm text-muted">Sample members and staff roles</p>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b border-border text-xs uppercase tracking-wider text-muted">
                <th className="px-3 py-3 font-semibold">Name</th>
                <th className="px-3 py-3 font-semibold">Role</th>
                <th className="px-3 py-3 font-semibold">Package</th>
                <th className="px-3 py-3 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {adminUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-border/70 last:border-0"
                >
                  <td className="px-3 py-3 font-semibold text-foreground">
                    {user.name}
                  </td>
                  <td className="px-3 py-3 text-muted">{user.role}</td>
                  <td className="px-3 py-3 text-muted">{user.package}</td>
                  <td className="px-3 py-3 text-muted">{user.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </AppShell>
  );
}
