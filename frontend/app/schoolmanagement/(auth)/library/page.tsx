"use client";

import { useMemo, useState } from "react";
import { format } from "date-fns";
import type { ColumnDef } from "@tanstack/react-table";
import { ArrowRightLeftIcon, BookIcon } from "lucide-react";
import { toast } from "sonner";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/data-table";
import { DataTableRowActions } from "@/components/data-table-row-actions";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  type Book,
  type BookIssue,
  type BookIssueStatus,
  useBookIssues,
  useBooks,
  useDeleteBook,
  useMarkBookLost,
  useReturnBook
} from "@/hooks/use-library";
import { ApiError } from "@/lib/api/client";
import { CreateBookDialog } from "./create-book-dialog";
import { IssueBookDialog } from "./issue-book-dialog";

const STATUS_VARIANT: Record<BookIssueStatus, "default" | "secondary" | "destructive" | "outline"> = {
  ISSUED: "secondary",
  RETURNED: "default",
  LOST: "destructive"
};

function CatalogTab() {
  const { data: books, isPending } = useBooks();
  const deleteBook = useDeleteBook();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  function handleError(error: unknown) {
    toast.error(error instanceof ApiError ? error.message : "Something went wrong");
  }

  function handleDelete(id: string) {
    setDeletingId(id);
    deleteBook.mutate(id, {
      onSuccess: () => toast.success("Book deleted"),
      onError: handleError,
      onSettled: () => setDeletingId(null)
    });
  }

  const columns: ColumnDef<Book>[] = useMemo(
    () => [
      { accessorKey: "title", header: "Title" },
      { id: "author", header: "Author", cell: ({ row }) => row.original.author ?? "-" },
      { id: "category", header: "Category", cell: ({ row }) => row.original.category ?? "-" },
      {
        id: "copies",
        header: "Available / Total",
        cell: ({ row }) => `${row.original.availableCopies} / ${row.original.totalCopies}`
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => (
          <div className="flex justify-end">
            <DataTableRowActions
              onDelete={() => handleDelete(row.original.id)}
              isDeleting={deleteBook.isPending && deletingId === row.original.id}
              deleteTitle="Delete this book?"
              deleteDescription={`This will permanently remove "${row.original.title}" and cannot be undone.`}
            />
          </div>
        )
      }
    ],
    [deleteBook.isPending, deletingId]
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <CreateBookDialog />
      </div>
      <DataTable columns={columns} data={books ?? []} isLoading={isPending} emptyMessage="No books yet." />
    </div>
  );
}

function IssuesTab() {
  const { data: issues, isPending } = useBookIssues();
  const returnBook = useReturnBook();
  const markLost = useMarkBookLost();

  function handleError(error: unknown) {
    toast.error(error instanceof ApiError ? error.message : "Something went wrong");
  }

  const columns: ColumnDef<BookIssue>[] = useMemo(
    () => [
      { id: "book", header: "Book", cell: ({ row }) => row.original.book.title },
      {
        id: "borrower",
        header: "Borrower",
        cell: ({ row }) =>
          row.original.student
            ? `${row.original.student.firstName} ${row.original.student.lastName} (Student)`
            : row.original.teacher
              ? `${row.original.teacher.user.firstName} ${row.original.teacher.user.lastName} (Teacher)`
              : "-"
      },
      { id: "issueDate", header: "Issued", cell: ({ row }) => format(new Date(row.original.issueDate), "PP") },
      { id: "dueDate", header: "Due", cell: ({ row }) => format(new Date(row.original.dueDate), "PP") },
      {
        id: "status",
        header: "Status",
        cell: ({ row }) => <Badge variant={STATUS_VARIANT[row.original.status]}>{row.original.status}</Badge>
      },
      {
        id: "actions",
        header: "",
        cell: ({ row }) => {
          const issue = row.original;
          if (issue.status !== "ISSUED") return null;
          return (
            <div className="flex justify-end gap-2">
              <Button
                size="sm"
                variant="outline"
                onClick={() => returnBook.mutate({ id: issue.id }, { onError: handleError })}>
                Return
              </Button>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => markLost.mutate({ id: issue.id }, { onError: handleError })}>
                Mark lost
              </Button>
            </div>
          );
        }
      }
    ],
    [returnBook, markLost]
  );

  return (
    <div className="space-y-4">
      <div className="flex justify-end">
        <IssueBookDialog />
      </div>
      <DataTable columns={columns} data={issues ?? []} isLoading={isPending} emptyMessage="No book issues yet." />
    </div>
  );
}

export default function LibraryPage() {
  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Library</h1>
        <p className="text-muted-foreground">Manage the book catalog and track issues/returns.</p>
      </div>
      <Tabs defaultValue="catalog">
        <TabsList>
          <TabsTrigger value="catalog">
            <BookIcon />
            Catalog
          </TabsTrigger>
          <TabsTrigger value="issues">
            <ArrowRightLeftIcon />
            Issues
          </TabsTrigger>
        </TabsList>
        <TabsContent value="catalog">
          <CatalogTab />
        </TabsContent>
        <TabsContent value="issues">
          <IssuesTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
