import { create } from "zustand";

interface AudioUrlStore {
  url: string;
  setUrl: (url: string) => void;
}

export const useAudioUrl = create<AudioUrlStore>((set) => ({
  url: "",
  setUrl: (url: string) => set(() => ({ url })),
}));
