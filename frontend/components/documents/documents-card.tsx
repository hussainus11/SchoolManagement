"use client";

import { useState } from "react";
import { DownloadIcon, PlusIcon, Trash2Icon } from "lucide-react";
import { toast } from "sonner";

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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { type DocumentOwnerType, useDeleteDocument, useDocuments, useUploadDocument } from "@/hooks/use-documents";
import { ApiError, resolveApiUrl } from "@/lib/api/client";

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

export function DocumentsCard({ ownerType, ownerId }: { ownerType: DocumentOwnerType; ownerId: string }) {
  const { data: documents, isPending } = useDocuments(ownerType, ownerId);
  const deleteDocument = useDeleteDocument();

  function handleDelete(id: string) {
    deleteDocument.mutate(id, {
      onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
    });
  }

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Documents</CardTitle>
        <UploadDocumentDialog ownerType={ownerType} ownerId={ownerId} />
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>File</TableHead>
              <TableHead>Size</TableHead>
              <TableHead>Uploaded by</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {documents?.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell className="font-medium">{doc.title}</TableCell>
                <TableCell className="text-muted-foreground">{doc.fileName}</TableCell>
                <TableCell className="text-muted-foreground">{formatFileSize(doc.fileSize)}</TableCell>
                <TableCell className="text-muted-foreground">
                  {doc.uploadedBy.firstName} {doc.uploadedBy.lastName}
                </TableCell>
                <TableCell className="flex justify-end gap-1">
                  <Button size="icon" variant="ghost" asChild>
                    <a href={resolveApiUrl(doc.fileUrl)} target="_blank" rel="noopener noreferrer" aria-label={`Download ${doc.title}`}>
                      <DownloadIcon className="size-4" />
                    </a>
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    onClick={() => handleDelete(doc.id)}
                    aria-label={`Delete ${doc.title}`}>
                    <Trash2Icon className="size-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            {!isPending && documents?.length === 0 && (
              <TableRow>
                <TableCell colSpan={5} className="text-muted-foreground h-20 text-center">
                  No documents uploaded yet.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function UploadDocumentDialog({ ownerType, ownerId }: { ownerType: DocumentOwnerType; ownerId: string }) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const uploadDocument = useUploadDocument();

  function handleOpenChange(next: boolean) {
    if (next) {
      setTitle("");
      setFile(null);
    }
    setOpen(next);
  }

  function handleSubmit() {
    if (!title.trim() || !file) {
      toast.error("Enter a title and choose a file");
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      toast.error("File must be smaller than 10MB");
      return;
    }
    uploadDocument.mutate(
      { ownerType, ownerId, title: title.trim(), file },
      {
        onSuccess: () => {
          toast.success("Document uploaded");
          setOpen(false);
        },
        onError: (error) => toast.error(error instanceof ApiError ? error.message : "Something went wrong")
      }
    );
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button size="sm">
          <PlusIcon />
          Upload document
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload document</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label>Title</Label>
            <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Birth certificate" />
          </div>
          <div className="space-y-2">
            <Label>File</Label>
            <Input
              type="file"
              accept="image/jpeg,image/png,image/webp,application/pdf"
              onChange={(e) => setFile(e.target.files?.[0] ?? null)}
            />
            <p className="text-muted-foreground text-xs">JPEG, PNG, WEBP, or PDF, up to 10MB.</p>
          </div>
        </div>
        <DialogFooter>
          <Button onClick={handleSubmit} disabled={uploadDocument.isPending}>
            {uploadDocument.isPending ? "Uploading..." : "Upload"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
