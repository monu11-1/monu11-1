import Link from "next/link";
import { BrandMark } from "@/components/ui/BrandMark";
import { Button } from "@/components/ui/Button";

type PlaceholderPageProps = {
  title: string;
  description: string;
  route: string;
};

export function PlaceholderPage({
  title,
  description,
  route,
}: PlaceholderPageProps) {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-20">
      <div className="w-full max-w-lg rounded-3xl border border-border bg-white p-8 text-center shadow-[var(--card-shadow)]">
        <div className="flex justify-center">
          <BrandMark />
        </div>
        <span className="mt-6 inline-flex rounded-full bg-brand-red/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-brand-red">
          Practice placeholder
        </span>
        <h1 className="mt-4 font-display text-3xl font-extrabold text-foreground">
          {title}
        </h1>
        <p className="mt-3 text-sm leading-relaxed text-muted">{description}</p>
        <p className="mt-2 font-mono text-xs text-muted-light">{route}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button href="/">Back to homepage</Button>
          <Button href="/login" variant="secondary">
            Login placeholder
          </Button>
        </div>
        <p className="mt-6 text-xs text-muted-light">
          Dashboards and admin UIs intentionally not built yet — wait for
          approval.{" "}
          <Link href="/" className="text-brand-red underline-offset-2 hover:underline">
            Continue learning on the homepage
          </Link>
          .
        </p>
      </div>
    </main>
  );
}
