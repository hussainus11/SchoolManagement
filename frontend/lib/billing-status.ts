export interface BillingRecord {
  id: string;
  schoolId: string;
  amount: string | null;
  note: string | null;
  periodStart: string;
  periodEnd: string;
  recordedById: string;
  createdAt: string;
  recordedBy: { firstName: string; lastName: string; email: string };
}

export type BillingStatus = "no_trial" | "expired" | "trial" | "active";

export function billingStatus(input: { nextBillingDate: string | null; billingRecordsCount: number }): BillingStatus {
  if (!input.nextBillingDate) return "no_trial";
  if (new Date(input.nextBillingDate) < new Date()) return "expired";
  if (input.billingRecordsCount === 0) return "trial";
  return "active";
}

export const BILLING_STATUS_LABEL: Record<BillingStatus, string> = {
  no_trial: "No trial set",
  expired: "Expired",
  trial: "Trial",
  active: "Active"
};

export const BILLING_STATUS_VARIANT: Record<BillingStatus, "default" | "secondary" | "destructive" | "outline"> = {
  no_trial: "outline",
  expired: "destructive",
  trial: "secondary",
  active: "default"
};
