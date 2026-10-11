import Link from "next/link";
import { PageHeader } from "@/components/ui/PageHeader";
import { EmptyState } from "@/components/ui/EmptyState";
import { Button } from "@/components/ui/Button";

type PortalPlaceholderProps = {
  title: string;
  route: string;
  summary: string;
};

export function PortalPlaceholder({
  title,
  route,
  summary,
}: PortalPlaceholderProps) {
  return (
    <div>
      <PageHeader
        title={title}
        subtitle={`${route} · demonstration placeholder until this page is built from screenshots`}
      />
      <EmptyState title="Page scaffold ready" description={summary} />
      <div className="mt-4 flex flex-wrap gap-3">
        <Button href="/dashboard">Back to dashboard</Button>
        <Link
          href="/"
          className="inline-flex items-center text-sm font-semibold text-brand-red"
        >
          Marketing homepage
        </Link>
      </div>
    </div>
  );
}
