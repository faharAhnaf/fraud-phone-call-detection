import { create } from "zustand";

interface ImageStore {
  image: boolean;
  setImage: (image: boolean) => void;
}

export const useImage = create<ImageStore>((set) => ({
  image: false,
  setImage: (image) => set({ image }),
}));
