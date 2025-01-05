import { create } from "zustand";

interface LoadingApiStore {
  loading: boolean;
  setLoading: (loading: boolean) => void;
}

export const useLoadingApi = create<LoadingApiStore>((set) => ({
  loading: true,
  setLoading: (loading: boolean) => set({ loading }),
}));
