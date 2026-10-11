export * from "./users";
export * from "./wallet";
export * from "./gold";
export * from "./activity";

import { defaultCustomer } from "./users";
import { getWallet } from "./wallet";
import { demoGoldHoldings, demoCustody, demoDocuments } from "./gold";
import {
  demoDistributions,
  demoTransactions,
  partnerActivity,
} from "./activity";

/** Aggregated customer dashboard payload — all fictional. */
export function getCustomerDashboardData(userId = defaultCustomer.id) {
  const wallet = getWallet(userId);
  const holdings = demoGoldHoldings.filter((item) => item.userId === userId);
  const packageGold = holdings.find((item) => item.id === "gold_pkg_1");
  const custody = demoCustody.find((item) => item.userId === userId);
  const documents = demoDocuments.filter((item) => item.userId === userId);
  const transactions = demoTransactions.filter((item) => item.userId === userId);
  const distributions = demoDistributions.filter(
    (item) => item.userId === userId,
  );

  return {
    user: defaultCustomer,
    wallet,
    packageGold,
    holdings,
    custody,
    documents,
    transactions,
    distributions,
    partnerActivity,
  };
}
