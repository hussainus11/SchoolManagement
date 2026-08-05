"use client";

import { useParams } from "next/navigation";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PrintHeader } from "@/components/print-header";
import { Skeleton } from "@/components/ui/skeleton";
import { useFinalizePayslip, useMarkPayslipPaid, usePayslip } from "@/hooks/use-payroll";
import { ApiError } from "@/lib/api/client";

export default function PayslipDetailPage() {
  const params = useParams<{ id: string }>();
  const { data: payslip, isPending } = usePayslip(params.id);
  const finalize = useFinalizePayslip();
  const markPaid = useMarkPayslipPaid();

  if (isPending) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-64" />
      </div>
    );
  }

  if (!payslip) return null;

  return (
    <div className="space-y-6 print:space-y-4">
      <PrintHeader title="PAYSLIP" subtitle={payslip.month} />

      <div className="flex items-center justify-between print:hidden">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {payslip.user.firstName} {payslip.user.lastName}
          </h1>
          <p className="text-muted-foreground">Payslip for {payslip.month}</p>
        </div>
        <div className="flex gap-2">
          {payslip.status === "DRAFT" && (
            <Button
              variant="outline"
              onClick={() =>
                finalize.mutate(payslip.id, {
                  onError: (error) =>
                    toast.error(error instanceof ApiError ? error.message : "Something went wrong")
                })
              }
              disabled={finalize.isPending}>
              Finalize
            </Button>
          )}
          {payslip.status === "FINALIZED" && (
            <Button
              onClick={() =>
                markPaid.mutate(payslip.id, {
                  onError: (error) =>
                    toast.error(error instanceof ApiError ? error.message : "Something went wrong")
                })
              }
              disabled={markPaid.isPending}>
              Mark paid
            </Button>
          )}
          <Button variant="outline" onClick={() => window.print()}>
            Print
          </Button>
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>
            Payslip &mdash; {payslip.month} <Badge className="ml-2">{payslip.status}</Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-1 text-sm">
          <p className="mb-4">
            <span className="font-medium">
              {payslip.user.firstName} {payslip.user.lastName}
            </span>{" "}
            &middot; {payslip.user.email}
          </p>
          <div className="divide-border divide-y">
            <Row label="Basic salary" value={payslip.basicSalary} />
            <Row label="Allowances" value={payslip.allowances} sign="+" />
            <Row label="Attendance deduction" value={payslip.attendanceDeduction} sign="-" />
            <Row label="Other deductions" value={payslip.otherDeductions} sign="-" />
            <div className="flex justify-between py-2 text-base font-semibold">
              <span>Net salary</span>
              <span>{Number(payslip.netSalary).toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function Row({ label, value, sign }: { label: string; value: string; sign?: "+" | "-" }) {
  return (
    <div className="flex justify-between py-2">
      <span className="text-muted-foreground">{label}</span>
      <span>
        {sign ?? ""}
        {Number(value).toFixed(2)}
      </span>
    </div>
  );
}
