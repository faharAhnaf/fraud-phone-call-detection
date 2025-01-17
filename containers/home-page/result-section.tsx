"use client";

import { useLoadingApi } from "@/stores/loading-api-store";
import PredictionResult from "@/components/ResultPrediction";
import ConfidanceResult from "@/components/ResultConfidance";
import TranscriptionResult from "@/components/ResultTranscription";
// import { useAudio } from "@/stores/audio-store";

export default function ResultSection() {
  const { loading } = useLoadingApi();
  // const { audio } = useAudio();
  return (
    <>
      {!loading && (
        <>
          <section className="pt-10 grid lg:grid-cols-2 mb-20 gap-5 m-5">
            {[
              {
                title: "Label Prediksi",
                section: <PredictionResult />,
                span: "col-span-1",
              },
              {
                title: "Nilai Kepercayaan",
                section: <ConfidanceResult />,
                span: "col-span-1",
              },
              {
                title: "Transkripsi Percakapan",
                section: <TranscriptionResult />,
                span: "col-span-2",
              },
            ].map((item, index) => (
              <span key={index} className={`space-y-5 lg:my-0 ${item.span} `}>
                <div>{item.section}</div>
              </span>
            ))}
          </section>
        </>
      )}
    </>
  );
}
