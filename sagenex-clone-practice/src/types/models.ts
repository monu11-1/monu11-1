/** Shared typed models for the educational demo. All values are fictional. */

export type DemoRole = "customer" | "support" | "admin";

export type KycStatus = "not_started" | "pending" | "approved" | "re_kyc_required";
export type BankStatus = "missing" | "pending" | "verified";
export type CustodyStatus = "pending" | "active" | "hold";
export type TransactionStatus = "pending" | "completed" | "failed" | "on_hold";
export type SettlementStatus = "requested" | "approved" | "rejected" | "settled";
export type SupportStatus = "open" | "in_progress" | "resolved";
export type ScheduleItemStatus =
  | "paid"
  | "pending"
  | "failed"
  | "skipped"
  | "upcoming";

export interface User {
  id: string;
  demoId: string;
  name: string;
  email: string;
  role: DemoRole;
  rank: string;
  referralCode: string;
  kycStatus: KycStatus;
  bankStatus: BankStatus;
  custodyStatus: CustodyStatus;
  memberSince: string;
}

export interface WalletBalance {
  userId: string;
  availableInr: number;
  onHoldInr: number;
  settlementAvailableInr: number;
  creditCapacityInr: number;
  settledInr: number;
  packagePurchaseValueInr: number;
  cumulativeValueReturnedInr: number;
}

export interface GoldHolding {
  id: string;
  userId: string;
  label: string;
  grams: number;
  purity: string;
  packageValueInr: number;
  indicativeMarketInr: number;
  custodyLabel: string;
}

export interface GoldPurchaseScheduleItem {
  id: string;
  monthLabel: string;
  dueDate: string;
  amountInr: number;
  status: ScheduleItemStatus;
}

export interface GoldPurchaseSchedule {
  id: string;
  userId: string;
  title: string;
  totalContributionsInr: number;
  scheduledCompletionValueInr: number;
  promotionalCreditInr: number;
  items: GoldPurchaseScheduleItem[];
}

export interface CustodyRecord {
  id: string;
  userId: string;
  goldHoldingId: string;
  vaultLabel: string;
  insuranceLabel: string;
  titleStatus: string;
  readinessPercent: number;
}

export interface DocumentRecord {
  id: string;
  userId: string;
  title: string;
  category: string;
  sampleRef: string;
  updatedAt: string;
}

export interface Transaction {
  id: string;
  userId: string;
  type: string;
  amountInr: number;
  status: TransactionStatus;
  createdAt: string;
  note: string;
}

export interface SettlementRequest {
  id: string;
  userId: string;
  amountInr: number;
  status: SettlementStatus;
  createdAt: string;
  note: string;
}

export interface DistributionEvent {
  id: string;
  userId: string;
  cycleLabel: string;
  amountInr: number;
  creditsInr: number;
  status: string;
  createdAt: string;
}

export interface SupportTicket {
  id: string;
  userId: string;
  topic: string;
  subject: string;
  description: string;
  status: SupportStatus;
  createdAt: string;
}

export interface KYCRecord {
  id: string;
  userId: string;
  entityType: "individual" | "entity";
  status: KycStatus;
  requiredDocuments: number;
  submittedDocuments: number;
  updatedAt: string;
}

export interface RiskAcknowledgement {
  id: string;
  userId: string;
  acknowledgedAt: string | null;
  riskLevel: "low" | "moderate" | "elevated";
}

export interface AuditLog {
  id: string;
  actorId: string;
  action: string;
  target: string;
  before?: string;
  after?: string;
  createdAt: string;
}

/** Future Supabase-shaped interfaces — not connected yet. */
export interface FutureDataClient {
  listUsers(): Promise<User[]>;
  getWallet(userId: string): Promise<WalletBalance | null>;
}
