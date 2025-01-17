import { useData } from "@/stores/data-store";
import HeaderTwo from "../core/HeaderTwo";

export default function ConfidanceResult() {
  const { data } = useData();

  return (
    <>
      {data.confidence_scores.length > 0 ? (
        <div className="w-full space-y-3">
          <div className="border rounded-xl shadow flex flex-col items-center">
            <div className="border border-b-2 w-full rounded-t-xl flex items-center justify-center">
              <HeaderTwo>Nilai Kepercayaan</HeaderTwo>
            </div>
            <div className="space-y-2 w-full p-4">
              {data.confidence_scores.map((score, i) => {
                let key = "";
                switch (i) {
                  case 0:
                    key = "Modus Phishing 1 :";
                    break;
                  case 1:
                    key = "Modus Phishing 2 :";
                    break;
                  case 2:
                    key = "Modus Phishing 3 :";
                    break;
                  case 3:
                    key = "Modus Phishing 4 :";
                    break;
                  case 4:
                    key = "Modus Phishing 5 :";
                    break;
                  case 5:
                    key = "Non Phising :";
                    break;
                }
                return (
                  <div key={i}>
                    <div className="flex items-center justify-between">
                      <p className="font-medium">
                        {key} <span className="font-bold">{score}</span>
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <HeaderTwo>Tidak Ada Hasil Nilai Kepercayaan</HeaderTwo>
        </div>
      )}
    </>
  );
}
