export const adminStats = [
  {
    id: "users",
    label: "Demo Users",
    value: "1,284",
    change: "+48 this week",
    tone: "green" as const,
  },
  {
    id: "pending",
    label: "Pending Reviews",
    value: "17",
    change: "Mock KYC queue",
    tone: "gold" as const,
  },
  {
    id: "tickets",
    label: "Open Tickets",
    value: "9",
    change: "Support practice",
    tone: "blue" as const,
  },
  {
    id: "flags",
    label: "Risk Flags",
    value: "3",
    change: "Fictional alerts",
    tone: "red" as const,
  },
];

export const signupTrend = [
  { day: "Mon", signups: 42 },
  { day: "Tue", signups: 55 },
  { day: "Wed", signups: 38 },
  { day: "Thu", signups: 61 },
  { day: "Fri", signups: 74 },
  { day: "Sat", signups: 49 },
  { day: "Sun", signups: 33 },
];

export type ReviewStatus = "Pending" | "Approved" | "Needs info";

export const kycQueue = [
  {
    id: "kyc-1001",
    name: "Priya Demo",
    email: "priya.demo@example.com",
    country: "IN",
    status: "Pending" as ReviewStatus,
    submitted: "Oct 9, 2026",
  },
  {
    id: "kyc-1002",
    name: "Jordan Sample",
    email: "jordan.sample@example.com",
    country: "SG",
    status: "Needs info" as ReviewStatus,
    submitted: "Oct 8, 2026",
  },
  {
    id: "kyc-1003",
    name: "Sam Practice",
    email: "sam.practice@example.com",
    country: "AE",
    status: "Pending" as ReviewStatus,
    submitted: "Oct 8, 2026",
  },
  {
    id: "kyc-1004",
    name: "Lee Fiction",
    email: "lee.fiction@example.com",
    country: "US",
    status: "Approved" as ReviewStatus,
    submitted: "Oct 7, 2026",
  },
  {
    id: "kyc-1005",
    name: "Aisha Mock",
    email: "aisha.mock@example.com",
    country: "IN",
    status: "Pending" as ReviewStatus,
    submitted: "Oct 6, 2026",
  },
];

export const adminUsers = [
  {
    id: "u1",
    name: "Alex Demo",
    role: "Member",
    package: "PMS Standard",
    status: "Active",
  },
  {
    id: "u2",
    name: "Riya Demo",
    role: "Member",
    package: "Gold Scheme",
    status: "Active",
  },
  {
    id: "u3",
    name: "Ops Trainer",
    role: "Support",
    package: "—",
    status: "Staff",
  },
  {
    id: "u4",
    name: "Risk Watch",
    role: "Compliance",
    package: "—",
    status: "Staff",
  },
];

export const systemNotices = [
  {
    id: "n1",
    title: "Practice mode active",
    body: "No emails, KYC uploads, or payouts are processed from this UI.",
  },
  {
    id: "n2",
    title: "Data is local mock JSON",
    body: "Edit src/data/admin.ts to change queue rows and chart values.",
  },
];
