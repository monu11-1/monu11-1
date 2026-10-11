export const demoMember = {
  name: "Alex Demo",
  rank: "Starter",
  email: "alex.demo@example.com",
  memberSince: "Jan 2026",
};

export const portfolioStats = [
  {
    id: "balance",
    label: "Available Balance",
    value: "₹2,48,500",
    hint: "Demo wallet · not real funds",
    tone: "green" as const,
  },
  {
    id: "invested",
    label: "Invested Principal",
    value: "₹1,00,000",
    hint: "Practice package only",
    tone: "red" as const,
  },
  {
    id: "monthly",
    label: "Monthly Incentive",
    value: "₹7,000",
    hint: "Fictional 7% illustration",
    tone: "gold" as const,
  },
  {
    id: "team",
    label: "Team Members",
    value: "24",
    hint: "Mock downline count",
    tone: "blue" as const,
  },
];

export const earningsSeries = [
  { month: "May", simple: 7000, compound: 7000 },
  { month: "Jun", simple: 14000, compound: 14490 },
  { month: "Jul", simple: 21000, compound: 22504 },
  { month: "Aug", simple: 28000, compound: 31079 },
  { month: "Sep", simple: 35000, compound: 40255 },
  { month: "Oct", simple: 42000, compound: 50073 },
];

export const allocationSlices = [
  { name: "Gold Scheme", value: 40, color: "#d31d3e" },
  { name: "PMS Standard", value: 35, color: "#00a86b" },
  { name: "Liquidity", value: 15, color: "#1570ef" },
  { name: "Reserve", value: 10, color: "#eaaa08" },
];

export const recentActivity = [
  {
    id: "a1",
    title: "Monthly incentive credited",
    detail: "₹7,000 · PMS Standard (demo)",
    time: "2 hours ago",
    tone: "green" as const,
  },
  {
    id: "a2",
    title: "Team member joined",
    detail: "Riya Demo linked under your tree",
    time: "Yesterday",
    tone: "blue" as const,
  },
  {
    id: "a3",
    title: "Package reminder",
    detail: "Gold 11-Month slab due (fiction)",
    time: "2 days ago",
    tone: "gold" as const,
  },
  {
    id: "a4",
    title: "Profile synced",
    detail: "Practice sync · no backend call",
    time: "3 days ago",
    tone: "red" as const,
  },
];

export const packages = [
  {
    id: "p1",
    name: "PMS Standard",
    status: "Active",
    amount: "₹1,00,000",
    yieldLabel: "7% monthly (demo)",
  },
  {
    id: "p2",
    name: "Gold 11-Month",
    status: "Scheduled",
    amount: "₹25,000",
    yieldLabel: "2X bonus story (demo)",
  },
];
