/** Indian currency and gold weight helpers for demo display. */

export function formatInr(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatInrCompact(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatGrams(grams: number): string {
  return `${grams.toLocaleString("en-IN", {
    maximumFractionDigits: 3,
  })} g`;
}
