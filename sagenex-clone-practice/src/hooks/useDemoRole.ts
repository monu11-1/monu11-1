"use client";

import { useState } from "react";
import type { DemoRole } from "@/types/models";

const KEY = "sagenex-demo-role";

function readStoredRole(fallback: DemoRole): DemoRole {
  if (typeof window === "undefined") return fallback;
  try {
    const saved = window.localStorage.getItem(KEY);
    if (saved === "customer" || saved === "support" || saved === "admin") {
      return saved;
    }
  } catch {
    /* ignore */
  }
  return fallback;
}

export function useDemoRole(defaultRole: DemoRole = "customer") {
  const [role, setRoleState] = useState<DemoRole>(() =>
    readStoredRole(defaultRole),
  );

  const setRole = (next: DemoRole) => {
    setRoleState(next);
    try {
      window.localStorage.setItem(KEY, next);
    } catch {
      /* ignore */
    }
  };

  return { role, setRole };
}
