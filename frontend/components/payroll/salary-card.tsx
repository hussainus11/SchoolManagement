"use client";

import { useState } from "react";
import Link from "next/link";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from "@/components/ui/dialog";
import { DatePicker } from "@/components/date-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useCreateSalaryStructure, useSalaryStructures } from "@/hooks/use-payroll";
import { useGeneratePayslipForUser } from "@/hooks/use-payroll";
import { ApiError } from "@/lib/api/client";

function currentMonth() {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}`;
}

export function SalaryCard({ userId }: { userId: string }) {
  const { data: structures, isPending } = useSalaryStructures(userId);
  const generatePayslip = useGeneratePayslipForUser();
  const active = structures?.find((s) => s.isActive);

  function handleGeneratePayslip() {
    generatePayslip.mutate(
      { userId, month: currentMonth() },
      {
        onSuccess: () => toast.success(`Payslip generated for ${currentMonth()}`),
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
      }
    );
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Salary</CardTitle>
        <div className="flex gap-2">
          {active && (
            <Button size="sm" variant="outline" onClick={handleGeneratePayslip} disabled={generatePayslip.isPending}>
              Generate this month&apos;s payslip
            </Button>
          )}
          <SetSalaryDialog userId={userId} />
        </div>
      </CardHeader>
      <CardContent>
        {!isPending && active && (
          <div className="mb-4 grid grid-cols-3 gap-4 text-sm">
            <div>
              <div className="text-muted-foreground">Basic salary</div>
              <div className="font-medium">{Number(active.basicSalary).toFixed(2)}</div>
            </div>
            <div>
              <div className="text-muted-foreground">Allowances</div>
              <div className="font-medium">{Number(active.allowances).toFixed(2)}</div>
            </div>
            <div>
              <div className="text-muted-foreground">Fixed deductions</div>
              <div className="font-medium">{Number(active.fixedDeductions).toFixed(2)}</div>
            </div>
          </div>
        )}
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Basic</TableHead>
              <TableHead>Allowances</TableHead>
              <TableHead>Effective from</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {structures?.map((s) => (
              <TableRow key={s.id}>
                <TableCell>{Number(s.basicSalary).toFixed(2)}</TableCell>
                <TableCell>{Number(s.allowances).toFixed(2)}</TableCell>
                <TableCell>{new Date(s.effectiveFrom).toLocaleDateString()}</TableCell>
                <TableCell>
                  <Badge variant={s.isActive ? "default" : "secondary"}>
                    {s.isActive ? "Active" : "Superseded"}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
            {structures?.length === 0 && (
              <TableRow>
                <TableCell colSpan={4} className="text-muted-foreground h-20 text-center">
                  No salary structure set.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <p className="text-muted-foreground mt-3 text-sm">
          <Link href="/schoolmanagement/payroll" className="underline">
            View all payslips
          </Link>
        </p>
      </CardContent>
    </Card>
  );
}

function SetSalaryDialog({ userId }: { userId: string }) {
  const [open, setOpen] = useState(false);
  const [basicSalary, setBasicSalary] = useState("");
  const [allowances, setAllowances] = useState("0");
  const [fixedDeductions, setFixedDeductions] = useState("0");
  const [effectiveFrom, setEffectiveFrom] = useState<Date | undefined>(new Date());
  const createSalaryStructure = useCreateSalaryStructure();

  function handleOpenChange(next: boolean) {
    setOpen(next);
    if (next) {
      setBasicSalary("");
      setAllowances("0");
      setFixedDeductions("0");
      setEffectiveFrom(new Date());
    }
  }

  function handleSubmit() {
    const basic = Number(basicSalary);
    if (!basic || basic <= 0 || !effectiveFrom) {
      toast.error("Enter a valid basic salary and effective date");
      return;
    }
    createSalaryStructure.mutate(
      {
        userId,
        basicSalary: basic,
        allowances: Number(allowances) || 0,
        fixedDeductions: Number(fixedDeductions) || 0,
        effectiveFrom: effectiveFrom.toISOString()
      },
      {
        onSuccess: () => {
          toast.success("Salary structure updated");
          setOpen(false);
        },
        onError: (error) => {
          toast.error(error instanceof ApiError ? error.message : "Something went wrong");
        }
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="sm">Set salary</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Set salary structure</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Basic salary</Label>
              <Input
                type="number"
                step="0.01"
                min="0"
                value={basicSalary}
                onChange={(e) => setBasicSalary(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Allowances</Label>
              <Input
                type="number"
                step="0.01"
                min="0"
                value={allowances}
                onChange={(e) => setAllowances(e.target.value)}
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Fixed deductions</Label>
              <Input
                type="number"
                step="0.01"
                min="0"
                value={fixedDeductions}
                onChange={(e) => setFixedDeductions(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label>Effective from</Label>
              <DatePicker value={effectiveFrom} onChange={setEffectiveFrom} />
            </div>
          </div>
          <p className="text-muted-foreground text-sm">
            This replaces any currently active salary structure for this person.
          </p>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} disabled={createSalaryStructure.isPending}>
            {createSalaryStructure.isPending ? "Saving..." : "Save"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
