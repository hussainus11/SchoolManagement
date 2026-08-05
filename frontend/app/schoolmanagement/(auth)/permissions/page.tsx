"use client";

import { useEffect, useMemo, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { PlusIcon, Trash2Icon } from "lucide-react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
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
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import {
  type CustomRole,
  useCreateCustomRole,
  useCustomRoles,
  useDeleteCustomRole,
  useResourceCatalog,
  useUpdateCustomRole
} from "@/hooks/use-custom-roles";
import { ApiError } from "@/lib/api/client";

export default function PermissionsPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Permissions</h1>
        <p className="text-muted-foreground">
          Create roles like Peon, Accountant, or Sweeper, and control which parts of the app each one can
          access.
        </p>
      </div>
      <Tabs defaultValue="permissions">
        <TabsList>
          <TabsTrigger value="permissions">Permissions</TabsTrigger>
          <TabsTrigger value="roles">Roles</TabsTrigger>
        </TabsList>
        <TabsContent value="permissions">
          <PermissionsTab />
        </TabsContent>
        <TabsContent value="roles">
          <RolesTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}

function PermissionsTab() {
  const { data: roles, isPending: rolesPending } = useCustomRoles();
  const { data: catalog, isPending: catalogPending } = useResourceCatalog();
  const updateRole = useUpdateCustomRole();

  const [selectedRoleId, setSelectedRoleId] = useState<string>("");
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const selectedRole = useMemo(
    () => roles?.find((r) => r.id === selectedRoleId),
    [roles, selectedRoleId]
  );

  useEffect(() => {
    if (!selectedRoleId && roles && roles.length > 0) {
      setSelectedRoleId(roles[0].id);
    }
  }, [roles, selectedRoleId]);

  useEffect(() => {
    setSelected(new Set(selectedRole?.permissions.map((p) => p.resource) ?? []));
  }, [selectedRole]);

  const groups = useMemo(() => {
    const byGroup = new Map<string, { key: string; label: string }[]>();
    for (const item of catalog ?? []) {
      const list = byGroup.get(item.group) ?? [];
      list.push({ key: item.key, label: item.label });
      byGroup.set(item.group, list);
    }
    return Array.from(byGroup.entries());
  }, [catalog]);

  function toggle(key: string) {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }

  function handleSave() {
    if (!selectedRole) return;
    updateRole.mutate(
      { id: selectedRole.id, permissions: Array.from(selected) },
      {
        onSuccess: () => toast.success(`Permissions saved for ${selectedRole.name}`),
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
      }
    );
  }

  if (rolesPending || catalogPending) {
    return (
      <Card className="mt-4">
        <CardContent className="space-y-2 pt-6">
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
          <Skeleton className="h-9 w-full" />
        </CardContent>
      </Card>
    );
  }

  if (!roles || roles.length === 0) {
    return (
      <Card className="mt-4">
        <CardContent className="text-muted-foreground pt-6 text-sm">
          No roles yet. Create one on the Roles tab, then come back here to grant it access to specific
          menus.
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="mt-4 space-y-4">
      <Card>
        <CardContent className="flex flex-wrap items-center gap-4 pt-6">
          <div className="min-w-64">
            <Select value={selectedRoleId} onValueChange={setSelectedRoleId}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                {roles.map((role) => (
                  <SelectItem key={role.id} value={role.id}>
                    {role.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {selectedRole && (
            <Badge variant={selectedRole.allowLogin ? "default" : "secondary"}>
              {selectedRole.allowLogin ? "Login allowed" : "Login disabled"}
            </Badge>
          )}
          <div className="ml-auto flex gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setSelected(new Set((catalog ?? []).map((c) => c.key)))}>
              Select all
            </Button>
            <Button type="button" variant="outline" size="sm" onClick={() => setSelected(new Set())}>
              Clear all
            </Button>
            <Button size="sm" onClick={handleSave} disabled={updateRole.isPending}>
              {updateRole.isPending ? "Saving..." : "Save changes"}
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {groups.map(([group, items]) => (
          <Card key={group}>
            <CardHeader>
              <CardTitle className="text-sm font-medium">{group}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {items.map((item) => (
                <label key={item.key} className="flex cursor-pointer items-center gap-2 text-sm">
                  <Checkbox checked={selected.has(item.key)} onCheckedChange={() => toggle(item.key)} />
                  {item.label}
                </label>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

const roleFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  allowLogin: z.boolean()
});
type RoleFormValues = z.infer<typeof roleFormSchema>;

function RolesTab() {
  const { data: roles, isPending } = useCustomRoles();
  const updateRole = useUpdateCustomRole();
  const deleteRole = useDeleteCustomRole();

  function toggleAllowLogin(role: CustomRole) {
    updateRole.mutate(
      { id: role.id, allowLogin: !role.allowLogin },
      {
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
      }
    );
  }

  function handleDelete(role: CustomRole) {
    deleteRole.mutate(role.id, {
      onSuccess: () => toast.success(`Role "${role.name}" deleted`),
      onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
    });
  }

  return (
    <Card className="mt-4">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Roles</CardTitle>
        <CreateRoleDialog />
      </CardHeader>
      <CardContent>
        {isPending ? (
          <div className="space-y-2">
            <Skeleton className="h-9 w-full" />
            <Skeleton className="h-9 w-full" />
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Allow login</TableHead>
                <TableHead>Assigned</TableHead>
                <TableHead />
              </TableRow>
            </TableHeader>
            <TableBody>
              {roles?.map((role) => (
                <TableRow key={role.id}>
                  <TableCell className="font-medium">{role.name}</TableCell>
                  <TableCell>
                    <Switch checked={role.allowLogin} onCheckedChange={() => toggleAllowLogin(role)} />
                  </TableCell>
                  <TableCell className="text-muted-foreground">
                    {(role._count?.teachers ?? 0) + (role._count?.staff ?? 0)}
                  </TableCell>
                  <TableCell className="text-right">
                    <Button size="icon" variant="ghost" onClick={() => handleDelete(role)}>
                      <Trash2Icon className="text-destructive size-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {roles?.length === 0 && (
                <TableRow>
                  <TableCell colSpan={4} className="text-muted-foreground text-center">
                    No roles yet.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  );
}

function CreateRoleDialog() {
  const [open, setOpen] = useState(false);
  const createRole = useCreateCustomRole();

  const form = useForm<RoleFormValues>({
    resolver: zodResolver(roleFormSchema),
    defaultValues: { name: "", allowLogin: true }
  });

  function onSubmit(values: RoleFormValues) {
    createRole.mutate(values, {
      onSuccess: () => {
        toast.success("Role created");
        form.reset({ name: "", allowLogin: true });
        setOpen(false);
      },
      onError: (error) => {
        toast.error(error instanceof ApiError ? error.message : "Something went wrong");
      }
    });
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">
          <PlusIcon />
          Add role
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add role</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Role name</FormLabel>
                  <FormControl>
                    <Input placeholder="Peon, Accountant, Sweeper..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="allowLogin"
              render={({ field }) => (
                <FormItem className="flex items-center justify-between rounded-md border p-3">
                  <div>
                    <FormLabel>Allow login</FormLabel>
                    <p className="text-muted-foreground text-sm">
                      If off, accounts with this role cannot sign in.
                    </p>
                  </div>
                  <FormControl>
                    <Switch checked={field.value} onCheckedChange={field.onChange} />
                  </FormControl>
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit" disabled={createRole.isPending}>
                {createRole.isPending ? "Creating..." : "Create role"}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
