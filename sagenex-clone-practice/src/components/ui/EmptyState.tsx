type EmptyStateProps = {
  title: string;
  description: string;
};

export function EmptyState({ title, description }: EmptyStateProps) {
  return (
    <div className="rounded-2xl border border-dashed border-border bg-surface-muted px-6 py-10 text-center">
      <p className="font-display text-lg font-bold text-foreground">{title}</p>
      <p className="mx-auto mt-2 max-w-md text-sm text-muted">{description}</p>
    </div>
  );
}
