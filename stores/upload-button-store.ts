import { create } from "zustand";

interface UploadButtonStore {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export const useUploadButton = create<UploadButtonStore>((set) => ({
  open: true,
  setOpen: (open: boolean) => set({ open }),
}));
