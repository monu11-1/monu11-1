/**
 * Fictional portal fixtures for teaching UI only.
 * Values are invented for layout practice — not copied production balances.
 */

export const portalMember = {
  displayName: "Demo Gold Member",
  shortName: "DEMO GOLD",
  initial: "D",
  memberLabel: "Member",
  welcomeId: "DEMO-U100",
  referralCode: "DEMO-REF-100",
  packageGoldGrams: 11.25,
  sgnxCustodyGrams: 5.8,
  packageValueInr: 165000,
  liveReferencePerGramInr: 14250,
  marketMovementInr: 520,
  indicativeMarketInr: 160395,
  cumulativeReturnedInr: 985000,
  availableSettlementInr: 2450000,
  onHoldInr: 95000,
  settledInr: 88000,
  settlementCeilingInr: 420000,
  creditCeilingInr: 0,
  creditCapacityInr: 0,
  recordedThisCycleInr: 175000,
  purchaseReferencePerGramInr: 13980,
  planCreditPercent: 50,
  totalContributionsInr: 120000,
  scheduledCompletionInr: 180000,
  promotionalCreditInr: 30000,
  recordedGoldWeightGrams: 5.8,
  sgnxIndicativeValueInr: 82650,
  goldSpotPer10gInr: 142500,
  silverSpotPerKgInr: 198000,
  kycStatus: "re_kyc_required" as const,
  bankStatus: "saved" as const,
  custodyStatus: "confirmed" as const,
};

export const ownershipChecklist = [
  { id: "c1", label: "Gold invoice verified", done: true },
  { id: "c2", label: "Package gold recorded", done: true },
  { id: "c3", label: "Vault custody confirmed", done: true },
  { id: "c4", label: "Insurance active", done: true },
];

export const valuationChecklist = [
  { id: "v1", label: "Package activity priced", done: true },
  { id: "v2", label: "Custody document recorded", done: false },
  { id: "v3", label: "Identity verified", done: false },
  { id: "v4", label: "Live reference available", done: true },
];

export const goldActivity = [
  {
    id: "ga1",
    date: "07 Oct 2026",
    reference: "DEMO-ALLOC-1001",
    activity: "Gold quantity recorded",
    quantity: "5.8000 g",
    status: "Recorded",
  },
  {
    id: "ga2",
    date: "06 Apr 2026",
    reference: "DEMO-ENROLL-A",
    activity: "Gold purchase enrolled",
    quantity: "Not recorded",
    status: "Active",
  },
  {
    id: "ga3",
    date: "06 Apr 2026",
    reference: "DEMO-ENROLL-B",
    activity: "Gold purchase enrolled",
    quantity: "48.5000 g",
    status: "Active",
  },
];

export const scheduleMonths = Array.from({ length: 11 }, (_, index) => ({
  id: `m${index + 1}`,
  label: `M${index + 1}`,
  status: index < 7 ? ("paid" as const) : ("upcoming" as const),
}));

export const marketSeries = [
  { label: "1D", points: [140200, 140800, 141100, 140950, 141400, 142100, 142500] },
  { label: "1W", points: [138900, 139400, 140100, 140800, 141200, 141900, 142500] },
  { label: "1M", points: [136000, 137200, 138500, 139800, 140900, 141700, 142500] },
  { label: "5M", points: [128000, 131000, 134500, 137000, 139500, 141000, 142500] },
  { label: "1Y", points: [118000, 122000, 126000, 131000, 136000, 140000, 142500] },
  { label: "5Y", points: [82000, 95000, 108000, 120000, 130000, 138000, 142500] },
];

export const myGoldSeries = [
  { day: "14", value: 14100 },
  { day: "15", value: 14220 },
  { day: "16", value: 14080 },
  { day: "17", value: 14350 },
  { day: "18", value: 14290 },
  { day: "19", value: 14250 },
];

export const settlementTransactions = [
  {
    id: "st1",
    title: "SGNX Gold auto-pay month 7 (demo)",
    type: "AUTO PAY",
    amountInr: -9999.9,
    status: "POSTED",
    at: "07/10/2026, 04:30:11",
  },
  {
    id: "st2",
    title: "SGNX Gold auto-pay month 7 (demo)",
    type: "AUTO PAY",
    amountInr: -9999.9,
    status: "POSTED",
    at: "07/10/2026, 04:30:11",
  },
  {
    id: "st3",
    title: "Monthly wallet collection received from DEMO-U851",
    type: "TRANSFER IN",
    amountInr: 2240,
    status: "POSTED",
    at: "01/10/2026, 09:12:00",
  },
  {
    id: "st4",
    title: "Monthly wallet collection received from DEMO-U220",
    type: "TRANSFER IN",
    amountInr: 18500,
    status: "POSTED",
    at: "01/10/2026, 08:01:44",
  },
];

export const distributionEvents = [
  { id: "de1", period: "2026-06", label: "June 2026", amountInr: 85000, status: "Recorded" },
  { id: "de2", period: "2026-04", label: "April 2026", amountInr: 120, status: "Recorded" },
  { id: "de3", period: "2026-02", label: "February 2026", amountInr: 400, status: "Recorded" },
  { id: "de4", period: "2026-01", label: "January 2026", amountInr: 80, status: "Recorded" },
];

export const riskRegister = [
  {
    risk: "Contract & classification",
    level: "High",
    means: "Product terms and regulatory labels may change.",
    review: "Read account terms before continuing.",
  },
  {
    risk: "Capital & distributions",
    level: "High",
    means: "Distributions are variable and may be zero.",
    review: "Review ceiling and cycle disclosures.",
  },
  {
    risk: "Gold & FX price",
    level: "High",
    means: "Indicative market prices can move against you.",
    review: "Treat charts as information only.",
  },
  {
    risk: "Custody & title",
    level: "Medium",
    means: "Custody evidence may lag package records.",
    review: "Check custody & title documents.",
  },
  {
    risk: "Counterparty & liquidity",
    level: "Medium",
    means: "Settlement timing depends on counterparties.",
    review: "Monitor settlement ceilings and holds.",
  },
];

export const sampleDocuments = [
  { id: "sd1", title: "Gold Invoice", status: "Available to download" },
  { id: "sd2", title: "Title Schedule", status: "Available to download" },
  { id: "sd3", title: "Custody Certificate", status: "Available to download" },
  { id: "sd4", title: "Audit Record", status: "Available to download" },
];

export const demoRecipients = [
  { id: "DEMO-U851", name: "Riya Practice" },
  { id: "DEMO-U220", name: "Sam Fiction" },
  { id: "DEMO-U440", name: "Lee Sample" },
];
