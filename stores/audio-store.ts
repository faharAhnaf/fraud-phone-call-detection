import { create } from "zustand";

interface AudioStore {
  audio: boolean;
  setAudio: (audio: boolean) => void;
}

export const useAudio = create<AudioStore>((set) => ({
  audio: false,
  setAudio: (audio) => set({ audio }),
}));
