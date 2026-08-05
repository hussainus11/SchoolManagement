import { create } from "zustand";

interface BranchFilterState {
  /** null = "All branches" (the default). */
  selectedBranchId: string | null;
  setSelectedBranchId: (branchId: string | null) => void;
}

export const useBranchFilterStore = create<BranchFilterState>((set) => ({
  selectedBranchId: null,
  setSelectedBranchId: (branchId) => set({ selectedBranchId: branchId })
}));
