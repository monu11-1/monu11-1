import type { User } from "@/types/models";

/** Fictional demo users only — never real identities. */
export const demoUsers: User[] = [
  {
    id: "usr_demo_customer",
    demoId: "SGX-DEMO-10042",
    name: "Aarav Demo",
    email: "aarav.demo@example.com",
    role: "customer",
    rank: "Starter",
    referralCode: "DEMO-AARAV-42",
    kycStatus: "re_kyc_required",
    bankStatus: "pending",
    custodyStatus: "active",
    memberSince: "2026-01-12",
  },
  {
    id: "usr_demo_support",
    demoId: "SGX-DEMO-SUPPORT",
    name: "Support Trainer",
    email: "support.demo@example.com",
    role: "support",
    rank: "Staff",
    referralCode: "DEMO-SUPPORT",
    kycStatus: "approved",
    bankStatus: "verified",
    custodyStatus: "active",
    memberSince: "2025-11-01",
  },
  {
    id: "usr_demo_admin",
    demoId: "SGX-DEMO-ADMIN",
    name: "Admin Trainer",
    email: "admin.demo@example.com",
    role: "admin",
    rank: "Staff",
    referralCode: "DEMO-ADMIN",
    kycStatus: "approved",
    bankStatus: "verified",
    custodyStatus: "active",
    memberSince: "2025-10-01",
  },
];

export const defaultCustomer = demoUsers[0];
