import { create } from "zustand";

interface PortalState {
  selectedStudentId: string | null;
  setSelectedStudentId: (id: string) => void;
}

export const usePortalStore = create<PortalState>((set) => ({
  selectedStudentId: null,
  setSelectedStudentId: (id) => set({ selectedStudentId: id })
}));
