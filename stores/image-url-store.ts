import { create } from "zustand";

interface ImageUrlStore {
  url: string;
  setUrl: (url: string) => void;
}

export const useImageUrl = create<ImageUrlStore>((set) => ({
  url: "",
  setUrl: (url: string) => set(() => ({ url })),
}));
