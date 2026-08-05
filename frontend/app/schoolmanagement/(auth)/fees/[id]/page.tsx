"use client";

import { useParams } from "next/navigation";
import { format } from "date-fns";
import { PrinterIcon } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { PrintHeader } from "@/components/print-header";
import { useInvoice } from "@/hooks/use-invoices";
import { RecordPaymentDialog } from "./record-payment-dialog";

export default function InvoiceDetailPage() {
  const params = useParams<{ id: string }>();
  const { data: invoice, isPending } = useInvoice(params.id);

  if (isPending) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-40" />
      </div>
    );
  }

  if (!invoice) return null;

  const outstanding = Number(invoice.total) - Number(invoice.amountPaid);

  return (
    <div className="space-y-6">
      <PrintHeader title="INVOICE" subtitle={invoice.invoiceNumber} />

      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">{invoice.invoiceNumber}</h1>
          <p className="text-muted-foreground">
            {invoice.student.firstName} {invoice.student.lastName} &middot; {invoice.period}
          </p>
        </div>
        <div className="flex gap-2 print:hidden">
          <Button variant="outline" onClick={() => window.print()}>
            <PrinterIcon />
            Print
          </Button>
          <RecordPaymentDialog invoiceId={invoice.id} outstanding={outstanding} />
        </div>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Summary</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-2 gap-4 text-sm md:grid-cols-4">
          <div>
            <div className="text-muted-foreground">Status</div>
            <Badge>{invoice.status}</Badge>
          </div>
          <div>
            <div className="text-muted-foreground">Issue date</div>
            <div>{format(new Date(invoice.issueDate), "PPP")}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Due date</div>
            <div>{format(new Date(invoice.dueDate), "PPP")}</div>
          </div>
          <div>
            <div className="text-muted-foreground">Outstanding</div>
            <div className="font-semibold">{outstanding.toFixed(2)}</div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Line items</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Fee head</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Discount</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoice.items.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.feeHead.name}</TableCell>
                  <TableCell>{Number(item.amount).toFixed(2)}</TableCell>
                  <TableCell>{Number(item.discount).toFixed(2)}</TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell className="font-semibold">Subtotal</TableCell>
                <TableCell className="font-semibold">{Number(invoice.subtotal).toFixed(2)}</TableCell>
                <TableCell className="font-semibold">{Number(invoice.discountTotal).toFixed(2)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-semibold">Total</TableCell>
                <TableCell colSpan={2} className="font-semibold">
                  {Number(invoice.total).toFixed(2)}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Payments</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Amount</TableHead>
                <TableHead>Method</TableHead>
                <TableHead>Reference</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invoice.payments?.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>{format(new Date(payment.paidAt), "PPP")}</TableCell>
                  <TableCell>{Number(payment.amount).toFixed(2)}</TableCell>
                  <TableCell>{payment.method}</TableCell>
                  <TableCell>{payment.reference ?? "—"}</TableCell>
                </TableRow>
              ))}
              {(!invoice.payments || invoice.payments.length === 0) && (
                <TableRow>
                  <TableCell colSpan={4} className="text-muted-foreground h-20 text-center">
                    No payments recorded yet.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
