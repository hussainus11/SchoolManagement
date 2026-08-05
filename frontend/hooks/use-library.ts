"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiFetch } from "@/lib/api/client";
import type { Student } from "./use-students";
import type { Teacher } from "./use-teachers";

export type BookIssueStatus = "ISSUED" | "RETURNED" | "LOST";

export interface Book {
  id: string;
  schoolId: string;
  title: string;
  author: string | null;
  isbn: string | null;
  category: string | null;
  totalCopies: number;
  availableCopies: number;
}

export interface BookIssue {
  id: string;
  schoolId: string;
  bookId: string;
  studentId: string | null;
  teacherId: string | null;
  issueDate: string;
  dueDate: string;
  returnDate: string | null;
  status: BookIssueStatus;
  fineAmount: string | null;
  book: Book;
  student: Student | null;
  teacher: Teacher | null;
}

export function useBooks(search?: string) {
  return useQuery({
    queryKey: ["books", { search }],
    queryFn: () => apiFetch<Book[]>(`/library/books${search ? `?search=${search}` : ""}`)
  });
}

export function useCreateBook() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { title: string; author?: string; isbn?: string; category?: string; totalCopies: number }) =>
      apiFetch<Book>("/library/books", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["books"] })
  });
}

export function useDeleteBook() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => apiFetch(`/library/books/${id}`, { method: "DELETE" }),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["books"] })
  });
}

export function useBookIssues(filters: { status?: BookIssueStatus; studentId?: string; teacherId?: string } = {}) {
  const params = new URLSearchParams();
  if (filters.status) params.set("status", filters.status);
  if (filters.studentId) params.set("studentId", filters.studentId);
  if (filters.teacherId) params.set("teacherId", filters.teacherId);
  const qs = params.toString();

  return useQuery({
    queryKey: ["book-issues", filters],
    queryFn: () => apiFetch<BookIssue[]>(`/library/issues${qs ? `?${qs}` : ""}`)
  });
}

export function useIssueBook() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (input: { bookId: string; studentId?: string; teacherId?: string; dueDate: string }) =>
      apiFetch<BookIssue>("/library/issues", { method: "POST", body: JSON.stringify(input) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["book-issues"] });
      queryClient.invalidateQueries({ queryKey: ["books"] });
    }
  });
}

export function useReturnBook() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, fineAmount }: { id: string; fineAmount?: number }) =>
      apiFetch<BookIssue>(`/library/issues/${id}/return`, { method: "PATCH", body: JSON.stringify({ fineAmount }) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["book-issues"] });
      queryClient.invalidateQueries({ queryKey: ["books"] });
    }
  });
}

export function useMarkBookLost() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, fineAmount }: { id: string; fineAmount?: number }) =>
      apiFetch<BookIssue>(`/library/issues/${id}/lost`, { method: "PATCH", body: JSON.stringify({ fineAmount }) }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["book-issues"] });
      queryClient.invalidateQueries({ queryKey: ["books"] });
    }
  });
}
