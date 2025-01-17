import { create } from "zustand";

interface PredictionResponse {
  message: string;
  confidence_scores: string[];
  predicted_labels: string[];
  transcription: string;
}

interface DataStore {
  data: PredictionResponse;
  setData: (data: PredictionResponse) => void;
}

export const useData = create<DataStore>((set) => ({
  data: {
    message: "",
    confidence_scores: [],
    predicted_labels: [],
    transcription: "",
  },
  setData: (data) => set({ data }),
}));
