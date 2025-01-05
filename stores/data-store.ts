import { create } from "zustand";

interface PredictionResponse {
  message: string;
  lat: string;
  long: string;
  prediction_labeling: string[];
  prediction_confidance: PredictionConfidence[];
  similarity_score: SimilarityScore[];
  bounding_boxes: string[];
  original_image: string;
}

interface PredictionConfidence {
  [key: string]: number[][];
}

interface SimilarityScore {
  [key: string]: {
    [label: string]: number;
  };
}

interface DataStore {
  data: PredictionResponse;
  setData: (data: PredictionResponse) => void;
}

export const useData = create<DataStore>((set) => ({
  data: {
    message: "",
    lat: "",
    long: "",
    prediction_labeling: [],
    prediction_confidance: [],
    similarity_score: [],
    bounding_boxes: [],
    original_image: "",
  },
  setData: (data) => set({ data }),
}));
