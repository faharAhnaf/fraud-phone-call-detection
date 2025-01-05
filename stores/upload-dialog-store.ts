import { create } from "zustand";

interface UploadDialogStore {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
}

export const useUploadDialog = create<UploadDialogStore>((set) => ({
  open: false,
  setOpen: (open) => set({ open }),
}));
