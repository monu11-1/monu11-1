import { kycQueue, type ReviewStatus } from "@/data/admin";

const statusStyles: Record<ReviewStatus, string> = {
  Pending: "bg-amber-100 text-amber-800",
  Approved: "bg-brand-green/10 text-brand-green",
  "Needs info": "bg-brand-red/10 text-brand-red",
};

export function KycQueueTable() {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm">
        <thead>
          <tr className="border-b border-border text-xs uppercase tracking-wider text-muted">
            <th className="px-3 py-3 font-semibold">ID</th>
            <th className="px-3 py-3 font-semibold">Name</th>
            <th className="hidden px-3 py-3 font-semibold sm:table-cell">
              Email
            </th>
            <th className="px-3 py-3 font-semibold">Country</th>
            <th className="px-3 py-3 font-semibold">Status</th>
            <th className="hidden px-3 py-3 font-semibold md:table-cell">
              Submitted
            </th>
          </tr>
        </thead>
        <tbody>
          {kycQueue.map((row) => (
            <tr key={row.id} className="border-b border-border/70 last:border-0">
              <td className="px-3 py-3 font-mono text-xs text-muted">{row.id}</td>
              <td className="px-3 py-3 font-semibold text-foreground">
                {row.name}
              </td>
              <td className="hidden px-3 py-3 text-muted sm:table-cell">
                {row.email}
              </td>
              <td className="px-3 py-3 text-muted">{row.country}</td>
              <td className="px-3 py-3">
                <span
                  className={`inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${statusStyles[row.status]}`}
                >
                  {row.status}
                </span>
              </td>
              <td className="hidden px-3 py-3 text-muted md:table-cell">
                {row.submitted}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-3 px-3 text-xs text-muted-light">
        Buttons intentionally omitted — reviewing here does not approve anyone
        or store documents.
      </p>
    </div>
  );
}
