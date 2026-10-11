import { recentActivity } from "@/data/dashboard";

const tones = {
  green: "bg-brand-green",
  red: "bg-brand-red",
  gold: "bg-brand-gold",
  blue: "bg-brand-blue",
};

export function ActivityFeed() {
  return (
    <ul className="space-y-4">
      {recentActivity.map((item) => (
        <li key={item.id} className="flex gap-3">
          <span
            className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${tones[item.tone]}`}
          />
          <div>
            <p className="text-sm font-semibold text-foreground">{item.title}</p>
            <p className="text-sm text-muted">{item.detail}</p>
            <p className="mt-1 text-xs text-muted-light">{item.time}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
