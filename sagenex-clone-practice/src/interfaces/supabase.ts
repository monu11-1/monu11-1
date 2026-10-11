/**
 * Future Supabase integration surface.
 * Do NOT connect credentials or live clients until UI review is complete.
 */
import type { FutureDataClient, User, WalletBalance } from "@/types/models";

export type SupabaseEnvPlaceholder = {
  url?: string;
  anonKey?: string;
};

/** Stub client used while the app runs on local mock modules. */
export const mockDataClient: FutureDataClient = {
  async listUsers(): Promise<User[]> {
    const { demoUsers } = await import("@/data/mock/users");
    return demoUsers;
  },
  async getWallet(userId: string): Promise<WalletBalance | null> {
    const { getWallet } = await import("@/data/mock/wallet");
    return getWallet(userId) ?? null;
  },
};
