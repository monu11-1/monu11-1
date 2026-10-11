import type {
  DistributionEvent,
  SettlementRequest,
  SupportTicket,
  Transaction,
} from "@/types/models";

export const demoTransactions: Transaction[] = [
  {
    id: "txn_1001",
    userId: "usr_demo_customer",
    type: "Package credit (demo)",
    amountInr: 7000,
    status: "completed",
    createdAt: "2026-10-08T10:20:00Z",
    note: "Fictional illustration — not a real payout",
  },
  {
    id: "txn_1002",
    userId: "usr_demo_customer",
    type: "Settlement hold (demo)",
    amountInr: 15000,
    status: "on_hold",
    createdAt: "2026-10-05T14:00:00Z",
    note: "Demo hold only",
  },
  {
    id: "txn_1003",
    userId: "usr_demo_customer",
    type: "Partner activity credit (demo)",
    amountInr: 2500,
    status: "completed",
    createdAt: "2026-09-28T09:15:00Z",
    note: "Practice record",
  },
];

export const demoSettlements: SettlementRequest[] = [
  {
    id: "set_501",
    userId: "usr_demo_customer",
    amountInr: 10000,
    status: "requested",
    createdAt: "2026-10-09T11:00:00Z",
    note: "Appears in admin queue as fiction",
  },
];

export const demoDistributions: DistributionEvent[] = [
  {
    id: "dist_301",
    userId: "usr_demo_customer",
    cycleLabel: "Cycle Sep 2026 (demo)",
    amountInr: 7000,
    creditsInr: 500,
    status: "Credited (demo)",
    createdAt: "2026-09-30",
  },
  {
    id: "dist_302",
    userId: "usr_demo_customer",
    cycleLabel: "Cycle Aug 2026 (demo)",
    amountInr: 6500,
    creditsInr: 0,
    status: "Credited (demo)",
    createdAt: "2026-08-31",
  },
];

export const demoTickets: SupportTicket[] = [
  {
    id: "tkt_DEM-204",
    userId: "usr_demo_customer",
    topic: "Account access",
    subject: "How do I read demo statements?",
    description: "Practice ticket — no sensitive data.",
    status: "resolved",
    createdAt: "2026-09-18",
  },
];

export const partnerActivity = [
  {
    id: "pa1",
    title: "Network milestone (demo)",
    detail: "Fictional partner activity credit recorded",
    time: "3 days ago",
  },
  {
    id: "pa2",
    title: "Referral click (demo)",
    detail: "Sample referral event — not a real lead",
    time: "1 week ago",
  },
];
