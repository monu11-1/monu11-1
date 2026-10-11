import type {
  CustodyRecord,
  DocumentRecord,
  GoldHolding,
  GoldPurchaseSchedule,
} from "@/types/models";

export const demoGoldHoldings: GoldHolding[] = [
  {
    id: "gold_pkg_1",
    userId: "usr_demo_customer",
    label: "Package Gold Equivalent",
    grams: 12.48,
    purity: "999.9 (demo)",
    packageValueInr: 100000,
    indicativeMarketInr: 112400,
    custodyLabel: "Demo vault allocation",
  },
  {
    id: "gold_sgnx_1",
    userId: "usr_demo_customer",
    label: "SGNX Custody Holding",
    grams: 3.2,
    purity: "999.9 (demo)",
    packageValueInr: 28000,
    indicativeMarketInr: 28800,
    custodyLabel: "Separate SGNX demo record",
  },
];

export const demoSchedules: GoldPurchaseSchedule[] = [
  {
    id: "sched_1",
    userId: "usr_demo_customer",
    title: "11-Month Plan A (demo)",
    totalContributionsInr: 55000,
    scheduledCompletionValueInr: 110000,
    promotionalCreditInr: 5000,
    items: [
      {
        id: "si1",
        monthLabel: "Month 1",
        dueDate: "2026-02-01",
        amountInr: 10000,
        status: "paid",
      },
      {
        id: "si2",
        monthLabel: "Month 2",
        dueDate: "2026-03-01",
        amountInr: 10000,
        status: "paid",
      },
      {
        id: "si3",
        monthLabel: "Month 3",
        dueDate: "2026-04-01",
        amountInr: 10000,
        status: "pending",
      },
      {
        id: "si4",
        monthLabel: "Month 4",
        dueDate: "2026-05-01",
        amountInr: 10000,
        status: "upcoming",
      },
    ],
  },
];

export const demoCustody: CustodyRecord[] = [
  {
    id: "cust_1",
    userId: "usr_demo_customer",
    goldHoldingId: "gold_pkg_1",
    vaultLabel: "Demo Vault · Sample Bay A",
    insuranceLabel: "Sample insurance reference (not real)",
    titleStatus: "Demo title pending review",
    readinessPercent: 62,
  },
];

export const demoDocuments: DocumentRecord[] = [
  {
    id: "doc_1",
    userId: "usr_demo_customer",
    title: "Sample Custody Schedule",
    category: "Custody",
    sampleRef: "DEMO-DOC-CUST-001",
    updatedAt: "2026-09-20",
  },
  {
    id: "doc_2",
    userId: "usr_demo_customer",
    title: "Sample Account Statement",
    category: "Statements",
    sampleRef: "DEMO-DOC-STMT-014",
    updatedAt: "2026-10-01",
  },
  {
    id: "doc_3",
    userId: "usr_demo_customer",
    title: "Sample Risk Disclosure",
    category: "Risk",
    sampleRef: "DEMO-DOC-RISK-003",
    updatedAt: "2026-08-12",
  },
];
