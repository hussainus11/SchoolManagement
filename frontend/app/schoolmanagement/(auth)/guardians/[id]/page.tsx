"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ColumnDef } from "@tanstack/react-table";
import { PlusIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { BackButton } from "@/components/back-button";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DataTable } from "@/components/data-table";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import type { Invoice, InvoiceStatus } from "@/hooks/use-invoices";
import {
  type GuardianDiscount,
  useCreateGuardianDiscount,
  useDeactivateGuardianDiscount,
  useGuardianLedger
} from "@/hooks/use-guardians";
import { ApiError } from "@/lib/api/client";

const STATUS_VARIANT: Record<InvoiceStatus, "default" | "secondary" | "destructive" | "outline"> = {
  PENDING: "secondary",
  PARTIALLY_PAID: "outline",
  PAID: "default",
  OVERDUE: "destructive",
  CANCELLED: "destructive"
};

export default function GuardianLedgerPage() {
  const params = useParams<{ id: string }>();
  const { data: ledger, isPending } = useGuardianLedger(params.id);

  const columns: ColumnDef<Invoice>[] = useMemo(
    () => [
      {
        id: "invoiceNumber",
        header: "Invoice #",
        cell: ({ row }) => (
          <Link href={`/schoolmanagement/fees/${row.original.id}`} className="hover:underline">
            {row.original.invoiceNumber}
          </Link>
        )
      },
      {
        id: "student",
        header: "Child",
        cell: ({ row }) => `${row.original.student.firstName} ${row.original.student.lastName}`
      },
      { accessorKey: "period", header: "Period" },
      { id: "total", header: "Total", cell: ({ row }) => Number(row.original.total).toFixed(2) },
      { id: "paid", header: "Paid", cell: ({ row }) => Number(row.original.amountPaid).toFixed(2) },
      {
        id: "status",
        header: "Status",
        cell: ({ row }) => <Badge variant={STATUS_VARIANT[row.original.status]}>{row.original.status}</Badge>
      }
    ],
    []
  );

  if (isPending) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-10 w-64" />
        <Skeleton className="h-40" />
      </div>
    );
  }

  if (!ledger) {
    return <p className="text-muted-foreground">Guardian not found.</p>;
  }

  const { guardian, children, discounts, invoices, totals } = ledger;

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <BackButton href="/schoolmanagement/guardians" />
        <div>
          <h1 className="text-2xl font-bold tracking-tight">
            {guardian.firstName} {guardian.lastName}
          </h1>
          <p className="text-muted-foreground">
            {guardian.email ?? guardian.phone ?? "No contact info"} &middot; {children.length} child
            {children.length === 1 ? "" : "ren"}
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">Total billed</CardTitle>
          </CardHeader>
          <CardContent className="text-lg font-semibold">{totals.billed.toFixed(2)}</CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">Total paid</CardTitle>
          </CardHeader>
          <CardContent className="text-lg font-semibold">{totals.paid.toFixed(2)}</CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">Total discount</CardTitle>
          </CardHeader>
          <CardContent className="text-lg font-semibold">{totals.discount.toFixed(2)}</CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-muted-foreground text-sm font-medium">Balance due</CardTitle>
          </CardHeader>
          <CardContent className="text-lg font-semibold">{totals.due.toFixed(2)}</CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Children</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Admission #</TableHead>
                <TableHead>Class / Section</TableHead>
                <TableHead>Relation</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {children.map((child) => (
                <TableRow key={child.studentId}>
                  <TableCell className="font-medium">
                    <Link href={`/schoolmanagement/students/${child.studentId}`} className="hover:underline">
                      {child.student.firstName} {child.student.lastName}
                    </Link>
                  </TableCell>
                  <TableCell>{child.student.admissionNumber}</TableCell>
                  <TableCell>
                    {child.student.section
                      ? `${child.student.section.class.name} - ${child.student.section.name}`
                      : "Unassigned"}
                  </TableCell>
                  <TableCell>
                    {child.relation}
                    {child.isPrimary && (
                      <Badge variant="secondary" className="ml-2 font-normal">
                        Primary
                      </Badge>
                    )}
                  </TableCell>
                </TableRow>
              ))}
              {children.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-muted-foreground h-20 text-center">
                    No children linked to this guardian.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Family discount</CardTitle>
            <p className="text-muted-foreground text-sm">
              Applies to every child linked to this guardian, on top of any per-student discount.
            </p>
          </div>
          <CreateGuardianDiscountDialog guardianId={guardian.id} />
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Scope</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Value</TableHead>
                <TableHead>Reason</TableHead>
                <TableHead>Status</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {discounts.map((d) => (
                <DiscountRow key={d.id} discount={d} />
              ))}
              {discounts.length === 0 && (
                <TableRow>
                  <TableCell colSpan={6} className="text-muted-foreground h-20 text-center">
                    No family discount set.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Invoices</h2>
        <DataTable columns={columns} data={invoices} isLoading={false} emptyMessage="No invoices yet." />
      </div>
    </div>
  );
}

function DiscountRow({ discount }: { discount: GuardianDiscount }) {
  const deactivateDiscount = useDeactivateGuardianDiscount();

  return (
    <TableRow>
      <TableCell>{discount.feeHead?.name ?? "All fee heads"}</TableCell>
      <TableCell>{discount.type}</TableCell>
      <TableCell>
        {Number(discount.value).toFixed(2)}
        {discount.type === "PERCENTAGE" ? "%" : ""}
      </TableCell>
      <TableCell>{discount.reason ?? "—"}</TableCell>
      <TableCell>
        <Badge variant={discount.isActive ? "default" : "secondary"}>
          {discount.isActive ? "Active" : "Inactive"}
        </Badge>
      </TableCell>
      <TableCell className="text-right">
        {discount.isActive && (
          <Button
            size="sm"
            variant="ghost"
            onClick={() =>
              deactivateDiscount.mutate(discount.id, {
                onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
              })
            }>
            Deactivate
          </Button>
        )}
      </TableCell>
    </TableRow>
  );
}

const discountFormSchema = z.object({
  type: z.enum(["PERCENTAGE", "FIXED"]),
  value: z.coerce.number().positive("Value must be positive"),
  reason: z.string().max(300).optional()
});
type DiscountFormValues = z.infer<typeof discountFormSchema>;

function CreateGuardianDiscountDialog({ guardianId }: { guardianId: string }) {
  const [open, setOpen] = useState(false);
  const createDiscount = useCreateGuardianDiscount();

  const form = useForm<DiscountFormValues>({
    resolver: zodResolver(discountFormSchema),
    defaultValues: { type: "PERCENTAGE", value: 0, reason: "" }
  });

  function onSubmit(values: DiscountFormValues) {
    createDiscount.mutate(
      { guardianId, type: values.type, value: values.value, reason: values.reason || undefined },
      {
        onSuccess: () => {
          toast.success("Family discount added");
          form.reset();
          setOpen(false);
        },
        onError: (error) => {
          toast.error(error instanceof ApiError ? error.message : "Something went wrong");
        }
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <PlusIcon />
          Add family discount
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add family discount</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="type"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Type</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="PERCENTAGE">Percentage</SelectItem>
                        <SelectItem value="FIXED">Fixed amount</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="value"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Value</FormLabel>
                    <FormControl>
                      <Input type="number" step="0.01" min="0" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="reason"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Reason (optional)</FormLabel>
                  <FormControl>
                    <Input placeholder="Collective sibling discount" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <p className="text-muted-foreground text-sm">
              Applied to every child linked to this guardian starting with their next generated invoice —
              existing invoices aren&apos;t retroactively changed.
            </p>
            <DialogFooter>
              <Button type="submit" disabled={createDiscount.isPending}>
                {createDiscount.isPending ? "Adding..." : "Add discount"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
