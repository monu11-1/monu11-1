"use client";

import { Button } from "@/components/ui/Button";

export function LoginForm() {
  return (
    <form
      className="mt-8 space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label className="block text-left text-sm font-medium text-foreground">
        Email
        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          className="mt-2 w-full rounded-xl border border-border px-4 py-3 text-sm outline-none ring-brand-red/30 focus:ring-2"
          autoComplete="email"
        />
      </label>
      <Button type="submit" className="w-full">
        Continue →
      </Button>
    </form>
  );
}
