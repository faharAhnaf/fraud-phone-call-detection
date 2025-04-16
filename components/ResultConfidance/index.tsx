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
              <HeaderTwo>Nilai Akurasi</HeaderTwo>
            </div>
            <div className="space-y-2 w-full p-4">
              {data.confidence_scores.map((score, i) => {
                let key = "";
                // const score = score;
                switch (i) {
                  case 0:
                    key = "Penipuan Pinjaman Online Ilegal :";
                    break;
                  case 1:
                    key = "Penipuan Berkedok Krisis Keluarga :";
                    break;
                  case 2:
                    key = "Penipuan Investasi Ilegal :";
                    break;
                  case 3:
                    key = "Penipuan Jual Beli (Barang/Jasa) :";
                    break;
                  case 4:
                    key = "Penipuan Berkedok Hadiah :";
                    break;
                  case 5:
                    key = "Non Phising :";
                    break;
                }
                return (
                  <div key={i}>
                    <div className="flex items-center justify-between">
                      <p className="font-medium">
                        {key}{" "}
                        <span className="font-bold">
                          {score.replace(".", ",")}
                        </span>
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
          <HeaderTwo>Tidak Ada Hasil Nilai Akurasi</HeaderTwo>
        </div>
      )}
    </>
  );
}
