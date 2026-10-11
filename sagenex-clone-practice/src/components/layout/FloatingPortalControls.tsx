"use client";

import { Headphones, RefreshCw } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export function FloatingPortalControls() {
  const [syncNote, setSyncNote] = useState<string | null>(null);

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-2">
      {syncNote ? (
        <p className="max-w-[220px] rounded-xl border border-border bg-white px-3 py-2 text-xs text-muted shadow-[var(--card-shadow)]">
          {syncNote}
        </p>
      ) : null}
      <button
        type="button"
        className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-4 py-2 text-xs font-semibold text-foreground shadow-[var(--card-shadow)] hover:border-brand-red/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-brand-red"
        onClick={() => {
          setSyncNote("Demo sync only — no server refresh ran.");
          window.setTimeout(() => setSyncNote(null), 2500);
        }}
      >
        <RefreshCw className="h-3.5 w-3.5 text-brand-red" />
        Sync profile
      </button>
      <Link
        href="/support"
        className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-brand-red text-white shadow-lg hover:bg-brand-red-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-red"
        aria-label="Open support"
      >
        <Headphones className="h-5 w-5" />
      </Link>
    </div>
  );
}
