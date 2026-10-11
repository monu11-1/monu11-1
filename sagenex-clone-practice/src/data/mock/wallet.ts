import type { WalletBalance } from "@/types/models";

export const demoWallets: WalletBalance[] = [
  {
    userId: "usr_demo_customer",
    availableInr: 248500,
    onHoldInr: 15000,
    settlementAvailableInr: 42000,
    creditCapacityInr: 100000,
    settledInr: 87500,
    packagePurchaseValueInr: 100000,
    cumulativeValueReturnedInr: 21000,
  },
];

export function getWallet(userId: string): WalletBalance | undefined {
  return demoWallets.find((wallet) => wallet.userId === userId);
}
